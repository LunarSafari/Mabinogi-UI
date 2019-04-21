/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _mabinogiUi = __webpack_require__(1);

	var _mabinogiUi2 = _interopRequireDefault(_mabinogiUi);

	var _npcportrait_marlowe = __webpack_require__(17);

	var _npcportrait_marlowe2 = _interopRequireDefault(_npcportrait_marlowe);

	var _npcportrait_ani_marlowe = __webpack_require__(18);

	var _npcportrait_ani_marlowe2 = _interopRequireDefault(_npcportrait_ani_marlowe);

	var _npcportrait_aeira = __webpack_require__(19);

	var _npcportrait_aeira2 = _interopRequireDefault(_npcportrait_aeira);

	var _npcportrait_ani_aeira = __webpack_require__(20);

	var _npcportrait_ani_aeira2 = _interopRequireDefault(_npcportrait_ani_aeira);

	var _npcportrait_devcat = __webpack_require__(21);

	var _npcportrait_devcat2 = _interopRequireDefault(_npcportrait_devcat);

	var _npcportrait_ani_devcat = __webpack_require__(22);

	var _npcportrait_ani_devcat2 = _interopRequireDefault(_npcportrait_ani_devcat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(23);
	__webpack_require__(33);

	var Dialogue = _mabinogiUi2.default.Dialogue,
	    Media = _mabinogiUi2.default.Media,
	    Diary = _mabinogiUi2.default.Diary,
	    Portrait = _mabinogiUi2.default.Portrait;


	var diary = new Diary(document.querySelector('#diary'));
	diary.setLabelNames(['基础', '中级', '高级', '备忘录']);

	window.Diary = diary;
	diary.setContent([[{ keyword: '交谈', description: '说说私人的故事吧。', callback: function callback(e) {
			return console.log(e);
		} }, { keyword: '附近的消息', description: '打听一下这附近的谣传或其他人物的故事吧。', callback: function callback(e) {
			return e;
		} }, { keyword: '关于技能', description: '可以了解到获得技能的方法及修炼方法。', callback: function callback(e) {
			return e;
		} }, { keyword: '关于兼职', description: '可以获得金币或食物的工作的对话。运气好的话就可以做这些工作了。', callback: function callback(e) {
			return e;
		} }, { keyword: '学习和修炼', description: '在学校学习时与老师的对话。', callback: function callback(e) {
			return e;
		} }], [{ keyword: '杂货店', description: '出售一些日常生活所必需的物品。询问杂货店的位置。' }, { keyword: '治疗所', description: '获得村落里治疗所的相关信息。' }]]);

	var dialogue = new Dialogue(document.querySelector('#dialogue'));
	dialogue.setDiary(diary);
	dialogue.show();
	dialogue.setContent("放在纤细的食指尖上的戏剧剧本\r\n墨水的味道\r\n随着埃文的风吹散开来。");
	dialogue.setCanContinue(true);
	dialogue.setButtons([{ text: '继续', callback: function callback() {
			//dialogue.setAvatar(avatar)
			dialogue.setName('马洛');
			dialogue.setContent("我是马洛，现在我给你讲讲我的故事吧。");
			dialogue.setCanContinue(false);
			dialogue.setButtons([{ text: '交谈', callback: function callback() {
					dialogue.setContent("对于我知道哈利波菜的名字这件事情\n你一点都不用感到惊讶。\n除了你的名字\n我还知道很多关于你的事情");
					dialogue.setCanContinue(true);
					dialogue.setButtons([{ text: '继续', callback: function callback() {
							dialogue.setContent("还有哈利波菜\n没有记住的\n那些事实。");
							dialogue.setButtons([{ text: '继续', callback: function callback() {
									dialogue.showDiary();
									dialogue.setName('');
									dialogue.setContent("(马洛 看着我。)");
									dialogue.setCanContinue(false);
									dialogue.setButtons([{ text: '结束对话', callback: function callback() {
											dialogue.setContent("马洛的故事结束了。");
											dialogue.hideDiary();
											//dialogue.setAvatar('')
											dialogue.setButtons([{ text: '关闭对话窗口', callback: function callback() {
													dialogue.hide();
												} }]);
										} }]);
								} }]);
						} }]);
				} }, { text: '交易', callback: function callback(e) {
					return e;
				} }]);
		} }]);

	_mabinogiUi2.default.Loader.load({
		image: {
			marlowe: _npcportrait_marlowe2.default,
			aeira: _npcportrait_aeira2.default,
			devcat: _npcportrait_devcat2.default
		},
		portraitData: {
			marlowe: _npcportrait_ani_marlowe2.default,
			aeira: _npcportrait_ani_aeira2.default,
			devcat: _npcportrait_ani_devcat2.default
		}
	}).then(function () {
		var avatar = new Portrait(document.querySelector('#avatar'));
		avatar.setImage(_mabinogiUi2.default.Loader.images.marlowe);
		avatar.setPortraitData(_mabinogiUi2.default.Loader.portraitDatas.marlowe);
		avatar.startNictation();
		window.avatar = avatar;
		avatar.drawAnimation('base');
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialogue = __webpack_require__(2);

	var _dialogue2 = _interopRequireDefault(_dialogue);

	var _media = __webpack_require__(3);

	var _media2 = _interopRequireDefault(_media);

	var _diary = __webpack_require__(14);

	var _diary2 = _interopRequireDefault(_diary);

	var _portrait = __webpack_require__(15);

	var _portrait2 = _interopRequireDefault(_portrait);

	var _loader = __webpack_require__(16);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MabinogiUI = { Dialogue: _dialogue2.default, Media: _media2.default, Diary: _diary2.default, Portrait: _portrait2.default, Loader: _loader2.default };

	window.MabinogiUI = MabinogiUI;

	exports.default = MabinogiUI;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _media = __webpack_require__(3);

	var _media2 = _interopRequireDefault(_media);

	var _diary = __webpack_require__(14);

	var _diary2 = _interopRequireDefault(_diary);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dialogue = function () {
		function Dialogue(div) {
			var _this = this;

			_classCallCheck(this, Dialogue);

			this.sounds = _media2.default.sounds;
			div.innerHTML = '\n\t\t\t<div class="dialogue" style="display:none">\n\t\t\t\t<img class="avatar">\n\t\t\t\t<div class="name"></div>\n\t\t\t\t<div class="content only-content"></div>\n\t\t\t\t<div class="button-layer"></div>\n\t\t\t</div>\n\t\t';
			this.dom = div.querySelector('.dialogue');
			this.contentDom = this.dom.querySelector('.content');
			this.nameDom = this.dom.querySelector('.name');
			this.avatarDom = this.dom.querySelector('.avatar');
			this.buttonLayerDom = this.dom.querySelector('.button-layer');

			this.dom.addEventListener('mousedown', function (e) {
				return e.target.tagName == 'BUTTON' ? _this.sounds.buttonDown.play() : null;
			});
			this.dom.addEventListener('mouseup', function (e) {
				return e.target.tagName == 'BUTTON' ? _this.sounds.buttonConfirm.play() : null;
			});
			this.dom.addEventListener('mouseover', function (e) {
				return e.target.tagName == 'BUTTON' ? _this.sounds.buttonHover.play() : null;
			});
			//this.dom.addEventListener('mouseout', e => e.target.tagName == 'BUTTON' ? this.sounds.buttonCancel.play() : null)

			this.data = [];
			this.dom.addEventListener('click', function (e) {
				if (_this.toContinue) {
					_this.buttons[0].callback(e);
				}
			});
		}

		_createClass(Dialogue, [{
			key: 'show',
			value: function show() {
				this.dom.style.display = 'block';
				this.sounds.windowOpen.play();
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.dom.style.display = 'none';
				this.sounds.windowClose.play();
			}
		}, {
			key: 'showDiary',
			value: function showDiary() {
				this.diary.show();
			}
		}, {
			key: 'hideDiary',
			value: function hideDiary() {
				this.diary.hide();
			}
		}, {
			key: 'setDiary',
			value: function setDiary(diary) {
				this.diary = diary;
			}
		}, {
			key: 'setButtons',
			value: function setButtons(array) {
				var _this2 = this;

				this.buttons = array;
				this.buttonLayerDom.innerHTML = '';
				array.map(function (x) {
					var button = document.createElement('button');
					button.innerText = x.text;
					button.addEventListener('click', function (e) {
						e.stopPropagation();
						x.callback(e);
					});
					_this2.buttonLayerDom.appendChild(button);
				});
			}
		}, {
			key: 'setCanContinue',
			value: function setCanContinue(bool) {
				if (bool) {
					this.toContinue = true;
					this.dom.classList.add('to-continue');
				} else {
					this.toContinue = false;
					this.dom.classList.remove('to-continue');
				}
			}
		}, {
			key: 'setAvatar',
			value: function setAvatar(url) {
				if (url) {
					this.avatarDom.style.display = 'block';
					this.avatarDom.src = url;
				} else {
					this.avatarDom.style.display = 'none';
				}
			}
		}, {
			key: 'setName',
			value: function setName(name) {
				if (name) {
					this.nameDom.innerText = name;
					this.contentDom.classList.remove('only-content');
				} else {
					this.nameDom.innerText = '';
					this.contentDom.classList.add('only-content');
				}
			}
		}, {
			key: 'setContent',
			value: function setContent(content) {
				if (content) {
					//due to innerText's weird bahaviour for spaces
					var text = '';
					cancelAnimationFrame(this.requestedAnimationId);
					this.contentDom.innerText = '';
					var printText = function () {
						if (content) {
							text += content.slice(0, 2);
							this.contentDom.innerText = text;
							content = content.slice(2);
							this.requestedAnimationId = requestAnimationFrame(printText);
						}
					}.bind(this);
					this.requestedAnimationId = requestAnimationFrame(printText);
				} else {
					this.contentDom.innerText = '';
				}
			}
		}]);

		return Dialogue;
	}();

	exports.default = Dialogue;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var soundUrls = {
		buttonDown: __webpack_require__(4),
		buttonConfirm: __webpack_require__(5),
		buttonHover: __webpack_require__(6),
		buttonCancel: __webpack_require__(7),
		windowOpen: __webpack_require__(8),
		windowClose: __webpack_require__(9),
		nextPage: __webpack_require__(10),
		prevPage: __webpack_require__(11),
		flipLeft: __webpack_require__(12),
		flipRight: __webpack_require__(13)
	};

	var Media = function () {
		function Media() {
			_classCallCheck(this, Media);
		}

		_createClass(Media, null, [{
			key: 'init',
			value: function init() {
				var _this = this;

				this.sounds = {};
				Object.keys(soundUrls).map(function (k) {
					var audio = document.createElement('audio');
					audio.src = soundUrls[k];
					audio.preload = 'auto';
					_this.sounds[k] = audio;
				});
			}
		}]);

		return Media;
	}();

	Media.init();
	exports.default = Media;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gen_button_down.wav";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gen_button_confirm.wav";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gen_hover.wav";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gen_button_cancel.wav";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gen_window_open.wav";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "gen_window_closed.wav";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "book_ltor.ogg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "book_rtol.ogg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "book_rtol_end.ogg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "book_ltor_end.ogg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _media = __webpack_require__(3);

	var _media2 = _interopRequireDefault(_media);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Diary = function () {
		function Diary(div) {
			var _this = this;

			_classCallCheck(this, Diary);

			div.innerHTML = '\n\t\t\t<div class="diary" style="display:none">\n\t\t\t\t<div class="left-side"></div>\n\t\t\t\t<div class="right-side"></div>\n\t\t\t\t<div class="page-number"></div>\n\t\t\t\t<label class="label-1"></label>\n\t\t\t\t<label class="label-2"></label>\n\t\t\t\t<label class="label-3"></label>\n\t\t\t\t<label class="label-4"></label>\n\t\t\t</div>\n\t\t';
			this.dom = div.querySelector('div.diary');
			this.pageNumberDom = this.dom.querySelector('.page-number');
			this.leftPageDom = this.dom.querySelector('.left-side');
			this.rightPageDom = this.dom.querySelector('.right-side');
			this.pages = [];
			this.leftPageDom.addEventListener('click', this.prevPage.bind(this));
			this.rightPageDom.addEventListener('click', this.nextPage.bind(this));[1, 2, 3, 4].map(function (x) {
				return _this.dom.querySelector('.label-' + x).addEventListener('click', function (e) {
					var toPage = this.sectionIndex[x - 1] || this.sectionIndex[this.sectionIndex.length - 1];
					if (toPage > this.currentPage) {
						if (toPage - this.currentPage < 3) {
							_media2.default.sounds.nextPage.play();
						} else {
							_media2.default.sounds.flipRight.play();
						}
					} else if (this.currentPage > toPage) {
						if (this.currentPage - toPage < 3) {
							_media2.default.sounds.prevPage.play();
						} else {
							_media2.default.sounds.flipLeft.play();
						}
					}
					_media2.default.sounds.buttonDown.play();
					this.currentPage = toPage;
					this.displayPage();
				}.bind(_this));
			});
			this.dom.addEventListener('mousedown', function (e) {
				return e.target.className == 'keyword' ? _media2.default.sounds.buttonDown.play() : null;
			});
			this.dom.addEventListener('mouseup', function (e) {
				return e.target.className == 'keyword' ? _media2.default.sounds.buttonConfirm.play() : null;
			});
		}

		_createClass(Diary, [{
			key: 'show',
			value: function show() {
				this.dom.style.display = 'block';
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.dom.style.display = 'none';
			}
		}, {
			key: 'setLabelNames',
			value: function setLabelNames(labels) {
				var _this2 = this;

				if (labels.length != 4) {
					alert('Label数量不足4个。');
					return;
				}
				this.labels = labels;
				labels.map(function (e, i) {
					return _this2.dom.querySelector('.label-' + (i + 1)).innerText = e;
				});
			}
		}, {
			key: 'displayPage',
			value: function displayPage() {
				var _this3 = this;

				var rows = this.pages[this.currentPage - 1];
				var _ref = [rows.slice(0, 13), rows.slice(13, 26)],
				    left = _ref[0],
				    right = _ref[1];

				this.leftPageDom.innerHTML = '';
				this.rightPageDom.innerHTML = '';
				left.map(function (x) {
					_this3.leftPageDom.appendChild(x);
					_this3.leftPageDom.appendChild(document.createElement('br'));
				});
				right.map(function (x) {
					_this3.rightPageDom.appendChild(x);
					_this3.rightPageDom.appendChild(document.createElement('br'));
				});
				this.pageNumberDom.innerText = this.currentPage + '/' + this.totalPage;
			}
		}, {
			key: 'nextPage',
			value: function nextPage() {
				if (this.currentPage < this.totalPage) {
					this.currentPage += 1;
					this.displayPage();
					_media2.default.sounds.nextPage.play();
				}
			}
		}, {
			key: 'prevPage',
			value: function prevPage() {
				if (this.currentPage > 1) {
					this.currentPage -= 1;
					this.displayPage();
					_media2.default.sounds.prevPage.play();
				}
			}
		}, {
			key: 'renderKeyword',
			value: function renderKeyword(keyword, callback) {
				return this.sliceText(keyword).map(function (text) {
					var dom = document.createElement('span');
					dom.className = 'keyword';
					dom.innerText = text;
					dom.addEventListener('click', function (e) {
						e.stopPropagation();
						callback(e);
					});
					return dom;
				});
			}
		}, {
			key: 'renderText',
			value: function renderText(text) {
				return this.sliceText(text).map(function (text) {
					return document.createTextNode(text);
				});
			}
		}, {
			key: 'renderSectionTitle',
			value: function renderSectionTitle(name) {
				var dom = document.createElement('span');
				dom.className = 'title';
				dom.innerText = '**' + name + '**';
				return [document.createTextNode(''), dom, document.createTextNode('')];
			}
		}, {
			key: 'setContent',
			value: function setContent(array) {
				var _this4 = this;

				var sections = array.map(function (section, i) {
					var title = _this4.renderSectionTitle(_this4.labels[i]);
					var rows = section.map(function (r) {
						return _this4.renderKeyword(r.keyword, r.callback).concat(_this4.renderText(r.description)).concat(_this4.renderText(''));
					});
					return title.concat.apply(title, _toConsumableArray(rows));
				});
				var sectionPages = sections.map(function (rows) {
					return _this4.rowsToPages(rows);
				});
				this.sectionIndex = sectionPages.map(function (_, i, a) {
					return a.slice(0, i).reduce(function (s, c) {
						return s += c.length;
					}, 1);
				});
				this.pages = [].concat.apply([], sectionPages);
				this.totalPage = this.pages.length;
				this.currentPage = 1;
				this.displayPage();
			}
		}, {
			key: 'rowsToPages',
			value: function rowsToPages(rows) {
				var pages = [];
				for (var i = 0; i < rows.length; i += 26) {
					pages.push(rows.slice(i, i + 26));
				}
				return pages;
			}
		}, {
			key: 'sliceText',
			value: function sliceText(text) {
				text = text || ' ';
				var rows = [];
				for (var i = 0; i < text.length; i += 11) {
					rows.push(text.slice(i, i + 11));
				}
				return rows;
			}
		}]);

		return Diary;
	}();

	exports.default = Diary;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Portrait = function () {
		function Portrait(dom) {
			_classCallCheck(this, Portrait);

			this.dom = dom;
			var canvas = document.createElement('canvas');
			this.dom.appendChild(canvas);
			canvas.width = 768;
			canvas.height = 768;
			this.context = canvas.getContext('2d');
		}

		_createClass(Portrait, [{
			key: 'setImage',
			value: function setImage(image) {
				this.image = image;
			}
		}, {
			key: 'setPortraitData',
			value: function setPortraitData(portraitData) {
				this.portraitData = portraitData;
				this.clips = portraitData.clips;
				this.animations = portraitData.animations;
			}
		}, {
			key: 'startNictation',
			value: function startNictation() {
				var _this = this;

				setInterval(function (_) {
					_this.drawAnimation('normal');
					_this.drawAnimation('base');
				}, this.nictationInterval);
			}
		}, {
			key: 'drawAnimation',
			value: function drawAnimation(name) {
				var _this2 = this;

				var animation = this.animations.find(function (x) {
					return x.name == name;
				});
				animation.background.map(function (c) {
					return _this2.drawClip(c);
				});
				if (animation.frames.length > 0) {
					var generators = animation.frames.map(function (f) {
						return function (_) {
							f.clips.map(function (c) {
								return _this2.drawClip(c);
							});
							return _this2.delayPromise(f.duration);
						};
					});
					this.runPromiseSequence(generators);
				}
			}
		}, {
			key: 'delayPromise',
			value: function delayPromise(n) {
				var ms = n * 1000;
				return new Promise(function (resolve, reject) {
					setInterval(function () {
						resolve();
					}, ms);
				});
			}
		}, {
			key: 'runPromiseSequence',
			value: function runPromiseSequence(generators) {
				generators.reduce(function (s, i) {
					return s.then(function (_) {
						return i();
					});
				}, new Promise(function (resolve) {
					return resolve();
				}));
			}
		}, {
			key: 'drawClip',
			value: function drawClip(index) {
				var clip = this.clips[index];
				this.context.drawImage(this.image, clip.x1, clip.y1, clip.x2 - clip.x1 + 1, clip.y2 - clip.y1 + 1, clip.originX + 64, clip.originY + 128, clip.x2 - clip.x1 + 1, clip.y2 - clip.y1 + 1);
			}
		}, {
			key: 'show',
			value: function show() {
				this.dom.style.display = 'block';
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.dom.style.display = 'none';
			}
		}, {
			key: 'nictationInterval',
			get: function get() {
				return Math.ceil(Math.random() * 500) + 4500;
			}
		}]);

		return Portrait;
	}();

	exports.default = Portrait;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Loader = function () {
		function Loader() {
			_classCallCheck(this, Loader);
		}

		_createClass(Loader, null, [{
			key: 'load',
			value: function load(params) {
				var _this = this;

				var promises = [];
				Object.keys(params.image).map(function (k) {
					promises.push(_this.loadImage(k, params.image[k]));
				});

				Object.keys(params.portraitData).map(function (k) {
					promises.push(_this.loadPortraitData(k, params.portraitData[k]));
				});

				return Promise.all(promises);
			}
		}, {
			key: 'loadImage',
			value: function loadImage(name, url) {
				var _this2 = this;

				return new Promise(function (resolve, reject) {
					if (_this2.images[name]) {
						resolve();
					} else {
						var image = new Image();
						image.src = url;
						image.onload = function (_) {
							_this2.images[name] = image;
							resolve();
						};
					}
				});
			}
		}, {
			key: 'loadPortraitData',
			value: function loadPortraitData(name, url) {
				var _this3 = this;

				return new Promise(function (resolve, reject) {
					if (_this3.portraitDatas[name]) {
						resolve();
					} else {
						var req = new XMLHttpRequest();
						req.open('get', url);
						req.onload = function (e) {
							var parser = new DOMParser();
							var xmldoc = parser.parseFromString(e.target.responseText, 'text/xml');
							var data = _this3.decodePortraitData(xmldoc);
							_this3.portraitDatas[name] = data;
							resolve();
						};
						req.send();
					}
				});
			}
		}, {
			key: 'decodePortraitData',
			value: function decodePortraitData(xmldoc) {
				var clips = Array.from(xmldoc.querySelectorAll('clipInformation')).map(function (x) {
					var _map$map = ['x1', 'y1', 'x2', 'y2', 'originX', 'originY'].map(function (n) {
						return x.getAttribute(n);
					}).map(function (n) {
						return parseInt(n);
					}),
					    _map$map2 = _slicedToArray(_map$map, 6),
					    x1 = _map$map2[0],
					    y1 = _map$map2[1],
					    x2 = _map$map2[2],
					    y2 = _map$map2[3],
					    originX = _map$map2[4],
					    originY = _map$map2[5];

					return { x1: x1, y1: y1, x2: x2, y2: y2, originX: originX, originY: originY };
				});
				var animations = Array.from(xmldoc.querySelectorAll('animation')).map(function (x) {
					var background = [];
					if (x.querySelector('background')) {
						background = Array.from(x.querySelector('background').querySelectorAll('clip')).map(function (n) {
							return parseInt(n.getAttribute('value'));
						});
					}
					return {
						name: x.getAttribute('name'),
						background: background,
						frames: Array.from(x.querySelectorAll('frame')).map(function (f) {
							return {
								duration: parseFloat(f.getAttribute('duration')),
								clips: Array.from(f.querySelectorAll('clip')).map(function (n) {
									return parseInt(n.getAttribute('value'));
								})
							};
						})
					};
				});
				return { clips: clips, animations: animations };
			}
		}]);

		return Loader;
	}();

	Loader.images = {};
	Loader.portraitDatas = {};
	exports.default = Loader;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "npcportrait_marlowe.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "npcportrait_ani_marlowe.xml";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "npcportrait_aeira.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "npcportrait_ani_aeira.xml";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "npcportrait_devcat.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "npcportrait_ani_devcat.xml";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ })
/******/ ]);