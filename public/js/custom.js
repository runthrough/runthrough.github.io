const setLocalStorage = (key, value) => window.localStorage.setItem(key, value);
const getLocalStorage = (key) => window.localStorage.getItem(key);
const CURSOR_HIDE_TIME = 1000;
const SCROLL_WAIT_TIME = 300;
const MOUSEMOVE_THRESHOLD = 5;

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
const loadHighlightTheme = (themes_data) => {
	var highlightThemes = liquidToObject(themes_data);
	Object.keys(highlightThemes).forEach((key) => {
		themeCSS[key] = document.createElement('link');
		themeCSS[key].rel = 'stylesheet';
		themeCSS[
			key
		].href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/${highlightThemes[key]}.min.css`;
		themeCSS[key].disabled = true;
		document.getElementsByTagName('head')[0].appendChild(themeCSS[key]);
	});
	themeCSS['light'].disabled = false;
	highlightBlock();
};

const highlightBlock = () => {
	document.querySelectorAll('pre').forEach((block) => {
		hljs.highlightBlock(block);
	});
};

const getSunTheme = () => {
	let date = new Date();
	let times = SunCalc.getTimes(date, 20.6, 78.9);
	if (date.getTime() > times.sunrise.getTime() && date.getTime() < times.sunset.getTime()) {
		return 'light'
	} else {
		return 'dark'
	}
};

const loadTheme = (theme) => {
	if (document.body.classList.contains('dark-theme')) {
		if (theme === 'light') toggleTheme();
	} else {
		if (theme === 'dark') toggleTheme();
	}
};

const toggleTheme = () => {
	document.body.classList.toggle('dark-theme');
	themeCSS['dark'].disabled = !document.body.classList.contains('dark-theme');
	themeCSS['light'].disabled = document.body.classList.contains('dark-theme');
	setLocalStorage(
		'theme',
		document.body.classList.contains('dark-theme') ? 'dark' : 'light'
	);
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
	loadTheme(getLocalStorage('theme') || getSunTheme());
};

const setScrollIndicator = () => {
	var winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	var height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	var scrolled = winScroll == 0 ? 0 : (winScroll / height) * 100;
	handleZeroScroll(scrolled < 0.1 || scrolled > 99.9);
	document.getElementsByClassName('progress-bar')[0].style.width =
		scrolled + '%';
};

const handleZeroScroll = (zero) => {
	if (zero) {
		document.getElementsByClassName(
			'progress-container'
		)[0].style.visibility = 'hidden';
	} else {
		document.getElementsByClassName(
			'progress-container'
		)[0].style.visibility = 'visible';
	}
};

const onListingPage = () =>
	listingURLs.includes(window.location.pathname.replace(/\//gi, ''));

const defineKeyboardShortcuts = () => {
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
	hotkeys('left', () => {
		followClassUrl('post-next');
	});
	hotkeys('right', () => {
		followClassUrl('post-prev');
	});
	hotkeys('enter', () => {
		followClassUrl('post-current');
	});
	hotkeys('backspace', () => {
		window.history.back();
	});
	hotkeys('alt + enter', (event) => {
		event.preventDefault();
		enterFullScreen();
	});
	hotkeys('alt + l', (event) => {
		toggleTheme();
	});
};

let changingScript = false;
const attachOnlicks = () => {
	document.querySelectorAll('a').forEach((link) => {
		if (link.getAttribute('href').startsWith('/')) {
			link.onclick = function () {
				loadURL(link.getAttribute('href'));
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

const loadURL = (url, fromPop = false) => {
	changingScript = true;
	fetch(url)
		.then((data) => data.text())
		.then((html) => {
			var contentDoc = new DOMParser()
				.parseFromString(html, 'text/html')
				.querySelector('.content');
			var innerContent = document.querySelector('.content');
			if (innerContent) innerContent.innerHTML = '';
			postscribe(
				document.querySelector('.content'),
				contentDoc.innerHTML,
				{
					autoFix: false,
					done: () => {
						gistAdjust();
						highlightBlock();
						attachOnlicks();
						if (!fromPop) window.history.pushState('', '', url);
						restoreState();
						setScrollIndicator();
						changingScript = false;
					},
				}
			);
		});
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
