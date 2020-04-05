const setLocalStorage = (key, value) => window.localStorage.setItem(key, value);
const getLocalStorage = (key) => window.localStorage.getItem(key);

const gistAdjust = () => {
	document.addEventListener('DOMContentLoaded', (event) => {
		var gistClassElement = document.querySelector('.gist');
		if (gistClassElement) {
			var postArticleTag = gistClassElement.querySelector('article');
			if (postArticleTag)
				postArticleTag.childNodes.forEach((node) => {
					var anchorLinks = node.querySelectorAll('a.anchor');
					console.log(anchorLinks);
					if (anchorLinks.length)
						anchorLinks.forEach((anchorLink) => {
							anchorLink.parentNode.removeChild(anchorLink);
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
	});
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

const loadHighlightTheme = (themes_data) => {
	var themes = liquidToObject(themes_data);
	document.addEventListener('DOMContentLoaded', (event) => {
		var themeCSS = document.createElement('link');
		themeCSS.rel = 'stylesheet';
		themeCSS.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/${themes['light']}.min.css`;
		document.getElementsByTagName('HEAD')[0].appendChild(themeCSS);
		document.querySelectorAll('pre').forEach((block) => {
			hljs.highlightBlock(block);
		});
	});
};

const customMethod = (listingUrls) => {
	const currentPathName = window.location.pathname;
	const RECENT_PATH = 'recent-path';
	const PATH_SCROLL_Y = `${currentPathName}-scroll-y`;
	const RESTORE_SCROLL_ALL = true;
	var a = document.querySelectorAll('.gist_post a');
	var onListingPage = listingUrls.includes(
		currentPathName.replace(/\//gi, '')
	);
	for (var i = 0; i < a.length; i++) {
		a[i].setAttribute('target', '_blank');
	}
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
	hotkeys('alt + enter', () => {
		enterFullScreen();
	});
};
