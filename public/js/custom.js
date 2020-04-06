const setLocalStorage = (key, value) => window.localStorage.setItem(key, value);
const getLocalStorage = (key) => window.localStorage.getItem(key);
var themeCSS = {};

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
				node.querySelectorAll('a').forEach((link) => {
					link.setAttribute('target', '_blank');
				});
				gistClassElement.parentNode.appendChild(node);
			});
		var postScriptTag = gistClassElement.parentNode.querySelector(
			'script'
		);
		if (postScriptTag)
			postScriptTag.parentNode.removeChild(postScriptTag);
		var postLinkTag = gistClassElement.parentNode.querySelector('link');
		if (postLinkTag) postLinkTag.parentNode.removeChild(postLinkTag);
		gistClassElement.parentNode.removeChild(gistClassElement);
	}
};

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
	document.querySelectorAll('pre').forEach((block) => {
		hljs.highlightBlock(block);
	});
};

const loadTheme = (theme) => {
	if (document.body.classList.contains('dark-theme')) {
		if (theme === 'light') toggleTheme()
	} else {
		if (theme === 'dark') toggleTheme()
	}
}

const toggleTheme = () => {
	document.body.classList.toggle('dark-theme');
	themeCSS['dark'].disabled = !document.body.classList.contains('dark-theme');
	themeCSS['light'].disabled = document.body.classList.contains('dark-theme');
	setLocalStorage('theme', (document.body.classList.contains('dark-theme') ? 'dark' : 'light'));
};

const restoreState = (listingUrls) => {
	const currentPathName = window.location.pathname;
	const RECENT_PATH = 'recent-path';
	const PATH_SCROLL_Y = `${currentPathName}-scroll-y`;
	const RESTORE_SCROLL_ALL = true;
	var onListingPage = listingUrls.includes(
		currentPathName.replace(/\//gi, '')
	);
	if (getLocalStorage(RECENT_PATH) && getLocalStorage(PATH_SCROLL_Y)) {
		if (
			currentPathName == getLocalStorage(RECENT_PATH) ||
			RESTORE_SCROLL_ALL
		) {
			window.scroll(0, getLocalStorage(PATH_SCROLL_Y).split('|')[1]);
		}
	}
	if (!onListingPage) {
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
			}, 300);
		};
		let scrollTimer = getScrollTimer();
		window.onscroll = function () {
			if (scrollTimer) {
				clearTimeout(scrollTimer);
			}
			scrollTimer = getScrollTimer();
		};
	}
	loadTheme(getLocalStorage('theme') || 'light');
};

const addKeyboardShortcuts = () => {
	const FULL_SCREEN = 'full-screen';
	let wasFullScreen = 'true' == (getLocalStorage(FULL_SCREEN) || 'false');
	const followClassUrl = (className) => {
		window.location.href = document
			.getElementsByClassName(className)[0]
			.getAttribute('href');
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
		}
	};
	document[evt.onChangeMethod] = () => {
		setLocalStorage(FULL_SCREEN, document[evt.element] ? true : false);
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
		if (onListingPage) {
			window.location.href = getLocalStorage(RECENT_PATH);
		}
	});
	hotkeys('alt + enter', (event) => {
		event.preventDefault();
		enterFullScreen();
	});
	hotkeys('alt + l', (event) => {
		toggleTheme();
	});
};
