const setLocalStorage = (key, value) => window.localStorage.setItem(key, value);
const getLocalStorage = (key) => window.localStorage.getItem(key);
const CURSOR_HIDE_TIME = 1000;
const SCROLL_WAIT_TIME = 300;
const MOUSEMOVE_THRESHOLD = 5;
const SCROLL_STEP_LINES = 12;
const PIXELS_PER_LINE_HEIGHT = 20;
const LINE_HEIGHT = 1.9;
const SCROLL_BEHAVIOR = 'smooth';
const CONTENT_DOCS = {};
const DATE_UPDATE_INTERVAL = 1000;

const attachZero = (number) => {
	return number < 0 ? '00' : number <= 9 ? `0${number}` : number;
};

const liquidToObject = (liq) => {
	var obj = {};
	liq.replace(/\{/gi, '')
		.replace(/}/gi, '')
		.replace(/\"/gi, '')
		.split(', ')
		.forEach((l) => {
			obj[l.split('=>')[0]] = l.split('=>')[1];
		});
	return obj;
};

const gistAdjust = () => {
	var gistClassElement = document.querySelector('.gist');
	if (gistClassElement) {
		var postArticleTag = gistClassElement.querySelector('article');
		if (postArticleTag)
			postArticleTag.childNodes.forEach((node) => {
				var anchorLinks = node.querySelectorAll('a.anchor');
				if (anchorLinks.length)
					anchorLinks.forEach((anchorLink) => {
						anchorLink.parentNode.removeChild(anchorLink);
					});
				gistClassElement.parentNode.appendChild(node);
			});
		var postScriptTag = gistClassElement.parentNode.querySelector('script');
		if (postScriptTag) postScriptTag.parentNode.removeChild(postScriptTag);
		var postLinkTag = gistClassElement.parentNode.querySelector('link');
		if (postLinkTag) postLinkTag.parentNode.removeChild(postLinkTag);
		gistClassElement.parentNode.removeChild(gistClassElement);
	}
};

let themeCSS = {};
const loadHighlightTheme = (highlight_styles) => {
	var highlightThemes = liquidToObject(highlight_styles);
	Object.keys(highlightThemes).forEach((key) => {
		themeCSS[key] = document.createElement('link');
		themeCSS[key].rel = 'stylesheet';
		themeCSS[
			key
		].href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/${highlightThemes[key]}.min.css`;
		themeCSS[key].disabled = true;
		document.getElementsByTagName('head')[0].appendChild(themeCSS[key]);
	});
	highlightBlock();
};

const highlightBlock = () => {
	document.querySelectorAll('pre').forEach((block) => {
		hljs.highlightBlock(block);
	});
};

let themes = {};
const loadThemes = (theme_data) => {
	themes = liquidToObject(theme_data);
};

const applySunTheme = () => {
	fetch('https://ipapi.co/json')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			let thm = 'light';
			if (json.latitude && json.longitude) {
				let date = new Date();
				let times = SunCalc.getTimes(
					date,
					json.latitude,
					json.longitude
				);
				if (
					date.getTime() < times.sunrise.getTime() ||
					date.getTime() > times.sunset.getTime()
				) {
					thm = 'dark';
				}
			}
			applyTheme(thm);
		});
};

const applyTheme = (theme) => {
	if (Object.keys(themes).includes(theme)) {
		const bodyClassList = document.body.classList;
		const compTheme = theme === 'light' ? 'dark' : 'light';
		if (bodyClassList.contains(compTheme)) {
			bodyClassList.remove(compTheme);
			bodyClassList.remove(themes[compTheme]);
		}
		bodyClassList.add(theme);
		bodyClassList.add(themes[theme]);
		themeCSS['dark'].disabled = theme === 'light';
		themeCSS['light'].disabled = theme === 'dark';
		setLocalStorage('theme', theme);
	}
};

const setDefaultTheme = (toggle) => {
	const storedTheme = getLocalStorage('theme');
	if (toggle) {
		if (Object.keys(themes).includes(storedTheme)) {
			applyTheme(storedTheme === 'light' ? 'dark' : 'light');
		}
	} else {
		if (Object.keys(themes).includes(storedTheme)) {
			applyTheme(storedTheme);
		} else {
			applySunTheme();
		}
	}
};

let listingURLs;
const RECENT_PATH = 'recent-path';
const restoreState = (runURLs) => {
	if (runURLs) listingURLs = runURLs;
	const currentPathName = window.location.pathname;
	const PATH_SCROLL_Y = `${currentPathName}-scroll-y`;
	const RESTORE_SCROLL_ALL = true;
	if (getLocalStorage(RECENT_PATH) && getLocalStorage(PATH_SCROLL_Y)) {
		if (
			currentPathName == getLocalStorage(RECENT_PATH) ||
			RESTORE_SCROLL_ALL
		) {
			window.scroll(0, getLocalStorage(PATH_SCROLL_Y).split('|')[1]);
		}
	}
	if (!onListingPage()) {
		setLocalStorage(RECENT_PATH, currentPathName);
		const getScrollTimer = () => {
			return setTimeout(() => {
				let newScrollY = window.scrollY;
				if (getLocalStorage(PATH_SCROLL_Y)) {
					newScrollY =
						newScrollY > 0 &&
						newScrollY -
							getLocalStorage(PATH_SCROLL_Y).split('|')[1] ==
							1
							? newScrollY - 1
							: newScrollY;
				}
				setLocalStorage(
					PATH_SCROLL_Y,
					`${currentPathName}|${newScrollY}`
				);
			}, SCROLL_WAIT_TIME);
		};
		let scrollTimer = getScrollTimer();
		window.onscroll = function () {
			if (!changingScript) {
				if (scrollTimer) {
					clearTimeout(scrollTimer);
				}
				scrollTimer = getScrollTimer();
				setScrollIndicator();
			}
		};
	}
	cycleDetails(true);
	setDefaultTheme();
};

const getScrollPercent = () => {
	let winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	return winScroll == 0 ? 0 : (winScroll / height) * 100;
};

const setScrollIndicator = (preScrollPercent) => {
	let scrolled = preScrollPercent;
	if (preScrollPercent === undefined) {
		scrolled = getScrollPercent();
	}
	hideProgressContainer(scrolled < 0.1 || scrolled > 99.9);
	document.getElementsByClassName('progress-bar')[0].style.width =
		scrolled + '%';
	refreshBottomGutterDetails();
};

const hideProgressContainer = (zero) => {
	const progressContainerElement = document.getElementsByClassName(
		'progress-container'
	)[0];
	if (zero) {
		progressContainerElement.style.visibility = 'hidden';
	} else {
		progressContainerElement.style.visibility = 'visible';
	}
};

const showLoadingIndicator = (start) => {
	const progressBarElement = document.getElementsByClassName(
		'progress-bar'
	)[0];
	const PROGRESS_CLASS = 'show-progress';
	if (start) {
		setScrollIndicator(0);
		hideProgressContainer(!start);
		if (!progressBarElement.classList.contains(PROGRESS_CLASS))
			document
				.getElementsByClassName('progress-bar')[0]
				.classList.add(PROGRESS_CLASS);
	} else {
		setScrollIndicator();
		if (progressBarElement.classList.contains(PROGRESS_CLASS))
			progressBarElement.classList.remove(PROGRESS_CLASS);
	}
};

const onListingPage = () =>
	listingURLs
		.concat(['/404'])
		.includes(window.location.pathname.replace(/\//gi, ''));

const defineKeyboardShortcutsAndSwipeGestures = () => {
	const FULL_SCREEN = 'full-screen';
	let wasFullScreen = 'true' == (getLocalStorage(FULL_SCREEN) || 'false');
	const followClassUrl = (className) => {
		loadURL(
			document.getElementsByClassName(className)[0].getAttribute('href')
		);
	};
	const evt = [
		{
			requestMethod: 'webkitRequestFullscreen',
			onChangeMethod: 'onwebkitfullscreenchange',
			element: 'webkitFullscreenElement',
		},
		{
			requestMethod: 'mozRequestFullScreen',
			onChangeMethod: 'onmozfullscreenchange',
			element: 'mozRequestFullScreenElement',
		},
		{
			requestMethod: 'msRequestFullscreen',
			onChangeMethod: 'onmsfullscreenchange',
			element: 'msRequestFullscreenElement',
		},
	].filter((evt) => {
		return document.documentElement[evt.requestMethod];
	})[0] || {
		requestMethod: 'requestFullscreen',
		onChangeMethod: 'onfullscreenchange',
		element: 'fullscreenElement',
	};
	const enterFullScreen = () => {
		if (!document[evt.element]) {
			document.documentElement[evt.requestMethod]();
			showCursor();
		}
	};
	document[evt.onChangeMethod] = () => {
		setLocalStorage(FULL_SCREEN, document[evt.element] ? true : false);
		if (!document[evt.element]) {
			showCursor(false);
		}
	};
	if (wasFullScreen) {
		enterFullScreen();
	}
	defineKeyAndGesture(
		'left, h, a',
		(event) => {
			followClassUrl('post-next');
		},
		{
			gesture: 'Swipe',
			options: {
				event: 'swipeleft',
				direction: Hammer.DIRECTION_RIGHT,
			},
		}
	);
	defineKeyAndGesture(
		'right, l, f',
		(event) => {
			followClassUrl('post-prev');
		},
		{
			gesture: 'Swipe',
			options: {
				event: 'swiperight',
				direction: Hammer.DIRECTION_LEFT,
			},
		}
	);
	defineKeyAndGesture(
		'enter, q',
		(event) => {
			followClassUrl('post-current');
		},
		{
			gesture: 'Tap',
			options: {
				event: 'doubletap',
				taps: 2,
			},
		}
	);
	defineKeyAndGesture('backspace, z', (event) => {
		window.history.back();
	});
	defineKeyAndGesture('alt + enter', (event) => {
		enterFullScreen();
	});
	defineKeyAndGesture(
		'alt + l',
		(event) => {
			setDefaultTheme(true);
		},
		{
			gesture: 'Press',
			options: {
				event: 'press',
				time: 1000,
			},
		}
	);
	defineKeyAndGesture('j, d, down', (event) => {
		window.scrollBy({
			left: 0,
			top: SCROLL_STEP_LINES * LINE_HEIGHT * PIXELS_PER_LINE_HEIGHT,
			behavior: SCROLL_BEHAVIOR,
		});
	});
	defineKeyAndGesture('k, s, up', (event) => {
		window.scrollBy({
			left: 0,
			top: -(SCROLL_STEP_LINES * LINE_HEIGHT * PIXELS_PER_LINE_HEIGHT),
			behavior: SCROLL_BEHAVIOR,
		});
	});
	defineKeyAndGesture('u, e', (event) => {
		window.scroll({ left: 0, top: 0, behavior: SCROLL_BEHAVIOR });
	});
	defineKeyAndGesture('i, w', (event) => {
		window.scroll({
			left: 0,
			top: document.documentElement.scrollHeight,
			behavior: SCROLL_BEHAVIOR,
		});
	});
	defineKeyAndGesture('r', (event) => {
		loadURL(window.location.pathname, true, true);
	});
	defineKeyAndGesture('alt + /', (event) => {
		cycleDetails();
	});
};

let touch;
const defineKeyAndGesture = (key = false, handler, gestureOptions = false) => {
	if (key) {
		hotkeys(key, (event) => {
			event.preventDefault();
			handler(event);
		});
	}
	if (gestureOptions) {
		if (!touch) {
			touch = new Hammer.Manager(document.body);
		}
		touch.add(new Hammer[gestureOptions.gesture](gestureOptions.options));
		touch.on(gestureOptions.options.event, handler);
	}
};

const attachOnlicks = () => {
	document.querySelectorAll('a').forEach((link) => {
		if (link.getAttribute('href').startsWith('/')) {
			link.onclick = function () {
				const href = link.getAttribute('href');
				if (href === '/') {
					window.location.href = '/';
				} else {
					loadURL(href);
				}
				return false;
			};
		} else {
			link.setAttribute('target', '_blank');
		}
	});
	window.onpopstate = (event) => {
		loadURL(event.target.document.location.pathname, true);
	};
};

let changingScript = false;
const loadURL = (url, fromPop = false, isRefresh = false) => {
	if (!changingScript) {
		changingScript = true;
		showLoadingIndicator(true);
		const whenDone = () => {
			gistAdjust();
			highlightBlock();
			attachOnlicks();
			if (!fromPop) {
				document.head.querySelector('title').innerHTML =
					CONTENT_DOCS[url].title;
				window.history.pushState('', '', url);
			}
			restoreState();
			showLoadingIndicator(false);
			changingScript = false;
		};
		const handleContentDoc = () => {
			var innerContent = document.querySelector('.content');
			if (innerContent) innerContent.innerHTML = '';
			if (CONTENT_DOCS[url].fetchedScribedDoc) {
				innerContent.innerHTML = CONTENT_DOCS[url].fetchedScribedDoc;
				whenDone();
			} else {
				var contentDoc = CONTENT_DOCS[url].fetchedContentDoc;
				postscribe(
					document.querySelector('.content'),
					contentDoc.innerHTML,
					{
						autoFix: false,
						done: () => {
							CONTENT_DOCS[url].fetchedScribedDoc =
								innerContent.innerHTML;
							whenDone();
						},
					}
				);
			}
		};
		if (Object.keys(CONTENT_DOCS).includes(url) && !isRefresh) {
			handleContentDoc();
		} else {
			fetch(url)
				.then((data) => data.text())
				.then((html) => {
					var fetchedHTMLDom = new DOMParser().parseFromString(
						html,
						'text/html'
					);
					CONTENT_DOCS[url] = {
						title: fetchedHTMLDom.querySelector('title').innerHTML,
						fetchedContentDoc: fetchedHTMLDom.querySelector(
							'.content'
						),
					};
					handleContentDoc();
				});
		}
	}
};

let cursorTimeout;
const hideCursor = () => {
	return setTimeout(() => {
		if (!document.body.classList.contains('no-cursor')) {
			document.body.classList.add('no-cursor');
			detectCursorMovement();
		}
	}, CURSOR_HIDE_TIME);
};

const detectCursorMovement = () => {
	if (cursorTimeout)
		document.body.onmousemove = (event) => {
			if (
				Math.abs(event.movementX) > MOUSEMOVE_THRESHOLD ||
				Math.abs(event.movementY) > MOUSEMOVE_THRESHOLD
			) {
				clearTimeout(cursorTimeout);
				showCursor();
			}
		};
};

const showCursor = (chain = true) => {
	if (document.body.classList.contains('no-cursor')) {
		document.body.classList.remove('no-cursor');
	}
	if (chain) {
		cursorTimeout = hideCursor();
	} else {
		if (cursorTimeout) {
			clearTimeout(cursorTimeout);
			document.body.onmousemove = null;
		}
	}
};

let detailsInterval;
let detailGenerators = [];
const refreshBottomGutterDetails = (stop = false) => {
	if (detailsInterval) clearInterval(detailsInterval);
	if (!stop && detailGenerators.length > 0) {
		const detailsConstructor = () => {
			let details = '';
			detailGenerators.forEach((detailGenerator) => {
				details += ` | ${detailGenerator()}`;
			});
			document.querySelector(
				'.gutter-details'
			).innerHTML = `${details.slice(4)}`;
		};
		detailsInterval = setInterval(() => {
			detailsConstructor();
		}, DATE_UPDATE_INTERVAL);
		detailsConstructor();
	} else {
		document.querySelector('.gutter-details').innerHTML = '';
	}
};

const cycleDetails = (restoreSaved) => {
	const detailers = [
		() => {
			return `${new Date().toString().slice(15, 21)}`;
		},
		() => {
			return `${attachZero(Math.round(getScrollPercent()))}%`;
		},
		() => {
			const postNumberElement = document.querySelector('.post-current');
			return `${attachZero(
				parseInt(
					listingURLs
						.split('/')
						.indexOf(postNumberElement.pathname.slice(1))
				)
			)}.${postNumberElement.innerHTML}`;
		},
		() => {
			return `${new Date().toString().slice(0, 11)}`;
		},
	];
	if (restoreSaved) {
		const savedDetailers = getLocalStorage('detailers');
		if (savedDetailers) {
			detailGenerators = [];
			for (let i = 0; i < savedDetailers; i++) {
				detailGenerators.push(detailers[i]);
			}
		}
	} else {
		if (detailGenerators.length != detailers.length) {
			detailGenerators.push(detailers[detailGenerators.length]);
		} else {
			detailGenerators = [];
		}
		setLocalStorage('detailers', detailGenerators.length);
	}
	refreshBottomGutterDetails();
};
