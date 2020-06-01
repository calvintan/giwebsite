/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.bundle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "jquery")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */


  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }

    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }

      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;
  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */

  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */


  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    } // NOTE: 1 DOM access here


    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }
  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */


  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }

    return element.parentNode || element.host;
  }
  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */


  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;

      case '#document':
        return element.body;
    } // Firefox want us to check `-x` and `-y` variations as well


    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }
  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */


  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */

  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }

    if (version === 10) {
      return isIE10;
    }

    return isIE11 || isIE10;
  }
  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */


  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

    var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    } // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...


    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }

    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }
  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */


  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }
  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */


  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    } // Here we make sure to give as "start" the element that comes first in the DOM


    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1; // Get common ancestor container

    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    } // one of the nodes is inside shadowDOM, find which one


    var element1root = getRoot(element1);

    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }
  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */


  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }
  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */


  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }
  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */


  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */


  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }
  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */


  function getBoundingClientRect(element) {
    var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11

    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    }; // subtract scrollbar size from sizes

    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons

    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');
      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }

    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.

    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);
      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };
    return getClientRect(offset);
  }
  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */


  function isFixed(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }

    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }

    var parentNode = getParentNode(element);

    if (!parentNode) {
      return false;
    }

    return isFixed(parentNode);
  }
  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */


  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }

    var el = element.parentElement;

    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }

    return el || document.documentElement;
  }
  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */


  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

    var boundaries = {
      top: 0,
      left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;

      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));

        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    } // Add paddings


    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return width * height;
  }
  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
  }
  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */


  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }
  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */


  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }
  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */


  function getOppositePlacement(placement) {
    var hash = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }
  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */


  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0]; // Get popper node sizes

    var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    }; // depending by the popper placement we have to compute its offsets slightly differently

    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }
  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */


  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    } // use `filter` to obtain the same behavior of `find`


    return arr.filter(check)[0];
  }
  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */


  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    } // use `find` + `indexOf` if `findIndex` isn't supported


    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }
  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */


  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }

      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);
        data = fn(data, modifier);
      }
    });
    return data;
  }
  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */


  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    }; // compute reference element offsets

    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value

    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed; // compute the popper offsets

    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

    data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback

    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }
  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */


  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }
  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */


  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;

      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }

    return null;
  }
  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */


  function destroy() {
    this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it

    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }

    return this;
  }
  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */


  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
      passive: true
    });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }

    scrollParents.push(target);
  }
  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */


  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, {
      passive: true
    }); // Scroll event listener on scroll parents

    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
  }
  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */


  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }
  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */


  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    }); // Reset state

    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }
  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */


  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }
  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */


  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }
  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */


  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = ''; // add unit if the value is numeric and is one of the following

      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }

      element.style[prop] = styles[prop] + unit;
    });
  }
  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */


  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];

      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */


  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element

    setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }
  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */


  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value

    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations

    setStyles(popper, {
      position: options.positionFixed ? 'fixed' : 'absolute'
    });
    return options;
  }
  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */


  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */

  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;

    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }

    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

    var styles = {
      position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed

    var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.

    var left = void 0,
        top = void 0;

    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }

    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }

    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    } // Attributes


    var attributes = {
      'x-placement': data.placement
    }; // Update `data` attributes, styles and arrowStyles

    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
  }
  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */


  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';

      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }

    return isRequired;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function arrow(data, options) {
    var _data$offsets$arrow; // arrow depends on keepTogether in order to work


    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len]; //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //
    // top/left side

    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    } // bottom/right side


    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }

    data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available

    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
  }
  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */


  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }

    return variation;
  }
  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */


  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

  var validPlacements = placements.slice(3);
  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */

  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */

  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;

      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;

      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;

      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future

        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }

    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }
  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */


  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2]; // If it's not a number it's an operator, I guess

    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;

      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;

        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;

      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }

      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }
  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */


  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one

    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    }); // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space

    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    } // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.


    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, []) // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    }); // Loop trough the offsets arrays and execute the operations

    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */


  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;

    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken

    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    } // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself


    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification

    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];
    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed

    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
      primary: function primary(placement) {
        var value = popper[placement];

        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }

        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];

        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }

        return defineProperty({}, mainSide, value);
      }
    };
    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;
      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';
      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };
      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
  }
  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */


  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: offset,

      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: preventOverflow,

      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],

      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,

      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: arrow,

      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: flip,

      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',

      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,

      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',

      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,

      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,

      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,

      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: computeStyle,

      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,

      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',

      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: applyStyle,

      /** @prop {Function} */
      onLoad: applyStyleOnLoad,

      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };
  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */

  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };
  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */
  // Utils
  // Methods

  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      }; // make update() debounced, so that it only runs at most once-per-tick


      this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

      this.options = _extends({}, Popper.Defaults, options); // init state

      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      }; // get reference and popper elements (allow jQuery wrappers)

      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      }); // Refactoring modifiers' list (Object => Array)

      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      }) // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      }); // fire the first update to position the popper in the right place

      this.update();
      var eventsEnabled = this.options.eventsEnabled;

      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    } // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }
      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */

      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();
  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jquery.ripples/dist/jquery.ripples-min.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery.ripples/dist/jquery.ripples-min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * jQuery Ripples plugin v0.6.3 / https://github.com/sirxemic/jquery.ripples
 * MIT License
 * @author sirxemic / https://sirxemic.com/
 */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(__webpack_require__(/*! jquery */ "jquery")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  function t(e) {
    return "%" == e[e.length - 1];
  }

  function r(e) {
    var t = e.split(" ");
    if (1 !== t.length) return t.map(function (t) {
      switch (e) {
        case "center":
          return "50%";

        case "top":
        case "left":
          return "0";

        case "right":
        case "bottom":
          return "100%";

        default:
          return t;
      }
    });

    switch (e) {
      case "center":
        return ["50%", "50%"];

      case "top":
        return ["50%", "0"];

      case "bottom":
        return ["50%", "100%"];

      case "left":
        return ["0", "50%"];

      case "right":
        return ["100%", "50%"];

      default:
        return [e, "50%"];
    }
  }

  function i(e, t, r) {
    function i(e, t) {
      var r = s.createShader(e);
      if (s.shaderSource(r, t), s.compileShader(r), !s.getShaderParameter(r, s.COMPILE_STATUS)) throw new Error("compile error: " + s.getShaderInfoLog(r));
      return r;
    }

    var o = {};
    if (o.id = s.createProgram(), s.attachShader(o.id, i(s.VERTEX_SHADER, e)), s.attachShader(o.id, i(s.FRAGMENT_SHADER, t)), s.linkProgram(o.id), !s.getProgramParameter(o.id, s.LINK_STATUS)) throw new Error("link error: " + s.getProgramInfoLog(o.id));
    o.uniforms = {}, o.locations = {}, s.useProgram(o.id), s.enableVertexAttribArray(0);

    for (var n, a, u = /uniform (\w+) (\w+)/g, h = e + t; null != (n = u.exec(h));) {
      a = n[2], o.locations[a] = s.getUniformLocation(o.id, a);
    }

    return o;
  }

  function o(e, t) {
    s.activeTexture(s.TEXTURE0 + (t || 0)), s.bindTexture(s.TEXTURE_2D, e);
  }

  function n(e) {
    var t = /url\(["']?([^"']*)["']?\)/.exec(e);
    return null == t ? null : t[1];
  }

  function a(e) {
    return e.match(/^data:/);
  }

  var s,
      u = (e = e && "default" in e ? e["default"] : e)(window),
      h = function () {
    function e(e, t, i) {
      var o = "OES_texture_" + e,
          n = o + "_linear",
          a = n in r,
          s = [o];
      return a && s.push(n), {
        type: t,
        arrayType: i,
        linearSupport: a,
        extensions: s
      };
    }

    var t = document.createElement("canvas");
    if (!(s = t.getContext("webgl") || t.getContext("experimental-webgl"))) return null;
    var r = {};
    if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function (e) {
      var t = s.getExtension(e);
      t && (r[e] = t);
    }), !r.OES_texture_float) return null;
    var i = [];
    i.push(e("float", s.FLOAT, Float32Array)), r.OES_texture_half_float && i.push(e("half_float", r.OES_texture_half_float.HALF_FLOAT_OES, null));
    var o = s.createTexture(),
        n = s.createFramebuffer();
    s.bindFramebuffer(s.FRAMEBUFFER, n), s.bindTexture(s.TEXTURE_2D, o), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE);

    for (var a = null, u = 0; u < i.length; u++) {
      if (s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, 32, 32, 0, s.RGBA, i[u].type, null), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, o, 0), s.checkFramebufferStatus(s.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE) {
        a = i[u];
        break;
      }
    }

    return a;
  }(),
      d = function (e, t) {
    try {
      return new ImageData(e, t);
    } catch (r) {
      return document.createElement("canvas").getContext("2d").createImageData(e, t);
    }
  }(32, 32);

  e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");

  var c = function c(t, r) {
    function i() {
      o.destroyed || (o.step(), requestAnimationFrame(i));
    }

    var o = this;
    this.$el = e(t), this.interactive = r.interactive, this.resolution = r.resolution, this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]), this.perturbance = r.perturbance, this.dropRadius = r.dropRadius, this.crossOrigin = r.crossOrigin, this.imageUrl = r.imageUrl;
    var n = document.createElement("canvas");
    n.width = this.$el.innerWidth(), n.height = this.$el.innerHeight(), this.canvas = n, this.$canvas = e(n), this.$canvas.css({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
    }), this.$el.addClass("jquery-ripples").append(n), this.context = s = n.getContext("webgl") || n.getContext("experimental-webgl"), h.extensions.forEach(function (e) {
      s.getExtension(e);
    }), this.updateSize = this.updateSize.bind(this), e(window).on("resize", this.updateSize), this.textures = [], this.framebuffers = [], this.bufferWriteIndex = 0, this.bufferReadIndex = 1;

    for (var a = h.arrayType, u = a ? new a(this.resolution * this.resolution * 4) : null, d = 0; d < 2; d++) {
      var c = s.createTexture(),
          f = s.createFramebuffer();
      s.bindFramebuffer(s.FRAMEBUFFER, f), s.bindTexture(s.TEXTURE_2D, c), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, h.linearSupport ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, h.linearSupport ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this.resolution, this.resolution, 0, s.RGBA, h.type, u), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, c, 0), this.textures.push(c), this.framebuffers.push(f);
    }

    this.quad = s.createBuffer(), s.bindBuffer(s.ARRAY_BUFFER, this.quad), s.bufferData(s.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), s.STATIC_DRAW), this.initShaders(), this.initTexture(), this.setTransparentTexture(), this.loadImage(), s.clearColor(0, 0, 0, 0), s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA), this.visible = !0, this.running = !0, this.inited = !0, this.destroyed = !1, this.setupPointerEvents(), requestAnimationFrame(i);
  };

  c.DEFAULTS = {
    imageUrl: null,
    resolution: 256,
    dropRadius: 20,
    perturbance: .03,
    interactive: !0,
    crossOrigin: ""
  }, c.prototype = {
    setupPointerEvents: function setupPointerEvents() {
      function e() {
        return r.visible && r.running && r.interactive;
      }

      function t(t, i) {
        e() && r.dropAtPointer(t, r.dropRadius * (i ? 1.5 : 1), i ? .14 : .01);
      }

      var r = this;
      this.$el.on("mousemove.ripples", function (e) {
        t(e);
      }).on("touchmove.ripples touchstart.ripples", function (e) {
        for (var r = e.originalEvent.changedTouches, i = 0; i < r.length; i++) {
          t(r[i]);
        }
      }).on("mousedown.ripples", function (e) {
        t(e, !0);
      });
    },
    loadImage: function loadImage() {
      var e = this;
      s = this.context;
      var t = this.imageUrl || n(this.originalCssBackgroundImage) || n(this.$el.css("backgroundImage"));
      if (t != this.imageSource) if (this.imageSource = t, this.imageSource) {
        var r = new Image();
        r.onload = function () {
          function t(e) {
            return 0 == (e & e - 1);
          }

          s = e.context;
          var i = t(r.width) && t(r.height) ? s.REPEAT : s.CLAMP_TO_EDGE;
          s.bindTexture(s.TEXTURE_2D, e.backgroundTexture), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, i), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, i), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, r), e.backgroundWidth = r.width, e.backgroundHeight = r.height, e.hideCssBackground();
        }, r.onerror = function () {
          s = e.context, e.setTransparentTexture();
        }, r.crossOrigin = a(this.imageSource) ? null : this.crossOrigin, r.src = this.imageSource;
      } else this.setTransparentTexture();
    },
    step: function step() {
      s = this.context, this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render());
    },
    drawQuad: function drawQuad() {
      s.bindBuffer(s.ARRAY_BUFFER, this.quad), s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0), s.drawArrays(s.TRIANGLE_FAN, 0, 4);
    },
    render: function render() {
      s.bindFramebuffer(s.FRAMEBUFFER, null), s.viewport(0, 0, this.canvas.width, this.canvas.height), s.enable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.useProgram(this.renderProgram.id), o(this.backgroundTexture, 0), o(this.textures[0], 1), s.uniform1f(this.renderProgram.locations.perturbance, this.perturbance), s.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft), s.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight), s.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio), s.uniform1i(this.renderProgram.locations.samplerBackground, 0), s.uniform1i(this.renderProgram.locations.samplerRipples, 1), this.drawQuad(), s.disable(s.BLEND);
    },
    update: function update() {
      s.viewport(0, 0, this.resolution, this.resolution), s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), o(this.textures[this.bufferReadIndex]), s.useProgram(this.updateProgram.id), this.drawQuad(), this.swapBufferIndices();
    },
    swapBufferIndices: function swapBufferIndices() {
      this.bufferWriteIndex = 1 - this.bufferWriteIndex, this.bufferReadIndex = 1 - this.bufferReadIndex;
    },
    computeTextureBoundaries: function computeTextureBoundaries() {
      var e,
          i = this.$el.css("background-size"),
          o = this.$el.css("background-attachment"),
          n = r(this.$el.css("background-position"));
      if ("fixed" == o ? ((e = {
        left: window.pageXOffset,
        top: window.pageYOffset
      }).width = u.width(), e.height = u.height()) : ((e = this.$el.offset()).width = this.$el.innerWidth(), e.height = this.$el.innerHeight()), "cover" == i) var a = Math.max(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
          s = this.backgroundWidth * a,
          h = this.backgroundHeight * a;else if ("contain" == i) var a = Math.min(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
          s = this.backgroundWidth * a,
          h = this.backgroundHeight * a;else {
        var s = (i = i.split(" "))[0] || "",
            h = i[1] || s;
        t(s) ? s = e.width * parseFloat(s) / 100 : "auto" != s && (s = parseFloat(s)), t(h) ? h = e.height * parseFloat(h) / 100 : "auto" != h && (h = parseFloat(h)), "auto" == s && "auto" == h ? (s = this.backgroundWidth, h = this.backgroundHeight) : ("auto" == s && (s = this.backgroundWidth * (h / this.backgroundHeight)), "auto" == h && (h = this.backgroundHeight * (s / this.backgroundWidth)));
      }
      var d = n[0],
          c = n[1];
      d = t(d) ? e.left + (e.width - s) * parseFloat(d) / 100 : e.left + parseFloat(d), c = t(c) ? e.top + (e.height - h) * parseFloat(c) / 100 : e.top + parseFloat(c);
      var f = this.$el.offset();
      this.renderProgram.uniforms.topLeft = new Float32Array([(f.left - d) / s, (f.top - c) / h]), this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / s, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / h]);
      var l = Math.max(this.canvas.width, this.canvas.height);
      this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / l, this.canvas.height / l]);
    },
    initShaders: function initShaders() {
      var e = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
      this.dropProgram = i(e, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")), this.updateProgram = i(e, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")), s.uniform2fv(this.updateProgram.locations.delta, this.textureDelta), this.renderProgram = i(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")), s.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
    },
    initTexture: function initTexture() {
      this.backgroundTexture = s.createTexture(), s.bindTexture(s.TEXTURE_2D, this.backgroundTexture), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, 1), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR);
    },
    setTransparentTexture: function setTransparentTexture() {
      s.bindTexture(s.TEXTURE_2D, this.backgroundTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, d);
    },
    hideCssBackground: function hideCssBackground() {
      var e = this.$el[0].style.backgroundImage;
      "none" != e && (this.originalInlineCss = e, this.originalCssBackgroundImage = this.$el.css("backgroundImage"), this.$el.css("backgroundImage", "none"));
    },
    restoreCssBackground: function restoreCssBackground() {
      this.$el.css("backgroundImage", this.originalInlineCss || "");
    },
    dropAtPointer: function dropAtPointer(e, t, r) {
      var i = parseInt(this.$el.css("border-left-width")) || 0,
          o = parseInt(this.$el.css("border-top-width")) || 0;
      this.drop(e.pageX - this.$el.offset().left - i, e.pageY - this.$el.offset().top - o, t, r);
    },
    drop: function drop(e, t, r, i) {
      s = this.context;
      var n = this.$el.innerWidth(),
          a = this.$el.innerHeight(),
          u = Math.max(n, a);
      r /= u;
      var h = new Float32Array([(2 * e - n) / u, (a - 2 * t) / u]);
      s.viewport(0, 0, this.resolution, this.resolution), s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), o(this.textures[this.bufferReadIndex]), s.useProgram(this.dropProgram.id), s.uniform2fv(this.dropProgram.locations.center, h), s.uniform1f(this.dropProgram.locations.radius, r), s.uniform1f(this.dropProgram.locations.strength, i), this.drawQuad(), this.swapBufferIndices();
    },
    updateSize: function updateSize() {
      var e = this.$el.innerWidth(),
          t = this.$el.innerHeight();
      e == this.canvas.width && t == this.canvas.height || (this.canvas.width = e, this.canvas.height = t);
    },
    destroy: function destroy() {
      this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"), s = null, e(window).off("resize", this.updateSize), this.$canvas.remove(), this.restoreCssBackground(), this.destroyed = !0;
    },
    show: function show() {
      this.visible = !0, this.$canvas.show(), this.hideCssBackground();
    },
    hide: function hide() {
      this.visible = !1, this.$canvas.hide(), this.restoreCssBackground();
    },
    pause: function pause() {
      this.running = !1;
    },
    play: function play() {
      this.running = !0;
    },
    set: function set(e, t) {
      switch (e) {
        case "dropRadius":
        case "perturbance":
        case "interactive":
        case "crossOrigin":
          this[e] = t;
          break;

        case "imageUrl":
          this.imageUrl = t, this.loadImage();
      }
    }
  };
  var f = e.fn.ripples;
  e.fn.ripples = function (t) {
    if (!h) throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
    var r = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
    return this.each(function () {
      var i = e(this),
          o = i.data("ripples"),
          n = e.extend({}, c.DEFAULTS, i.data(), "object" == _typeof(t) && t);
      (o || "string" != typeof t) && (o ? "string" == typeof t && c.prototype[t].apply(o, r) : i.data("ripples", o = new c(this, n)));
    });
  }, e.fn.ripples.Constructor = c, e.fn.ripples.noConflict = function () {
    return e.fn.ripples = f, this;
  };
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/assets/js/bundle.js":
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _qrcode_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../qrcode.min.js */ "./src/assets/qrcode.min.js");
/* harmony import */ var _qrcode_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_qrcode_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_jquery_ripples_dist_jquery_ripples_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/jquery.ripples/dist/jquery.ripples-min */ "./node_modules/jquery.ripples/dist/jquery.ripples-min.js");
/* harmony import */ var _node_modules_jquery_ripples_dist_jquery_ripples_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_ripples_dist_jquery_ripples_min__WEBPACK_IMPORTED_MODULE_3__);




jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".nav__btn").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("animate");

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").hasClass("show-nav")) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("show-nav").addClass("hide-nav");
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("hide-nav");
      }, 500);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("hide-nav").addClass("show-nav");
    }

    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".nav__manifesto, .m__close").click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").hasClass("show-manifesto")) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("show-manifesto").addClass("hide-manifesto");
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("hide-manifesto");
      }, 500);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("hide-manifesto").addClass("show-manifesto");
    }

    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#carousel-homepage").ripples({
    resolution: 1024,
    // dropRadius: 20,
    perturbance: 0.01
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var $event_url = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#event_url");
    if (!$event_url.length) return;

    try {
      $event_url = JSON.parse($event_url.text());
    } catch (err) {
      // if invalid json
      return;
    }

    new QRCode(document.getElementById("qrcode"), $event_url);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#teamModal").on("show.bs.modal", function (event) {
    // Get the button that triggered the modal
    var button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.relatedTarget); // Reset values

    var teamObj = null;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-email").html("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-website").html("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-facebook").html("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-linkedin").html("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-weibo").html("");
    teamObj = {
      name: button.siblings(".team-member__name").text(),
      pos: button.siblings(".team-member__pos").text(),
      why: button.siblings(".team-member__why").text(),
      email: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(button.siblings(".team-member__email").text()),
      web: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(button.siblings(".team-member__website").text()),
      fb: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(button.siblings(".team-member__facebook").text()),
      "in": jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(button.siblings(".team-member__linkedin").text()),
      wb: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(button.siblings(".team-member__weibo").text())
    };

    for (var _i = 0, _Object$keys = Object.keys(teamObj); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var val = teamObj[key];

      if (key === "name" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-title").text(teamObj.name);
      }

      if (key === "pos" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-pos").text(teamObj.pos);
      }

      if (key === "why" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-why").text(teamObj.why);
      }

      if (key === "email" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-email").html("<a href=\"mailto:".concat(teamObj.email, "\"><i class=\"fas fa-envelope\"></i></a>"));
      }

      if (key === "web" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-website").html("<a href=\"".concat(teamObj.web, "\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"fas fa-globe\"></i></a>"));
      }

      if (key === "fb" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-facebook").html("<a href=\"".concat(teamObj.fb, "\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"fab fa-facebook-f\"></i></a>"));
      }

      if (key === "in" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-linkedin").html("<a href=\"".concat(teamObj["in"], "\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"fab fa-linkedin-in\"></i></a>"));
      }

      if (key === "wb" && val) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".modal-weibo").html("<a href=\"".concat(teamObj.wb, "\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"fab fa-weibo\"></i></a>"));
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".share-button").click(function (e) {
    e.preventDefault();
    var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href");
    window.open(link, "", "width=600,height=300");
  });
  var form_interest_last = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#form-interest .wpcf7-list-item.last input");
  var form_interest_other = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#form-interest-other");
  var form_found = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#form-found");
  var form_found_other = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#form-found-other");
  form_interest_last.on("click", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(":checked")) {
      form_interest_other.show();
    } else {
      form_interest_other.hide();
    }
  });
  form_found.on("click", function () {
    var radioText = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="form-found"]:checked').val();

    if (radioText == "Other") {
      form_found_other.show();
    } else {
      form_found_other.hide();
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keyup(function (e) {
  if (e.keyCode == 27) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").hasClass("show-nav")) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("show-nav").addClass("hide-nav");
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("hide-nav");
      }, 500);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("hide-nav").addClass("show-nav");
    }
  }
});

/***/ }),

/***/ "./src/assets/qrcode.min.js":
/*!**********************************!*\
  !*** ./src/assets/qrcode.min.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var QRCode;
!function () {
  function a(a) {
    this.mode = c.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];

    for (var b = [], d = 0, e = this.data.length; e > d; d++) {
      var f = this.data.charCodeAt(d);
      f > 65536 ? (b[0] = 240 | (1835008 & f) >>> 18, b[1] = 128 | (258048 & f) >>> 12, b[2] = 128 | (4032 & f) >>> 6, b[3] = 128 | 63 & f) : f > 2048 ? (b[0] = 224 | (61440 & f) >>> 12, b[1] = 128 | (4032 & f) >>> 6, b[2] = 128 | 63 & f) : f > 128 ? (b[0] = 192 | (1984 & f) >>> 6, b[1] = 128 | 63 & f) : b[0] = f, this.parsedData = this.parsedData.concat(b);
    }

    this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
  }

  function b(a, b) {
    this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
  }

  function i(a, b) {
    if (void 0 == a.length) throw new Error(a.length + "/" + b);

    for (var c = 0; c < a.length && 0 == a[c];) {
      c++;
    }

    this.num = new Array(a.length - c + b);

    for (var d = 0; d < a.length - c; d++) {
      this.num[d] = a[d + c];
    }
  }

  function j(a, b) {
    this.totalCount = a, this.dataCount = b;
  }

  function k() {
    this.buffer = [], this.length = 0;
  }

  function m() {
    return "undefined" != typeof CanvasRenderingContext2D;
  }

  function n() {
    var a = !1,
        b = navigator.userAgent;
    return /android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a;
  }

  function r(a, b) {
    for (var c = 1, e = s(a), f = 0, g = l.length; g >= f; f++) {
      var h = 0;

      switch (b) {
        case d.L:
          h = l[f][0];
          break;

        case d.M:
          h = l[f][1];
          break;

        case d.Q:
          h = l[f][2];
          break;

        case d.H:
          h = l[f][3];
      }

      if (h >= e) break;
      c++;
    }

    if (c > l.length) throw new Error("Too long data");
    return c;
  }

  function s(a) {
    var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return b.length + (b.length != a ? 3 : 0);
  }

  a.prototype = {
    getLength: function getLength() {
      return this.parsedData.length;
    },
    write: function write(a) {
      for (var b = 0, c = this.parsedData.length; c > b; b++) {
        a.put(this.parsedData[b], 8);
      }
    }
  }, b.prototype = {
    addData: function addData(b) {
      var c = new a(b);
      this.dataList.push(c), this.dataCache = null;
    },
    isDark: function isDark(a, b) {
      if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
      return this.modules[a][b];
    },
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    make: function make() {
      this.makeImpl(!1, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(a, c) {
      this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);

      for (var d = 0; d < this.moduleCount; d++) {
        this.modules[d] = new Array(this.moduleCount);

        for (var e = 0; e < this.moduleCount; e++) {
          this.modules[d][e] = null;
        }
      }

      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c);
    },
    setupPositionProbePattern: function setupPositionProbePattern(a, b) {
      for (var c = -1; 7 >= c; c++) {
        if (!(-1 >= a + c || this.moduleCount <= a + c)) for (var d = -1; 7 >= d; d++) {
          -1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1);
        }
      }
    },
    getBestMaskPattern: function getBestMaskPattern() {
      for (var a = 0, b = 0, c = 0; 8 > c; c++) {
        this.makeImpl(!0, c);
        var d = f.getLostPoint(this);
        (0 == c || a > d) && (a = d, b = c);
      }

      return b;
    },
    createMovieClip: function createMovieClip(a, b, c) {
      var d = a.createEmptyMovieClip(b, c),
          e = 1;
      this.make();

      for (var f = 0; f < this.modules.length; f++) {
        for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
          var i = h * e,
              j = this.modules[f][h];
          j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill());
        }
      }

      return d;
    },
    setupTimingPattern: function setupTimingPattern() {
      for (var a = 8; a < this.moduleCount - 8; a++) {
        null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
      }

      for (var b = 8; b < this.moduleCount - 8; b++) {
        null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2);
      }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      for (var a = f.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++) {
        for (var c = 0; c < a.length; c++) {
          var d = a[b],
              e = a[c];
          if (null == this.modules[d][e]) for (var g = -2; 2 >= g; g++) {
            for (var h = -2; 2 >= h; h++) {
              this.modules[d + g][e + h] = -2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? !0 : !1;
            }
          }
        }
      }
    },
    setupTypeNumber: function setupTypeNumber(a) {
      for (var b = f.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
        var d = !a && 1 == (1 & b >> c);
        this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d;
      }

      for (var c = 0; 18 > c; c++) {
        var d = !a && 1 == (1 & b >> c);
        this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d;
      }
    },
    setupTypeInfo: function setupTypeInfo(a, b) {
      for (var c = this.errorCorrectLevel << 3 | b, d = f.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
        var g = !a && 1 == (1 & d >> e);
        6 > e ? this.modules[e][8] = g : 8 > e ? this.modules[e + 1][8] = g : this.modules[this.moduleCount - 15 + e][8] = g;
      }

      for (var e = 0; 15 > e; e++) {
        var g = !a && 1 == (1 & d >> e);
        8 > e ? this.modules[8][this.moduleCount - e - 1] = g : 9 > e ? this.modules[8][15 - e - 1 + 1] = g : this.modules[8][15 - e - 1] = g;
      }

      this.modules[this.moduleCount - 8][8] = !a;
    },
    mapData: function mapData(a, b) {
      for (var c = -1, d = this.moduleCount - 1, e = 7, g = 0, h = this.moduleCount - 1; h > 0; h -= 2) {
        for (6 == h && h--;;) {
          for (var i = 0; 2 > i; i++) {
            if (null == this.modules[d][h - i]) {
              var j = !1;
              g < a.length && (j = 1 == (1 & a[g] >>> e));
              var k = f.getMask(b, d, h - i);
              k && (j = !j), this.modules[d][h - i] = j, e--, -1 == e && (g++, e = 7);
            }
          }

          if (d += c, 0 > d || this.moduleCount <= d) {
            d -= c, c = -c;
            break;
          }
        }
      }
    }
  }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function (a, c, d) {
    for (var e = j.getRSBlocks(a, c), g = new k(), h = 0; h < d.length; h++) {
      var i = d[h];
      g.put(i.mode, 4), g.put(i.getLength(), f.getLengthInBits(i.mode, a)), i.write(g);
    }

    for (var l = 0, h = 0; h < e.length; h++) {
      l += e[h].dataCount;
    }

    if (g.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + g.getLengthInBits() + ">" + 8 * l + ")");

    for (g.getLengthInBits() + 4 <= 8 * l && g.put(0, 4); 0 != g.getLengthInBits() % 8;) {
      g.putBit(!1);
    }

    for (;;) {
      if (g.getLengthInBits() >= 8 * l) break;
      if (g.put(b.PAD0, 8), g.getLengthInBits() >= 8 * l) break;
      g.put(b.PAD1, 8);
    }

    return b.createBytes(g, e);
  }, b.createBytes = function (a, b) {
    for (var c = 0, d = 0, e = 0, g = new Array(b.length), h = new Array(b.length), j = 0; j < b.length; j++) {
      var k = b[j].dataCount,
          l = b[j].totalCount - k;
      d = Math.max(d, k), e = Math.max(e, l), g[j] = new Array(k);

      for (var m = 0; m < g[j].length; m++) {
        g[j][m] = 255 & a.buffer[m + c];
      }

      c += k;
      var n = f.getErrorCorrectPolynomial(l),
          o = new i(g[j], n.getLength() - 1),
          p = o.mod(n);
      h[j] = new Array(n.getLength() - 1);

      for (var m = 0; m < h[j].length; m++) {
        var q = m + p.getLength() - h[j].length;
        h[j][m] = q >= 0 ? p.get(q) : 0;
      }
    }

    for (var r = 0, m = 0; m < b.length; m++) {
      r += b[m].totalCount;
    }

    for (var s = new Array(r), t = 0, m = 0; d > m; m++) {
      for (var j = 0; j < b.length; j++) {
        m < g[j].length && (s[t++] = g[j][m]);
      }
    }

    for (var m = 0; e > m; m++) {
      for (var j = 0; j < b.length; j++) {
        m < h[j].length && (s[t++] = h[j][m]);
      }
    }

    return s;
  };

  for (var c = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
  }, d = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  }, e = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }, f = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function getBCHTypeInfo(a) {
      for (var b = a << 10; f.getBCHDigit(b) - f.getBCHDigit(f.G15) >= 0;) {
        b ^= f.G15 << f.getBCHDigit(b) - f.getBCHDigit(f.G15);
      }

      return (a << 10 | b) ^ f.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(a) {
      for (var b = a << 12; f.getBCHDigit(b) - f.getBCHDigit(f.G18) >= 0;) {
        b ^= f.G18 << f.getBCHDigit(b) - f.getBCHDigit(f.G18);
      }

      return a << 12 | b;
    },
    getBCHDigit: function getBCHDigit(a) {
      for (var b = 0; 0 != a;) {
        b++, a >>>= 1;
      }

      return b;
    },
    getPatternPosition: function getPatternPosition(a) {
      return f.PATTERN_POSITION_TABLE[a - 1];
    },
    getMask: function getMask(a, b, c) {
      switch (a) {
        case e.PATTERN000:
          return 0 == (b + c) % 2;

        case e.PATTERN001:
          return 0 == b % 2;

        case e.PATTERN010:
          return 0 == c % 3;

        case e.PATTERN011:
          return 0 == (b + c) % 3;

        case e.PATTERN100:
          return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;

        case e.PATTERN101:
          return 0 == b * c % 2 + b * c % 3;

        case e.PATTERN110:
          return 0 == (b * c % 2 + b * c % 3) % 2;

        case e.PATTERN111:
          return 0 == (b * c % 3 + (b + c) % 2) % 2;

        default:
          throw new Error("bad maskPattern:" + a);
      }
    },
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(a) {
      for (var b = new i([1], 0), c = 0; a > c; c++) {
        b = b.multiply(new i([1, g.gexp(c)], 0));
      }

      return b;
    },
    getLengthInBits: function getLengthInBits(a, b) {
      if (b >= 1 && 10 > b) switch (a) {
        case c.MODE_NUMBER:
          return 10;

        case c.MODE_ALPHA_NUM:
          return 9;

        case c.MODE_8BIT_BYTE:
          return 8;

        case c.MODE_KANJI:
          return 8;

        default:
          throw new Error("mode:" + a);
      } else if (27 > b) switch (a) {
        case c.MODE_NUMBER:
          return 12;

        case c.MODE_ALPHA_NUM:
          return 11;

        case c.MODE_8BIT_BYTE:
          return 16;

        case c.MODE_KANJI:
          return 10;

        default:
          throw new Error("mode:" + a);
      } else {
        if (!(41 > b)) throw new Error("type:" + b);

        switch (a) {
          case c.MODE_NUMBER:
            return 14;

          case c.MODE_ALPHA_NUM:
            return 13;

          case c.MODE_8BIT_BYTE:
            return 16;

          case c.MODE_KANJI:
            return 12;

          default:
            throw new Error("mode:" + a);
        }
      }
    },
    getLostPoint: function getLostPoint(a) {
      for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++) {
        for (var e = 0; b > e; e++) {
          for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++) {
            if (!(0 > d + h || d + h >= b)) for (var i = -1; 1 >= i; i++) {
              0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
            }
          }

          f > 5 && (c += 3 + f - 5);
        }
      }

      for (var d = 0; b - 1 > d; d++) {
        for (var e = 0; b - 1 > e; e++) {
          var j = 0;
          a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3);
        }
      }

      for (var d = 0; b > d; d++) {
        for (var e = 0; b - 6 > e; e++) {
          a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
        }
      }

      for (var e = 0; b > e; e++) {
        for (var d = 0; b - 6 > d; d++) {
          a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
        }
      }

      for (var k = 0, e = 0; b > e; e++) {
        for (var d = 0; b > d; d++) {
          a.isDark(d, e) && k++;
        }
      }

      var l = Math.abs(100 * k / b / b - 50) / 5;
      return c += 10 * l;
    }
  }, g = {
    glog: function glog(a) {
      if (1 > a) throw new Error("glog(" + a + ")");
      return g.LOG_TABLE[a];
    },
    gexp: function gexp(a) {
      for (; 0 > a;) {
        a += 255;
      }

      for (; a >= 256;) {
        a -= 255;
      }

      return g.EXP_TABLE[a];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  }, h = 0; 8 > h; h++) {
    g.EXP_TABLE[h] = 1 << h;
  }

  for (var h = 8; 256 > h; h++) {
    g.EXP_TABLE[h] = g.EXP_TABLE[h - 4] ^ g.EXP_TABLE[h - 5] ^ g.EXP_TABLE[h - 6] ^ g.EXP_TABLE[h - 8];
  }

  for (var h = 0; 255 > h; h++) {
    g.LOG_TABLE[g.EXP_TABLE[h]] = h;
  }

  i.prototype = {
    get: function get(a) {
      return this.num[a];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    multiply: function multiply(a) {
      for (var b = new Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++) {
        for (var d = 0; d < a.getLength(); d++) {
          b[c + d] ^= g.gexp(g.glog(this.get(c)) + g.glog(a.get(d)));
        }
      }

      return new i(b, 0);
    },
    mod: function mod(a) {
      if (this.getLength() - a.getLength() < 0) return this;

      for (var b = g.glog(this.get(0)) - g.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) {
        c[d] = this.get(d);
      }

      for (var d = 0; d < a.getLength(); d++) {
        c[d] ^= g.gexp(g.glog(a.get(d)) + b);
      }

      return new i(c, 0).mod(a);
    }
  }, j.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], j.getRSBlocks = function (a, b) {
    var c = j.getRsBlockTable(a, b);
    if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);

    for (var d = c.length / 3, e = [], f = 0; d > f; f++) {
      for (var g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], k = 0; g > k; k++) {
        e.push(new j(h, i));
      }
    }

    return e;
  }, j.getRsBlockTable = function (a, b) {
    switch (b) {
      case d.L:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 0];

      case d.M:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 1];

      case d.Q:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 2];

      case d.H:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 3];

      default:
        return void 0;
    }
  }, k.prototype = {
    get: function get(a) {
      var b = Math.floor(a / 8);
      return 1 == (1 & this.buffer[b] >>> 7 - a % 8);
    },
    put: function put(a, b) {
      for (var c = 0; b > c; c++) {
        this.putBit(1 == (1 & a >>> b - c - 1));
      }
    },
    getLengthInBits: function getLengthInBits() {
      return this.length;
    },
    putBit: function putBit(a) {
      var b = Math.floor(this.length / 8);
      this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++;
    }
  };

  var l = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
      o = function () {
    var a = function a(_a, b) {
      this._el = _a, this._htOption = b;
    };

    return a.prototype.draw = function (a) {
      function g(a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", a);

        for (var d in b) {
          b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
        }

        return c;
      }

      var b = this._htOption,
          c = this._el,
          d = a.getModuleCount();
      Math.floor(b.width / d), Math.floor(b.height / d), this.clear();
      var h = g("svg", {
        viewBox: "0 0 " + String(d) + " " + String(d),
        width: "100%",
        height: "100%",
        fill: b.colorLight
      });
      h.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), c.appendChild(h), h.appendChild(g("rect", {
        fill: b.colorDark,
        width: "1",
        height: "1",
        id: "template"
      }));

      for (var i = 0; d > i; i++) {
        for (var j = 0; d > j; j++) {
          if (a.isDark(i, j)) {
            var k = g("use", {
              x: String(i),
              y: String(j)
            });
            k.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), h.appendChild(k);
          }
        }
      }
    }, a.prototype.clear = function () {
      for (; this._el.hasChildNodes();) {
        this._el.removeChild(this._el.lastChild);
      }
    }, a;
  }(),
      p = "svg" === document.documentElement.tagName.toLowerCase(),
      q = p ? o : m() ? function () {
    function a() {
      this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none";
    }

    function d(a, b) {
      var c = this;

      if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
        var d = document.createElement("img"),
            e = function e() {
          c._bSupportDataURI = !1, c._fFail && _fFail.call(c);
        },
            f = function f() {
          c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c);
        };

        return d.onabort = e, d.onerror = e, d.onload = f, d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", void 0;
      }

      c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c);
    }

    if (this._android && this._android <= 2.1) {
      var b = 1 / window.devicePixelRatio,
          c = CanvasRenderingContext2D.prototype.drawImage;

      CanvasRenderingContext2D.prototype.drawImage = function (a, d, e, f, g, h, i, j) {
        if ("nodeName" in a && /img/i.test(a.nodeName)) for (var l = arguments.length - 1; l >= 1; l--) {
          arguments[l] = arguments[l] * b;
        } else "undefined" == typeof j && (arguments[1] *= b, arguments[2] *= b, arguments[3] *= b, arguments[4] *= b);
        c.apply(this, arguments);
      };
    }

    var e = function e(a, b) {
      this._bIsPainted = !1, this._android = n(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null;
    };

    return e.prototype.draw = function (a) {
      var b = this._elImage,
          c = this._oContext,
          d = this._htOption,
          e = a.getModuleCount(),
          f = d.width / e,
          g = d.height / e,
          h = Math.round(f),
          i = Math.round(g);
      b.style.display = "none", this.clear();

      for (var j = 0; e > j; j++) {
        for (var k = 0; e > k; k++) {
          var l = a.isDark(j, k),
              m = k * f,
              n = j * g;
          c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i);
        }
      }

      this._bIsPainted = !0;
    }, e.prototype.makeImage = function () {
      this._bIsPainted && d.call(this, a);
    }, e.prototype.isPainted = function () {
      return this._bIsPainted;
    }, e.prototype.clear = function () {
      this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
    }, e.prototype.round = function (a) {
      return a ? Math.floor(1e3 * a) / 1e3 : a;
    }, e;
  }() : function () {
    var a = function a(_a2, b) {
      this._el = _a2, this._htOption = b;
    };

    return a.prototype.draw = function (a) {
      for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
        g.push("<tr>");

        for (var i = 0; d > i; i++) {
          g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
        }

        g.push("</tr>");
      }

      g.push("</table>"), c.innerHTML = g.join("");
      var j = c.childNodes[0],
          k = (b.width - j.offsetWidth) / 2,
          l = (b.height - j.offsetHeight) / 2;
      k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px");
    }, a.prototype.clear = function () {
      this._el.innerHTML = "";
    }, a;
  }();

  QRCode = function QRCode(a, b) {
    if (this._htOption = {
      width: 256,
      height: 256,
      typeNumber: 4,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: d.H
    }, "string" == typeof b && (b = {
      text: b
    }), b) for (var c in b) {
      this._htOption[c] = b[c];
    }
    "string" == typeof a && (a = document.getElementById(a)), this._android = n(), this._el = a, this._oQRCode = null, this._oDrawing = new q(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text);
  }, QRCode.prototype.makeCode = function (a) {
    this._oQRCode = new b(r(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage();
  }, QRCode.prototype.makeImage = function () {
    "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
  }, QRCode.prototype.clear = function () {
    this._oDrawing.clear();
  }, QRCode.CorrectLevel = d;
}();

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/assets/js/bundle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/calvintan/code/wp/gi/wp-content/themes/giwebsite/src/assets/js/bundle.js */"./src/assets/js/bundle.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvcG9wcGVyLmpzL2Rpc3QvZXNtL3BvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29scy9zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnkucmlwcGxlcy9kaXN0L2pxdWVyeS5yaXBwbGVzLW1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcXJjb2RlLm1pbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJUUkFOU0lUSU9OX0VORCIsIk1BWF9VSUQiLCJNSUxMSVNFQ09ORFNfTVVMVElQTElFUiIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiJCIsImV2ZW50IiwiY2FsbGVkIiwiVXRpbCIsInNldFRpbWVvdXQiLCJnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50IiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsImRvY3VtZW50IiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImhyZWZBdHRyIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInJlZmxvdyIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic3VwcG9ydHNUcmFuc2l0aW9uRW5kIiwiQm9vbGVhbiIsImlzRWxlbWVudCIsIm9iaiIsInR5cGVDaGVja0NvbmZpZyIsIk9iamVjdCIsImV4cGVjdGVkVHlwZXMiLCJjb25maWdUeXBlcyIsInZhbHVlIiwiY29uZmlnIiwidmFsdWVUeXBlIiwidG9UeXBlIiwiY29tcG9uZW50TmFtZSIsImZpbmRTaGFkb3dSb290Iiwicm9vdCIsImpRdWVyeURldGVjdGlvbiIsInZlcnNpb24iLCJtaW5NYWpvciIsImx0TWFqb3IiLCJtaW5NaW5vciIsIm1pblBhdGNoIiwibWF4TWFqb3IiLCJzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCIsIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJTZWxlY3RvciIsIkRJU01JU1MiLCJFdmVudCIsIkNMT1NFIiwiQ0xPU0VEIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJBTEVSVCIsIkZBREUiLCJTSE9XIiwiQWxlcnQiLCJjbG9zZSIsInJvb3RFbGVtZW50IiwiY3VzdG9tRXZlbnQiLCJkaXNwb3NlIiwiX2dldFJvb3RFbGVtZW50IiwicGFyZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiY2xvc2VFdmVudCIsIl9yZW1vdmVFbGVtZW50IiwiX2Rlc3Ryb3lFbGVtZW50IiwiX2pRdWVyeUludGVyZmFjZSIsIiRlbGVtZW50IiwiZGF0YSIsIl9oYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsIkFDVElWRSIsIkJVVFRPTiIsIkZPQ1VTIiwiREFUQV9UT0dHTEVfQ0FSUk9UIiwiREFUQV9UT0dHTEVTIiwiREFUQV9UT0dHTEUiLCJEQVRBX1RPR0dMRVNfQlVUVE9OUyIsIklOUFVUIiwiRk9DVVNfQkxVUl9EQVRBX0FQSSIsIkxPQURfREFUQV9BUEkiLCJCdXR0b24iLCJ0b2dnbGUiLCJ0cmlnZ2VyQ2hhbmdlRXZlbnQiLCJhZGRBcmlhUHJlc3NlZCIsImlucHV0IiwiYWN0aXZlRWxlbWVudCIsImJ1dHRvbiIsImlucHV0QnRuIiwiYnV0dG9ucyIsImkiLCJsZW4iLCJBUlJPV19MRUZUX0tFWUNPREUiLCJBUlJPV19SSUdIVF9LRVlDT0RFIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiRGlyZWN0aW9uIiwiTkVYVCIsIlBSRVYiLCJMRUZUIiwiUklHSFQiLCJTTElERSIsIlNMSUQiLCJLRVlET1dOIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJUT1VDSFNUQVJUIiwiVE9VQ0hNT1ZFIiwiVE9VQ0hFTkQiLCJQT0lOVEVSRE9XTiIsIlBPSU5URVJVUCIsIkRSQUdfU1RBUlQiLCJDQVJPVVNFTCIsIklURU0iLCJQT0lOVEVSX0VWRU5UIiwiQUNUSVZFX0lURU0iLCJJVEVNX0lNRyIsIk5FWFRfUFJFViIsIklORElDQVRPUlMiLCJEQVRBX1NMSURFIiwiREFUQV9SSURFIiwiUG9pbnRlclR5cGUiLCJUT1VDSCIsIlBFTiIsIkNhcm91c2VsIiwibmF2aWdhdG9yIiwid2luZG93IiwibmV4dCIsIm5leHRXaGVuVmlzaWJsZSIsInByZXYiLCJjbGVhckludGVydmFsIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInRvIiwiYWN0aXZlSW5kZXgiLCJpbmRleCIsImRpcmVjdGlvbiIsIl9nZXRDb25maWciLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsImUiLCJfa2V5ZG93biIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0SXRlbUJ5RGlyZWN0aW9uIiwiaXNOZXh0RGlyZWN0aW9uIiwiaXNQcmV2RGlyZWN0aW9uIiwibGFzdEl0ZW1JbmRleCIsImlzR29pbmdUb1dyYXAiLCJkZWx0YSIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4Iiwic2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJmcm9tIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJpbmRpY2F0b3JzIiwibmV4dEluZGljYXRvciIsIl9zbGlkZSIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJldmVudERpcmVjdGlvbk5hbWUiLCJzbGlkRXZlbnQiLCJuZXh0RWxlbWVudEludGVydmFsIiwicGFyc2VJbnQiLCJfY29uZmlnIiwiYWN0aW9uIiwiX2RhdGFBcGlDbGlja0hhbmRsZXIiLCJ0YXJnZXQiLCJzbGlkZUluZGV4IiwiY2Fyb3VzZWxzIiwiJGNhcm91c2VsIiwiU0hPV04iLCJISURFIiwiSElEREVOIiwiQ09MTEFQU0UiLCJDT0xMQVBTSU5HIiwiQ09MTEFQU0VEIiwiRGltZW5zaW9uIiwiV0lEVEgiLCJIRUlHSFQiLCJBQ1RJVkVTIiwiQ29sbGFwc2UiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJzaG93IiwiYWN0aXZlcyIsImFjdGl2ZXNEYXRhIiwic3RhcnRFdmVudCIsImRpbWVuc2lvbiIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJzY3JvbGxTaXplIiwiaGlkZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsInRyaWdnZXIiLCIkZWxlbSIsInNldFRyYW5zaXRpb25pbmciLCJfZ2V0RGltZW5zaW9uIiwiaGFzV2lkdGgiLCJfZ2V0UGFyZW50IiwiY2hpbGRyZW4iLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaXNPcGVuIiwidHJpZ2dlckFycmF5IiwiX2dldFRhcmdldEZyb21FbGVtZW50IiwiJHRoaXMiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIkNMSUNLIiwiS0VZRE9XTl9EQVRBX0FQSSIsIktFWVVQX0RBVEFfQVBJIiwiRElTQUJMRUQiLCJEUk9QVVAiLCJEUk9QUklHSFQiLCJEUk9QTEVGVCIsIk1FTlVSSUdIVCIsIk1FTlVMRUZUIiwiUE9TSVRJT05fU1RBVElDIiwiRk9STV9DSElMRCIsIk1FTlUiLCJOQVZCQVJfTkFWIiwiVklTSUJMRV9JVEVNUyIsIkF0dGFjaG1lbnRNYXAiLCJUT1AiLCJUT1BFTkQiLCJCT1RUT00iLCJCT1RUT01FTkQiLCJSSUdIVEVORCIsIkxFRlRFTkQiLCJvZmZzZXQiLCJmbGlwIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJpc0FjdGl2ZSIsInVzZVBvcHBlciIsIl9lbGVtZW50Iiwic2hvd0V2ZW50IiwicmVmZXJlbmNlRWxlbWVudCIsImhpZGVFdmVudCIsInVwZGF0ZSIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCIkcGFyZW50RHJvcGRvd24iLCJwbGFjZW1lbnQiLCJfZGV0ZWN0TmF2YmFyIiwiX2dldE9mZnNldCIsIl9nZXRQb3BwZXJDb25maWciLCJtb2RpZmllcnMiLCJlbmFibGVkIiwicHJldmVudE92ZXJmbG93IiwiYm91bmRhcmllc0VsZW1lbnQiLCJfY2xlYXJNZW51cyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiZHJvcGRvd25NZW51IiwiX2dldFBhcmVudEZyb21FbGVtZW50IiwiX2RhdGFBcGlLZXlkb3duSGFuZGxlciIsIml0ZW1zIiwiYmFja2Ryb3AiLCJmb2N1cyIsIkhJREVfUFJFVkVOVEVEIiwiRk9DVVNJTiIsIlJFU0laRSIsIkNMSUNLX0RJU01JU1MiLCJLRVlET1dOX0RJU01JU1MiLCJNT1VTRVVQX0RJU01JU1MiLCJNT1VTRURPV05fRElTTUlTUyIsIlNDUk9MTEFCTEUiLCJTQ1JPTExCQVJfTUVBU1VSRVIiLCJCQUNLRFJPUCIsIk9QRU4iLCJTVEFUSUMiLCJESUFMT0ciLCJNT0RBTF9CT0RZIiwiREFUQV9ESVNNSVNTIiwiRklYRURfQ09OVEVOVCIsIlNUSUNLWV9DT05URU5UIiwiTW9kYWwiLCJ0cmFuc2l0aW9uIiwiaGFuZGxlVXBkYXRlIiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJoaWRlRXZlbnRQcmV2ZW50ZWQiLCJtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiIsIl9zaG93RWxlbWVudCIsIm1vZGFsQm9keSIsIk5vZGUiLCJzaG93bkV2ZW50IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX2VuZm9yY2VGb2N1cyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9oaWRlTW9kYWwiLCJfcmVtb3ZlQmFja2Ryb3AiLCJfc2hvd0JhY2tkcm9wIiwiYW5pbWF0ZSIsImNhbGxiYWNrIiwiYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJjYWxsYmFja1JlbW92ZSIsIl9hZGp1c3REaWFsb2ciLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJfcmVzZXRBZGp1c3RtZW50cyIsIl9jaGVja1Njcm9sbGJhciIsInJlY3QiLCJfc2V0U2Nyb2xsYmFyIiwiZml4ZWRDb250ZW50Iiwic3RpY2t5Q29udGVudCIsImFjdHVhbFBhZGRpbmciLCJjYWxjdWxhdGVkUGFkZGluZyIsImFjdHVhbE1hcmdpbiIsImNhbGN1bGF0ZWRNYXJnaW4iLCJfcmVzZXRTY3JvbGxiYXIiLCJwYWRkaW5nIiwiZWxlbWVudHMiLCJtYXJnaW4iLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsInVyaUF0dHJzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIkRlZmF1bHRXaGl0ZWxpc3QiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhdHRyTmFtZSIsImF0dHIiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsInJlZ0V4cCIsImF0dHJSZWdleCIsImwiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGbiIsImRvbVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsIndoaXRlbGlzdEtleXMiLCJlbCIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJ3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMiLCJ3aGl0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlIiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50Iiwic2FuaXRpemUiLCJBVVRPIiwiSG92ZXJTdGF0ZSIsIk9VVCIsIklOU0VSVEVEIiwiRk9DVVNPVVQiLCJUT09MVElQIiwiVE9PTFRJUF9JTk5FUiIsIkFSUk9XIiwiVHJpZ2dlciIsIkhPVkVSIiwiTUFOVUFMIiwiVG9vbHRpcCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwIiwidGlwSWQiLCJhdHRhY2htZW50IiwicHJldkhvdmVyU3RhdGUiLCJpc1dpdGhDb250ZW50IiwiYWRkQXR0YWNobWVudENsYXNzIiwiZ2V0VGlwRWxlbWVudCIsInNldENvbnRlbnQiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJzYW5pdGl6ZUh0bWwiLCJnZXRUaXRsZSIsImRlZmF1bHRCc0NvbmZpZyIsImJlaGF2aW9yIiwiYXJyb3ciLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiX2dldENvbnRhaW5lciIsIl9nZXRBdHRhY2htZW50IiwiX3NldExpc3RlbmVycyIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsIl9jbGVhblRpcENsYXNzIiwiJHRpcCIsInRhYkNsYXNzIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsInBvcHBlckluc3RhbmNlIiwicG9wcGVyRGF0YSIsIl9maXhUcmFuc2l0aW9uIiwiaW5pdENvbmZpZ0FuaW1hdGlvbiIsIlRJVExFIiwiQ09OVEVOVCIsIlBvcG92ZXIiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIkFDVElWQVRFIiwiU0NST0xMIiwiRFJPUERPV05fSVRFTSIsIkRST1BET1dOX01FTlUiLCJEQVRBX1NQWSIsIk5BVl9MSVNUX0dST1VQIiwiTkFWX0xJTktTIiwiTkFWX0lURU1TIiwiTElTVF9JVEVNUyIsIkRST1BET1dOIiwiRFJPUERPV05fSVRFTVMiLCJEUk9QRE9XTl9UT0dHTEUiLCJPZmZzZXRNZXRob2QiLCJPRkZTRVQiLCJQT1NJVElPTiIsIlNjcm9sbFNweSIsInJlZnJlc2giLCJhdXRvTWV0aG9kIiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsInRhcmdldHMiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsIml0ZW0iLCJpZCIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwiX2dldE9mZnNldEhlaWdodCIsIl9wcm9jZXNzIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwibWF4U2Nyb2xsIiwib2Zmc2V0TGVuZ3RoIiwiaXNBY3RpdmVUYXJnZXQiLCJfYWN0aXZhdGUiLCJxdWVyaWVzIiwiJGxpbmsiLCJfY2xlYXIiLCJub2RlIiwic2Nyb2xsU3B5cyIsInNjcm9sbFNweXNMZW5ndGgiLCIkc3B5IiwiQUNUSVZFX1VMIiwiRFJPUERPV05fQUNUSVZFX0NISUxEIiwiVGFiIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJwcmV2aW91cyIsImhpZGRlbkV2ZW50IiwiYWN0aXZlRWxlbWVudHMiLCJhY3RpdmUiLCJpc1RyYW5zaXRpb25pbmciLCJfdHJhbnNpdGlvbkNvbXBsZXRlIiwiZHJvcGRvd25DaGlsZCIsImRyb3Bkb3duRWxlbWVudCIsImRyb3Bkb3duVG9nZ2xlTGlzdCIsIlNIT1dJTkciLCJhdXRvaGlkZSIsIlRvYXN0IiwiX2Nsb3NlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwibGVuZ3RoIiwiciIsInNwbGl0IiwibWFwIiwiY3JlYXRlU2hhZGVyIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiRXJyb3IiLCJnZXRTaGFkZXJJbmZvTG9nIiwibyIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsInVuaWZvcm1zIiwibG9jYXRpb25zIiwidXNlUHJvZ3JhbSIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwibiIsImgiLCJleGVjIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiYWN0aXZlVGV4dHVyZSIsIlRFWFRVUkUwIiwiYmluZFRleHR1cmUiLCJURVhUVVJFXzJEIiwibWF0Y2giLCJwdXNoIiwidHlwZSIsImFycmF5VHlwZSIsImxpbmVhclN1cHBvcnQiLCJleHRlbnNpb25zIiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJmb3JFYWNoIiwiZ2V0RXh0ZW5zaW9uIiwiT0VTX3RleHR1cmVfZmxvYXQiLCJGTE9BVCIsIkZsb2F0MzJBcnJheSIsIk9FU190ZXh0dXJlX2hhbGZfZmxvYXQiLCJIQUxGX0ZMT0FUX09FUyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVGcmFtZWJ1ZmZlciIsImJpbmRGcmFtZWJ1ZmZlciIsIkZSQU1FQlVGRkVSIiwidGV4UGFyYW1ldGVyaSIsIlRFWFRVUkVfTUlOX0ZJTFRFUiIsIk5FQVJFU1QiLCJURVhUVVJFX01BR19GSUxURVIiLCJURVhUVVJFX1dSQVBfUyIsIkNMQU1QX1RPX0VER0UiLCJURVhUVVJFX1dSQVBfVCIsInRleEltYWdlMkQiLCJSR0JBIiwiZnJhbWVidWZmZXJUZXh0dXJlMkQiLCJDT0xPUl9BVFRBQ0hNRU5UMCIsImNoZWNrRnJhbWVidWZmZXJTdGF0dXMiLCJGUkFNRUJVRkZFUl9DT01QTEVURSIsImQiLCJJbWFnZURhdGEiLCJjcmVhdGVJbWFnZURhdGEiLCJwcmVwZW5kIiwiYyIsImRlc3Ryb3llZCIsInN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCIkZWwiLCJpbnRlcmFjdGl2ZSIsInJlc29sdXRpb24iLCJ0ZXh0dXJlRGVsdGEiLCJwZXJ0dXJiYW5jZSIsImRyb3BSYWRpdXMiLCJjcm9zc09yaWdpbiIsImltYWdlVXJsIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjYW52YXMiLCIkY2FudmFzIiwiY3NzIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJhZGRDbGFzcyIsImFwcGVuZCIsInVwZGF0ZVNpemUiLCJiaW5kIiwib24iLCJ0ZXh0dXJlcyIsImZyYW1lYnVmZmVycyIsImJ1ZmZlcldyaXRlSW5kZXgiLCJidWZmZXJSZWFkSW5kZXgiLCJmIiwiTElORUFSIiwicXVhZCIsImNyZWF0ZUJ1ZmZlciIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJidWZmZXJEYXRhIiwiU1RBVElDX0RSQVciLCJpbml0U2hhZGVycyIsImluaXRUZXh0dXJlIiwic2V0VHJhbnNwYXJlbnRUZXh0dXJlIiwibG9hZEltYWdlIiwiY2xlYXJDb2xvciIsImJsZW5kRnVuYyIsIlNSQ19BTFBIQSIsIk9ORV9NSU5VU19TUkNfQUxQSEEiLCJ2aXNpYmxlIiwicnVubmluZyIsImluaXRlZCIsInNldHVwUG9pbnRlckV2ZW50cyIsIkRFRkFVTFRTIiwicHJvdG90eXBlIiwiZHJvcEF0UG9pbnRlciIsIm9yaWdpbmFsRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsIm9yaWdpbmFsQ3NzQmFja2dyb3VuZEltYWdlIiwiaW1hZ2VTb3VyY2UiLCJJbWFnZSIsIm9ubG9hZCIsIlJFUEVBVCIsImJhY2tncm91bmRUZXh0dXJlIiwiVU5TSUdORURfQllURSIsImJhY2tncm91bmRXaWR0aCIsImJhY2tncm91bmRIZWlnaHQiLCJoaWRlQ3NzQmFja2dyb3VuZCIsIm9uZXJyb3IiLCJzcmMiLCJjb21wdXRlVGV4dHVyZUJvdW5kYXJpZXMiLCJyZW5kZXIiLCJkcmF3UXVhZCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVfRkFOIiwidmlld3BvcnQiLCJCTEVORCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJyZW5kZXJQcm9ncmFtIiwidW5pZm9ybTFmIiwidW5pZm9ybTJmdiIsInRvcExlZnQiLCJib3R0b21SaWdodCIsImNvbnRhaW5lclJhdGlvIiwidW5pZm9ybTFpIiwic2FtcGxlckJhY2tncm91bmQiLCJzYW1wbGVyUmlwcGxlcyIsInVwZGF0ZVByb2dyYW0iLCJzd2FwQnVmZmVySW5kaWNlcyIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJtYXgiLCJtaW4iLCJqb2luIiwiZHJvcFByb2dyYW0iLCJwaXhlbFN0b3JlaSIsIlVOUEFDS19GTElQX1lfV0VCR0wiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm9yaWdpbmFsSW5saW5lQ3NzIiwicmVzdG9yZUNzc0JhY2tncm91bmQiLCJkcm9wIiwicGFnZVgiLCJwYWdlWSIsImNlbnRlciIsInJhZGl1cyIsInN0cmVuZ3RoIiwiZGVzdHJveSIsIm9mZiIsInJlbW92ZUNsYXNzIiwicmVtb3ZlRGF0YSIsInJlbW92ZSIsInBsYXkiLCJzZXQiLCJmbiIsInJpcHBsZXMiLCJhcmd1bWVudHMiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsImVhY2giLCJleHRlbmQiLCJhcHBseSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsImciLCJGdW5jdGlvbiIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwiJGV2ZW50X3VybCIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJlcnIiLCJRUkNvZGUiLCJnZXRFbGVtZW50QnlJZCIsInRlYW1PYmoiLCJmaW5kIiwibmFtZSIsInNpYmxpbmdzIiwicG9zIiwid2h5IiwiZW1haWwiLCJ0cmltIiwid2ViIiwiZmIiLCJ3YiIsImtleXMiLCJrZXkiLCJ2YWwiLCJwcmV2ZW50RGVmYXVsdCIsImxpbmsiLCJvcGVuIiwiZm9ybV9pbnRlcmVzdF9sYXN0IiwiZm9ybV9pbnRlcmVzdF9vdGhlciIsImZvcm1fZm91bmQiLCJmb3JtX2ZvdW5kX290aGVyIiwiaXMiLCJyYWRpb1RleHQiLCJrZXl1cCIsImtleUNvZGUiLCJtb2RlIiwiTU9ERV84QklUX0JZVEUiLCJwYXJzZWREYXRhIiwiY2hhckNvZGVBdCIsImNvbmNhdCIsInVuc2hpZnQiLCJ0eXBlTnVtYmVyIiwiZXJyb3JDb3JyZWN0TGV2ZWwiLCJtb2R1bGVzIiwibW9kdWxlQ291bnQiLCJkYXRhQ2FjaGUiLCJkYXRhTGlzdCIsIm51bSIsImoiLCJ0b3RhbENvdW50IiwiZGF0YUNvdW50IiwiayIsImJ1ZmZlciIsIm0iLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJ1c2VyQWdlbnQiLCJ0ZXN0IiwiYU1hdCIsInRvU3RyaW5nIiwiTCIsIk0iLCJRIiwiSCIsImVuY29kZVVSSSIsInJlcGxhY2UiLCJnZXRMZW5ndGgiLCJ3cml0ZSIsInB1dCIsImFkZERhdGEiLCJpc0RhcmsiLCJnZXRNb2R1bGVDb3VudCIsIm1ha2UiLCJtYWtlSW1wbCIsImdldEJlc3RNYXNrUGF0dGVybiIsInNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4iLCJzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybiIsInNldHVwVGltaW5nUGF0dGVybiIsInNldHVwVHlwZUluZm8iLCJzZXR1cFR5cGVOdW1iZXIiLCJjcmVhdGVEYXRhIiwibWFwRGF0YSIsImdldExvc3RQb2ludCIsImNyZWF0ZU1vdmllQ2xpcCIsImNyZWF0ZUVtcHR5TW92aWVDbGlwIiwiYmVnaW5GaWxsIiwibW92ZVRvIiwibGluZVRvIiwiZW5kRmlsbCIsImdldFBhdHRlcm5Qb3NpdGlvbiIsImdldEJDSFR5cGVOdW1iZXIiLCJmbG9vciIsImdldEJDSFR5cGVJbmZvIiwiZ2V0TWFzayIsIlBBRDAiLCJQQUQxIiwiZ2V0UlNCbG9ja3MiLCJnZXRMZW5ndGhJbkJpdHMiLCJwdXRCaXQiLCJjcmVhdGVCeXRlcyIsImdldEVycm9yQ29ycmVjdFBvbHlub21pYWwiLCJtb2QiLCJxIiwiZ2V0IiwiTU9ERV9OVU1CRVIiLCJNT0RFX0FMUEhBX05VTSIsIk1PREVfS0FOSkkiLCJQQVRURVJOMDAwIiwiUEFUVEVSTjAwMSIsIlBBVFRFUk4wMTAiLCJQQVRURVJOMDExIiwiUEFUVEVSTjEwMCIsIlBBVFRFUk4xMDEiLCJQQVRURVJOMTEwIiwiUEFUVEVSTjExMSIsIlBBVFRFUk5fUE9TSVRJT05fVEFCTEUiLCJHMTUiLCJHMTgiLCJHMTVfTUFTSyIsImdldEJDSERpZ2l0IiwibXVsdGlwbHkiLCJnZXhwIiwiYWJzIiwiZ2xvZyIsIkxPR19UQUJMRSIsIkVYUF9UQUJMRSIsIlJTX0JMT0NLX1RBQkxFIiwiZ2V0UnNCbG9ja1RhYmxlIiwiX2VsIiwiX2h0T3B0aW9uIiwiZHJhdyIsImNyZWF0ZUVsZW1lbnROUyIsImhhc093blByb3BlcnR5Iiwic2V0QXR0cmlidXRlIiwidmlld0JveCIsIlN0cmluZyIsImZpbGwiLCJjb2xvckxpZ2h0Iiwic2V0QXR0cmlidXRlTlMiLCJhcHBlbmRDaGlsZCIsImNvbG9yRGFyayIsIngiLCJ5IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX2VsSW1hZ2UiLCJfZWxDYW52YXMiLCJ0b0RhdGFVUkwiLCJfZkZhaWwiLCJfZlN1Y2Nlc3MiLCJfYlN1cHBvcnREYXRhVVJJIiwib25hYm9ydCIsIl9hbmRyb2lkIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImRyYXdJbWFnZSIsIm5vZGVOYW1lIiwiX2JJc1BhaW50ZWQiLCJfb0NvbnRleHQiLCJyb3VuZCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VSZWN0IiwiY2VpbCIsIm1ha2VJbWFnZSIsImlzUGFpbnRlZCIsImNsZWFyUmVjdCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImNvcnJlY3RMZXZlbCIsIl9vUVJDb2RlIiwiX29EcmF3aW5nIiwibWFrZUNvZGUiLCJDb3JyZWN0TGV2ZWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7OztBQVNBOzs7Ozs7O0FBTUEsTUFBTUEsY0FBYyxHQUFwQjtBQUNBLE1BQU1DLE9BQU8sR0FBYjtBQUNBLE1BQU1DLHVCQUF1QixHQUE3QixLLENBQUE7O0FBR0EsdUJBQXFCO0FBQ25CLFdBQU8sOENBQVAsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsMENBQXdDO0FBQ3RDLFdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsWUFISyx5QkFHUztBQUNaLFlBQUlDLENBQUMsQ0FBQ0MsS0FBSyxDQUFQRCxNQUFDLENBQURBLElBQUosSUFBSUEsQ0FBSixFQUE4QjtBQUM1QixpQkFBT0MsS0FBSyxDQUFMQSw4QkFEcUIsU0FDckJBLENBQVAsQ0FENEI7QUFFN0I7O0FBQ0QsZUFKWSxTQUlaLENBSlk7QUFLYjtBQVJJLEtBQVA7QUFVRDs7QUFFRCwyQ0FBeUM7QUFBQTs7QUFDdkMsUUFBSUMsTUFBTSxHQUFWO0FBRUFGLEtBQUMsQ0FBREEsSUFBQyxDQUFEQSxLQUFZRyxJQUFJLENBQWhCSCxnQkFBaUMsWUFBTTtBQUNyQ0UsWUFBTSxHQUFOQTtBQURGRjtBQUlBSSxjQUFVLENBQUMsWUFBTTtBQUNmLFVBQUksQ0FBSixRQUFhO0FBQ1hELFlBQUksQ0FBSkE7QUFDRDtBQUhPLE9BQVZDLFFBQVUsQ0FBVkE7QUFNQTtBQUNEOztBQUVELHFDQUFtQztBQUNqQ0osS0FBQyxDQUFEQTtBQUNBQSxLQUFDLENBQURBLGNBQWdCRyxJQUFJLENBQXBCSCxrQkFBdUNLLDRCQUF2Q0w7QUFDRDtBQUVEOzs7Ozs7O0FBTUEsTUFBTUcsSUFBSSxHQUFHO0FBRVhULGtCQUFjLEVBRkg7QUFJWFksVUFKVywwQkFJSTtBQUNiLFNBQUc7QUFDRDtBQUNBQyxjQUFNLElBQUksQ0FBQyxFQUFFQyxJQUFJLENBQUpBLFdBRlosT0FFVSxDQUFYRCxDQUZDO0FBQUgsZUFHU0UsUUFBUSxDQUFSQSxlQUhULE1BR1NBLENBSFQ7O0FBSUE7QUFUUztBQVlYQywwQkFaVywyQ0FZcUI7QUFDOUIsVUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQVBBLGFBQWYsYUFBZUEsQ0FBZjs7QUFFQSxVQUFJLGFBQWFELFFBQVEsS0FBekIsS0FBbUM7QUFDakMsWUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQVBBLGFBQWpCLE1BQWlCQSxDQUFqQjtBQUNBRCxnQkFBUSxHQUFHRSxRQUFRLElBQUlBLFFBQVEsS0FBcEJBLE1BQStCQSxRQUFRLENBQXZDQSxJQUErQkEsRUFBL0JBLEdBQVhGO0FBQ0Q7O0FBRUQsVUFBSTtBQUNGLGVBQU9GLFFBQVEsQ0FBUkEscUNBQVA7QUFERixRQUVFLFlBQVk7QUFDWjtBQUNEO0FBeEJRO0FBMkJYSyxvQ0EzQlcscURBMkIrQjtBQUN4QyxVQUFJLENBQUosU0FBYztBQUNaO0FBRnNDOzs7QUFNeEMsVUFBSUMsa0JBQWtCLEdBQUdmLENBQUMsQ0FBREEsT0FBQyxDQUFEQSxLQUF6QixxQkFBeUJBLENBQXpCO0FBQ0EsVUFBSWdCLGVBQWUsR0FBR2hCLENBQUMsQ0FBREEsT0FBQyxDQUFEQSxLQUF0QixrQkFBc0JBLENBQXRCO0FBRUEsVUFBTWlCLHVCQUF1QixHQUFHQyxVQUFVLENBQTFDLGtCQUEwQyxDQUExQztBQUNBLFVBQU1DLG9CQUFvQixHQUFHRCxVQUFVLENBVkMsZUFVRCxDQUF2QyxDQVZ3Qzs7QUFheEMsVUFBSSw0QkFBNEIsQ0FBaEMsc0JBQXVEO0FBQ3JEO0FBZHNDOzs7QUFrQnhDSCx3QkFBa0IsR0FBR0Esa0JBQWtCLENBQWxCQSxXQUFyQkEsQ0FBcUJBLENBQXJCQTtBQUNBQyxxQkFBZSxHQUFHQSxlQUFlLENBQWZBLFdBQWxCQSxDQUFrQkEsQ0FBbEJBO0FBRUEsYUFBTyxDQUFDRSxVQUFVLENBQVZBLGtCQUFVLENBQVZBLEdBQWlDQSxVQUFVLENBQTVDLGVBQTRDLENBQTVDLElBQVA7QUFoRFM7QUFtRFhFLFVBbkRXLDJCQW1ESztBQUNkLGFBQU9SLE9BQU8sQ0FBZDtBQXBEUztBQXVEWFMsd0JBdkRXLHlDQXVEbUI7QUFDNUJyQixPQUFDLENBQURBLE9BQUMsQ0FBREE7QUF4RFM7QUEyRFg7QUFDQXNCLHlCQTVEVyxtQ0E0RGE7QUFDdEIsYUFBT0MsT0FBTyxDQUFkLGNBQWMsQ0FBZDtBQTdEUztBQWdFWEMsYUFoRVcsMEJBZ0VJO0FBQ2IsYUFBTyxDQUFDQyxHQUFHLENBQUhBLENBQUcsQ0FBSEEsSUFBRCxLQUFQO0FBakVTO0FBb0VYQyxtQkFwRVcsK0RBb0V5QztBQUNsRCxXQUFLLElBQUwseUJBQW9DO0FBQ2xDLFlBQUlDLE1BQU0sQ0FBTkEsMkNBQUosUUFBSUEsQ0FBSixFQUFpRTtBQUMvRCxjQUFNQyxhQUFhLEdBQUdDLFdBQVcsQ0FBakMsUUFBaUMsQ0FBakM7QUFDQSxjQUFNQyxLQUFLLEdBQVdDLE1BQU0sQ0FBNUIsUUFBNEIsQ0FBNUI7QUFDQSxjQUFNQyxTQUFTLEdBQU9GLEtBQUssSUFBSTNCLElBQUksQ0FBSkEsVUFBVDJCLEtBQVMzQixDQUFUMkIsZUFDTkcsTUFBTSxDQUR0QixLQUNzQixDQUR0Qjs7QUFHQSxjQUFJLENBQUMsK0JBQUwsU0FBSyxDQUFMLEVBQWdEO0FBQzlDLGtCQUFNLFVBQ0RDLGFBQWEsQ0FBaEIsV0FBR0EsS0FBSCxJQUFHQSxJQUFILGtFQUFHQSxLQUFILHlDQURGLEtBQ0tBLENBREMsQ0FBTjtBQUlEO0FBQ0Y7QUFDRjtBQW5GUTtBQXNGWEMsa0JBdEZXLG1DQXNGYTtBQUN0QixVQUFJLENBQUMxQixRQUFRLENBQVJBLGdCQUFMLGNBQTRDO0FBQzFDO0FBRm9COzs7QUFNdEIsVUFBSSxPQUFPRyxPQUFPLENBQWQsZ0JBQUosWUFBK0M7QUFDN0MsWUFBTXdCLElBQUksR0FBR3hCLE9BQU8sQ0FBcEIsV0FBYUEsRUFBYjtBQUNBLGVBQU93QixJQUFJLFlBQUpBLG9CQUFQO0FBQ0Q7O0FBRUQsVUFBSXhCLE9BQU8sWUFBWCxZQUFtQztBQUNqQztBQVpvQjs7O0FBZ0J0QixVQUFJLENBQUNBLE9BQU8sQ0FBWixZQUF5QjtBQUN2QjtBQUNEOztBQUVELGFBQU9ULElBQUksQ0FBSkEsZUFBb0JTLE9BQU8sQ0FBbEMsVUFBT1QsQ0FBUDtBQTFHUztBQTZHWGtDLG1CQTdHVyw2QkE2R087QUFDaEIsVUFBSSxhQUFKLGFBQThCO0FBQzVCLGNBQU0sY0FBTixrR0FBTSxDQUFOO0FBQ0Q7O0FBRUQsVUFBTUMsT0FBTyxHQUFHdEMsQ0FBQyxDQUFEQSw4QkFBaEIsR0FBZ0JBLENBQWhCO0FBQ0EsVUFBTXVDLFFBQVEsR0FBZDtBQUNBLFVBQU1DLE9BQU8sR0FBYjtBQUNBLFVBQU1DLFFBQVEsR0FBZDtBQUNBLFVBQU1DLFFBQVEsR0FBZDtBQUNBLFVBQU1DLFFBQVEsR0FBZDs7QUFFQSxVQUFJTCxPQUFPLENBQVBBLENBQU8sQ0FBUEEsY0FBd0JBLE9BQU8sQ0FBUEEsQ0FBTyxDQUFQQSxHQUF4QkEsWUFBaURBLE9BQU8sQ0FBUEEsQ0FBTyxDQUFQQSxpQkFBMkJBLE9BQU8sQ0FBUEEsQ0FBTyxDQUFQQSxLQUEzQkEsWUFBc0RBLE9BQU8sQ0FBUEEsQ0FBTyxDQUFQQSxHQUF2R0EsWUFBZ0lBLE9BQU8sQ0FBUEEsQ0FBTyxDQUFQQSxJQUFwSSxVQUE0SjtBQUMxSixjQUFNLFVBQU4sOEVBQU0sQ0FBTjtBQUNEO0FBQ0Y7QUE1SFUsR0FBYjtBQStIQW5DLE1BQUksQ0FBSkE7QUFDQXlDLHlCQUF1QjtBQ3RMdkI7Ozs7OztBQU1BLE1BQU1DLElBQUksR0FBVjtBQUNBLE1BQU1DLE9BQU8sR0FBYjtBQUNBLE1BQU1DLFFBQVEsR0FBZDtBQUNBLE1BQU1DLFNBQVMsU0FBZjtBQUNBLE1BQU1DLFlBQVksR0FBbEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBSWxELENBQUMsQ0FBREEsR0FBNUIsSUFBNEJBLENBQTVCO0FBRUEsTUFBTW1ELFFBQVEsR0FBRztBQUNmQyxXQUFPLEVBQUc7QUFESyxHQUFqQjtBQUlBLE1BQU1DLEtBQUssR0FBRztBQUNaQyxTQUFLLFlBRE87QUFFWkMsVUFBTSxhQUZNO0FBR1pDLGtCQUFjLHdCQUF1QlA7QUFIekIsR0FBZDtBQU1BLE1BQU1RLFNBQVMsR0FBRztBQUNoQkMsU0FBSyxFQURXO0FBRWhCQyxRQUFJLEVBRlk7QUFHaEJDLFFBQUksRUFBSTtBQUhRLEdBQWxCO0FBTUE7Ozs7OztNQU1NQzs7O0FBQ0osNEJBQXFCO0FBQ25CO0FBQ0QsSyxDQUFBOzs7a0NBUUQ7O1dBRUFDLEssR0FBQUEsd0JBQWU7QUFDYixVQUFJQyxXQUFXLEdBQUcsS0FBbEI7O0FBQ0EsbUJBQWE7QUFDWEEsbUJBQVcsR0FBRyxxQkFBZEEsT0FBYyxDQUFkQTtBQUNEOztBQUVELFVBQU1DLFdBQVcsR0FBRyx3QkFBcEIsV0FBb0IsQ0FBcEI7O0FBRUEsVUFBSUEsV0FBVyxDQUFmLGtCQUFJQSxFQUFKLEVBQXNDO0FBQ3BDO0FBQ0Q7O0FBRUQ7QUFDRCxLOztXQUVEQyxPLEdBQUFBLG1CQUFVO0FBQ1JqRSxPQUFDLENBQURBLFdBQWEsS0FBYkE7QUFDQTtBQUNELEssQ0FBQTs7O1dBSURrRSxlLEdBQUFBLGtDQUF5QjtBQUN2QixVQUFNdkQsUUFBUSxHQUFHUixJQUFJLENBQUpBLHVCQUFqQixPQUFpQkEsQ0FBakI7QUFDQSxVQUFJZ0UsTUFBTSxHQUFWOztBQUVBLG9CQUFjO0FBQ1pBLGNBQU0sR0FBRzFELFFBQVEsQ0FBUkEsY0FBVDBELFFBQVMxRCxDQUFUMEQ7QUFDRDs7QUFFRCxVQUFJLENBQUosUUFBYTtBQUNYQSxjQUFNLEdBQUduRSxDQUFDLENBQURBLE9BQUMsQ0FBREEsZUFBdUJ5RCxTQUFTLENBQWhDekQsT0FBVG1FLENBQVNuRSxDQUFUbUU7QUFDRDs7QUFFRDtBQUNELEs7O1dBRURDLGtCLEdBQUFBLHFDQUE0QjtBQUMxQixVQUFNQyxVQUFVLEdBQUdyRSxDQUFDLENBQURBLE1BQVFxRCxLQUFLLENBQWhDLEtBQW1CckQsQ0FBbkI7QUFFQUEsT0FBQyxDQUFEQSxPQUFDLENBQURBO0FBQ0E7QUFDRCxLOztXQUVEc0UsYyxHQUFBQSxpQ0FBd0I7QUFBQTs7QUFDdEJ0RSxPQUFDLENBQURBLE9BQUMsQ0FBREEsYUFBdUJ5RCxTQUFTLENBQWhDekQ7O0FBRUEsVUFBSSxDQUFDQSxDQUFDLENBQURBLE9BQUMsQ0FBREEsVUFBb0J5RCxTQUFTLENBQWxDLElBQUt6RCxDQUFMLEVBQTBDO0FBQ3hDOztBQUNBO0FBQ0Q7O0FBRUQsVUFBTWUsa0JBQWtCLEdBQUdaLElBQUksQ0FBSkEsaUNBQTNCLE9BQTJCQSxDQUEzQjtBQUVBSCxPQUFDLENBQURBLE9BQUMsQ0FBREEsS0FDT0csSUFBSSxDQURYSCxnQkFDNEI7QUFBQSxlQUFXLEtBQUksQ0FBSix5QkFBWCxLQUFXLENBQVg7QUFENUJBO0FBR0QsSzs7V0FFRHVFLGUsR0FBQUEsa0NBQXlCO0FBQ3ZCdkUsT0FBQyxDQUFEQSxPQUFDLENBQURBLGtCQUVXcUQsS0FBSyxDQUZoQnJEO0FBSUQsSyxDQUFBOzs7VUFJTXdFLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQU1DLFFBQVEsR0FBR3pFLENBQUMsQ0FBbEIsSUFBa0IsQ0FBbEI7QUFDQSxZQUFJMEUsSUFBSSxHQUFTRCxRQUFRLENBQVJBLEtBQWpCLFFBQWlCQSxDQUFqQjs7QUFFQSxZQUFJLENBQUosTUFBVztBQUNUQyxjQUFJLEdBQUcsVUFBUEEsSUFBTyxDQUFQQTtBQUNBRCxrQkFBUSxDQUFSQTtBQUNEOztBQUVELFlBQUkxQyxNQUFNLEtBQVYsU0FBd0I7QUFDdEIyQyxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQVhILE9BQU8sQ0FBUDtBQWFELEs7O1VBRU1DLGMsR0FBUCx1Q0FBcUM7QUFDbkMsYUFBTyxpQkFBaUI7QUFDdEIsbUJBQVc7QUFDVDFFLGVBQUssQ0FBTEE7QUFDRDs7QUFFRDJFLHFCQUFhLENBQWJBO0FBTEY7QUFPRCxLOzs7OzBCQWxHb0I7QUFDbkI7QUFDRDs7Ozs7QUFtR0g7Ozs7Ozs7QUFNQTVFLEdBQUMsQ0FBREEsUUFBQyxDQUFEQSxJQUNFcUQsS0FBSyxDQURQckQsZ0JBRUVtRCxRQUFRLENBRlZuRCxTQUdFNkQsS0FBSyxDQUFMQSxlQUFxQixJQUh2QjdELEtBR3VCLEVBQXJCNkQsQ0FIRjdEO0FBTUE7Ozs7OztBQU1BQSxHQUFDLENBQURBLFdBQXlCNkQsS0FBSyxDQUE5QjdEO0FBQ0FBLEdBQUMsQ0FBREE7O0FBQ0FBLEdBQUMsQ0FBREEsc0JBQXlCLFlBQU07QUFDN0JBLEtBQUMsQ0FBREE7QUFDQSxXQUFPNkQsS0FBSyxDQUFaO0FBRkY3RDtBQ3BLQTs7Ozs7OztBQU1BLE1BQU02QyxNQUFJLEdBQVY7QUFDQSxNQUFNQyxTQUFPLEdBQWI7QUFDQSxNQUFNQyxVQUFRLEdBQWQ7QUFDQSxNQUFNQyxXQUFTLFNBQWY7QUFDQSxNQUFNQyxjQUFZLEdBQWxCO0FBQ0EsTUFBTUMsb0JBQWtCLEdBQUlsRCxDQUFDLENBQURBLEdBQTVCLE1BQTRCQSxDQUE1QjtBQUVBLE1BQU15RCxXQUFTLEdBQUc7QUFDaEJvQixVQUFNLEVBRFU7QUFFaEJDLFVBQU0sRUFGVTtBQUdoQkMsU0FBSyxFQUFJO0FBSE8sR0FBbEI7QUFNQSxNQUFNNUIsVUFBUSxHQUFHO0FBQ2Y2QixzQkFBa0IsRUFESDtBQUVmQyxnQkFBWSxFQUZHO0FBR2ZDLGVBQVcsRUFISTtBQUlmQyx3QkFBb0IsRUFKTDtBQUtmQyxTQUFLLEVBTFU7QUFNZlAsVUFBTSxFQU5TO0FBT2ZDLFVBQU0sRUFBaUI7QUFQUixHQUFqQjtBQVVBLE1BQU16QixPQUFLLEdBQUc7QUFDWkcsa0JBQWMsMEJBREY7QUFFWjZCLHVCQUFtQixFQUFHLHVFQUZWLGNBRVUsQ0FGVjtBQUlaQyxpQkFBYSx5QkFBNEJyQztBQUo3QixHQUFkO0FBT0E7Ozs7OztNQU1Nc0M7OztBQUNKLDZCQUFxQjtBQUNuQjtBQUNELEssQ0FBQTs7O21DQVFEOztXQUVBQyxNLEdBQUFBLGtCQUFTO0FBQ1AsVUFBSUMsa0JBQWtCLEdBQXRCO0FBQ0EsVUFBSUMsY0FBYyxHQUFsQjtBQUNBLFVBQU0zQixXQUFXLEdBQUcvRCxDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxTQUNsQm1ELFVBQVEsQ0FEVW5ELGNBQXBCLENBQW9CQSxDQUFwQjs7QUFJQSx1QkFBaUI7QUFDZixZQUFNMkYsS0FBSyxHQUFHLDRCQUE0QnhDLFVBQVEsQ0FBbEQsS0FBYyxDQUFkOztBQUVBLG1CQUFXO0FBQ1QsY0FBSXdDLEtBQUssQ0FBTEEsU0FBSixTQUE0QjtBQUMxQixnQkFBSUEsS0FBSyxDQUFMQSxXQUNGLGlDQUFpQ2xDLFdBQVMsQ0FENUMsTUFDRSxDQURGLEVBQ3NEO0FBQ3BEZ0MsZ0NBQWtCLEdBQWxCQTtBQUZGLG1CQUdPO0FBQ0wsa0JBQU1HLGFBQWEsR0FBRzdCLFdBQVcsQ0FBWEEsY0FBMEJaLFVBQVEsQ0FBeEQsTUFBc0JZLENBQXRCOztBQUVBLGlDQUFtQjtBQUNqQi9ELGlCQUFDLENBQURBLGFBQUMsQ0FBREEsYUFBNkJ5RCxXQUFTLENBQXRDekQ7QUFDRDtBQUNGO0FBVkgsaUJBV08sSUFBSTJGLEtBQUssQ0FBTEEsU0FBSixZQUErQjtBQUNwQyxnQkFBSSxxQ0FBcUNBLEtBQUssQ0FBTEEsWUFBa0IsaUNBQWlDbEMsV0FBUyxDQUFyRyxNQUEyRCxDQUEzRCxFQUErRztBQUM3R2dDLGdDQUFrQixHQUFsQkE7QUFDRDtBQUhJLGlCQUlBO0FBQ0w7QUFDQUEsOEJBQWtCLEdBQWxCQTtBQUNEOztBQUVELGtDQUF3QjtBQUN0QkUsaUJBQUssQ0FBTEEsVUFBZ0IsQ0FBQyxpQ0FBaUNsQyxXQUFTLENBQTNEa0MsTUFBaUIsQ0FBakJBO0FBQ0EzRixhQUFDLENBQURBLEtBQUMsQ0FBREE7QUFDRDs7QUFFRDJGLGVBQUssQ0FBTEE7QUFDQUQsd0JBQWMsR0FBZEE7QUFDRDtBQUNGOztBQUVELFVBQUksRUFBRSwwQ0FBMEMsaUNBQWhELFVBQWdELENBQTVDLENBQUosRUFBK0Y7QUFDN0YsNEJBQW9CO0FBQ2xCLHFEQUNFLENBQUMsaUNBQWlDakMsV0FBUyxDQUQ3QyxNQUNHLENBREg7QUFFRDs7QUFFRCxnQ0FBd0I7QUFDdEJ6RCxXQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxhQUE2QnlELFdBQVMsQ0FBdEN6RDtBQUNEO0FBQ0Y7QUFDRixLOztXQUVEaUUsTyxHQUFBQSxtQkFBVTtBQUNSakUsT0FBQyxDQUFEQSxXQUFhLEtBQWJBO0FBQ0E7QUFDRCxLLENBQUE7OztXQUlNd0UsZ0IsR0FBUCxrQ0FBZ0M7QUFDOUIsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBSUUsSUFBSSxHQUFHMUUsQ0FBQyxDQUFEQSxJQUFDLENBQURBLE1BQVgsVUFBV0EsQ0FBWDs7QUFFQSxZQUFJLENBQUosTUFBVztBQUNUMEUsY0FBSSxHQUFHLFdBQVBBLElBQU8sQ0FBUEE7QUFDQTFFLFdBQUMsQ0FBREEsSUFBQyxDQUFEQTtBQUNEOztBQUVELFlBQUkrQixNQUFNLEtBQVYsVUFBeUI7QUFDdkIyQyxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQVZILE9BQU8sQ0FBUDtBQVlELEs7Ozs7MEJBL0VvQjtBQUNuQjtBQUNEOzs7OztBQWdGSDs7Ozs7OztBQU1BMUUsR0FBQyxDQUFEQSxRQUFDLENBQURBLElBQ01xRCxPQUFLLENBRFhyRCxnQkFDNEJtRCxVQUFRLENBRHBDbkQsb0JBQ3lELGlCQUFXO0FBQ2hFLFFBQUk2RixNQUFNLEdBQUc1RixLQUFLLENBQWxCOztBQUVBLFFBQUksQ0FBQ0QsQ0FBQyxDQUFEQSxNQUFDLENBQURBLFVBQW1CeUQsV0FBUyxDQUFqQyxNQUFLekQsQ0FBTCxFQUEyQztBQUN6QzZGLFlBQU0sR0FBRzdGLENBQUMsQ0FBREEsTUFBQyxDQUFEQSxTQUFrQm1ELFVBQVEsQ0FBMUJuRCxRQUFUNkYsQ0FBUzdGLENBQVQ2RjtBQUNEOztBQUVELFFBQUksV0FBV0EsTUFBTSxDQUFOQSxhQUFYLFVBQVdBLENBQVgsSUFBOENBLE1BQU0sQ0FBTkEsbUJBQWxELFVBQWtEQSxDQUFsRCxFQUF5RjtBQUN2RjVGLFdBQUssQ0FEa0YsY0FDdkZBLEdBRHVGO0FBQXpGLFdBRU87QUFDTCxVQUFNNkYsUUFBUSxHQUFHRCxNQUFNLENBQU5BLGNBQXFCMUMsVUFBUSxDQUE5QyxLQUFpQjBDLENBQWpCOztBQUVBLFVBQUlDLFFBQVEsS0FBS0EsUUFBUSxDQUFSQSw0QkFBcUNBLFFBQVEsQ0FBUkEsbUJBQXRELFVBQXNEQSxDQUExQyxDQUFaLEVBQWdHO0FBQzlGN0YsYUFBSyxDQUR5RixjQUM5RkEsR0FEOEY7O0FBRTlGO0FBQ0Q7O0FBRURzRixZQUFNLENBQU5BLHNCQUE2QnZGLENBQUMsQ0FBOUJ1RixNQUE4QixDQUE5QkE7QUFDRDtBQW5CTHZGLFFBcUJNcUQsT0FBSyxDQXJCWHJELHFCQXFCaUNtRCxVQUFRLENBckJ6Q25ELG9CQXFCOEQsaUJBQVc7QUFDckUsUUFBTTZGLE1BQU0sR0FBRzdGLENBQUMsQ0FBQ0MsS0FBSyxDQUFQRCxNQUFDLENBQURBLFNBQXdCbUQsVUFBUSxDQUFoQ25ELFFBQWYsQ0FBZUEsQ0FBZjtBQUNBQSxLQUFDLENBQURBLE1BQUMsQ0FBREEsYUFBc0J5RCxXQUFTLENBQS9CekQsT0FBdUMsb0JBQW9CQyxLQUFLLENBQWhFRCxJQUF1QyxDQUF2Q0E7QUF2QkpBO0FBMEJBQSxHQUFDLENBQURBLE1BQUMsQ0FBREEsSUFBYXFELE9BQUssQ0FBbEJyRCxlQUFrQyxZQUFNO0FBQ3RDO0FBRUE7QUFDQSxRQUFJK0YsT0FBTyxHQUFHLGNBQWN0RixRQUFRLENBQVJBLGlCQUEwQjBDLFVBQVEsQ0FBOUQsb0JBQTRCMUMsQ0FBZCxDQUFkOztBQUNBLFNBQUssSUFBSXVGLENBQUMsR0FBTCxHQUFXQyxHQUFHLEdBQUdGLE9BQU8sQ0FBN0IsUUFBc0NDLENBQUMsR0FBdkMsS0FBK0NBLENBQS9DLElBQW9EO0FBQ2xELFVBQU1ILE1BQU0sR0FBR0UsT0FBTyxDQUF0QixDQUFzQixDQUF0QjtBQUNBLFVBQU1KLEtBQUssR0FBR0UsTUFBTSxDQUFOQSxjQUFxQjFDLFVBQVEsQ0FBM0MsS0FBYzBDLENBQWQ7O0FBQ0EsVUFBSUYsS0FBSyxDQUFMQSxXQUFpQkEsS0FBSyxDQUFMQSxhQUFyQixTQUFxQkEsQ0FBckIsRUFBb0Q7QUFDbERFLGNBQU0sQ0FBTkEsY0FBcUJwQyxXQUFTLENBQTlCb0M7QUFERixhQUVPO0FBQ0xBLGNBQU0sQ0FBTkEsaUJBQXdCcEMsV0FBUyxDQUFqQ29DO0FBQ0Q7QUFabUM7OztBQWdCdENFLFdBQU8sR0FBRyxjQUFjdEYsUUFBUSxDQUFSQSxpQkFBMEIwQyxVQUFRLENBQTFENEMsV0FBd0J0RixDQUFkLENBQVZzRjs7QUFDQSxTQUFLLElBQUlDLEVBQUMsR0FBTCxHQUFXQyxJQUFHLEdBQUdGLE9BQU8sQ0FBN0IsUUFBc0NDLEVBQUMsR0FBdkMsTUFBK0NBLEVBQS9DLElBQW9EO0FBQ2xELFVBQU1ILE9BQU0sR0FBR0UsT0FBTyxDQUF0QixFQUFzQixDQUF0Qjs7QUFDQSxVQUFJRixPQUFNLENBQU5BLGlDQUFKLFFBQW9EO0FBQ2xEQSxlQUFNLENBQU5BLGNBQXFCcEMsV0FBUyxDQUE5Qm9DO0FBREYsYUFFTztBQUNMQSxlQUFNLENBQU5BLGlCQUF3QnBDLFdBQVMsQ0FBakNvQztBQUNEO0FBQ0Y7QUF4Qkg3RjtBQTJCQTs7Ozs7O0FBTUFBLEdBQUMsQ0FBREEsYUFBYXVGLE1BQU0sQ0FBbkJ2RjtBQUNBQSxHQUFDLENBQURBOztBQUNBQSxHQUFDLENBQURBLHdCQUF3QixZQUFNO0FBQzVCQSxLQUFDLENBQURBO0FBQ0EsV0FBT3VGLE1BQU0sQ0FBYjtBQUZGdkY7QUNyTUE7Ozs7Ozs7QUFNQSxNQUFNNkMsTUFBSSxHQUFWO0FBQ0EsTUFBTUMsU0FBTyxHQUFiO0FBQ0EsTUFBTUMsVUFBUSxHQUFkO0FBQ0EsTUFBTUMsV0FBUyxTQUFmO0FBQ0EsTUFBTUMsY0FBWSxHQUFsQjtBQUNBLE1BQU1DLG9CQUFrQixHQUFPbEQsQ0FBQyxDQUFEQSxHQUEvQixNQUErQkEsQ0FBL0I7QUFDQSxNQUFNa0csa0JBQWtCLEdBQXhCLEcsQ0FBQTs7QUFDQSxNQUFNQyxtQkFBbUIsR0FBekIsRyxDQUFBOztBQUNBLE1BQU1DLHNCQUFzQixHQUE1QixJLENBQUE7O0FBQ0EsTUFBTUMsZUFBZSxHQUFyQjtBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxZQUFRLEVBRE07QUFFZEMsWUFBUSxFQUZNO0FBR2RDLFNBQUssRUFIUztBQUlkQyxTQUFLLEVBSlM7QUFLZEMsUUFBSSxFQUxVO0FBTWRDLFNBQUssRUFBTTtBQU5HLEdBQWhCO0FBU0EsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCTixZQUFRLEVBRFU7QUFFbEJDLFlBQVEsRUFGVTtBQUdsQkMsU0FBSyxFQUhhO0FBSWxCQyxTQUFLLEVBSmE7QUFLbEJDLFFBQUksRUFMYztBQU1sQkMsU0FBSyxFQUFNO0FBTk8sR0FBcEI7QUFTQSxNQUFNRSxTQUFTLEdBQUc7QUFDaEJDLFFBQUksRUFEWTtBQUVoQkMsUUFBSSxFQUZZO0FBR2hCQyxRQUFJLEVBSFk7QUFJaEJDLFNBQUssRUFBTTtBQUpLLEdBQWxCO0FBT0EsTUFBTTdELE9BQUssR0FBRztBQUNaOEQsU0FBSyxZQURPO0FBRVpDLFFBQUksV0FGUTtBQUdaQyxXQUFPLGNBSEs7QUFJWkMsY0FBVSxpQkFKRTtBQUtaQyxjQUFVLGlCQUxFO0FBTVpDLGNBQVUsaUJBTkU7QUFPWkMsYUFBUyxnQkFQRztBQVFaQyxZQUFRLGVBUkk7QUFTWkMsZUFBVyxrQkFUQztBQVVaQyxhQUFTLGdCQVZHO0FBV1pDLGNBQVUsZ0JBWEU7QUFZWnZDLGlCQUFhLHlCQVpEO0FBYVo5QixrQkFBYywwQkFBdUJQO0FBYnpCLEdBQWQ7QUFnQkEsTUFBTVEsV0FBUyxHQUFHO0FBQ2hCcUUsWUFBUSxFQURRO0FBRWhCakQsVUFBTSxFQUZVO0FBR2hCc0MsU0FBSyxFQUhXO0FBSWhCRCxTQUFLLEVBSlc7QUFLaEJELFFBQUksRUFMWTtBQU1oQkYsUUFBSSxFQU5ZO0FBT2hCQyxRQUFJLEVBUFk7QUFRaEJlLFFBQUksRUFSWTtBQVNoQkMsaUJBQWEsRUFBRztBQVRBLEdBQWxCO0FBWUEsTUFBTTdFLFVBQVEsR0FBRztBQUNmMEIsVUFBTSxFQURTO0FBRWZvRCxlQUFXLEVBRkk7QUFHZkYsUUFBSSxFQUhXO0FBSWZHLFlBQVEsRUFKTztBQUtmQyxhQUFTLEVBTE07QUFNZkMsY0FBVSxFQU5LO0FBT2ZDLGNBQVUsRUFQSztBQVFmQyxhQUFTLEVBQUs7QUFSQyxHQUFqQjtBQVdBLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMsU0FBSyxFQURhO0FBRWxCQyxPQUFHLEVBQUs7QUFGVSxHQUFwQjtBQUtBOzs7Ozs7TUFLTUM7OztBQUNKLHVDQUE2QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEscUJBQTBCLGdCQUExQixNQUEwQixDQUExQjtBQUNBO0FBQ0EsZ0NBQTBCLDRCQUE0QnZGLFVBQVEsQ0FBOUQsVUFBMEIsQ0FBMUI7QUFDQSw2QkFBMEIsa0JBQWtCMUMsUUFBUSxDQUExQixtQkFBOENrSSxTQUFTLENBQVRBLGlCQUF4RTtBQUNBLDJCQUEwQnBILE9BQU8sQ0FBQ3FILE1BQU0sQ0FBTkEsZ0JBQXVCQSxNQUFNLENBQS9ELGNBQWlDLENBQWpDOztBQUVBO0FBQ0QsSyxDQUFBOzs7cUNBWUQ7O1dBRUFDLEksR0FBQUEsZ0JBQU87QUFDTCxVQUFJLENBQUMsS0FBTCxZQUFzQjtBQUNwQixvQkFBWS9CLFNBQVMsQ0FBckI7QUFDRDtBQUNGLEs7O1dBRURnQyxlLEdBQUFBLDJCQUFrQjtBQUNoQjtBQUNBO0FBQ0EsVUFBSSxDQUFDckksUUFBUSxDQUFULFVBQ0RULENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLGVBREMsSUFDa0NBLENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLHVCQUR0QyxVQUN3RjtBQUN0RjtBQUNEO0FBQ0YsSzs7V0FFRCtJLEksR0FBQUEsZ0JBQU87QUFDTCxVQUFJLENBQUMsS0FBTCxZQUFzQjtBQUNwQixvQkFBWWpDLFNBQVMsQ0FBckI7QUFDRDtBQUNGLEs7O1dBRURKLEssR0FBQUEsc0JBQWE7QUFDWCxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0Q7O0FBRUQsVUFBSSw0QkFBNEJ2RCxVQUFRLENBQXhDLFNBQUksQ0FBSixFQUFxRDtBQUNuRGhELFlBQUksQ0FBSkEscUJBQTBCLEtBQTFCQTtBQUNBO0FBQ0Q7O0FBRUQ2SSxtQkFBYSxDQUFDLEtBQWRBLFNBQWEsQ0FBYkE7QUFDQTtBQUNELEs7O1dBRURDLEssR0FBQUEsc0JBQWE7QUFDWCxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0Q7O0FBRUQsVUFBSSxLQUFKLFdBQW9CO0FBQ2xCRCxxQkFBYSxDQUFDLEtBQWRBLFNBQWEsQ0FBYkE7QUFDQTtBQUNEOztBQUVELFVBQUkseUJBQXlCLENBQUMsS0FBOUIsV0FBOEM7QUFDNUMseUJBQWlCRSxXQUFXLENBQzFCLENBQUN6SSxRQUFRLENBQVJBLGtCQUEyQixLQUEzQkEsa0JBQWtELEtBQW5ELFdBRDBCLElBQzFCLENBRDBCLEVBRTFCLGFBRkYsUUFBNEIsQ0FBNUI7QUFJRDtBQUNGLEs7O1dBRUQwSSxFLEdBQUFBLG1CQUFVO0FBQUE7O0FBQ1IsNEJBQXNCLDRCQUE0QmhHLFVBQVEsQ0FBMUQsV0FBc0IsQ0FBdEI7O0FBRUEsVUFBTWlHLFdBQVcsR0FBRyxtQkFBbUIsS0FBdkMsY0FBb0IsQ0FBcEI7O0FBRUEsVUFBSUMsS0FBSyxHQUFHLHFCQUFSQSxLQUFrQ0EsS0FBSyxHQUEzQyxHQUFpRDtBQUMvQztBQUNEOztBQUVELFVBQUksS0FBSixZQUFxQjtBQUNuQnJKLFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLEtBQXFCcUQsT0FBSyxDQUExQnJELE1BQWlDO0FBQUEsaUJBQU0sS0FBSSxDQUFKLEdBQU4sS0FBTSxDQUFOO0FBQWpDQTtBQUNBO0FBQ0Q7O0FBRUQsVUFBSW9KLFdBQVcsS0FBZixPQUEyQjtBQUN6QjtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxVQUFNRSxTQUFTLEdBQUdELEtBQUssR0FBTEEsY0FDZHZDLFNBQVMsQ0FES3VDLE9BRWR2QyxTQUFTLENBRmI7O0FBSUEsNkJBQXVCLFlBQXZCLEtBQXVCLENBQXZCO0FBQ0QsSzs7V0FFRDdDLE8sR0FBQUEsbUJBQVU7QUFDUmpFLE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBO0FBQ0FBLE9BQUMsQ0FBREEsV0FBYSxLQUFiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLLENBQUE7OztXQUlEdUosVSxHQUFBQSw0QkFBbUI7QUFDakJ4SCxZQUFNLG1DQUFOQSxNQUFNLENBQU5BO0FBSUE1QixVQUFJLENBQUpBO0FBQ0E7QUFDRCxLOztXQUVEcUosWSxHQUFBQSx3QkFBZTtBQUNiLFVBQU1DLFNBQVMsR0FBR2pKLElBQUksQ0FBSkEsSUFBUyxLQUEzQixXQUFrQkEsQ0FBbEI7O0FBRUEsVUFBSWlKLFNBQVMsSUFBYixpQkFBa0M7QUFDaEM7QUFDRDs7QUFFRCxVQUFNSCxTQUFTLEdBQUdHLFNBQVMsR0FBRyxLQUE5QjtBQUVBLHlCQVRhLENBU2IsQ0FUYTs7QUFZYixVQUFJSCxTQUFTLEdBQWIsR0FBbUI7QUFDakI7QUFiVzs7O0FBaUJiLFVBQUlBLFNBQVMsR0FBYixHQUFtQjtBQUNqQjtBQUNEO0FBQ0YsSzs7V0FFREksa0IsR0FBQUEsOEJBQXFCO0FBQUE7O0FBQ25CLFVBQUksYUFBSixVQUEyQjtBQUN6QjFKLFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLElBQ01xRCxPQUFLLENBRFhyRCxTQUNxQjtBQUFBLGlCQUFXLE1BQUksQ0FBSixTQUFYLEtBQVcsQ0FBWDtBQURyQkE7QUFFRDs7QUFFRCxVQUFJLHVCQUFKLFNBQW9DO0FBQ2xDQSxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxJQUNNcUQsT0FBSyxDQURYckQsWUFDd0I7QUFBQSxpQkFBVyxNQUFJLENBQUosTUFBWCxLQUFXLENBQVg7QUFEeEJBLGNBRU1xRCxPQUFLLENBRlhyRCxZQUV3QjtBQUFBLGlCQUFXLE1BQUksQ0FBSixNQUFYLEtBQVcsQ0FBWDtBQUZ4QkE7QUFHRDs7QUFFRCxVQUFJLGFBQUosT0FBd0I7QUFDdEI7QUFDRDtBQUNGLEs7O1dBRUQySix1QixHQUFBQSxtQ0FBMEI7QUFBQTs7QUFDeEIsVUFBSSxDQUFDLEtBQUwsaUJBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsVUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBVztBQUN2QixZQUFJLE1BQUksQ0FBSixpQkFBc0JyQixXQUFXLENBQUN0SSxLQUFLLENBQUxBLDBCQUF0QyxXQUFzQ0EsRUFBRCxDQUFyQyxFQUFzRjtBQUNwRixnQkFBSSxDQUFKLGNBQW1CQSxLQUFLLENBQUxBLGNBQW5CO0FBREYsZUFFTyxJQUFJLENBQUMsTUFBSSxDQUFULGVBQXlCO0FBQzlCLGdCQUFJLENBQUosY0FBbUJBLEtBQUssQ0FBTEEseUJBQW5CO0FBQ0Q7QUFMSDs7QUFRQSxVQUFNNEosSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBVztBQUN0QjtBQUNBLFlBQUk1SixLQUFLLENBQUxBLHlCQUErQkEsS0FBSyxDQUFMQSwrQkFBbkMsR0FBMkU7QUFDekUsZ0JBQUksQ0FBSjtBQURGLGVBRU87QUFDTCxnQkFBSSxDQUFKLGNBQW1CQSxLQUFLLENBQUxBLG1DQUF5QyxNQUFJLENBQWhFO0FBQ0Q7QUFOSDs7QUFTQSxVQUFNNkosR0FBRyxHQUFHLFNBQU5BLEdBQU0sUUFBVztBQUNyQixZQUFJLE1BQUksQ0FBSixpQkFBc0J2QixXQUFXLENBQUN0SSxLQUFLLENBQUxBLDBCQUF0QyxXQUFzQ0EsRUFBRCxDQUFyQyxFQUFzRjtBQUNwRixnQkFBSSxDQUFKLGNBQW1CQSxLQUFLLENBQUxBLHdCQUE4QixNQUFJLENBQXJEO0FBQ0Q7O0FBRUQsY0FBSSxDQUFKOztBQUNBLFlBQUksTUFBSSxDQUFKLGtCQUFKLFNBQW9DO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZ0JBQUksQ0FBSjs7QUFDQSxjQUFJLE1BQUksQ0FBUixjQUF1QjtBQUNyQjhKLHdCQUFZLENBQUMsTUFBSSxDQUFqQkEsWUFBWSxDQUFaQTtBQUNEOztBQUNELGdCQUFJLENBQUosZUFBb0IzSixVQUFVLENBQUM7QUFBQSxtQkFBVyxNQUFJLENBQUosTUFBWCxLQUFXLENBQVg7QUFBRCxhQUErQmdHLHNCQUFzQixHQUFHLE1BQUksQ0FBSixRQUF0RixRQUE4QixDQUE5QjtBQUNEO0FBcEJIOztBQXVCQXBHLE9BQUMsQ0FBQywrQkFBK0JtRCxVQUFRLENBQXpDbkQsUUFBRSxDQUFELENBQURBLElBQXdEcUQsT0FBSyxDQUE3RHJELFlBQTBFO0FBQUEsZUFBT2dLLENBQUMsQ0FBUixjQUFPQSxFQUFQO0FBQTFFaEs7O0FBQ0EsVUFBSSxLQUFKLGVBQXdCO0FBQ3RCQSxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxJQUFvQnFELE9BQUssQ0FBekJyRCxhQUF1QztBQUFBLGlCQUFXNEosS0FBSyxDQUFoQixLQUFnQixDQUFoQjtBQUF2QzVKO0FBQ0FBLFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLElBQW9CcUQsT0FBSyxDQUF6QnJELFdBQXFDO0FBQUEsaUJBQVc4SixHQUFHLENBQWQsS0FBYyxDQUFkO0FBQXJDOUo7O0FBRUEsb0NBQTRCeUQsV0FBUyxDQUFyQztBQUpGLGFBS087QUFDTHpELFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLElBQW9CcUQsT0FBSyxDQUF6QnJELFlBQXNDO0FBQUEsaUJBQVc0SixLQUFLLENBQWhCLEtBQWdCLENBQWhCO0FBQXRDNUo7QUFDQUEsU0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsSUFBb0JxRCxPQUFLLENBQXpCckQsV0FBcUM7QUFBQSxpQkFBVzZKLElBQUksQ0FBZixLQUFlLENBQWY7QUFBckM3SjtBQUNBQSxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxJQUFvQnFELE9BQUssQ0FBekJyRCxVQUFvQztBQUFBLGlCQUFXOEosR0FBRyxDQUFkLEtBQWMsQ0FBZDtBQUFwQzlKO0FBQ0Q7QUFDRixLOztXQUVEaUssUSxHQUFBQSx5QkFBZ0I7QUFDZCxVQUFJLHVCQUF1QmhLLEtBQUssQ0FBTEEsT0FBM0IsT0FBSSxDQUFKLEVBQWtEO0FBQ2hEO0FBQ0Q7O0FBRUQsY0FBUUEsS0FBSyxDQUFiO0FBQ0U7QUFDRUEsZUFBSyxDQUFMQTtBQUNBO0FBQ0E7O0FBQ0Y7QUFDRUEsZUFBSyxDQUFMQTtBQUNBO0FBQ0E7QUFSSjtBQVdELEs7O1dBRURpSyxhLEdBQUFBLGdDQUF1QjtBQUNyQixvQkFBY3RKLE9BQU8sSUFBSUEsT0FBTyxDQUFsQkEsYUFDVixjQUFjQSxPQUFPLENBQVBBLDRCQUFvQ3VDLFVBQVEsQ0FEaER2QyxJQUNJQSxDQUFkLENBRFVBLEdBQWQ7QUFHQSxhQUFPLG9CQUFQLE9BQU8sQ0FBUDtBQUNELEs7O1dBRUR1SixtQixHQUFBQSx1REFBOEM7QUFDNUMsVUFBTUMsZUFBZSxHQUFHZCxTQUFTLEtBQUt4QyxTQUFTLENBQS9DO0FBQ0EsVUFBTXVELGVBQWUsR0FBR2YsU0FBUyxLQUFLeEMsU0FBUyxDQUEvQzs7QUFDQSxVQUFNc0MsV0FBVyxHQUFPLG1CQUF4QixhQUF3QixDQUF4Qjs7QUFDQSxVQUFNa0IsYUFBYSxHQUFLLHFCQUF4QjtBQUNBLFVBQU1DLGFBQWEsR0FBS0YsZUFBZSxJQUFJakIsV0FBVyxLQUE5QmlCLEtBQ0FELGVBQWUsSUFBSWhCLFdBQVcsS0FEdEQ7O0FBR0EsVUFBSW1CLGFBQWEsSUFBSSxDQUFDLGFBQXRCLE1BQXlDO0FBQ3ZDO0FBQ0Q7O0FBRUQsVUFBTUMsS0FBSyxHQUFPbEIsU0FBUyxLQUFLeEMsU0FBUyxDQUF2QndDLE9BQStCLENBQS9CQSxJQUFsQjtBQUNBLFVBQU1tQixTQUFTLEdBQUcsQ0FBQ3JCLFdBQVcsR0FBWixTQUF3QixZQUExQztBQUVBLGFBQU9xQixTQUFTLEtBQUssQ0FBZEEsSUFDSCxZQUFZLHFCQURUQSxDQUNILENBREdBLEdBQ21DLFlBRDFDLFNBQzBDLENBRDFDO0FBRUQsSzs7V0FFREMsa0IsR0FBQUEsK0RBQXNEO0FBQ3BELFVBQU1DLFdBQVcsR0FBRyxtQkFBcEIsYUFBb0IsQ0FBcEI7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLG1CQUFtQiw0QkFBNEJ6SCxVQUFRLENBQXpFLFdBQXFDLENBQW5CLENBQWxCOztBQUNBLFVBQU0wSCxVQUFVLEdBQUcsQ0FBQyxDQUFELE1BQVF4SCxPQUFLLENBQWIsT0FBcUI7QUFDdEN5SCxxQkFBYSxFQUR5QjtBQUV0Q3hCLGlCQUFTLEVBRjZCO0FBR3RDeUIsWUFBSSxFQUhrQztBQUl0QzVCLFVBQUUsRUFBRXdCO0FBSmtDLE9BQXJCLENBQW5CO0FBT0EzSyxPQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQTtBQUVBO0FBQ0QsSzs7V0FFRGdMLDBCLEdBQUFBLDZDQUFvQztBQUNsQyxVQUFJLEtBQUosb0JBQTZCO0FBQzNCLFlBQU1DLFVBQVUsR0FBRyxjQUFjLHlDQUF5QzlILFVBQVEsQ0FBbEYsTUFBaUMsQ0FBZCxDQUFuQjtBQUNBbkQsU0FBQyxDQUFEQSxVQUFDLENBQURBLGFBQ2V5RCxXQUFTLENBRHhCekQ7O0FBR0EsWUFBTWtMLGFBQWEsR0FBRyxpQ0FDcEIsbUJBREYsT0FDRSxDQURvQixDQUF0Qjs7QUFJQSwyQkFBbUI7QUFDakJsTCxXQUFDLENBQURBLGFBQUMsQ0FBREEsVUFBMEJ5RCxXQUFTLENBQW5DekQ7QUFDRDtBQUNGO0FBQ0YsSzs7V0FFRG1MLE0sR0FBQUEsb0NBQTJCO0FBQUE7O0FBQ3pCLFVBQU12RixhQUFhLEdBQUcsNEJBQTRCekMsVUFBUSxDQUExRCxXQUFzQixDQUF0Qjs7QUFDQSxVQUFNaUksa0JBQWtCLEdBQUcsbUJBQTNCLGFBQTJCLENBQTNCOztBQUNBLFVBQU1DLFdBQVcsR0FBS3pLLE9BQU8sSUFBSWdGLGFBQWEsSUFDNUMsb0NBREYsYUFDRSxDQURGOztBQUVBLFVBQU0wRixnQkFBZ0IsR0FBRyxtQkFBekIsV0FBeUIsQ0FBekI7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHaEssT0FBTyxDQUFDLEtBQTFCLFNBQXlCLENBQXpCO0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQUkrSCxTQUFTLEtBQUt4QyxTQUFTLENBQTNCLE1BQWtDO0FBQ2hDMEUsNEJBQW9CLEdBQUcvSCxXQUFTLENBQWhDK0g7QUFDQUMsc0JBQWMsR0FBR2hJLFdBQVMsQ0FBMUJnSTtBQUNBQywwQkFBa0IsR0FBRzVFLFNBQVMsQ0FBOUI0RTtBQUhGLGFBSU87QUFDTEYsNEJBQW9CLEdBQUcvSCxXQUFTLENBQWhDK0g7QUFDQUMsc0JBQWMsR0FBR2hJLFdBQVMsQ0FBMUJnSTtBQUNBQywwQkFBa0IsR0FBRzVFLFNBQVMsQ0FBOUI0RTtBQUNEOztBQUVELFVBQUlMLFdBQVcsSUFBSXJMLENBQUMsQ0FBREEsV0FBQyxDQUFEQSxVQUF3QnlELFdBQVMsQ0FBcEQsTUFBbUJ6RCxDQUFuQixFQUE4RDtBQUM1RDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTTZLLFVBQVUsR0FBRyxxQ0FBbkIsa0JBQW1CLENBQW5COztBQUNBLFVBQUlBLFVBQVUsQ0FBZCxrQkFBSUEsRUFBSixFQUFxQztBQUNuQztBQUNEOztBQUVELFVBQUksa0JBQWtCLENBQXRCLGFBQW9DO0FBQ2xDO0FBQ0E7QUFDRDs7QUFFRDs7QUFFQSxxQkFBZTtBQUNiO0FBQ0Q7O0FBRUQ7O0FBRUEsVUFBTWMsU0FBUyxHQUFHLENBQUMsQ0FBRCxNQUFRdEksT0FBSyxDQUFiLE1BQW9CO0FBQ3BDeUgscUJBQWEsRUFEdUI7QUFFcEN4QixpQkFBUyxFQUYyQjtBQUdwQ3lCLFlBQUksRUFIZ0M7QUFJcEM1QixVQUFFLEVBQUVtQztBQUpnQyxPQUFwQixDQUFsQjs7QUFPQSxVQUFJdEwsQ0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsVUFBMEJ5RCxXQUFTLENBQXZDLEtBQUl6RCxDQUFKLEVBQWdEO0FBQzlDQSxTQUFDLENBQURBLFdBQUMsQ0FBREE7QUFFQUcsWUFBSSxDQUFKQTtBQUVBSCxTQUFDLENBQURBLGFBQUMsQ0FBREE7QUFDQUEsU0FBQyxDQUFEQSxXQUFDLENBQURBO0FBRUEsWUFBTTRMLG1CQUFtQixHQUFHQyxRQUFRLENBQUNSLFdBQVcsQ0FBWEEsYUFBRCxlQUFDQSxDQUFELEVBQXBDLEVBQW9DLENBQXBDOztBQUNBLGlDQUF5QjtBQUN2Qix5Q0FBK0IsZ0NBQWdDLGFBQS9EO0FBQ0E7QUFGRixlQUdPO0FBQ0wsa0NBQXdCLGdDQUFnQyxhQUF4RDtBQUNEOztBQUVELFlBQU10SyxrQkFBa0IsR0FBR1osSUFBSSxDQUFKQSxpQ0FBM0IsYUFBMkJBLENBQTNCO0FBRUFILFNBQUMsQ0FBREEsYUFBQyxDQUFEQSxLQUNPRyxJQUFJLENBRFhILGdCQUM0QixZQUFNO0FBQzlCQSxXQUFDLENBQURBLFdBQUMsQ0FBREEsYUFDa0J3TCxvQkFEbEJ4TCxNQUNrQndMLEdBRGxCeEwseUJBRVl5RCxXQUFTLENBRnJCekQ7QUFJQUEsV0FBQyxDQUFEQSxhQUFDLENBQURBLGFBQWdDeUQsV0FBUyxDQUF6Q3pELE1BQWdDeUQsR0FBaEN6RCxHQUFnQ3lELEdBQWhDekQsY0FBZ0N5RCxHQUFoQ3pELEdBQWdDeUQsR0FBaEN6RDtBQUVBLGdCQUFJLENBQUo7QUFFQUksb0JBQVUsQ0FBQztBQUFBLG1CQUFNSixDQUFDLENBQUMsTUFBSSxDQUFOQSxRQUFDLENBQURBLFNBQU4sU0FBTUEsQ0FBTjtBQUFELGFBQVZJLENBQVUsQ0FBVkE7QUFWSko7QUFsQkYsYUErQk87QUFDTEEsU0FBQyxDQUFEQSxhQUFDLENBQURBLGFBQTZCeUQsV0FBUyxDQUF0Q3pEO0FBQ0FBLFNBQUMsQ0FBREEsV0FBQyxDQUFEQSxVQUF3QnlELFdBQVMsQ0FBakN6RDtBQUVBO0FBQ0FBLFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBO0FBQ0Q7O0FBRUQscUJBQWU7QUFDYjtBQUNEO0FBQ0YsSyxDQUFBOzs7YUFJTXdFLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQUlFLElBQUksR0FBRzFFLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxNQUFYLFVBQVdBLENBQVg7O0FBQ0EsWUFBSThMLE9BQU8sbUNBRU45TCxDQUFDLENBQURBLElBQUMsQ0FBREEsQ0FGTCxJQUVLQSxFQUZNLENBQVg7O0FBS0EsWUFBSSxvQkFBSixVQUFnQztBQUM5QjhMLGlCQUFPLG1DQUFQQSxNQUFPLENBQVBBO0FBSUQ7O0FBRUQsWUFBTUMsTUFBTSxHQUFHLHNDQUFzQ0QsT0FBTyxDQUE1RDs7QUFFQSxZQUFJLENBQUosTUFBVztBQUNUcEgsY0FBSSxHQUFHLG1CQUFQQSxPQUFPLENBQVBBO0FBQ0ExRSxXQUFDLENBQURBLElBQUMsQ0FBREE7QUFDRDs7QUFFRCxZQUFJLGtCQUFKLFVBQWdDO0FBQzlCMEUsY0FBSSxDQUFKQTtBQURGLGVBRU8sSUFBSSxrQkFBSixVQUFnQztBQUNyQyxjQUFJLE9BQU9BLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxrQkFBTSw4Q0FBTixJQUFNLENBQU47QUFDRDs7QUFDREEsY0FBSSxDQUFKQSxNQUFJLENBQUpBO0FBSkssZUFLQSxJQUFJb0gsT0FBTyxDQUFQQSxZQUFvQkEsT0FBTyxDQUEvQixNQUFzQztBQUMzQ3BILGNBQUksQ0FBSkE7QUFDQUEsY0FBSSxDQUFKQTtBQUNEO0FBL0JILE9BQU8sQ0FBUDtBQWlDRCxLOzthQUVNc0gsb0IsR0FBUCxxQ0FBbUM7QUFDakMsVUFBTXJMLFFBQVEsR0FBR1IsSUFBSSxDQUFKQSx1QkFBakIsSUFBaUJBLENBQWpCOztBQUVBLFVBQUksQ0FBSixVQUFlO0FBQ2I7QUFDRDs7QUFFRCxVQUFNOEwsTUFBTSxHQUFHak0sQ0FBQyxDQUFEQSxRQUFDLENBQURBLENBQWYsQ0FBZUEsQ0FBZjs7QUFFQSxVQUFJLFdBQVcsQ0FBQ0EsQ0FBQyxDQUFEQSxNQUFDLENBQURBLFVBQW1CeUQsV0FBUyxDQUE1QyxRQUFnQnpELENBQWhCLEVBQXdEO0FBQ3REO0FBQ0Q7O0FBRUQsVUFBTStCLE1BQU0sc0JBQ1AvQixDQUFDLENBQURBLE1BQUMsQ0FBREEsQ0FETyxJQUNQQSxFQURPLE1BRVBBLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxDQUZMLElBRUtBLEVBRk8sQ0FBWjs7QUFJQSxVQUFNa00sVUFBVSxHQUFHLGtCQUFuQixlQUFtQixDQUFuQjs7QUFFQSxzQkFBZ0I7QUFDZG5LLGNBQU0sQ0FBTkE7QUFDRDs7QUFFRDJHLGNBQVEsQ0FBUkEsc0JBQStCMUksQ0FBQyxDQUFoQzBJLE1BQWdDLENBQWhDQTs7QUFFQSxzQkFBZ0I7QUFDZDFJLFNBQUMsQ0FBREEsTUFBQyxDQUFEQTtBQUNEOztBQUVEQyxXQUFLLENBQUxBO0FBQ0QsSzs7OzswQkFuY29CO0FBQ25CO0FBQ0Q7OzswQkFFb0I7QUFDbkI7QUFDRDs7Ozs7QUFnY0g7Ozs7Ozs7QUFNQUQsR0FBQyxDQUFEQSxRQUFDLENBQURBLElBQ01xRCxPQUFLLENBRFhyRCxnQkFDNEJtRCxVQUFRLENBRHBDbkQsWUFDaUQwSSxRQUFRLENBRHpEMUk7QUFHQUEsR0FBQyxDQUFEQSxNQUFDLENBQURBLElBQWFxRCxPQUFLLENBQWxCckQsZUFBa0MsWUFBTTtBQUN0QyxRQUFNbU0sU0FBUyxHQUFHLGNBQWMxTCxRQUFRLENBQVJBLGlCQUEwQjBDLFVBQVEsQ0FBbEUsU0FBZ0MxQyxDQUFkLENBQWxCOztBQUNBLFNBQUssSUFBSXVGLENBQUMsR0FBTCxHQUFXQyxHQUFHLEdBQUdrRyxTQUFTLENBQS9CLFFBQXdDbkcsQ0FBQyxHQUF6QyxLQUFpREEsQ0FBakQsSUFBc0Q7QUFDcEQsVUFBTW9HLFNBQVMsR0FBR3BNLENBQUMsQ0FBQ21NLFNBQVMsQ0FBN0IsQ0FBNkIsQ0FBVixDQUFuQjs7QUFDQXpELGNBQVEsQ0FBUkEsaUNBQTBDMEQsU0FBUyxDQUFuRDFELElBQTBDMEQsRUFBMUMxRDtBQUNEO0FBTEgxSTtBQVFBOzs7Ozs7QUFNQUEsR0FBQyxDQUFEQSxhQUFhMEksUUFBUSxDQUFyQjFJO0FBQ0FBLEdBQUMsQ0FBREE7O0FBQ0FBLEdBQUMsQ0FBREEsd0JBQXdCLFlBQU07QUFDNUJBLEtBQUMsQ0FBREE7QUFDQSxXQUFPMEksUUFBUSxDQUFmO0FBRkYxSTtBQ2hsQkE7Ozs7Ozs7QUFNQSxNQUFNNkMsTUFBSSxHQUFWO0FBQ0EsTUFBTUMsU0FBTyxHQUFiO0FBQ0EsTUFBTUMsVUFBUSxHQUFkO0FBQ0EsTUFBTUMsV0FBUyxTQUFmO0FBQ0EsTUFBTUMsY0FBWSxHQUFsQjtBQUNBLE1BQU1DLG9CQUFrQixHQUFJbEQsQ0FBQyxDQUFEQSxHQUE1QixNQUE0QkEsQ0FBNUI7QUFFQSxNQUFNc0csU0FBTyxHQUFHO0FBQ2RkLFVBQU0sRUFEUTtBQUVkckIsVUFBTSxFQUFHO0FBRkssR0FBaEI7QUFLQSxNQUFNMEMsYUFBVyxHQUFHO0FBQ2xCckIsVUFBTSxFQURZO0FBRWxCckIsVUFBTSxFQUFHO0FBRlMsR0FBcEI7QUFLQSxNQUFNZCxPQUFLLEdBQUc7QUFDWk8sUUFBSSxXQURRO0FBRVp5SSxTQUFLLFlBRk87QUFHWkMsUUFBSSxXQUhRO0FBSVpDLFVBQU0sYUFKTTtBQUtaL0ksa0JBQWMsMEJBQXVCUDtBQUx6QixHQUFkO0FBUUEsTUFBTVEsV0FBUyxHQUFHO0FBQ2hCRyxRQUFJLEVBRFk7QUFFaEI0SSxZQUFRLEVBRlE7QUFHaEJDLGNBQVUsRUFITTtBQUloQkMsYUFBUyxFQUFJO0FBSkcsR0FBbEI7QUFPQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFNBQUssRUFEVztBQUVoQkMsVUFBTSxFQUFHO0FBRk8sR0FBbEI7QUFLQSxNQUFNMUosVUFBUSxHQUFHO0FBQ2YySixXQUFPLEVBRFE7QUFFZjVILGVBQVcsRUFBRztBQUZDLEdBQWpCO0FBS0E7Ozs7OztNQU1NNkg7OztBQUNKLHVDQUE2QjtBQUMzQjtBQUNBO0FBQ0EscUJBQXdCLGdCQUF4QixNQUF3QixDQUF4QjtBQUNBLDJCQUF3QixjQUFjdE0sUUFBUSxDQUFSQSxpQkFDcEMsd0NBQW1DRyxPQUFPLENBQTFDLDhEQUMwQ0EsT0FBTyxDQURqRCxLQURGLEtBQ0UsQ0FEb0NILENBQWQsQ0FBeEI7QUFLQSxVQUFNdU0sVUFBVSxHQUFHLGNBQWN2TSxRQUFRLENBQVJBLGlCQUEwQjBDLFVBQVEsQ0FBbkUsV0FBaUMxQyxDQUFkLENBQW5COztBQUNBLFdBQUssSUFBSXVGLENBQUMsR0FBTCxHQUFXQyxHQUFHLEdBQUcrRyxVQUFVLENBQWhDLFFBQXlDaEgsQ0FBQyxHQUExQyxLQUFrREEsQ0FBbEQsSUFBdUQ7QUFDckQsWUFBTWlILElBQUksR0FBR0QsVUFBVSxDQUF2QixDQUF1QixDQUF2QjtBQUNBLFlBQU1yTSxRQUFRLEdBQUdSLElBQUksQ0FBSkEsdUJBQWpCLElBQWlCQSxDQUFqQjtBQUNBLFlBQU0rTSxhQUFhLEdBQUcsY0FBY3pNLFFBQVEsQ0FBUkEsaUJBQWQsUUFBY0EsQ0FBZCxTQUNaO0FBQUEsaUJBQWUwTSxTQUFTLEtBQXhCO0FBRFYsU0FBc0IsQ0FBdEI7O0FBR0EsWUFBSXhNLFFBQVEsS0FBUkEsUUFBcUJ1TSxhQUFhLENBQWJBLFNBQXpCLEdBQW1EO0FBQ2pEOztBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxxQkFBZSxzQkFBc0IsS0FBdEIsVUFBc0IsRUFBdEIsR0FBZjs7QUFFQSxVQUFJLENBQUMsYUFBTCxRQUEwQjtBQUN4Qix1Q0FBK0IsS0FBL0IsVUFBOEMsS0FBOUM7QUFDRDs7QUFFRCxVQUFJLGFBQUosUUFBeUI7QUFDdkI7QUFDRDtBQUNGLEssQ0FBQTs7O3FDQVlEOztXQUVBMUgsTSxHQUFBQSxrQkFBUztBQUNQLFVBQUl4RixDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FBdkMsSUFBSXpELENBQUosRUFBK0M7QUFDN0M7QUFERixhQUVPO0FBQ0w7QUFDRDtBQUNGLEs7O1dBRURvTixJLEdBQUFBLGdCQUFPO0FBQUE7O0FBQ0wsVUFBSSx5QkFDRnBOLENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFVBQTBCeUQsV0FBUyxDQURyQyxJQUNFekQsQ0FERixFQUM2QztBQUMzQztBQUNEOztBQUVEO0FBQ0E7O0FBRUEsVUFBSSxLQUFKLFNBQWtCO0FBQ2hCcU4sZUFBTyxHQUFHLGNBQWMsOEJBQThCbEssVUFBUSxDQUFwRCxPQUFjLENBQWQsU0FDQSxnQkFBVTtBQUNoQixjQUFJLE9BQU8sS0FBSSxDQUFKLFFBQVAsV0FBSixVQUE2QztBQUMzQyxtQkFBTzhKLElBQUksQ0FBSkEsZ0NBQXFDLEtBQUksQ0FBSixRQUE1QztBQUNEOztBQUVELGlCQUFPQSxJQUFJLENBQUpBLG1CQUF3QnhKLFdBQVMsQ0FBeEMsUUFBT3dKLENBQVA7QUFOSkksU0FBVSxDQUFWQTs7QUFTQSxZQUFJQSxPQUFPLENBQVBBLFdBQUosR0FBMEI7QUFDeEJBLGlCQUFPLEdBQVBBO0FBQ0Q7QUFDRjs7QUFFRCxtQkFBYTtBQUNYQyxtQkFBVyxHQUFHdE4sQ0FBQyxDQUFEQSxPQUFDLENBQURBLEtBQWUsS0FBZkEsZ0JBQWRzTixVQUFjdE4sQ0FBZHNOOztBQUNBLFlBQUlBLFdBQVcsSUFBSUEsV0FBVyxDQUE5QixrQkFBaUQ7QUFDL0M7QUFDRDtBQUNGOztBQUVELFVBQU1DLFVBQVUsR0FBR3ZOLENBQUMsQ0FBREEsTUFBUXFELE9BQUssQ0FBaEMsSUFBbUJyRCxDQUFuQjtBQUNBQSxPQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQTs7QUFDQSxVQUFJdU4sVUFBVSxDQUFkLGtCQUFJQSxFQUFKLEVBQXFDO0FBQ25DO0FBQ0Q7O0FBRUQsbUJBQWE7QUFDWFIsZ0JBQVEsQ0FBUkEsc0JBQStCL00sQ0FBQyxDQUFEQSxPQUFDLENBQURBLEtBQWUsS0FBOUMrTSxTQUErQi9NLENBQS9CK007O0FBQ0EsWUFBSSxDQUFKLGFBQWtCO0FBQ2hCL00sV0FBQyxDQUFEQSxPQUFDLENBQURBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNd04sU0FBUyxHQUFHLEtBQWxCLGFBQWtCLEVBQWxCOztBQUVBeE4sT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsYUFDZXlELFdBQVMsQ0FEeEJ6RCxtQkFFWXlELFdBQVMsQ0FGckJ6RDtBQUlBOztBQUVBLFVBQUksbUJBQUosUUFBK0I7QUFDN0JBLFNBQUMsQ0FBQyxLQUFGQSxhQUFDLENBQURBLGFBQ2V5RCxXQUFTLENBRHhCekQ7QUFHRDs7QUFFRDs7QUFFQSxVQUFNeU4sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQnpOLFNBQUMsQ0FBQyxLQUFJLENBQU5BLFFBQUMsQ0FBREEsYUFDZXlELFdBQVMsQ0FEeEJ6RCxxQkFFWXlELFdBQVMsQ0FGckJ6RCxtQkFHWXlELFdBQVMsQ0FIckJ6RDtBQUtBLGFBQUksQ0FBSjs7QUFFQSxhQUFJLENBQUo7O0FBRUFBLFNBQUMsQ0FBQyxLQUFJLENBQU5BLFFBQUMsQ0FBREEsU0FBeUJxRCxPQUFLLENBQTlCckQ7QUFWRjs7QUFhQSxVQUFNME4sb0JBQW9CLEdBQUdGLFNBQVMsQ0FBVEEsQ0FBUyxDQUFUQSxpQkFBNkJBLFNBQVMsQ0FBVEEsTUFBMUQsQ0FBMERBLENBQTFEO0FBQ0EsVUFBTUcsVUFBVSxjQUFoQjtBQUNBLFVBQU01TSxrQkFBa0IsR0FBR1osSUFBSSxDQUFKQSxpQ0FBc0MsS0FBakUsUUFBMkJBLENBQTNCO0FBRUFILE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLEtBQ09HLElBQUksQ0FEWEg7QUFJQSx1Q0FBb0MsY0FBcEMsVUFBb0MsSUFBcEM7QUFDRCxLOztXQUVENE4sSSxHQUFBQSxnQkFBTztBQUFBOztBQUNMLFVBQUkseUJBQ0YsQ0FBQzVOLENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFVBQTBCeUQsV0FBUyxDQUR0QyxJQUNHekQsQ0FESCxFQUM4QztBQUM1QztBQUNEOztBQUVELFVBQU11TixVQUFVLEdBQUd2TixDQUFDLENBQURBLE1BQVFxRCxPQUFLLENBQWhDLElBQW1CckQsQ0FBbkI7QUFDQUEsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREE7O0FBQ0EsVUFBSXVOLFVBQVUsQ0FBZCxrQkFBSUEsRUFBSixFQUFxQztBQUNuQztBQUNEOztBQUVELFVBQU1DLFNBQVMsR0FBRyxLQUFsQixhQUFrQixFQUFsQjs7QUFFQSx1Q0FBb0Msc0NBQXBDLFNBQW9DLElBQXBDO0FBRUFyTixVQUFJLENBQUpBLE9BQVksS0FBWkE7QUFFQUgsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsVUFDWXlELFdBQVMsQ0FEckJ6RCx3QkFFZXlELFdBQVMsQ0FGeEJ6RCxzQkFHZXlELFdBQVMsQ0FIeEJ6RDtBQUtBLFVBQU02TixrQkFBa0IsR0FBRyxtQkFBM0I7O0FBQ0EsVUFBSUEsa0JBQWtCLEdBQXRCLEdBQTRCO0FBQzFCLGFBQUssSUFBSTdILENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixvQkFBd0NBLENBQXhDLElBQTZDO0FBQzNDLGNBQU04SCxPQUFPLEdBQUcsbUJBQWhCLENBQWdCLENBQWhCO0FBQ0EsY0FBTW5OLFFBQVEsR0FBR1IsSUFBSSxDQUFKQSx1QkFBakIsT0FBaUJBLENBQWpCOztBQUVBLGNBQUlRLFFBQVEsS0FBWixNQUF1QjtBQUNyQixnQkFBTW9OLEtBQUssR0FBRy9OLENBQUMsQ0FBQyxjQUFjUyxRQUFRLENBQVJBLGlCQUE5QixRQUE4QkEsQ0FBZCxDQUFELENBQWY7O0FBQ0EsZ0JBQUksQ0FBQ3NOLEtBQUssQ0FBTEEsU0FBZXRLLFdBQVMsQ0FBN0IsSUFBS3NLLENBQUwsRUFBcUM7QUFDbkMvTixlQUFDLENBQURBLE9BQUMsQ0FBREEsVUFBb0J5RCxXQUFTLENBQTdCekQ7QUFFRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDs7QUFFQSxVQUFNeU4sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixjQUFJLENBQUo7O0FBQ0F6TixTQUFDLENBQUMsTUFBSSxDQUFOQSxRQUFDLENBQURBLGFBQ2V5RCxXQUFTLENBRHhCekQscUJBRVl5RCxXQUFTLENBRnJCekQsa0JBR1dxRCxPQUFLLENBSGhCckQ7QUFGRjs7QUFRQTtBQUNBLFVBQU1lLGtCQUFrQixHQUFHWixJQUFJLENBQUpBLGlDQUFzQyxLQUFqRSxRQUEyQkEsQ0FBM0I7QUFFQUgsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsS0FDT0csSUFBSSxDQURYSDtBQUdELEs7O1dBRURnTyxnQixHQUFBQSwyQ0FBa0M7QUFDaEM7QUFDRCxLOztXQUVEL0osTyxHQUFBQSxtQkFBVTtBQUNSakUsT0FBQyxDQUFEQSxXQUFhLEtBQWJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEssQ0FBQTs7O1dBSUR1SixVLEdBQUFBLDRCQUFtQjtBQUNqQnhILFlBQU0scUNBQU5BLE1BQU0sQ0FBTkE7QUFJQUEsWUFBTSxDQUFOQSxTQUFnQlIsT0FBTyxDQUFDUSxNQUFNLENBTGIsTUFLTSxDQUF2QkEsQ0FMaUI7O0FBTWpCNUIsVUFBSSxDQUFKQTtBQUNBO0FBQ0QsSzs7V0FFRDhOLGEsR0FBQUEseUJBQWdCO0FBQ2QsVUFBTUMsUUFBUSxHQUFHbE8sQ0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsVUFBMEIyTSxTQUFTLENBQXBELEtBQWlCM00sQ0FBakI7QUFDQSxhQUFPa08sUUFBUSxHQUFHdkIsU0FBUyxDQUFaLFFBQXFCQSxTQUFTLENBQTdDO0FBQ0QsSzs7V0FFRHdCLFUsR0FBQUEsc0JBQWE7QUFBQTs7QUFDWDs7QUFFQSxVQUFJaE8sSUFBSSxDQUFKQSxVQUFlLGFBQW5CLE1BQUlBLENBQUosRUFBeUM7QUFDdkNnRSxjQUFNLEdBQUcsYUFEOEIsTUFDdkNBLENBRHVDOztBQUl2QyxZQUFJLE9BQU8sb0JBQVAsV0FBSixhQUF1RDtBQUNyREEsZ0JBQU0sR0FBRyxvQkFBVEEsQ0FBUyxDQUFUQTtBQUNEO0FBTkgsYUFPTztBQUNMQSxjQUFNLEdBQUcxRCxRQUFRLENBQVJBLGNBQXVCLGFBQWhDMEQsTUFBUzFELENBQVQwRDtBQUNEOztBQUVELFVBQU14RCxRQUFRLGlEQUM2QixhQUQ3QixTQUFkO0FBR0EsVUFBTXlOLFFBQVEsR0FBRyxjQUFjakssTUFBTSxDQUFOQSxpQkFBL0IsUUFBK0JBLENBQWQsQ0FBakI7QUFDQW5FLE9BQUMsQ0FBREEsUUFBQyxDQUFEQSxNQUFpQixzQkFBZ0I7QUFDL0IsY0FBSSxDQUFKLDBCQUNFK00sUUFBUSxDQUFSQSxzQkFERixPQUNFQSxDQURGLEVBRUUsQ0FGRixPQUVFLENBRkY7QUFERi9NO0FBT0E7QUFDRCxLOztXQUVEcU8seUIsR0FBQUEsMERBQWlEO0FBQy9DLFVBQU1DLE1BQU0sR0FBR3RPLENBQUMsQ0FBREEsT0FBQyxDQUFEQSxVQUFvQnlELFdBQVMsQ0FBNUMsSUFBZXpELENBQWY7O0FBRUEsVUFBSXVPLFlBQVksQ0FBaEIsUUFBeUI7QUFDdkJ2TyxTQUFDLENBQURBLFlBQUMsQ0FBREEsYUFDZXlELFdBQVMsQ0FEeEJ6RCxXQUNvQyxDQURwQ0E7QUFHRDtBQUNGLEssQ0FBQTs7O2FBSU13TyxxQixHQUFQLHdDQUFzQztBQUNwQyxVQUFNN04sUUFBUSxHQUFHUixJQUFJLENBQUpBLHVCQUFqQixPQUFpQkEsQ0FBakI7QUFDQSxhQUFPUSxRQUFRLEdBQUdGLFFBQVEsQ0FBUkEsY0FBSCxRQUFHQSxDQUFILEdBQWY7QUFDRCxLOzthQUVNK0QsZ0IsR0FBUCxrQ0FBZ0M7QUFDOUIsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBTWlLLEtBQUssR0FBS3pPLENBQUMsQ0FBakIsSUFBaUIsQ0FBakI7QUFDQSxZQUFJMEUsSUFBSSxHQUFRK0osS0FBSyxDQUFMQSxLQUFoQixVQUFnQkEsQ0FBaEI7O0FBQ0EsWUFBTTNDLE9BQU8scUNBRVIyQyxLQUFLLENBRkcsSUFFUkEsRUFGUSxNQUdSLGtEQUhMLEVBQWEsQ0FBYjs7QUFNQSxZQUFJLFNBQVMzQyxPQUFPLENBQWhCLFVBQTJCLGlCQUEvQixNQUErQixDQUEvQixFQUF5RDtBQUN2REEsaUJBQU8sQ0FBUEE7QUFDRDs7QUFFRCxZQUFJLENBQUosTUFBVztBQUNUcEgsY0FBSSxHQUFHLG1CQUFQQSxPQUFPLENBQVBBO0FBQ0ErSixlQUFLLENBQUxBO0FBQ0Q7O0FBRUQsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU8vSixJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsa0JBQU0sOENBQU4sSUFBTSxDQUFOO0FBQ0Q7O0FBQ0RBLGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUNEO0FBdkJILE9BQU8sQ0FBUDtBQXlCRCxLOzs7OzBCQXJRb0I7QUFDbkI7QUFDRDs7OzBCQUVvQjtBQUNuQjtBQUNEOzs7OztBQWtRSDs7Ozs7OztBQU1BMUUsR0FBQyxDQUFEQSxRQUFDLENBQURBLElBQWVxRCxPQUFLLENBQXBCckQsZ0JBQXFDbUQsVUFBUSxDQUE3Q25ELGFBQTJELGlCQUFpQjtBQUMxRTtBQUNBLFFBQUlDLEtBQUssQ0FBTEEsMEJBQUosS0FBeUM7QUFDdkNBLFdBQUssQ0FBTEE7QUFDRDs7QUFFRCxRQUFNeU8sUUFBUSxHQUFHMU8sQ0FBQyxDQUFsQixJQUFrQixDQUFsQjtBQUNBLFFBQU1XLFFBQVEsR0FBR1IsSUFBSSxDQUFKQSx1QkFBakIsSUFBaUJBLENBQWpCO0FBQ0EsUUFBTXdPLFNBQVMsR0FBRyxjQUFjbE8sUUFBUSxDQUFSQSxpQkFBaEMsUUFBZ0NBLENBQWQsQ0FBbEI7QUFFQVQsS0FBQyxDQUFEQSxTQUFDLENBQURBLE1BQWtCLFlBQVk7QUFDNUIsVUFBTTRPLE9BQU8sR0FBRzVPLENBQUMsQ0FBakIsSUFBaUIsQ0FBakI7QUFDQSxVQUFNMEUsSUFBSSxHQUFNa0ssT0FBTyxDQUFQQSxLQUFoQixVQUFnQkEsQ0FBaEI7QUFDQSxVQUFNN00sTUFBTSxHQUFJMkMsSUFBSSxjQUFjZ0ssUUFBUSxDQUExQyxJQUFrQ0EsRUFBbEM7O0FBQ0EzQixjQUFRLENBQVJBO0FBSkYvTTtBQVZGQTtBQWtCQTs7Ozs7O0FBTUFBLEdBQUMsQ0FBREEsYUFBYStNLFFBQVEsQ0FBckIvTTtBQUNBQSxHQUFDLENBQURBOztBQUNBQSxHQUFDLENBQURBLHdCQUF3QixZQUFNO0FBQzVCQSxLQUFDLENBQURBO0FBQ0EsV0FBTytNLFFBQVEsQ0FBZjtBQUZGL007QUM1WUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLE1BQUksU0FBUyxHQUFHLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLFFBQVAsS0FBb0IsV0FBckQsSUFBb0UsT0FBTyxTQUFQLEtBQXFCLFdBQXpHOztBQUVBLE1BQUksZUFBZSxHQUFHLFlBQVk7QUFDaEMsUUFBSSxxQkFBcUIsR0FBRyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLENBQTVCOztBQUNBLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcscUJBQXFCLENBQUMsTUFBMUMsRUFBa0QsQ0FBQyxJQUFJLENBQXZELEVBQTBEO0FBQ3hELFVBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFWLENBQW9CLE9BQXBCLENBQTRCLHFCQUFxQixDQUFDLENBQUQsQ0FBakQsS0FBeUQsQ0FBMUUsRUFBNkU7QUFDM0UsZUFBTyxDQUFQO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLENBQVA7QUFDRCxHQVJxQixFQUF0Qjs7QUFVQSxXQUFTLGlCQUFULENBQTJCLEVBQTNCLEVBQStCO0FBQzdCLFFBQUksTUFBTSxHQUFHLEtBQWI7QUFDQSxXQUFPLFlBQVk7QUFDakIsVUFBSSxNQUFKLEVBQVk7QUFDVjtBQUNEOztBQUNELFlBQU0sR0FBRyxJQUFUO0FBQ0EsWUFBTSxDQUFDLE9BQVAsQ0FBZSxPQUFmLEdBQXlCLElBQXpCLENBQThCLFlBQVk7QUFDeEMsY0FBTSxHQUFHLEtBQVQ7QUFDQSxVQUFFO0FBQ0gsT0FIRDtBQUlELEtBVEQ7QUFVRDs7QUFFRCxXQUFTLFlBQVQsQ0FBc0IsRUFBdEIsRUFBMEI7QUFDeEIsUUFBSSxTQUFTLEdBQUcsS0FBaEI7QUFDQSxXQUFPLFlBQVk7QUFDakIsVUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDZCxpQkFBUyxHQUFHLElBQVo7QUFDQSxrQkFBVSxDQUFDLFlBQVk7QUFDckIsbUJBQVMsR0FBRyxLQUFaO0FBQ0EsWUFBRTtBQUNILFNBSFMsRUFHUCxlQUhPLENBQVY7QUFJRDtBQUNGLEtBUkQ7QUFTRDs7QUFFRCxNQUFJLGtCQUFrQixHQUFHLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBN0M7QUFFQTs7Ozs7Ozs7OztBQVNBLE1BQUksUUFBUSxHQUFHLGtCQUFrQixHQUFHLGlCQUFILEdBQXVCLFlBQXhEO0FBRUE7Ozs7Ozs7O0FBT0EsV0FBUyxVQUFULENBQW9CLGVBQXBCLEVBQXFDO0FBQ25DLFFBQUksT0FBTyxHQUFHLEVBQWQ7QUFDQSxXQUFPLGVBQWUsSUFBSSxPQUFPLENBQUMsUUFBUixDQUFpQixJQUFqQixDQUFzQixlQUF0QixNQUEyQyxtQkFBckU7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLHdCQUFULENBQWtDLE9BQWxDLEVBQTJDLFFBQTNDLEVBQXFEO0FBQ25ELFFBQUksT0FBTyxDQUFDLFFBQVIsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsYUFBTyxFQUFQO0FBQ0QsS0FIa0QsQ0FJckQ7OztBQUNFLFFBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFSLENBQXNCLFdBQW5DO0FBQ0EsUUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQVY7QUFDQSxXQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBRCxDQUFOLEdBQW1CLEdBQWxDO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDO0FBQzlCLFFBQUksT0FBTyxDQUFDLFFBQVIsS0FBcUIsTUFBekIsRUFBaUM7QUFDL0IsYUFBTyxPQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFPLENBQUMsVUFBUixJQUFzQixPQUFPLENBQUMsSUFBckM7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLGVBQVQsQ0FBeUIsT0FBekIsRUFBa0M7QUFDbEM7QUFDRSxRQUFJLENBQUMsT0FBTCxFQUFjO0FBQ1osYUFBTyxRQUFRLENBQUMsSUFBaEI7QUFDRDs7QUFFRCxZQUFRLE9BQU8sQ0FBQyxRQUFoQjtBQUNFLFdBQUssTUFBTDtBQUNBLFdBQUssTUFBTDtBQUNFLGVBQU8sT0FBTyxDQUFDLGFBQVIsQ0FBc0IsSUFBN0I7O0FBQ0YsV0FBSyxXQUFMO0FBQ0UsZUFBTyxPQUFPLENBQUMsSUFBZjtBQUxKLEtBTmdDLENBY2xDOzs7QUFFRSxRQUFJLHFCQUFxQixHQUFHLHdCQUF3QixDQUFDLE9BQUQsQ0FBcEQ7QUFBQSxRQUNJLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxRQURyQztBQUFBLFFBRUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLFNBRnRDO0FBQUEsUUFHSSxTQUFTLEdBQUcscUJBQXFCLENBQUMsU0FIdEM7O0FBS0EsUUFBSSx3QkFBd0IsSUFBeEIsQ0FBNkIsUUFBUSxHQUFHLFNBQVgsR0FBdUIsU0FBcEQsQ0FBSixFQUFvRTtBQUNsRSxhQUFPLE9BQVA7QUFDRDs7QUFFRCxXQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBRCxDQUFkLENBQXRCO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQztBQUNuQyxXQUFPLFNBQVMsSUFBSSxTQUFTLENBQUMsYUFBdkIsR0FBdUMsU0FBUyxDQUFDLGFBQWpELEdBQWlFLFNBQXhFO0FBQ0Q7O0FBRUQsTUFBSSxNQUFNLEdBQUcsU0FBUyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsb0JBQVAsSUFBK0IsUUFBUSxDQUFDLFlBQTFDLENBQTNCO0FBQ0EsTUFBSSxNQUFNLEdBQUcsU0FBUyxJQUFJLFVBQVUsSUFBVixDQUFlLFNBQVMsQ0FBQyxTQUF6QixDQUExQjtBQUVBOzs7Ozs7OztBQU9BLFdBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUI7QUFDckIsUUFBSSxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDbEIsYUFBTyxNQUFQO0FBQ0Q7O0FBQ0QsUUFBSSxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDbEIsYUFBTyxNQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxNQUFNLElBQUksTUFBakI7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLGVBQVQsQ0FBeUIsT0FBekIsRUFBa0M7QUFDaEMsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLGFBQU8sUUFBUSxDQUFDLGVBQWhCO0FBQ0Q7O0FBRUQsUUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUQsQ0FBSixHQUFXLFFBQVEsQ0FBQyxJQUFwQixHQUEyQixJQUFoRCxDQUxnQyxDQU9sQzs7QUFDRSxRQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBUixJQUF3QixJQUEzQyxDQVJnQyxDQVNsQzs7QUFDRSxXQUFPLFlBQVksS0FBSyxjQUFqQixJQUFtQyxPQUFPLENBQUMsa0JBQWxELEVBQXNFO0FBQ3BFLGtCQUFZLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFuQixFQUF1QyxZQUF0RDtBQUNEOztBQUVELFFBQUksUUFBUSxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBNUM7O0FBRUEsUUFBSSxDQUFDLFFBQUQsSUFBYSxRQUFRLEtBQUssTUFBMUIsSUFBb0MsUUFBUSxLQUFLLE1BQXJELEVBQTZEO0FBQzNELGFBQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFSLENBQXNCLGVBQXpCLEdBQTJDLFFBQVEsQ0FBQyxlQUFsRTtBQUNELEtBbEIrQixDQW9CbEM7QUFDQTs7O0FBQ0UsUUFBSSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsT0FBYixFQUFzQixPQUF0QixDQUE4QixZQUFZLENBQUMsUUFBM0MsTUFBeUQsQ0FBQyxDQUExRCxJQUErRCx3QkFBd0IsQ0FBQyxZQUFELEVBQWUsVUFBZixDQUF4QixLQUF1RCxRQUExSCxFQUFvSTtBQUNsSSxhQUFPLGVBQWUsQ0FBQyxZQUFELENBQXRCO0FBQ0Q7O0FBRUQsV0FBTyxZQUFQO0FBQ0Q7O0FBRUQsV0FBUyxpQkFBVCxDQUEyQixPQUEzQixFQUFvQztBQUNsQyxRQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBdkI7O0FBRUEsUUFBSSxRQUFRLEtBQUssTUFBakIsRUFBeUI7QUFDdkIsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxRQUFRLEtBQUssTUFBYixJQUF1QixlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFULENBQWYsS0FBK0MsT0FBN0U7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDckIsUUFBSSxJQUFJLENBQUMsVUFBTCxLQUFvQixJQUF4QixFQUE4QjtBQUM1QixhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBTixDQUFkO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFdBQVMsc0JBQVQsQ0FBZ0MsUUFBaEMsRUFBMEMsUUFBMUMsRUFBb0Q7QUFDcEQ7QUFDRSxRQUFJLENBQUMsUUFBRCxJQUFhLENBQUMsUUFBUSxDQUFDLFFBQXZCLElBQW1DLENBQUMsUUFBcEMsSUFBZ0QsQ0FBQyxRQUFRLENBQUMsUUFBOUQsRUFBd0U7QUFDdEUsYUFBTyxRQUFRLENBQUMsZUFBaEI7QUFDRCxLQUppRCxDQU1wRDs7O0FBQ0UsUUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLHVCQUFULENBQWlDLFFBQWpDLElBQTZDLElBQUksQ0FBQywyQkFBOUQ7QUFDQSxRQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBSCxHQUFjLFFBQS9CO0FBQ0EsUUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLFFBQUgsR0FBYyxRQUE3QixDQVRrRCxDQVdwRDs7QUFDRSxRQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVCxFQUFaO0FBQ0EsU0FBSyxDQUFDLFFBQU4sQ0FBZSxLQUFmLEVBQXNCLENBQXRCO0FBQ0EsU0FBSyxDQUFDLE1BQU4sQ0FBYSxHQUFiLEVBQWtCLENBQWxCO0FBQ0EsUUFBSSx1QkFBdUIsR0FBRyxLQUFLLENBQUMsdUJBQXBDLENBZmtELENBaUJwRDs7QUFFRSxRQUFJLFFBQVEsS0FBSyx1QkFBYixJQUF3QyxRQUFRLEtBQUssdUJBQXJELElBQWdGLEtBQUssQ0FBQyxRQUFOLENBQWUsR0FBZixDQUFwRixFQUF5RztBQUN2RyxVQUFJLGlCQUFpQixDQUFDLHVCQUFELENBQXJCLEVBQWdEO0FBQzlDLGVBQU8sdUJBQVA7QUFDRDs7QUFFRCxhQUFPLGVBQWUsQ0FBQyx1QkFBRCxDQUF0QjtBQUNELEtBekJpRCxDQTJCcEQ7OztBQUNFLFFBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFELENBQTFCOztBQUNBLFFBQUksWUFBWSxDQUFDLElBQWpCLEVBQXVCO0FBQ3JCLGFBQU8sc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQWQsRUFBb0IsUUFBcEIsQ0FBN0I7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLHNCQUFzQixDQUFDLFFBQUQsRUFBVyxPQUFPLENBQUMsUUFBRCxDQUFQLENBQWtCLElBQTdCLENBQTdCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7O0FBUUEsV0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQzFCLFFBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFWLEdBQW1CLENBQW5CLElBQXdCLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUIsU0FBekMsR0FBcUQsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsS0FBL0U7QUFFQSxRQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssS0FBVCxHQUFpQixXQUFqQixHQUErQixZQUEvQztBQUNBLFFBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUF2Qjs7QUFFQSxRQUFJLFFBQVEsS0FBSyxNQUFiLElBQXVCLFFBQVEsS0FBSyxNQUF4QyxFQUFnRDtBQUM5QyxVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsYUFBUixDQUFzQixlQUFqQztBQUNBLFVBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGFBQVIsQ0FBc0IsZ0JBQXRCLElBQTBDLElBQWpFO0FBQ0EsYUFBTyxnQkFBZ0IsQ0FBQyxTQUFELENBQXZCO0FBQ0Q7O0FBRUQsV0FBTyxPQUFPLENBQUMsU0FBRCxDQUFkO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDcEMsUUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQixTQUF6QyxHQUFxRCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUFuRjtBQUVBLFFBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUF6QjtBQUNBLFFBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUExQjtBQUNBLFFBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUosR0FBUSxDQUEvQjtBQUNBLFFBQUksQ0FBQyxHQUFMLElBQVksU0FBUyxHQUFHLFFBQXhCO0FBQ0EsUUFBSSxDQUFDLE1BQUwsSUFBZSxTQUFTLEdBQUcsUUFBM0I7QUFDQSxRQUFJLENBQUMsSUFBTCxJQUFhLFVBQVUsR0FBRyxRQUExQjtBQUNBLFFBQUksQ0FBQyxLQUFMLElBQWMsVUFBVSxHQUFHLFFBQTNCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsSUFBaEMsRUFBc0M7QUFDcEMsUUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEdBQVQsR0FBZSxNQUFmLEdBQXdCLEtBQXBDO0FBQ0EsUUFBSSxLQUFLLEdBQUcsS0FBSyxLQUFLLE1BQVYsR0FBbUIsT0FBbkIsR0FBNkIsUUFBekM7QUFFQSxXQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFYLEdBQW1CLE9BQXBCLENBQVAsRUFBcUMsRUFBckMsQ0FBVixHQUFxRCxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBWCxHQUFtQixPQUFwQixDQUFQLEVBQXFDLEVBQXJDLENBQXRFO0FBQ0Q7O0FBRUQsV0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DLGFBQW5DLEVBQWtEO0FBQ2hELFdBQU8sSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFJLENBQUMsV0FBVyxJQUFaLENBQWIsRUFBZ0MsSUFBSSxDQUFDLFdBQVcsSUFBWixDQUFwQyxFQUF1RCxJQUFJLENBQUMsV0FBVyxJQUFaLENBQTNELEVBQThFLElBQUksQ0FBQyxXQUFXLElBQVosQ0FBbEYsRUFBcUcsSUFBSSxDQUFDLFdBQVcsSUFBWixDQUF6RyxFQUE0SCxJQUFJLENBQUMsRUFBRCxDQUFKLEdBQVcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQVosQ0FBTCxDQUFSLEdBQWtDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLEtBQUssUUFBVCxHQUFvQixLQUFwQixHQUE0QixNQUF4QyxDQUFELENBQWQsQ0FBMUMsR0FBNkcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLElBQUksS0FBSyxRQUFULEdBQW9CLFFBQXBCLEdBQStCLE9BQTNDLENBQUQsQ0FBZCxDQUFoSSxHQUF1TSxDQUFuVSxDQUFQO0FBQ0Q7O0FBRUQsV0FBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDO0FBQ2hDLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFwQjtBQUNBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFwQjtBQUNBLFFBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFELENBQUosSUFBWSxnQkFBZ0IsQ0FBQyxJQUFELENBQWhEO0FBRUEsV0FBTztBQUNMLFlBQU0sRUFBRSxPQUFPLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsYUFBdkIsQ0FEVjtBQUVMLFdBQUssRUFBRSxPQUFPLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsYUFBdEI7QUFGVCxLQUFQO0FBSUQ7O0FBRUQsTUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUIsQ0FBVSxRQUFWLEVBQW9CLFdBQXBCLEVBQWlDO0FBQ3BELFFBQUksRUFBRSxRQUFRLFlBQVksV0FBdEIsQ0FBSixFQUF3QztBQUN0QyxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU47QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBSSxXQUFXLEdBQUcsWUFBWTtBQUM1QixhQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQ3ZDLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQTFCLEVBQWtDLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsWUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUQsQ0FBdEI7QUFDQSxrQkFBVSxDQUFDLFVBQVgsR0FBd0IsVUFBVSxDQUFDLFVBQVgsSUFBeUIsS0FBakQ7QUFDQSxrQkFBVSxDQUFDLFlBQVgsR0FBMEIsSUFBMUI7QUFDQSxZQUFJLFdBQVcsVUFBZixFQUEyQixVQUFVLENBQUMsUUFBWCxHQUFzQixJQUF0QjtBQUMzQixjQUFNLENBQUMsY0FBUCxDQUFzQixNQUF0QixFQUE4QixVQUFVLENBQUMsR0FBekMsRUFBOEMsVUFBOUM7QUFDRDtBQUNGOztBQUVELFdBQU8sVUFBVSxXQUFWLEVBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQ3JELFVBQUksVUFBSixFQUFnQixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBYixFQUF3QixVQUF4QixDQUFoQjtBQUNoQixVQUFJLFdBQUosRUFBaUIsZ0JBQWdCLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FBaEI7QUFDakIsYUFBTyxXQUFQO0FBQ0QsS0FKRDtBQUtELEdBaEJpQixFQUFsQjs7QUFzQkEsTUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUIsQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixLQUFwQixFQUEyQjtBQUM5QyxRQUFJLEdBQUcsSUFBSSxHQUFYLEVBQWdCO0FBQ2QsWUFBTSxDQUFDLGNBQVAsQ0FBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0M7QUFDOUIsYUFBSyxFQUFFLEtBRHVCO0FBRTlCLGtCQUFVLEVBQUUsSUFGa0I7QUFHOUIsb0JBQVksRUFBRSxJQUhnQjtBQUk5QixnQkFBUSxFQUFFO0FBSm9CLE9BQWhDO0FBTUQsS0FQRCxNQU9PO0FBQ0wsU0FBRyxDQUFDLEdBQUQsQ0FBSCxHQUFXLEtBQVg7QUFDRDs7QUFFRCxXQUFPLEdBQVA7QUFDRCxHQWJEOztBQWVBLE1BQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFQLElBQWlCLFVBQVUsTUFBVixFQUFrQjtBQUNoRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUE5QixFQUFzQyxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLFVBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFELENBQXRCOztBQUVBLFdBQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQ3RCLFlBQUksTUFBTSxDQUFDLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsTUFBckMsRUFBNkMsR0FBN0MsQ0FBSixFQUF1RDtBQUNyRCxnQkFBTSxDQUFDLEdBQUQsQ0FBTixHQUFjLE1BQU0sQ0FBQyxHQUFELENBQXBCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQU8sTUFBUDtBQUNELEdBWkQ7QUFjQTs7Ozs7Ozs7O0FBT0EsV0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDO0FBQzlCLFdBQU8sUUFBUSxDQUFDLEVBQUQsRUFBSyxPQUFMLEVBQWM7QUFDM0IsV0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFSLEdBQWUsT0FBTyxDQUFDLEtBREg7QUFFM0IsWUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFSLEdBQWMsT0FBTyxDQUFDO0FBRkgsS0FBZCxDQUFmO0FBSUQ7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxxQkFBVCxDQUErQixPQUEvQixFQUF3QztBQUN0QyxRQUFJLElBQUksR0FBRyxFQUFYLENBRHNDLENBR3hDO0FBQ0E7QUFDQTs7QUFDRSxRQUFJO0FBQ0YsVUFBSSxJQUFJLENBQUMsRUFBRCxDQUFSLEVBQWM7QUFDWixZQUFJLEdBQUcsT0FBTyxDQUFDLHFCQUFSLEVBQVA7QUFDQSxZQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FBekI7QUFDQSxZQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBMUI7QUFDQSxZQUFJLENBQUMsR0FBTCxJQUFZLFNBQVo7QUFDQSxZQUFJLENBQUMsSUFBTCxJQUFhLFVBQWI7QUFDQSxZQUFJLENBQUMsTUFBTCxJQUFlLFNBQWY7QUFDQSxZQUFJLENBQUMsS0FBTCxJQUFjLFVBQWQ7QUFDRCxPQVJELE1BUU87QUFDTCxZQUFJLEdBQUcsT0FBTyxDQUFDLHFCQUFSLEVBQVA7QUFDRDtBQUNGLEtBWkQsQ0FZRSxPQUFPLENBQVAsRUFBVSxDQUFFOztBQUVkLFFBQUksTUFBTSxHQUFHO0FBQ1gsVUFBSSxFQUFFLElBQUksQ0FBQyxJQURBO0FBRVgsU0FBRyxFQUFFLElBQUksQ0FBQyxHQUZDO0FBR1gsV0FBSyxFQUFFLElBQUksQ0FBQyxLQUFMLEdBQWEsSUFBSSxDQUFDLElBSGQ7QUFJWCxZQUFNLEVBQUUsSUFBSSxDQUFDLE1BQUwsR0FBYyxJQUFJLENBQUM7QUFKaEIsS0FBYixDQXBCc0MsQ0EyQnhDOztBQUNFLFFBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFSLEtBQXFCLE1BQXJCLEdBQThCLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBVCxDQUE1QyxHQUFzRSxFQUFsRjtBQUNBLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFOLElBQWUsT0FBTyxDQUFDLFdBQXZCLElBQXNDLE1BQU0sQ0FBQyxLQUF6RDtBQUNBLFFBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFOLElBQWdCLE9BQU8sQ0FBQyxZQUF4QixJQUF3QyxNQUFNLENBQUMsTUFBNUQ7QUFFQSxRQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsV0FBUixHQUFzQixLQUEzQztBQUNBLFFBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxZQUFSLEdBQXVCLE1BQTNDLENBakNzQyxDQW1DeEM7QUFDQTs7QUFDRSxRQUFJLGNBQWMsSUFBSSxhQUF0QixFQUFxQztBQUNuQyxVQUFJLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxPQUFELENBQXJDO0FBQ0Esb0JBQWMsSUFBSSxjQUFjLENBQUMsTUFBRCxFQUFTLEdBQVQsQ0FBaEM7QUFDQSxtQkFBYSxJQUFJLGNBQWMsQ0FBQyxNQUFELEVBQVMsR0FBVCxDQUEvQjtBQUVBLFlBQU0sQ0FBQyxLQUFQLElBQWdCLGNBQWhCO0FBQ0EsWUFBTSxDQUFDLE1BQVAsSUFBaUIsYUFBakI7QUFDRDs7QUFFRCxXQUFPLGFBQWEsQ0FBQyxNQUFELENBQXBCO0FBQ0Q7O0FBRUQsV0FBUyxvQ0FBVCxDQUE4QyxRQUE5QyxFQUF3RCxNQUF4RCxFQUFnRTtBQUM5RCxRQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBVixHQUFtQixDQUFuQixJQUF3QixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCLFNBQXpDLEdBQXFELFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQXhGO0FBRUEsUUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUQsQ0FBakI7QUFDQSxRQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUCxLQUFvQixNQUFqQztBQUNBLFFBQUksWUFBWSxHQUFHLHFCQUFxQixDQUFDLFFBQUQsQ0FBeEM7QUFDQSxRQUFJLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxNQUFELENBQXRDO0FBQ0EsUUFBSSxZQUFZLEdBQUcsZUFBZSxDQUFDLFFBQUQsQ0FBbEM7QUFFQSxRQUFJLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxNQUFELENBQXJDO0FBQ0EsUUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFSLEVBQXdCLEVBQXhCLENBQS9CO0FBQ0EsUUFBSSxlQUFlLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFSLEVBQXlCLEVBQXpCLENBQWhDLENBWDhELENBYWhFOztBQUNFLFFBQUksYUFBYSxJQUFJLE1BQXJCLEVBQTZCO0FBQzNCLGdCQUFVLENBQUMsR0FBWCxHQUFpQixJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVUsQ0FBQyxHQUFwQixFQUF5QixDQUF6QixDQUFqQjtBQUNBLGdCQUFVLENBQUMsSUFBWCxHQUFrQixJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVUsQ0FBQyxJQUFwQixFQUEwQixDQUExQixDQUFsQjtBQUNEOztBQUNELFFBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMxQixTQUFHLEVBQUUsWUFBWSxDQUFDLEdBQWIsR0FBbUIsVUFBVSxDQUFDLEdBQTlCLEdBQW9DLGNBRGY7QUFFMUIsVUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFiLEdBQW9CLFVBQVUsQ0FBQyxJQUEvQixHQUFzQyxlQUZsQjtBQUcxQixXQUFLLEVBQUUsWUFBWSxDQUFDLEtBSE07QUFJMUIsWUFBTSxFQUFFLFlBQVksQ0FBQztBQUpLLEtBQUQsQ0FBM0I7QUFNQSxXQUFPLENBQUMsU0FBUixHQUFvQixDQUFwQjtBQUNBLFdBQU8sQ0FBQyxVQUFSLEdBQXFCLENBQXJCLENBekI4RCxDQTJCaEU7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsUUFBSSxDQUFDLE1BQUQsSUFBVyxNQUFmLEVBQXVCO0FBQ3JCLFVBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUixFQUFtQixFQUFuQixDQUExQjtBQUNBLFVBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUixFQUFvQixFQUFwQixDQUEzQjtBQUVBLGFBQU8sQ0FBQyxHQUFSLElBQWUsY0FBYyxHQUFHLFNBQWhDO0FBQ0EsYUFBTyxDQUFDLE1BQVIsSUFBa0IsY0FBYyxHQUFHLFNBQW5DO0FBQ0EsYUFBTyxDQUFDLElBQVIsSUFBZ0IsZUFBZSxHQUFHLFVBQWxDO0FBQ0EsYUFBTyxDQUFDLEtBQVIsSUFBaUIsZUFBZSxHQUFHLFVBQW5DLENBUHFCLENBU3pCOztBQUNJLGFBQU8sQ0FBQyxTQUFSLEdBQW9CLFNBQXBCO0FBQ0EsYUFBTyxDQUFDLFVBQVIsR0FBcUIsVUFBckI7QUFDRDs7QUFFRCxRQUFJLE1BQU0sSUFBSSxDQUFDLGFBQVgsR0FBMkIsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsWUFBaEIsQ0FBM0IsR0FBMkQsTUFBTSxLQUFLLFlBQVgsSUFBMkIsWUFBWSxDQUFDLFFBQWIsS0FBMEIsTUFBcEgsRUFBNEg7QUFDMUgsYUFBTyxHQUFHLGFBQWEsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUF2QjtBQUNEOztBQUVELFdBQU8sT0FBUDtBQUNEOztBQUVELFdBQVMsNkNBQVQsQ0FBdUQsT0FBdkQsRUFBZ0U7QUFDOUQsUUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQixTQUF6QyxHQUFxRCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUF4RjtBQUVBLFFBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFSLENBQXNCLGVBQWpDO0FBQ0EsUUFBSSxjQUFjLEdBQUcsb0NBQW9DLENBQUMsT0FBRCxFQUFVLElBQVYsQ0FBekQ7QUFDQSxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQUksQ0FBQyxXQUFkLEVBQTJCLE1BQU0sQ0FBQyxVQUFQLElBQXFCLENBQWhELENBQVo7QUFDQSxRQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQUksQ0FBQyxZQUFkLEVBQTRCLE1BQU0sQ0FBQyxXQUFQLElBQXNCLENBQWxELENBQWI7QUFFQSxRQUFJLFNBQVMsR0FBRyxDQUFDLGFBQUQsR0FBaUIsU0FBUyxDQUFDLElBQUQsQ0FBMUIsR0FBbUMsQ0FBbkQ7QUFDQSxRQUFJLFVBQVUsR0FBRyxDQUFDLGFBQUQsR0FBaUIsU0FBUyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQTFCLEdBQTJDLENBQTVEO0FBRUEsUUFBSSxNQUFNLEdBQUc7QUFDWCxTQUFHLEVBQUUsU0FBUyxHQUFHLGNBQWMsQ0FBQyxHQUEzQixHQUFpQyxjQUFjLENBQUMsU0FEMUM7QUFFWCxVQUFJLEVBQUUsVUFBVSxHQUFHLGNBQWMsQ0FBQyxJQUE1QixHQUFtQyxjQUFjLENBQUMsVUFGN0M7QUFHWCxXQUFLLEVBQUUsS0FISTtBQUlYLFlBQU0sRUFBRTtBQUpHLEtBQWI7QUFPQSxXQUFPLGFBQWEsQ0FBQyxNQUFELENBQXBCO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFdBQVMsT0FBVCxDQUFpQixPQUFqQixFQUEwQjtBQUN4QixRQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBdkI7O0FBQ0EsUUFBSSxRQUFRLEtBQUssTUFBYixJQUF1QixRQUFRLEtBQUssTUFBeEMsRUFBZ0Q7QUFDOUMsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsUUFBSSx3QkFBd0IsQ0FBQyxPQUFELEVBQVUsVUFBVixDQUF4QixLQUFrRCxPQUF0RCxFQUErRDtBQUM3RCxhQUFPLElBQVA7QUFDRDs7QUFDRCxRQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsT0FBRCxDQUE5Qjs7QUFDQSxRQUFJLENBQUMsVUFBTCxFQUFpQjtBQUNmLGFBQU8sS0FBUDtBQUNEOztBQUNELFdBQU8sT0FBTyxDQUFDLFVBQUQsQ0FBZDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQVFBLFdBQVMsNEJBQVQsQ0FBc0MsT0FBdEMsRUFBK0M7QUFDL0M7QUFDRSxRQUFJLENBQUMsT0FBRCxJQUFZLENBQUMsT0FBTyxDQUFDLGFBQXJCLElBQXNDLElBQUksRUFBOUMsRUFBa0Q7QUFDaEQsYUFBTyxRQUFRLENBQUMsZUFBaEI7QUFDRDs7QUFDRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBakI7O0FBQ0EsV0FBTyxFQUFFLElBQUksd0JBQXdCLENBQUMsRUFBRCxFQUFLLFdBQUwsQ0FBeEIsS0FBOEMsTUFBM0QsRUFBbUU7QUFDakUsUUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFSO0FBQ0Q7O0FBQ0QsV0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLGVBQXRCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7OztBQVdBLFdBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixTQUEvQixFQUEwQyxPQUExQyxFQUFtRCxpQkFBbkQsRUFBc0U7QUFDcEUsUUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQixTQUF6QyxHQUFxRCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUF4RixDQURvRSxDQUd0RTs7QUFFRSxRQUFJLFVBQVUsR0FBRztBQUFFLFNBQUcsRUFBRSxDQUFQO0FBQVUsVUFBSSxFQUFFO0FBQWhCLEtBQWpCO0FBQ0EsUUFBSSxZQUFZLEdBQUcsYUFBYSxHQUFHLDRCQUE0QixDQUFDLE1BQUQsQ0FBL0IsR0FBMEMsc0JBQXNCLENBQUMsTUFBRCxFQUFTLGdCQUFnQixDQUFDLFNBQUQsQ0FBekIsQ0FBaEcsQ0FOb0UsQ0FRdEU7O0FBQ0UsUUFBSSxpQkFBaUIsS0FBSyxVQUExQixFQUFzQztBQUNwQyxnQkFBVSxHQUFHLDZDQUE2QyxDQUFDLFlBQUQsRUFBZSxhQUFmLENBQTFEO0FBQ0QsS0FGRCxNQUVPO0FBQ1Q7QUFDSSxVQUFJLGNBQWMsR0FBRyxLQUFLLENBQTFCOztBQUNBLFVBQUksaUJBQWlCLEtBQUssY0FBMUIsRUFBMEM7QUFDeEMsc0JBQWMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQUQsQ0FBZCxDQUFoQzs7QUFDQSxZQUFJLGNBQWMsQ0FBQyxRQUFmLEtBQTRCLE1BQWhDLEVBQXdDO0FBQ3RDLHdCQUFjLEdBQUcsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsZUFBdEM7QUFDRDtBQUNGLE9BTEQsTUFLTyxJQUFJLGlCQUFpQixLQUFLLFFBQTFCLEVBQW9DO0FBQ3pDLHNCQUFjLEdBQUcsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsZUFBdEM7QUFDRCxPQUZNLE1BRUE7QUFDTCxzQkFBYyxHQUFHLGlCQUFqQjtBQUNEOztBQUVELFVBQUksT0FBTyxHQUFHLG9DQUFvQyxDQUFDLGNBQUQsRUFBaUIsWUFBakIsRUFBK0IsYUFBL0IsQ0FBbEQsQ0FkSyxDQWdCVDs7QUFDSSxVQUFJLGNBQWMsQ0FBQyxRQUFmLEtBQTRCLE1BQTVCLElBQXNDLENBQUMsT0FBTyxDQUFDLFlBQUQsQ0FBbEQsRUFBa0U7QUFDaEUsWUFBSSxlQUFlLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFSLENBQXBDO0FBQUEsWUFDSSxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BRDdCO0FBQUEsWUFFSSxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBRjVCOztBQUlBLGtCQUFVLENBQUMsR0FBWCxJQUFrQixPQUFPLENBQUMsR0FBUixHQUFjLE9BQU8sQ0FBQyxTQUF4QztBQUNBLGtCQUFVLENBQUMsTUFBWCxHQUFvQixNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQXJDO0FBQ0Esa0JBQVUsQ0FBQyxJQUFYLElBQW1CLE9BQU8sQ0FBQyxJQUFSLEdBQWUsT0FBTyxDQUFDLFVBQTFDO0FBQ0Esa0JBQVUsQ0FBQyxLQUFYLEdBQW1CLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBbkM7QUFDRCxPQVRELE1BU087QUFDWDtBQUNNLGtCQUFVLEdBQUcsT0FBYjtBQUNEO0FBQ0YsS0F6Q21FLENBMkN0RTs7O0FBQ0UsV0FBTyxHQUFHLE9BQU8sSUFBSSxDQUFyQjtBQUNBLFFBQUksZUFBZSxHQUFHLE9BQU8sT0FBUCxLQUFtQixRQUF6QztBQUNBLGNBQVUsQ0FBQyxJQUFYLElBQW1CLGVBQWUsR0FBRyxPQUFILEdBQWEsT0FBTyxDQUFDLElBQVIsSUFBZ0IsQ0FBL0Q7QUFDQSxjQUFVLENBQUMsR0FBWCxJQUFrQixlQUFlLEdBQUcsT0FBSCxHQUFhLE9BQU8sQ0FBQyxHQUFSLElBQWUsQ0FBN0Q7QUFDQSxjQUFVLENBQUMsS0FBWCxJQUFvQixlQUFlLEdBQUcsT0FBSCxHQUFhLE9BQU8sQ0FBQyxLQUFSLElBQWlCLENBQWpFO0FBQ0EsY0FBVSxDQUFDLE1BQVgsSUFBcUIsZUFBZSxHQUFHLE9BQUgsR0FBYSxPQUFPLENBQUMsTUFBUixJQUFrQixDQUFuRTtBQUVBLFdBQU8sVUFBUDtBQUNEOztBQUVELFdBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QjtBQUNyQixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBakI7QUFBQSxRQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFEbEI7QUFHQSxXQUFPLEtBQUssR0FBRyxNQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLE9BQXpDLEVBQWtELE1BQWxELEVBQTBELFNBQTFELEVBQXFFLGlCQUFyRSxFQUF3RjtBQUN0RixRQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBVixHQUFtQixDQUFuQixJQUF3QixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCLFNBQXpDLEdBQXFELFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLENBQWxGOztBQUVBLFFBQUksU0FBUyxDQUFDLE9BQVYsQ0FBa0IsTUFBbEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQyxhQUFPLFNBQVA7QUFDRDs7QUFFRCxRQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsT0FBcEIsRUFBNkIsaUJBQTdCLENBQTlCO0FBRUEsUUFBSSxLQUFLLEdBQUc7QUFDVixTQUFHLEVBQUU7QUFDSCxhQUFLLEVBQUUsVUFBVSxDQUFDLEtBRGY7QUFFSCxjQUFNLEVBQUUsT0FBTyxDQUFDLEdBQVIsR0FBYyxVQUFVLENBQUM7QUFGOUIsT0FESztBQUtWLFdBQUssRUFBRTtBQUNMLGFBQUssRUFBRSxVQUFVLENBQUMsS0FBWCxHQUFtQixPQUFPLENBQUMsS0FEN0I7QUFFTCxjQUFNLEVBQUUsVUFBVSxDQUFDO0FBRmQsT0FMRztBQVNWLFlBQU0sRUFBRTtBQUNOLGFBQUssRUFBRSxVQUFVLENBQUMsS0FEWjtBQUVOLGNBQU0sRUFBRSxVQUFVLENBQUMsTUFBWCxHQUFvQixPQUFPLENBQUM7QUFGOUIsT0FURTtBQWFWLFVBQUksRUFBRTtBQUNKLGFBQUssRUFBRSxPQUFPLENBQUMsSUFBUixHQUFlLFVBQVUsQ0FBQyxJQUQ3QjtBQUVKLGNBQU0sRUFBRSxVQUFVLENBQUM7QUFGZjtBQWJJLEtBQVo7QUFtQkEsUUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLENBQXVCLFVBQVUsR0FBVixFQUFlO0FBQ3RELGFBQU8sUUFBUSxDQUFDO0FBQ2QsV0FBRyxFQUFFO0FBRFMsT0FBRCxFQUVaLEtBQUssQ0FBQyxHQUFELENBRk8sRUFFQTtBQUNiLFlBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUQsQ0FBTjtBQURBLE9BRkEsQ0FBZjtBQUtELEtBTmlCLEVBTWYsSUFOZSxDQU1WLFVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0I7QUFDdEIsYUFBTyxDQUFDLENBQUMsSUFBRixHQUFTLENBQUMsQ0FBQyxJQUFsQjtBQUNELEtBUmlCLENBQWxCO0FBVUEsUUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDLE1BQVosQ0FBbUIsVUFBVSxLQUFWLEVBQWlCO0FBQ3RELFVBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFsQjtBQUFBLFVBQ0ksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQURuQjtBQUVBLGFBQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFoQixJQUErQixNQUFNLElBQUksTUFBTSxDQUFDLFlBQXZEO0FBQ0QsS0FKbUIsQ0FBcEI7QUFNQSxRQUFJLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxNQUFkLEdBQXVCLENBQXZCLEdBQTJCLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUIsR0FBNUMsR0FBa0QsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlLEdBQXpGO0FBRUEsUUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBaEI7QUFFQSxXQUFPLGlCQUFpQixJQUFJLFNBQVMsR0FBRyxNQUFNLFNBQVQsR0FBcUIsRUFBbEMsQ0FBeEI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLG1CQUFULENBQTZCLEtBQTdCLEVBQW9DLE1BQXBDLEVBQTRDLFNBQTVDLEVBQXVEO0FBQ3JELFFBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFWLEdBQW1CLENBQW5CLElBQXdCLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUIsU0FBekMsR0FBcUQsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsSUFBeEY7QUFFQSxRQUFJLGtCQUFrQixHQUFHLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQyxNQUFELENBQS9CLEdBQTBDLHNCQUFzQixDQUFDLE1BQUQsRUFBUyxnQkFBZ0IsQ0FBQyxTQUFELENBQXpCLENBQXRHO0FBQ0EsV0FBTyxvQ0FBb0MsQ0FBQyxTQUFELEVBQVksa0JBQVosRUFBZ0MsYUFBaEMsQ0FBM0M7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0M7QUFDOUIsUUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQVIsQ0FBc0IsV0FBbkM7QUFDQSxRQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBLFFBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUCxJQUFvQixDQUFyQixDQUFWLEdBQW9DLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBUCxJQUF1QixDQUF4QixDQUF0RDtBQUNBLFFBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUCxJQUFxQixDQUF0QixDQUFWLEdBQXFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBUCxJQUFzQixDQUF2QixDQUF2RDtBQUNBLFFBQUksTUFBTSxHQUFHO0FBQ1gsV0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLENBRGxCO0FBRVgsWUFBTSxFQUFFLE9BQU8sQ0FBQyxZQUFSLEdBQXVCO0FBRnBCLEtBQWI7QUFJQSxXQUFPLE1BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDO0FBQ3ZDLFFBQUksSUFBSSxHQUFHO0FBQUUsVUFBSSxFQUFFLE9BQVI7QUFBaUIsV0FBSyxFQUFFLE1BQXhCO0FBQWdDLFlBQU0sRUFBRSxLQUF4QztBQUErQyxTQUFHLEVBQUU7QUFBcEQsS0FBWDtBQUNBLFdBQU8sU0FBUyxDQUFDLE9BQVYsQ0FBa0Isd0JBQWxCLEVBQTRDLFVBQVUsT0FBVixFQUFtQjtBQUNwRSxhQUFPLElBQUksQ0FBQyxPQUFELENBQVg7QUFDRCxLQUZNLENBQVA7QUFHRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLGdCQUFsQyxFQUFvRCxTQUFwRCxFQUErRDtBQUM3RCxhQUFTLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBWixDQUQ2RCxDQUcvRDs7QUFDRSxRQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBRCxDQUE5QixDQUo2RCxDQU0vRDs7QUFDRSxRQUFJLGFBQWEsR0FBRztBQUNsQixXQUFLLEVBQUUsVUFBVSxDQUFDLEtBREE7QUFFbEIsWUFBTSxFQUFFLFVBQVUsQ0FBQztBQUZELEtBQXBCLENBUDZELENBWS9EOztBQUNFLFFBQUksT0FBTyxHQUFHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsT0FBbEIsQ0FBMEIsU0FBMUIsTUFBeUMsQ0FBQyxDQUF4RDtBQUNBLFFBQUksUUFBUSxHQUFHLE9BQU8sR0FBRyxLQUFILEdBQVcsTUFBakM7QUFDQSxRQUFJLGFBQWEsR0FBRyxPQUFPLEdBQUcsTUFBSCxHQUFZLEtBQXZDO0FBQ0EsUUFBSSxXQUFXLEdBQUcsT0FBTyxHQUFHLFFBQUgsR0FBYyxPQUF2QztBQUNBLFFBQUksb0JBQW9CLEdBQUcsQ0FBQyxPQUFELEdBQVcsUUFBWCxHQUFzQixPQUFqRDtBQUVBLGlCQUFhLENBQUMsUUFBRCxDQUFiLEdBQTBCLGdCQUFnQixDQUFDLFFBQUQsQ0FBaEIsR0FBNkIsZ0JBQWdCLENBQUMsV0FBRCxDQUFoQixHQUFnQyxDQUE3RCxHQUFpRSxVQUFVLENBQUMsV0FBRCxDQUFWLEdBQTBCLENBQXJIOztBQUNBLFFBQUksU0FBUyxLQUFLLGFBQWxCLEVBQWlDO0FBQy9CLG1CQUFhLENBQUMsYUFBRCxDQUFiLEdBQStCLGdCQUFnQixDQUFDLGFBQUQsQ0FBaEIsR0FBa0MsVUFBVSxDQUFDLG9CQUFELENBQTNFO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsbUJBQWEsQ0FBQyxhQUFELENBQWIsR0FBK0IsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsYUFBRCxDQUFyQixDQUEvQztBQUNEOztBQUVELFdBQU8sYUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsV0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQixLQUFuQixFQUEwQjtBQUMxQjtBQUNFLFFBQUksS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsYUFBTyxHQUFHLENBQUMsSUFBSixDQUFTLEtBQVQsQ0FBUDtBQUNELEtBSnVCLENBTTFCOzs7QUFDRSxXQUFPLEdBQUcsQ0FBQyxNQUFKLENBQVcsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDckM7QUFDRSxRQUFJLEtBQUssQ0FBQyxTQUFOLENBQWdCLFNBQXBCLEVBQStCO0FBQzdCLGFBQU8sR0FBRyxDQUFDLFNBQUosQ0FBYyxVQUFVLEdBQVYsRUFBZTtBQUNsQyxlQUFPLEdBQUcsQ0FBQyxJQUFELENBQUgsS0FBYyxLQUFyQjtBQUNELE9BRk0sQ0FBUDtBQUdELEtBTmtDLENBUXJDOzs7QUFDRSxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRCxFQUFNLFVBQVUsR0FBVixFQUFlO0FBQ25DLGFBQU8sR0FBRyxDQUFDLElBQUQsQ0FBSCxLQUFjLEtBQXJCO0FBQ0QsS0FGZSxDQUFoQjtBQUdBLFdBQU8sR0FBRyxDQUFDLE9BQUosQ0FBWSxLQUFaLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLFlBQVQsQ0FBc0IsU0FBdEIsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsRUFBNkM7QUFDM0MsUUFBSSxjQUFjLEdBQUcsSUFBSSxLQUFLLFNBQVQsR0FBcUIsU0FBckIsR0FBaUMsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsU0FBUyxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLElBQXBCLENBQTVCLENBQXREO0FBRUEsa0JBQWMsQ0FBQyxPQUFmLENBQXVCLFVBQVUsUUFBVixFQUFvQjtBQUN6QyxVQUFJLFFBQVEsQ0FBQyxVQUFELENBQVosRUFBMEI7QUFDOUI7QUFDTSxlQUFPLENBQUMsSUFBUixDQUFhLHVEQUFiO0FBQ0Q7O0FBQ0QsVUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLFVBQUQsQ0FBUixJQUF3QixRQUFRLENBQUMsRUFBMUMsQ0FMeUMsQ0FLSTs7QUFDN0MsVUFBSSxRQUFRLENBQUMsT0FBVCxJQUFvQixVQUFVLENBQUMsRUFBRCxDQUFsQyxFQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDTSxZQUFJLENBQUMsT0FBTCxDQUFhLE1BQWIsR0FBc0IsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFMLENBQWEsTUFBZCxDQUFuQztBQUNBLFlBQUksQ0FBQyxPQUFMLENBQWEsU0FBYixHQUF5QixhQUFhLENBQUMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFkLENBQXRDO0FBRUEsWUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFELEVBQU8sUUFBUCxDQUFUO0FBQ0Q7QUFDRixLQWZEO0FBaUJBLFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFdBQVMsTUFBVCxHQUFrQjtBQUNsQjtBQUNFLFFBQUksS0FBSyxLQUFMLENBQVcsV0FBZixFQUE0QjtBQUMxQjtBQUNEOztBQUVELFFBQUksSUFBSSxHQUFHO0FBQ1QsY0FBUSxFQUFFLElBREQ7QUFFVCxZQUFNLEVBQUUsRUFGQztBQUdULGlCQUFXLEVBQUUsRUFISjtBQUlULGdCQUFVLEVBQUUsRUFKSDtBQUtULGFBQU8sRUFBRSxLQUxBO0FBTVQsYUFBTyxFQUFFO0FBTkEsS0FBWCxDQU5nQixDQWVsQjs7QUFDRSxRQUFJLENBQUMsT0FBTCxDQUFhLFNBQWIsR0FBeUIsbUJBQW1CLENBQUMsS0FBSyxLQUFOLEVBQWEsS0FBSyxNQUFsQixFQUEwQixLQUFLLFNBQS9CLEVBQTBDLEtBQUssT0FBTCxDQUFhLGFBQXZELENBQTVDLENBaEJnQixDQWtCbEI7QUFDQTtBQUNBOztBQUNFLFFBQUksQ0FBQyxTQUFMLEdBQWlCLG9CQUFvQixDQUFDLEtBQUssT0FBTCxDQUFhLFNBQWQsRUFBeUIsSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUF0QyxFQUFpRCxLQUFLLE1BQXRELEVBQThELEtBQUssU0FBbkUsRUFBOEUsS0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixJQUF2QixDQUE0QixpQkFBMUcsRUFBNkgsS0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixJQUF2QixDQUE0QixPQUF6SixDQUFyQyxDQXJCZ0IsQ0F1QmxCOztBQUNFLFFBQUksQ0FBQyxpQkFBTCxHQUF5QixJQUFJLENBQUMsU0FBOUI7QUFFQSxRQUFJLENBQUMsYUFBTCxHQUFxQixLQUFLLE9BQUwsQ0FBYSxhQUFsQyxDQTFCZ0IsQ0E0QmxCOztBQUNFLFFBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixHQUFzQixnQkFBZ0IsQ0FBQyxLQUFLLE1BQU4sRUFBYyxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQTNCLEVBQXNDLElBQUksQ0FBQyxTQUEzQyxDQUF0QztBQUVBLFFBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixDQUFvQixRQUFwQixHQUErQixLQUFLLE9BQUwsQ0FBYSxhQUFiLEdBQTZCLE9BQTdCLEdBQXVDLFVBQXRFLENBL0JnQixDQWlDbEI7O0FBQ0UsUUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLFNBQU4sRUFBaUIsSUFBakIsQ0FBbkIsQ0FsQ2dCLENBb0NsQjtBQUNBOztBQUNFLFFBQUksQ0FBQyxLQUFLLEtBQUwsQ0FBVyxTQUFoQixFQUEyQjtBQUN6QixXQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLElBQXZCO0FBQ0EsV0FBSyxPQUFMLENBQWEsUUFBYixDQUFzQixJQUF0QjtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsSUFBdEI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7O0FBTUEsV0FBUyxpQkFBVCxDQUEyQixTQUEzQixFQUFzQyxZQUF0QyxFQUFvRDtBQUNsRCxXQUFPLFNBQVMsQ0FBQyxJQUFWLENBQWUsVUFBVSxJQUFWLEVBQWdCO0FBQ3BDLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFoQjtBQUFBLFVBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQyxPQURuQjtBQUVBLGFBQU8sT0FBTyxJQUFJLElBQUksS0FBSyxZQUEzQjtBQUNELEtBSk0sQ0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7OztBQU9BLFdBQVMsd0JBQVQsQ0FBa0MsUUFBbEMsRUFBNEM7QUFDMUMsUUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsRUFBd0IsS0FBeEIsRUFBK0IsR0FBL0IsQ0FBZjtBQUNBLFFBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLFdBQW5CLEtBQW1DLFFBQVEsQ0FBQyxLQUFULENBQWUsQ0FBZixDQUFuRDs7QUFFQSxTQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUE3QixFQUFxQyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFELENBQXJCO0FBQ0EsVUFBSSxPQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssTUFBTCxHQUFjLFNBQWpCLEdBQTZCLFFBQWpEOztBQUNBLFVBQUksT0FBTyxRQUFRLENBQUMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsT0FBcEIsQ0FBUCxLQUF3QyxXQUE1QyxFQUF5RDtBQUN2RCxlQUFPLE9BQVA7QUFDRDtBQUNGOztBQUNELFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxXQUFTLE9BQVQsR0FBbUI7QUFDakIsU0FBSyxLQUFMLENBQVcsV0FBWCxHQUF5QixJQUF6QixDQURpQixDQUduQjs7QUFDRSxRQUFJLGlCQUFpQixDQUFDLEtBQUssU0FBTixFQUFpQixZQUFqQixDQUFyQixFQUFxRDtBQUNuRCxXQUFLLE1BQUwsQ0FBWSxlQUFaLENBQTRCLGFBQTVCO0FBQ0EsV0FBSyxNQUFMLENBQVksS0FBWixDQUFrQixRQUFsQixHQUE2QixFQUE3QjtBQUNBLFdBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsR0FBd0IsRUFBeEI7QUFDQSxXQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLElBQWxCLEdBQXlCLEVBQXpCO0FBQ0EsV0FBSyxNQUFMLENBQVksS0FBWixDQUFrQixLQUFsQixHQUEwQixFQUExQjtBQUNBLFdBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsTUFBbEIsR0FBMkIsRUFBM0I7QUFDQSxXQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLFVBQWxCLEdBQStCLEVBQS9CO0FBQ0EsV0FBSyxNQUFMLENBQVksS0FBWixDQUFrQix3QkFBd0IsQ0FBQyxXQUFELENBQTFDLElBQTJELEVBQTNEO0FBQ0Q7O0FBRUQsU0FBSyxxQkFBTCxHQWZpQixDQWlCbkI7QUFDQTs7QUFDRSxRQUFJLEtBQUssT0FBTCxDQUFhLGVBQWpCLEVBQWtDO0FBQ2hDLFdBQUssTUFBTCxDQUFZLFVBQVosQ0FBdUIsV0FBdkIsQ0FBbUMsS0FBSyxNQUF4QztBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxXQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEI7QUFDMUIsUUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQTVCO0FBQ0EsV0FBTyxhQUFhLEdBQUcsYUFBYSxDQUFDLFdBQWpCLEdBQStCLE1BQW5EO0FBQ0Q7O0FBRUQsV0FBUyxxQkFBVCxDQUErQixZQUEvQixFQUE2QyxLQUE3QyxFQUFvRCxRQUFwRCxFQUE4RCxhQUE5RCxFQUE2RTtBQUMzRSxRQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsUUFBYixLQUEwQixNQUF2QztBQUNBLFFBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxZQUFZLENBQUMsYUFBYixDQUEyQixXQUE5QixHQUE0QyxZQUEvRDtBQUNBLFVBQU0sQ0FBQyxnQkFBUCxDQUF3QixLQUF4QixFQUErQixRQUEvQixFQUF5QztBQUFFLGFBQU8sRUFBRTtBQUFYLEtBQXpDOztBQUVBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCwyQkFBcUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVIsQ0FBaEIsRUFBcUMsS0FBckMsRUFBNEMsUUFBNUMsRUFBc0QsYUFBdEQsQ0FBckI7QUFDRDs7QUFDRCxpQkFBYSxDQUFDLElBQWQsQ0FBbUIsTUFBbkI7QUFDRDtBQUVEOzs7Ozs7OztBQU1BLFdBQVMsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsT0FBeEMsRUFBaUQsS0FBakQsRUFBd0QsV0FBeEQsRUFBcUU7QUFDckU7QUFDRSxTQUFLLENBQUMsV0FBTixHQUFvQixXQUFwQjtBQUNBLGFBQVMsQ0FBQyxTQUFELENBQVQsQ0FBcUIsZ0JBQXJCLENBQXNDLFFBQXRDLEVBQWdELEtBQUssQ0FBQyxXQUF0RCxFQUFtRTtBQUFFLGFBQU8sRUFBRTtBQUFYLEtBQW5FLEVBSG1FLENBS3JFOztBQUNFLFFBQUksYUFBYSxHQUFHLGVBQWUsQ0FBQyxTQUFELENBQW5DO0FBQ0EseUJBQXFCLENBQUMsYUFBRCxFQUFnQixRQUFoQixFQUEwQixLQUFLLENBQUMsV0FBaEMsRUFBNkMsS0FBSyxDQUFDLGFBQW5ELENBQXJCO0FBQ0EsU0FBSyxDQUFDLGFBQU4sR0FBc0IsYUFBdEI7QUFDQSxTQUFLLENBQUMsYUFBTixHQUFzQixJQUF0QjtBQUVBLFdBQU8sS0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUEsV0FBUyxvQkFBVCxHQUFnQztBQUM5QixRQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsYUFBaEIsRUFBK0I7QUFDN0IsV0FBSyxLQUFMLEdBQWEsbUJBQW1CLENBQUMsS0FBSyxTQUFOLEVBQWlCLEtBQUssT0FBdEIsRUFBK0IsS0FBSyxLQUFwQyxFQUEyQyxLQUFLLGNBQWhELENBQWhDO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7OztBQU1BLFdBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsS0FBekMsRUFBZ0Q7QUFDaEQ7QUFDRSxhQUFTLENBQUMsU0FBRCxDQUFULENBQXFCLG1CQUFyQixDQUF5QyxRQUF6QyxFQUFtRCxLQUFLLENBQUMsV0FBekQsRUFGOEMsQ0FJaEQ7O0FBQ0UsU0FBSyxDQUFDLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBNEIsVUFBVSxNQUFWLEVBQWtCO0FBQzVDLFlBQU0sQ0FBQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLLENBQUMsV0FBM0M7QUFDRCxLQUZELEVBTDhDLENBU2hEOztBQUNFLFNBQUssQ0FBQyxXQUFOLEdBQW9CLElBQXBCO0FBQ0EsU0FBSyxDQUFDLGFBQU4sR0FBc0IsRUFBdEI7QUFDQSxTQUFLLENBQUMsYUFBTixHQUFzQixJQUF0QjtBQUNBLFNBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxxQkFBVCxHQUFpQztBQUMvQixRQUFJLEtBQUssS0FBTCxDQUFXLGFBQWYsRUFBOEI7QUFDNUIsMEJBQW9CLENBQUMsS0FBSyxjQUFOLENBQXBCO0FBQ0EsV0FBSyxLQUFMLEdBQWEsb0JBQW9CLENBQUMsS0FBSyxTQUFOLEVBQWlCLEtBQUssS0FBdEIsQ0FBakM7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7OztBQU9BLFdBQVMsU0FBVCxDQUFtQixDQUFuQixFQUFzQjtBQUNwQixXQUFPLENBQUMsS0FBSyxFQUFOLElBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFsQixJQUFxQyxRQUFRLENBQUMsQ0FBRCxDQUFwRDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxXQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEIsTUFBNUIsRUFBb0M7QUFDbEMsVUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFaLEVBQW9CLE9BQXBCLENBQTRCLFVBQVUsSUFBVixFQUFnQjtBQUMxQyxVQUFJLElBQUksR0FBRyxFQUFYLENBRDBDLENBRTlDOztBQUNJLFVBQUksQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4QyxNQUE5QyxFQUFzRCxPQUF0RCxDQUE4RCxJQUE5RCxNQUF3RSxDQUFDLENBQXpFLElBQThFLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBRCxDQUFQLENBQTNGLEVBQTJHO0FBQ3pHLFlBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxDQUFDLEtBQVIsQ0FBYyxJQUFkLElBQXNCLE1BQU0sQ0FBQyxJQUFELENBQU4sR0FBZSxJQUFyQztBQUNELEtBUEQ7QUFRRDtBQUVEOzs7Ozs7Ozs7O0FBUUEsV0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFVBQWhDLEVBQTRDO0FBQzFDLFVBQU0sQ0FBQyxJQUFQLENBQVksVUFBWixFQUF3QixPQUF4QixDQUFnQyxVQUFVLElBQVYsRUFBZ0I7QUFDOUMsVUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUQsQ0FBdEI7O0FBQ0EsVUFBSSxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQixlQUFPLENBQUMsWUFBUixDQUFxQixJQUFyQixFQUEyQixVQUFVLENBQUMsSUFBRCxDQUFyQztBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sQ0FBQyxlQUFSLENBQXdCLElBQXhCO0FBQ0Q7QUFDRixLQVBEO0FBUUQ7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDRSxhQUFTLENBQUMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFmLEVBQXVCLElBQUksQ0FBQyxNQUE1QixDQUFULENBTHdCLENBTzFCO0FBQ0E7O0FBQ0UsaUJBQWEsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWYsRUFBdUIsSUFBSSxDQUFDLFVBQTVCLENBQWIsQ0FUd0IsQ0FXMUI7O0FBQ0UsUUFBSSxJQUFJLENBQUMsWUFBTCxJQUFxQixNQUFNLENBQUMsSUFBUCxDQUFZLElBQUksQ0FBQyxXQUFqQixFQUE4QixNQUF2RCxFQUErRDtBQUM3RCxlQUFTLENBQUMsSUFBSSxDQUFDLFlBQU4sRUFBb0IsSUFBSSxDQUFDLFdBQXpCLENBQVQ7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLE1BQXJDLEVBQTZDLE9BQTdDLEVBQXNELGVBQXRELEVBQXVFLEtBQXZFLEVBQThFO0FBQzlFO0FBQ0UsUUFBSSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQixFQUEyQixPQUFPLENBQUMsYUFBbkMsQ0FBMUMsQ0FGNEUsQ0FJOUU7QUFDQTtBQUNBOztBQUNFLFFBQUksU0FBUyxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFULEVBQW9CLGdCQUFwQixFQUFzQyxNQUF0QyxFQUE4QyxTQUE5QyxFQUF5RCxPQUFPLENBQUMsU0FBUixDQUFrQixJQUFsQixDQUF1QixpQkFBaEYsRUFBbUcsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBdUIsT0FBMUgsQ0FBcEM7QUFFQSxVQUFNLENBQUMsWUFBUCxDQUFvQixhQUFwQixFQUFtQyxTQUFuQyxFQVQ0RSxDQVc5RTtBQUNBOztBQUNFLGFBQVMsQ0FBQyxNQUFELEVBQVM7QUFBRSxjQUFRLEVBQUUsT0FBTyxDQUFDLGFBQVIsR0FBd0IsT0FBeEIsR0FBa0M7QUFBOUMsS0FBVCxDQUFUO0FBRUEsV0FBTyxPQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLFdBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUMsV0FBakMsRUFBOEM7QUFDNUMsUUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQXpCO0FBQUEsUUFDSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BRDNCO0FBQUEsUUFFSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBRjlCO0FBR0EsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQWpCO0FBQUEsUUFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBRGpCOztBQUdBLFFBQUksT0FBTyxHQUFHLFNBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFvQjtBQUNoQyxhQUFPLENBQVA7QUFDRCxLQUZEOztBQUlBLFFBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUExQjtBQUNBLFFBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBUixDQUF2QjtBQUVBLFFBQUksVUFBVSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FBMEIsSUFBSSxDQUFDLFNBQS9CLE1BQThDLENBQUMsQ0FBaEU7QUFDQSxRQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWYsQ0FBdUIsR0FBdkIsTUFBZ0MsQ0FBQyxDQUFuRDtBQUNBLFFBQUksZUFBZSxHQUFHLGNBQWMsR0FBRyxDQUFqQixLQUF1QixXQUFXLEdBQUcsQ0FBM0Q7QUFDQSxRQUFJLFlBQVksR0FBRyxjQUFjLEdBQUcsQ0FBakIsS0FBdUIsQ0FBdkIsSUFBNEIsV0FBVyxHQUFHLENBQWQsS0FBb0IsQ0FBbkU7QUFFQSxRQUFJLG1CQUFtQixHQUFHLENBQUMsV0FBRCxHQUFlLE9BQWYsR0FBeUIsVUFBVSxJQUFJLFdBQWQsSUFBNkIsZUFBN0IsR0FBK0MsS0FBL0MsR0FBdUQsS0FBMUc7QUFDQSxRQUFJLGlCQUFpQixHQUFHLENBQUMsV0FBRCxHQUFlLE9BQWYsR0FBeUIsS0FBakQ7QUFFQSxXQUFPO0FBQ0wsVUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVksSUFBSSxDQUFDLFdBQWpCLElBQWdDLFdBQWhDLEdBQThDLE1BQU0sQ0FBQyxJQUFQLEdBQWMsQ0FBNUQsR0FBZ0UsTUFBTSxDQUFDLElBQXhFLENBRHBCO0FBRUwsU0FBRyxFQUFFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFSLENBRmpCO0FBR0wsWUFBTSxFQUFFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxNQUFSLENBSHBCO0FBSUwsV0FBSyxFQUFFLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxLQUFSO0FBSnJCLEtBQVA7QUFNRDs7QUFFRCxNQUFJLFNBQVMsR0FBRyxTQUFTLElBQUksV0FBVyxJQUFYLENBQWdCLFNBQVMsQ0FBQyxTQUExQixDQUE3QjtBQUVBOzs7Ozs7OztBQU9BLFdBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQztBQUNuQyxRQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBaEI7QUFBQSxRQUNJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FEaEI7QUFFQSxRQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLE1BQTFCLENBSG1DLENBS3JDOztBQUVFLFFBQUksMkJBQTJCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFMLENBQWMsU0FBZixFQUEwQixVQUFVLFFBQVYsRUFBb0I7QUFDbEYsYUFBTyxRQUFRLENBQUMsSUFBVCxLQUFrQixZQUF6QjtBQUNELEtBRnFDLENBQUosQ0FFL0IsZUFGSDs7QUFHQSxRQUFJLDJCQUEyQixLQUFLLFNBQXBDLEVBQStDO0FBQzdDLGFBQU8sQ0FBQyxJQUFSLENBQWEsK0hBQWI7QUFDRDs7QUFDRCxRQUFJLGVBQWUsR0FBRywyQkFBMkIsS0FBSyxTQUFoQyxHQUE0QywyQkFBNUMsR0FBMEUsT0FBTyxDQUFDLGVBQXhHO0FBRUEsUUFBSSxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFMLENBQWMsTUFBZixDQUFsQztBQUNBLFFBQUksZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsWUFBRCxDQUE1QyxDQWhCbUMsQ0FrQnJDOztBQUNFLFFBQUksTUFBTSxHQUFHO0FBQ1gsY0FBUSxFQUFFLE1BQU0sQ0FBQztBQUROLEtBQWI7QUFJQSxRQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxJQUFELEVBQU8sTUFBTSxDQUFDLGdCQUFQLEdBQTBCLENBQTFCLElBQStCLENBQUMsU0FBdkMsQ0FBL0I7QUFFQSxRQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssUUFBTixHQUFpQixLQUFqQixHQUF5QixRQUFyQztBQUNBLFFBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxPQUFOLEdBQWdCLE1BQWhCLEdBQXlCLE9BQXJDLENBMUJtQyxDQTRCckM7QUFDQTtBQUNBOztBQUNFLFFBQUksZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMsV0FBRCxDQUEvQyxDQS9CbUMsQ0FpQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxRQUFJLElBQUksR0FBRyxLQUFLLENBQWhCO0FBQUEsUUFDSSxHQUFHLEdBQUcsS0FBSyxDQURmOztBQUVBLFFBQUksS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDMUI7QUFDQTtBQUNJLFVBQUksWUFBWSxDQUFDLFFBQWIsS0FBMEIsTUFBOUIsRUFBc0M7QUFDcEMsV0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQWQsR0FBNkIsT0FBTyxDQUFDLE1BQTNDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsV0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBbEIsR0FBMkIsT0FBTyxDQUFDLE1BQXpDO0FBQ0Q7QUFDRixLQVJELE1BUU87QUFDTCxTQUFHLEdBQUcsT0FBTyxDQUFDLEdBQWQ7QUFDRDs7QUFDRCxRQUFJLEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQ3JCLFVBQUksWUFBWSxDQUFDLFFBQWIsS0FBMEIsTUFBOUIsRUFBc0M7QUFDcEMsWUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQWQsR0FBNEIsT0FBTyxDQUFDLEtBQTNDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsS0FBbEIsR0FBMEIsT0FBTyxDQUFDLEtBQXpDO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFJLEdBQUcsT0FBTyxDQUFDLElBQWY7QUFDRDs7QUFDRCxRQUFJLGVBQWUsSUFBSSxnQkFBdkIsRUFBeUM7QUFDdkMsWUFBTSxDQUFDLGdCQUFELENBQU4sR0FBMkIsaUJBQWlCLElBQWpCLEdBQXdCLE1BQXhCLEdBQWlDLEdBQWpDLEdBQXVDLFFBQWxFO0FBQ0EsWUFBTSxDQUFDLEtBQUQsQ0FBTixHQUFnQixDQUFoQjtBQUNBLFlBQU0sQ0FBQyxLQUFELENBQU4sR0FBZ0IsQ0FBaEI7QUFDQSxZQUFNLENBQUMsVUFBUCxHQUFvQixXQUFwQjtBQUNELEtBTEQsTUFLTztBQUNUO0FBQ0ksVUFBSSxTQUFTLEdBQUcsS0FBSyxLQUFLLFFBQVYsR0FBcUIsQ0FBQyxDQUF0QixHQUEwQixDQUExQztBQUNBLFVBQUksVUFBVSxHQUFHLEtBQUssS0FBSyxPQUFWLEdBQW9CLENBQUMsQ0FBckIsR0FBeUIsQ0FBMUM7QUFDQSxZQUFNLENBQUMsS0FBRCxDQUFOLEdBQWdCLEdBQUcsR0FBRyxTQUF0QjtBQUNBLFlBQU0sQ0FBQyxLQUFELENBQU4sR0FBZ0IsSUFBSSxHQUFHLFVBQXZCO0FBQ0EsWUFBTSxDQUFDLFVBQVAsR0FBb0IsS0FBSyxHQUFHLElBQVIsR0FBZSxLQUFuQztBQUNELEtBNUVrQyxDQThFckM7OztBQUNFLFFBQUksVUFBVSxHQUFHO0FBQ2YscUJBQWUsSUFBSSxDQUFDO0FBREwsS0FBakIsQ0EvRW1DLENBbUZyQzs7QUFDRSxRQUFJLENBQUMsVUFBTCxHQUFrQixRQUFRLENBQUMsRUFBRCxFQUFLLFVBQUwsRUFBaUIsSUFBSSxDQUFDLFVBQXRCLENBQTFCO0FBQ0EsUUFBSSxDQUFDLE1BQUwsR0FBYyxRQUFRLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBYSxJQUFJLENBQUMsTUFBbEIsQ0FBdEI7QUFDQSxRQUFJLENBQUMsV0FBTCxHQUFtQixRQUFRLENBQUMsRUFBRCxFQUFLLElBQUksQ0FBQyxPQUFMLENBQWEsS0FBbEIsRUFBeUIsSUFBSSxDQUFDLFdBQTlCLENBQTNCO0FBRUEsV0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsV0FBUyxrQkFBVCxDQUE0QixTQUE1QixFQUF1QyxjQUF2QyxFQUF1RCxhQUF2RCxFQUFzRTtBQUNwRSxRQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBRCxFQUFZLFVBQVUsSUFBVixFQUFnQjtBQUMvQyxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBaEI7QUFDQSxhQUFPLElBQUksS0FBSyxjQUFoQjtBQUNELEtBSG9CLENBQXJCO0FBS0EsUUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQUYsSUFBZ0IsU0FBUyxDQUFDLElBQVYsQ0FBZSxVQUFVLFFBQVYsRUFBb0I7QUFDbEUsYUFBTyxRQUFRLENBQUMsSUFBVCxLQUFrQixhQUFsQixJQUFtQyxRQUFRLENBQUMsT0FBNUMsSUFBdUQsUUFBUSxDQUFDLEtBQVQsR0FBaUIsVUFBVSxDQUFDLEtBQTFGO0FBQ0QsS0FGZ0MsQ0FBakM7O0FBSUEsUUFBSSxDQUFDLFVBQUwsRUFBaUI7QUFDZixVQUFJLFdBQVcsR0FBRyxNQUFNLGNBQU4sR0FBdUIsR0FBekM7O0FBQ0EsVUFBSSxTQUFTLEdBQUcsTUFBTSxhQUFOLEdBQXNCLEdBQXRDO0FBQ0EsYUFBTyxDQUFDLElBQVIsQ0FBYSxTQUFTLEdBQUcsMkJBQVosR0FBMEMsV0FBMUMsR0FBd0QsMkRBQXhELEdBQXNILFdBQXRILEdBQW9JLEdBQWpKO0FBQ0Q7O0FBQ0QsV0FBTyxVQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixPQUFyQixFQUE4QjtBQUM1QixRQUFJLG1CQUFKLENBRDRCLENBRzlCOzs7QUFDRSxRQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFmLEVBQTBCLE9BQTFCLEVBQW1DLGNBQW5DLENBQXZCLEVBQTJFO0FBQ3pFLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUEzQixDQVI0QixDQVU5Qjs7QUFDRSxRQUFJLE9BQU8sWUFBUCxLQUF3QixRQUE1QixFQUFzQztBQUNwQyxrQkFBWSxHQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsTUFBZCxDQUFxQixhQUFyQixDQUFtQyxZQUFuQyxDQUFmLENBRG9DLENBR3hDOztBQUNJLFVBQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2pCLGVBQU8sSUFBUDtBQUNEO0FBQ0YsS0FQRCxNQU9PO0FBQ1Q7QUFDQTtBQUNJLFVBQUksQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsUUFBckIsQ0FBOEIsWUFBOUIsQ0FBTCxFQUFrRDtBQUNoRCxlQUFPLENBQUMsSUFBUixDQUFhLCtEQUFiO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBaEI7QUFDQSxRQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBekI7QUFBQSxRQUNJLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFEM0I7QUFBQSxRQUVJLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FGOUI7QUFJQSxRQUFJLFVBQVUsR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBQTBCLFNBQTFCLE1BQXlDLENBQUMsQ0FBM0Q7QUFFQSxRQUFJLEdBQUcsR0FBRyxVQUFVLEdBQUcsUUFBSCxHQUFjLE9BQWxDO0FBQ0EsUUFBSSxlQUFlLEdBQUcsVUFBVSxHQUFHLEtBQUgsR0FBVyxNQUEzQztBQUNBLFFBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxXQUFoQixFQUFYO0FBQ0EsUUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFHLE1BQUgsR0FBWSxLQUFwQztBQUNBLFFBQUksTUFBTSxHQUFHLFVBQVUsR0FBRyxRQUFILEdBQWMsT0FBckM7QUFDQSxRQUFJLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxZQUFELENBQWIsQ0FBNEIsR0FBNUIsQ0FBdkIsQ0F2QzRCLENBeUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNFLFFBQUksU0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQixnQkFBcEIsR0FBdUMsTUFBTSxDQUFDLElBQUQsQ0FBakQsRUFBeUQ7QUFDdkQsVUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLENBQW9CLElBQXBCLEtBQTZCLE1BQU0sQ0FBQyxJQUFELENBQU4sSUFBZ0IsU0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQixnQkFBcEMsQ0FBN0I7QUFDRCxLQWpEMkIsQ0FrRDlCOzs7QUFDRSxRQUFJLFNBQVMsQ0FBQyxJQUFELENBQVQsR0FBa0IsZ0JBQWxCLEdBQXFDLE1BQU0sQ0FBQyxNQUFELENBQS9DLEVBQXlEO0FBQ3ZELFVBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixDQUFvQixJQUFwQixLQUE2QixTQUFTLENBQUMsSUFBRCxDQUFULEdBQWtCLGdCQUFsQixHQUFxQyxNQUFNLENBQUMsTUFBRCxDQUF4RTtBQUNEOztBQUNELFFBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixHQUFzQixhQUFhLENBQUMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFkLENBQW5DLENBdEQ0QixDQXdEOUI7O0FBQ0UsUUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUQsQ0FBVCxHQUFrQixTQUFTLENBQUMsR0FBRCxDQUFULEdBQWlCLENBQW5DLEdBQXVDLGdCQUFnQixHQUFHLENBQXZFLENBekQ0QixDQTJEOUI7QUFDQTs7QUFDRSxRQUFJLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWYsQ0FBbEM7QUFDQSxRQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxlQUFaLENBQUosRUFBa0MsRUFBbEMsQ0FBakM7QUFDQSxRQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxlQUFYLEdBQTZCLE9BQTlCLENBQUosRUFBNEMsRUFBNUMsQ0FBakM7QUFDQSxRQUFJLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLENBQW9CLElBQXBCLENBQVQsR0FBcUMsZ0JBQXJDLEdBQXdELGdCQUF4RSxDQWhFNEIsQ0FrRTlCOztBQUNFLGFBQVMsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBTSxDQUFDLEdBQUQsQ0FBTixHQUFjLGdCQUF2QixFQUF5QyxTQUF6QyxDQUFULEVBQThELENBQTlELENBQVo7QUFFQSxRQUFJLENBQUMsWUFBTCxHQUFvQixZQUFwQjtBQUNBLFFBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixJQUFzQixtQkFBbUIsR0FBRyxFQUF0QixFQUEwQixjQUFjLENBQUMsbUJBQUQsRUFBc0IsSUFBdEIsRUFBNEIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxTQUFYLENBQTVCLENBQXhDLEVBQTRGLGNBQWMsQ0FBQyxtQkFBRCxFQUFzQixPQUF0QixFQUErQixFQUEvQixDQUExRyxFQUE4SSxtQkFBcEs7QUFFQSxXQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDO0FBQ3ZDLFFBQUksU0FBUyxLQUFLLEtBQWxCLEVBQXlCO0FBQ3ZCLGFBQU8sT0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJLFNBQVMsS0FBSyxPQUFsQixFQUEyQjtBQUNoQyxhQUFPLEtBQVA7QUFDRDs7QUFDRCxXQUFPLFNBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEsTUFBSSxVQUFVLEdBQUcsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QixVQUF2QixFQUFtQyxXQUFuQyxFQUFnRCxLQUFoRCxFQUF1RCxTQUF2RCxFQUFrRSxhQUFsRSxFQUFpRixPQUFqRixFQUEwRixXQUExRixFQUF1RyxZQUF2RyxFQUFxSCxRQUFySCxFQUErSCxjQUEvSCxFQUErSSxVQUEvSSxFQUEySixNQUEzSixFQUFtSyxZQUFuSyxDQUFqQixDLENBRUE7O0FBQ0EsTUFBSSxlQUFlLEdBQUcsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBdEI7QUFFQTs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLFNBQVQsQ0FBbUIsU0FBbkIsRUFBOEI7QUFDNUIsUUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQixTQUF6QyxHQUFxRCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUFsRjtBQUVBLFFBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixTQUF4QixDQUFaO0FBQ0EsUUFBSSxHQUFHLEdBQUcsZUFBZSxDQUFDLEtBQWhCLENBQXNCLEtBQUssR0FBRyxDQUE5QixFQUFpQyxNQUFqQyxDQUF3QyxlQUFlLENBQUMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsS0FBekIsQ0FBeEMsQ0FBVjtBQUNBLFdBQU8sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFKLEVBQUgsR0FBbUIsR0FBakM7QUFDRDs7QUFFRCxNQUFJLFNBQVMsR0FBRztBQUNkLFFBQUksRUFBRSxNQURRO0FBRWQsYUFBUyxFQUFFLFdBRkc7QUFHZCxvQkFBZ0IsRUFBRTtBQUhKLEdBQWhCO0FBTUE7Ozs7Ozs7O0FBT0EsV0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQixPQUFwQixFQUE2QjtBQUM3QjtBQUNFLFFBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFmLEVBQTBCLE9BQTFCLENBQXJCLEVBQXlEO0FBQ3ZELGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUksSUFBSSxDQUFDLE9BQUwsSUFBZ0IsSUFBSSxDQUFDLFNBQUwsS0FBbUIsSUFBSSxDQUFDLGlCQUE1QyxFQUErRDtBQUNqRTtBQUNJLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWYsRUFBdUIsSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFyQyxFQUFnRCxPQUFPLENBQUMsT0FBeEQsRUFBaUUsT0FBTyxDQUFDLGlCQUF6RSxFQUE0RixJQUFJLENBQUMsYUFBakcsQ0FBOUI7QUFFQSxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBaEI7QUFDQSxRQUFJLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLFNBQUQsQ0FBNUM7QUFDQSxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsS0FBZ0MsRUFBaEQ7QUFFQSxRQUFJLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxZQUFRLE9BQU8sQ0FBQyxRQUFoQjtBQUNFLFdBQUssU0FBUyxDQUFDLElBQWY7QUFDRSxpQkFBUyxHQUFHLENBQUMsU0FBRCxFQUFZLGlCQUFaLENBQVo7QUFDQTs7QUFDRixXQUFLLFNBQVMsQ0FBQyxTQUFmO0FBQ0UsaUJBQVMsR0FBRyxTQUFTLENBQUMsU0FBRCxDQUFyQjtBQUNBOztBQUNGLFdBQUssU0FBUyxDQUFDLGdCQUFmO0FBQ0UsaUJBQVMsR0FBRyxTQUFTLENBQUMsU0FBRCxFQUFZLElBQVosQ0FBckI7QUFDQTs7QUFDRjtBQUNFLGlCQUFTLEdBQUcsT0FBTyxDQUFDLFFBQXBCO0FBWEo7O0FBY0EsYUFBUyxDQUFDLE9BQVYsQ0FBa0IsVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3ZDLFVBQUksU0FBUyxLQUFLLElBQWQsSUFBc0IsU0FBUyxDQUFDLE1BQVYsS0FBcUIsS0FBSyxHQUFHLENBQXZELEVBQTBEO0FBQ3hELGVBQU8sSUFBUDtBQUNEOztBQUVELGVBQVMsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBWjtBQUNBLHVCQUFpQixHQUFHLG9CQUFvQixDQUFDLFNBQUQsQ0FBeEM7QUFFQSxVQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLE1BQWpDO0FBQ0EsVUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUE5QixDQVR1QyxDQVczQzs7QUFDSSxVQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBakI7QUFDQSxVQUFJLFdBQVcsR0FBRyxTQUFTLEtBQUssTUFBZCxJQUF3QixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQWYsQ0FBTCxHQUE2QixLQUFLLENBQUMsVUFBVSxDQUFDLElBQVosQ0FBMUQsSUFBK0UsU0FBUyxLQUFLLE9BQWQsSUFBeUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFmLENBQUwsR0FBNEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFaLENBQXpJLElBQStKLFNBQVMsS0FBSyxLQUFkLElBQXVCLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBZixDQUFMLEdBQThCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBWixDQUF6TixJQUE2TyxTQUFTLEtBQUssUUFBZCxJQUEwQixLQUFLLENBQUMsYUFBYSxDQUFDLEdBQWYsQ0FBTCxHQUEyQixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQVosQ0FBelQ7QUFFQSxVQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQWYsQ0FBTCxHQUE0QixLQUFLLENBQUMsVUFBVSxDQUFDLElBQVosQ0FBckQ7QUFDQSxVQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQWYsQ0FBTCxHQUE2QixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQVosQ0FBdkQ7QUFDQSxVQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQWYsQ0FBTCxHQUEyQixLQUFLLENBQUMsVUFBVSxDQUFDLEdBQVosQ0FBbkQ7QUFDQSxVQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQWYsQ0FBTCxHQUE4QixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQVosQ0FBekQ7QUFFQSxVQUFJLG1CQUFtQixHQUFHLFNBQVMsS0FBSyxNQUFkLElBQXdCLGFBQXhCLElBQXlDLFNBQVMsS0FBSyxPQUFkLElBQXlCLGNBQWxFLElBQW9GLFNBQVMsS0FBSyxLQUFkLElBQXVCLFlBQTNHLElBQTJILFNBQVMsS0FBSyxRQUFkLElBQTBCLGVBQS9LLENBcEJ1QyxDQXNCM0M7O0FBQ0ksVUFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixPQUFsQixDQUEwQixTQUExQixNQUF5QyxDQUFDLENBQTNELENBdkJ1QyxDQXlCM0M7O0FBQ0ksVUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQVYsS0FBNkIsVUFBVSxJQUFJLFNBQVMsS0FBSyxPQUE1QixJQUF1QyxhQUF2QyxJQUF3RCxVQUFVLElBQUksU0FBUyxLQUFLLEtBQTVCLElBQXFDLGNBQTdGLElBQStHLENBQUMsVUFBRCxJQUFlLFNBQVMsS0FBSyxPQUE3QixJQUF3QyxZQUF2SixJQUF1SyxDQUFDLFVBQUQsSUFBZSxTQUFTLEtBQUssS0FBN0IsSUFBc0MsZUFBMU8sQ0FBNUIsQ0ExQnVDLENBNEIzQzs7QUFDSSxVQUFJLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQVYsS0FBc0MsVUFBVSxJQUFJLFNBQVMsS0FBSyxPQUE1QixJQUF1QyxjQUF2QyxJQUF5RCxVQUFVLElBQUksU0FBUyxLQUFLLEtBQTVCLElBQXFDLGFBQTlGLElBQStHLENBQUMsVUFBRCxJQUFlLFNBQVMsS0FBSyxPQUE3QixJQUF3QyxlQUF2SixJQUEwSyxDQUFDLFVBQUQsSUFBZSxTQUFTLEtBQUssS0FBN0IsSUFBc0MsWUFBdFAsQ0FBaEM7QUFFQSxVQUFJLGdCQUFnQixHQUFHLHFCQUFxQixJQUFJLHlCQUFoRDs7QUFFQSxVQUFJLFdBQVcsSUFBSSxtQkFBZixJQUFzQyxnQkFBMUMsRUFBNEQ7QUFDaEU7QUFDTSxZQUFJLENBQUMsT0FBTCxHQUFlLElBQWY7O0FBRUEsWUFBSSxXQUFXLElBQUksbUJBQW5CLEVBQXdDO0FBQ3RDLG1CQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFULENBQXJCO0FBQ0Q7O0FBRUQsWUFBSSxnQkFBSixFQUFzQjtBQUNwQixtQkFBUyxHQUFHLG9CQUFvQixDQUFDLFNBQUQsQ0FBaEM7QUFDRDs7QUFFRCxZQUFJLENBQUMsU0FBTCxHQUFpQixTQUFTLElBQUksU0FBUyxHQUFHLE1BQU0sU0FBVCxHQUFxQixFQUFsQyxDQUExQixDQVowRCxDQWNoRTtBQUNBOztBQUNNLFlBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixHQUFzQixRQUFRLENBQUMsRUFBRCxFQUFLLElBQUksQ0FBQyxPQUFMLENBQWEsTUFBbEIsRUFBMEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFmLEVBQXVCLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBcEMsRUFBK0MsSUFBSSxDQUFDLFNBQXBELENBQTFDLENBQTlCO0FBRUEsWUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWYsRUFBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsQ0FBbkI7QUFDRDtBQUNGLEtBckREO0FBc0RBLFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFdBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUMxQixRQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBekI7QUFBQSxRQUNJLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFEM0I7QUFBQSxRQUVJLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FGOUI7QUFJQSxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBaEI7QUFDQSxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBakI7QUFDQSxRQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLE9BQWxCLENBQTBCLFNBQTFCLE1BQXlDLENBQUMsQ0FBM0Q7QUFDQSxRQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsT0FBSCxHQUFhLFFBQWxDO0FBQ0EsUUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLE1BQUgsR0FBWSxLQUFuQztBQUNBLFFBQUksV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFILEdBQWEsUUFBekM7O0FBRUEsUUFBSSxNQUFNLENBQUMsSUFBRCxDQUFOLEdBQWUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFELENBQVYsQ0FBeEIsRUFBNkM7QUFDM0MsVUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCLElBQThCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBRCxDQUFWLENBQUwsR0FBMkIsTUFBTSxDQUFDLFdBQUQsQ0FBL0Q7QUFDRDs7QUFDRCxRQUFJLE1BQU0sQ0FBQyxNQUFELENBQU4sR0FBaUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFELENBQVYsQ0FBMUIsRUFBNkM7QUFDM0MsVUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCLElBQThCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBRCxDQUFWLENBQW5DO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFZQSxXQUFTLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0IsV0FBdEIsRUFBbUMsYUFBbkMsRUFBa0QsZ0JBQWxELEVBQW9FO0FBQ3BFO0FBQ0UsUUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUosQ0FBVSwyQkFBVixDQUFaO0FBQ0EsUUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBRCxDQUFsQjtBQUNBLFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFELENBQWhCLENBSmtFLENBTXBFOztBQUNFLFFBQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixhQUFPLEdBQVA7QUFDRDs7QUFFRCxRQUFJLElBQUksQ0FBQyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUExQixFQUE2QjtBQUMzQixVQUFJLE9BQU8sR0FBRyxLQUFLLENBQW5COztBQUNBLGNBQVEsSUFBUjtBQUNFLGFBQUssSUFBTDtBQUNFLGlCQUFPLEdBQUcsYUFBVjtBQUNBOztBQUNGLGFBQUssR0FBTDtBQUNBLGFBQUssSUFBTDtBQUNBO0FBQ0UsaUJBQU8sR0FBRyxnQkFBVjtBQVBKOztBQVVBLFVBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFELENBQXhCO0FBQ0EsYUFBTyxJQUFJLENBQUMsV0FBRCxDQUFKLEdBQW9CLEdBQXBCLEdBQTBCLEtBQWpDO0FBQ0QsS0FkRCxNQWNPLElBQUksSUFBSSxLQUFLLElBQVQsSUFBaUIsSUFBSSxLQUFLLElBQTlCLEVBQW9DO0FBQzdDO0FBQ0ksVUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFoQjs7QUFDQSxVQUFJLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQUksR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLFFBQVEsQ0FBQyxlQUFULENBQXlCLFlBQWxDLEVBQWdELE1BQU0sQ0FBQyxXQUFQLElBQXNCLENBQXRFLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxRQUFRLENBQUMsZUFBVCxDQUF5QixXQUFsQyxFQUErQyxNQUFNLENBQUMsVUFBUCxJQUFxQixDQUFwRSxDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFJLEdBQUcsR0FBUCxHQUFhLEtBQXBCO0FBQ0QsS0FUTSxNQVNBO0FBQ1Q7QUFDQTtBQUNJLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7Ozs7OztBQVdBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixhQUE3QixFQUE0QyxnQkFBNUMsRUFBOEQsYUFBOUQsRUFBNkU7QUFDM0UsUUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFkLENBRDJFLENBRzdFO0FBQ0E7QUFDQTs7QUFDRSxRQUFJLFNBQVMsR0FBRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE9BQWxCLENBQTBCLGFBQTFCLE1BQTZDLENBQUMsQ0FBOUQsQ0FOMkUsQ0FRN0U7QUFDQTs7QUFDRSxRQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBUCxDQUFhLFNBQWIsRUFBd0IsR0FBeEIsQ0FBNEIsVUFBVSxJQUFWLEVBQWdCO0FBQzFELGFBQU8sSUFBSSxDQUFDLElBQUwsRUFBUDtBQUNELEtBRmUsQ0FBaEIsQ0FWMkUsQ0FjN0U7QUFDQTs7QUFDRSxRQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBVixDQUFrQixJQUFJLENBQUMsU0FBRCxFQUFZLFVBQVUsSUFBVixFQUFnQjtBQUM5RCxhQUFPLElBQUksQ0FBQyxNQUFMLENBQVksTUFBWixNQUF3QixDQUFDLENBQWhDO0FBQ0QsS0FGbUMsQ0FBdEIsQ0FBZDs7QUFJQSxRQUFJLFNBQVMsQ0FBQyxPQUFELENBQVQsSUFBc0IsU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQixPQUFuQixDQUEyQixHQUEzQixNQUFvQyxDQUFDLENBQS9ELEVBQWtFO0FBQ2hFLGFBQU8sQ0FBQyxJQUFSLENBQWEsOEVBQWI7QUFDRCxLQXRCMEUsQ0F3QjdFO0FBQ0E7OztBQUNFLFFBQUksVUFBVSxHQUFHLGFBQWpCO0FBQ0EsUUFBSSxHQUFHLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBYixHQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFWLENBQWdCLENBQWhCLEVBQW1CLE9BQW5CLEVBQTRCLE1BQTVCLENBQW1DLENBQUMsU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQixLQUFuQixDQUF5QixVQUF6QixFQUFxQyxDQUFyQyxDQUFELENBQW5DLENBQUQsRUFBZ0YsQ0FBQyxTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CLEtBQW5CLENBQXlCLFVBQXpCLEVBQXFDLENBQXJDLENBQUQsRUFBMEMsTUFBMUMsQ0FBaUQsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBTyxHQUFHLENBQTFCLENBQWpELENBQWhGLENBQWpCLEdBQW1MLENBQUMsU0FBRCxDQUE3TCxDQTNCMkUsQ0E2QjdFOztBQUNFLE9BQUcsR0FBRyxHQUFHLENBQUMsR0FBSixDQUFRLFVBQVUsRUFBVixFQUFjLEtBQWQsRUFBcUI7QUFDckM7QUFDSSxVQUFJLFdBQVcsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFWLEdBQWMsQ0FBQyxTQUFmLEdBQTJCLFNBQTVCLElBQXlDLFFBQXpDLEdBQW9ELE9BQXRFO0FBQ0EsVUFBSSxpQkFBaUIsR0FBRyxLQUF4QjtBQUNBLGFBQU8sRUFBRSxDQUNiO0FBQ0E7QUFGYSxPQUdSLE1BSE0sQ0FHQyxVQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCO0FBQ3RCLFlBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWixDQUFELEtBQW9CLEVBQXBCLElBQTBCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxPQUFYLENBQW1CLENBQW5CLE1BQTBCLENBQUMsQ0FBekQsRUFBNEQ7QUFDMUQsV0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWixDQUFELEdBQWtCLENBQWxCO0FBQ0EsMkJBQWlCLEdBQUcsSUFBcEI7QUFDQSxpQkFBTyxDQUFQO0FBQ0QsU0FKRCxNQUlPLElBQUksaUJBQUosRUFBdUI7QUFDNUIsV0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWixDQUFELElBQW1CLENBQW5CO0FBQ0EsMkJBQWlCLEdBQUcsS0FBcEI7QUFDQSxpQkFBTyxDQUFQO0FBQ0QsU0FKTSxNQUlBO0FBQ0wsaUJBQU8sQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULENBQVA7QUFDRDtBQUNGLE9BZk0sRUFlSixFQWZJLEVBZ0JYO0FBaEJXLE9BaUJOLEdBakJNLENBaUJGLFVBQVUsR0FBVixFQUFlO0FBQ2xCLGVBQU8sT0FBTyxDQUFDLEdBQUQsRUFBTSxXQUFOLEVBQW1CLGFBQW5CLEVBQWtDLGdCQUFsQyxDQUFkO0FBQ0QsT0FuQk0sQ0FBUDtBQW9CRCxLQXhCSyxDQUFOLENBOUIyRSxDQXdEN0U7O0FBQ0UsT0FBRyxDQUFDLE9BQUosQ0FBWSxVQUFVLEVBQVYsRUFBYyxLQUFkLEVBQXFCO0FBQy9CLFFBQUUsQ0FBQyxPQUFILENBQVcsVUFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCO0FBQ2pDLFlBQUksU0FBUyxDQUFDLElBQUQsQ0FBYixFQUFxQjtBQUNuQixpQkFBTyxDQUFDLEtBQUQsQ0FBUCxJQUFrQixJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFWLENBQUYsS0FBbUIsR0FBbkIsR0FBeUIsQ0FBQyxDQUExQixHQUE4QixDQUFsQyxDQUF0QjtBQUNEO0FBQ0YsT0FKRDtBQUtELEtBTkQ7QUFPQSxXQUFPLE9BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNBLFdBQVMsTUFBVCxDQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QjtBQUMxQixRQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBbEI7QUFDQSxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBckI7QUFBQSxRQUNJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FEekI7QUFBQSxRQUVJLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFGM0I7QUFBQSxRQUdJLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FIOUI7QUFLQSxRQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFwQjtBQUVBLFFBQUksT0FBTyxHQUFHLEtBQUssQ0FBbkI7O0FBQ0EsUUFBSSxTQUFTLENBQUMsQ0FBQyxNQUFGLENBQWIsRUFBd0I7QUFDdEIsYUFBTyxHQUFHLENBQUMsQ0FBQyxNQUFGLEVBQVUsQ0FBVixDQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxHQUFHLFdBQVcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixTQUFqQixFQUE0QixhQUE1QixDQUFyQjtBQUNEOztBQUVELFFBQUksYUFBYSxLQUFLLE1BQXRCLEVBQThCO0FBQzVCLFlBQU0sQ0FBQyxHQUFQLElBQWMsT0FBTyxDQUFDLENBQUQsQ0FBckI7QUFDQSxZQUFNLENBQUMsSUFBUCxJQUFlLE9BQU8sQ0FBQyxDQUFELENBQXRCO0FBQ0QsS0FIRCxNQUdPLElBQUksYUFBYSxLQUFLLE9BQXRCLEVBQStCO0FBQ3BDLFlBQU0sQ0FBQyxHQUFQLElBQWMsT0FBTyxDQUFDLENBQUQsQ0FBckI7QUFDQSxZQUFNLENBQUMsSUFBUCxJQUFlLE9BQU8sQ0FBQyxDQUFELENBQXRCO0FBQ0QsS0FITSxNQUdBLElBQUksYUFBYSxLQUFLLEtBQXRCLEVBQTZCO0FBQ2xDLFlBQU0sQ0FBQyxJQUFQLElBQWUsT0FBTyxDQUFDLENBQUQsQ0FBdEI7QUFDQSxZQUFNLENBQUMsR0FBUCxJQUFjLE9BQU8sQ0FBQyxDQUFELENBQXJCO0FBQ0QsS0FITSxNQUdBLElBQUksYUFBYSxLQUFLLFFBQXRCLEVBQWdDO0FBQ3JDLFlBQU0sQ0FBQyxJQUFQLElBQWUsT0FBTyxDQUFDLENBQUQsQ0FBdEI7QUFDQSxZQUFNLENBQUMsR0FBUCxJQUFjLE9BQU8sQ0FBQyxDQUFELENBQXJCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLE1BQUwsR0FBYyxNQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxlQUFULENBQXlCLElBQXpCLEVBQStCLE9BQS9CLEVBQXdDO0FBQ3RDLFFBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFSLElBQTZCLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWYsQ0FBcEUsQ0FEc0MsQ0FHeEM7QUFDQTtBQUNBOztBQUNFLFFBQUksSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFkLEtBQTRCLGlCQUFoQyxFQUFtRDtBQUNqRCx1QkFBaUIsR0FBRyxlQUFlLENBQUMsaUJBQUQsQ0FBbkM7QUFDRCxLQVJxQyxDQVV4QztBQUNBO0FBQ0E7OztBQUNFLFFBQUksYUFBYSxHQUFHLHdCQUF3QixDQUFDLFdBQUQsQ0FBNUM7QUFDQSxRQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBeEMsQ0Fkc0MsQ0FjUTs7QUFDOUMsUUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQXZCO0FBQUEsUUFDSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBRHhCO0FBQUEsUUFFSSxTQUFTLEdBQUcsWUFBWSxDQUFDLGFBQUQsQ0FGNUI7QUFJQSxnQkFBWSxDQUFDLEdBQWIsR0FBbUIsRUFBbkI7QUFDQSxnQkFBWSxDQUFDLElBQWIsR0FBb0IsRUFBcEI7QUFDQSxnQkFBWSxDQUFDLGFBQUQsQ0FBWixHQUE4QixFQUE5QjtBQUVBLFFBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLE1BQWYsRUFBdUIsSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFyQyxFQUFnRCxPQUFPLENBQUMsT0FBeEQsRUFBaUUsaUJBQWpFLEVBQW9GLElBQUksQ0FBQyxhQUF6RixDQUE5QixDQXZCc0MsQ0F5QnhDO0FBQ0E7O0FBQ0UsZ0JBQVksQ0FBQyxHQUFiLEdBQW1CLEdBQW5CO0FBQ0EsZ0JBQVksQ0FBQyxJQUFiLEdBQW9CLElBQXBCO0FBQ0EsZ0JBQVksQ0FBQyxhQUFELENBQVosR0FBOEIsU0FBOUI7QUFFQSxXQUFPLENBQUMsVUFBUixHQUFxQixVQUFyQjtBQUVBLFFBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFwQjtBQUNBLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFMLENBQWEsTUFBMUI7QUFFQSxRQUFJLEtBQUssR0FBRztBQUNWLGFBQU8sRUFBRSxTQUFTLE9BQVQsQ0FBaUIsU0FBakIsRUFBNEI7QUFDbkMsWUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQUQsQ0FBbEI7O0FBQ0EsWUFBSSxNQUFNLENBQUMsU0FBRCxDQUFOLEdBQW9CLFVBQVUsQ0FBQyxTQUFELENBQTlCLElBQTZDLENBQUMsT0FBTyxDQUFDLG1CQUExRCxFQUErRTtBQUM3RSxlQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFNLENBQUMsU0FBRCxDQUFmLEVBQTRCLFVBQVUsQ0FBQyxTQUFELENBQXRDLENBQVI7QUFDRDs7QUFDRCxlQUFPLGNBQWMsQ0FBQyxFQUFELEVBQUssU0FBTCxFQUFnQixLQUFoQixDQUFyQjtBQUNELE9BUFM7QUFRVixlQUFTLEVBQUUsU0FBUyxTQUFULENBQW1CLFNBQW5CLEVBQThCO0FBQ3ZDLFlBQUksUUFBUSxHQUFHLFNBQVMsS0FBSyxPQUFkLEdBQXdCLE1BQXhCLEdBQWlDLEtBQWhEO0FBQ0EsWUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQUQsQ0FBbEI7O0FBQ0EsWUFBSSxNQUFNLENBQUMsU0FBRCxDQUFOLEdBQW9CLFVBQVUsQ0FBQyxTQUFELENBQTlCLElBQTZDLENBQUMsT0FBTyxDQUFDLG1CQUExRCxFQUErRTtBQUM3RSxlQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFNLENBQUMsUUFBRCxDQUFmLEVBQTJCLFVBQVUsQ0FBQyxTQUFELENBQVYsSUFBeUIsU0FBUyxLQUFLLE9BQWQsR0FBd0IsTUFBTSxDQUFDLEtBQS9CLEdBQXVDLE1BQU0sQ0FBQyxNQUF2RSxDQUEzQixDQUFSO0FBQ0Q7O0FBQ0QsZUFBTyxjQUFjLENBQUMsRUFBRCxFQUFLLFFBQUwsRUFBZSxLQUFmLENBQXJCO0FBQ0Q7QUFmUyxLQUFaO0FBa0JBLFNBQUssQ0FBQyxPQUFOLENBQWMsVUFBVSxTQUFWLEVBQXFCO0FBQ2pDLFVBQUksSUFBSSxHQUFHLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsT0FBaEIsQ0FBd0IsU0FBeEIsTUFBdUMsQ0FBQyxDQUF4QyxHQUE0QyxTQUE1QyxHQUF3RCxXQUFuRTtBQUNBLFlBQU0sR0FBRyxRQUFRLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBYSxLQUFLLENBQUMsSUFBRCxDQUFMLENBQVksU0FBWixDQUFiLENBQWpCO0FBQ0QsS0FIRDtBQUtBLFFBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixHQUFzQixNQUF0QjtBQUVBLFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFdBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUI7QUFDbkIsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQXJCO0FBQ0EsUUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBcEI7QUFDQSxRQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFyQixDQUhtQixDQUtyQjs7QUFDRSxRQUFJLGNBQUosRUFBb0I7QUFDbEIsVUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQXpCO0FBQUEsVUFDSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBRDlCO0FBQUEsVUFFSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BRjNCO0FBSUEsVUFBSSxVQUFVLEdBQUcsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixPQUFsQixDQUEwQixhQUExQixNQUE2QyxDQUFDLENBQS9EO0FBQ0EsVUFBSSxJQUFJLEdBQUcsVUFBVSxHQUFHLE1BQUgsR0FBWSxLQUFqQztBQUNBLFVBQUksV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFILEdBQWEsUUFBekM7QUFFQSxVQUFJLFlBQVksR0FBRztBQUNqQixhQUFLLEVBQUUsY0FBYyxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsU0FBUyxDQUFDLElBQUQsQ0FBcEIsQ0FESjtBQUVqQixXQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsU0FBUyxDQUFDLElBQUQsQ0FBVCxHQUFrQixTQUFTLENBQUMsV0FBRCxDQUEzQixHQUEyQyxNQUFNLENBQUMsV0FBRCxDQUE1RDtBQUZGLE9BQW5CO0FBS0EsVUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLEdBQXNCLFFBQVEsQ0FBQyxFQUFELEVBQUssTUFBTCxFQUFhLFlBQVksQ0FBQyxjQUFELENBQXpCLENBQTlCO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsV0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQjtBQUNsQixRQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxTQUFmLEVBQTBCLE1BQTFCLEVBQWtDLGlCQUFsQyxDQUF2QixFQUE2RTtBQUMzRSxhQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQTNCO0FBQ0EsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFMLENBQWMsU0FBZixFQUEwQixVQUFVLFFBQVYsRUFBb0I7QUFDNUQsYUFBTyxRQUFRLENBQUMsSUFBVCxLQUFrQixpQkFBekI7QUFDRCxLQUZlLENBQUosQ0FFVCxVQUZIOztBQUlBLFFBQUksT0FBTyxDQUFDLE1BQVIsR0FBaUIsS0FBSyxDQUFDLEdBQXZCLElBQThCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsS0FBSyxDQUFDLEtBQW5ELElBQTRELE9BQU8sQ0FBQyxHQUFSLEdBQWMsS0FBSyxDQUFDLE1BQWhGLElBQTBGLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEtBQUssQ0FBQyxJQUFwSCxFQUEwSDtBQUM1SDtBQUNJLFVBQUksSUFBSSxDQUFDLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN0QixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUMsSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFJLENBQUMsVUFBTCxDQUFnQixxQkFBaEIsSUFBeUMsRUFBekM7QUFDRCxLQVJELE1BUU87QUFDVDtBQUNJLFVBQUksSUFBSSxDQUFDLElBQUwsS0FBYyxLQUFsQixFQUF5QjtBQUN2QixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUMsSUFBTCxHQUFZLEtBQVo7QUFDQSxVQUFJLENBQUMsVUFBTCxDQUFnQixxQkFBaEIsSUFBeUMsS0FBekM7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCO0FBQ25CLFFBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFyQjtBQUNBLFFBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQXBCO0FBQ0EsUUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQXpCO0FBQUEsUUFDSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BRDNCO0FBQUEsUUFFSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBRjlCO0FBSUEsUUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixDQUEwQixhQUExQixNQUE2QyxDQUFDLENBQTVEO0FBRUEsUUFBSSxjQUFjLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixPQUFoQixDQUF3QixhQUF4QixNQUEyQyxDQUFDLENBQWpFO0FBRUEsVUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFILEdBQVksS0FBcEIsQ0FBTixHQUFtQyxTQUFTLENBQUMsYUFBRCxDQUFULElBQTRCLGNBQWMsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQUgsR0FBYSxRQUFyQixDQUFULEdBQTBDLENBQXBGLENBQW5DO0FBRUEsUUFBSSxDQUFDLFNBQUwsR0FBaUIsb0JBQW9CLENBQUMsU0FBRCxDQUFyQztBQUNBLFFBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixHQUFzQixhQUFhLENBQUMsTUFBRCxDQUFuQztBQUVBLFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7OztBQVNBLE1BQUksU0FBUyxHQUFHO0FBQ2hCOzs7Ozs7OztBQVFFLFNBQUssRUFBRTtBQUNUO0FBQ0ksV0FBSyxFQUFFLEdBRkY7O0FBR1Q7QUFDSSxhQUFPLEVBQUUsSUFKSjs7QUFLVDtBQUNJLFFBQUUsRUFBRTtBQU5DLEtBVE87O0FBa0JoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0UsVUFBTSxFQUFFO0FBQ1Y7QUFDSSxXQUFLLEVBQUUsR0FGRDs7QUFHVjtBQUNJLGFBQU8sRUFBRSxJQUpIOztBQUtWO0FBQ0ksUUFBRSxFQUFFLE1BTkU7O0FBT1Y7OztBQUdJLFlBQU0sRUFBRTtBQVZGLEtBeERNOztBQXFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJFLG1CQUFlLEVBQUU7QUFDbkI7QUFDSSxXQUFLLEVBQUUsR0FGUTs7QUFHbkI7QUFDSSxhQUFPLEVBQUUsSUFKTTs7QUFLbkI7QUFDSSxRQUFFLEVBQUUsZUFOVzs7QUFPbkI7Ozs7O0FBS0ksY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsS0FBbEIsRUFBeUIsUUFBekIsQ0FaSzs7QUFhbkI7Ozs7OztBQU1JLGFBQU8sRUFBRSxDQW5CTTs7QUFvQm5COzs7OztBQUtJLHVCQUFpQixFQUFFO0FBekJKLEtBdEZIOztBQWtIaEI7Ozs7Ozs7OztBQVNFLGdCQUFZLEVBQUU7QUFDaEI7QUFDSSxXQUFLLEVBQUUsR0FGSzs7QUFHaEI7QUFDSSxhQUFPLEVBQUUsSUFKRzs7QUFLaEI7QUFDSSxRQUFFLEVBQUU7QUFOUSxLQTNIQTs7QUFvSWhCOzs7Ozs7Ozs7O0FBVUUsU0FBSyxFQUFFO0FBQ1Q7QUFDSSxXQUFLLEVBQUUsR0FGRjs7QUFHVDtBQUNJLGFBQU8sRUFBRSxJQUpKOztBQUtUO0FBQ0ksUUFBRSxFQUFFLEtBTkM7O0FBT1Q7QUFDSSxhQUFPLEVBQUU7QUFSSixLQTlJTzs7QUF5SmhCOzs7Ozs7Ozs7OztBQVdFLFFBQUksRUFBRTtBQUNSO0FBQ0ksV0FBSyxFQUFFLEdBRkg7O0FBR1I7QUFDSSxhQUFPLEVBQUUsSUFKTDs7QUFLUjtBQUNJLFFBQUUsRUFBRSxJQU5BOztBQU9SOzs7Ozs7QUFNSSxjQUFRLEVBQUUsTUFiTjs7QUFjUjs7OztBQUlJLGFBQU8sRUFBRSxDQWxCTDs7QUFtQlI7Ozs7OztBQU1JLHVCQUFpQixFQUFFLFVBekJmOztBQTBCUjs7Ozs7OztBQU9JLG9CQUFjLEVBQUUsS0FqQ1o7O0FBa0NSOzs7Ozs7O0FBT0ksNkJBQXVCLEVBQUU7QUF6Q3JCLEtBcEtROztBQWdOaEI7Ozs7Ozs7QUFPRSxTQUFLLEVBQUU7QUFDVDtBQUNJLFdBQUssRUFBRSxHQUZGOztBQUdUO0FBQ0ksYUFBTyxFQUFFLEtBSko7O0FBS1Q7QUFDSSxRQUFFLEVBQUU7QUFOQyxLQXZOTzs7QUFnT2hCOzs7Ozs7Ozs7O0FBVUUsUUFBSSxFQUFFO0FBQ1I7QUFDSSxXQUFLLEVBQUUsR0FGSDs7QUFHUjtBQUNJLGFBQU8sRUFBRSxJQUpMOztBQUtSO0FBQ0ksUUFBRSxFQUFFO0FBTkEsS0ExT1E7O0FBbVBoQjs7Ozs7Ozs7Ozs7Ozs7O0FBZUUsZ0JBQVksRUFBRTtBQUNoQjtBQUNJLFdBQUssRUFBRSxHQUZLOztBQUdoQjtBQUNJLGFBQU8sRUFBRSxJQUpHOztBQUtoQjtBQUNJLFFBQUUsRUFBRSxZQU5ROztBQU9oQjs7Ozs7QUFLSSxxQkFBZSxFQUFFLElBWkw7O0FBYWhCOzs7OztBQUtJLE9BQUMsRUFBRSxRQWxCUzs7QUFtQmhCOzs7OztBQUtJLE9BQUMsRUFBRTtBQXhCUyxLQWxRQTs7QUE2UmhCOzs7Ozs7Ozs7Ozs7Ozs7QUFlRSxjQUFVLEVBQUU7QUFDZDtBQUNJLFdBQUssRUFBRSxHQUZHOztBQUdkO0FBQ0ksYUFBTyxFQUFFLElBSkM7O0FBS2Q7QUFDSSxRQUFFLEVBQUUsVUFOTTs7QUFPZDtBQUNJLFlBQU0sRUFBRSxnQkFSRTs7QUFTZDs7Ozs7O0FBTUkscUJBQWUsRUFBRTtBQWZQO0FBNVNFLEdBQWhCO0FBK1RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFJLFFBQVEsR0FBRztBQUNmOzs7O0FBSUUsYUFBUyxFQUFFLFFBTEU7O0FBT2Y7Ozs7QUFJRSxpQkFBYSxFQUFFLEtBWEY7O0FBYWY7Ozs7QUFJRSxpQkFBYSxFQUFFLElBakJGOztBQW1CZjs7Ozs7QUFLRSxtQkFBZSxFQUFFLEtBeEJKOztBQTBCZjs7Ozs7O0FBTUUsWUFBUSxFQUFFLFNBQVMsUUFBVCxHQUFvQixDQUFFLENBaENuQjs7QUFrQ2Y7Ozs7Ozs7O0FBUUUsWUFBUSxFQUFFLFNBQVMsUUFBVCxHQUFvQixDQUFFLENBMUNuQjs7QUE0Q2Y7Ozs7O0FBS0UsYUFBUyxFQUFFO0FBakRFLEdBQWY7QUFvREE7Ozs7O0FBS0E7Ozs7QUFLQTtBQUNBOztBQUNBLE1BQUksTUFBTSxHQUFHLFlBQVk7QUFDekI7Ozs7Ozs7O0FBUUUsYUFBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQ2pDLFVBQUksS0FBSyxHQUFHLElBQVo7O0FBRUEsVUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQixTQUF6QyxHQUFxRCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxFQUFsRjtBQUNBLG9CQUFjLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBZDs7QUFFQSxXQUFLLGNBQUwsR0FBc0IsWUFBWTtBQUNoQyxlQUFPLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxNQUFQLENBQTVCO0FBQ0QsT0FGRCxDQU5pQyxDQVVyQzs7O0FBQ0ksV0FBSyxNQUFMLEdBQWMsUUFBUSxDQUFDLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBRCxDQUF0QixDQVhpQyxDQWFyQzs7QUFDSSxXQUFLLE9BQUwsR0FBZSxRQUFRLENBQUMsRUFBRCxFQUFLLE1BQU0sQ0FBQyxRQUFaLEVBQXNCLE9BQXRCLENBQXZCLENBZGlDLENBZ0JyQzs7QUFDSSxXQUFLLEtBQUwsR0FBYTtBQUNYLG1CQUFXLEVBQUUsS0FERjtBQUVYLGlCQUFTLEVBQUUsS0FGQTtBQUdYLHFCQUFhLEVBQUU7QUFISixPQUFiLENBakJpQyxDQXVCckM7O0FBQ0ksV0FBSyxTQUFMLEdBQWlCLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBdkIsR0FBZ0MsU0FBUyxDQUFDLENBQUQsQ0FBekMsR0FBK0MsU0FBaEU7QUFDQSxXQUFLLE1BQUwsR0FBYyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQWpCLEdBQTBCLE1BQU0sQ0FBQyxDQUFELENBQWhDLEdBQXNDLE1BQXBELENBekJpQyxDQTJCckM7O0FBQ0ksV0FBSyxPQUFMLENBQWEsU0FBYixHQUF5QixFQUF6QjtBQUNBLFlBQU0sQ0FBQyxJQUFQLENBQVksUUFBUSxDQUFDLEVBQUQsRUFBSyxNQUFNLENBQUMsUUFBUCxDQUFnQixTQUFyQixFQUFnQyxPQUFPLENBQUMsU0FBeEMsQ0FBcEIsRUFBd0UsT0FBeEUsQ0FBZ0YsVUFBVSxJQUFWLEVBQWdCO0FBQzlGLGFBQUssQ0FBQyxPQUFOLENBQWMsU0FBZCxDQUF3QixJQUF4QixJQUFnQyxRQUFRLENBQUMsRUFBRCxFQUFLLE1BQU0sQ0FBQyxRQUFQLENBQWdCLFNBQWhCLENBQTBCLElBQTFCLEtBQW1DLEVBQXhDLEVBQTRDLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLE9BQU8sQ0FBQyxTQUFSLENBQWtCLElBQWxCLENBQXBCLEdBQThDLEVBQTFGLENBQXhDO0FBQ0QsT0FGRCxFQTdCaUMsQ0FpQ3JDOztBQUNJLFdBQUssU0FBTCxHQUFpQixNQUFNLENBQUMsSUFBUCxDQUFZLEtBQUssT0FBTCxDQUFhLFNBQXpCLEVBQW9DLEdBQXBDLENBQXdDLFVBQVUsSUFBVixFQUFnQjtBQUN2RSxlQUFPLFFBQVEsQ0FBQztBQUNkLGNBQUksRUFBRTtBQURRLFNBQUQsRUFFWixLQUFLLENBQUMsT0FBTixDQUFjLFNBQWQsQ0FBd0IsSUFBeEIsQ0FGWSxDQUFmO0FBR0QsT0FKZ0IsRUFLckI7QUFMcUIsT0FNaEIsSUFOZ0IsQ0FNWCxVQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCO0FBQ3BCLGVBQU8sQ0FBQyxDQUFDLEtBQUYsR0FBVSxDQUFDLENBQUMsS0FBbkI7QUFDRCxPQVJnQixDQUFqQixDQWxDaUMsQ0E0Q3JDO0FBQ0E7QUFDQTtBQUNBOztBQUNJLFdBQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsVUFBVSxlQUFWLEVBQTJCO0FBQ2hELFlBQUksZUFBZSxDQUFDLE9BQWhCLElBQTJCLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBakIsQ0FBekMsRUFBbUU7QUFDakUseUJBQWUsQ0FBQyxNQUFoQixDQUF1QixLQUFLLENBQUMsU0FBN0IsRUFBd0MsS0FBSyxDQUFDLE1BQTlDLEVBQXNELEtBQUssQ0FBQyxPQUE1RCxFQUFxRSxlQUFyRSxFQUFzRixLQUFLLENBQUMsS0FBNUY7QUFDRDtBQUNGLE9BSkQsRUFoRGlDLENBc0RyQzs7QUFDSSxXQUFLLE1BQUw7QUFFQSxVQUFJLGFBQWEsR0FBRyxLQUFLLE9BQUwsQ0FBYSxhQUFqQzs7QUFDQSxVQUFJLGFBQUosRUFBbUI7QUFDdkI7QUFDTSxhQUFLLG9CQUFMO0FBQ0Q7O0FBRUQsV0FBSyxLQUFMLENBQVcsYUFBWCxHQUEyQixhQUEzQjtBQUNELEtBekVzQixDQTJFekI7QUFDQTs7O0FBR0UsZUFBVyxDQUFDLE1BQUQsRUFBUyxDQUFDO0FBQ25CLFNBQUcsRUFBRSxRQURjO0FBRW5CLFdBQUssRUFBRSxTQUFTLFNBQVQsR0FBcUI7QUFDMUIsZUFBTyxNQUFNLENBQUMsSUFBUCxDQUFZLElBQVosQ0FBUDtBQUNEO0FBSmtCLEtBQUQsRUFLakI7QUFDRCxTQUFHLEVBQUUsU0FESjtBQUVELFdBQUssRUFBRSxTQUFTLFVBQVQsR0FBc0I7QUFDM0IsZUFBTyxPQUFPLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBUDtBQUNEO0FBSkEsS0FMaUIsRUFVakI7QUFDRCxTQUFHLEVBQUUsc0JBREo7QUFFRCxXQUFLLEVBQUUsU0FBUyx1QkFBVCxHQUFtQztBQUN4QyxlQUFPLG9CQUFvQixDQUFDLElBQXJCLENBQTBCLElBQTFCLENBQVA7QUFDRDtBQUpBLEtBVmlCLEVBZWpCO0FBQ0QsU0FBRyxFQUFFLHVCQURKO0FBRUQsV0FBSyxFQUFFLFNBQVMsd0JBQVQsR0FBb0M7QUFDekMsZUFBTyxxQkFBcUIsQ0FBQyxJQUF0QixDQUEyQixJQUEzQixDQUFQO0FBQ0Q7QUFFTDs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYkssS0FmaUIsQ0FBVCxDQUFYO0FBOENBLFdBQU8sTUFBUDtBQUNELEdBOUhZLEVBQWI7QUFnSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxRQUFNLENBQUMsS0FBUCxHQUFlLENBQUMsT0FBTyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLE1BQWhDLEdBQXlDLE1BQTFDLEVBQWtELFdBQWpFO0FBQ0EsUUFBTSxDQUFDLFVBQVAsR0FBb0IsVUFBcEI7QUFDQSxRQUFNLENBQUMsUUFBUCxHQUFrQixRQUFsQjtBQ3ppRkE7Ozs7OztBQU1BLE1BQU02QyxNQUFJLEdBQVY7QUFDQSxNQUFNQyxTQUFPLEdBQWI7QUFDQSxNQUFNQyxVQUFRLEdBQWQ7QUFDQSxNQUFNQyxXQUFTLFNBQWY7QUFDQSxNQUFNQyxjQUFZLEdBQWxCO0FBQ0EsTUFBTUMsb0JBQWtCLEdBQVNsRCxDQUFDLENBQURBLEdBQWpDLE1BQWlDQSxDQUFqQztBQUNBLE1BQU02TyxjQUFjLEdBQXBCLEcsQ0FBQTs7QUFDQSxNQUFNQyxhQUFhLEdBQW5CLEcsQ0FBQTs7QUFDQSxNQUFNQyxXQUFXLEdBQWpCLEUsQ0FBQTs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBdEIsRyxDQUFBOztBQUNBLE1BQU1DLGtCQUFrQixHQUF4QixHLENBQUE7O0FBQ0EsTUFBTUMsd0JBQXdCLEdBQTlCLEUsQ0FBQTs7QUFDQSxNQUFNQyxjQUFjLEdBQWEsV0FBY0gsZ0JBQWQsTUFBY0EsR0FBZCxrQkFBY0EsR0FBZCxHQUFjQSxHQUEvQyxjQUFpQyxDQUFqQztBQUVBLE1BQU0zTCxPQUFLLEdBQUc7QUFDWmlKLFFBQUksV0FEUTtBQUVaQyxVQUFNLGFBRk07QUFHWjNJLFFBQUksV0FIUTtBQUlaeUksU0FBSyxZQUpPO0FBS1orQyxTQUFLLFlBTE87QUFNWjVMLGtCQUFjLDBCQU5GO0FBT1o2TCxvQkFBZ0IsNEJBUEo7QUFRWkMsa0JBQWMsMEJBQXlCck07QUFSM0IsR0FBZDtBQVdBLE1BQU1RLFdBQVMsR0FBRztBQUNoQjhMLFlBQVEsRUFEUTtBQUVoQjNMLFFBQUksRUFGWTtBQUdoQjRMLFVBQU0sRUFIVTtBQUloQkMsYUFBUyxFQUpPO0FBS2hCQyxZQUFRLEVBTFE7QUFNaEJDLGFBQVMsRUFOTztBQU9oQkMsWUFBUSxFQVBRO0FBUWhCQyxtQkFBZSxFQUFHO0FBUkYsR0FBbEI7QUFXQSxNQUFNMU0sVUFBUSxHQUFHO0FBQ2YrQixlQUFXLEVBREk7QUFFZjRLLGNBQVUsRUFGSztBQUdmQyxRQUFJLEVBSFc7QUFJZkMsY0FBVSxFQUpLO0FBS2ZDLGlCQUFhLEVBQUc7QUFMRCxHQUFqQjtBQVFBLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsT0FBRyxFQURpQjtBQUVwQkMsVUFBTSxFQUZjO0FBR3BCQyxVQUFNLEVBSGM7QUFJcEJDLGFBQVMsRUFKVztBQUtwQnBKLFNBQUssRUFMZTtBQU1wQnFKLFlBQVEsRUFOWTtBQU9wQnRKLFFBQUksRUFQZ0I7QUFRcEJ1SixXQUFPLEVBQUs7QUFSUSxHQUF0QjtBQVdBLE1BQU1sSyxTQUFPLEdBQUc7QUFDZG1LLFVBQU0sRUFEUTtBQUVkQyxRQUFJLEVBRlU7QUFHZEMsWUFBUSxFQUhNO0FBSWRDLGFBQVMsRUFKSztBQUtkQyxXQUFPLEVBTE87QUFNZEMsZ0JBQVksRUFBRztBQU5ELEdBQWhCO0FBU0EsTUFBTWpLLGFBQVcsR0FBRztBQUNsQjRKLFVBQU0sRUFEWTtBQUVsQkMsUUFBSSxFQUZjO0FBR2xCQyxZQUFRLEVBSFU7QUFJbEJDLGFBQVMsRUFKUztBQUtsQkMsV0FBTyxFQUxXO0FBTWxCQyxnQkFBWSxFQUFHO0FBTkcsR0FBcEI7QUFTQTs7Ozs7O01BTU1DOzs7QUFDSix1Q0FBNkI7QUFDM0I7QUFDQTtBQUNBLHFCQUFpQixnQkFBakIsTUFBaUIsQ0FBakI7QUFDQSxtQkFBaUIsS0FBakIsZUFBaUIsRUFBakI7QUFDQSx1QkFBaUIsS0FBakIsYUFBaUIsRUFBakI7O0FBRUE7QUFDRCxLLENBQUE7OztxQ0FnQkQ7O1dBRUF2TCxNLEdBQUFBLGtCQUFTO0FBQ1AsVUFBSSwwQkFBMEJ4RixDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FBakUsUUFBOEJ6RCxDQUE5QixFQUE2RTtBQUMzRTtBQUNEOztBQUVELFVBQU1nUixRQUFRLEdBQUdoUixDQUFDLENBQUMsS0FBRkEsS0FBQyxDQUFEQSxVQUF1QnlELFdBQVMsQ0FBakQsSUFBaUJ6RCxDQUFqQjs7QUFFQStRLGNBQVEsQ0FBUkE7O0FBRUEsb0JBQWM7QUFDWjtBQUNEOztBQUVEO0FBQ0QsSzs7V0FFRDNELEksR0FBQUEseUJBQXdCO0FBQUEsVUFBbkI2RCxTQUFtQjtBQUFuQkEsaUJBQW1CLEdBQVAsS0FBWkE7QUFBbUI7O0FBQ3RCLFVBQUksMEJBQTBCalIsQ0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsVUFBMEJ5RCxXQUFTLENBQTdELFFBQTBCekQsQ0FBMUIsSUFBMkVBLENBQUMsQ0FBQyxLQUFGQSxLQUFDLENBQURBLFVBQXVCeUQsV0FBUyxDQUEvRyxJQUErRXpELENBQS9FLEVBQXVIO0FBQ3JIO0FBQ0Q7O0FBRUQsVUFBTThLLGFBQWEsR0FBRztBQUNwQkEscUJBQWEsRUFBRSxLQUFLb0c7QUFEQSxPQUF0QjtBQUdBLFVBQU1DLFNBQVMsR0FBR25SLENBQUMsQ0FBREEsTUFBUXFELE9BQUssQ0FBYnJELE1BQWxCLGFBQWtCQSxDQUFsQjs7QUFDQSxVQUFNbUUsTUFBTSxHQUFHNE0sUUFBUSxDQUFSQSxzQkFBK0IsS0FBOUMsUUFBZUEsQ0FBZjs7QUFFQS9RLE9BQUMsQ0FBREEsTUFBQyxDQUFEQTs7QUFFQSxVQUFJbVIsU0FBUyxDQUFiLGtCQUFJQSxFQUFKLEVBQW9DO0FBQ2xDO0FBZG9COzs7QUFrQnRCLFVBQUksQ0FBQyxLQUFELGFBQUosV0FBa0M7QUFDaEM7Ozs7QUFJQSxZQUFJLGtCQUFKLGFBQW1DO0FBQ2pDLGdCQUFNLGNBQU4sbUVBQU0sQ0FBTjtBQUNEOztBQUVELFlBQUlDLGdCQUFnQixHQUFHLEtBQXZCOztBQUVBLFlBQUksMkJBQUosVUFBeUM7QUFDdkNBLDBCQUFnQixHQUFoQkE7QUFERixlQUVPLElBQUlqUixJQUFJLENBQUpBLFVBQWUsYUFBbkIsU0FBSUEsQ0FBSixFQUE0QztBQUNqRGlSLDBCQUFnQixHQUFHLGFBRDhCLFNBQ2pEQSxDQURpRDs7QUFJakQsY0FBSSxPQUFPLHVCQUFQLFdBQUosYUFBMEQ7QUFDeERBLDRCQUFnQixHQUFHLHVCQUFuQkEsQ0FBbUIsQ0FBbkJBO0FBQ0Q7QUFuQjZCO0FBdUJoQztBQUNBOzs7QUFDQSxZQUFJLDBCQUFKLGdCQUE4QztBQUM1Q3BSLFdBQUMsQ0FBREEsTUFBQyxDQUFEQSxVQUFtQnlELFdBQVMsQ0FBNUJ6RDtBQUNEOztBQUNELHVCQUFlLDZCQUE2QixLQUE3QixPQUF5QyxLQUF4RCxnQkFBd0QsRUFBekMsQ0FBZjtBQTlDb0I7QUFrRHRCO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxrQkFBa0JTLFFBQVEsQ0FBMUIsbUJBQ0FULENBQUMsQ0FBREEsTUFBQyxDQUFEQSxTQUFrQm1ELFVBQVEsQ0FBMUJuRCx1QkFESixHQUN5RDtBQUN2REEsU0FBQyxDQUFDUyxRQUFRLENBQVZULElBQUMsQ0FBREEsa0NBQWtEQSxDQUFDLENBQW5EQTtBQUNEOztBQUVEOztBQUNBOztBQUVBQSxPQUFDLENBQUMsS0FBRkEsS0FBQyxDQUFEQSxhQUEwQnlELFdBQVMsQ0FBbkN6RDtBQUNBQSxPQUFDLENBQURBLE1BQUMsQ0FBREEsYUFDZXlELFdBQVMsQ0FEeEJ6RCxjQUVXQSxDQUFDLENBQURBLE1BQVFxRCxPQUFLLENBQWJyRCxPQUZYQSxhQUVXQSxDQUZYQTtBQUdELEs7O1dBRUQ0TixJLEdBQUFBLGdCQUFPO0FBQ0wsVUFBSSwwQkFBMEI1TixDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FBN0QsUUFBMEJ6RCxDQUExQixJQUEyRSxDQUFDQSxDQUFDLENBQUMsS0FBRkEsS0FBQyxDQUFEQSxVQUF1QnlELFdBQVMsQ0FBaEgsSUFBZ0Z6RCxDQUFoRixFQUF3SDtBQUN0SDtBQUNEOztBQUVELFVBQU04SyxhQUFhLEdBQUc7QUFDcEJBLHFCQUFhLEVBQUUsS0FBS29HO0FBREEsT0FBdEI7QUFHQSxVQUFNRyxTQUFTLEdBQUdyUixDQUFDLENBQURBLE1BQVFxRCxPQUFLLENBQWJyRCxNQUFsQixhQUFrQkEsQ0FBbEI7O0FBQ0EsVUFBTW1FLE1BQU0sR0FBRzRNLFFBQVEsQ0FBUkEsc0JBQStCLEtBQTlDLFFBQWVBLENBQWY7O0FBRUEvUSxPQUFDLENBQURBLE1BQUMsQ0FBREE7O0FBRUEsVUFBSXFSLFNBQVMsQ0FBYixrQkFBSUEsRUFBSixFQUFvQztBQUNsQztBQUNEOztBQUVELFVBQUksS0FBSixTQUFrQjtBQUNoQjtBQUNEOztBQUVEclIsT0FBQyxDQUFDLEtBQUZBLEtBQUMsQ0FBREEsYUFBMEJ5RCxXQUFTLENBQW5DekQ7QUFDQUEsT0FBQyxDQUFEQSxNQUFDLENBQURBLGFBQ2V5RCxXQUFTLENBRHhCekQsY0FFV0EsQ0FBQyxDQUFEQSxNQUFRcUQsT0FBSyxDQUFickQsUUFGWEEsYUFFV0EsQ0FGWEE7QUFHRCxLOztXQUVEaUUsTyxHQUFBQSxtQkFBVTtBQUNSakUsT0FBQyxDQUFEQSxXQUFhLEtBQWJBO0FBQ0FBLE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJLGlCQUFKLE1BQTJCO0FBQ3pCOztBQUNBO0FBQ0Q7QUFDRixLOztXQUVEc1IsTSxHQUFBQSxrQkFBUztBQUNQLHVCQUFpQixLQUFqQixhQUFpQixFQUFqQjs7QUFDQSxVQUFJLGlCQUFKLE1BQTJCO0FBQ3pCO0FBQ0Q7QUFDRixLLENBQUE7OztXQUlENUgsa0IsR0FBQUEsOEJBQXFCO0FBQUE7O0FBQ25CMUosT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsSUFBb0JxRCxPQUFLLENBQXpCckQsT0FBaUMsaUJBQVc7QUFDMUNDLGFBQUssQ0FBTEE7QUFDQUEsYUFBSyxDQUFMQTs7QUFDQSxhQUFJLENBQUo7QUFIRkQ7QUFLRCxLOztXQUVEdUosVSxHQUFBQSw0QkFBbUI7QUFDakJ4SCxZQUFNLHNCQUNELGlCQURDLGFBRUQvQixDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxDQUZDLElBRURBLEVBRkMsTUFBTitCLE1BQU0sQ0FBTkE7QUFNQTVCLFVBQUksQ0FBSkEsZ0NBR0UsaUJBSEZBO0FBTUE7QUFDRCxLOztXQUVEb1IsZSxHQUFBQSwyQkFBa0I7QUFDaEIsVUFBSSxDQUFDLEtBQUwsT0FBaUI7QUFDZixZQUFNcE4sTUFBTSxHQUFHNE0sUUFBUSxDQUFSQSxzQkFBK0IsS0FBOUMsUUFBZUEsQ0FBZjs7QUFFQSxvQkFBWTtBQUNWLHVCQUFhNU0sTUFBTSxDQUFOQSxjQUFxQmhCLFVBQVEsQ0FBMUMsSUFBYWdCLENBQWI7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBUDtBQUNELEs7O1dBRURxTixhLEdBQUFBLHlCQUFnQjtBQUNkLFVBQU1DLGVBQWUsR0FBR3pSLENBQUMsQ0FBQyxjQUExQixVQUF5QixDQUF6QjtBQUNBLFVBQUkwUixTQUFTLEdBQUd4QixhQUFhLENBRmYsTUFFZCxDQUZjOztBQUtkLFVBQUl1QixlQUFlLENBQWZBLFNBQXlCaE8sV0FBUyxDQUF0QyxNQUFJZ08sQ0FBSixFQUFnRDtBQUM5Q0MsaUJBQVMsR0FBR3hCLGFBQWEsQ0FBekJ3Qjs7QUFDQSxZQUFJMVIsQ0FBQyxDQUFDLEtBQUZBLEtBQUMsQ0FBREEsVUFBdUJ5RCxXQUFTLENBQXBDLFNBQUl6RCxDQUFKLEVBQWlEO0FBQy9DMFIsbUJBQVMsR0FBR3hCLGFBQWEsQ0FBekJ3QjtBQUNEO0FBSkgsYUFLTyxJQUFJRCxlQUFlLENBQWZBLFNBQXlCaE8sV0FBUyxDQUF0QyxTQUFJZ08sQ0FBSixFQUFtRDtBQUN4REMsaUJBQVMsR0FBR3hCLGFBQWEsQ0FBekJ3QjtBQURLLGFBRUEsSUFBSUQsZUFBZSxDQUFmQSxTQUF5QmhPLFdBQVMsQ0FBdEMsUUFBSWdPLENBQUosRUFBa0Q7QUFDdkRDLGlCQUFTLEdBQUd4QixhQUFhLENBQXpCd0I7QUFESyxhQUVBLElBQUkxUixDQUFDLENBQUMsS0FBRkEsS0FBQyxDQUFEQSxVQUF1QnlELFdBQVMsQ0FBcEMsU0FBSXpELENBQUosRUFBaUQ7QUFDdEQwUixpQkFBUyxHQUFHeEIsYUFBYSxDQUF6QndCO0FBQ0Q7O0FBQ0Q7QUFDRCxLOztXQUVEQyxhLEdBQUFBLHlCQUFnQjtBQUNkLGFBQU8zUixDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSw2QkFBUDtBQUNELEs7O1dBRUQ0UixVLEdBQUFBLHNCQUFhO0FBQUE7O0FBQ1gsVUFBTW5CLE1BQU0sR0FBWjs7QUFFQSxVQUFJLE9BQU8sYUFBUCxXQUFKLFlBQStDO0FBQzdDQSxjQUFNLENBQU5BLEtBQVksZ0JBQVU7QUFDcEIvTCxjQUFJLENBQUpBLDZCQUNLQSxJQUFJLENBRFRBLGFBRUssTUFBSSxDQUFKLGVBQW9CQSxJQUFJLENBQXhCLFNBQWtDLE1BQUksQ0FBdEMsYUFGTEE7QUFLQTtBQU5GK0w7QUFERixhQVNPO0FBQ0xBLGNBQU0sQ0FBTkEsU0FBZ0IsYUFBaEJBO0FBQ0Q7O0FBRUQ7QUFDRCxLOztXQUVEb0IsZ0IsR0FBQUEsNEJBQW1CO0FBQ2pCLFVBQU1mLFlBQVksR0FBRztBQUNuQlksaUJBQVMsRUFBRSxLQURRLGFBQ1IsRUFEUTtBQUVuQkksaUJBQVMsRUFBRTtBQUNUckIsZ0JBQU0sRUFBRSxLQURDLFVBQ0QsRUFEQztBQUVUQyxjQUFJLEVBQUU7QUFDSnFCLG1CQUFPLEVBQUUsYUFBYXJCO0FBRGxCLFdBRkc7QUFLVHNCLHlCQUFlLEVBQUU7QUFDZkMsNkJBQWlCLEVBQUUsYUFBYXRCO0FBRGpCO0FBTFI7QUFGUSxPQUFyQixDQURpQjs7QUFlakIsVUFBSSx5QkFBSixVQUF1QztBQUNyQ0csb0JBQVksQ0FBWkEsdUJBQW9DO0FBQ2xDaUIsaUJBQU8sRUFBRTtBQUR5QixTQUFwQ2pCO0FBR0Q7O0FBRUQsa0RBRUssYUFGTDtBQUlELEssQ0FBQTs7O2FBSU10TSxnQixHQUFQLGtDQUFnQztBQUM5QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFJRSxJQUFJLEdBQUcxRSxDQUFDLENBQURBLElBQUMsQ0FBREEsTUFBWCxVQUFXQSxDQUFYOztBQUNBLFlBQU04TCxPQUFPLEdBQUcsd0NBQWhCOztBQUVBLFlBQUksQ0FBSixNQUFXO0FBQ1RwSCxjQUFJLEdBQUcsbUJBQVBBLE9BQU8sQ0FBUEE7QUFDQTFFLFdBQUMsQ0FBREEsSUFBQyxDQUFEQTtBQUNEOztBQUVELFlBQUksa0JBQUosVUFBZ0M7QUFDOUIsY0FBSSxPQUFPMEUsSUFBSSxDQUFYLE1BQVcsQ0FBWCxLQUFKLGFBQXlDO0FBQ3ZDLGtCQUFNLDhDQUFOLElBQU0sQ0FBTjtBQUNEOztBQUNEQSxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQWRILE9BQU8sQ0FBUDtBQWdCRCxLOzthQUVNd04sVyxHQUFQLDRCQUEwQjtBQUN4QixVQUFJalMsS0FBSyxLQUFLQSxLQUFLLENBQUxBLHNDQUNaQSxLQUFLLENBQUxBLG9CQUEwQkEsS0FBSyxDQUFMQSxVQUQ1QixXQUFTLENBQVQsRUFDMEQ7QUFDeEQ7QUFDRDs7QUFFRCxVQUFNa1MsT0FBTyxHQUFHLGNBQWMxUixRQUFRLENBQVJBLGlCQUEwQjBDLFVBQVEsQ0FBaEUsV0FBOEIxQyxDQUFkLENBQWhCOztBQUVBLFdBQUssSUFBSXVGLENBQUMsR0FBTCxHQUFXQyxHQUFHLEdBQUdrTSxPQUFPLENBQTdCLFFBQXNDbk0sQ0FBQyxHQUF2QyxLQUErQ0EsQ0FBL0MsSUFBb0Q7QUFDbEQsWUFBTTdCLE1BQU0sR0FBRzRNLFFBQVEsQ0FBUkEsc0JBQStCb0IsT0FBTyxDQUFyRCxDQUFxRCxDQUF0Q3BCLENBQWY7O0FBQ0EsWUFBTXFCLE9BQU8sR0FBR3BTLENBQUMsQ0FBQ21TLE9BQU8sQ0FBVG5TLENBQVMsQ0FBUixDQUFEQSxNQUFoQixVQUFnQkEsQ0FBaEI7QUFDQSxZQUFNOEssYUFBYSxHQUFHO0FBQ3BCQSx1QkFBYSxFQUFFcUgsT0FBTztBQURGLFNBQXRCOztBQUlBLFlBQUlsUyxLQUFLLElBQUlBLEtBQUssQ0FBTEEsU0FBYixTQUFxQztBQUNuQzZLLHVCQUFhLENBQWJBO0FBQ0Q7O0FBRUQsWUFBSSxDQUFKLFNBQWM7QUFDWjtBQUNEOztBQUVELFlBQU11SCxZQUFZLEdBQUdELE9BQU8sQ0FBNUI7O0FBQ0EsWUFBSSxDQUFDcFMsQ0FBQyxDQUFEQSxNQUFDLENBQURBLFVBQW1CeUQsV0FBUyxDQUFqQyxJQUFLekQsQ0FBTCxFQUF5QztBQUN2QztBQUNEOztBQUVELFlBQUlDLEtBQUssS0FBS0EsS0FBSyxDQUFMQSxvQkFDVix1QkFBdUJBLEtBQUssQ0FBTEEsT0FEYkEsT0FDVixDQURVQSxJQUNzQ0EsS0FBSyxDQUFMQSxvQkFBMEJBLEtBQUssQ0FBTEEsVUFEMUVBLFdBQUssQ0FBTEEsSUFFQUQsQ0FBQyxDQUFEQSxpQkFBbUJDLEtBQUssQ0FGNUIsTUFFSUQsQ0FGSixFQUVzQztBQUNwQztBQUNEOztBQUVELFlBQU1xUixTQUFTLEdBQUdyUixDQUFDLENBQURBLE1BQVFxRCxPQUFLLENBQWJyRCxNQUFsQixhQUFrQkEsQ0FBbEI7QUFDQUEsU0FBQyxDQUFEQSxNQUFDLENBQURBOztBQUNBLFlBQUlxUixTQUFTLENBQWIsa0JBQUlBLEVBQUosRUFBb0M7QUFDbEM7QUE3QmdEO0FBaUNsRDs7O0FBQ0EsWUFBSSxrQkFBa0I1USxRQUFRLENBQTlCLGlCQUFnRDtBQUM5Q1QsV0FBQyxDQUFDUyxRQUFRLENBQVZULElBQUMsQ0FBREEsbUNBQW1EQSxDQUFDLENBQXBEQTtBQUNEOztBQUVEbVMsZUFBTyxDQUFQQSxDQUFPLENBQVBBOztBQUVBLFlBQUlDLE9BQU8sQ0FBWCxTQUFxQjtBQUNuQkEsaUJBQU8sQ0FBUEE7QUFDRDs7QUFFRHBTLFNBQUMsQ0FBREEsWUFBQyxDQUFEQSxhQUE0QnlELFdBQVMsQ0FBckN6RDtBQUNBQSxTQUFDLENBQURBLE1BQUMsQ0FBREEsYUFDZXlELFdBQVMsQ0FEeEJ6RCxjQUVXQSxDQUFDLENBQURBLE1BQVFxRCxPQUFLLENBQWJyRCxRQUZYQSxhQUVXQSxDQUZYQTtBQUdEO0FBQ0YsSzs7YUFFTXNTLHFCLEdBQVAsd0NBQXNDO0FBQ3BDO0FBQ0EsVUFBTTNSLFFBQVEsR0FBR1IsSUFBSSxDQUFKQSx1QkFBakIsT0FBaUJBLENBQWpCOztBQUVBLG9CQUFjO0FBQ1pnRSxjQUFNLEdBQUcxRCxRQUFRLENBQVJBLGNBQVQwRCxRQUFTMUQsQ0FBVDBEO0FBQ0Q7O0FBRUQsYUFBT0EsTUFBTSxJQUFJdkQsT0FBTyxDQUF4QjtBQUNELEssQ0FBQTs7O2FBR00yUixzQixHQUFQLHVDQUFxQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUksdUJBQXVCdFMsS0FBSyxDQUFMQSxPQUF2QixXQUNBQSxLQUFLLENBQUxBLDJCQUFpQ0EsS0FBSyxDQUFMQSw2QkFDbENBLEtBQUssQ0FBTEEsZ0NBQXNDQSxLQUFLLENBQUxBLFVBQXRDQSxvQkFDQ0QsQ0FBQyxDQUFDQyxLQUFLLENBQVBELE1BQUMsQ0FBREEsU0FBd0JtRCxVQUFRLENBQWhDbkQsTUFIQSxNQUNpQ0MsQ0FEakMsR0FHaUQsQ0FBQ2tQLGNBQWMsQ0FBZEEsS0FBb0JsUCxLQUFLLENBSC9FLEtBR3NEa1AsQ0FIdEQsRUFHd0Y7QUFDdEY7QUFDRDs7QUFFRGxQLFdBQUssQ0FBTEE7QUFDQUEsV0FBSyxDQUFMQTs7QUFFQSxVQUFJLGlCQUFpQkQsQ0FBQyxDQUFEQSxJQUFDLENBQURBLFVBQWlCeUQsV0FBUyxDQUEvQyxRQUFxQnpELENBQXJCLEVBQTJEO0FBQ3pEO0FBQ0Q7O0FBRUQsVUFBTW1FLE1BQU0sR0FBSzRNLFFBQVEsQ0FBUkEsc0JBQWpCLElBQWlCQSxDQUFqQjs7QUFDQSxVQUFNQyxRQUFRLEdBQUdoUixDQUFDLENBQURBLE1BQUMsQ0FBREEsVUFBbUJ5RCxXQUFTLENBQTdDLElBQWlCekQsQ0FBakI7O0FBRUEsVUFBSSxhQUFhQyxLQUFLLENBQUxBLFVBQWpCLGdCQUFpRDtBQUMvQztBQUNEOztBQUVELFVBQUksYUFBYStRLFFBQVEsS0FBSy9RLEtBQUssQ0FBTEEsNEJBQWtDQSxLQUFLLENBQUxBLFVBQWhFLGFBQXlCLENBQXpCLEVBQWdHO0FBQzlGLFlBQUlBLEtBQUssQ0FBTEEsVUFBSixnQkFBb0M7QUFDbEMsY0FBTXVGLE1BQU0sR0FBR3JCLE1BQU0sQ0FBTkEsY0FBcUJoQixVQUFRLENBQTVDLFdBQWVnQixDQUFmO0FBQ0FuRSxXQUFDLENBQURBLE1BQUMsQ0FBREE7QUFDRDs7QUFFREEsU0FBQyxDQUFEQSxJQUFDLENBQURBO0FBQ0E7QUFDRDs7QUFFRCxVQUFNd1MsS0FBSyxHQUFHLGNBQWNyTyxNQUFNLENBQU5BLGlCQUF3QmhCLFVBQVEsQ0FBOUMsYUFBY2dCLENBQWQsU0FDSjtBQUFBLGVBQVVuRSxDQUFDLENBQURBLElBQUMsQ0FBREEsSUFBVixVQUFVQSxDQUFWO0FBRFYsT0FBYyxDQUFkOztBQUdBLFVBQUl3UyxLQUFLLENBQUxBLFdBQUosR0FBd0I7QUFDdEI7QUFDRDs7QUFFRCxVQUFJbkosS0FBSyxHQUFHbUosS0FBSyxDQUFMQSxRQUFjdlMsS0FBSyxDQUEvQixNQUFZdVMsQ0FBWjs7QUFFQSxVQUFJdlMsS0FBSyxDQUFMQSw4QkFBb0NvSixLQUFLLEdBQTdDLEdBQW1EO0FBQUU7QUFDbkRBLGFBQUs7QUFDTjs7QUFFRCxVQUFJcEosS0FBSyxDQUFMQSxnQ0FBc0NvSixLQUFLLEdBQUdtSixLQUFLLENBQUxBLFNBQWxELEdBQW9FO0FBQUU7QUFDcEVuSixhQUFLO0FBQ047O0FBRUQsVUFBSUEsS0FBSyxHQUFULEdBQWU7QUFDYkEsYUFBSyxHQUFMQTtBQUNEOztBQUVEbUosV0FBSyxDQUFMQSxLQUFLLENBQUxBO0FBQ0QsSzs7OzswQkFsWm9CO0FBQ25CO0FBQ0Q7OzswQkFFb0I7QUFDbkI7QUFDRDs7OzBCQUV3QjtBQUN2QjtBQUNEOzs7OztBQTJZSDs7Ozs7OztBQU1BeFMsR0FBQyxDQUFEQSxRQUFDLENBQURBLElBQ01xRCxPQUFLLENBRFhyRCxrQkFDOEJtRCxVQUFRLENBRHRDbkQsYUFDb0QrUSxRQUFRLENBRDVEL1EsMkJBRU1xRCxPQUFLLENBRlhyRCxrQkFFOEJtRCxVQUFRLENBRnRDbkQsTUFFNkMrUSxRQUFRLENBRnJEL1EsMkJBR1NxRCxPQUFLLENBSGRyRCxjQUdTcUQsR0FIVHJELEdBR1NxRCxHQUF3QkEsT0FBSyxDQUh0Q3JELGdCQUd5RCtRLFFBQVEsQ0FIakUvUSxnQkFJTXFELE9BQUssQ0FKWHJELGdCQUk0Qm1ELFVBQVEsQ0FKcENuRCxhQUlrRCxpQkFBaUI7QUFDL0RDLFNBQUssQ0FBTEE7QUFDQUEsU0FBSyxDQUFMQTs7QUFDQThRLFlBQVEsQ0FBUkEsc0JBQStCL1EsQ0FBQyxDQUFoQytRLElBQWdDLENBQWhDQTtBQVBKL1EsUUFTTXFELE9BQUssQ0FUWHJELGdCQVM0Qm1ELFVBQVEsQ0FUcENuRCxZQVNpRCxhQUFPO0FBQ3BEZ0ssS0FBQyxDQUFEQTtBQVZKaEs7QUFhQTs7Ozs7O0FBTUFBLEdBQUMsQ0FBREEsYUFBYStRLFFBQVEsQ0FBckIvUTtBQUNBQSxHQUFDLENBQURBOztBQUNBQSxHQUFDLENBQURBLHdCQUF3QixZQUFNO0FBQzVCQSxLQUFDLENBQURBO0FBQ0EsV0FBTytRLFFBQVEsQ0FBZjtBQUZGL1E7QUNuaEJBOzs7Ozs7O0FBTUEsTUFBTTZDLE1BQUksR0FBVjtBQUNBLE1BQU1DLFNBQU8sR0FBYjtBQUNBLE1BQU1DLFVBQVEsR0FBZDtBQUNBLE1BQU1DLFdBQVMsU0FBZjtBQUNBLE1BQU1DLGNBQVksR0FBbEI7QUFDQSxNQUFNQyxvQkFBa0IsR0FBR2xELENBQUMsQ0FBREEsR0FBM0IsTUFBMkJBLENBQTNCO0FBQ0EsTUFBTTZPLGdCQUFjLEdBQXBCLEcsQ0FBQTs7QUFFQSxNQUFNdkksU0FBTyxHQUFHO0FBQ2RtTSxZQUFRLEVBRE07QUFFZGpNLFlBQVEsRUFGTTtBQUdka00sU0FBSyxFQUhTO0FBSWR0RixRQUFJLEVBQU87QUFKRyxHQUFoQjtBQU9BLE1BQU12RyxhQUFXLEdBQUc7QUFDbEI0TCxZQUFRLEVBRFU7QUFFbEJqTSxZQUFRLEVBRlU7QUFHbEJrTSxTQUFLLEVBSGE7QUFJbEJ0RixRQUFJLEVBQU87QUFKTyxHQUFwQjtBQU9BLE1BQU0vSixPQUFLLEdBQUc7QUFDWmlKLFFBQUksV0FEUTtBQUVacUcsa0JBQWMsb0JBRkY7QUFHWnBHLFVBQU0sYUFITTtBQUlaM0ksUUFBSSxXQUpRO0FBS1p5SSxTQUFLLFlBTE87QUFNWnVHLFdBQU8sY0FOSztBQU9aQyxVQUFNLGFBUE07QUFRWkMsaUJBQWEsb0JBUkQ7QUFTWkMsbUJBQWUsc0JBVEg7QUFVWkMsbUJBQWUsc0JBVkg7QUFXWkMscUJBQWlCLHdCQVhMO0FBWVp6UCxrQkFBYywwQkFBMEJQO0FBWjVCLEdBQWQ7QUFlQSxNQUFNUSxXQUFTLEdBQUc7QUFDaEJ5UCxjQUFVLEVBRE07QUFFaEJDLHNCQUFrQixFQUZGO0FBR2hCQyxZQUFRLEVBSFE7QUFJaEJDLFFBQUksRUFKWTtBQUtoQjFQLFFBQUksRUFMWTtBQU1oQkMsUUFBSSxFQU5ZO0FBT2hCMFAsVUFBTSxFQUFlO0FBUEwsR0FBbEI7QUFVQSxNQUFNblEsVUFBUSxHQUFHO0FBQ2ZvUSxVQUFNLEVBRFM7QUFFZkMsY0FBVSxFQUZLO0FBR2Z0TyxlQUFXLEVBSEk7QUFJZnVPLGdCQUFZLEVBSkc7QUFLZkMsaUJBQWEsRUFMRTtBQU1mQyxrQkFBYyxFQUFHO0FBTkYsR0FBakI7QUFTQTs7Ozs7O01BTU1DOzs7QUFDSixvQ0FBNkI7QUFDM0IscUJBQTRCLGdCQUE1QixNQUE0QixDQUE1QjtBQUNBO0FBQ0EscUJBQTRCaFQsT0FBTyxDQUFQQSxjQUFzQnVDLFVBQVEsQ0FBMUQsTUFBNEJ2QyxDQUE1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEssQ0FBQTs7O2tDQVlEOztXQUVBNEUsTSxHQUFBQSwrQkFBc0I7QUFDcEIsYUFBTyxnQkFBZ0IsS0FBaEIsSUFBZ0IsRUFBaEIsR0FBOEIsVUFBckMsYUFBcUMsQ0FBckM7QUFDRCxLOztXQUVENEgsSSxHQUFBQSw2QkFBb0I7QUFBQTs7QUFDbEIsVUFBSSxpQkFBaUIsS0FBckIsa0JBQTRDO0FBQzFDO0FBQ0Q7O0FBRUQsVUFBSXBOLENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFVBQTBCeUQsV0FBUyxDQUF2QyxJQUFJekQsQ0FBSixFQUErQztBQUM3QztBQUNEOztBQUVELFVBQU1tUixTQUFTLEdBQUcsQ0FBQyxDQUFELE1BQVE5TixPQUFLLENBQWIsTUFBb0I7QUFDcEN5SCxxQkFBYSxFQUFiQTtBQURvQyxPQUFwQixDQUFsQjtBQUlBOUssT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREE7O0FBRUEsVUFBSSxpQkFBaUJtUixTQUFTLENBQTlCLGtCQUFxQkEsRUFBckIsRUFBcUQ7QUFDbkQ7QUFDRDs7QUFFRDs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQW5SLE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLElBQ0VxRCxPQUFLLENBRFByRCxlQUVFbUQsVUFBUSxDQUZWbkQsY0FHRTtBQUFBLGVBQVcsS0FBSSxDQUFKLEtBQVgsS0FBVyxDQUFYO0FBSEZBO0FBTUFBLE9BQUMsQ0FBQyxLQUFGQSxPQUFDLENBQURBLElBQW1CcUQsT0FBSyxDQUF4QnJELG1CQUE0QyxZQUFNO0FBQ2hEQSxTQUFDLENBQUMsS0FBSSxDQUFOQSxRQUFDLENBQURBLEtBQXFCcUQsT0FBSyxDQUExQnJELGlCQUE0QyxpQkFBVztBQUNyRCxjQUFJQSxDQUFDLENBQUNDLEtBQUssQ0FBUEQsTUFBQyxDQUFEQSxJQUFtQixLQUFJLENBQTNCLFFBQUlBLENBQUosRUFBdUM7QUFDckMsaUJBQUksQ0FBSjtBQUNEO0FBSEhBO0FBREZBOztBQVFBLHlCQUFtQjtBQUFBLGVBQU0sS0FBSSxDQUFKLGFBQU4sYUFBTSxDQUFOO0FBQW5CO0FBQ0QsSzs7V0FFRDROLEksR0FBQUEscUJBQVk7QUFBQTs7QUFDVixpQkFBVztBQUNUM04sYUFBSyxDQUFMQTtBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFELFlBQWtCLEtBQXRCLGtCQUE2QztBQUMzQztBQUNEOztBQUVELFVBQU1vUixTQUFTLEdBQUdyUixDQUFDLENBQURBLE1BQVFxRCxPQUFLLENBQS9CLElBQWtCckQsQ0FBbEI7QUFFQUEsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREE7O0FBRUEsVUFBSSxDQUFDLEtBQUQsWUFBa0JxUixTQUFTLENBQS9CLGtCQUFzQkEsRUFBdEIsRUFBc0Q7QUFDcEQ7QUFDRDs7QUFFRDtBQUNBLFVBQU13QyxVQUFVLEdBQUc3VCxDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FBdEQsSUFBbUJ6RCxDQUFuQjs7QUFFQSxzQkFBZ0I7QUFDZDtBQUNEOztBQUVEOztBQUNBOztBQUVBQSxPQUFDLENBQURBLFFBQUMsQ0FBREEsS0FBZ0JxRCxPQUFLLENBQXJCckQ7QUFFQUEsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsYUFBNkJ5RCxXQUFTLENBQXRDekQ7QUFFQUEsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsS0FBcUJxRCxPQUFLLENBQTFCckQ7QUFDQUEsT0FBQyxDQUFDLEtBQUZBLE9BQUMsQ0FBREEsS0FBb0JxRCxPQUFLLENBQXpCckQ7O0FBR0Esc0JBQWdCO0FBQ2QsWUFBTWUsa0JBQWtCLEdBQUlaLElBQUksQ0FBSkEsaUNBQXNDLEtBQWxFLFFBQTRCQSxDQUE1QjtBQUVBSCxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxLQUNPRyxJQUFJLENBRFhILGdCQUM0QjtBQUFBLGlCQUFXLE1BQUksQ0FBSixXQUFYLEtBQVcsQ0FBWDtBQUQ1QkE7QUFIRixhQU1PO0FBQ0w7QUFDRDtBQUNGLEs7O1dBRURpRSxPLEdBQUFBLG1CQUFVO0FBQ1IsZUFBUyxLQUFULFVBQXdCLEtBQXhCLGlCQUNXO0FBQUEsZUFBaUJqRSxDQUFDLENBQURBLFdBQUMsQ0FBREEsS0FBakIsV0FBaUJBLENBQWpCO0FBRFg7QUFHQTs7Ozs7O0FBS0FBLE9BQUMsQ0FBREEsUUFBQyxDQUFEQSxLQUFnQnFELE9BQUssQ0FBckJyRDtBQUVBQSxPQUFDLENBQURBLFdBQWEsS0FBYkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLOztXQUVEOFQsWSxHQUFBQSx3QkFBZTtBQUNiO0FBQ0QsSyxDQUFBOzs7V0FJRHZLLFUsR0FBQUEsNEJBQW1CO0FBQ2pCeEgsWUFBTSxxQ0FBTkEsTUFBTSxDQUFOQTtBQUlBNUIsVUFBSSxDQUFKQTtBQUNBO0FBQ0QsSzs7V0FFRDRULDBCLEdBQUFBLHNDQUE2QjtBQUFBOztBQUMzQixVQUFJLDBCQUFKLFVBQXdDO0FBQ3RDLFlBQU1DLGtCQUFrQixHQUFHaFUsQ0FBQyxDQUFEQSxNQUFRcUQsT0FBSyxDQUF4QyxjQUEyQnJELENBQTNCO0FBRUFBLFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBOztBQUNBLFlBQUlnVSxrQkFBa0IsQ0FBdEIsa0JBQXlDO0FBQ3ZDO0FBQ0Q7O0FBRUQsb0NBQTRCdlEsV0FBUyxDQUFyQzs7QUFFQSxZQUFNd1EsdUJBQXVCLEdBQUc5VCxJQUFJLENBQUpBLGlDQUFzQyxLQUF0RSxRQUFnQ0EsQ0FBaEM7QUFFQUgsU0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsS0FBcUJHLElBQUksQ0FBekJILGdCQUEwQyxZQUFNO0FBQzlDLGdCQUFJLENBQUosMEJBQStCeUQsV0FBUyxDQUF4QztBQURGekQ7O0FBSUE7QUFoQkYsYUFpQk87QUFDTDtBQUNEO0FBQ0YsSzs7V0FFRGtVLFksR0FBQUEscUNBQTRCO0FBQUE7O0FBQzFCLFVBQU1MLFVBQVUsR0FBRzdULENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFVBQTBCeUQsV0FBUyxDQUF0RCxJQUFtQnpELENBQW5CO0FBQ0EsVUFBTW1VLFNBQVMsR0FBRyxlQUFlLDJCQUEyQmhSLFVBQVEsQ0FBbEQsVUFBZSxDQUFmLEdBQWxCOztBQUVBLFVBQUksQ0FBQyxjQUFELGNBQ0Esc0NBQXNDaVIsSUFBSSxDQUQ5QyxjQUM2RDtBQUMzRDtBQUNBM1QsZ0JBQVEsQ0FBUkEsaUJBQTBCLEtBQTFCQTtBQUNEOztBQUVEOztBQUNBOztBQUNBOztBQUVBLFVBQUlULENBQUMsQ0FBQyxLQUFGQSxPQUFDLENBQURBLFVBQXlCeUQsV0FBUyxDQUFsQ3pELGVBQUosV0FBaUU7QUFDL0RtVSxpQkFBUyxDQUFUQTtBQURGLGFBRU87QUFDTDtBQUNEOztBQUVELHNCQUFnQjtBQUNkaFUsWUFBSSxDQUFKQSxPQUFZLEtBQVpBO0FBQ0Q7O0FBRURILE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFVBQTBCeUQsV0FBUyxDQUFuQ3pEOztBQUVBLFVBQUksYUFBSixPQUF3QjtBQUN0QjtBQUNEOztBQUVELFVBQU1xVSxVQUFVLEdBQUcsQ0FBQyxDQUFELE1BQVFoUixPQUFLLENBQWIsT0FBcUI7QUFDdEN5SCxxQkFBYSxFQUFiQTtBQURzQyxPQUFyQixDQUFuQjs7QUFJQSxVQUFNd0osa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFlBQUksTUFBSSxDQUFKLFFBQUosT0FBd0I7QUFDdEIsZ0JBQUksQ0FBSjtBQUNEOztBQUNELGNBQUksQ0FBSjtBQUNBdFUsU0FBQyxDQUFDLE1BQUksQ0FBTkEsUUFBQyxDQUFEQTtBQUxGOztBQVFBLHNCQUFnQjtBQUNkLFlBQU1lLGtCQUFrQixHQUFJWixJQUFJLENBQUpBLGlDQUFzQyxLQUFsRSxPQUE0QkEsQ0FBNUI7QUFFQUgsU0FBQyxDQUFDLEtBQUZBLE9BQUMsQ0FBREEsS0FDT0csSUFBSSxDQURYSDtBQUhGLGFBTU87QUFDTHNVLDBCQUFrQjtBQUNuQjtBQUNGLEs7O1dBRURDLGEsR0FBQUEseUJBQWdCO0FBQUE7O0FBQ2R2VSxPQUFDLENBQURBLFFBQUMsQ0FBREEsS0FDT3FELE9BQUssQ0FEWnJEO0FBQUFBLFVBRU1xRCxPQUFLLENBRlhyRCxTQUVxQixpQkFBVztBQUM1QixZQUFJUyxRQUFRLEtBQUtSLEtBQUssQ0FBbEJRLFVBQ0EsTUFBSSxDQUFKLGFBQWtCUixLQUFLLENBRHZCUSxVQUVBVCxDQUFDLENBQUMsTUFBSSxDQUFOQSxRQUFDLENBQURBLEtBQXFCQyxLQUFLLENBQTFCRCxtQkFGSixHQUVxRDtBQUNuRCxnQkFBSSxDQUFKO0FBQ0Q7QUFQTEE7QUFTRCxLOztXQUVEd1UsZSxHQUFBQSwyQkFBa0I7QUFBQTs7QUFDaEIsVUFBSSxpQkFBaUIsYUFBckIsVUFBNEM7QUFDMUN4VSxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxJQUFvQnFELE9BQUssQ0FBekJyRCxpQkFBMkMsaUJBQVc7QUFDcEQsY0FBSUMsS0FBSyxDQUFMQSxVQUFKLGtCQUFvQztBQUNsQyxrQkFBSSxDQUFKO0FBQ0Q7QUFISEQ7QUFERixhQU1PLElBQUksQ0FBQyxLQUFMLFVBQW9CO0FBQ3pCQSxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxLQUFxQnFELE9BQUssQ0FBMUJyRDtBQUNEO0FBQ0YsSzs7V0FFRHlVLGUsR0FBQUEsMkJBQWtCO0FBQUE7O0FBQ2hCLFVBQUksS0FBSixVQUFtQjtBQUNqQnpVLFNBQUMsQ0FBREEsTUFBQyxDQUFEQSxJQUFhcUQsT0FBSyxDQUFsQnJELFFBQTJCO0FBQUEsaUJBQVcsTUFBSSxDQUFKLGFBQVgsS0FBVyxDQUFYO0FBQTNCQTtBQURGLGFBRU87QUFDTEEsU0FBQyxDQUFEQSxNQUFDLENBQURBLEtBQWNxRCxPQUFLLENBQW5CckQ7QUFDRDtBQUNGLEs7O1dBRUQwVSxVLEdBQUFBLHNCQUFhO0FBQUE7O0FBQ1g7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EseUJBQW1CLFlBQU07QUFDdkIxVSxTQUFDLENBQUNTLFFBQVEsQ0FBVlQsSUFBQyxDQUFEQSxhQUE2QnlELFdBQVMsQ0FBdEN6RDs7QUFDQSxjQUFJLENBQUo7O0FBQ0EsY0FBSSxDQUFKOztBQUNBQSxTQUFDLENBQUMsTUFBSSxDQUFOQSxRQUFDLENBQURBLFNBQXlCcUQsT0FBSyxDQUE5QnJEO0FBSkY7QUFNRCxLOztXQUVEMlUsZSxHQUFBQSwyQkFBa0I7QUFDaEIsVUFBSSxLQUFKLFdBQW9CO0FBQ2xCM1UsU0FBQyxDQUFDLEtBQUZBLFNBQUMsQ0FBREE7QUFDQTtBQUNEO0FBQ0YsSzs7V0FFRDRVLGEsR0FBQUEsaUNBQXdCO0FBQUE7O0FBQ3RCLFVBQU1DLE9BQU8sR0FBRzdVLENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFVBQTBCeUQsV0FBUyxDQUFuQ3pELFFBQ1p5RCxXQUFTLENBREd6RCxPQUFoQjs7QUFHQSxVQUFJLGlCQUFpQixhQUFyQixVQUE0QztBQUMxQyx5QkFBaUJTLFFBQVEsQ0FBUkEsY0FBakIsS0FBaUJBLENBQWpCO0FBQ0EsbUNBQTJCZ0QsV0FBUyxDQUFwQzs7QUFFQSxxQkFBYTtBQUNYO0FBQ0Q7O0FBRUR6RCxTQUFDLENBQUMsS0FBRkEsU0FBQyxDQUFEQSxVQUEyQlMsUUFBUSxDQUFuQ1Q7QUFFQUEsU0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsSUFBb0JxRCxPQUFLLENBQXpCckQsZUFBeUMsaUJBQVc7QUFDbEQsY0FBSSxNQUFJLENBQVIsc0JBQStCO0FBQzdCLGtCQUFJLENBQUo7QUFDQTtBQUNEOztBQUNELGNBQUlDLEtBQUssQ0FBTEEsV0FBaUJBLEtBQUssQ0FBMUIsZUFBMEM7QUFDeEM7QUFDRDs7QUFFRCxnQkFBSSxDQUFKO0FBVEZEOztBQVlBLHFCQUFhO0FBQ1hHLGNBQUksQ0FBSkEsT0FBWSxLQUFaQTtBQUNEOztBQUVESCxTQUFDLENBQUMsS0FBRkEsU0FBQyxDQUFEQSxVQUEyQnlELFdBQVMsQ0FBcEN6RDs7QUFFQSxZQUFJLENBQUosVUFBZTtBQUNiO0FBQ0Q7O0FBRUQsWUFBSSxDQUFKLFNBQWM7QUFDWjhVLGtCQUFRO0FBQ1I7QUFDRDs7QUFFRCxZQUFNQywwQkFBMEIsR0FBRzVVLElBQUksQ0FBSkEsaUNBQXNDLEtBQXpFLFNBQW1DQSxDQUFuQztBQUVBSCxTQUFDLENBQUMsS0FBRkEsU0FBQyxDQUFEQSxLQUNPRyxJQUFJLENBRFhIO0FBdkNGLGFBMENPLElBQUksQ0FBQyxLQUFELFlBQWtCLEtBQXRCLFdBQXNDO0FBQzNDQSxTQUFDLENBQUMsS0FBRkEsU0FBQyxDQUFEQSxhQUE4QnlELFdBQVMsQ0FBdkN6RDs7QUFFQSxZQUFNZ1YsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLGdCQUFJLENBQUo7O0FBQ0Esd0JBQWM7QUFDWkYsb0JBQVE7QUFDVDtBQUpIOztBQU9BLFlBQUk5VSxDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FBdkMsSUFBSXpELENBQUosRUFBK0M7QUFDN0MsY0FBTStVLDJCQUEwQixHQUFHNVUsSUFBSSxDQUFKQSxpQ0FBc0MsS0FBekUsU0FBbUNBLENBQW5DOztBQUVBSCxXQUFDLENBQUMsS0FBRkEsU0FBQyxDQUFEQSxLQUNPRyxJQUFJLENBRFhIO0FBSEYsZUFNTztBQUNMZ1Ysd0JBQWM7QUFDZjtBQWxCSSxhQW1CQSxjQUFjO0FBQ25CRixnQkFBUTtBQUNUO0FBQ0YsSyxDQUFBO0FBR0Q7QUFDQTtBQUNBOzs7V0FFQUcsYSxHQUFBQSx5QkFBZ0I7QUFDZCxVQUFNQyxrQkFBa0IsR0FDdEIsNkJBQTZCelUsUUFBUSxDQUFSQSxnQkFEL0I7O0FBR0EsVUFBSSxDQUFDLEtBQUQsc0JBQUosb0JBQW9EO0FBQ2xELDBDQUFxQyxLQUFyQyxlQUFxQyxHQUFyQztBQUNEOztBQUVELFVBQUksMkJBQTJCLENBQS9CLG9CQUFvRDtBQUNsRCwyQ0FBc0MsS0FBdEMsZUFBc0MsR0FBdEM7QUFDRDtBQUNGLEs7O1dBRUQwVSxpQixHQUFBQSw2QkFBb0I7QUFDbEI7QUFDQTtBQUNELEs7O1dBRURDLGUsR0FBQUEsMkJBQWtCO0FBQ2hCLFVBQU1DLElBQUksR0FBRzVVLFFBQVEsQ0FBUkEsS0FBYixxQkFBYUEsRUFBYjtBQUNBLGdDQUEwQjRVLElBQUksQ0FBSkEsT0FBWUEsSUFBSSxDQUFoQkEsUUFBeUJ6TSxNQUFNLENBQXpEO0FBQ0EsNkJBQXVCLEtBQXZCLGtCQUF1QixFQUF2QjtBQUNELEs7O1dBRUQwTSxhLEdBQUFBLHlCQUFnQjtBQUFBOztBQUNkLFVBQUksS0FBSixvQkFBNkI7QUFDM0I7QUFDQTtBQUNBLFlBQU1DLFlBQVksR0FBRyxjQUFjOVUsUUFBUSxDQUFSQSxpQkFBMEIwQyxVQUFRLENBQXJFLGFBQW1DMUMsQ0FBZCxDQUFyQjtBQUNBLFlBQU0rVSxhQUFhLEdBQUcsY0FBYy9VLFFBQVEsQ0FBUkEsaUJBQTBCMEMsVUFBUSxDQUozQyxjQUlTMUMsQ0FBZCxDQUF0QixDQUoyQjs7QUFPM0JULFNBQUMsQ0FBREEsWUFBQyxDQUFEQSxNQUFxQiwwQkFBb0I7QUFDdkMsY0FBTXlWLGFBQWEsR0FBRzdVLE9BQU8sQ0FBUEEsTUFBdEI7QUFDQSxjQUFNOFUsaUJBQWlCLEdBQUcxVixDQUFDLENBQURBLE9BQUMsQ0FBREEsS0FBMUIsZUFBMEJBLENBQTFCO0FBQ0FBLFdBQUMsQ0FBREEsT0FBQyxDQUFEQSwyREFFMkJrQixVQUFVLENBQVZBLGlCQUFVLENBQVZBLEdBQWdDLE9BQUksQ0FGL0RsQixlQUUyQmtCLEdBRjNCbEI7QUFWeUIsU0FPM0JBLEVBUDJCOztBQWdCM0JBLFNBQUMsQ0FBREEsYUFBQyxDQUFEQSxNQUFzQiwwQkFBb0I7QUFDeEMsY0FBTTJWLFlBQVksR0FBRy9VLE9BQU8sQ0FBUEEsTUFBckI7QUFDQSxjQUFNZ1YsZ0JBQWdCLEdBQUc1VixDQUFDLENBQURBLE9BQUMsQ0FBREEsS0FBekIsY0FBeUJBLENBQXpCO0FBQ0FBLFdBQUMsQ0FBREEsT0FBQyxDQUFEQSx3REFFMEJrQixVQUFVLENBQVZBLGdCQUFVLENBQVZBLEdBQStCLE9BQUksQ0FGN0RsQixlQUUwQmtCLEdBRjFCbEI7QUFuQnlCLFNBZ0IzQkEsRUFoQjJCOztBQXlCM0IsWUFBTXlWLGFBQWEsR0FBR2hWLFFBQVEsQ0FBUkEsV0FBdEI7QUFDQSxZQUFNaVYsaUJBQWlCLEdBQUcxVixDQUFDLENBQUNTLFFBQVEsQ0FBVlQsSUFBQyxDQUFEQSxLQUExQixlQUEwQkEsQ0FBMUI7QUFDQUEsU0FBQyxDQUFDUyxRQUFRLENBQVZULElBQUMsQ0FBREEsMkRBRTJCa0IsVUFBVSxDQUFWQSxpQkFBVSxDQUFWQSxHQUFnQyxLQUYzRGxCLGVBRTJCa0IsR0FGM0JsQjtBQUdEOztBQUVEQSxPQUFDLENBQUNTLFFBQVEsQ0FBVlQsSUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FBbkN6RDtBQUNELEs7O1dBRUQ2VixlLEdBQUFBLDJCQUFrQjtBQUNoQjtBQUNBLFVBQU1OLFlBQVksR0FBRyxjQUFjOVUsUUFBUSxDQUFSQSxpQkFBMEIwQyxVQUFRLENBQXJFLGFBQW1DMUMsQ0FBZCxDQUFyQjtBQUNBVCxPQUFDLENBQURBLFlBQUMsQ0FBREEsTUFBcUIsMEJBQW9CO0FBQ3ZDLFlBQU04VixPQUFPLEdBQUc5VixDQUFDLENBQURBLE9BQUMsQ0FBREEsTUFBaEIsZUFBZ0JBLENBQWhCO0FBQ0FBLFNBQUMsQ0FBREEsT0FBQyxDQUFEQTtBQUNBWSxlQUFPLENBQVBBLHFCQUE2QmtWLE9BQU8sYUFBcENsVjtBQU5jLE9BR2hCWixFQUhnQjs7QUFVaEIsVUFBTStWLFFBQVEsR0FBRyxjQUFjdFYsUUFBUSxDQUFSQSxzQkFBNkIwQyxVQUFRLENBQXBFLGNBQStCMUMsQ0FBZCxDQUFqQjtBQUNBVCxPQUFDLENBQURBLFFBQUMsQ0FBREEsTUFBaUIsMEJBQW9CO0FBQ25DLFlBQU1nVyxNQUFNLEdBQUdoVyxDQUFDLENBQURBLE9BQUMsQ0FBREEsTUFBZixjQUFlQSxDQUFmOztBQUNBLFlBQUksa0JBQUosYUFBbUM7QUFDakNBLFdBQUMsQ0FBREEsT0FBQyxDQUFEQTtBQUNEO0FBZmEsT0FXaEJBLEVBWGdCOztBQW1CaEIsVUFBTThWLE9BQU8sR0FBRzlWLENBQUMsQ0FBQ1MsUUFBUSxDQUFWVCxJQUFDLENBQURBLE1BQWhCLGVBQWdCQSxDQUFoQjtBQUNBQSxPQUFDLENBQUNTLFFBQVEsQ0FBVlQsSUFBQyxDQUFEQTtBQUNBUyxjQUFRLENBQVJBLDBCQUFtQ3FWLE9BQU8sYUFBMUNyVjtBQUNELEs7O1dBRUR3VixrQixHQUFBQSw4QkFBcUI7QUFBRTtBQUNyQixVQUFNQyxTQUFTLEdBQUd6VixRQUFRLENBQVJBLGNBQWxCLEtBQWtCQSxDQUFsQjtBQUNBeVYsZUFBUyxDQUFUQSxZQUFzQnpTLFdBQVMsQ0FBL0J5UztBQUNBelYsY0FBUSxDQUFSQTtBQUNBLFVBQU0wVixjQUFjLEdBQUdELFNBQVMsQ0FBVEEsZ0NBQTBDQSxTQUFTLENBQTFFO0FBQ0F6VixjQUFRLENBQVJBO0FBQ0E7QUFDRCxLLENBQUE7OztVQUlNK0QsZ0IsR0FBUCxpREFBK0M7QUFDN0MsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBSUUsSUFBSSxHQUFHMUUsQ0FBQyxDQUFEQSxJQUFDLENBQURBLE1BQVgsVUFBV0EsQ0FBWDs7QUFDQSxZQUFNOEwsT0FBTyxxQ0FFUjlMLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxDQUZRLElBRVJBLEVBRlEsTUFHUixrREFITCxFQUFhLENBQWI7O0FBTUEsWUFBSSxDQUFKLE1BQVc7QUFDVDBFLGNBQUksR0FBRyxnQkFBUEEsT0FBTyxDQUFQQTtBQUNBMUUsV0FBQyxDQUFEQSxJQUFDLENBQURBO0FBQ0Q7O0FBRUQsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU8wRSxJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsa0JBQU0sOENBQU4sSUFBTSxDQUFOO0FBQ0Q7O0FBQ0RBLGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUpGLGVBS08sSUFBSW9ILE9BQU8sQ0FBWCxNQUFrQjtBQUN2QnBILGNBQUksQ0FBSkE7QUFDRDtBQXBCSCxPQUFPLENBQVA7QUFzQkQsSzs7OzswQkFsZG9CO0FBQ25CO0FBQ0Q7OzswQkFFb0I7QUFDbkI7QUFDRDs7Ozs7QUErY0g7Ozs7Ozs7QUFNQTFFLEdBQUMsQ0FBREEsUUFBQyxDQUFEQSxJQUFlcUQsT0FBSyxDQUFwQnJELGdCQUFxQ21ELFVBQVEsQ0FBN0NuRCxhQUEyRCxpQkFBaUI7QUFBQTs7QUFDMUU7QUFDQSxRQUFNVyxRQUFRLEdBQUdSLElBQUksQ0FBSkEsdUJBQWpCLElBQWlCQSxDQUFqQjs7QUFFQSxrQkFBYztBQUNaOEwsWUFBTSxHQUFHeEwsUUFBUSxDQUFSQSxjQUFUd0wsUUFBU3hMLENBQVR3TDtBQUNEOztBQUVELFFBQU1sSyxNQUFNLEdBQUcvQixDQUFDLENBQURBLE1BQUMsQ0FBREEsa0RBRVJBLENBQUMsQ0FBREEsTUFBQyxDQUFEQSxDQUZRQSxJQUVSQSxFQUZRQSxNQUdSQSxDQUFDLENBQURBLElBQUMsQ0FBREEsQ0FIUCxJQUdPQSxFQUhRQSxDQUFmOztBQU1BLFFBQUksd0JBQXdCLGlCQUE1QixRQUFxRDtBQUNuREMsV0FBSyxDQUFMQTtBQUNEOztBQUVELFFBQU0yTyxPQUFPLEdBQUcsQ0FBQyxDQUFELE1BQUMsQ0FBRCxLQUFjdkwsT0FBSyxDQUFuQixNQUEwQixxQkFBZTtBQUN2RCxVQUFJOE4sU0FBUyxDQUFiLGtCQUFJQSxFQUFKLEVBQW9DO0FBQ2xDO0FBQ0E7QUFDRDs7QUFFRHZDLGFBQU8sQ0FBUEEsSUFBWXZMLE9BQUssQ0FBakJ1TCxRQUEwQixZQUFNO0FBQzlCLFlBQUk1TyxDQUFDLENBQURBLE9BQUMsQ0FBREEsSUFBSixVQUFJQSxDQUFKLEVBQTRCO0FBQzFCLGlCQUFJLENBQUo7QUFDRDtBQUhINE87QUFORixLQUFnQixDQUFoQjs7QUFhQWdGLFNBQUssQ0FBTEEsc0JBQTRCNVQsQ0FBQyxDQUE3QjRULE1BQTZCLENBQTdCQTtBQS9CRjVUO0FBa0NBOzs7Ozs7QUFNQUEsR0FBQyxDQUFEQSxhQUFhNFQsS0FBSyxDQUFsQjVUO0FBQ0FBLEdBQUMsQ0FBREE7O0FBQ0FBLEdBQUMsQ0FBREEsd0JBQXdCLFlBQU07QUFDNUJBLEtBQUMsQ0FBREE7QUFDQSxXQUFPNFQsS0FBSyxDQUFaO0FBRkY1VDtBQ2xtQkE7Ozs7Ozs7O0FBT0EsTUFBTW9XLFFBQVEsR0FBRyx3RUFBakIsWUFBaUIsQ0FBakI7QUFXQSxNQUFNQyxzQkFBc0IsR0FBNUI7QUFFTyxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QjtBQUNBLFNBQUssdUNBRnlCLHNCQUV6QixDQUZ5QjtBQUc5QkMsS0FBQyxFQUFFLDRCQUgyQixLQUczQixDQUgyQjtBQUk5QkMsUUFBSSxFQUowQjtBQUs5QkMsS0FBQyxFQUw2QjtBQU05QkMsTUFBRSxFQU40QjtBQU85QkMsT0FBRyxFQVAyQjtBQVE5QkMsUUFBSSxFQVIwQjtBQVM5QkMsT0FBRyxFQVQyQjtBQVU5QkMsTUFBRSxFQVY0QjtBQVc5QkMsTUFBRSxFQVg0QjtBQVk5QkMsTUFBRSxFQVo0QjtBQWE5QkMsTUFBRSxFQWI0QjtBQWM5QkMsTUFBRSxFQWQ0QjtBQWU5QkMsTUFBRSxFQWY0QjtBQWdCOUJDLE1BQUUsRUFoQjRCO0FBaUI5QkMsTUFBRSxFQWpCNEI7QUFrQjlCclIsS0FBQyxFQWxCNkI7QUFtQjlCc1IsT0FBRyxFQUFFLGlDQW5CeUIsUUFtQnpCLENBbkJ5QjtBQW9COUJDLE1BQUUsRUFwQjRCO0FBcUI5QkMsTUFBRSxFQXJCNEI7QUFzQjlCQyxLQUFDLEVBdEI2QjtBQXVCOUJDLE9BQUcsRUF2QjJCO0FBd0I5QkMsS0FBQyxFQXhCNkI7QUF5QjlCQyxTQUFLLEVBekJ5QjtBQTBCOUJDLFFBQUksRUExQjBCO0FBMkI5QkMsT0FBRyxFQTNCMkI7QUE0QjlCQyxPQUFHLEVBNUIyQjtBQTZCOUJDLFVBQU0sRUE3QndCO0FBOEI5QkMsS0FBQyxFQTlCNkI7QUErQjlCQyxNQUFFLEVBQUU7QUEvQjBCLEdBQXpCO0FBa0NQOzs7Ozs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBdEI7QUFFQTs7Ozs7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQXRCOztBQUVBLHdEQUFzRDtBQUNwRCxRQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBSkEsU0FBakIsV0FBaUJBLEVBQWpCOztBQUVBLFFBQUlDLG9CQUFvQixDQUFwQkEsc0JBQTJDLENBQS9DLEdBQW1EO0FBQ2pELFVBQUluQyxRQUFRLENBQVJBLHNCQUErQixDQUFuQyxHQUF1QztBQUNyQyxlQUFPN1UsT0FBTyxDQUFDK1csSUFBSSxDQUFKQSxxQ0FBMENBLElBQUksQ0FBSkEsZ0JBQXpELGdCQUF5REEsQ0FBM0MsQ0FBZDtBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsUUFBTUUsTUFBTSxHQUFHLG9CQUFvQixDQUFwQixPQUE0QjtBQUFBLGFBQWVDLFNBQVMsWUFBeEI7QUFYUyxLQVdyQyxDQUFmLENBWG9EOztBQWNwRCxTQUFLLElBQUl6UyxDQUFDLEdBQUwsR0FBVzBTLENBQUMsR0FBR0YsTUFBTSxDQUExQixRQUFtQ3hTLENBQUMsR0FBcEMsR0FBMENBLENBQTFDLElBQStDO0FBQzdDLFVBQUlxUyxRQUFRLENBQVJBLE1BQWVHLE1BQU0sQ0FBekIsQ0FBeUIsQ0FBckJILENBQUosRUFBK0I7QUFDN0I7QUFDRDtBQUNGOztBQUVEO0FBQ0Q7O0FBRU0sMkRBQXlEO0FBQzlELFFBQUlNLFVBQVUsQ0FBVkEsV0FBSixHQUE2QjtBQUMzQjtBQUNEOztBQUVELFFBQUlDLFVBQVUsSUFBSSxzQkFBbEIsWUFBb0Q7QUFDbEQsYUFBT0EsVUFBVSxDQUFqQixVQUFpQixDQUFqQjtBQUNEOztBQUVELFFBQU1DLFNBQVMsR0FBRyxJQUFJalEsTUFBTSxDQUE1QixTQUFrQixFQUFsQjtBQUNBLFFBQU1rUSxlQUFlLEdBQUdELFNBQVMsQ0FBVEEsNEJBQXhCLFdBQXdCQSxDQUF4QjtBQUNBLFFBQU1FLGFBQWEsR0FBR3BYLE1BQU0sQ0FBTkEsS0FBdEIsU0FBc0JBLENBQXRCO0FBQ0EsUUFBTW9VLFFBQVEsR0FBRyxjQUFjK0MsZUFBZSxDQUFmQSxzQkFBL0IsR0FBK0JBLENBQWQsQ0FBakI7O0FBWjhEO0FBZTVELFVBQU1FLEVBQUUsR0FBR2pELFFBQVEsQ0FBbkIsQ0FBbUIsQ0FBbkI7QUFDQSxVQUFNa0QsTUFBTSxHQUFHRCxFQUFFLENBQUZBLFNBQWYsV0FBZUEsRUFBZjs7QUFFQSxVQUFJRCxhQUFhLENBQWJBLFFBQXNCQyxFQUFFLENBQUZBLFNBQXRCRCxXQUFzQkMsRUFBdEJELE1BQXFELENBQXpELEdBQTZEO0FBQzNEQyxVQUFFLENBQUZBO0FBRUE7QUFDRDs7QUFFRCxVQUFNRSxhQUFhLEdBQUcsY0FBY0YsRUFBRSxDQUF0QyxVQUFzQixDQUF0QjtBQUNBLFVBQU1HLHFCQUFxQixHQUFHLFVBQVVDLFNBQVMsQ0FBVEEsR0FBUyxDQUFUQSxJQUFWLElBQWdDQSxTQUFTLENBQVRBLE1BQVMsQ0FBVEEsSUFBOUQsRUFBOEIsQ0FBOUI7QUFFQUYsbUJBQWEsQ0FBYkEsUUFBc0IsZ0JBQVU7QUFDOUIsWUFBSSxDQUFDRyxnQkFBZ0IsT0FBckIscUJBQXFCLENBQXJCLEVBQW9EO0FBQ2xETCxZQUFFLENBQUZBLGdCQUFtQlYsSUFBSSxDQUF2QlU7QUFDRDtBQUhIRTtBQTNCNEQ7O0FBYzlELFNBQUssSUFBSWxULENBQUMsR0FBTCxHQUFXQyxHQUFHLEdBQUc4UCxRQUFRLENBQTlCLFFBQXVDL1AsQ0FBQyxHQUF4QyxLQUFnREEsQ0FBaEQsSUFBcUQ7QUFBQSx1QkFBNUNBLENBQTRDOztBQUFBLCtCQU9qRDtBQVdIOztBQUVELFdBQU84UyxlQUFlLENBQWZBLEtBQVA7QUFDRDtBQy9HRDs7Ozs7OztBQU1BLE1BQU1qVyxNQUFJLEdBQVY7QUFDQSxNQUFNQyxTQUFPLEdBQWI7QUFDQSxNQUFNQyxVQUFRLEdBQWQ7QUFDQSxNQUFNQyxXQUFTLFNBQWY7QUFDQSxNQUFNRSxvQkFBa0IsR0FBTWxELENBQUMsQ0FBREEsR0FBOUIsTUFBOEJBLENBQTlCO0FBQ0EsTUFBTXNaLFlBQVksR0FBbEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBTSw4Q0FBOUIsR0FBOEIsQ0FBOUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRywwQkFBOUIsWUFBOEIsQ0FBOUI7QUFFQSxNQUFNM1MsYUFBVyxHQUFHO0FBQ2xCNFMsYUFBUyxFQURTO0FBRWxCQyxZQUFRLEVBRlU7QUFHbEJDLFNBQUssRUFIYTtBQUlsQjdMLFdBQU8sRUFKVztBQUtsQjhMLFNBQUssRUFMYTtBQU1sQkMsUUFBSSxFQU5jO0FBT2xCbFosWUFBUSxFQVBVO0FBUWxCK1EsYUFBUyxFQVJTO0FBU2xCakIsVUFBTSxFQVRZO0FBVWxCcUosYUFBUyxFQVZTO0FBV2xCQyxxQkFBaUIsRUFYQztBQVlsQnBKLFlBQVEsRUFaVTtBQWFsQnFKLFlBQVEsRUFiVTtBQWNsQnBCLGNBQVUsRUFkUTtBQWVsQlEsYUFBUyxFQWZTO0FBZ0JsQnRJLGdCQUFZLEVBQVE7QUFoQkYsR0FBcEI7QUFtQkEsTUFBTVosZUFBYSxHQUFHO0FBQ3BCK0osUUFBSSxFQURnQjtBQUVwQjlKLE9BQUcsRUFGaUI7QUFHcEJqSixTQUFLLEVBSGU7QUFJcEJtSixVQUFNLEVBSmM7QUFLcEJwSixRQUFJLEVBQUs7QUFMVyxHQUF0QjtBQVFBLE1BQU1YLFNBQU8sR0FBRztBQUNkbVQsYUFBUyxFQURLO0FBRWRDLFlBQVEsRUFBWSx1RUFGTjtBQUtkNUwsV0FBTyxFQUxPO0FBTWQ2TCxTQUFLLEVBTlM7QUFPZEMsU0FBSyxFQVBTO0FBUWRDLFFBQUksRUFSVTtBQVNkbFosWUFBUSxFQVRNO0FBVWQrUSxhQUFTLEVBVks7QUFXZGpCLFVBQU0sRUFYUTtBQVlkcUosYUFBUyxFQVpLO0FBYWRDLHFCQUFpQixFQWJIO0FBY2RwSixZQUFRLEVBZE07QUFlZHFKLFlBQVEsRUFmTTtBQWdCZHBCLGNBQVUsRUFoQkk7QUFpQmRRLGFBQVMsRUFqQks7QUFrQmR0SSxnQkFBWSxFQUFRO0FBbEJOLEdBQWhCO0FBcUJBLE1BQU1vSixVQUFVLEdBQUc7QUFDakJ0VyxRQUFJLEVBRGE7QUFFakJ1VyxPQUFHLEVBQUk7QUFGVSxHQUFuQjtBQUtBLE1BQU05VyxPQUFLLEdBQUc7QUFDWmlKLFFBQUksV0FEUTtBQUVaQyxVQUFNLGFBRk07QUFHWjNJLFFBQUksV0FIUTtBQUlaeUksU0FBSyxZQUpPO0FBS1orTixZQUFRLGVBTEk7QUFNWmhMLFNBQUssWUFOTztBQU9ad0QsV0FBTyxjQVBLO0FBUVp5SCxZQUFRLGVBUkk7QUFTWi9TLGNBQVUsaUJBVEU7QUFVWkMsY0FBVSxpQkFBZ0J2RTtBQVZkLEdBQWQ7QUFhQSxNQUFNUyxXQUFTLEdBQUc7QUFDaEJFLFFBQUksRUFEWTtBQUVoQkMsUUFBSSxFQUFHO0FBRlMsR0FBbEI7QUFLQSxNQUFNVCxVQUFRLEdBQUc7QUFDZm1YLFdBQU8sRUFEUTtBQUVmQyxpQkFBYSxFQUZFO0FBR2ZDLFNBQUssRUFBVztBQUhELEdBQWpCO0FBTUEsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFNBQUssRUFEUztBQUVkM1YsU0FBSyxFQUZTO0FBR2RxSyxTQUFLLEVBSFM7QUFJZHVMLFVBQU0sRUFBRztBQUpLLEdBQWhCO0FBUUE7Ozs7OztNQU1NQzs7O0FBQ0osc0NBQTZCO0FBQzNCLFVBQUksa0JBQUosYUFBbUM7QUFDakMsY0FBTSxjQUFOLGtFQUFNLENBQU47QUFGeUI7OztBQU0zQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQVYyQixJQVUzQixDQVYyQjs7QUFhM0I7QUFDQSxvQkFBZSxnQkFBZixNQUFlLENBQWY7QUFDQTs7QUFFQTtBQUNELEssQ0FBQTs7O29DQWdDRDs7V0FFQUMsTSxHQUFBQSxrQkFBUztBQUNQO0FBQ0QsSzs7V0FFREMsTyxHQUFBQSxtQkFBVTtBQUNSO0FBQ0QsSzs7V0FFREMsYSxHQUFBQSx5QkFBZ0I7QUFDZCx3QkFBa0IsQ0FBQyxLQUFuQjtBQUNELEs7O1dBRUR2VixNLEdBQUFBLHVCQUFjO0FBQ1osVUFBSSxDQUFDLEtBQUwsWUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxpQkFBVztBQUNULFlBQU13VixPQUFPLEdBQUcsaUJBQWhCO0FBQ0EsWUFBSTVJLE9BQU8sR0FBR3BTLENBQUMsQ0FBQ0MsS0FBSyxDQUFQRCxhQUFDLENBQURBLE1BQWQsT0FBY0EsQ0FBZDs7QUFFQSxZQUFJLENBQUosU0FBYztBQUNab1MsaUJBQU8sR0FBRyxJQUFJLEtBQUosWUFDUm5TLEtBQUssQ0FERyxlQUVSLEtBRkZtUyxrQkFFRSxFQUZRLENBQVZBO0FBSUFwUyxXQUFDLENBQUNDLEtBQUssQ0FBUEQsYUFBQyxDQUFEQTtBQUNEOztBQUVEb1MsZUFBTyxDQUFQQSx1QkFBK0IsQ0FBQ0EsT0FBTyxDQUFQQSxlQUFoQ0E7O0FBRUEsWUFBSUEsT0FBTyxDQUFYLG9CQUFJQSxFQUFKLEVBQW9DO0FBQ2xDQSxpQkFBTyxDQUFQQTtBQURGLGVBRU87QUFDTEEsaUJBQU8sQ0FBUEE7QUFDRDtBQWxCSCxhQW1CTztBQUNMLFlBQUlwUyxDQUFDLENBQUMsS0FBRkEsYUFBRSxFQUFELENBQURBLFVBQWlDeUQsV0FBUyxDQUE5QyxJQUFJekQsQ0FBSixFQUFzRDtBQUNwRDs7QUFDQTtBQUNEOztBQUVEO0FBQ0Q7QUFDRixLOztXQUVEaUUsTyxHQUFBQSxtQkFBVTtBQUNSOEYsa0JBQVksQ0FBQyxLQUFiQSxRQUFZLENBQVpBO0FBRUEvSixPQUFDLENBQURBLFdBQWEsS0FBYkEsU0FBMkIsaUJBQTNCQTtBQUVBQSxPQUFDLENBQUMsS0FBRkEsT0FBQyxDQUFEQSxLQUFvQixpQkFBcEJBO0FBQ0FBLE9BQUMsQ0FBQyxLQUFGQSxPQUFDLENBQURBLHdDQUF1RCxLQUF2REE7O0FBRUEsVUFBSSxLQUFKLEtBQWM7QUFDWkEsU0FBQyxDQUFDLEtBQUZBLEdBQUMsQ0FBREE7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJLEtBQUosU0FBa0I7QUFDaEI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNELEs7O1dBRURvTixJLEdBQUFBLGdCQUFPO0FBQUE7O0FBQ0wsVUFBSXBOLENBQUMsQ0FBQyxLQUFGQSxPQUFDLENBQURBLG9CQUFKLFFBQStDO0FBQzdDLGNBQU0sVUFBTixxQ0FBTSxDQUFOO0FBQ0Q7O0FBRUQsVUFBTW1SLFNBQVMsR0FBR25SLENBQUMsQ0FBREEsTUFBUSx1QkFBMUIsSUFBa0JBLENBQWxCOztBQUNBLFVBQUksd0JBQXdCLEtBQTVCLFlBQTZDO0FBQzNDQSxTQUFDLENBQUMsS0FBRkEsT0FBQyxDQUFEQTtBQUVBLFlBQU1pYixVQUFVLEdBQUc5YSxJQUFJLENBQUpBLGVBQW9CLEtBQXZDLE9BQW1CQSxDQUFuQjtBQUNBLFlBQU0rYSxVQUFVLEdBQUdsYixDQUFDLENBQURBLFNBQ2pCaWIsVUFBVSxLQUFWQSxvQkFBbUMsMkJBRGxCamIsaUJBRWpCLEtBRkYsT0FBbUJBLENBQW5COztBQUtBLFlBQUltUixTQUFTLENBQVRBLHdCQUFrQyxDQUF0QyxZQUFtRDtBQUNqRDtBQUNEOztBQUVELFlBQU1nSyxHQUFHLEdBQUssS0FBZCxhQUFjLEVBQWQ7QUFDQSxZQUFNQyxLQUFLLEdBQUdqYixJQUFJLENBQUpBLE9BQVksaUJBQTFCLElBQWNBLENBQWQ7QUFFQWdiLFdBQUcsQ0FBSEE7QUFDQTtBQUVBOztBQUVBLFlBQUksWUFBSixXQUEyQjtBQUN6Qm5iLFdBQUMsQ0FBREEsR0FBQyxDQUFEQSxVQUFnQnlELFdBQVMsQ0FBekJ6RDtBQUNEOztBQUVELFlBQU0wUixTQUFTLEdBQUksT0FBTyxZQUFQLDJCQUNmLHNDQUFzQyxLQUR2QixPQUNmLENBRGUsR0FFZixZQUZKOztBQUlBLFlBQU0ySixVQUFVLEdBQUcsb0JBQW5CLFNBQW1CLENBQW5COztBQUNBOztBQUVBLFlBQU12QixTQUFTLEdBQUcsS0FBbEIsYUFBa0IsRUFBbEI7O0FBQ0E5WixTQUFDLENBQURBLEdBQUMsQ0FBREEsTUFBWSxpQkFBWkE7O0FBRUEsWUFBSSxDQUFDQSxDQUFDLENBQURBLFNBQVcsMkJBQVhBLGlCQUF1RCxLQUE1RCxHQUFLQSxDQUFMLEVBQXVFO0FBQ3JFQSxXQUFDLENBQURBLEdBQUMsQ0FBREE7QUFDRDs7QUFFREEsU0FBQyxDQUFDLEtBQUZBLE9BQUMsQ0FBREEsU0FBd0IsdUJBQXhCQTtBQUVBLHVCQUFlLFdBQVcsS0FBWCxjQUE4QixzQkFBN0MsVUFBNkMsQ0FBOUIsQ0FBZjtBQUVBQSxTQUFDLENBQURBLEdBQUMsQ0FBREEsVUFBZ0J5RCxXQUFTLENBM0NrQixJQTJDM0N6RCxFQTNDMkM7QUE4QzNDO0FBQ0E7QUFDQTs7QUFDQSxZQUFJLGtCQUFrQlMsUUFBUSxDQUE5QixpQkFBZ0Q7QUFDOUNULFdBQUMsQ0FBQ1MsUUFBUSxDQUFWVCxJQUFDLENBQURBLGtDQUFrREEsQ0FBQyxDQUFuREE7QUFDRDs7QUFFRCxZQUFNeU4sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixjQUFJLEtBQUksQ0FBSixPQUFKLFdBQTJCO0FBQ3pCLGlCQUFJLENBQUo7QUFDRDs7QUFDRCxjQUFNNk4sY0FBYyxHQUFHLEtBQUksQ0FBM0I7QUFDQSxlQUFJLENBQUo7QUFFQXRiLFdBQUMsQ0FBQyxLQUFJLENBQU5BLE9BQUMsQ0FBREEsU0FBd0IsS0FBSSxDQUFKLGtCQUF4QkE7O0FBRUEsY0FBSXNiLGNBQWMsS0FBS3BCLFVBQVUsQ0FBakMsS0FBdUM7QUFDckMsaUJBQUksQ0FBSjtBQUNEO0FBWEg7O0FBY0EsWUFBSWxhLENBQUMsQ0FBQyxLQUFGQSxHQUFDLENBQURBLFVBQXFCeUQsV0FBUyxDQUFsQyxJQUFJekQsQ0FBSixFQUEwQztBQUN4QyxjQUFNZSxrQkFBa0IsR0FBR1osSUFBSSxDQUFKQSxpQ0FBc0MsS0FBakUsR0FBMkJBLENBQTNCO0FBRUFILFdBQUMsQ0FBQyxLQUFGQSxHQUFDLENBQURBLEtBQ09HLElBQUksQ0FEWEg7QUFIRixlQU1PO0FBQ0x5TixrQkFBUTtBQUNUO0FBQ0Y7QUFDRixLOztXQUVERyxJLEdBQUFBLHdCQUFlO0FBQUE7O0FBQ2IsVUFBTXVOLEdBQUcsR0FBUyxLQUFsQixhQUFrQixFQUFsQjtBQUNBLFVBQU05SixTQUFTLEdBQUdyUixDQUFDLENBQURBLE1BQVEsdUJBQTFCLElBQWtCQSxDQUFsQjs7QUFDQSxVQUFNeU4sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixZQUFJLE1BQUksQ0FBSixnQkFBcUJ5TSxVQUFVLENBQS9CLFFBQXdDaUIsR0FBRyxDQUEvQyxZQUE0RDtBQUMxREEsYUFBRyxDQUFIQTtBQUNEOztBQUVELGNBQUksQ0FBSjs7QUFDQSxjQUFJLENBQUo7O0FBQ0FuYixTQUFDLENBQUMsTUFBSSxDQUFOQSxPQUFDLENBQURBLFNBQXdCLE1BQUksQ0FBSixrQkFBeEJBOztBQUNBLFlBQUksTUFBSSxDQUFKLFlBQUosTUFBMkI7QUFDekIsZ0JBQUksQ0FBSjtBQUNEOztBQUVELHNCQUFjO0FBQ1o4VSxrQkFBUTtBQUNUO0FBZEg7O0FBaUJBOVUsT0FBQyxDQUFDLEtBQUZBLE9BQUMsQ0FBREE7O0FBRUEsVUFBSXFSLFNBQVMsQ0FBYixrQkFBSUEsRUFBSixFQUFvQztBQUNsQztBQUNEOztBQUVEclIsT0FBQyxDQUFEQSxHQUFDLENBQURBLGFBQW1CeUQsV0FBUyxDQTFCZixJQTBCYnpELEVBMUJhO0FBNkJiOztBQUNBLFVBQUksa0JBQWtCUyxRQUFRLENBQTlCLGlCQUFnRDtBQUM5Q1QsU0FBQyxDQUFDUyxRQUFRLENBQVZULElBQUMsQ0FBREEsbUNBQW1EQSxDQUFDLENBQXBEQTtBQUNEOztBQUVELDBCQUFvQnlhLE9BQU8sQ0FBM0I7QUFDQSwwQkFBb0JBLE9BQU8sQ0FBM0I7QUFDQSwwQkFBb0JBLE9BQU8sQ0FBM0I7O0FBRUEsVUFBSXphLENBQUMsQ0FBQyxLQUFGQSxHQUFDLENBQURBLFVBQXFCeUQsV0FBUyxDQUFsQyxJQUFJekQsQ0FBSixFQUEwQztBQUN4QyxZQUFNZSxrQkFBa0IsR0FBR1osSUFBSSxDQUFKQSxpQ0FBM0IsR0FBMkJBLENBQTNCO0FBRUFILFNBQUMsQ0FBREEsR0FBQyxDQUFEQSxLQUNPRyxJQUFJLENBRFhIO0FBSEYsYUFNTztBQUNMeU4sZ0JBQVE7QUFDVDs7QUFFRDtBQUNELEs7O1dBRUQ2RCxNLEdBQUFBLGtCQUFTO0FBQ1AsVUFBSSxpQkFBSixNQUEyQjtBQUN6QjtBQUNEO0FBQ0YsSyxDQUFBOzs7V0FJRGlLLGEsR0FBQUEseUJBQWdCO0FBQ2QsYUFBT2hhLE9BQU8sQ0FBQyxLQUFmLFFBQWUsRUFBRCxDQUFkO0FBQ0QsSzs7V0FFRGlhLGtCLEdBQUFBLHdDQUErQjtBQUM3QnhiLE9BQUMsQ0FBQyxLQUFGQSxhQUFFLEVBQUQsQ0FBREEsVUFBb0NzWixZQUFwQ3RaLE1BQW9Dc1osR0FBcEN0WjtBQUNELEs7O1dBRUR5YixhLEdBQUFBLHlCQUFnQjtBQUNkLGlCQUFXLFlBQVl6YixDQUFDLENBQUMsWUFBRkEsUUFBQyxDQUFEQSxDQUF2QixDQUF1QkEsQ0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDRCxLOztXQUVEMGIsVSxHQUFBQSxzQkFBYTtBQUNYLFVBQU1QLEdBQUcsR0FBRyxLQUFaLGFBQVksRUFBWjtBQUNBLDZCQUF1Qm5iLENBQUMsQ0FBQ21iLEdBQUcsQ0FBSEEsaUJBQXFCaFksVUFBUSxDQUF0RCxhQUF5QmdZLENBQUQsQ0FBeEIsRUFBd0UsS0FBeEUsUUFBd0UsRUFBeEU7QUFDQW5iLE9BQUMsQ0FBREEsR0FBQyxDQUFEQSxhQUFzQnlELFdBQVMsQ0FBL0J6RCxJQUFzQnlELEdBQXRCekQsR0FBc0J5RCxHQUFrQkEsV0FBUyxDQUFqRHpEO0FBQ0QsSzs7V0FFRDJiLGlCLEdBQUFBLDhDQUFxQztBQUNuQyxVQUFJLGtDQUFnQ0MsT0FBTyxDQUFQQSxZQUFvQkEsT0FBTyxDQUEvRCxNQUFJLENBQUosRUFBeUU7QUFDdkU7QUFDQSxZQUFJLFlBQUosTUFBc0I7QUFDcEIsY0FBSSxDQUFDNWIsQ0FBQyxDQUFEQSxPQUFDLENBQURBLGFBQUwsUUFBS0EsQ0FBTCxFQUF1QztBQUNyQ3lFLG9CQUFRLENBQVJBO0FBQ0Q7QUFISCxlQUlPO0FBQ0xBLGtCQUFRLENBQVJBLEtBQWN6RSxDQUFDLENBQURBLE9BQUMsQ0FBREEsQ0FBZHlFLElBQWN6RSxFQUFkeUU7QUFDRDs7QUFFRDtBQUNEOztBQUVELFVBQUksWUFBSixNQUFzQjtBQUNwQixZQUFJLFlBQUosVUFBMEI7QUFDeEJtWCxpQkFBTyxHQUFHQyxZQUFZLFVBQVUsWUFBVixXQUFpQyxZQUF2REQsVUFBc0IsQ0FBdEJBO0FBQ0Q7O0FBRURuWCxnQkFBUSxDQUFSQTtBQUxGLGFBTU87QUFDTEEsZ0JBQVEsQ0FBUkE7QUFDRDtBQUNGLEs7O1dBRURxWCxRLEdBQUFBLG9CQUFXO0FBQ1QsVUFBSW5DLEtBQUssR0FBRywwQkFBWixxQkFBWSxDQUFaOztBQUVBLFVBQUksQ0FBSixPQUFZO0FBQ1ZBLGFBQUssR0FBRyxPQUFPLFlBQVAsdUJBQ0osdUJBQXVCLEtBRG5CLE9BQ0osQ0FESSxHQUVKLFlBRkpBO0FBR0Q7O0FBRUQ7QUFDRCxLLENBQUE7OztXQUlEOUgsZ0IsR0FBQUEsc0NBQTZCO0FBQUE7O0FBQzNCLFVBQU1rSyxlQUFlLEdBQUc7QUFDdEJySyxpQkFBUyxFQURhO0FBRXRCSSxpQkFBUyxFQUFFO0FBQ1RyQixnQkFBTSxFQUFFLEtBREMsVUFDRCxFQURDO0FBRVRDLGNBQUksRUFBRTtBQUNKc0wsb0JBQVEsRUFBRSxZQUFZakM7QUFEbEIsV0FGRztBQUtUa0MsZUFBSyxFQUFFO0FBQ0xyYixtQkFBTyxFQUFFdUMsVUFBUSxDQUFDcVg7QUFEYixXQUxFO0FBUVR4SSx5QkFBZSxFQUFFO0FBQ2ZDLDZCQUFpQixFQUFFLFlBQVl0QjtBQURoQjtBQVJSLFNBRlc7QUFjdEJ1TCxnQkFBUSxFQUFFLHdCQUFVO0FBQ2xCLGNBQUl4WCxJQUFJLENBQUpBLHNCQUEyQkEsSUFBSSxDQUFuQyxXQUErQztBQUM3QyxrQkFBSSxDQUFKO0FBQ0Q7QUFqQm1CO0FBbUJ0QnlYLGdCQUFRLEVBQUU7QUFBQSxpQkFBVSxNQUFJLENBQUosNkJBQVYsSUFBVSxDQUFWO0FBQUE7QUFuQlksT0FBeEI7QUFzQkEscURBRUssWUFGTDtBQUlELEs7O1dBRUR2SyxVLEdBQUFBLHNCQUFhO0FBQUE7O0FBQ1gsVUFBTW5CLE1BQU0sR0FBWjs7QUFFQSxVQUFJLE9BQU8sWUFBUCxXQUFKLFlBQThDO0FBQzVDQSxjQUFNLENBQU5BLEtBQVksZ0JBQVU7QUFDcEIvTCxjQUFJLENBQUpBLDZCQUNLQSxJQUFJLENBRFRBLGFBRUssTUFBSSxDQUFKLGNBQW1CQSxJQUFJLENBQXZCLFNBQWlDLE1BQUksQ0FBckMsWUFGTEE7QUFLQTtBQU5GK0w7QUFERixhQVNPO0FBQ0xBLGNBQU0sQ0FBTkEsU0FBZ0IsWUFBaEJBO0FBQ0Q7O0FBRUQ7QUFDRCxLOztXQUVEMkwsYSxHQUFBQSx5QkFBZ0I7QUFDZCxVQUFJLDBCQUFKLE9BQXFDO0FBQ25DLGVBQU8zYixRQUFRLENBQWY7QUFDRDs7QUFFRCxVQUFJTixJQUFJLENBQUpBLFVBQWUsWUFBbkIsU0FBSUEsQ0FBSixFQUEyQztBQUN6QyxlQUFPSCxDQUFDLENBQUMsWUFBVCxTQUFRLENBQVI7QUFDRDs7QUFFRCxhQUFPQSxDQUFDLENBQURBLFFBQUMsQ0FBREEsTUFBaUIsWUFBeEIsU0FBT0EsQ0FBUDtBQUNELEs7O1dBRURxYyxjLEdBQUFBLG1DQUEwQjtBQUN4QixhQUFPbk0sZUFBYSxDQUFDd0IsU0FBUyxDQUE5QixXQUFxQkEsRUFBRCxDQUFwQjtBQUNELEs7O1dBRUQ0SyxhLEdBQUFBLHlCQUFnQjtBQUFBOztBQUNkLFVBQU1DLFFBQVEsR0FBRywwQkFBakIsR0FBaUIsQ0FBakI7QUFFQUEsY0FBUSxDQUFSQSxRQUFpQixtQkFBYTtBQUM1QixZQUFJek8sT0FBTyxLQUFYLFNBQXlCO0FBQ3ZCOU4sV0FBQyxDQUFDLE1BQUksQ0FBTkEsT0FBQyxDQUFEQSxJQUNFLE1BQUksQ0FBSixrQkFERkEsT0FFRSxNQUFJLENBQUosT0FGRkEsVUFHRTtBQUFBLG1CQUFXLE1BQUksQ0FBSixPQUFYLEtBQVcsQ0FBWDtBQUhGQTtBQURGLGVBTU8sSUFBSThOLE9BQU8sS0FBSzJNLE9BQU8sQ0FBdkIsUUFBZ0M7QUFDckMsY0FBTStCLE9BQU8sR0FBRzFPLE9BQU8sS0FBSzJNLE9BQU8sQ0FBbkIzTSxRQUNaLE1BQUksQ0FBSixrQkFEWUEsYUFFWixNQUFJLENBQUosa0JBRko7QUFHQSxjQUFNMk8sUUFBUSxHQUFHM08sT0FBTyxLQUFLMk0sT0FBTyxDQUFuQjNNLFFBQ2IsTUFBSSxDQUFKLGtCQURhQSxhQUViLE1BQUksQ0FBSixrQkFGSjtBQUlBOU4sV0FBQyxDQUFDLE1BQUksQ0FBTkEsT0FBQyxDQUFEQSxhQUdJLE1BQUksQ0FBSixPQUhKQSxVQUlJO0FBQUEsbUJBQVcsTUFBSSxDQUFKLE9BQVgsS0FBVyxDQUFYO0FBSkpBLDBCQVFJLE1BQUksQ0FBSixPQVJKQSxVQVNJO0FBQUEsbUJBQVcsTUFBSSxDQUFKLE9BQVgsS0FBVyxDQUFYO0FBVEpBO0FBV0Q7QUExQkh1Yzs7QUE2QkEsK0JBQXlCLFlBQU07QUFDN0IsWUFBSSxNQUFJLENBQVIsU0FBa0I7QUFDaEIsZ0JBQUksQ0FBSjtBQUNEO0FBSEg7O0FBTUF2YyxPQUFDLENBQUMsS0FBRkEsT0FBQyxDQUFEQSx1Q0FFRSxLQUZGQTs7QUFLQSxVQUFJLFlBQUosVUFBMEI7QUFDeEIseUNBQ0ssS0FETDtBQUVFOE4saUJBQU8sRUFGVDtBQUdFbk4sa0JBQVEsRUFBRTtBQUhaO0FBREYsYUFNTztBQUNMO0FBQ0Q7QUFDRixLOztXQUVEK2IsUyxHQUFBQSxxQkFBWTtBQUNWLFVBQU1DLFNBQVMsV0FBVSwwQkFBekIscUJBQXlCLENBQVYsQ0FBZjs7QUFFQSxVQUFJLHNDQUFzQ0EsU0FBUyxLQUFuRCxVQUFrRTtBQUNoRSx5REFFRSxzQ0FGRjtBQUtBO0FBQ0Q7QUFDRixLOztXQUVEQyxNLEdBQUFBLGdDQUF1QjtBQUNyQixVQUFNNUIsT0FBTyxHQUFHLGlCQUFoQjtBQUNBNUksYUFBTyxHQUFHQSxPQUFPLElBQUlwUyxDQUFDLENBQUNDLEtBQUssQ0FBUEQsYUFBQyxDQUFEQSxNQUFyQm9TLE9BQXFCcFMsQ0FBckJvUzs7QUFFQSxVQUFJLENBQUosU0FBYztBQUNaQSxlQUFPLEdBQUcsSUFBSSxLQUFKLFlBQ1JuUyxLQUFLLENBREcsZUFFUixLQUZGbVMsa0JBRUUsRUFGUSxDQUFWQTtBQUlBcFMsU0FBQyxDQUFDQyxLQUFLLENBQVBELGFBQUMsQ0FBREE7QUFDRDs7QUFFRCxpQkFBVztBQUNUb1MsZUFBTyxDQUFQQSxlQUNFblMsS0FBSyxDQUFMQSxxQkFBMkJ3YSxPQUFPLENBQWxDeGEsUUFBMkN3YSxPQUFPLENBRHBEckk7QUFHRDs7QUFFRCxVQUFJcFMsQ0FBQyxDQUFDb1MsT0FBTyxDQUFUcFMsYUFBRW9TLEVBQUQsQ0FBRHBTLFVBQW9DeUQsV0FBUyxDQUE3Q3pELFNBQXVEb1MsT0FBTyxDQUFQQSxnQkFBd0I4SCxVQUFVLENBQTdGLE1BQW9HO0FBQ2xHOUgsZUFBTyxDQUFQQSxjQUFzQjhILFVBQVUsQ0FBaEM5SDtBQUNBO0FBQ0Q7O0FBRURySSxrQkFBWSxDQUFDcUksT0FBTyxDQUFwQnJJLFFBQVksQ0FBWkE7QUFFQXFJLGFBQU8sQ0FBUEEsY0FBc0I4SCxVQUFVLENBQWhDOUg7O0FBRUEsVUFBSSxDQUFDQSxPQUFPLENBQVBBLE9BQUQsU0FBeUIsQ0FBQ0EsT0FBTyxDQUFQQSxhQUE5QixNQUF5RDtBQUN2REEsZUFBTyxDQUFQQTtBQUNBO0FBQ0Q7O0FBRURBLGFBQU8sQ0FBUEEsV0FBbUJoUyxVQUFVLENBQUMsWUFBTTtBQUNsQyxZQUFJZ1MsT0FBTyxDQUFQQSxnQkFBd0I4SCxVQUFVLENBQXRDLE1BQTZDO0FBQzNDOUgsaUJBQU8sQ0FBUEE7QUFDRDtBQUgwQixTQUkxQkEsT0FBTyxDQUFQQSxhQUpIQSxJQUE2QixDQUE3QkE7QUFLRCxLOztXQUVEeUssTSxHQUFBQSxnQ0FBdUI7QUFDckIsVUFBTTdCLE9BQU8sR0FBRyxpQkFBaEI7QUFDQTVJLGFBQU8sR0FBR0EsT0FBTyxJQUFJcFMsQ0FBQyxDQUFDQyxLQUFLLENBQVBELGFBQUMsQ0FBREEsTUFBckJvUyxPQUFxQnBTLENBQXJCb1M7O0FBRUEsVUFBSSxDQUFKLFNBQWM7QUFDWkEsZUFBTyxHQUFHLElBQUksS0FBSixZQUNSblMsS0FBSyxDQURHLGVBRVIsS0FGRm1TLGtCQUVFLEVBRlEsQ0FBVkE7QUFJQXBTLFNBQUMsQ0FBQ0MsS0FBSyxDQUFQRCxhQUFDLENBQURBO0FBQ0Q7O0FBRUQsaUJBQVc7QUFDVG9TLGVBQU8sQ0FBUEEsZUFDRW5TLEtBQUssQ0FBTEEsc0JBQTRCd2EsT0FBTyxDQUFuQ3hhLFFBQTRDd2EsT0FBTyxDQURyRHJJO0FBR0Q7O0FBRUQsVUFBSUEsT0FBTyxDQUFYLG9CQUFJQSxFQUFKLEVBQW9DO0FBQ2xDO0FBQ0Q7O0FBRURySSxrQkFBWSxDQUFDcUksT0FBTyxDQUFwQnJJLFFBQVksQ0FBWkE7QUFFQXFJLGFBQU8sQ0FBUEEsY0FBc0I4SCxVQUFVLENBQWhDOUg7O0FBRUEsVUFBSSxDQUFDQSxPQUFPLENBQVBBLE9BQUQsU0FBeUIsQ0FBQ0EsT0FBTyxDQUFQQSxhQUE5QixNQUF5RDtBQUN2REEsZUFBTyxDQUFQQTtBQUNBO0FBQ0Q7O0FBRURBLGFBQU8sQ0FBUEEsV0FBbUJoUyxVQUFVLENBQUMsWUFBTTtBQUNsQyxZQUFJZ1MsT0FBTyxDQUFQQSxnQkFBd0I4SCxVQUFVLENBQXRDLEtBQTRDO0FBQzFDOUgsaUJBQU8sQ0FBUEE7QUFDRDtBQUgwQixTQUkxQkEsT0FBTyxDQUFQQSxhQUpIQSxJQUE2QixDQUE3QkE7QUFLRCxLOztXQUVEMEssb0IsR0FBQUEsZ0NBQXVCO0FBQ3JCLFdBQUssSUFBTCxXQUFzQixLQUF0QixnQkFBMkM7QUFDekMsWUFBSSxvQkFBSixPQUFJLENBQUosRUFBa0M7QUFDaEM7QUFDRDtBQUNGOztBQUVEO0FBQ0QsSzs7V0FFRHZULFUsR0FBQUEsNEJBQW1CO0FBQ2pCLFVBQU13VCxjQUFjLEdBQUcvYyxDQUFDLENBQUMsS0FBRkEsT0FBQyxDQUFEQSxDQUF2QixJQUF1QkEsRUFBdkI7QUFFQTJCLFlBQU0sQ0FBTkEsNkJBQ1csb0JBQWM7QUFDckIsWUFBSTZYLHFCQUFxQixDQUFyQkEsc0JBQTRDLENBQWhELEdBQW9EO0FBQ2xELGlCQUFPdUQsY0FBYyxDQUFyQixRQUFxQixDQUFyQjtBQUNEO0FBSkxwYjtBQU9BSSxZQUFNLHNCQUNELGlCQURDLGlDQUdELGtEQUhMQSxFQUFNLENBQU5BOztBQU1BLFVBQUksT0FBT0EsTUFBTSxDQUFiLFVBQUosVUFBc0M7QUFDcENBLGNBQU0sQ0FBTkEsUUFBZTtBQUNicUwsY0FBSSxFQUFFckwsTUFBTSxDQURDO0FBRWI2TCxjQUFJLEVBQUU3TCxNQUFNLENBQUM2WDtBQUZBLFNBQWY3WDtBQUlEOztBQUVELFVBQUksT0FBT0EsTUFBTSxDQUFiLFVBQUosVUFBc0M7QUFDcENBLGNBQU0sQ0FBTkEsUUFBZUEsTUFBTSxDQUFOQSxNQUFmQSxRQUFlQSxFQUFmQTtBQUNEOztBQUVELFVBQUksT0FBT0EsTUFBTSxDQUFiLFlBQUosVUFBd0M7QUFDdENBLGNBQU0sQ0FBTkEsVUFBaUJBLE1BQU0sQ0FBTkEsUUFBakJBLFFBQWlCQSxFQUFqQkE7QUFDRDs7QUFFRDVCLFVBQUksQ0FBSkEsZ0NBR0UsaUJBSEZBOztBQU1BLFVBQUk0QixNQUFNLENBQVYsVUFBcUI7QUFDbkJBLGNBQU0sQ0FBTkEsV0FBa0I4WixZQUFZLENBQUM5WixNQUFNLENBQVAsVUFBa0JBLE1BQU0sQ0FBeEIsV0FBb0NBLE1BQU0sQ0FBeEVBLFVBQThCLENBQTlCQTtBQUNEOztBQUVEO0FBQ0QsSzs7V0FFRGliLGtCLEdBQUFBLDhCQUFxQjtBQUNuQixVQUFNamIsTUFBTSxHQUFaOztBQUVBLFVBQUksS0FBSixRQUFpQjtBQUNmLGFBQUssSUFBTCxPQUFrQixLQUFsQixRQUErQjtBQUM3QixjQUFJLGtDQUFrQyxZQUF0QyxHQUFzQyxDQUF0QyxFQUF3RDtBQUN0REEsa0JBQU0sQ0FBTkEsR0FBTSxDQUFOQSxHQUFjLFlBQWRBLEdBQWMsQ0FBZEE7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDRCxLOztXQUVEa2IsYyxHQUFBQSwwQkFBaUI7QUFDZixVQUFNQyxJQUFJLEdBQUdsZCxDQUFDLENBQUMsS0FBZixhQUFlLEVBQUQsQ0FBZDtBQUNBLFVBQU1tZCxRQUFRLEdBQUdELElBQUksQ0FBSkEsb0JBQWpCLGtCQUFpQkEsQ0FBakI7O0FBQ0EsVUFBSUMsUUFBUSxLQUFSQSxRQUFxQkEsUUFBUSxDQUFqQyxRQUEwQztBQUN4Q0QsWUFBSSxDQUFKQSxZQUFpQkMsUUFBUSxDQUFSQSxLQUFqQkQsRUFBaUJDLENBQWpCRDtBQUNEO0FBQ0YsSzs7V0FFREUsNEIsR0FBQUEsa0RBQXlDO0FBQ3ZDLFVBQU1DLGNBQWMsR0FBR0MsVUFBVSxDQUFqQztBQUNBLGlCQUFXRCxjQUFjLENBQXpCOztBQUNBOztBQUNBLDhCQUF3QixvQkFBb0JDLFVBQVUsQ0FBdEQsU0FBd0IsQ0FBeEI7QUFDRCxLOztXQUVEQyxjLEdBQUFBLDBCQUFpQjtBQUNmLFVBQU1wQyxHQUFHLEdBQUcsS0FBWixhQUFZLEVBQVo7QUFDQSxVQUFNcUMsbUJBQW1CLEdBQUcsWUFBNUI7O0FBRUEsVUFBSXJDLEdBQUcsQ0FBSEEsZ0NBQUosTUFBOEM7QUFDNUM7QUFDRDs7QUFFRG5iLE9BQUMsQ0FBREEsR0FBQyxDQUFEQSxhQUFtQnlELFdBQVMsQ0FBNUJ6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsSyxDQUFBOzs7WUFJTXdFLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQUlFLElBQUksR0FBRzFFLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxNQUFYLFVBQVdBLENBQVg7O0FBQ0EsWUFBTThMLE9BQU8sR0FBRyxnQ0FBaEI7O0FBRUEsWUFBSSxTQUFTLG9CQUFiLE1BQWEsQ0FBYixFQUEwQztBQUN4QztBQUNEOztBQUVELFlBQUksQ0FBSixNQUFXO0FBQ1RwSCxjQUFJLEdBQUcsa0JBQVBBLE9BQU8sQ0FBUEE7QUFDQTFFLFdBQUMsQ0FBREEsSUFBQyxDQUFEQTtBQUNEOztBQUVELFlBQUksa0JBQUosVUFBZ0M7QUFDOUIsY0FBSSxPQUFPMEUsSUFBSSxDQUFYLE1BQVcsQ0FBWCxLQUFKLGFBQXlDO0FBQ3ZDLGtCQUFNLDhDQUFOLElBQU0sQ0FBTjtBQUNEOztBQUNEQSxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQWxCSCxPQUFPLENBQVA7QUFvQkQsSzs7OzswQkF6bkJvQjtBQUNuQjtBQUNEOzs7MEJBRW9CO0FBQ25CO0FBQ0Q7OzswQkFFaUI7QUFDaEI7QUFDRDs7OzBCQUVxQjtBQUNwQjtBQUNEOzs7MEJBRWtCO0FBQ2pCO0FBQ0Q7OzswQkFFc0I7QUFDckI7QUFDRDs7OzBCQUV3QjtBQUN2QjtBQUNEOzs7OztBQWttQkg7Ozs7Ozs7QUFNQTFFLEdBQUMsQ0FBREEsYUFBYTRhLE9BQU8sQ0FBcEI1YTtBQUNBQSxHQUFDLENBQURBOztBQUNBQSxHQUFDLENBQURBLHdCQUF3QixZQUFNO0FBQzVCQSxLQUFDLENBQURBO0FBQ0EsV0FBTzRhLE9BQU8sQ0FBZDtBQUZGNWE7QUMxd0JBOzs7Ozs7O0FBTUEsTUFBTTZDLE1BQUksR0FBVjtBQUNBLE1BQU1DLFNBQU8sR0FBYjtBQUNBLE1BQU1DLFVBQVEsR0FBZDtBQUNBLE1BQU1DLFdBQVMsU0FBZjtBQUNBLE1BQU1FLG9CQUFrQixHQUFJbEQsQ0FBQyxDQUFEQSxHQUE1QixNQUE0QkEsQ0FBNUI7QUFDQSxNQUFNc1osY0FBWSxHQUFsQjtBQUNBLE1BQU1DLG9CQUFrQixHQUFJLGdEQUE1QixHQUE0QixDQUE1Qjs7QUFFQSxNQUFNalQsU0FBTyxzQkFDUnNVLE9BQU8sQ0FEQztBQUVYbEosYUFBUyxFQUZFO0FBR1g1RCxXQUFPLEVBSEk7QUFJWDhOLFdBQU8sRUFKSTtBQUtYbEMsWUFBUSxFQUFJLDRHQUdBO0FBUkQsSUFBYjs7QUFXQSxNQUFNN1MsYUFBVyxzQkFDWitULE9BQU8sQ0FESztBQUVmZ0IsV0FBTyxFQUFHO0FBRkssSUFBakI7O0FBS0EsTUFBTW5ZLFdBQVMsR0FBRztBQUNoQkUsUUFBSSxFQURZO0FBRWhCQyxRQUFJLEVBQUc7QUFGUyxHQUFsQjtBQUtBLE1BQU1ULFVBQVEsR0FBRztBQUNmc2EsU0FBSyxFQURVO0FBRWZDLFdBQU8sRUFBRztBQUZLLEdBQWpCO0FBS0EsTUFBTXJhLE9BQUssR0FBRztBQUNaaUosUUFBSSxXQURRO0FBRVpDLFVBQU0sYUFGTTtBQUdaM0ksUUFBSSxXQUhRO0FBSVp5SSxTQUFLLFlBSk87QUFLWitOLFlBQVEsZUFMSTtBQU1aaEwsU0FBSyxZQU5PO0FBT1p3RCxXQUFPLGNBUEs7QUFRWnlILFlBQVEsZUFSSTtBQVNaL1MsY0FBVSxpQkFURTtBQVVaQyxjQUFVLGlCQUFnQnZFO0FBVmQsR0FBZDtBQWFBOzs7Ozs7TUFNTTJhOzs7Ozs7Ozs7b0NBK0JKOztXQUVBcEMsYSxHQUFBQSx5QkFBZ0I7QUFDZCxhQUFPLG1CQUFtQixLQUExQixXQUEwQixFQUExQjtBQUNELEs7O1dBRURDLGtCLEdBQUFBLHdDQUErQjtBQUM3QnhiLE9BQUMsQ0FBQyxLQUFGQSxhQUFFLEVBQUQsQ0FBREEsVUFBb0NzWixjQUFwQ3RaLE1BQW9Dc1osR0FBcEN0WjtBQUNELEs7O1dBRUR5YixhLEdBQUFBLHlCQUFnQjtBQUNkLGlCQUFXLFlBQVl6YixDQUFDLENBQUMsWUFBRkEsUUFBQyxDQUFEQSxDQUF2QixDQUF1QkEsQ0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDRCxLOztXQUVEMGIsVSxHQUFBQSxzQkFBYTtBQUNYLFVBQU13QixJQUFJLEdBQUdsZCxDQUFDLENBQUMsS0FESixhQUNJLEVBQUQsQ0FBZCxDQURXOztBQUlYLDZCQUF1QmtkLElBQUksQ0FBSkEsS0FBVS9aLFVBQVEsQ0FBekMsS0FBdUIrWixDQUF2QixFQUFrRCxLQUFsRCxRQUFrRCxFQUFsRDs7QUFDQSxVQUFJdEIsT0FBTyxHQUFHLEtBQWQsV0FBYyxFQUFkOztBQUNBLFVBQUksbUJBQUosWUFBbUM7QUFDakNBLGVBQU8sR0FBR0EsT0FBTyxDQUFQQSxLQUFhLEtBQXZCQSxPQUFVQSxDQUFWQTtBQUNEOztBQUNELDZCQUF1QnNCLElBQUksQ0FBSkEsS0FBVS9aLFVBQVEsQ0FBekMsT0FBdUIrWixDQUF2QjtBQUVBQSxVQUFJLENBQUpBLFlBQW9CelosV0FBUyxDQUE3QnlaLElBQW9CelosR0FBcEJ5WixHQUFvQnpaLEdBQWtCQSxXQUFTLENBQS9DeVo7QUFDRCxLLENBQUE7OztXQUlEVSxXLEdBQUFBLHVCQUFjO0FBQ1osYUFBTyw2Q0FDTCxZQURGO0FBRUQsSzs7V0FFRFgsYyxHQUFBQSwwQkFBaUI7QUFDZixVQUFNQyxJQUFJLEdBQUdsZCxDQUFDLENBQUMsS0FBZixhQUFlLEVBQUQsQ0FBZDtBQUNBLFVBQU1tZCxRQUFRLEdBQUdELElBQUksQ0FBSkEsb0JBQWpCLG9CQUFpQkEsQ0FBakI7O0FBQ0EsVUFBSUMsUUFBUSxLQUFSQSxRQUFxQkEsUUFBUSxDQUFSQSxTQUF6QixHQUE4QztBQUM1Q0QsWUFBSSxDQUFKQSxZQUFpQkMsUUFBUSxDQUFSQSxLQUFqQkQsRUFBaUJDLENBQWpCRDtBQUNEO0FBQ0YsSyxDQUFBOzs7WUFJTTFZLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQUlFLElBQUksR0FBRzFFLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxNQUFYLFVBQVdBLENBQVg7O0FBQ0EsWUFBTThMLE9BQU8sR0FBRyx3Q0FBaEI7O0FBRUEsWUFBSSxTQUFTLG9CQUFiLE1BQWEsQ0FBYixFQUEwQztBQUN4QztBQUNEOztBQUVELFlBQUksQ0FBSixNQUFXO0FBQ1RwSCxjQUFJLEdBQUcsa0JBQVBBLE9BQU8sQ0FBUEE7QUFDQTFFLFdBQUMsQ0FBREEsSUFBQyxDQUFEQTtBQUNEOztBQUVELFlBQUksa0JBQUosVUFBZ0M7QUFDOUIsY0FBSSxPQUFPMEUsSUFBSSxDQUFYLE1BQVcsQ0FBWCxLQUFKLGFBQXlDO0FBQ3ZDLGtCQUFNLDhDQUFOLElBQU0sQ0FBTjtBQUNEOztBQUNEQSxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQWxCSCxPQUFPLENBQVA7QUFvQkQsSzs7OztBQWpHRDswQkFFcUI7QUFDbkI7QUFDRDs7OzBCQUVvQjtBQUNuQjtBQUNEOzs7MEJBRWlCO0FBQ2hCO0FBQ0Q7OzswQkFFcUI7QUFDcEI7QUFDRDs7OzBCQUVrQjtBQUNqQjtBQUNEOzs7MEJBRXNCO0FBQ3JCO0FBQ0Q7OzswQkFFd0I7QUFDdkI7QUFDRDs7OztJQTdCbUJrVyxPO0FBcUd0Qjs7Ozs7OztBQU1BNWEsR0FBQyxDQUFEQSxhQUFhMmQsT0FBTyxDQUFwQjNkO0FBQ0FBLEdBQUMsQ0FBREE7O0FBQ0FBLEdBQUMsQ0FBREEsd0JBQXdCLFlBQU07QUFDNUJBLEtBQUMsQ0FBREE7QUFDQSxXQUFPMmQsT0FBTyxDQUFkO0FBRkYzZDtBQ3hLQTs7Ozs7OztBQU1BLE1BQU02QyxNQUFJLEdBQVY7QUFDQSxNQUFNQyxTQUFPLEdBQWI7QUFDQSxNQUFNQyxVQUFRLEdBQWQ7QUFDQSxNQUFNQyxXQUFTLFNBQWY7QUFDQSxNQUFNQyxjQUFZLEdBQWxCO0FBQ0EsTUFBTUMsb0JBQWtCLEdBQUdsRCxDQUFDLENBQURBLEdBQTNCLE1BQTJCQSxDQUEzQjtBQUVBLE1BQU1zRyxTQUFPLEdBQUc7QUFDZG1LLFVBQU0sRUFEUTtBQUVkb04sVUFBTSxFQUZRO0FBR2Q1UixVQUFNLEVBQUc7QUFISyxHQUFoQjtBQU1BLE1BQU1wRixhQUFXLEdBQUc7QUFDbEI0SixVQUFNLEVBRFk7QUFFbEJvTixVQUFNLEVBRlk7QUFHbEI1UixVQUFNLEVBQUc7QUFIUyxHQUFwQjtBQU1BLE1BQU01SSxPQUFLLEdBQUc7QUFDWnlhLFlBQVEsZUFESTtBQUVaQyxVQUFNLGFBRk07QUFHWnpZLGlCQUFhLHlCQUFzQnJDO0FBSHZCLEdBQWQ7QUFNQSxNQUFNUSxXQUFTLEdBQUc7QUFDaEJ1YSxpQkFBYSxFQURHO0FBRWhCQyxpQkFBYSxFQUZHO0FBR2hCcFosVUFBTSxFQUFVO0FBSEEsR0FBbEI7QUFNQSxNQUFNMUIsVUFBUSxHQUFHO0FBQ2YrYSxZQUFRLEVBRE87QUFFZnJaLFVBQU0sRUFGUztBQUdmc1osa0JBQWMsRUFIQztBQUlmQyxhQUFTLEVBSk07QUFLZkMsYUFBUyxFQUxNO0FBTWZDLGNBQVUsRUFOSztBQU9mQyxZQUFRLEVBUE87QUFRZkMsa0JBQWMsRUFSQztBQVNmQyxtQkFBZSxFQUFHO0FBVEgsR0FBakI7QUFZQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFVBQU0sRUFEYTtBQUVuQkMsWUFBUSxFQUFHO0FBRlEsR0FBckI7QUFLQTs7Ozs7O01BTU1DOzs7QUFDSix3Q0FBNkI7QUFBQTs7QUFDM0I7QUFDQSw0QkFBc0JqZSxPQUFPLENBQVBBLDhCQUF0QjtBQUNBLHFCQUFzQixnQkFBdEIsTUFBc0IsQ0FBdEI7QUFDQSx1QkFBeUIsYUFBSCxNQUFHLEdBQUgsR0FBRyxHQUF1QnVDLFVBQVEsQ0FBbEMsU0FBRyxHQUFILEdBQUcsSUFDQSxhQURILE1BQ0csR0FESCxHQUNHLEdBQXVCQSxVQUFRLENBRGxDLFVBQ0csR0FESCxHQUFHLEtBRUEsYUFGSCxNQUVHLEdBRkgsR0FFRyxHQUF1QkEsVUFBUSxDQUZ4RCxjQUF5QixDQUF6QjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUFuRCxPQUFDLENBQUMsS0FBRkEsY0FBQyxDQUFEQSxJQUEwQnFELE9BQUssQ0FBL0JyRCxRQUF3QztBQUFBLGVBQVcsS0FBSSxDQUFKLFNBQVgsS0FBVyxDQUFYO0FBQXhDQTtBQUVBOztBQUNBO0FBQ0QsSyxDQUFBOzs7c0NBWUQ7O1dBRUE4ZSxPLEdBQUFBLG1CQUFVO0FBQUE7O0FBQ1IsVUFBTUMsVUFBVSxHQUFHLHdCQUF3QixvQkFBeEIsU0FDZkwsWUFBWSxDQURHLFNBQ09BLFlBQVksQ0FEdEM7QUFHQSxVQUFNTSxZQUFZLEdBQUcsOENBQ0osYUFEakI7QUFHQSxVQUFNQyxVQUFVLEdBQUdELFlBQVksS0FBS04sWUFBWSxDQUE3Qk0sV0FDZixLQURlQSxhQUNmLEVBRGVBLEdBQW5CO0FBR0E7QUFDQTtBQUVBLDJCQUFxQixLQUFyQixnQkFBcUIsRUFBckI7QUFFQSxVQUFNRSxPQUFPLEdBQUcsY0FBY3plLFFBQVEsQ0FBUkEsaUJBQTBCLEtBQXhELFNBQThCQSxDQUFkLENBQWhCO0FBRUF5ZSxhQUFPLENBQVBBLElBQ08sbUJBQWE7QUFDaEI7QUFDQSxZQUFNQyxjQUFjLEdBQUdoZixJQUFJLENBQUpBLHVCQUF2QixPQUF1QkEsQ0FBdkI7O0FBRUEsNEJBQW9CO0FBQ2xCOEwsZ0JBQU0sR0FBR3hMLFFBQVEsQ0FBUkEsY0FBVHdMLGNBQVN4TCxDQUFUd0w7QUFDRDs7QUFFRCxvQkFBWTtBQUNWLGNBQU1tVCxTQUFTLEdBQUduVCxNQUFNLENBQXhCLHFCQUFrQkEsRUFBbEI7O0FBQ0EsY0FBSW1ULFNBQVMsQ0FBVEEsU0FBbUJBLFNBQVMsQ0FBaEMsUUFBeUM7QUFDdkM7QUFDQSxtQkFBTyxDQUNMcGYsQ0FBQyxDQUFEQSxNQUFDLENBQURBLHVCQURLLFlBQVAsY0FBTyxDQUFQO0FBSUQ7QUFDRjs7QUFDRDtBQW5CSmtmLGdCQXFCVTtBQUFBO0FBckJWQSxjQXNCUTtBQUFBLGVBQVUzSSxDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBT0UsQ0FBQyxDQUFsQixDQUFrQixDQUFsQjtBQXRCUnlJLGlCQXVCVyxnQkFBVTtBQUNqQixjQUFJLENBQUosY0FBbUJHLElBQUksQ0FBdkIsQ0FBdUIsQ0FBdkI7O0FBQ0EsY0FBSSxDQUFKLGNBQW1CQSxJQUFJLENBQXZCLENBQXVCLENBQXZCO0FBekJKSDtBQTJCRCxLOztXQUVEamIsTyxHQUFBQSxtQkFBVTtBQUNSakUsT0FBQyxDQUFEQSxXQUFhLEtBQWJBO0FBQ0FBLE9BQUMsQ0FBQyxLQUFGQSxjQUFDLENBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEssQ0FBQTs7O1dBSUR1SixVLEdBQUFBLDRCQUFtQjtBQUNqQnhILFlBQU0scUNBRUQsa0RBRkxBLEVBQU0sQ0FBTkE7O0FBS0EsVUFBSSxPQUFPQSxNQUFNLENBQWIsV0FBSixVQUF1QztBQUNyQyxZQUFJdWQsRUFBRSxHQUFHdGYsQ0FBQyxDQUFDK0IsTUFBTSxDQUFSL0IsTUFBQyxDQUFEQSxNQUFULElBQVNBLENBQVQ7O0FBQ0EsWUFBSSxDQUFKLElBQVM7QUFDUHNmLFlBQUUsR0FBR25mLElBQUksQ0FBSkEsT0FBTG1mLE1BQUtuZixDQUFMbWY7QUFDQXRmLFdBQUMsQ0FBQytCLE1BQU0sQ0FBUi9CLE1BQUMsQ0FBREE7QUFDRDs7QUFDRCtCLGNBQU0sQ0FBTkE7QUFDRDs7QUFFRDVCLFVBQUksQ0FBSkE7QUFFQTtBQUNELEs7O1dBRURvZixhLEdBQUFBLHlCQUFnQjtBQUNkLGFBQU8saUNBQ0gsb0JBREcsY0FDK0Isb0JBRHRDO0FBRUQsSzs7V0FFREMsZ0IsR0FBQUEsNEJBQW1CO0FBQ2pCLGFBQU8sb0NBQW9DaGYsSUFBSSxDQUFKQSxJQUN6Q0MsUUFBUSxDQUFSQSxLQUR5Q0QsY0FFekNDLFFBQVEsQ0FBUkEsZ0JBRkYsWUFBMkNELENBQTNDO0FBSUQsSzs7V0FFRGlmLGdCLEdBQUFBLDRCQUFtQjtBQUNqQixhQUFPLGlDQUNIN1csTUFBTSxDQURILGNBQ2tCLDRDQUR6QjtBQUVELEs7O1dBRUQ4VyxRLEdBQUFBLG9CQUFXO0FBQ1QsVUFBTUMsU0FBUyxHQUFNLHVCQUF1QixhQUE1Qzs7QUFDQSxVQUFNQyxZQUFZLEdBQUcsS0FBckIsZ0JBQXFCLEVBQXJCOztBQUNBLFVBQU1DLFNBQVMsR0FBTSxxQ0FFbkIsS0FGRixnQkFFRSxFQUZGOztBQUlBLFVBQUksdUJBQUosY0FBeUM7QUFDdkM7QUFDRDs7QUFFRCxVQUFJRixTQUFTLElBQWIsV0FBNEI7QUFDMUIsWUFBTTFULE1BQU0sR0FBRyxjQUFjLHVCQUE3QixDQUFlLENBQWY7O0FBRUEsWUFBSSx1QkFBSixRQUFtQztBQUNqQztBQUNEOztBQUNEO0FBQ0Q7O0FBRUQsVUFBSSxzQkFBc0IwVCxTQUFTLEdBQUcsY0FBbEMsQ0FBa0MsQ0FBbEMsSUFBc0QsbUJBQTFELEdBQWdGO0FBQzlFOztBQUNBOztBQUNBO0FBQ0Q7O0FBRUQsVUFBTUcsWUFBWSxHQUFHLGNBQXJCOztBQUNBLFdBQUssSUFBSTlaLENBQUMsR0FBVixjQUEyQkEsQ0FBM0IsS0FBaUM7QUFDL0IsWUFBTStaLGNBQWMsR0FBRyx1QkFBdUIsY0FBdkIsQ0FBdUIsQ0FBdkIsSUFDbkJKLFNBQVMsSUFBSSxjQURNLENBQ04sQ0FETSxLQUVsQixPQUFPLGNBQWMzWixDQUFDLEdBQXRCLENBQU8sQ0FBUCxvQkFDRzJaLFNBQVMsR0FBRyxjQUFjM1osQ0FBQyxHQUhuQyxDQUdvQixDQUhHLENBQXZCOztBQUtBLDRCQUFvQjtBQUNsQix5QkFBZSxjQUFmLENBQWUsQ0FBZjtBQUNEO0FBQ0Y7QUFDRixLOztXQUVEZ2EsUyxHQUFBQSwyQkFBa0I7QUFDaEI7O0FBRUE7O0FBRUEsVUFBTUMsT0FBTyxHQUFHLDhCQUVUO0FBQUEsZUFBaUJ0ZixRQUFqQixvQkFBaUJBLEdBQWpCLE1BQWlCQSxHQUFqQixNQUFpQkEsR0FBakIsUUFBaUJBLEdBQWpCLFVBQWlCQSxHQUFqQixNQUFpQkEsR0FBakI7QUFGUCxPQUFnQixDQUFoQjs7QUFJQSxVQUFNdWYsS0FBSyxHQUFHbGdCLENBQUMsQ0FBQyxjQUFjUyxRQUFRLENBQVJBLGlCQUEwQndmLE9BQU8sQ0FBUEEsS0FBeEQsR0FBd0RBLENBQTFCeGYsQ0FBZCxDQUFELENBQWY7O0FBRUEsVUFBSXlmLEtBQUssQ0FBTEEsU0FBZXpjLFdBQVMsQ0FBNUIsYUFBSXljLENBQUosRUFBNkM7QUFDM0NBLGFBQUssQ0FBTEEsUUFBYy9jLFVBQVEsQ0FBdEIrYyxlQUFzQy9jLFVBQVEsQ0FBOUMrYywwQkFBeUV6YyxXQUFTLENBQWxGeWM7QUFDQUEsYUFBSyxDQUFMQSxTQUFlemMsV0FBUyxDQUF4QnljO0FBRkYsYUFHTztBQUNMO0FBQ0FBLGFBQUssQ0FBTEEsU0FBZXpjLFdBQVMsQ0FGbkIsTUFFTHljLEVBRks7QUFJTDs7QUFDQUEsYUFBSyxDQUFMQSxRQUFjL2MsVUFBUSxDQUF0QitjLHFCQUErQy9jLFVBQVEsQ0FBdkQrYyxTQUErQy9jLEdBQS9DK2MsSUFBK0MvYyxHQUF1QkEsVUFBUSxDQUE5RStjLHFCQUFzR3pjLFdBQVMsQ0FMMUcsTUFLTHljLEVBTEs7O0FBT0xBLGFBQUssQ0FBTEEsUUFBYy9jLFVBQVEsQ0FBdEIrYyxxQkFBNEMvYyxVQUFRLENBQXBEK2Msb0JBQXlFL2MsVUFBUSxDQUFqRitjLG9CQUFzR3pjLFdBQVMsQ0FBL0d5YztBQUNEOztBQUVEbGdCLE9BQUMsQ0FBQyxLQUFGQSxjQUFDLENBQURBLFNBQStCcUQsT0FBSyxDQUFwQ3JELFVBQStDO0FBQzdDOEsscUJBQWEsRUFBRW1CO0FBRDhCLE9BQS9Dak07QUFHRCxLOztXQUVEbWdCLE0sR0FBQUEsa0JBQVM7QUFDUCxvQkFBYzFmLFFBQVEsQ0FBUkEsaUJBQTBCLEtBQXhDLFNBQWNBLENBQWQsU0FDVTtBQUFBLGVBQVUyZixJQUFJLENBQUpBLG1CQUF3QjNjLFdBQVMsQ0FBM0MsTUFBVTJjLENBQVY7QUFEVixpQkFFVztBQUFBLGVBQVVBLElBQUksQ0FBSkEsaUJBQXNCM2MsV0FBUyxDQUF6QyxNQUFVMmMsQ0FBVjtBQUZYO0FBR0QsSyxDQUFBOzs7Y0FJTTViLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQUlFLElBQUksR0FBRzFFLENBQUMsQ0FBREEsSUFBQyxDQUFEQSxNQUFYLFVBQVdBLENBQVg7O0FBQ0EsWUFBTThMLE9BQU8sR0FBRyxnQ0FBaEI7O0FBRUEsWUFBSSxDQUFKLE1BQVc7QUFDVHBILGNBQUksR0FBRyxvQkFBUEEsT0FBTyxDQUFQQTtBQUNBMUUsV0FBQyxDQUFEQSxJQUFDLENBQURBO0FBQ0Q7O0FBRUQsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU8wRSxJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsa0JBQU0sOENBQU4sSUFBTSxDQUFOO0FBQ0Q7O0FBQ0RBLGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUNEO0FBZEgsT0FBTyxDQUFQO0FBZ0JELEs7Ozs7MEJBMU1vQjtBQUNuQjtBQUNEOzs7MEJBRW9CO0FBQ25CO0FBQ0Q7Ozs7O0FBdU1IOzs7Ozs7O0FBTUExRSxHQUFDLENBQURBLE1BQUMsQ0FBREEsSUFBYXFELE9BQUssQ0FBbEJyRCxlQUFrQyxZQUFNO0FBQ3RDLFFBQU1xZ0IsVUFBVSxHQUFHLGNBQWM1ZixRQUFRLENBQVJBLGlCQUEwQjBDLFVBQVEsQ0FBbkUsUUFBaUMxQyxDQUFkLENBQW5CO0FBQ0EsUUFBTTZmLGdCQUFnQixHQUFHRCxVQUFVLENBQW5DOztBQUVBLFNBQUssSUFBSXJhLENBQUMsR0FBVixrQkFBK0JBLENBQS9CLEtBQXFDO0FBQ25DLFVBQU11YSxJQUFJLEdBQUd2Z0IsQ0FBQyxDQUFDcWdCLFVBQVUsQ0FBekIsQ0FBeUIsQ0FBWCxDQUFkOztBQUNBeEIsZUFBUyxDQUFUQSw0QkFBc0MwQixJQUFJLENBQTFDMUIsSUFBc0MwQixFQUF0QzFCO0FBQ0Q7QUFQSDdlO0FBVUE7Ozs7OztBQU1BQSxHQUFDLENBQURBLGFBQWE2ZSxTQUFTLENBQXRCN2U7QUFDQUEsR0FBQyxDQUFEQTs7QUFDQUEsR0FBQyxDQUFEQSx3QkFBd0IsWUFBTTtBQUM1QkEsS0FBQyxDQUFEQTtBQUNBLFdBQU82ZSxTQUFTLENBQWhCO0FBRkY3ZTtBQ3RUQTs7Ozs7OztBQU1BLE1BQU02QyxNQUFJLEdBQVY7QUFDQSxNQUFNQyxTQUFPLEdBQWI7QUFDQSxNQUFNQyxVQUFRLEdBQWQ7QUFDQSxNQUFNQyxXQUFTLFNBQWY7QUFDQSxNQUFNQyxjQUFZLEdBQWxCO0FBQ0EsTUFBTUMsb0JBQWtCLEdBQUdsRCxDQUFDLENBQURBLEdBQTNCLE1BQTJCQSxDQUEzQjtBQUVBLE1BQU1xRCxPQUFLLEdBQUc7QUFDWmlKLFFBQUksV0FEUTtBQUVaQyxVQUFNLGFBRk07QUFHWjNJLFFBQUksV0FIUTtBQUlaeUksU0FBSyxZQUpPO0FBS1o3SSxrQkFBYywwQkFBdUJQO0FBTHpCLEdBQWQ7QUFRQSxNQUFNUSxXQUFTLEdBQUc7QUFDaEJ3YSxpQkFBYSxFQURHO0FBRWhCcFosVUFBTSxFQUZVO0FBR2hCMEssWUFBUSxFQUhRO0FBSWhCNUwsUUFBSSxFQUpZO0FBS2hCQyxRQUFJLEVBQVk7QUFMQSxHQUFsQjtBQVFBLE1BQU1ULFVBQVEsR0FBRztBQUNmb2IsWUFBUSxFQURPO0FBRWZKLGtCQUFjLEVBRkM7QUFHZnRaLFVBQU0sRUFIUztBQUlmMmIsYUFBUyxFQUpNO0FBS2Z0YixlQUFXLEVBTEk7QUFNZnVaLG1CQUFlLEVBTkE7QUFPZmdDLHlCQUFxQixFQUFHO0FBUFQsR0FBakI7QUFVQTs7Ozs7O01BTU1DOzs7QUFDSiwwQkFBcUI7QUFDbkI7QUFDRCxLLENBQUE7OztnQ0FRRDs7V0FFQXRULEksR0FBQUEsZ0JBQU87QUFBQTs7QUFDTCxVQUFJLDRCQUNBLHNDQUFzQ2dILElBQUksQ0FEMUMsZ0JBRUFwVSxDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxVQUEwQnlELFdBQVMsQ0FGbkMsTUFFQXpELENBRkEsSUFHQUEsQ0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsVUFBMEJ5RCxXQUFTLENBSHZDLFFBR0l6RCxDQUhKLEVBR21EO0FBQ2pEO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQU0yZ0IsV0FBVyxHQUFHM2dCLENBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLFNBQXlCbUQsVUFBUSxDQUFqQ25ELGdCQUFwQixDQUFvQkEsQ0FBcEI7QUFDQSxVQUFNVyxRQUFRLEdBQUdSLElBQUksQ0FBSkEsdUJBQTRCLEtBQTdDLFFBQWlCQSxDQUFqQjs7QUFFQSx1QkFBaUI7QUFDZixZQUFNeWdCLFlBQVksR0FBR0QsV0FBVyxDQUFYQSxxQkFBaUNBLFdBQVcsQ0FBWEEsYUFBakNBLE9BQWlFeGQsVUFBUSxDQUF6RXdkLFlBQXNGeGQsVUFBUSxDQUFuSDtBQUNBMGQsZ0JBQVEsR0FBRzdnQixDQUFDLENBQURBLFVBQVlBLENBQUMsQ0FBREEsV0FBQyxDQUFEQSxNQUF2QjZnQixZQUF1QjdnQixDQUFaQSxDQUFYNmdCO0FBQ0FBLGdCQUFRLEdBQUdBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFSQSxTQUFwQkEsQ0FBbUIsQ0FBbkJBO0FBQ0Q7O0FBRUQsVUFBTXhQLFNBQVMsR0FBRyxDQUFDLENBQUQsTUFBUWhPLE9BQUssQ0FBYixNQUFvQjtBQUNwQ3lILHFCQUFhLEVBQUUsS0FBS29HO0FBRGdCLE9BQXBCLENBQWxCO0FBSUEsVUFBTUMsU0FBUyxHQUFHLENBQUMsQ0FBRCxNQUFROU4sT0FBSyxDQUFiLE1BQW9CO0FBQ3BDeUgscUJBQWEsRUFBRStWO0FBRHFCLE9BQXBCLENBQWxCOztBQUlBLG9CQUFjO0FBQ1o3Z0IsU0FBQyxDQUFEQSxRQUFDLENBQURBO0FBQ0Q7O0FBRURBLE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBOztBQUVBLFVBQUltUixTQUFTLENBQVRBLHdCQUNBRSxTQUFTLENBRGIsa0JBQ0lBLEVBREosRUFDb0M7QUFDbEM7QUFDRDs7QUFFRCxvQkFBYztBQUNacEYsY0FBTSxHQUFHeEwsUUFBUSxDQUFSQSxjQUFUd0wsUUFBU3hMLENBQVR3TDtBQUNEOztBQUVELHFCQUNFLEtBREY7O0FBS0EsVUFBTXdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsWUFBTXFULFdBQVcsR0FBRyxDQUFDLENBQUQsTUFBUXpkLE9BQUssQ0FBYixRQUFzQjtBQUN4Q3lILHVCQUFhLEVBQUUsS0FBSSxDQUFDb0c7QUFEb0IsU0FBdEIsQ0FBcEI7QUFJQSxZQUFNbUQsVUFBVSxHQUFHLENBQUMsQ0FBRCxNQUFRaFIsT0FBSyxDQUFiLE9BQXFCO0FBQ3RDeUgsdUJBQWEsRUFBRStWO0FBRHVCLFNBQXJCLENBQW5CO0FBSUE3Z0IsU0FBQyxDQUFEQSxRQUFDLENBQURBO0FBQ0FBLFNBQUMsQ0FBQyxLQUFJLENBQU5BLFFBQUMsQ0FBREE7QUFWRjs7QUFhQSxrQkFBWTtBQUNWLCtCQUF1QmlNLE1BQU0sQ0FBN0I7QUFERixhQUVPO0FBQ0x3QixnQkFBUTtBQUNUO0FBQ0YsSzs7V0FFRHhKLE8sR0FBQUEsbUJBQVU7QUFDUmpFLE9BQUMsQ0FBREEsV0FBYSxLQUFiQTtBQUNBO0FBQ0QsSyxDQUFBOzs7V0FJRGdnQixTLEdBQUFBLGlEQUF3QztBQUFBOztBQUN0QyxVQUFNZSxjQUFjLEdBQUdqSCxTQUFTLEtBQUtBLFNBQVMsQ0FBVEEscUJBQStCQSxTQUFTLENBQVRBLGFBQTdDQSxJQUFTLENBQVRBLEdBQ25COVosQ0FBQyxDQUFEQSxTQUFDLENBQURBLE1BQWtCbUQsVUFBUSxDQURQMlcsU0FDbkI5WixDQURtQjhaLEdBRW5COVosQ0FBQyxDQUFEQSxTQUFDLENBQURBLFVBQXNCbUQsVUFBUSxDQUZsQyxNQUVJbkQsQ0FGSjtBQUlBLFVBQU1naEIsTUFBTSxHQUFHRCxjQUFjLENBQTdCLENBQTZCLENBQTdCO0FBQ0EsVUFBTUUsZUFBZSxHQUFHbk0sUUFBUSxJQUFLa00sTUFBYmxNLElBQXVCOVUsQ0FBQyxDQUFEQSxNQUFDLENBQURBLFVBQW1CeUQsV0FBUyxDQUEzRSxJQUErQ3pELENBQS9DOztBQUNBLFVBQU15TixRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLGVBQU0sTUFBSSxDQUFKLHFDQUFOLFFBQU0sQ0FBTjtBQUFqQjs7QUFNQSxVQUFJdVQsTUFBTSxJQUFWLGlCQUErQjtBQUM3QixZQUFNamdCLGtCQUFrQixHQUFHWixJQUFJLENBQUpBLGlDQUEzQixNQUEyQkEsQ0FBM0I7QUFFQUgsU0FBQyxDQUFEQSxNQUFDLENBQURBLGFBQ2V5RCxXQUFTLENBRHhCekQsVUFFT0csSUFBSSxDQUZYSDtBQUhGLGFBT087QUFDTHlOLGdCQUFRO0FBQ1Q7QUFDRixLOztXQUVEeVQsbUIsR0FBQUEsd0RBQStDO0FBQzdDLGtCQUFZO0FBQ1ZsaEIsU0FBQyxDQUFEQSxNQUFDLENBQURBLGFBQXNCeUQsV0FBUyxDQUEvQnpEO0FBRUEsWUFBTW1oQixhQUFhLEdBQUduaEIsQ0FBQyxDQUFDZ2hCLE1BQU0sQ0FBUmhoQixVQUFDLENBQURBLE1BQ3BCbUQsVUFBUSxDQURZbkQsdUJBQXRCLENBQXNCQSxDQUF0Qjs7QUFJQSwyQkFBbUI7QUFDakJBLFdBQUMsQ0FBREEsYUFBQyxDQUFEQSxhQUE2QnlELFdBQVMsQ0FBdEN6RDtBQUNEOztBQUVELFlBQUlnaEIsTUFBTSxDQUFOQSx5QkFBSixPQUEyQztBQUN6Q0EsZ0JBQU0sQ0FBTkE7QUFDRDtBQUNGOztBQUVEaGhCLE9BQUMsQ0FBREEsT0FBQyxDQUFEQSxVQUFvQnlELFdBQVMsQ0FBN0J6RDs7QUFDQSxVQUFJWSxPQUFPLENBQVBBLHlCQUFKLE9BQTRDO0FBQzFDQSxlQUFPLENBQVBBO0FBQ0Q7O0FBRURULFVBQUksQ0FBSkE7O0FBRUEsVUFBSVMsT0FBTyxDQUFQQSxtQkFBMkI2QyxXQUFTLENBQXhDLElBQUk3QyxDQUFKLEVBQWdEO0FBQzlDQSxlQUFPLENBQVBBLGNBQXNCNkMsV0FBUyxDQUEvQjdDO0FBQ0Q7O0FBRUQsVUFBSUEsT0FBTyxDQUFQQSxjQUFzQlosQ0FBQyxDQUFDWSxPQUFPLENBQVRaLFVBQUMsQ0FBREEsVUFBK0J5RCxXQUFTLENBQWxFLGFBQTBCekQsQ0FBMUIsRUFBbUY7QUFDakYsWUFBTW9oQixlQUFlLEdBQUdwaEIsQ0FBQyxDQUFEQSxPQUFDLENBQURBLFNBQW1CbUQsVUFBUSxDQUEzQm5ELFVBQXhCLENBQXdCQSxDQUF4Qjs7QUFFQSw2QkFBcUI7QUFDbkIsY0FBTXFoQixrQkFBa0IsR0FBRyxjQUFjRCxlQUFlLENBQWZBLGlCQUFpQ2plLFVBQVEsQ0FBbEYsZUFBeUNpZSxDQUFkLENBQTNCO0FBRUFwaEIsV0FBQyxDQUFEQSxrQkFBQyxDQUFEQSxVQUErQnlELFdBQVMsQ0FBeEN6RDtBQUNEOztBQUVEWSxlQUFPLENBQVBBO0FBQ0Q7O0FBRUQsb0JBQWM7QUFDWmtVLGdCQUFRO0FBQ1Q7QUFDRixLLENBQUE7OztRQUlNdFEsZ0IsR0FBUCxrQ0FBZ0M7QUFDOUIsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBTWlLLEtBQUssR0FBR3pPLENBQUMsQ0FBZixJQUFlLENBQWY7QUFDQSxZQUFJMEUsSUFBSSxHQUFHK0osS0FBSyxDQUFMQSxLQUFYLFVBQVdBLENBQVg7O0FBRUEsWUFBSSxDQUFKLE1BQVc7QUFDVC9KLGNBQUksR0FBRyxRQUFQQSxJQUFPLENBQVBBO0FBQ0ErSixlQUFLLENBQUxBO0FBQ0Q7O0FBRUQsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU8vSixJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsa0JBQU0sOENBQU4sSUFBTSxDQUFOO0FBQ0Q7O0FBQ0RBLGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUNEO0FBZEgsT0FBTyxDQUFQO0FBZ0JELEs7Ozs7MEJBektvQjtBQUNuQjtBQUNEOzs7OztBQTBLSDs7Ozs7OztBQU1BMUUsR0FBQyxDQUFEQSxRQUFDLENBQURBLElBQ01xRCxPQUFLLENBRFhyRCxnQkFDNEJtRCxVQUFRLENBRHBDbkQsYUFDa0QsaUJBQWlCO0FBQy9EQyxTQUFLLENBQUxBOztBQUNBeWdCLE9BQUcsQ0FBSEEsc0JBQTBCMWdCLENBQUMsQ0FBM0IwZ0IsSUFBMkIsQ0FBM0JBO0FBSEoxZ0I7QUFNQTs7Ozs7O0FBTUFBLEdBQUMsQ0FBREEsYUFBYTBnQixHQUFHLENBQWhCMWdCO0FBQ0FBLEdBQUMsQ0FBREE7O0FBQ0FBLEdBQUMsQ0FBREEsd0JBQXdCLFlBQU07QUFDNUJBLEtBQUMsQ0FBREE7QUFDQSxXQUFPMGdCLEdBQUcsQ0FBVjtBQUZGMWdCO0FDcFBBOzs7Ozs7O0FBTUEsTUFBTTZDLE1BQUksR0FBVjtBQUNBLE1BQU1DLFNBQU8sR0FBYjtBQUNBLE1BQU1DLFVBQVEsR0FBZDtBQUNBLE1BQU1DLFdBQVMsU0FBZjtBQUNBLE1BQU1FLG9CQUFrQixHQUFHbEQsQ0FBQyxDQUFEQSxHQUEzQixNQUEyQkEsQ0FBM0I7QUFFQSxNQUFNcUQsT0FBSyxHQUFHO0FBQ1p5UCxpQkFBYSxvQkFERDtBQUVaeEcsUUFBSSxXQUZRO0FBR1pDLFVBQU0sYUFITTtBQUlaM0ksUUFBSSxXQUpRO0FBS1p5SSxTQUFLLFlBQW1Ccko7QUFMWixHQUFkO0FBUUEsTUFBTVMsV0FBUyxHQUFHO0FBQ2hCRSxRQUFJLEVBRFk7QUFFaEIySSxRQUFJLEVBRlk7QUFHaEIxSSxRQUFJLEVBSFk7QUFJaEIwZCxXQUFPLEVBQUc7QUFKTSxHQUFsQjtBQU9BLE1BQU16YSxhQUFXLEdBQUc7QUFDbEI0UyxhQUFTLEVBRFM7QUFFbEI4SCxZQUFRLEVBRlU7QUFHbEIzSCxTQUFLLEVBQU87QUFITSxHQUFwQjtBQU1BLE1BQU10VCxTQUFPLEdBQUc7QUFDZG1ULGFBQVMsRUFESztBQUVkOEgsWUFBUSxFQUZNO0FBR2QzSCxTQUFLLEVBQU87QUFIRSxHQUFoQjtBQU1BLE1BQU16VyxVQUFRLEdBQUc7QUFDZnNRLGdCQUFZLEVBQUc7QUFEQSxHQUFqQjtBQUlBOzs7Ozs7TUFNTStOOzs7QUFDSixvQ0FBNkI7QUFDM0I7QUFDQSxxQkFBZ0IsZ0JBQWhCLE1BQWdCLENBQWhCO0FBQ0E7O0FBQ0E7QUFDRCxLLENBQUE7OztrQ0FnQkQ7O1dBRUFwVSxJLEdBQUFBLGdCQUFPO0FBQUE7O0FBQ0wsVUFBTStELFNBQVMsR0FBR25SLENBQUMsQ0FBREEsTUFBUXFELE9BQUssQ0FBL0IsSUFBa0JyRCxDQUFsQjtBQUVBQSxPQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQTs7QUFDQSxVQUFJbVIsU0FBUyxDQUFiLGtCQUFJQSxFQUFKLEVBQW9DO0FBQ2xDO0FBQ0Q7O0FBRUQsVUFBSSxhQUFKLFdBQTRCO0FBQzFCLG9DQUE0QjFOLFdBQVMsQ0FBckM7QUFDRDs7QUFFRCxVQUFNZ0ssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixhQUFJLENBQUosMEJBQStCaEssV0FBUyxDQUF4Qzs7QUFDQSxhQUFJLENBQUosdUJBQTRCQSxXQUFTLENBQXJDOztBQUVBekQsU0FBQyxDQUFDLEtBQUksQ0FBTkEsUUFBQyxDQUFEQSxTQUF5QnFELE9BQUssQ0FBOUJyRDs7QUFFQSxZQUFJLEtBQUksQ0FBSixRQUFKLFVBQTJCO0FBQ3pCLGVBQUksQ0FBSixXQUFnQkksVUFBVSxDQUFDLFlBQU07QUFDL0IsaUJBQUksQ0FBSjtBQUR3QixhQUV2QixLQUFJLENBQUosUUFGSCxLQUEwQixDQUExQjtBQUdEO0FBVkg7O0FBYUEscUNBQStCcUQsV0FBUyxDQUF4Qzs7QUFDQXRELFVBQUksQ0FBSkEsT0FBWSxLQUFaQTs7QUFDQSxrQ0FBNEJzRCxXQUFTLENBQXJDOztBQUNBLFVBQUksYUFBSixXQUE0QjtBQUMxQixZQUFNMUMsa0JBQWtCLEdBQUdaLElBQUksQ0FBSkEsaUNBQXNDLEtBQWpFLFFBQTJCQSxDQUEzQjtBQUVBSCxTQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxLQUNPRyxJQUFJLENBRFhIO0FBSEYsYUFNTztBQUNMeU4sZ0JBQVE7QUFDVDtBQUNGLEs7O1dBRURHLEksR0FBQUEsZ0JBQU87QUFDTCxVQUFJLENBQUMsaUNBQWlDbkssV0FBUyxDQUEvQyxJQUFLLENBQUwsRUFBdUQ7QUFDckQ7QUFDRDs7QUFFRCxVQUFNNE4sU0FBUyxHQUFHclIsQ0FBQyxDQUFEQSxNQUFRcUQsT0FBSyxDQUEvQixJQUFrQnJELENBQWxCO0FBRUFBLE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBOztBQUNBLFVBQUlxUixTQUFTLENBQWIsa0JBQUlBLEVBQUosRUFBb0M7QUFDbEM7QUFDRDs7QUFFRDtBQUNELEs7O1dBRURwTixPLEdBQUFBLG1CQUFVO0FBQ1I4RixrQkFBWSxDQUFDLEtBQWJBLFFBQVksQ0FBWkE7QUFDQTs7QUFFQSxVQUFJLGlDQUFpQ3RHLFdBQVMsQ0FBOUMsSUFBSSxDQUFKLEVBQXNEO0FBQ3BELHVDQUErQkEsV0FBUyxDQUF4QztBQUNEOztBQUVEekQsT0FBQyxDQUFDLEtBQUZBLFFBQUMsQ0FBREEsS0FBcUJxRCxPQUFLLENBQTFCckQ7QUFFQUEsT0FBQyxDQUFEQSxXQUFhLEtBQWJBO0FBQ0E7QUFDQTtBQUNELEssQ0FBQTs7O1dBSUR1SixVLEdBQUFBLDRCQUFtQjtBQUNqQnhILFlBQU0scUNBRUQvQixDQUFDLENBQUMsS0FBRkEsUUFBQyxDQUFEQSxDQUZDLElBRURBLEVBRkMsTUFHRCxrREFITCtCLEVBQU0sQ0FBTkE7QUFNQTVCLFVBQUksQ0FBSkEsZ0NBR0UsaUJBSEZBO0FBTUE7QUFDRCxLOztXQUVEbWMsYSxHQUFBQSx5QkFBZ0I7QUFBQTs7QUFDZHRjLE9BQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLElBQ0VxRCxPQUFLLENBRFByRCxlQUVFbUQsVUFBUSxDQUZWbkQsY0FHRTtBQUFBLGVBQU0sTUFBSSxDQUFWLElBQU0sRUFBTjtBQUhGQTtBQUtELEs7O1dBRUR5aEIsTSxHQUFBQSxrQkFBUztBQUFBOztBQUNQLFVBQU1oVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLGNBQUksQ0FBSix1QkFBNEJoSyxXQUFTLENBQXJDOztBQUNBekQsU0FBQyxDQUFDLE1BQUksQ0FBTkEsUUFBQyxDQUFEQSxTQUF5QnFELE9BQUssQ0FBOUJyRDtBQUZGOztBQUtBLHFDQUErQnlELFdBQVMsQ0FBeEM7O0FBQ0EsVUFBSSxhQUFKLFdBQTRCO0FBQzFCLFlBQU0xQyxrQkFBa0IsR0FBR1osSUFBSSxDQUFKQSxpQ0FBc0MsS0FBakUsUUFBMkJBLENBQTNCO0FBRUFILFNBQUMsQ0FBQyxLQUFGQSxRQUFDLENBQURBLEtBQ09HLElBQUksQ0FEWEg7QUFIRixhQU1PO0FBQ0x5TixnQkFBUTtBQUNUO0FBQ0YsSyxDQUFBOzs7VUFJTWpKLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQU1DLFFBQVEsR0FBR3pFLENBQUMsQ0FBbEIsSUFBa0IsQ0FBbEI7QUFDQSxZQUFJMEUsSUFBSSxHQUFTRCxRQUFRLENBQVJBLEtBQWpCLFVBQWlCQSxDQUFqQjs7QUFDQSxZQUFNcUgsT0FBTyxHQUFJLGdDQUFqQjs7QUFFQSxZQUFJLENBQUosTUFBVztBQUNUcEgsY0FBSSxHQUFHLGdCQUFQQSxPQUFPLENBQVBBO0FBQ0FELGtCQUFRLENBQVJBO0FBQ0Q7O0FBRUQsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU9DLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxrQkFBTSw4Q0FBTixJQUFNLENBQU47QUFDRDs7QUFFREEsY0FBSSxDQUFKQSxNQUFJLENBQUpBO0FBQ0Q7QUFoQkgsT0FBTyxDQUFQO0FBa0JELEs7Ozs7MEJBcEpvQjtBQUNuQjtBQUNEOzs7MEJBRXdCO0FBQ3ZCO0FBQ0Q7OzswQkFFb0I7QUFDbkI7QUFDRDs7Ozs7QUE2SUg7Ozs7Ozs7QUFNQTFFLEdBQUMsQ0FBREEsYUFBeUJ3aEIsS0FBSyxDQUE5QnhoQjtBQUNBQSxHQUFDLENBQURBOztBQUNBQSxHQUFDLENBQURBLHdCQUF5QixZQUFNO0FBQzdCQSxLQUFDLENBQURBO0FBQ0EsV0FBT3doQixLQUFLLENBQVo7QUFGRnhoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPQTs7Ozs7QUFNQSxDQUFDLFVBQVNnSyxDQUFULEVBQVcwWCxDQUFYLEVBQWE7QUFBQyw0Q0FBaUJDLE9BQWpCLE1BQTBCLGVBQWEsT0FBT0MsTUFBOUMsR0FBcURGLENBQUMsQ0FBQ0csbUJBQU8sQ0FBQyxzQkFBRCxDQUFSLENBQXRELEdBQTBFLFFBQXNDQyxpQ0FBTyxDQUFDLDJDQUFELENBQUQsb0NBQVlKLENBQVo7QUFBQTtBQUFBO0FBQUEsb0dBQTVDLEdBQTJEQSxTQUFySTtBQUE0SSxDQUExSixDQUEySixJQUEzSixFQUFnSyxVQUFTMVgsQ0FBVCxFQUFXO0FBQUM7O0FBQWEsV0FBUzBYLENBQVQsQ0FBVzFYLENBQVgsRUFBYTtBQUFDLFdBQU0sT0FBS0EsQ0FBQyxDQUFDQSxDQUFDLENBQUMrWCxNQUFGLEdBQVMsQ0FBVixDQUFaO0FBQXlCOztBQUFBLFdBQVNDLENBQVQsQ0FBV2hZLENBQVgsRUFBYTtBQUFDLFFBQUkwWCxDQUFDLEdBQUMxWCxDQUFDLENBQUNpWSxLQUFGLENBQVEsR0FBUixDQUFOO0FBQW1CLFFBQUcsTUFBSVAsQ0FBQyxDQUFDSyxNQUFULEVBQWdCLE9BQU9MLENBQUMsQ0FBQ1EsR0FBRixDQUFNLFVBQVNSLENBQVQsRUFBVztBQUFDLGNBQU8xWCxDQUFQO0FBQVUsYUFBSSxRQUFKO0FBQWEsaUJBQU0sS0FBTjs7QUFBWSxhQUFJLEtBQUo7QUFBVSxhQUFJLE1BQUo7QUFBVyxpQkFBTSxHQUFOOztBQUFVLGFBQUksT0FBSjtBQUFZLGFBQUksUUFBSjtBQUFhLGlCQUFNLE1BQU47O0FBQWE7QUFBUSxpQkFBTzBYLENBQVA7QUFBaEg7QUFBMEgsS0FBNUksQ0FBUDs7QUFBcUosWUFBTzFYLENBQVA7QUFBVSxXQUFJLFFBQUo7QUFBYSxlQUFNLENBQUMsS0FBRCxFQUFPLEtBQVAsQ0FBTjs7QUFBb0IsV0FBSSxLQUFKO0FBQVUsZUFBTSxDQUFDLEtBQUQsRUFBTyxHQUFQLENBQU47O0FBQWtCLFdBQUksUUFBSjtBQUFhLGVBQU0sQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUFOOztBQUFxQixXQUFJLE1BQUo7QUFBVyxlQUFNLENBQUMsR0FBRCxFQUFLLEtBQUwsQ0FBTjs7QUFBa0IsV0FBSSxPQUFKO0FBQVksZUFBTSxDQUFDLE1BQUQsRUFBUSxLQUFSLENBQU47O0FBQXFCO0FBQVEsZUFBTSxDQUFDQSxDQUFELEVBQUcsS0FBSCxDQUFOO0FBQS9LO0FBQWdNOztBQUFBLFdBQVNoRSxDQUFULENBQVdnRSxDQUFYLEVBQWEwWCxDQUFiLEVBQWVNLENBQWYsRUFBaUI7QUFBQyxhQUFTaGMsQ0FBVCxDQUFXZ0UsQ0FBWCxFQUFhMFgsQ0FBYixFQUFlO0FBQUMsVUFBSU0sQ0FBQyxHQUFDckssQ0FBQyxDQUFDd0ssWUFBRixDQUFlblksQ0FBZixDQUFOO0FBQXdCLFVBQUcyTixDQUFDLENBQUN5SyxZQUFGLENBQWVKLENBQWYsRUFBaUJOLENBQWpCLEdBQW9CL0osQ0FBQyxDQUFDMEssYUFBRixDQUFnQkwsQ0FBaEIsQ0FBcEIsRUFBdUMsQ0FBQ3JLLENBQUMsQ0FBQzJLLGtCQUFGLENBQXFCTixDQUFyQixFQUF1QnJLLENBQUMsQ0FBQzRLLGNBQXpCLENBQTNDLEVBQW9GLE1BQU0sSUFBSUMsS0FBSixDQUFVLG9CQUFrQjdLLENBQUMsQ0FBQzhLLGdCQUFGLENBQW1CVCxDQUFuQixDQUE1QixDQUFOO0FBQXlELGFBQU9BLENBQVA7QUFBUzs7QUFBQSxRQUFJVSxDQUFDLEdBQUMsRUFBTjtBQUFTLFFBQUdBLENBQUMsQ0FBQ3BELEVBQUYsR0FBSzNILENBQUMsQ0FBQ2dMLGFBQUYsRUFBTCxFQUF1QmhMLENBQUMsQ0FBQ2lMLFlBQUYsQ0FBZUYsQ0FBQyxDQUFDcEQsRUFBakIsRUFBb0J0WixDQUFDLENBQUMyUixDQUFDLENBQUNrTCxhQUFILEVBQWlCN1ksQ0FBakIsQ0FBckIsQ0FBdkIsRUFBaUUyTixDQUFDLENBQUNpTCxZQUFGLENBQWVGLENBQUMsQ0FBQ3BELEVBQWpCLEVBQW9CdFosQ0FBQyxDQUFDMlIsQ0FBQyxDQUFDbUwsZUFBSCxFQUFtQnBCLENBQW5CLENBQXJCLENBQWpFLEVBQTZHL0osQ0FBQyxDQUFDb0wsV0FBRixDQUFjTCxDQUFDLENBQUNwRCxFQUFoQixDQUE3RyxFQUFpSSxDQUFDM0gsQ0FBQyxDQUFDcUwsbUJBQUYsQ0FBc0JOLENBQUMsQ0FBQ3BELEVBQXhCLEVBQTJCM0gsQ0FBQyxDQUFDc0wsV0FBN0IsQ0FBckksRUFBK0ssTUFBTSxJQUFJVCxLQUFKLENBQVUsaUJBQWU3SyxDQUFDLENBQUN1TCxpQkFBRixDQUFvQlIsQ0FBQyxDQUFDcEQsRUFBdEIsQ0FBekIsQ0FBTjtBQUEwRG9ELEtBQUMsQ0FBQ1MsUUFBRixHQUFXLEVBQVgsRUFBY1QsQ0FBQyxDQUFDVSxTQUFGLEdBQVksRUFBMUIsRUFBNkJ6TCxDQUFDLENBQUMwTCxVQUFGLENBQWFYLENBQUMsQ0FBQ3BELEVBQWYsQ0FBN0IsRUFBZ0QzSCxDQUFDLENBQUMyTCx1QkFBRixDQUEwQixDQUExQixDQUFoRDs7QUFBNkUsU0FBSSxJQUFJQyxDQUFKLEVBQU1oTixDQUFOLEVBQVEwQixDQUFDLEdBQUMsc0JBQVYsRUFBaUN1TCxDQUFDLEdBQUN4WixDQUFDLEdBQUMwWCxDQUF6QyxFQUEyQyxTQUFPNkIsQ0FBQyxHQUFDdEwsQ0FBQyxDQUFDd0wsSUFBRixDQUFPRCxDQUFQLENBQVQsQ0FBM0M7QUFBZ0VqTixPQUFDLEdBQUNnTixDQUFDLENBQUMsQ0FBRCxDQUFILEVBQU9iLENBQUMsQ0FBQ1UsU0FBRixDQUFZN00sQ0FBWixJQUFlb0IsQ0FBQyxDQUFDK0wsa0JBQUYsQ0FBcUJoQixDQUFDLENBQUNwRCxFQUF2QixFQUEwQi9JLENBQTFCLENBQXRCO0FBQWhFOztBQUFtSCxXQUFPbU0sQ0FBUDtBQUFTOztBQUFBLFdBQVNBLENBQVQsQ0FBVzFZLENBQVgsRUFBYTBYLENBQWIsRUFBZTtBQUFDL0osS0FBQyxDQUFDZ00sYUFBRixDQUFnQmhNLENBQUMsQ0FBQ2lNLFFBQUYsSUFBWWxDLENBQUMsSUFBRSxDQUFmLENBQWhCLEdBQW1DL0osQ0FBQyxDQUFDa00sV0FBRixDQUFjbE0sQ0FBQyxDQUFDbU0sVUFBaEIsRUFBMkI5WixDQUEzQixDQUFuQztBQUFpRTs7QUFBQSxXQUFTdVosQ0FBVCxDQUFXdlosQ0FBWCxFQUFhO0FBQUMsUUFBSTBYLENBQUMsR0FBQyw0QkFBNEIrQixJQUE1QixDQUFpQ3paLENBQWpDLENBQU47QUFBMEMsV0FBTyxRQUFNMFgsQ0FBTixHQUFRLElBQVIsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBckI7QUFBeUI7O0FBQUEsV0FBU25MLENBQVQsQ0FBV3ZNLENBQVgsRUFBYTtBQUFDLFdBQU9BLENBQUMsQ0FBQytaLEtBQUYsQ0FBUSxRQUFSLENBQVA7QUFBeUI7O0FBQUEsTUFBSXBNLENBQUo7QUFBQSxNQUFNTSxDQUFDLEdBQUMsQ0FBQ2pPLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLGFBQVlBLENBQWYsR0FBaUJBLENBQUMsV0FBbEIsR0FBMkJBLENBQTlCLEVBQWlDcEIsTUFBakMsQ0FBUjtBQUFBLE1BQWlENGEsQ0FBQyxHQUFDLFlBQVU7QUFBQyxhQUFTeFosQ0FBVCxDQUFXQSxDQUFYLEVBQWEwWCxDQUFiLEVBQWUxYixDQUFmLEVBQWlCO0FBQUMsVUFBSTBjLENBQUMsR0FBQyxpQkFBZTFZLENBQXJCO0FBQUEsVUFBdUJ1WixDQUFDLEdBQUNiLENBQUMsR0FBQyxTQUEzQjtBQUFBLFVBQXFDbk0sQ0FBQyxHQUFDZ04sQ0FBQyxJQUFJdkIsQ0FBNUM7QUFBQSxVQUE4Q3JLLENBQUMsR0FBQyxDQUFDK0ssQ0FBRCxDQUFoRDtBQUFvRCxhQUFPbk0sQ0FBQyxJQUFFb0IsQ0FBQyxDQUFDcU0sSUFBRixDQUFPVCxDQUFQLENBQUgsRUFBYTtBQUFDVSxZQUFJLEVBQUN2QyxDQUFOO0FBQVF3QyxpQkFBUyxFQUFDbGUsQ0FBbEI7QUFBb0JtZSxxQkFBYSxFQUFDNU4sQ0FBbEM7QUFBb0M2TixrQkFBVSxFQUFDek07QUFBL0MsT0FBcEI7QUFBc0U7O0FBQUEsUUFBSStKLENBQUMsR0FBQ2poQixRQUFRLENBQUM0akIsYUFBVCxDQUF1QixRQUF2QixDQUFOO0FBQXVDLFFBQUcsRUFBRTFNLENBQUMsR0FBQytKLENBQUMsQ0FBQzRDLFVBQUYsQ0FBYSxPQUFiLEtBQXVCNUMsQ0FBQyxDQUFDNEMsVUFBRixDQUFhLG9CQUFiLENBQTNCLENBQUgsRUFBa0UsT0FBTyxJQUFQO0FBQVksUUFBSXRDLENBQUMsR0FBQyxFQUFOO0FBQVMsUUFBRyxDQUFDLG1CQUFELEVBQXFCLHdCQUFyQixFQUE4QywwQkFBOUMsRUFBeUUsK0JBQXpFLEVBQTBHdUMsT0FBMUcsQ0FBa0gsVUFBU3ZhLENBQVQsRUFBVztBQUFDLFVBQUkwWCxDQUFDLEdBQUMvSixDQUFDLENBQUM2TSxZQUFGLENBQWV4YSxDQUFmLENBQU47QUFBd0IwWCxPQUFDLEtBQUdNLENBQUMsQ0FBQ2hZLENBQUQsQ0FBRCxHQUFLMFgsQ0FBUixDQUFEO0FBQVksS0FBbEssR0FBb0ssQ0FBQ00sQ0FBQyxDQUFDeUMsaUJBQTFLLEVBQTRMLE9BQU8sSUFBUDtBQUFZLFFBQUl6ZSxDQUFDLEdBQUMsRUFBTjtBQUFTQSxLQUFDLENBQUNnZSxJQUFGLENBQU9oYSxDQUFDLENBQUMsT0FBRCxFQUFTMk4sQ0FBQyxDQUFDK00sS0FBWCxFQUFpQkMsWUFBakIsQ0FBUixHQUF3QzNDLENBQUMsQ0FBQzRDLHNCQUFGLElBQTBCNWUsQ0FBQyxDQUFDZ2UsSUFBRixDQUFPaGEsQ0FBQyxDQUFDLFlBQUQsRUFBY2dZLENBQUMsQ0FBQzRDLHNCQUFGLENBQXlCQyxjQUF2QyxFQUFzRCxJQUF0RCxDQUFSLENBQWxFO0FBQXVJLFFBQUluQyxDQUFDLEdBQUMvSyxDQUFDLENBQUNtTixhQUFGLEVBQU47QUFBQSxRQUF3QnZCLENBQUMsR0FBQzVMLENBQUMsQ0FBQ29OLGlCQUFGLEVBQTFCO0FBQWdEcE4sS0FBQyxDQUFDcU4sZUFBRixDQUFrQnJOLENBQUMsQ0FBQ3NOLFdBQXBCLEVBQWdDMUIsQ0FBaEMsR0FBbUM1TCxDQUFDLENBQUNrTSxXQUFGLENBQWNsTSxDQUFDLENBQUNtTSxVQUFoQixFQUEyQnBCLENBQTNCLENBQW5DLEVBQWlFL0ssQ0FBQyxDQUFDdU4sYUFBRixDQUFnQnZOLENBQUMsQ0FBQ21NLFVBQWxCLEVBQTZCbk0sQ0FBQyxDQUFDd04sa0JBQS9CLEVBQWtEeE4sQ0FBQyxDQUFDeU4sT0FBcEQsQ0FBakUsRUFBOEh6TixDQUFDLENBQUN1TixhQUFGLENBQWdCdk4sQ0FBQyxDQUFDbU0sVUFBbEIsRUFBNkJuTSxDQUFDLENBQUMwTixrQkFBL0IsRUFBa0QxTixDQUFDLENBQUN5TixPQUFwRCxDQUE5SCxFQUEyTHpOLENBQUMsQ0FBQ3VOLGFBQUYsQ0FBZ0J2TixDQUFDLENBQUNtTSxVQUFsQixFQUE2Qm5NLENBQUMsQ0FBQzJOLGNBQS9CLEVBQThDM04sQ0FBQyxDQUFDNE4sYUFBaEQsQ0FBM0wsRUFBMFA1TixDQUFDLENBQUN1TixhQUFGLENBQWdCdk4sQ0FBQyxDQUFDbU0sVUFBbEIsRUFBNkJuTSxDQUFDLENBQUM2TixjQUEvQixFQUE4QzdOLENBQUMsQ0FBQzROLGFBQWhELENBQTFQOztBQUF5VCxTQUFJLElBQUloUCxDQUFDLEdBQUMsSUFBTixFQUFXMEIsQ0FBQyxHQUFDLENBQWpCLEVBQW1CQSxDQUFDLEdBQUNqUyxDQUFDLENBQUMrYixNQUF2QixFQUE4QjlKLENBQUMsRUFBL0I7QUFBa0MsVUFBR04sQ0FBQyxDQUFDOE4sVUFBRixDQUFhOU4sQ0FBQyxDQUFDbU0sVUFBZixFQUEwQixDQUExQixFQUE0Qm5NLENBQUMsQ0FBQytOLElBQTlCLEVBQW1DLEVBQW5DLEVBQXNDLEVBQXRDLEVBQXlDLENBQXpDLEVBQTJDL04sQ0FBQyxDQUFDK04sSUFBN0MsRUFBa0QxZixDQUFDLENBQUNpUyxDQUFELENBQUQsQ0FBS2dNLElBQXZELEVBQTRELElBQTVELEdBQWtFdE0sQ0FBQyxDQUFDZ08sb0JBQUYsQ0FBdUJoTyxDQUFDLENBQUNzTixXQUF6QixFQUFxQ3ROLENBQUMsQ0FBQ2lPLGlCQUF2QyxFQUF5RGpPLENBQUMsQ0FBQ21NLFVBQTNELEVBQXNFcEIsQ0FBdEUsRUFBd0UsQ0FBeEUsQ0FBbEUsRUFBNkkvSyxDQUFDLENBQUNrTyxzQkFBRixDQUF5QmxPLENBQUMsQ0FBQ3NOLFdBQTNCLE1BQTBDdE4sQ0FBQyxDQUFDbU8sb0JBQTVMLEVBQWlOO0FBQUN2UCxTQUFDLEdBQUN2USxDQUFDLENBQUNpUyxDQUFELENBQUg7QUFBTztBQUFNO0FBQWpROztBQUFpUSxXQUFPMUIsQ0FBUDtBQUFTLEdBQWh1QyxFQUFuRDtBQUFBLE1BQXN4Q3dQLENBQUMsR0FBQyxVQUFTL2IsQ0FBVCxFQUFXMFgsQ0FBWCxFQUFhO0FBQUMsUUFBRztBQUFDLGFBQU8sSUFBSXNFLFNBQUosQ0FBY2hjLENBQWQsRUFBZ0IwWCxDQUFoQixDQUFQO0FBQTBCLEtBQTlCLENBQThCLE9BQU1NLENBQU4sRUFBUTtBQUFDLGFBQU92aEIsUUFBUSxDQUFDNGpCLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNDLFVBQWpDLENBQTRDLElBQTVDLEVBQWtEMkIsZUFBbEQsQ0FBa0VqYyxDQUFsRSxFQUFvRTBYLENBQXBFLENBQVA7QUFBOEU7QUFBQyxHQUFwSSxDQUFxSSxFQUFySSxFQUF3SSxFQUF4SSxDQUF4eEM7O0FBQW82QzFYLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtjLE9BQVYsQ0FBa0Isb0VBQWxCOztBQUF3RixNQUFJQyxDQUFDLEdBQUMsV0FBU3pFLENBQVQsRUFBV00sQ0FBWCxFQUFhO0FBQUMsYUFBU2hjLENBQVQsR0FBWTtBQUFDMGMsT0FBQyxDQUFDMEQsU0FBRixLQUFjMUQsQ0FBQyxDQUFDMkQsSUFBRixJQUFTQyxxQkFBcUIsQ0FBQ3RnQixDQUFELENBQTVDO0FBQWlEOztBQUFBLFFBQUkwYyxDQUFDLEdBQUMsSUFBTjtBQUFXLFNBQUs2RCxHQUFMLEdBQVN2YyxDQUFDLENBQUMwWCxDQUFELENBQVYsRUFBYyxLQUFLOEUsV0FBTCxHQUFpQnhFLENBQUMsQ0FBQ3dFLFdBQWpDLEVBQTZDLEtBQUtDLFVBQUwsR0FBZ0J6RSxDQUFDLENBQUN5RSxVQUEvRCxFQUEwRSxLQUFLQyxZQUFMLEdBQWtCLElBQUkvQixZQUFKLENBQWlCLENBQUMsSUFBRSxLQUFLOEIsVUFBUixFQUFtQixJQUFFLEtBQUtBLFVBQTFCLENBQWpCLENBQTVGLEVBQW9KLEtBQUtFLFdBQUwsR0FBaUIzRSxDQUFDLENBQUMyRSxXQUF2SyxFQUFtTCxLQUFLQyxVQUFMLEdBQWdCNUUsQ0FBQyxDQUFDNEUsVUFBck0sRUFBZ04sS0FBS0MsV0FBTCxHQUFpQjdFLENBQUMsQ0FBQzZFLFdBQW5PLEVBQStPLEtBQUtDLFFBQUwsR0FBYzlFLENBQUMsQ0FBQzhFLFFBQS9QO0FBQXdRLFFBQUl2RCxDQUFDLEdBQUM5aUIsUUFBUSxDQUFDNGpCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBTjtBQUF1Q2QsS0FBQyxDQUFDd0QsS0FBRixHQUFRLEtBQUtSLEdBQUwsQ0FBU1MsVUFBVCxFQUFSLEVBQThCekQsQ0FBQyxDQUFDMEQsTUFBRixHQUFTLEtBQUtWLEdBQUwsQ0FBU1csV0FBVCxFQUF2QyxFQUE4RCxLQUFLQyxNQUFMLEdBQVk1RCxDQUExRSxFQUE0RSxLQUFLNkQsT0FBTCxHQUFhcGQsQ0FBQyxDQUFDdVosQ0FBRCxDQUExRixFQUE4RixLQUFLNkQsT0FBTCxDQUFhQyxHQUFiLENBQWlCO0FBQUNDLGNBQVEsRUFBQyxVQUFWO0FBQXFCQyxVQUFJLEVBQUMsQ0FBMUI7QUFBNEJDLFNBQUcsRUFBQyxDQUFoQztBQUFrQ0MsV0FBSyxFQUFDLENBQXhDO0FBQTBDQyxZQUFNLEVBQUMsQ0FBakQ7QUFBbURDLFlBQU0sRUFBQyxDQUFDO0FBQTNELEtBQWpCLENBQTlGLEVBQThLLEtBQUtwQixHQUFMLENBQVNxQixRQUFULENBQWtCLGdCQUFsQixFQUFvQ0MsTUFBcEMsQ0FBMkN0RSxDQUEzQyxDQUE5SyxFQUE0TixLQUFLblIsT0FBTCxHQUFhdUYsQ0FBQyxHQUFDNEwsQ0FBQyxDQUFDZSxVQUFGLENBQWEsT0FBYixLQUF1QmYsQ0FBQyxDQUFDZSxVQUFGLENBQWEsb0JBQWIsQ0FBbFEsRUFBcVNkLENBQUMsQ0FBQ1ksVUFBRixDQUFhRyxPQUFiLENBQXFCLFVBQVN2YSxDQUFULEVBQVc7QUFBQzJOLE9BQUMsQ0FBQzZNLFlBQUYsQ0FBZXhhLENBQWY7QUFBa0IsS0FBbkQsQ0FBclMsRUFBMFYsS0FBSzhkLFVBQUwsR0FBZ0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBMVcsRUFBcVkvZCxDQUFDLENBQUNwQixNQUFELENBQUQsQ0FBVW9mLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLEtBQUtGLFVBQTNCLENBQXJZLEVBQTRhLEtBQUtHLFFBQUwsR0FBYyxFQUExYixFQUE2YixLQUFLQyxZQUFMLEdBQWtCLEVBQS9jLEVBQWtkLEtBQUtDLGdCQUFMLEdBQXNCLENBQXhlLEVBQTBlLEtBQUtDLGVBQUwsR0FBcUIsQ0FBL2Y7O0FBQWlnQixTQUFJLElBQUk3UixDQUFDLEdBQUNpTixDQUFDLENBQUNVLFNBQVIsRUFBa0JqTSxDQUFDLEdBQUMxQixDQUFDLEdBQUMsSUFBSUEsQ0FBSixDQUFNLEtBQUtrUSxVQUFMLEdBQWdCLEtBQUtBLFVBQXJCLEdBQWdDLENBQXRDLENBQUQsR0FBMEMsSUFBL0QsRUFBb0VWLENBQUMsR0FBQyxDQUExRSxFQUE0RUEsQ0FBQyxHQUFDLENBQTlFLEVBQWdGQSxDQUFDLEVBQWpGLEVBQW9GO0FBQUMsVUFBSUksQ0FBQyxHQUFDeE8sQ0FBQyxDQUFDbU4sYUFBRixFQUFOO0FBQUEsVUFBd0J1RCxDQUFDLEdBQUMxUSxDQUFDLENBQUNvTixpQkFBRixFQUExQjtBQUFnRHBOLE9BQUMsQ0FBQ3FOLGVBQUYsQ0FBa0JyTixDQUFDLENBQUNzTixXQUFwQixFQUFnQ29ELENBQWhDLEdBQW1DMVEsQ0FBQyxDQUFDa00sV0FBRixDQUFjbE0sQ0FBQyxDQUFDbU0sVUFBaEIsRUFBMkJxQyxDQUEzQixDQUFuQyxFQUFpRXhPLENBQUMsQ0FBQ3VOLGFBQUYsQ0FBZ0J2TixDQUFDLENBQUNtTSxVQUFsQixFQUE2Qm5NLENBQUMsQ0FBQ3dOLGtCQUEvQixFQUFrRDNCLENBQUMsQ0FBQ1csYUFBRixHQUFnQnhNLENBQUMsQ0FBQzJRLE1BQWxCLEdBQXlCM1EsQ0FBQyxDQUFDeU4sT0FBN0UsQ0FBakUsRUFBdUp6TixDQUFDLENBQUN1TixhQUFGLENBQWdCdk4sQ0FBQyxDQUFDbU0sVUFBbEIsRUFBNkJuTSxDQUFDLENBQUMwTixrQkFBL0IsRUFBa0Q3QixDQUFDLENBQUNXLGFBQUYsR0FBZ0J4TSxDQUFDLENBQUMyUSxNQUFsQixHQUF5QjNRLENBQUMsQ0FBQ3lOLE9BQTdFLENBQXZKLEVBQTZPek4sQ0FBQyxDQUFDdU4sYUFBRixDQUFnQnZOLENBQUMsQ0FBQ21NLFVBQWxCLEVBQTZCbk0sQ0FBQyxDQUFDMk4sY0FBL0IsRUFBOEMzTixDQUFDLENBQUM0TixhQUFoRCxDQUE3TyxFQUE0UzVOLENBQUMsQ0FBQ3VOLGFBQUYsQ0FBZ0J2TixDQUFDLENBQUNtTSxVQUFsQixFQUE2Qm5NLENBQUMsQ0FBQzZOLGNBQS9CLEVBQThDN04sQ0FBQyxDQUFDNE4sYUFBaEQsQ0FBNVMsRUFBMlc1TixDQUFDLENBQUM4TixVQUFGLENBQWE5TixDQUFDLENBQUNtTSxVQUFmLEVBQTBCLENBQTFCLEVBQTRCbk0sQ0FBQyxDQUFDK04sSUFBOUIsRUFBbUMsS0FBS2UsVUFBeEMsRUFBbUQsS0FBS0EsVUFBeEQsRUFBbUUsQ0FBbkUsRUFBcUU5TyxDQUFDLENBQUMrTixJQUF2RSxFQUE0RWxDLENBQUMsQ0FBQ1MsSUFBOUUsRUFBbUZoTSxDQUFuRixDQUEzVyxFQUFpY04sQ0FBQyxDQUFDZ08sb0JBQUYsQ0FBdUJoTyxDQUFDLENBQUNzTixXQUF6QixFQUFxQ3ROLENBQUMsQ0FBQ2lPLGlCQUF2QyxFQUF5RGpPLENBQUMsQ0FBQ21NLFVBQTNELEVBQXNFcUMsQ0FBdEUsRUFBd0UsQ0FBeEUsQ0FBamMsRUFBNGdCLEtBQUs4QixRQUFMLENBQWNqRSxJQUFkLENBQW1CbUMsQ0FBbkIsQ0FBNWdCLEVBQWtpQixLQUFLK0IsWUFBTCxDQUFrQmxFLElBQWxCLENBQXVCcUUsQ0FBdkIsQ0FBbGlCO0FBQTRqQjs7QUFBQSxTQUFLRSxJQUFMLEdBQVU1USxDQUFDLENBQUM2USxZQUFGLEVBQVYsRUFBMkI3USxDQUFDLENBQUM4USxVQUFGLENBQWE5USxDQUFDLENBQUMrUSxZQUFmLEVBQTRCLEtBQUtILElBQWpDLENBQTNCLEVBQWtFNVEsQ0FBQyxDQUFDZ1IsVUFBRixDQUFhaFIsQ0FBQyxDQUFDK1EsWUFBZixFQUE0QixJQUFJL0QsWUFBSixDQUFpQixDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFDLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFDLENBQWpCLEVBQW1CLENBQW5CLENBQWpCLENBQTVCLEVBQW9FaE4sQ0FBQyxDQUFDaVIsV0FBdEUsQ0FBbEUsRUFBcUosS0FBS0MsV0FBTCxFQUFySixFQUF3SyxLQUFLQyxXQUFMLEVBQXhLLEVBQTJMLEtBQUtDLHFCQUFMLEVBQTNMLEVBQXdOLEtBQUtDLFNBQUwsRUFBeE4sRUFBeU9yUixDQUFDLENBQUNzUixVQUFGLENBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsQ0FBek8sRUFBK1B0UixDQUFDLENBQUN1UixTQUFGLENBQVl2UixDQUFDLENBQUN3UixTQUFkLEVBQXdCeFIsQ0FBQyxDQUFDeVIsbUJBQTFCLENBQS9QLEVBQThTLEtBQUtDLE9BQUwsR0FBYSxDQUFDLENBQTVULEVBQThULEtBQUtDLE9BQUwsR0FBYSxDQUFDLENBQTVVLEVBQThVLEtBQUtDLE1BQUwsR0FBWSxDQUFDLENBQTNWLEVBQTZWLEtBQUtuRCxTQUFMLEdBQWUsQ0FBQyxDQUE3VyxFQUErVyxLQUFLb0Qsa0JBQUwsRUFBL1csRUFBeVlsRCxxQkFBcUIsQ0FBQ3RnQixDQUFELENBQTlaO0FBQWthLEdBQWgvRDs7QUFBaS9EbWdCLEdBQUMsQ0FBQ3NELFFBQUYsR0FBVztBQUFDM0MsWUFBUSxFQUFDLElBQVY7QUFBZUwsY0FBVSxFQUFDLEdBQTFCO0FBQThCRyxjQUFVLEVBQUMsRUFBekM7QUFBNENELGVBQVcsRUFBQyxHQUF4RDtBQUE0REgsZUFBVyxFQUFDLENBQUMsQ0FBekU7QUFBMkVLLGVBQVcsRUFBQztBQUF2RixHQUFYLEVBQXNHVixDQUFDLENBQUN1RCxTQUFGLEdBQVk7QUFBQ0Ysc0JBQWtCLEVBQUMsOEJBQVU7QUFBQyxlQUFTeGYsQ0FBVCxHQUFZO0FBQUMsZUFBT2dZLENBQUMsQ0FBQ3FILE9BQUYsSUFBV3JILENBQUMsQ0FBQ3NILE9BQWIsSUFBc0J0SCxDQUFDLENBQUN3RSxXQUEvQjtBQUEyQzs7QUFBQSxlQUFTOUUsQ0FBVCxDQUFXQSxDQUFYLEVBQWExYixDQUFiLEVBQWU7QUFBQ2dFLFNBQUMsTUFBSWdZLENBQUMsQ0FBQzJILGFBQUYsQ0FBZ0JqSSxDQUFoQixFQUFrQk0sQ0FBQyxDQUFDNEUsVUFBRixJQUFjNWdCLENBQUMsR0FBQyxHQUFELEdBQUssQ0FBcEIsQ0FBbEIsRUFBeUNBLENBQUMsR0FBQyxHQUFELEdBQUssR0FBL0MsQ0FBTDtBQUF5RDs7QUFBQSxVQUFJZ2MsQ0FBQyxHQUFDLElBQU47QUFBVyxXQUFLdUUsR0FBTCxDQUFTeUIsRUFBVCxDQUFZLG1CQUFaLEVBQWdDLFVBQVNoZSxDQUFULEVBQVc7QUFBQzBYLFNBQUMsQ0FBQzFYLENBQUQsQ0FBRDtBQUFLLE9BQWpELEVBQW1EZ2UsRUFBbkQsQ0FBc0Qsc0NBQXRELEVBQTZGLFVBQVNoZSxDQUFULEVBQVc7QUFBQyxhQUFJLElBQUlnWSxDQUFDLEdBQUNoWSxDQUFDLENBQUM0ZixhQUFGLENBQWdCQyxjQUF0QixFQUFxQzdqQixDQUFDLEdBQUMsQ0FBM0MsRUFBNkNBLENBQUMsR0FBQ2djLENBQUMsQ0FBQ0QsTUFBakQsRUFBd0QvYixDQUFDLEVBQXpEO0FBQTREMGIsV0FBQyxDQUFDTSxDQUFDLENBQUNoYyxDQUFELENBQUYsQ0FBRDtBQUE1RDtBQUFvRSxPQUE3SyxFQUErS2dpQixFQUEvSyxDQUFrTCxtQkFBbEwsRUFBc00sVUFBU2hlLENBQVQsRUFBVztBQUFDMFgsU0FBQyxDQUFDMVgsQ0FBRCxFQUFHLENBQUMsQ0FBSixDQUFEO0FBQVEsT0FBMU47QUFBNE4sS0FBdlk7QUFBd1lnZixhQUFTLEVBQUMscUJBQVU7QUFBQyxVQUFJaGYsQ0FBQyxHQUFDLElBQU47QUFBVzJOLE9BQUMsR0FBQyxLQUFLdkYsT0FBUDtBQUFlLFVBQUlzUCxDQUFDLEdBQUMsS0FBS29GLFFBQUwsSUFBZXZELENBQUMsQ0FBQyxLQUFLdUcsMEJBQU4sQ0FBaEIsSUFBbUR2RyxDQUFDLENBQUMsS0FBS2dELEdBQUwsQ0FBU2MsR0FBVCxDQUFhLGlCQUFiLENBQUQsQ0FBMUQ7QUFBNEYsVUFBRzNGLENBQUMsSUFBRSxLQUFLcUksV0FBWCxFQUF1QixJQUFHLEtBQUtBLFdBQUwsR0FBaUJySSxDQUFqQixFQUFtQixLQUFLcUksV0FBM0IsRUFBdUM7QUFBQyxZQUFJL0gsQ0FBQyxHQUFDLElBQUlnSSxLQUFKLEVBQU47QUFBZ0JoSSxTQUFDLENBQUNpSSxNQUFGLEdBQVMsWUFBVTtBQUFDLG1CQUFTdkksQ0FBVCxDQUFXMVgsQ0FBWCxFQUFhO0FBQUMsbUJBQU8sTUFBSUEsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBUixDQUFQO0FBQWtCOztBQUFBMk4sV0FBQyxHQUFDM04sQ0FBQyxDQUFDb0ksT0FBSjtBQUFZLGNBQUlwTSxDQUFDLEdBQUMwYixDQUFDLENBQUNNLENBQUMsQ0FBQytFLEtBQUgsQ0FBRCxJQUFZckYsQ0FBQyxDQUFDTSxDQUFDLENBQUNpRixNQUFILENBQWIsR0FBd0J0UCxDQUFDLENBQUN1UyxNQUExQixHQUFpQ3ZTLENBQUMsQ0FBQzROLGFBQXpDO0FBQXVENU4sV0FBQyxDQUFDa00sV0FBRixDQUFjbE0sQ0FBQyxDQUFDbU0sVUFBaEIsRUFBMkI5WixDQUFDLENBQUNtZ0IsaUJBQTdCLEdBQWdEeFMsQ0FBQyxDQUFDdU4sYUFBRixDQUFnQnZOLENBQUMsQ0FBQ21NLFVBQWxCLEVBQTZCbk0sQ0FBQyxDQUFDMk4sY0FBL0IsRUFBOEN0ZixDQUE5QyxDQUFoRCxFQUFpRzJSLENBQUMsQ0FBQ3VOLGFBQUYsQ0FBZ0J2TixDQUFDLENBQUNtTSxVQUFsQixFQUE2Qm5NLENBQUMsQ0FBQzZOLGNBQS9CLEVBQThDeGYsQ0FBOUMsQ0FBakcsRUFBa0oyUixDQUFDLENBQUM4TixVQUFGLENBQWE5TixDQUFDLENBQUNtTSxVQUFmLEVBQTBCLENBQTFCLEVBQTRCbk0sQ0FBQyxDQUFDK04sSUFBOUIsRUFBbUMvTixDQUFDLENBQUMrTixJQUFyQyxFQUEwQy9OLENBQUMsQ0FBQ3lTLGFBQTVDLEVBQTBEcEksQ0FBMUQsQ0FBbEosRUFBK01oWSxDQUFDLENBQUNxZ0IsZUFBRixHQUFrQnJJLENBQUMsQ0FBQytFLEtBQW5PLEVBQXlPL2MsQ0FBQyxDQUFDc2dCLGdCQUFGLEdBQW1CdEksQ0FBQyxDQUFDaUYsTUFBOVAsRUFBcVFqZCxDQUFDLENBQUN1Z0IsaUJBQUYsRUFBclE7QUFBMlIsU0FBbFosRUFBbVp2SSxDQUFDLENBQUN3SSxPQUFGLEdBQVUsWUFBVTtBQUFDN1MsV0FBQyxHQUFDM04sQ0FBQyxDQUFDb0ksT0FBSixFQUFZcEksQ0FBQyxDQUFDK2UscUJBQUYsRUFBWjtBQUFzQyxTQUE5YyxFQUErYy9HLENBQUMsQ0FBQzZFLFdBQUYsR0FBY3RRLENBQUMsQ0FBQyxLQUFLd1QsV0FBTixDQUFELEdBQW9CLElBQXBCLEdBQXlCLEtBQUtsRCxXQUEzZixFQUF1Z0I3RSxDQUFDLENBQUN5SSxHQUFGLEdBQU0sS0FBS1YsV0FBbGhCO0FBQThoQixPQUF0bEIsTUFBMmxCLEtBQUtoQixxQkFBTDtBQUE2QixLQUFscUM7QUFBbXFDMUMsUUFBSSxFQUFDLGdCQUFVO0FBQUMxTyxPQUFDLEdBQUMsS0FBS3ZGLE9BQVAsRUFBZSxLQUFLaVgsT0FBTCxLQUFlLEtBQUtxQix3QkFBTCxJQUFnQyxLQUFLcEIsT0FBTCxJQUFjLEtBQUtoWSxNQUFMLEVBQTlDLEVBQTRELEtBQUtxWixNQUFMLEVBQTNFLENBQWY7QUFBeUcsS0FBNXhDO0FBQTZ4Q0MsWUFBUSxFQUFDLG9CQUFVO0FBQUNqVCxPQUFDLENBQUM4USxVQUFGLENBQWE5USxDQUFDLENBQUMrUSxZQUFmLEVBQTRCLEtBQUtILElBQWpDLEdBQXVDNVEsQ0FBQyxDQUFDa1QsbUJBQUYsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEJsVCxDQUFDLENBQUMrTSxLQUE1QixFQUFrQyxDQUFDLENBQW5DLEVBQXFDLENBQXJDLEVBQXVDLENBQXZDLENBQXZDLEVBQWlGL00sQ0FBQyxDQUFDbVQsVUFBRixDQUFhblQsQ0FBQyxDQUFDb1QsWUFBZixFQUE0QixDQUE1QixFQUE4QixDQUE5QixDQUFqRjtBQUFrSCxLQUFuNkM7QUFBbzZDSixVQUFNLEVBQUMsa0JBQVU7QUFBQ2hULE9BQUMsQ0FBQ3FOLGVBQUYsQ0FBa0JyTixDQUFDLENBQUNzTixXQUFwQixFQUFnQyxJQUFoQyxHQUFzQ3ROLENBQUMsQ0FBQ3FULFFBQUYsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLEtBQUs3RCxNQUFMLENBQVlKLEtBQTNCLEVBQWlDLEtBQUtJLE1BQUwsQ0FBWUYsTUFBN0MsQ0FBdEMsRUFBMkZ0UCxDQUFDLENBQUNrRCxNQUFGLENBQVNsRCxDQUFDLENBQUNzVCxLQUFYLENBQTNGLEVBQTZHdFQsQ0FBQyxDQUFDdVQsS0FBRixDQUFRdlQsQ0FBQyxDQUFDd1QsZ0JBQUYsR0FBbUJ4VCxDQUFDLENBQUN5VCxnQkFBN0IsQ0FBN0csRUFBNEp6VCxDQUFDLENBQUMwTCxVQUFGLENBQWEsS0FBS2dJLGFBQUwsQ0FBbUIvTCxFQUFoQyxDQUE1SixFQUFnTW9ELENBQUMsQ0FBQyxLQUFLeUgsaUJBQU4sRUFBd0IsQ0FBeEIsQ0FBak0sRUFBNE56SCxDQUFDLENBQUMsS0FBS3VGLFFBQUwsQ0FBYyxDQUFkLENBQUQsRUFBa0IsQ0FBbEIsQ0FBN04sRUFBa1B0USxDQUFDLENBQUMyVCxTQUFGLENBQVksS0FBS0QsYUFBTCxDQUFtQmpJLFNBQW5CLENBQTZCdUQsV0FBekMsRUFBcUQsS0FBS0EsV0FBMUQsQ0FBbFAsRUFBeVRoUCxDQUFDLENBQUM0VCxVQUFGLENBQWEsS0FBS0YsYUFBTCxDQUFtQmpJLFNBQW5CLENBQTZCb0ksT0FBMUMsRUFBa0QsS0FBS0gsYUFBTCxDQUFtQmxJLFFBQW5CLENBQTRCcUksT0FBOUUsQ0FBelQsRUFBZ1o3VCxDQUFDLENBQUM0VCxVQUFGLENBQWEsS0FBS0YsYUFBTCxDQUFtQmpJLFNBQW5CLENBQTZCcUksV0FBMUMsRUFBc0QsS0FBS0osYUFBTCxDQUFtQmxJLFFBQW5CLENBQTRCc0ksV0FBbEYsQ0FBaFosRUFBK2U5VCxDQUFDLENBQUM0VCxVQUFGLENBQWEsS0FBS0YsYUFBTCxDQUFtQmpJLFNBQW5CLENBQTZCc0ksY0FBMUMsRUFBeUQsS0FBS0wsYUFBTCxDQUFtQmxJLFFBQW5CLENBQTRCdUksY0FBckYsQ0FBL2UsRUFBb2xCL1QsQ0FBQyxDQUFDZ1UsU0FBRixDQUFZLEtBQUtOLGFBQUwsQ0FBbUJqSSxTQUFuQixDQUE2QndJLGlCQUF6QyxFQUEyRCxDQUEzRCxDQUFwbEIsRUFBa3BCalUsQ0FBQyxDQUFDZ1UsU0FBRixDQUFZLEtBQUtOLGFBQUwsQ0FBbUJqSSxTQUFuQixDQUE2QnlJLGNBQXpDLEVBQXdELENBQXhELENBQWxwQixFQUE2c0IsS0FBS2pCLFFBQUwsRUFBN3NCLEVBQTZ0QmpULENBQUMsQ0FBQ21ELE9BQUYsQ0FBVW5ELENBQUMsQ0FBQ3NULEtBQVosQ0FBN3RCO0FBQWd2QixLQUF0cUU7QUFBdXFFM1osVUFBTSxFQUFDLGtCQUFVO0FBQUNxRyxPQUFDLENBQUNxVCxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxLQUFLdkUsVUFBcEIsRUFBK0IsS0FBS0EsVUFBcEMsR0FBZ0Q5TyxDQUFDLENBQUNxTixlQUFGLENBQWtCck4sQ0FBQyxDQUFDc04sV0FBcEIsRUFBZ0MsS0FBS2lELFlBQUwsQ0FBa0IsS0FBS0MsZ0JBQXZCLENBQWhDLENBQWhELEVBQTBIekYsQ0FBQyxDQUFDLEtBQUt1RixRQUFMLENBQWMsS0FBS0csZUFBbkIsQ0FBRCxDQUEzSCxFQUFpS3pRLENBQUMsQ0FBQzBMLFVBQUYsQ0FBYSxLQUFLeUksYUFBTCxDQUFtQnhNLEVBQWhDLENBQWpLLEVBQXFNLEtBQUtzTCxRQUFMLEVBQXJNLEVBQXFOLEtBQUttQixpQkFBTCxFQUFyTjtBQUE4TyxLQUF2NkU7QUFBdzZFQSxxQkFBaUIsRUFBQyw2QkFBVTtBQUFDLFdBQUs1RCxnQkFBTCxHQUFzQixJQUFFLEtBQUtBLGdCQUE3QixFQUE4QyxLQUFLQyxlQUFMLEdBQXFCLElBQUUsS0FBS0EsZUFBMUU7QUFBMEYsS0FBL2hGO0FBQWdpRnNDLDRCQUF3QixFQUFDLG9DQUFVO0FBQUMsVUFBSTFnQixDQUFKO0FBQUEsVUFBTWhFLENBQUMsR0FBQyxLQUFLdWdCLEdBQUwsQ0FBU2MsR0FBVCxDQUFhLGlCQUFiLENBQVI7QUFBQSxVQUF3QzNFLENBQUMsR0FBQyxLQUFLNkQsR0FBTCxDQUFTYyxHQUFULENBQWEsdUJBQWIsQ0FBMUM7QUFBQSxVQUFnRjlELENBQUMsR0FBQ3ZCLENBQUMsQ0FBQyxLQUFLdUUsR0FBTCxDQUFTYyxHQUFULENBQWEscUJBQWIsQ0FBRCxDQUFuRjtBQUF5SCxVQUFHLFdBQVMzRSxDQUFULElBQVksQ0FBQzFZLENBQUMsR0FBQztBQUFDdWQsWUFBSSxFQUFDM2UsTUFBTSxDQUFDb2pCLFdBQWI7QUFBeUJ4RSxXQUFHLEVBQUM1ZSxNQUFNLENBQUNxakI7QUFBcEMsT0FBSCxFQUFxRGxGLEtBQXJELEdBQTJEOU8sQ0FBQyxDQUFDOE8sS0FBRixFQUEzRCxFQUFxRS9jLENBQUMsQ0FBQ2lkLE1BQUYsR0FBU2hQLENBQUMsQ0FBQ2dQLE1BQUYsRUFBMUYsS0FBdUcsQ0FBQ2pkLENBQUMsR0FBQyxLQUFLdWMsR0FBTCxDQUFTOVYsTUFBVCxFQUFILEVBQXNCc1csS0FBdEIsR0FBNEIsS0FBS1IsR0FBTCxDQUFTUyxVQUFULEVBQTVCLEVBQWtEaGQsQ0FBQyxDQUFDaWQsTUFBRixHQUFTLEtBQUtWLEdBQUwsQ0FBU1csV0FBVCxFQUFsSyxHQUEwTCxXQUFTbGhCLENBQXRNLEVBQXdNLElBQUl1USxDQUFDLEdBQUMvVixJQUFJLENBQUMwckIsR0FBTCxDQUFTbGlCLENBQUMsQ0FBQytjLEtBQUYsR0FBUSxLQUFLc0QsZUFBdEIsRUFBc0NyZ0IsQ0FBQyxDQUFDaWQsTUFBRixHQUFTLEtBQUtxRCxnQkFBcEQsQ0FBTjtBQUFBLFVBQTRFM1MsQ0FBQyxHQUFDLEtBQUswUyxlQUFMLEdBQXFCOVQsQ0FBbkc7QUFBQSxVQUFxR2lOLENBQUMsR0FBQyxLQUFLOEcsZ0JBQUwsR0FBc0IvVCxDQUE3SCxDQUF4TSxLQUE0VSxJQUFHLGFBQVd2USxDQUFkLEVBQWdCLElBQUl1USxDQUFDLEdBQUMvVixJQUFJLENBQUMyckIsR0FBTCxDQUFTbmlCLENBQUMsQ0FBQytjLEtBQUYsR0FBUSxLQUFLc0QsZUFBdEIsRUFBc0NyZ0IsQ0FBQyxDQUFDaWQsTUFBRixHQUFTLEtBQUtxRCxnQkFBcEQsQ0FBTjtBQUFBLFVBQTRFM1MsQ0FBQyxHQUFDLEtBQUswUyxlQUFMLEdBQXFCOVQsQ0FBbkc7QUFBQSxVQUFxR2lOLENBQUMsR0FBQyxLQUFLOEcsZ0JBQUwsR0FBc0IvVCxDQUE3SCxDQUFoQixLQUFtSjtBQUFDLFlBQUlvQixDQUFDLEdBQUMsQ0FBQzNSLENBQUMsR0FBQ0EsQ0FBQyxDQUFDaWMsS0FBRixDQUFRLEdBQVIsQ0FBSCxFQUFpQixDQUFqQixLQUFxQixFQUEzQjtBQUFBLFlBQThCdUIsQ0FBQyxHQUFDeGQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNMlIsQ0FBdEM7QUFBd0MrSixTQUFDLENBQUMvSixDQUFELENBQUQsR0FBS0EsQ0FBQyxHQUFDM04sQ0FBQyxDQUFDK2MsS0FBRixHQUFRN2xCLFVBQVUsQ0FBQ3lXLENBQUQsQ0FBbEIsR0FBc0IsR0FBN0IsR0FBaUMsVUFBUUEsQ0FBUixLQUFZQSxDQUFDLEdBQUN6VyxVQUFVLENBQUN5VyxDQUFELENBQXhCLENBQWpDLEVBQThEK0osQ0FBQyxDQUFDOEIsQ0FBRCxDQUFELEdBQUtBLENBQUMsR0FBQ3haLENBQUMsQ0FBQ2lkLE1BQUYsR0FBUy9sQixVQUFVLENBQUNzaUIsQ0FBRCxDQUFuQixHQUF1QixHQUE5QixHQUFrQyxVQUFRQSxDQUFSLEtBQVlBLENBQUMsR0FBQ3RpQixVQUFVLENBQUNzaUIsQ0FBRCxDQUF4QixDQUFoRyxFQUE2SCxVQUFRN0wsQ0FBUixJQUFXLFVBQVE2TCxDQUFuQixJQUFzQjdMLENBQUMsR0FBQyxLQUFLMFMsZUFBUCxFQUF1QjdHLENBQUMsR0FBQyxLQUFLOEcsZ0JBQXBELEtBQXVFLFVBQVEzUyxDQUFSLEtBQVlBLENBQUMsR0FBQyxLQUFLMFMsZUFBTCxJQUFzQjdHLENBQUMsR0FBQyxLQUFLOEcsZ0JBQTdCLENBQWQsR0FBOEQsVUFBUTlHLENBQVIsS0FBWUEsQ0FBQyxHQUFDLEtBQUs4RyxnQkFBTCxJQUF1QjNTLENBQUMsR0FBQyxLQUFLMFMsZUFBOUIsQ0FBZCxDQUFySSxDQUE3SDtBQUFpVTtBQUFBLFVBQUl0RSxDQUFDLEdBQUN4QyxDQUFDLENBQUMsQ0FBRCxDQUFQO0FBQUEsVUFBVzRDLENBQUMsR0FBQzVDLENBQUMsQ0FBQyxDQUFELENBQWQ7QUFBa0J3QyxPQUFDLEdBQUNyRSxDQUFDLENBQUNxRSxDQUFELENBQUQsR0FBSy9iLENBQUMsQ0FBQ3VkLElBQUYsR0FBTyxDQUFDdmQsQ0FBQyxDQUFDK2MsS0FBRixHQUFRcFAsQ0FBVCxJQUFZelcsVUFBVSxDQUFDNmtCLENBQUQsQ0FBdEIsR0FBMEIsR0FBdEMsR0FBMEMvYixDQUFDLENBQUN1ZCxJQUFGLEdBQU9ybUIsVUFBVSxDQUFDNmtCLENBQUQsQ0FBN0QsRUFBaUVJLENBQUMsR0FBQ3pFLENBQUMsQ0FBQ3lFLENBQUQsQ0FBRCxHQUFLbmMsQ0FBQyxDQUFDd2QsR0FBRixHQUFNLENBQUN4ZCxDQUFDLENBQUNpZCxNQUFGLEdBQVN6RCxDQUFWLElBQWF0aUIsVUFBVSxDQUFDaWxCLENBQUQsQ0FBdkIsR0FBMkIsR0FBdEMsR0FBMENuYyxDQUFDLENBQUN3ZCxHQUFGLEdBQU10bUIsVUFBVSxDQUFDaWxCLENBQUQsQ0FBN0g7QUFBaUksVUFBSWtDLENBQUMsR0FBQyxLQUFLOUIsR0FBTCxDQUFTOVYsTUFBVCxFQUFOO0FBQXdCLFdBQUs0YSxhQUFMLENBQW1CbEksUUFBbkIsQ0FBNEJxSSxPQUE1QixHQUFvQyxJQUFJN0csWUFBSixDQUFpQixDQUFDLENBQUMwRCxDQUFDLENBQUNkLElBQUYsR0FBT3hCLENBQVIsSUFBV3BPLENBQVosRUFBYyxDQUFDMFEsQ0FBQyxDQUFDYixHQUFGLEdBQU1yQixDQUFQLElBQVUzQyxDQUF4QixDQUFqQixDQUFwQyxFQUFpRixLQUFLNkgsYUFBTCxDQUFtQmxJLFFBQW5CLENBQTRCc0ksV0FBNUIsR0FBd0MsSUFBSTlHLFlBQUosQ0FBaUIsQ0FBQyxLQUFLMEcsYUFBTCxDQUFtQmxJLFFBQW5CLENBQTRCcUksT0FBNUIsQ0FBb0MsQ0FBcEMsSUFBdUMsS0FBS2pGLEdBQUwsQ0FBU1MsVUFBVCxLQUFzQnJQLENBQTlELEVBQWdFLEtBQUswVCxhQUFMLENBQW1CbEksUUFBbkIsQ0FBNEJxSSxPQUE1QixDQUFvQyxDQUFwQyxJQUF1QyxLQUFLakYsR0FBTCxDQUFTVyxXQUFULEtBQXVCMUQsQ0FBOUgsQ0FBakIsQ0FBekg7QUFBNFEsVUFBSTlLLENBQUMsR0FBQ2xZLElBQUksQ0FBQzByQixHQUFMLENBQVMsS0FBSy9FLE1BQUwsQ0FBWUosS0FBckIsRUFBMkIsS0FBS0ksTUFBTCxDQUFZRixNQUF2QyxDQUFOO0FBQXFELFdBQUtvRSxhQUFMLENBQW1CbEksUUFBbkIsQ0FBNEJ1SSxjQUE1QixHQUEyQyxJQUFJL0csWUFBSixDQUFpQixDQUFDLEtBQUt3QyxNQUFMLENBQVlKLEtBQVosR0FBa0JyTyxDQUFuQixFQUFxQixLQUFLeU8sTUFBTCxDQUFZRixNQUFaLEdBQW1Cdk8sQ0FBeEMsQ0FBakIsQ0FBM0M7QUFBd0csS0FBMWxJO0FBQTJsSW1RLGVBQVcsRUFBQyx1QkFBVTtBQUFDLFVBQUk3ZSxDQUFDLEdBQUMsQ0FBQyx3QkFBRCxFQUEwQixxQkFBMUIsRUFBZ0QsZUFBaEQsRUFBZ0UsNkJBQWhFLEVBQThGLHVDQUE5RixFQUFzSSxHQUF0SSxFQUEySW9pQixJQUEzSSxDQUFnSixJQUFoSixDQUFOO0FBQTRKLFdBQUtDLFdBQUwsR0FBaUJybUIsQ0FBQyxDQUFDZ0UsQ0FBRCxFQUFHLENBQUMsd0JBQUQsRUFBMEIscUNBQTFCLEVBQWdFLDRCQUFoRSxFQUE2RixzQkFBN0YsRUFBb0gsdUJBQXBILEVBQTRJLHlCQUE1SSxFQUFzSyxxQkFBdEssRUFBNEwsZUFBNUwsRUFBNE0sd0NBQTVNLEVBQXFQLDJFQUFyUCxFQUFpVSxvQ0FBalUsRUFBc1csNEJBQXRXLEVBQW1ZLHNCQUFuWSxFQUEwWixHQUExWixFQUErWm9pQixJQUEvWixDQUFvYSxJQUFwYSxDQUFILENBQWxCLEVBQWdjLEtBQUtOLGFBQUwsR0FBbUI5bEIsQ0FBQyxDQUFDZ0UsQ0FBRCxFQUFHLENBQUMsd0JBQUQsRUFBMEIsNEJBQTFCLEVBQXVELHFCQUF2RCxFQUE2RSxxQkFBN0UsRUFBbUcsZUFBbkcsRUFBbUgsd0NBQW5ILEVBQTRKLCtCQUE1SixFQUE0TCwrQkFBNUwsRUFBNE4sbUJBQTVOLEVBQWdQLG9DQUFoUCxFQUFxUixvQ0FBclIsRUFBMFQsb0NBQTFULEVBQStWLGtDQUEvVixFQUFrWSxXQUFsWSxFQUE4WSxxQ0FBOVksRUFBb2Isa0JBQXBiLEVBQXVjLG1CQUF2YyxFQUEyZCxzQkFBM2QsRUFBa2YsR0FBbGYsRUFBdWZvaUIsSUFBdmYsQ0FBNGYsSUFBNWYsQ0FBSCxDQUFwZCxFQUEwOUJ6VSxDQUFDLENBQUM0VCxVQUFGLENBQWEsS0FBS08sYUFBTCxDQUFtQjFJLFNBQW5CLENBQTZCNVksS0FBMUMsRUFBZ0QsS0FBS2tjLFlBQXJELENBQTE5QixFQUE2aEMsS0FBSzJFLGFBQUwsR0FBbUJybEIsQ0FBQyxDQUFDLENBQUMsd0JBQUQsRUFBMEIsd0JBQTFCLEVBQW1ELHVCQUFuRCxFQUEyRSwyQkFBM0UsRUFBdUcsOEJBQXZHLEVBQXNJLDRCQUF0SSxFQUFtSywrQkFBbkssRUFBbU0sZUFBbk0sRUFBbU4sa0VBQW5OLEVBQXNSLDhDQUF0UixFQUFxVSx3RUFBclUsRUFBOFksb0RBQTlZLEVBQW1jLEdBQW5jLEVBQXdjb21CLElBQXhjLENBQTZjLElBQTdjLENBQUQsRUFBb2QsQ0FBQyx3QkFBRCxFQUEwQixzQ0FBMUIsRUFBaUUsbUNBQWpFLEVBQXFHLHFCQUFyRyxFQUEySCw0QkFBM0gsRUFBd0osNEJBQXhKLEVBQXFMLCtCQUFyTCxFQUFxTixlQUFyTixFQUFxTywyREFBck8sRUFBaVMsOEZBQWpTLEVBQWdZLDhGQUFoWSxFQUErZCxpREFBL2QsRUFBaWhCLGlEQUFqaEIsRUFBbWtCLDZDQUFua0IsRUFBaW5CLCtFQUFqbkIsRUFBaXNCLGlHQUFqc0IsRUFBbXlCLEdBQW55QixFQUF3eUJBLElBQXh5QixDQUE2eUIsSUFBN3lCLENBQXBkLENBQWpqQyxFQUF5ekV6VSxDQUFDLENBQUM0VCxVQUFGLENBQWEsS0FBS0YsYUFBTCxDQUFtQmpJLFNBQW5CLENBQTZCNVksS0FBMUMsRUFBZ0QsS0FBS2tjLFlBQXJELENBQXp6RTtBQUE0M0UsS0FBMW9OO0FBQTJvTm9DLGVBQVcsRUFBQyx1QkFBVTtBQUFDLFdBQUtxQixpQkFBTCxHQUF1QnhTLENBQUMsQ0FBQ21OLGFBQUYsRUFBdkIsRUFBeUNuTixDQUFDLENBQUNrTSxXQUFGLENBQWNsTSxDQUFDLENBQUNtTSxVQUFoQixFQUEyQixLQUFLcUcsaUJBQWhDLENBQXpDLEVBQTRGeFMsQ0FBQyxDQUFDMlUsV0FBRixDQUFjM1UsQ0FBQyxDQUFDNFUsbUJBQWhCLEVBQW9DLENBQXBDLENBQTVGLEVBQW1JNVUsQ0FBQyxDQUFDdU4sYUFBRixDQUFnQnZOLENBQUMsQ0FBQ21NLFVBQWxCLEVBQTZCbk0sQ0FBQyxDQUFDME4sa0JBQS9CLEVBQWtEMU4sQ0FBQyxDQUFDMlEsTUFBcEQsQ0FBbkksRUFBK0wzUSxDQUFDLENBQUN1TixhQUFGLENBQWdCdk4sQ0FBQyxDQUFDbU0sVUFBbEIsRUFBNkJuTSxDQUFDLENBQUN3TixrQkFBL0IsRUFBa0R4TixDQUFDLENBQUMyUSxNQUFwRCxDQUEvTDtBQUEyUCxLQUE3NU47QUFBODVOUyx5QkFBcUIsRUFBQyxpQ0FBVTtBQUFDcFIsT0FBQyxDQUFDa00sV0FBRixDQUFjbE0sQ0FBQyxDQUFDbU0sVUFBaEIsRUFBMkIsS0FBS3FHLGlCQUFoQyxHQUFtRHhTLENBQUMsQ0FBQzhOLFVBQUYsQ0FBYTlOLENBQUMsQ0FBQ21NLFVBQWYsRUFBMEIsQ0FBMUIsRUFBNEJuTSxDQUFDLENBQUMrTixJQUE5QixFQUFtQy9OLENBQUMsQ0FBQytOLElBQXJDLEVBQTBDL04sQ0FBQyxDQUFDeVMsYUFBNUMsRUFBMERyRSxDQUExRCxDQUFuRDtBQUFnSCxLQUEvaU87QUFBZ2pPd0UscUJBQWlCLEVBQUMsNkJBQVU7QUFBQyxVQUFJdmdCLENBQUMsR0FBQyxLQUFLdWMsR0FBTCxDQUFTLENBQVQsRUFBWWlHLEtBQVosQ0FBa0JDLGVBQXhCO0FBQXdDLGdCQUFRemlCLENBQVIsS0FBWSxLQUFLMGlCLGlCQUFMLEdBQXVCMWlCLENBQXZCLEVBQXlCLEtBQUs4ZiwwQkFBTCxHQUFnQyxLQUFLdkQsR0FBTCxDQUFTYyxHQUFULENBQWEsaUJBQWIsQ0FBekQsRUFBeUYsS0FBS2QsR0FBTCxDQUFTYyxHQUFULENBQWEsaUJBQWIsRUFBK0IsTUFBL0IsQ0FBckc7QUFBNkksS0FBbHdPO0FBQW13T3NGLHdCQUFvQixFQUFDLGdDQUFVO0FBQUMsV0FBS3BHLEdBQUwsQ0FBU2MsR0FBVCxDQUFhLGlCQUFiLEVBQStCLEtBQUtxRixpQkFBTCxJQUF3QixFQUF2RDtBQUEyRCxLQUE5MU87QUFBKzFPL0MsaUJBQWEsRUFBQyx1QkFBUzNmLENBQVQsRUFBVzBYLENBQVgsRUFBYU0sQ0FBYixFQUFlO0FBQUMsVUFBSWhjLENBQUMsR0FBQzZGLFFBQVEsQ0FBQyxLQUFLMGEsR0FBTCxDQUFTYyxHQUFULENBQWEsbUJBQWIsQ0FBRCxDQUFSLElBQTZDLENBQW5EO0FBQUEsVUFBcUQzRSxDQUFDLEdBQUM3VyxRQUFRLENBQUMsS0FBSzBhLEdBQUwsQ0FBU2MsR0FBVCxDQUFhLGtCQUFiLENBQUQsQ0FBUixJQUE0QyxDQUFuRztBQUFxRyxXQUFLdUYsSUFBTCxDQUFVNWlCLENBQUMsQ0FBQzZpQixLQUFGLEdBQVEsS0FBS3RHLEdBQUwsQ0FBUzlWLE1BQVQsR0FBa0I4VyxJQUExQixHQUErQnZoQixDQUF6QyxFQUEyQ2dFLENBQUMsQ0FBQzhpQixLQUFGLEdBQVEsS0FBS3ZHLEdBQUwsQ0FBUzlWLE1BQVQsR0FBa0IrVyxHQUExQixHQUE4QjlFLENBQXpFLEVBQTJFaEIsQ0FBM0UsRUFBNkVNLENBQTdFO0FBQWdGLEtBQWxqUDtBQUFtalA0SyxRQUFJLEVBQUMsY0FBUzVpQixDQUFULEVBQVcwWCxDQUFYLEVBQWFNLENBQWIsRUFBZWhjLENBQWYsRUFBaUI7QUFBQzJSLE9BQUMsR0FBQyxLQUFLdkYsT0FBUDtBQUFlLFVBQUltUixDQUFDLEdBQUMsS0FBS2dELEdBQUwsQ0FBU1MsVUFBVCxFQUFOO0FBQUEsVUFBNEJ6USxDQUFDLEdBQUMsS0FBS2dRLEdBQUwsQ0FBU1csV0FBVCxFQUE5QjtBQUFBLFVBQXFEalAsQ0FBQyxHQUFDelgsSUFBSSxDQUFDMHJCLEdBQUwsQ0FBUzNJLENBQVQsRUFBV2hOLENBQVgsQ0FBdkQ7QUFBcUV5TCxPQUFDLElBQUUvSixDQUFIO0FBQUssVUFBSXVMLENBQUMsR0FBQyxJQUFJbUIsWUFBSixDQUFpQixDQUFDLENBQUMsSUFBRTNhLENBQUYsR0FBSXVaLENBQUwsSUFBUXRMLENBQVQsRUFBVyxDQUFDMUIsQ0FBQyxHQUFDLElBQUVtTCxDQUFMLElBQVF6SixDQUFuQixDQUFqQixDQUFOO0FBQThDTixPQUFDLENBQUNxVCxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxLQUFLdkUsVUFBcEIsRUFBK0IsS0FBS0EsVUFBcEMsR0FBZ0Q5TyxDQUFDLENBQUNxTixlQUFGLENBQWtCck4sQ0FBQyxDQUFDc04sV0FBcEIsRUFBZ0MsS0FBS2lELFlBQUwsQ0FBa0IsS0FBS0MsZ0JBQXZCLENBQWhDLENBQWhELEVBQTBIekYsQ0FBQyxDQUFDLEtBQUt1RixRQUFMLENBQWMsS0FBS0csZUFBbkIsQ0FBRCxDQUEzSCxFQUFpS3pRLENBQUMsQ0FBQzBMLFVBQUYsQ0FBYSxLQUFLZ0osV0FBTCxDQUFpQi9NLEVBQTlCLENBQWpLLEVBQW1NM0gsQ0FBQyxDQUFDNFQsVUFBRixDQUFhLEtBQUtjLFdBQUwsQ0FBaUJqSixTQUFqQixDQUEyQjJKLE1BQXhDLEVBQStDdkosQ0FBL0MsQ0FBbk0sRUFBcVA3TCxDQUFDLENBQUMyVCxTQUFGLENBQVksS0FBS2UsV0FBTCxDQUFpQmpKLFNBQWpCLENBQTJCNEosTUFBdkMsRUFBOENoTCxDQUE5QyxDQUFyUCxFQUFzU3JLLENBQUMsQ0FBQzJULFNBQUYsQ0FBWSxLQUFLZSxXQUFMLENBQWlCakosU0FBakIsQ0FBMkI2SixRQUF2QyxFQUFnRGpuQixDQUFoRCxDQUF0UyxFQUF5VixLQUFLNGtCLFFBQUwsRUFBelYsRUFBeVcsS0FBS21CLGlCQUFMLEVBQXpXO0FBQWtZLEtBQW5sUTtBQUFvbFFqRSxjQUFVLEVBQUMsc0JBQVU7QUFBQyxVQUFJOWQsQ0FBQyxHQUFDLEtBQUt1YyxHQUFMLENBQVNTLFVBQVQsRUFBTjtBQUFBLFVBQTRCdEYsQ0FBQyxHQUFDLEtBQUs2RSxHQUFMLENBQVNXLFdBQVQsRUFBOUI7QUFBcURsZCxPQUFDLElBQUUsS0FBS21kLE1BQUwsQ0FBWUosS0FBZixJQUFzQnJGLENBQUMsSUFBRSxLQUFLeUYsTUFBTCxDQUFZRixNQUFyQyxLQUE4QyxLQUFLRSxNQUFMLENBQVlKLEtBQVosR0FBa0IvYyxDQUFsQixFQUFvQixLQUFLbWQsTUFBTCxDQUFZRixNQUFaLEdBQW1CdkYsQ0FBckY7QUFBd0YsS0FBdnZRO0FBQXd2UXdMLFdBQU8sRUFBQyxtQkFBVTtBQUFDLFdBQUszRyxHQUFMLENBQVM0RyxHQUFULENBQWEsVUFBYixFQUF5QkMsV0FBekIsQ0FBcUMsZ0JBQXJDLEVBQXVEQyxVQUF2RCxDQUFrRSxTQUFsRSxHQUE2RTFWLENBQUMsR0FBQyxJQUEvRSxFQUFvRjNOLENBQUMsQ0FBQ3BCLE1BQUQsQ0FBRCxDQUFVdWtCLEdBQVYsQ0FBYyxRQUFkLEVBQXVCLEtBQUtyRixVQUE1QixDQUFwRixFQUE0SCxLQUFLVixPQUFMLENBQWFrRyxNQUFiLEVBQTVILEVBQWtKLEtBQUtYLG9CQUFMLEVBQWxKLEVBQThLLEtBQUt2RyxTQUFMLEdBQWUsQ0FBQyxDQUE5TDtBQUFnTSxLQUEzOFE7QUFBNDhRaFosUUFBSSxFQUFDLGdCQUFVO0FBQUMsV0FBS2ljLE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS2pDLE9BQUwsQ0FBYWhhLElBQWIsRUFBaEIsRUFBb0MsS0FBS21kLGlCQUFMLEVBQXBDO0FBQTZELEtBQXpoUjtBQUEwaFIzYyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxXQUFLeWIsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQixLQUFLakMsT0FBTCxDQUFheFosSUFBYixFQUFoQixFQUFvQyxLQUFLK2Usb0JBQUwsRUFBcEM7QUFBZ0UsS0FBMW1SO0FBQTJtUmptQixTQUFLLEVBQUMsaUJBQVU7QUFBQyxXQUFLNGlCLE9BQUwsR0FBYSxDQUFDLENBQWQ7QUFBZ0IsS0FBNW9SO0FBQTZvUmlFLFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUtqRSxPQUFMLEdBQWEsQ0FBQyxDQUFkO0FBQWdCLEtBQTdxUjtBQUE4cVJrRSxPQUFHLEVBQUMsYUFBU3hqQixDQUFULEVBQVcwWCxDQUFYLEVBQWE7QUFBQyxjQUFPMVgsQ0FBUDtBQUFVLGFBQUksWUFBSjtBQUFpQixhQUFJLGFBQUo7QUFBa0IsYUFBSSxhQUFKO0FBQWtCLGFBQUksYUFBSjtBQUFrQixlQUFLQSxDQUFMLElBQVEwWCxDQUFSO0FBQVU7O0FBQU0sYUFBSSxVQUFKO0FBQWUsZUFBS29GLFFBQUwsR0FBY3BGLENBQWQsRUFBZ0IsS0FBS3NILFNBQUwsRUFBaEI7QUFBaEg7QUFBa0o7QUFBbDFSLEdBQWxIO0FBQXM4UixNQUFJWCxDQUFDLEdBQUNyZSxDQUFDLENBQUN5akIsRUFBRixDQUFLQyxPQUFYO0FBQW1CMWpCLEdBQUMsQ0FBQ3lqQixFQUFGLENBQUtDLE9BQUwsR0FBYSxVQUFTaE0sQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDOEIsQ0FBSixFQUFNLE1BQU0sSUFBSWhCLEtBQUosQ0FBVSwrR0FBVixDQUFOO0FBQWlJLFFBQUlSLENBQUMsR0FBQzJMLFNBQVMsQ0FBQzVMLE1BQVYsR0FBaUIsQ0FBakIsR0FBbUI2TCxLQUFLLENBQUNsRSxTQUFOLENBQWdCbUUsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCSCxTQUEzQixFQUFxQyxDQUFyQyxDQUFuQixHQUEyRCxLQUFLLENBQXRFO0FBQXdFLFdBQU8sS0FBS0ksSUFBTCxDQUFVLFlBQVU7QUFBQyxVQUFJL25CLENBQUMsR0FBQ2dFLENBQUMsQ0FBQyxJQUFELENBQVA7QUFBQSxVQUFjMFksQ0FBQyxHQUFDMWMsQ0FBQyxDQUFDdEIsSUFBRixDQUFPLFNBQVAsQ0FBaEI7QUFBQSxVQUFrQzZlLENBQUMsR0FBQ3ZaLENBQUMsQ0FBQ2drQixNQUFGLENBQVMsRUFBVCxFQUFZN0gsQ0FBQyxDQUFDc0QsUUFBZCxFQUF1QnpqQixDQUFDLENBQUN0QixJQUFGLEVBQXZCLEVBQWdDLG9CQUFpQmdkLENBQWpCLEtBQW9CQSxDQUFwRCxDQUFwQztBQUEyRixPQUFDZ0IsQ0FBQyxJQUFFLFlBQVUsT0FBT2hCLENBQXJCLE1BQTBCZ0IsQ0FBQyxHQUFDLFlBQVUsT0FBT2hCLENBQWpCLElBQW9CeUUsQ0FBQyxDQUFDdUQsU0FBRixDQUFZaEksQ0FBWixFQUFldU0sS0FBZixDQUFxQnZMLENBQXJCLEVBQXVCVixDQUF2QixDQUFyQixHQUErQ2hjLENBQUMsQ0FBQ3RCLElBQUYsQ0FBTyxTQUFQLEVBQWlCZ2UsQ0FBQyxHQUFDLElBQUl5RCxDQUFKLENBQU0sSUFBTixFQUFXNUMsQ0FBWCxDQUFuQixDQUExRTtBQUE2RyxLQUE3TixDQUFQO0FBQXNPLEdBQTljLEVBQStjdlosQ0FBQyxDQUFDeWpCLEVBQUYsQ0FBS0MsT0FBTCxDQUFhUSxXQUFiLEdBQXlCL0gsQ0FBeGUsRUFBMGVuYyxDQUFDLENBQUN5akIsRUFBRixDQUFLQyxPQUFMLENBQWFTLFVBQWIsR0FBd0IsWUFBVTtBQUFDLFdBQU9ua0IsQ0FBQyxDQUFDeWpCLEVBQUYsQ0FBS0MsT0FBTCxHQUFhckYsQ0FBYixFQUFlLElBQXRCO0FBQTJCLEdBQXhpQjtBQUF5aUIsQ0FBejZjLENBQUQsQzs7Ozs7Ozs7Ozs7OztBQ05BLElBQUkrRixDQUFKLEMsQ0FFQTs7QUFDQUEsQ0FBQyxHQUFJLFlBQVc7QUFDZixTQUFPLElBQVA7QUFDQSxDQUZHLEVBQUo7O0FBSUEsSUFBSTtBQUNIO0FBQ0FBLEdBQUMsR0FBR0EsQ0FBQyxJQUFJLElBQUlDLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBT3JrQixDQUFQLEVBQVU7QUFDWDtBQUNBLE1BQUksUUFBT3BCLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0N3bEIsQ0FBQyxHQUFHeGxCLE1BQUo7QUFDaEMsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUFnWixNQUFNLENBQUNELE9BQVAsR0FBaUJ5TSxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQXB1Qiw2Q0FBQyxDQUFDUyxRQUFELENBQUQsQ0FBWTZ0QixLQUFaLENBQWtCLFlBQU07QUFDdEJ0dUIsK0NBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXV1QixLQUFmLENBQXFCLFlBQVc7QUFDOUJ2dUIsaURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXd1QixXQUFSLENBQW9CLFNBQXBCOztBQUVBLFFBQUl4dUIsNkNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXl1QixRQUFWLENBQW1CLFVBQW5CLENBQUosRUFBb0M7QUFDbEN6dUIsbURBQUMsQ0FBQyxNQUFELENBQUQsQ0FDR290QixXQURILENBQ2UsVUFEZixFQUVHeEYsUUFGSCxDQUVZLFVBRlo7QUFJQXhuQixnQkFBVSxDQUFDLFlBQVc7QUFDcEJKLHFEQUFDLENBQUMsTUFBRCxDQUFELENBQVVvdEIsV0FBVixDQUFzQixVQUF0QjtBQUNELE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxLQVJELE1BUU87QUFDTHB0QixtREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUNHb3RCLFdBREgsQ0FDZSxVQURmLEVBRUd4RixRQUZILENBRVksVUFGWjtBQUdEOztBQUNELFdBQU8sS0FBUDtBQUNELEdBakJEO0FBbUJBNW5CLCtDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3V1QixLQUFoQyxDQUFzQyxZQUFXO0FBQy9DLFFBQUl2dUIsNkNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXl1QixRQUFWLENBQW1CLGdCQUFuQixDQUFKLEVBQTBDO0FBQ3hDenVCLG1EQUFDLENBQUMsTUFBRCxDQUFELENBQ0dvdEIsV0FESCxDQUNlLGdCQURmLEVBRUd4RixRQUZILENBRVksZ0JBRlo7QUFJQXhuQixnQkFBVSxDQUFDLFlBQVc7QUFDcEJKLHFEQUFDLENBQUMsTUFBRCxDQUFELENBQVVvdEIsV0FBVixDQUFzQixnQkFBdEI7QUFDRCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0QsS0FSRCxNQVFPO0FBQ0xwdEIsbURBQUMsQ0FBQyxNQUFELENBQUQsQ0FDR290QixXQURILENBQ2UsZ0JBRGYsRUFFR3hGLFFBRkgsQ0FFWSxnQkFGWjtBQUdEOztBQUNELFdBQU8sS0FBUDtBQUNELEdBZkQ7QUFpQkE1bkIsK0NBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCMHRCLE9BQXhCLENBQWdDO0FBQzlCakgsY0FBVSxFQUFFLElBRGtCO0FBRTlCO0FBQ0FFLGVBQVcsRUFBRTtBQUhpQixHQUFoQztBQU1BM21CLCtDQUFDLENBQUMsWUFBVztBQUNYLFFBQUkwdUIsVUFBVSxHQUFHMXVCLDZDQUFDLENBQUMsWUFBRCxDQUFsQjtBQUNBLFFBQUksQ0FBQzB1QixVQUFVLENBQUMzTSxNQUFoQixFQUF3Qjs7QUFFeEIsUUFBSTtBQUNGMk0sZ0JBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFVBQVUsQ0FBQ0csSUFBWCxFQUFYLENBQWI7QUFDRCxLQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1o7QUFDQTtBQUNEOztBQUVELFFBQUlDLE1BQUosQ0FBV3R1QixRQUFRLENBQUN1dUIsY0FBVCxDQUF3QixRQUF4QixDQUFYLEVBQThDTixVQUE5QztBQUNELEdBWkEsQ0FBRDtBQWNBMXVCLCtDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ29CLEVBQWhCLENBQW1CLGVBQW5CLEVBQW9DLFVBQVMvbkIsS0FBVCxFQUFnQjtBQUNsRDtBQUNBLFFBQU00RixNQUFNLEdBQUc3Riw2Q0FBQyxDQUFDQyxLQUFLLENBQUM2SyxhQUFQLENBQWhCLENBRmtELENBSWxEOztBQUNBLFFBQUlta0IsT0FBTyxHQUFHLElBQWQ7QUFDQWp2QixpREFBQyxDQUFDLElBQUQsQ0FBRCxDQUNHa3ZCLElBREgsQ0FDUSxjQURSLEVBRUdyVixJQUZILENBRVEsRUFGUjtBQUdBN1osaURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsZ0JBRFIsRUFFR3JWLElBRkgsQ0FFUSxFQUZSO0FBR0E3WixpREFBQyxDQUFDLElBQUQsQ0FBRCxDQUNHa3ZCLElBREgsQ0FDUSxpQkFEUixFQUVHclYsSUFGSCxDQUVRLEVBRlI7QUFHQTdaLGlEQUFDLENBQUMsSUFBRCxDQUFELENBQ0drdkIsSUFESCxDQUNRLGlCQURSLEVBRUdyVixJQUZILENBRVEsRUFGUjtBQUdBN1osaURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsY0FEUixFQUVHclYsSUFGSCxDQUVRLEVBRlI7QUFJQW9WLFdBQU8sR0FBRztBQUNSRSxVQUFJLEVBQUV0cEIsTUFBTSxDQUFDdXBCLFFBQVAsQ0FBZ0Isb0JBQWhCLEVBQXNDUCxJQUF0QyxFQURFO0FBRVJRLFNBQUcsRUFBRXhwQixNQUFNLENBQUN1cEIsUUFBUCxDQUFnQixtQkFBaEIsRUFBcUNQLElBQXJDLEVBRkc7QUFHUlMsU0FBRyxFQUFFenBCLE1BQU0sQ0FBQ3VwQixRQUFQLENBQWdCLG1CQUFoQixFQUFxQ1AsSUFBckMsRUFIRztBQUlSVSxXQUFLLEVBQUV2dkIsNkNBQUMsQ0FBQ3d2QixJQUFGLENBQU8zcEIsTUFBTSxDQUFDdXBCLFFBQVAsQ0FBZ0IscUJBQWhCLEVBQXVDUCxJQUF2QyxFQUFQLENBSkM7QUFLUlksU0FBRyxFQUFFenZCLDZDQUFDLENBQUN3dkIsSUFBRixDQUFPM3BCLE1BQU0sQ0FBQ3VwQixRQUFQLENBQWdCLHVCQUFoQixFQUF5Q1AsSUFBekMsRUFBUCxDQUxHO0FBTVJhLFFBQUUsRUFBRTF2Qiw2Q0FBQyxDQUFDd3ZCLElBQUYsQ0FBTzNwQixNQUFNLENBQUN1cEIsUUFBUCxDQUFnQix3QkFBaEIsRUFBMENQLElBQTFDLEVBQVAsQ0FOSTtBQU9SLFlBQUk3dUIsNkNBQUMsQ0FBQ3d2QixJQUFGLENBQU8zcEIsTUFBTSxDQUFDdXBCLFFBQVAsQ0FBZ0Isd0JBQWhCLEVBQTBDUCxJQUExQyxFQUFQLENBUEk7QUFRUmMsUUFBRSxFQUFFM3ZCLDZDQUFDLENBQUN3dkIsSUFBRixDQUFPM3BCLE1BQU0sQ0FBQ3VwQixRQUFQLENBQWdCLHFCQUFoQixFQUF1Q1AsSUFBdkMsRUFBUDtBQVJJLEtBQVY7O0FBV0Esb0NBQWdCbHRCLE1BQU0sQ0FBQ2l1QixJQUFQLENBQVlYLE9BQVosQ0FBaEIsa0NBQXNDO0FBQWpDLFVBQUlZLEdBQUcsbUJBQVA7QUFDSCxVQUFJQyxHQUFHLEdBQUdiLE9BQU8sQ0FBQ1ksR0FBRCxDQUFqQjs7QUFDQSxVQUFJQSxHQUFHLEtBQUssTUFBUixJQUFrQkMsR0FBdEIsRUFBMkI7QUFDekI5dkIscURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsY0FEUixFQUVHTCxJQUZILENBRVFJLE9BQU8sQ0FBQ0UsSUFGaEI7QUFHRDs7QUFDRCxVQUFJVSxHQUFHLEtBQUssS0FBUixJQUFpQkMsR0FBckIsRUFBMEI7QUFDeEI5dkIscURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsWUFEUixFQUVHTCxJQUZILENBRVFJLE9BQU8sQ0FBQ0ksR0FGaEI7QUFHRDs7QUFDRCxVQUFJUSxHQUFHLEtBQUssS0FBUixJQUFpQkMsR0FBckIsRUFBMEI7QUFDeEI5dkIscURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsWUFEUixFQUVHTCxJQUZILENBRVFJLE9BQU8sQ0FBQ0ssR0FGaEI7QUFHRDs7QUFDRCxVQUFJTyxHQUFHLEtBQUssT0FBUixJQUFtQkMsR0FBdkIsRUFBNEI7QUFDMUI5dkIscURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsY0FEUixFQUVHclYsSUFGSCw0QkFHdUJvVixPQUFPLENBQUNNLEtBSC9CO0FBS0Q7O0FBQ0QsVUFBSU0sR0FBRyxLQUFLLEtBQVIsSUFBaUJDLEdBQXJCLEVBQTBCO0FBQ3hCOXZCLHFEQUFDLENBQUMsSUFBRCxDQUFELENBQ0drdkIsSUFESCxDQUNRLGdCQURSLEVBRUdyVixJQUZILHFCQUdnQm9WLE9BQU8sQ0FBQ1EsR0FIeEI7QUFLRDs7QUFDRCxVQUFJSSxHQUFHLEtBQUssSUFBUixJQUFnQkMsR0FBcEIsRUFBeUI7QUFDdkI5dkIscURBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR2t2QixJQURILENBQ1EsaUJBRFIsRUFFR3JWLElBRkgscUJBR2dCb1YsT0FBTyxDQUFDUyxFQUh4QjtBQUtEOztBQUNELFVBQUlHLEdBQUcsS0FBSyxJQUFSLElBQWdCQyxHQUFwQixFQUF5QjtBQUN2Qjl2QixxREFBQyxDQUFDLElBQUQsQ0FBRCxDQUNHa3ZCLElBREgsQ0FDUSxpQkFEUixFQUVHclYsSUFGSCxxQkFHZ0JvVixPQUFPLE1BSHZCO0FBS0Q7O0FBQ0QsVUFBSVksR0FBRyxLQUFLLElBQVIsSUFBZ0JDLEdBQXBCLEVBQXlCO0FBQ3ZCOXZCLHFEQUFDLENBQUMsSUFBRCxDQUFELENBQ0drdkIsSUFESCxDQUNRLGNBRFIsRUFFR3JWLElBRkgscUJBR2dCb1YsT0FBTyxDQUFDVSxFQUh4QjtBQUtEO0FBQ0Y7QUFDRixHQXRGRDtBQXdGQTN2QiwrQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnV1QixLQUFuQixDQUF5QixVQUFTdmtCLENBQVQsRUFBWTtBQUNuQ0EsS0FBQyxDQUFDK2xCLGNBQUY7QUFDQSxRQUFJQyxJQUFJLEdBQUdod0IsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNZLElBQVIsQ0FBYSxNQUFiLENBQVg7QUFDQTFQLFVBQU0sQ0FBQ3FuQixJQUFQLENBQVlELElBQVosRUFBa0IsRUFBbEIsRUFBc0Isc0JBQXRCO0FBQ0QsR0FKRDtBQU1BLE1BQU1FLGtCQUFrQixHQUFHbHdCLDZDQUFDLENBQUMsNENBQUQsQ0FBNUI7QUFDQSxNQUFNbXdCLG1CQUFtQixHQUFHbndCLDZDQUFDLENBQUMsc0JBQUQsQ0FBN0I7QUFFQSxNQUFNb3dCLFVBQVUsR0FBR3B3Qiw2Q0FBQyxDQUFDLGFBQUQsQ0FBcEI7QUFDQSxNQUFNcXdCLGdCQUFnQixHQUFHcndCLDZDQUFDLENBQUMsbUJBQUQsQ0FBMUI7QUFFQWt3QixvQkFBa0IsQ0FBQ2xJLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDeEMsUUFBSWhvQiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc3dCLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBNEI7QUFDMUJILHlCQUFtQixDQUFDL2lCLElBQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wraUIseUJBQW1CLENBQUN2aUIsSUFBcEI7QUFDRDtBQUNGLEdBTkQ7QUFRQXdpQixZQUFVLENBQUNwSSxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFXO0FBQ2hDLFFBQUl1SSxTQUFTLEdBQUd2d0IsNkNBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDOHZCLEdBQXRDLEVBQWhCOztBQUNBLFFBQUlTLFNBQVMsSUFBSSxPQUFqQixFQUEwQjtBQUN4QkYsc0JBQWdCLENBQUNqakIsSUFBakI7QUFDRCxLQUZELE1BRU87QUFDTGlqQixzQkFBZ0IsQ0FBQ3ppQixJQUFqQjtBQUNEO0FBQ0YsR0FQRDtBQVFELENBN0tEO0FBK0tBNU4sNkNBQUMsQ0FBQ1MsUUFBRCxDQUFELENBQVkrdkIsS0FBWixDQUFrQixVQUFTeG1CLENBQVQsRUFBWTtBQUM1QixNQUFJQSxDQUFDLENBQUN5bUIsT0FBRixJQUFhLEVBQWpCLEVBQXFCO0FBQ25CLFFBQUl6d0IsNkNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXl1QixRQUFWLENBQW1CLFVBQW5CLENBQUosRUFBb0M7QUFDbEN6dUIsbURBQUMsQ0FBQyxNQUFELENBQUQsQ0FDR290QixXQURILENBQ2UsVUFEZixFQUVHeEYsUUFGSCxDQUVZLFVBRlo7QUFJQXhuQixnQkFBVSxDQUFDLFlBQVc7QUFDcEJKLHFEQUFDLENBQUMsTUFBRCxDQUFELENBQVVvdEIsV0FBVixDQUFzQixVQUF0QjtBQUNELE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxLQVJELE1BUU87QUFDTHB0QixtREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUNHb3RCLFdBREgsQ0FDZSxVQURmLEVBRUd4RixRQUZILENBRVksVUFGWjtBQUdEO0FBQ0Y7QUFDRixDQWhCRCxFOzs7Ozs7Ozs7OztBQ3BMQSxJQUFJbUgsTUFBSjtBQUFXLENBQUMsWUFBVTtBQUFDLFdBQVN4WSxDQUFULENBQVdBLENBQVgsRUFBYTtBQUFDLFNBQUttYSxJQUFMLEdBQVV2SyxDQUFDLENBQUN3SyxjQUFaLEVBQTJCLEtBQUtqc0IsSUFBTCxHQUFVNlIsQ0FBckMsRUFBdUMsS0FBS3FhLFVBQUwsR0FBZ0IsRUFBdkQ7O0FBQTBELFNBQUksSUFBSW5hLENBQUMsR0FBQyxFQUFOLEVBQVNzUCxDQUFDLEdBQUMsQ0FBWCxFQUFhL2IsQ0FBQyxHQUFDLEtBQUt0RixJQUFMLENBQVVxZCxNQUE3QixFQUFvQy9YLENBQUMsR0FBQytiLENBQXRDLEVBQXdDQSxDQUFDLEVBQXpDLEVBQTRDO0FBQUMsVUFBSXNDLENBQUMsR0FBQyxLQUFLM2pCLElBQUwsQ0FBVW1zQixVQUFWLENBQXFCOUssQ0FBckIsQ0FBTjtBQUE4QnNDLE9BQUMsR0FBQyxLQUFGLElBQVM1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxDQUFDLFVBQVE0UixDQUFULE1BQWMsRUFBdkIsRUFBMEI1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxDQUFDLFNBQU80UixDQUFSLE1BQWEsRUFBaEQsRUFBbUQ1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxDQUFDLE9BQUs0UixDQUFOLE1BQVcsQ0FBdkUsRUFBeUU1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxLQUFHNFIsQ0FBOUYsSUFBaUdBLENBQUMsR0FBQyxJQUFGLElBQVE1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxDQUFDLFFBQU00UixDQUFQLE1BQVksRUFBckIsRUFBd0I1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxDQUFDLE9BQUs0UixDQUFOLE1BQVcsQ0FBNUMsRUFBOEM1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxLQUFHNFIsQ0FBbEUsSUFBcUVBLENBQUMsR0FBQyxHQUFGLElBQU81UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxDQUFDLE9BQUs0UixDQUFOLE1BQVcsQ0FBcEIsRUFBc0I1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssTUFBSSxLQUFHNFIsQ0FBekMsSUFBNEM1UixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUs0UixDQUF2TixFQUF5TixLQUFLdUksVUFBTCxHQUFnQixLQUFLQSxVQUFMLENBQWdCRSxNQUFoQixDQUF1QnJhLENBQXZCLENBQXpPO0FBQW1ROztBQUFBLFNBQUttYSxVQUFMLENBQWdCN08sTUFBaEIsSUFBd0IsS0FBS3JkLElBQUwsQ0FBVXFkLE1BQWxDLEtBQTJDLEtBQUs2TyxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixHQUF4QixHQUE2QixLQUFLSCxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixHQUF4QixDQUE3QixFQUEwRCxLQUFLSCxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixHQUF4QixDQUFyRztBQUFtSTs7QUFBQSxXQUFTdGEsQ0FBVCxDQUFXRixDQUFYLEVBQWFFLENBQWIsRUFBZTtBQUFDLFNBQUt1YSxVQUFMLEdBQWdCemEsQ0FBaEIsRUFBa0IsS0FBSzBhLGlCQUFMLEdBQXVCeGEsQ0FBekMsRUFBMkMsS0FBS3lhLE9BQUwsR0FBYSxJQUF4RCxFQUE2RCxLQUFLQyxXQUFMLEdBQWlCLENBQTlFLEVBQWdGLEtBQUtDLFNBQUwsR0FBZSxJQUEvRixFQUFvRyxLQUFLQyxRQUFMLEdBQWMsRUFBbEg7QUFBcUg7O0FBQUEsV0FBU3JyQixDQUFULENBQVd1USxDQUFYLEVBQWFFLENBQWIsRUFBZTtBQUFDLFFBQUcsS0FBSyxDQUFMLElBQVFGLENBQUMsQ0FBQ3dMLE1BQWIsRUFBb0IsTUFBTSxJQUFJUyxLQUFKLENBQVVqTSxDQUFDLENBQUN3TCxNQUFGLEdBQVMsR0FBVCxHQUFhdEwsQ0FBdkIsQ0FBTjs7QUFBZ0MsU0FBSSxJQUFJMFAsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDNVAsQ0FBQyxDQUFDd0wsTUFBSixJQUFZLEtBQUd4TCxDQUFDLENBQUM0UCxDQUFELENBQTVCO0FBQWlDQSxPQUFDO0FBQWxDOztBQUFxQyxTQUFLbUwsR0FBTCxHQUFTLElBQUkxRCxLQUFKLENBQVVyWCxDQUFDLENBQUN3TCxNQUFGLEdBQVNvRSxDQUFULEdBQVcxUCxDQUFyQixDQUFUOztBQUFpQyxTQUFJLElBQUlzUCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUN4UCxDQUFDLENBQUN3TCxNQUFGLEdBQVNvRSxDQUF2QixFQUF5QkosQ0FBQyxFQUExQjtBQUE2QixXQUFLdUwsR0FBTCxDQUFTdkwsQ0FBVCxJQUFZeFAsQ0FBQyxDQUFDd1AsQ0FBQyxHQUFDSSxDQUFILENBQWI7QUFBN0I7QUFBZ0Q7O0FBQUEsV0FBU29MLENBQVQsQ0FBV2hiLENBQVgsRUFBYUUsQ0FBYixFQUFlO0FBQUMsU0FBSythLFVBQUwsR0FBZ0JqYixDQUFoQixFQUFrQixLQUFLa2IsU0FBTCxHQUFlaGIsQ0FBakM7QUFBbUM7O0FBQUEsV0FBU2liLENBQVQsR0FBWTtBQUFDLFNBQUtDLE1BQUwsR0FBWSxFQUFaLEVBQWUsS0FBSzVQLE1BQUwsR0FBWSxDQUEzQjtBQUE2Qjs7QUFBQSxXQUFTNlAsQ0FBVCxHQUFZO0FBQUMsV0FBTSxlQUFhLE9BQU9DLHdCQUExQjtBQUFtRDs7QUFBQSxXQUFTdE8sQ0FBVCxHQUFZO0FBQUMsUUFBSWhOLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBQSxRQUFTRSxDQUFDLEdBQUM5TixTQUFTLENBQUNtcEIsU0FBckI7QUFBK0IsV0FBTSxXQUFXQyxJQUFYLENBQWdCdGIsQ0FBaEIsTUFBcUJGLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS3liLElBQUksR0FBQ3ZiLENBQUMsQ0FBQ3diLFFBQUYsR0FBYWxPLEtBQWIsQ0FBbUIseUJBQW5CLENBQVYsRUFBd0RpTyxJQUFJLElBQUVBLElBQUksQ0FBQyxDQUFELENBQVYsS0FBZ0J6YixDQUFDLEdBQUNyVixVQUFVLENBQUM4d0IsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUE1QixDQUE3RSxHQUFxSHpiLENBQTNIO0FBQTZIOztBQUFBLFdBQVN5TCxDQUFULENBQVd6TCxDQUFYLEVBQWFFLENBQWIsRUFBZTtBQUFDLFNBQUksSUFBSTBQLENBQUMsR0FBQyxDQUFOLEVBQVFuYyxDQUFDLEdBQUMyTixDQUFDLENBQUNwQixDQUFELENBQVgsRUFBZThSLENBQUMsR0FBQyxDQUFqQixFQUFtQitGLENBQUMsR0FBQzFWLENBQUMsQ0FBQ3FKLE1BQTNCLEVBQWtDcU0sQ0FBQyxJQUFFL0YsQ0FBckMsRUFBdUNBLENBQUMsRUFBeEMsRUFBMkM7QUFBQyxVQUFJN0UsQ0FBQyxHQUFDLENBQU47O0FBQVEsY0FBTy9NLENBQVA7QUFBVSxhQUFLc1AsQ0FBQyxDQUFDbU0sQ0FBUDtBQUFTMU8sV0FBQyxHQUFDOUssQ0FBQyxDQUFDMlAsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUFGO0FBQVU7O0FBQU0sYUFBS3RDLENBQUMsQ0FBQ29NLENBQVA7QUFBUzNPLFdBQUMsR0FBQzlLLENBQUMsQ0FBQzJQLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBRjtBQUFVOztBQUFNLGFBQUt0QyxDQUFDLENBQUNxTSxDQUFQO0FBQVM1TyxXQUFDLEdBQUM5SyxDQUFDLENBQUMyUCxDQUFELENBQUQsQ0FBSyxDQUFMLENBQUY7QUFBVTs7QUFBTSxhQUFLdEMsQ0FBQyxDQUFDc00sQ0FBUDtBQUFTN08sV0FBQyxHQUFDOUssQ0FBQyxDQUFDMlAsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUFGO0FBQTlGOztBQUF3RyxVQUFHN0UsQ0FBQyxJQUFFeFosQ0FBTixFQUFRO0FBQU1tYyxPQUFDO0FBQUc7O0FBQUEsUUFBR0EsQ0FBQyxHQUFDek4sQ0FBQyxDQUFDcUosTUFBUCxFQUFjLE1BQU0sSUFBSVMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUFpQyxXQUFPMkQsQ0FBUDtBQUFTOztBQUFBLFdBQVN4TyxDQUFULENBQVdwQixDQUFYLEVBQWE7QUFBQyxRQUFJRSxDQUFDLEdBQUM2YixTQUFTLENBQUMvYixDQUFELENBQVQsQ0FBYTBiLFFBQWIsR0FBd0JNLE9BQXhCLENBQWdDLG1CQUFoQyxFQUFvRCxHQUFwRCxDQUFOO0FBQStELFdBQU85YixDQUFDLENBQUNzTCxNQUFGLElBQVV0TCxDQUFDLENBQUNzTCxNQUFGLElBQVV4TCxDQUFWLEdBQVksQ0FBWixHQUFjLENBQXhCLENBQVA7QUFBa0M7O0FBQUFBLEdBQUMsQ0FBQ21ULFNBQUYsR0FBWTtBQUFDOEksYUFBUyxFQUFDLHFCQUFVO0FBQUMsYUFBTyxLQUFLNUIsVUFBTCxDQUFnQjdPLE1BQXZCO0FBQThCLEtBQXBEO0FBQXFEMFEsU0FBSyxFQUFDLGVBQVNsYyxDQUFULEVBQVc7QUFBQyxXQUFJLElBQUlFLENBQUMsR0FBQyxDQUFOLEVBQVEwUCxDQUFDLEdBQUMsS0FBS3lLLFVBQUwsQ0FBZ0I3TyxNQUE5QixFQUFxQ29FLENBQUMsR0FBQzFQLENBQXZDLEVBQXlDQSxDQUFDLEVBQTFDO0FBQTZDRixTQUFDLENBQUNtYyxHQUFGLENBQU0sS0FBSzlCLFVBQUwsQ0FBZ0JuYSxDQUFoQixDQUFOLEVBQXlCLENBQXpCO0FBQTdDO0FBQXlFO0FBQWhKLEdBQVosRUFBOEpBLENBQUMsQ0FBQ2lULFNBQUYsR0FBWTtBQUFDaUosV0FBTyxFQUFDLGlCQUFTbGMsQ0FBVCxFQUFXO0FBQUMsVUFBSTBQLENBQUMsR0FBQyxJQUFJNVAsQ0FBSixDQUFNRSxDQUFOLENBQU47QUFBZSxXQUFLNGEsUUFBTCxDQUFjck4sSUFBZCxDQUFtQm1DLENBQW5CLEdBQXNCLEtBQUtpTCxTQUFMLEdBQWUsSUFBckM7QUFBMEMsS0FBOUU7QUFBK0V3QixVQUFNLEVBQUMsZ0JBQVNyYyxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFVBQUcsSUFBRUYsQ0FBRixJQUFLLEtBQUs0YSxXQUFMLElBQWtCNWEsQ0FBdkIsSUFBMEIsSUFBRUUsQ0FBNUIsSUFBK0IsS0FBSzBhLFdBQUwsSUFBa0IxYSxDQUFwRCxFQUFzRCxNQUFNLElBQUkrTCxLQUFKLENBQVVqTSxDQUFDLEdBQUMsR0FBRixHQUFNRSxDQUFoQixDQUFOO0FBQXlCLGFBQU8sS0FBS3lhLE9BQUwsQ0FBYTNhLENBQWIsRUFBZ0JFLENBQWhCLENBQVA7QUFBMEIsS0FBN007QUFBOE1vYyxrQkFBYyxFQUFDLDBCQUFVO0FBQUMsYUFBTyxLQUFLMUIsV0FBWjtBQUF3QixLQUFoUTtBQUFpUTJCLFFBQUksRUFBQyxnQkFBVTtBQUFDLFdBQUtDLFFBQUwsQ0FBYyxDQUFDLENBQWYsRUFBaUIsS0FBS0Msa0JBQUwsRUFBakI7QUFBNEMsS0FBN1Q7QUFBOFRELFlBQVEsRUFBQyxrQkFBU3hjLENBQVQsRUFBVzRQLENBQVgsRUFBYTtBQUFDLFdBQUtnTCxXQUFMLEdBQWlCLElBQUUsS0FBS0gsVUFBUCxHQUFrQixFQUFuQyxFQUFzQyxLQUFLRSxPQUFMLEdBQWEsSUFBSXRELEtBQUosQ0FBVSxLQUFLdUQsV0FBZixDQUFuRDs7QUFBK0UsV0FBSSxJQUFJcEwsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtvTCxXQUFuQixFQUErQnBMLENBQUMsRUFBaEMsRUFBbUM7QUFBQyxhQUFLbUwsT0FBTCxDQUFhbkwsQ0FBYixJQUFnQixJQUFJNkgsS0FBSixDQUFVLEtBQUt1RCxXQUFmLENBQWhCOztBQUE0QyxhQUFJLElBQUlubkIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUttbkIsV0FBbkIsRUFBK0JubkIsQ0FBQyxFQUFoQztBQUFtQyxlQUFLa25CLE9BQUwsQ0FBYW5MLENBQWIsRUFBZ0IvYixDQUFoQixJQUFtQixJQUFuQjtBQUFuQztBQUEyRDs7QUFBQSxXQUFLaXBCLHlCQUFMLENBQStCLENBQS9CLEVBQWlDLENBQWpDLEdBQW9DLEtBQUtBLHlCQUFMLENBQStCLEtBQUs5QixXQUFMLEdBQWlCLENBQWhELEVBQWtELENBQWxELENBQXBDLEVBQXlGLEtBQUs4Qix5QkFBTCxDQUErQixDQUEvQixFQUFpQyxLQUFLOUIsV0FBTCxHQUFpQixDQUFsRCxDQUF6RixFQUE4SSxLQUFLK0IsMEJBQUwsRUFBOUksRUFBZ0wsS0FBS0Msa0JBQUwsRUFBaEwsRUFBME0sS0FBS0MsYUFBTCxDQUFtQjdjLENBQW5CLEVBQXFCNFAsQ0FBckIsQ0FBMU0sRUFBa08sS0FBSzZLLFVBQUwsSUFBaUIsQ0FBakIsSUFBb0IsS0FBS3FDLGVBQUwsQ0FBcUI5YyxDQUFyQixDQUF0UCxFQUE4USxRQUFNLEtBQUs2YSxTQUFYLEtBQXVCLEtBQUtBLFNBQUwsR0FBZTNhLENBQUMsQ0FBQzZjLFVBQUYsQ0FBYSxLQUFLdEMsVUFBbEIsRUFBNkIsS0FBS0MsaUJBQWxDLEVBQW9ELEtBQUtJLFFBQXpELENBQXRDLENBQTlRLEVBQXdYLEtBQUtrQyxPQUFMLENBQWEsS0FBS25DLFNBQWxCLEVBQTRCakwsQ0FBNUIsQ0FBeFg7QUFBdVosS0FBdDhCO0FBQXU4QjhNLDZCQUF5QixFQUFDLG1DQUFTMWMsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUkwUCxDQUFDLEdBQUMsQ0FBQyxDQUFYLEVBQWEsS0FBR0EsQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkI7QUFBc0IsWUFBRyxFQUFFLENBQUMsQ0FBRCxJQUFJNVAsQ0FBQyxHQUFDNFAsQ0FBTixJQUFTLEtBQUtnTCxXQUFMLElBQWtCNWEsQ0FBQyxHQUFDNFAsQ0FBL0IsQ0FBSCxFQUFxQyxLQUFJLElBQUlKLENBQUMsR0FBQyxDQUFDLENBQVgsRUFBYSxLQUFHQSxDQUFoQixFQUFrQkEsQ0FBQyxFQUFuQjtBQUFzQixXQUFDLENBQUQsSUFBSXRQLENBQUMsR0FBQ3NQLENBQU4sSUFBUyxLQUFLb0wsV0FBTCxJQUFrQjFhLENBQUMsR0FBQ3NQLENBQTdCLEtBQWlDLEtBQUttTCxPQUFMLENBQWEzYSxDQUFDLEdBQUM0UCxDQUFmLEVBQWtCMVAsQ0FBQyxHQUFDc1AsQ0FBcEIsSUFBdUJJLENBQUMsSUFBRSxDQUFILElBQU0sS0FBR0EsQ0FBVCxLQUFhLEtBQUdKLENBQUgsSUFBTSxLQUFHQSxDQUF0QixLQUEwQkEsQ0FBQyxJQUFFLENBQUgsSUFBTSxLQUFHQSxDQUFULEtBQWEsS0FBR0ksQ0FBSCxJQUFNLEtBQUdBLENBQXRCLENBQTFCLElBQW9EQSxDQUFDLElBQUUsQ0FBSCxJQUFNLEtBQUdBLENBQVQsSUFBWUosQ0FBQyxJQUFFLENBQWYsSUFBa0IsS0FBR0EsQ0FBekUsR0FBMkUsQ0FBQyxDQUE1RSxHQUE4RSxDQUFDLENBQXZJO0FBQXRCO0FBQTNEO0FBQTJOLEtBQTFzQztBQUEyc0NpTixzQkFBa0IsRUFBQyw4QkFBVTtBQUFDLFdBQUksSUFBSXpjLENBQUMsR0FBQyxDQUFOLEVBQVFFLENBQUMsR0FBQyxDQUFWLEVBQVkwUCxDQUFDLEdBQUMsQ0FBbEIsRUFBb0IsSUFBRUEsQ0FBdEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNEI7QUFBQyxhQUFLNE0sUUFBTCxDQUFjLENBQUMsQ0FBZixFQUFpQjVNLENBQWpCO0FBQW9CLFlBQUlKLENBQUMsR0FBQ3NDLENBQUMsQ0FBQ21MLFlBQUYsQ0FBZSxJQUFmLENBQU47QUFBMkIsU0FBQyxLQUFHck4sQ0FBSCxJQUFNNVAsQ0FBQyxHQUFDd1AsQ0FBVCxNQUFjeFAsQ0FBQyxHQUFDd1AsQ0FBRixFQUFJdFAsQ0FBQyxHQUFDMFAsQ0FBcEI7QUFBdUI7O0FBQUEsYUFBTzFQLENBQVA7QUFBUyxLQUFyMUM7QUFBczFDZ2QsbUJBQWUsRUFBQyx5QkFBU2xkLENBQVQsRUFBV0UsQ0FBWCxFQUFhMFAsQ0FBYixFQUFlO0FBQUMsVUFBSUosQ0FBQyxHQUFDeFAsQ0FBQyxDQUFDbWQsb0JBQUYsQ0FBdUJqZCxDQUF2QixFQUF5QjBQLENBQXpCLENBQU47QUFBQSxVQUFrQ25jLENBQUMsR0FBQyxDQUFwQztBQUFzQyxXQUFLOG9CLElBQUw7O0FBQVksV0FBSSxJQUFJekssQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs2SSxPQUFMLENBQWFuUCxNQUEzQixFQUFrQ3NHLENBQUMsRUFBbkM7QUFBc0MsYUFBSSxJQUFJK0YsQ0FBQyxHQUFDL0YsQ0FBQyxHQUFDcmUsQ0FBUixFQUFVd1osQ0FBQyxHQUFDLENBQWhCLEVBQWtCQSxDQUFDLEdBQUMsS0FBSzBOLE9BQUwsQ0FBYTdJLENBQWIsRUFBZ0J0RyxNQUFwQyxFQUEyQ3lCLENBQUMsRUFBNUMsRUFBK0M7QUFBQyxjQUFJeGQsQ0FBQyxHQUFDd2QsQ0FBQyxHQUFDeFosQ0FBUjtBQUFBLGNBQVV1bkIsQ0FBQyxHQUFDLEtBQUtMLE9BQUwsQ0FBYTdJLENBQWIsRUFBZ0I3RSxDQUFoQixDQUFaO0FBQStCK04sV0FBQyxLQUFHeEwsQ0FBQyxDQUFDNE4sU0FBRixDQUFZLENBQVosRUFBYyxHQUFkLEdBQW1CNU4sQ0FBQyxDQUFDNk4sTUFBRixDQUFTNXRCLENBQVQsRUFBV29vQixDQUFYLENBQW5CLEVBQWlDckksQ0FBQyxDQUFDOE4sTUFBRixDQUFTN3RCLENBQUMsR0FBQ2dFLENBQVgsRUFBYW9rQixDQUFiLENBQWpDLEVBQWlEckksQ0FBQyxDQUFDOE4sTUFBRixDQUFTN3RCLENBQUMsR0FBQ2dFLENBQVgsRUFBYW9rQixDQUFDLEdBQUNwa0IsQ0FBZixDQUFqRCxFQUFtRStiLENBQUMsQ0FBQzhOLE1BQUYsQ0FBUzd0QixDQUFULEVBQVdvb0IsQ0FBQyxHQUFDcGtCLENBQWIsQ0FBbkUsRUFBbUYrYixDQUFDLENBQUMrTixPQUFGLEVBQXRGLENBQUQ7QUFBb0c7QUFBek47O0FBQXlOLGFBQU8vTixDQUFQO0FBQVMsS0FBMW9EO0FBQTJvRG9OLHNCQUFrQixFQUFDLDhCQUFVO0FBQUMsV0FBSSxJQUFJNWMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs0YSxXQUFMLEdBQWlCLENBQS9CLEVBQWlDNWEsQ0FBQyxFQUFsQztBQUFxQyxnQkFBTSxLQUFLMmEsT0FBTCxDQUFhM2EsQ0FBYixFQUFnQixDQUFoQixDQUFOLEtBQTJCLEtBQUsyYSxPQUFMLENBQWEzYSxDQUFiLEVBQWdCLENBQWhCLElBQW1CLEtBQUdBLENBQUMsR0FBQyxDQUFuRDtBQUFyQzs7QUFBMkYsV0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBSzBhLFdBQUwsR0FBaUIsQ0FBL0IsRUFBaUMxYSxDQUFDLEVBQWxDO0FBQXFDLGdCQUFNLEtBQUt5YSxPQUFMLENBQWEsQ0FBYixFQUFnQnphLENBQWhCLENBQU4sS0FBMkIsS0FBS3lhLE9BQUwsQ0FBYSxDQUFiLEVBQWdCemEsQ0FBaEIsSUFBbUIsS0FBR0EsQ0FBQyxHQUFDLENBQW5EO0FBQXJDO0FBQTJGLEtBQS8xRDtBQUFnMkR5Yyw4QkFBMEIsRUFBQyxzQ0FBVTtBQUFDLFdBQUksSUFBSTNjLENBQUMsR0FBQzhSLENBQUMsQ0FBQzBMLGtCQUFGLENBQXFCLEtBQUsvQyxVQUExQixDQUFOLEVBQTRDdmEsQ0FBQyxHQUFDLENBQWxELEVBQW9EQSxDQUFDLEdBQUNGLENBQUMsQ0FBQ3dMLE1BQXhELEVBQStEdEwsQ0FBQyxFQUFoRTtBQUFtRSxhQUFJLElBQUkwUCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUM1UCxDQUFDLENBQUN3TCxNQUFoQixFQUF1Qm9FLENBQUMsRUFBeEIsRUFBMkI7QUFBQyxjQUFJSixDQUFDLEdBQUN4UCxDQUFDLENBQUNFLENBQUQsQ0FBUDtBQUFBLGNBQVd6TSxDQUFDLEdBQUN1TSxDQUFDLENBQUM0UCxDQUFELENBQWQ7QUFBa0IsY0FBRyxRQUFNLEtBQUsrSyxPQUFMLENBQWFuTCxDQUFiLEVBQWdCL2IsQ0FBaEIsQ0FBVCxFQUE0QixLQUFJLElBQUlva0IsQ0FBQyxHQUFDLENBQUMsQ0FBWCxFQUFhLEtBQUdBLENBQWhCLEVBQWtCQSxDQUFDLEVBQW5CO0FBQXNCLGlCQUFJLElBQUk1SyxDQUFDLEdBQUMsQ0FBQyxDQUFYLEVBQWEsS0FBR0EsQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkI7QUFBc0IsbUJBQUswTixPQUFMLENBQWFuTCxDQUFDLEdBQUNxSSxDQUFmLEVBQWtCcGtCLENBQUMsR0FBQ3daLENBQXBCLElBQXVCLENBQUMsQ0FBRCxJQUFJNEssQ0FBSixJQUFPLEtBQUdBLENBQVYsSUFBYSxDQUFDLENBQUQsSUFBSTVLLENBQWpCLElBQW9CLEtBQUdBLENBQXZCLElBQTBCLEtBQUc0SyxDQUFILElBQU0sS0FBRzVLLENBQW5DLEdBQXFDLENBQUMsQ0FBdEMsR0FBd0MsQ0FBQyxDQUFoRTtBQUF0QjtBQUF0QjtBQUE4RztBQUEzUDtBQUE0UCxLQUFsb0U7QUFBbW9FNlAsbUJBQWUsRUFBQyx5QkFBUzljLENBQVQsRUFBVztBQUFDLFdBQUksSUFBSUUsQ0FBQyxHQUFDNFIsQ0FBQyxDQUFDMkwsZ0JBQUYsQ0FBbUIsS0FBS2hELFVBQXhCLENBQU4sRUFBMEM3SyxDQUFDLEdBQUMsQ0FBaEQsRUFBa0QsS0FBR0EsQ0FBckQsRUFBdURBLENBQUMsRUFBeEQsRUFBMkQ7QUFBQyxZQUFJSixDQUFDLEdBQUMsQ0FBQ3hQLENBQUQsSUFBSSxNQUFJLElBQUVFLENBQUMsSUFBRTBQLENBQVQsQ0FBVjtBQUFzQixhQUFLK0ssT0FBTCxDQUFhMXdCLElBQUksQ0FBQ3l6QixLQUFMLENBQVc5TixDQUFDLEdBQUMsQ0FBYixDQUFiLEVBQThCQSxDQUFDLEdBQUMsQ0FBRixHQUFJLEtBQUtnTCxXQUFULEdBQXFCLENBQXJCLEdBQXVCLENBQXJELElBQXdEcEwsQ0FBeEQ7QUFBMEQ7O0FBQUEsV0FBSSxJQUFJSSxDQUFDLEdBQUMsQ0FBVixFQUFZLEtBQUdBLENBQWYsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUI7QUFBQyxZQUFJSixDQUFDLEdBQUMsQ0FBQ3hQLENBQUQsSUFBSSxNQUFJLElBQUVFLENBQUMsSUFBRTBQLENBQVQsQ0FBVjtBQUFzQixhQUFLK0ssT0FBTCxDQUFhL0ssQ0FBQyxHQUFDLENBQUYsR0FBSSxLQUFLZ0wsV0FBVCxHQUFxQixDQUFyQixHQUF1QixDQUFwQyxFQUF1QzN3QixJQUFJLENBQUN5ekIsS0FBTCxDQUFXOU4sQ0FBQyxHQUFDLENBQWIsQ0FBdkMsSUFBd0RKLENBQXhEO0FBQTBEO0FBQUMsS0FBbDVFO0FBQW01RXFOLGlCQUFhLEVBQUMsdUJBQVM3YyxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFdBQUksSUFBSTBQLENBQUMsR0FBQyxLQUFLOEssaUJBQUwsSUFBd0IsQ0FBeEIsR0FBMEJ4YSxDQUFoQyxFQUFrQ3NQLENBQUMsR0FBQ3NDLENBQUMsQ0FBQzZMLGNBQUYsQ0FBaUIvTixDQUFqQixDQUFwQyxFQUF3RG5jLENBQUMsR0FBQyxDQUE5RCxFQUFnRSxLQUFHQSxDQUFuRSxFQUFxRUEsQ0FBQyxFQUF0RSxFQUF5RTtBQUFDLFlBQUlva0IsQ0FBQyxHQUFDLENBQUM3WCxDQUFELElBQUksTUFBSSxJQUFFd1AsQ0FBQyxJQUFFL2IsQ0FBVCxDQUFWO0FBQXNCLFlBQUVBLENBQUYsR0FBSSxLQUFLa25CLE9BQUwsQ0FBYWxuQixDQUFiLEVBQWdCLENBQWhCLElBQW1Cb2tCLENBQXZCLEdBQXlCLElBQUVwa0IsQ0FBRixHQUFJLEtBQUtrbkIsT0FBTCxDQUFhbG5CLENBQUMsR0FBQyxDQUFmLEVBQWtCLENBQWxCLElBQXFCb2tCLENBQXpCLEdBQTJCLEtBQUs4QyxPQUFMLENBQWEsS0FBS0MsV0FBTCxHQUFpQixFQUFqQixHQUFvQm5uQixDQUFqQyxFQUFvQyxDQUFwQyxJQUF1Q29rQixDQUEzRjtBQUE2Rjs7QUFBQSxXQUFJLElBQUlwa0IsQ0FBQyxHQUFDLENBQVYsRUFBWSxLQUFHQSxDQUFmLEVBQWlCQSxDQUFDLEVBQWxCLEVBQXFCO0FBQUMsWUFBSW9rQixDQUFDLEdBQUMsQ0FBQzdYLENBQUQsSUFBSSxNQUFJLElBQUV3UCxDQUFDLElBQUUvYixDQUFULENBQVY7QUFBc0IsWUFBRUEsQ0FBRixHQUFJLEtBQUtrbkIsT0FBTCxDQUFhLENBQWIsRUFBZ0IsS0FBS0MsV0FBTCxHQUFpQm5uQixDQUFqQixHQUFtQixDQUFuQyxJQUFzQ29rQixDQUExQyxHQUE0QyxJQUFFcGtCLENBQUYsR0FBSSxLQUFLa25CLE9BQUwsQ0FBYSxDQUFiLEVBQWdCLEtBQUdsbkIsQ0FBSCxHQUFLLENBQUwsR0FBTyxDQUF2QixJQUEwQm9rQixDQUE5QixHQUFnQyxLQUFLOEMsT0FBTCxDQUFhLENBQWIsRUFBZ0IsS0FBR2xuQixDQUFILEdBQUssQ0FBckIsSUFBd0Jva0IsQ0FBcEc7QUFBc0c7O0FBQUEsV0FBSzhDLE9BQUwsQ0FBYSxLQUFLQyxXQUFMLEdBQWlCLENBQTlCLEVBQWlDLENBQWpDLElBQW9DLENBQUM1YSxDQUFyQztBQUF1QyxLQUFyeUY7QUFBc3lGZ2QsV0FBTyxFQUFDLGlCQUFTaGQsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUkwUCxDQUFDLEdBQUMsQ0FBQyxDQUFQLEVBQVNKLENBQUMsR0FBQyxLQUFLb0wsV0FBTCxHQUFpQixDQUE1QixFQUE4Qm5uQixDQUFDLEdBQUMsQ0FBaEMsRUFBa0Nva0IsQ0FBQyxHQUFDLENBQXBDLEVBQXNDNUssQ0FBQyxHQUFDLEtBQUsyTixXQUFMLEdBQWlCLENBQTdELEVBQStEM04sQ0FBQyxHQUFDLENBQWpFLEVBQW1FQSxDQUFDLElBQUUsQ0FBdEU7QUFBd0UsYUFBSSxLQUFHQSxDQUFILElBQU1BLENBQUMsRUFBWCxJQUFnQjtBQUFDLGVBQUksSUFBSXhkLENBQUMsR0FBQyxDQUFWLEVBQVksSUFBRUEsQ0FBZCxFQUFnQkEsQ0FBQyxFQUFqQjtBQUFvQixnQkFBRyxRQUFNLEtBQUtrckIsT0FBTCxDQUFhbkwsQ0FBYixFQUFnQnZDLENBQUMsR0FBQ3hkLENBQWxCLENBQVQsRUFBOEI7QUFBQyxrQkFBSXVyQixDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQVNuRCxlQUFDLEdBQUM3WCxDQUFDLENBQUN3TCxNQUFKLEtBQWF3UCxDQUFDLEdBQUMsTUFBSSxJQUFFaGIsQ0FBQyxDQUFDNlgsQ0FBRCxDQUFELEtBQU9wa0IsQ0FBYixDQUFmO0FBQWdDLGtCQUFJMG5CLENBQUMsR0FBQ3JKLENBQUMsQ0FBQzhMLE9BQUYsQ0FBVTFkLENBQVYsRUFBWXNQLENBQVosRUFBY3ZDLENBQUMsR0FBQ3hkLENBQWhCLENBQU47QUFBeUIwckIsZUFBQyxLQUFHSCxDQUFDLEdBQUMsQ0FBQ0EsQ0FBTixDQUFELEVBQVUsS0FBS0wsT0FBTCxDQUFhbkwsQ0FBYixFQUFnQnZDLENBQUMsR0FBQ3hkLENBQWxCLElBQXFCdXJCLENBQS9CLEVBQWlDdm5CLENBQUMsRUFBbEMsRUFBcUMsQ0FBQyxDQUFELElBQUlBLENBQUosS0FBUW9rQixDQUFDLElBQUdwa0IsQ0FBQyxHQUFDLENBQWQsQ0FBckM7QUFBc0Q7QUFBM0s7O0FBQTJLLGNBQUcrYixDQUFDLElBQUVJLENBQUgsRUFBSyxJQUFFSixDQUFGLElBQUssS0FBS29MLFdBQUwsSUFBa0JwTCxDQUEvQixFQUFpQztBQUFDQSxhQUFDLElBQUVJLENBQUgsRUFBS0EsQ0FBQyxHQUFDLENBQUNBLENBQVI7QUFBVTtBQUFNO0FBQUM7QUFBdlQ7QUFBd1Q7QUFBcG5HLEdBQTFLLEVBQWd5RzFQLENBQUMsQ0FBQzJkLElBQUYsR0FBTyxHQUF2eUcsRUFBMnlHM2QsQ0FBQyxDQUFDNGQsSUFBRixHQUFPLEVBQWx6RyxFQUFxekc1ZCxDQUFDLENBQUM2YyxVQUFGLEdBQWEsVUFBUy9jLENBQVQsRUFBVzRQLENBQVgsRUFBYUosQ0FBYixFQUFlO0FBQUMsU0FBSSxJQUFJL2IsQ0FBQyxHQUFDdW5CLENBQUMsQ0FBQytDLFdBQUYsQ0FBYy9kLENBQWQsRUFBZ0I0UCxDQUFoQixDQUFOLEVBQXlCaUksQ0FBQyxHQUFDLElBQUlzRCxDQUFKLEVBQTNCLEVBQWlDbE8sQ0FBQyxHQUFDLENBQXZDLEVBQXlDQSxDQUFDLEdBQUN1QyxDQUFDLENBQUNoRSxNQUE3QyxFQUFvRHlCLENBQUMsRUFBckQsRUFBd0Q7QUFBQyxVQUFJeGQsQ0FBQyxHQUFDK2YsQ0FBQyxDQUFDdkMsQ0FBRCxDQUFQO0FBQVc0SyxPQUFDLENBQUNzRSxHQUFGLENBQU0xc0IsQ0FBQyxDQUFDMHFCLElBQVIsRUFBYSxDQUFiLEdBQWdCdEMsQ0FBQyxDQUFDc0UsR0FBRixDQUFNMXNCLENBQUMsQ0FBQ3dzQixTQUFGLEVBQU4sRUFBb0JuSyxDQUFDLENBQUNrTSxlQUFGLENBQWtCdnVCLENBQUMsQ0FBQzBxQixJQUFwQixFQUF5Qm5hLENBQXpCLENBQXBCLENBQWhCLEVBQWlFdlEsQ0FBQyxDQUFDeXNCLEtBQUYsQ0FBUXJFLENBQVIsQ0FBakU7QUFBNEU7O0FBQUEsU0FBSSxJQUFJMVYsQ0FBQyxHQUFDLENBQU4sRUFBUThLLENBQUMsR0FBQyxDQUFkLEVBQWdCQSxDQUFDLEdBQUN4WixDQUFDLENBQUMrWCxNQUFwQixFQUEyQnlCLENBQUMsRUFBNUI7QUFBK0I5SyxPQUFDLElBQUUxTyxDQUFDLENBQUN3WixDQUFELENBQUQsQ0FBS2lPLFNBQVI7QUFBL0I7O0FBQWlELFFBQUdyRCxDQUFDLENBQUNtRyxlQUFGLEtBQW9CLElBQUU3YixDQUF6QixFQUEyQixNQUFNLElBQUk4SixLQUFKLENBQVUsNEJBQTBCNEwsQ0FBQyxDQUFDbUcsZUFBRixFQUExQixHQUE4QyxHQUE5QyxHQUFrRCxJQUFFN2IsQ0FBcEQsR0FBc0QsR0FBaEUsQ0FBTjs7QUFBMkUsU0FBSTBWLENBQUMsQ0FBQ21HLGVBQUYsS0FBb0IsQ0FBcEIsSUFBdUIsSUFBRTdiLENBQXpCLElBQTRCMFYsQ0FBQyxDQUFDc0UsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLENBQWhDLEVBQTJDLEtBQUd0RSxDQUFDLENBQUNtRyxlQUFGLEtBQW9CLENBQWxFO0FBQXFFbkcsT0FBQyxDQUFDb0csTUFBRixDQUFTLENBQUMsQ0FBVjtBQUFyRTs7QUFBa0YsYUFBTztBQUFDLFVBQUdwRyxDQUFDLENBQUNtRyxlQUFGLE1BQXFCLElBQUU3YixDQUExQixFQUE0QjtBQUFNLFVBQUcwVixDQUFDLENBQUNzRSxHQUFGLENBQU1qYyxDQUFDLENBQUMyZCxJQUFSLEVBQWEsQ0FBYixHQUFnQmhHLENBQUMsQ0FBQ21HLGVBQUYsTUFBcUIsSUFBRTdiLENBQTFDLEVBQTRDO0FBQU0wVixPQUFDLENBQUNzRSxHQUFGLENBQU1qYyxDQUFDLENBQUM0ZCxJQUFSLEVBQWEsQ0FBYjtBQUFnQjs7QUFBQSxXQUFPNWQsQ0FBQyxDQUFDZ2UsV0FBRixDQUFjckcsQ0FBZCxFQUFnQnBrQixDQUFoQixDQUFQO0FBQTBCLEdBQWoxSCxFQUFrMUh5TSxDQUFDLENBQUNnZSxXQUFGLEdBQWMsVUFBU2xlLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBSSxJQUFJMFAsQ0FBQyxHQUFDLENBQU4sRUFBUUosQ0FBQyxHQUFDLENBQVYsRUFBWS9iLENBQUMsR0FBQyxDQUFkLEVBQWdCb2tCLENBQUMsR0FBQyxJQUFJUixLQUFKLENBQVVuWCxDQUFDLENBQUNzTCxNQUFaLENBQWxCLEVBQXNDeUIsQ0FBQyxHQUFDLElBQUlvSyxLQUFKLENBQVVuWCxDQUFDLENBQUNzTCxNQUFaLENBQXhDLEVBQTREd1AsQ0FBQyxHQUFDLENBQWxFLEVBQW9FQSxDQUFDLEdBQUM5YSxDQUFDLENBQUNzTCxNQUF4RSxFQUErRXdQLENBQUMsRUFBaEYsRUFBbUY7QUFBQyxVQUFJRyxDQUFDLEdBQUNqYixDQUFDLENBQUM4YSxDQUFELENBQUQsQ0FBS0UsU0FBWDtBQUFBLFVBQXFCL1ksQ0FBQyxHQUFDakMsQ0FBQyxDQUFDOGEsQ0FBRCxDQUFELENBQUtDLFVBQUwsR0FBZ0JFLENBQXZDO0FBQXlDM0wsT0FBQyxHQUFDdmxCLElBQUksQ0FBQzByQixHQUFMLENBQVNuRyxDQUFULEVBQVcyTCxDQUFYLENBQUYsRUFBZ0IxbkIsQ0FBQyxHQUFDeEosSUFBSSxDQUFDMHJCLEdBQUwsQ0FBU2xpQixDQUFULEVBQVcwTyxDQUFYLENBQWxCLEVBQWdDMFYsQ0FBQyxDQUFDbUQsQ0FBRCxDQUFELEdBQUssSUFBSTNELEtBQUosQ0FBVThELENBQVYsQ0FBckM7O0FBQWtELFdBQUksSUFBSUUsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDeEQsQ0FBQyxDQUFDbUQsQ0FBRCxDQUFELENBQUt4UCxNQUFuQixFQUEwQjZQLENBQUMsRUFBM0I7QUFBOEJ4RCxTQUFDLENBQUNtRCxDQUFELENBQUQsQ0FBS0ssQ0FBTCxJQUFRLE1BQUlyYixDQUFDLENBQUNvYixNQUFGLENBQVNDLENBQUMsR0FBQ3pMLENBQVgsQ0FBWjtBQUE5Qjs7QUFBd0RBLE9BQUMsSUFBRXVMLENBQUg7QUFBSyxVQUFJbk8sQ0FBQyxHQUFDOEUsQ0FBQyxDQUFDcU0seUJBQUYsQ0FBNEJoYyxDQUE1QixDQUFOO0FBQUEsVUFBcUNnSyxDQUFDLEdBQUMsSUFBSTFjLENBQUosQ0FBTW9vQixDQUFDLENBQUNtRCxDQUFELENBQVAsRUFBV2hPLENBQUMsQ0FBQ2lQLFNBQUYsS0FBYyxDQUF6QixDQUF2QztBQUFBLFVBQW1FL2EsQ0FBQyxHQUFDaUwsQ0FBQyxDQUFDaVMsR0FBRixDQUFNcFIsQ0FBTixDQUFyRTtBQUE4RUMsT0FBQyxDQUFDK04sQ0FBRCxDQUFELEdBQUssSUFBSTNELEtBQUosQ0FBVXJLLENBQUMsQ0FBQ2lQLFNBQUYsS0FBYyxDQUF4QixDQUFMOztBQUFnQyxXQUFJLElBQUlaLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3BPLENBQUMsQ0FBQytOLENBQUQsQ0FBRCxDQUFLeFAsTUFBbkIsRUFBMEI2UCxDQUFDLEVBQTNCLEVBQThCO0FBQUMsWUFBSWdELENBQUMsR0FBQ2hELENBQUMsR0FBQ25hLENBQUMsQ0FBQythLFNBQUYsRUFBRixHQUFnQmhQLENBQUMsQ0FBQytOLENBQUQsQ0FBRCxDQUFLeFAsTUFBM0I7QUFBa0N5QixTQUFDLENBQUMrTixDQUFELENBQUQsQ0FBS0ssQ0FBTCxJQUFRZ0QsQ0FBQyxJQUFFLENBQUgsR0FBS25kLENBQUMsQ0FBQ29kLEdBQUYsQ0FBTUQsQ0FBTixDQUFMLEdBQWMsQ0FBdEI7QUFBd0I7QUFBQzs7QUFBQSxTQUFJLElBQUk1UyxDQUFDLEdBQUMsQ0FBTixFQUFRNFAsQ0FBQyxHQUFDLENBQWQsRUFBZ0JBLENBQUMsR0FBQ25iLENBQUMsQ0FBQ3NMLE1BQXBCLEVBQTJCNlAsQ0FBQyxFQUE1QjtBQUErQjVQLE9BQUMsSUFBRXZMLENBQUMsQ0FBQ21iLENBQUQsQ0FBRCxDQUFLSixVQUFSO0FBQS9COztBQUFrRCxTQUFJLElBQUk3WixDQUFDLEdBQUMsSUFBSWlXLEtBQUosQ0FBVTVMLENBQVYsQ0FBTixFQUFtQk4sQ0FBQyxHQUFDLENBQXJCLEVBQXVCa1EsQ0FBQyxHQUFDLENBQTdCLEVBQStCN0wsQ0FBQyxHQUFDNkwsQ0FBakMsRUFBbUNBLENBQUMsRUFBcEM7QUFBdUMsV0FBSSxJQUFJTCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUM5YSxDQUFDLENBQUNzTCxNQUFoQixFQUF1QndQLENBQUMsRUFBeEI7QUFBMkJLLFNBQUMsR0FBQ3hELENBQUMsQ0FBQ21ELENBQUQsQ0FBRCxDQUFLeFAsTUFBUCxLQUFnQnBLLENBQUMsQ0FBQytKLENBQUMsRUFBRixDQUFELEdBQU8wTSxDQUFDLENBQUNtRCxDQUFELENBQUQsQ0FBS0ssQ0FBTCxDQUF2QjtBQUEzQjtBQUF2Qzs7QUFBa0csU0FBSSxJQUFJQSxDQUFDLEdBQUMsQ0FBVixFQUFZNW5CLENBQUMsR0FBQzRuQixDQUFkLEVBQWdCQSxDQUFDLEVBQWpCO0FBQW9CLFdBQUksSUFBSUwsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDOWEsQ0FBQyxDQUFDc0wsTUFBaEIsRUFBdUJ3UCxDQUFDLEVBQXhCO0FBQTJCSyxTQUFDLEdBQUNwTyxDQUFDLENBQUMrTixDQUFELENBQUQsQ0FBS3hQLE1BQVAsS0FBZ0JwSyxDQUFDLENBQUMrSixDQUFDLEVBQUYsQ0FBRCxHQUFPOEIsQ0FBQyxDQUFDK04sQ0FBRCxDQUFELENBQUtLLENBQUwsQ0FBdkI7QUFBM0I7QUFBcEI7O0FBQStFLFdBQU9qYSxDQUFQO0FBQVMsR0FBOWdKOztBQUErZ0osT0FBSSxJQUFJd08sQ0FBQyxHQUFDO0FBQUMyTyxlQUFXLEVBQUMsQ0FBYjtBQUFlQyxrQkFBYyxFQUFDLENBQTlCO0FBQWdDcEUsa0JBQWMsRUFBQyxDQUEvQztBQUFpRHFFLGNBQVUsRUFBQztBQUE1RCxHQUFOLEVBQXFFalAsQ0FBQyxHQUFDO0FBQUNtTSxLQUFDLEVBQUMsQ0FBSDtBQUFLQyxLQUFDLEVBQUMsQ0FBUDtBQUFTQyxLQUFDLEVBQUMsQ0FBWDtBQUFhQyxLQUFDLEVBQUM7QUFBZixHQUF2RSxFQUF5RnJvQixDQUFDLEdBQUM7QUFBQ2lyQixjQUFVLEVBQUMsQ0FBWjtBQUFjQyxjQUFVLEVBQUMsQ0FBekI7QUFBMkJDLGNBQVUsRUFBQyxDQUF0QztBQUF3Q0MsY0FBVSxFQUFDLENBQW5EO0FBQXFEQyxjQUFVLEVBQUMsQ0FBaEU7QUFBa0VDLGNBQVUsRUFBQyxDQUE3RTtBQUErRUMsY0FBVSxFQUFDLENBQTFGO0FBQTRGQyxjQUFVLEVBQUM7QUFBdkcsR0FBM0YsRUFBcU1uTixDQUFDLEdBQUM7QUFBQ29OLDBCQUFzQixFQUFDLENBQUMsRUFBRCxFQUFJLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBSixFQUFXLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBWCxFQUFrQixDQUFDLENBQUQsRUFBRyxFQUFILENBQWxCLEVBQXlCLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBekIsRUFBZ0MsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUFoQyxFQUF1QyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF2QyxFQUFpRCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFqRCxFQUEyRCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUEzRCxFQUFxRSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFyRSxFQUErRSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUEvRSxFQUF5RixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF6RixFQUFtRyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFuRyxFQUE2RyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsQ0FBN0csRUFBMEgsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULENBQTFILEVBQXVJLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxDQUF2SSxFQUFvSixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsQ0FBcEosRUFBaUssQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULENBQWpLLEVBQThLLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxDQUE5SyxFQUEyTCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsQ0FBM0wsRUFBd00sQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksRUFBWixDQUF4TSxFQUF3TixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxFQUFaLENBQXhOLEVBQXdPLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosQ0FBeE8sRUFBeVAsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixDQUF6UCxFQUEwUSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLENBQTFRLEVBQTJSLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosQ0FBM1IsRUFBNFMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixDQUE1UyxFQUE2VCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxFQUFaLEVBQWUsR0FBZixDQUE3VCxFQUFpVixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQWpWLEVBQXNXLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosRUFBZ0IsR0FBaEIsQ0FBdFcsRUFBMlgsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixFQUFnQixHQUFoQixDQUEzWCxFQUFnWixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQWhaLEVBQXFhLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosRUFBZ0IsR0FBaEIsQ0FBcmEsRUFBMGIsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixFQUFnQixHQUFoQixDQUExYixFQUErYyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLENBQS9jLEVBQXdlLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosRUFBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsQ0FBeGUsRUFBaWdCLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosRUFBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsQ0FBamdCLEVBQTBoQixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLENBQTFoQixFQUFtakIsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixFQUFnQixHQUFoQixFQUFvQixHQUFwQixDQUFuakIsRUFBNGtCLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosRUFBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsQ0FBNWtCLENBQXhCO0FBQThuQkMsT0FBRyxFQUFDLElBQWxvQjtBQUF1b0JDLE9BQUcsRUFBQyxJQUEzb0I7QUFBZ3BCQyxZQUFRLEVBQUMsS0FBenBCO0FBQStwQjFCLGtCQUFjLEVBQUMsd0JBQVMzZCxDQUFULEVBQVc7QUFBQyxXQUFJLElBQUlFLENBQUMsR0FBQ0YsQ0FBQyxJQUFFLEVBQWIsRUFBZ0I4UixDQUFDLENBQUN3TixXQUFGLENBQWNwZixDQUFkLElBQWlCNFIsQ0FBQyxDQUFDd04sV0FBRixDQUFjeE4sQ0FBQyxDQUFDcU4sR0FBaEIsQ0FBakIsSUFBdUMsQ0FBdkQ7QUFBMERqZixTQUFDLElBQUU0UixDQUFDLENBQUNxTixHQUFGLElBQU9yTixDQUFDLENBQUN3TixXQUFGLENBQWNwZixDQUFkLElBQWlCNFIsQ0FBQyxDQUFDd04sV0FBRixDQUFjeE4sQ0FBQyxDQUFDcU4sR0FBaEIsQ0FBM0I7QUFBMUQ7O0FBQTBHLGFBQU0sQ0FBQ25mLENBQUMsSUFBRSxFQUFILEdBQU1FLENBQVAsSUFBVTRSLENBQUMsQ0FBQ3VOLFFBQWxCO0FBQTJCLEtBQS96QjtBQUFnMEI1QixvQkFBZ0IsRUFBQywwQkFBU3pkLENBQVQsRUFBVztBQUFDLFdBQUksSUFBSUUsQ0FBQyxHQUFDRixDQUFDLElBQUUsRUFBYixFQUFnQjhSLENBQUMsQ0FBQ3dOLFdBQUYsQ0FBY3BmLENBQWQsSUFBaUI0UixDQUFDLENBQUN3TixXQUFGLENBQWN4TixDQUFDLENBQUNzTixHQUFoQixDQUFqQixJQUF1QyxDQUF2RDtBQUEwRGxmLFNBQUMsSUFBRTRSLENBQUMsQ0FBQ3NOLEdBQUYsSUFBT3ROLENBQUMsQ0FBQ3dOLFdBQUYsQ0FBY3BmLENBQWQsSUFBaUI0UixDQUFDLENBQUN3TixXQUFGLENBQWN4TixDQUFDLENBQUNzTixHQUFoQixDQUEzQjtBQUExRDs7QUFBMEcsYUFBT3BmLENBQUMsSUFBRSxFQUFILEdBQU1FLENBQWI7QUFBZSxLQUF0OUI7QUFBdTlCb2YsZUFBVyxFQUFDLHFCQUFTdGYsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZLEtBQUdGLENBQWY7QUFBa0JFLFNBQUMsSUFBR0YsQ0FBQyxNQUFJLENBQVQ7QUFBbEI7O0FBQTZCLGFBQU9FLENBQVA7QUFBUyxLQUFyaEM7QUFBc2hDc2Qsc0JBQWtCLEVBQUMsNEJBQVN4ZCxDQUFULEVBQVc7QUFBQyxhQUFPOFIsQ0FBQyxDQUFDb04sc0JBQUYsQ0FBeUJsZixDQUFDLEdBQUMsQ0FBM0IsQ0FBUDtBQUFxQyxLQUExbEM7QUFBMmxDNGQsV0FBTyxFQUFDLGlCQUFTNWQsQ0FBVCxFQUFXRSxDQUFYLEVBQWEwUCxDQUFiLEVBQWU7QUFBQyxjQUFPNVAsQ0FBUDtBQUFVLGFBQUt2TSxDQUFDLENBQUNpckIsVUFBUDtBQUFrQixpQkFBTyxLQUFHLENBQUN4ZSxDQUFDLEdBQUMwUCxDQUFILElBQU0sQ0FBaEI7O0FBQWtCLGFBQUtuYyxDQUFDLENBQUNrckIsVUFBUDtBQUFrQixpQkFBTyxLQUFHemUsQ0FBQyxHQUFDLENBQVo7O0FBQWMsYUFBS3pNLENBQUMsQ0FBQ21yQixVQUFQO0FBQWtCLGlCQUFPLEtBQUdoUCxDQUFDLEdBQUMsQ0FBWjs7QUFBYyxhQUFLbmMsQ0FBQyxDQUFDb3JCLFVBQVA7QUFBa0IsaUJBQU8sS0FBRyxDQUFDM2UsQ0FBQyxHQUFDMFAsQ0FBSCxJQUFNLENBQWhCOztBQUFrQixhQUFLbmMsQ0FBQyxDQUFDcXJCLFVBQVA7QUFBa0IsaUJBQU8sS0FBRyxDQUFDNzBCLElBQUksQ0FBQ3l6QixLQUFMLENBQVd4ZCxDQUFDLEdBQUMsQ0FBYixJQUFnQmpXLElBQUksQ0FBQ3l6QixLQUFMLENBQVc5TixDQUFDLEdBQUMsQ0FBYixDQUFqQixJQUFrQyxDQUE1Qzs7QUFBOEMsYUFBS25jLENBQUMsQ0FBQ3NyQixVQUFQO0FBQWtCLGlCQUFPLEtBQUc3ZSxDQUFDLEdBQUMwUCxDQUFGLEdBQUksQ0FBSixHQUFNMVAsQ0FBQyxHQUFDMFAsQ0FBRixHQUFJLENBQXBCOztBQUFzQixhQUFLbmMsQ0FBQyxDQUFDdXJCLFVBQVA7QUFBa0IsaUJBQU8sS0FBRyxDQUFDOWUsQ0FBQyxHQUFDMFAsQ0FBRixHQUFJLENBQUosR0FBTTFQLENBQUMsR0FBQzBQLENBQUYsR0FBSSxDQUFYLElBQWMsQ0FBeEI7O0FBQTBCLGFBQUtuYyxDQUFDLENBQUN3ckIsVUFBUDtBQUFrQixpQkFBTyxLQUFHLENBQUMvZSxDQUFDLEdBQUMwUCxDQUFGLEdBQUksQ0FBSixHQUFNLENBQUMxUCxDQUFDLEdBQUMwUCxDQUFILElBQU0sQ0FBYixJQUFnQixDQUExQjs7QUFBNEI7QUFBUSxnQkFBTSxJQUFJM0QsS0FBSixDQUFVLHFCQUFtQmpNLENBQTdCLENBQU47QUFBNVY7QUFBbVksS0FBdC9DO0FBQXUvQ21lLDZCQUF5QixFQUFDLG1DQUFTbmUsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJRSxDQUFDLEdBQUMsSUFBSXpRLENBQUosQ0FBTSxDQUFDLENBQUQsQ0FBTixFQUFVLENBQVYsQ0FBTixFQUFtQm1nQixDQUFDLEdBQUMsQ0FBekIsRUFBMkI1UCxDQUFDLEdBQUM0UCxDQUE3QixFQUErQkEsQ0FBQyxFQUFoQztBQUFtQzFQLFNBQUMsR0FBQ0EsQ0FBQyxDQUFDcWYsUUFBRixDQUFXLElBQUk5dkIsQ0FBSixDQUFNLENBQUMsQ0FBRCxFQUFHb29CLENBQUMsQ0FBQzJILElBQUYsQ0FBTzVQLENBQVAsQ0FBSCxDQUFOLEVBQW9CLENBQXBCLENBQVgsQ0FBRjtBQUFuQzs7QUFBd0UsYUFBTzFQLENBQVA7QUFBUyxLQUE5bUQ7QUFBK21EOGQsbUJBQWUsRUFBQyx5QkFBU2hlLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsVUFBR0EsQ0FBQyxJQUFFLENBQUgsSUFBTSxLQUFHQSxDQUFaLEVBQWMsUUFBT0YsQ0FBUDtBQUFVLGFBQUs0UCxDQUFDLENBQUMyTyxXQUFQO0FBQW1CLGlCQUFPLEVBQVA7O0FBQVUsYUFBSzNPLENBQUMsQ0FBQzRPLGNBQVA7QUFBc0IsaUJBQU8sQ0FBUDs7QUFBUyxhQUFLNU8sQ0FBQyxDQUFDd0ssY0FBUDtBQUFzQixpQkFBTyxDQUFQOztBQUFTLGFBQUt4SyxDQUFDLENBQUM2TyxVQUFQO0FBQWtCLGlCQUFPLENBQVA7O0FBQVM7QUFBUSxnQkFBTSxJQUFJeFMsS0FBSixDQUFVLFVBQVFqTSxDQUFsQixDQUFOO0FBQXhJLE9BQWQsTUFBc0wsSUFBRyxLQUFHRSxDQUFOLEVBQVEsUUFBT0YsQ0FBUDtBQUFVLGFBQUs0UCxDQUFDLENBQUMyTyxXQUFQO0FBQW1CLGlCQUFPLEVBQVA7O0FBQVUsYUFBSzNPLENBQUMsQ0FBQzRPLGNBQVA7QUFBc0IsaUJBQU8sRUFBUDs7QUFBVSxhQUFLNU8sQ0FBQyxDQUFDd0ssY0FBUDtBQUFzQixpQkFBTyxFQUFQOztBQUFVLGFBQUt4SyxDQUFDLENBQUM2TyxVQUFQO0FBQWtCLGlCQUFPLEVBQVA7O0FBQVU7QUFBUSxnQkFBTSxJQUFJeFMsS0FBSixDQUFVLFVBQVFqTSxDQUFsQixDQUFOO0FBQTNJLE9BQVIsTUFBa0w7QUFBQyxZQUFHLEVBQUUsS0FBR0UsQ0FBTCxDQUFILEVBQVcsTUFBTSxJQUFJK0wsS0FBSixDQUFVLFVBQVEvTCxDQUFsQixDQUFOOztBQUEyQixnQkFBT0YsQ0FBUDtBQUFVLGVBQUs0UCxDQUFDLENBQUMyTyxXQUFQO0FBQW1CLG1CQUFPLEVBQVA7O0FBQVUsZUFBSzNPLENBQUMsQ0FBQzRPLGNBQVA7QUFBc0IsbUJBQU8sRUFBUDs7QUFBVSxlQUFLNU8sQ0FBQyxDQUFDd0ssY0FBUDtBQUFzQixtQkFBTyxFQUFQOztBQUFVLGVBQUt4SyxDQUFDLENBQUM2TyxVQUFQO0FBQWtCLG1CQUFPLEVBQVA7O0FBQVU7QUFBUSxrQkFBTSxJQUFJeFMsS0FBSixDQUFVLFVBQVFqTSxDQUFsQixDQUFOO0FBQTNJO0FBQXVLO0FBQUMsS0FBcHNFO0FBQXFzRWlkLGdCQUFZLEVBQUMsc0JBQVNqZCxDQUFULEVBQVc7QUFBQyxXQUFJLElBQUlFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDc2MsY0FBRixFQUFOLEVBQXlCMU0sQ0FBQyxHQUFDLENBQTNCLEVBQTZCSixDQUFDLEdBQUMsQ0FBbkMsRUFBcUN0UCxDQUFDLEdBQUNzUCxDQUF2QyxFQUF5Q0EsQ0FBQyxFQUExQztBQUE2QyxhQUFJLElBQUkvYixDQUFDLEdBQUMsQ0FBVixFQUFZeU0sQ0FBQyxHQUFDek0sQ0FBZCxFQUFnQkEsQ0FBQyxFQUFqQixFQUFvQjtBQUFDLGVBQUksSUFBSXFlLENBQUMsR0FBQyxDQUFOLEVBQVErRixDQUFDLEdBQUM3WCxDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFULEVBQVcvYixDQUFYLENBQVYsRUFBd0J3WixDQUFDLEdBQUMsQ0FBQyxDQUEvQixFQUFpQyxLQUFHQSxDQUFwQyxFQUFzQ0EsQ0FBQyxFQUF2QztBQUEwQyxnQkFBRyxFQUFFLElBQUV1QyxDQUFDLEdBQUN2QyxDQUFKLElBQU91QyxDQUFDLEdBQUN2QyxDQUFGLElBQUsvTSxDQUFkLENBQUgsRUFBb0IsS0FBSSxJQUFJelEsQ0FBQyxHQUFDLENBQUMsQ0FBWCxFQUFhLEtBQUdBLENBQWhCLEVBQWtCQSxDQUFDLEVBQW5CO0FBQXNCLGtCQUFFZ0UsQ0FBQyxHQUFDaEUsQ0FBSixJQUFPZ0UsQ0FBQyxHQUFDaEUsQ0FBRixJQUFLeVEsQ0FBWixJQUFlLENBQUMsS0FBRytNLENBQUgsSUFBTSxLQUFHeGQsQ0FBVixLQUFjb29CLENBQUMsSUFBRTdYLENBQUMsQ0FBQ3FjLE1BQUYsQ0FBUzdNLENBQUMsR0FBQ3ZDLENBQVgsRUFBYXhaLENBQUMsR0FBQ2hFLENBQWYsQ0FBakIsSUFBb0NxaUIsQ0FBQyxFQUFwRDtBQUF0QjtBQUE5RDs7QUFBMklBLFdBQUMsR0FBQyxDQUFGLEtBQU1sQyxDQUFDLElBQUUsSUFBRWtDLENBQUYsR0FBSSxDQUFiO0FBQWdCO0FBQTdOOztBQUE2TixXQUFJLElBQUl0QyxDQUFDLEdBQUMsQ0FBVixFQUFZdFAsQ0FBQyxHQUFDLENBQUYsR0FBSXNQLENBQWhCLEVBQWtCQSxDQUFDLEVBQW5CO0FBQXNCLGFBQUksSUFBSS9iLENBQUMsR0FBQyxDQUFWLEVBQVl5TSxDQUFDLEdBQUMsQ0FBRixHQUFJek0sQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkIsRUFBc0I7QUFBQyxjQUFJdW5CLENBQUMsR0FBQyxDQUFOO0FBQVFoYixXQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFULEVBQVcvYixDQUFYLEtBQWV1bkIsQ0FBQyxFQUFoQixFQUFtQmhiLENBQUMsQ0FBQ3FjLE1BQUYsQ0FBUzdNLENBQUMsR0FBQyxDQUFYLEVBQWEvYixDQUFiLEtBQWlCdW5CLENBQUMsRUFBckMsRUFBd0NoYixDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFULEVBQVcvYixDQUFDLEdBQUMsQ0FBYixLQUFpQnVuQixDQUFDLEVBQTFELEVBQTZEaGIsQ0FBQyxDQUFDcWMsTUFBRixDQUFTN00sQ0FBQyxHQUFDLENBQVgsRUFBYS9iLENBQUMsR0FBQyxDQUFmLEtBQW1CdW5CLENBQUMsRUFBakYsRUFBb0YsQ0FBQyxLQUFHQSxDQUFILElBQU0sS0FBR0EsQ0FBVixNQUFlcEwsQ0FBQyxJQUFFLENBQWxCLENBQXBGO0FBQXlHO0FBQTlKOztBQUE4SixXQUFJLElBQUlKLENBQUMsR0FBQyxDQUFWLEVBQVl0UCxDQUFDLEdBQUNzUCxDQUFkLEVBQWdCQSxDQUFDLEVBQWpCO0FBQW9CLGFBQUksSUFBSS9iLENBQUMsR0FBQyxDQUFWLEVBQVl5TSxDQUFDLEdBQUMsQ0FBRixHQUFJek0sQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkI7QUFBc0J1TSxXQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFULEVBQVcvYixDQUFYLEtBQWUsQ0FBQ3VNLENBQUMsQ0FBQ3FjLE1BQUYsQ0FBUzdNLENBQVQsRUFBVy9iLENBQUMsR0FBQyxDQUFiLENBQWhCLElBQWlDdU0sQ0FBQyxDQUFDcWMsTUFBRixDQUFTN00sQ0FBVCxFQUFXL2IsQ0FBQyxHQUFDLENBQWIsQ0FBakMsSUFBa0R1TSxDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFULEVBQVcvYixDQUFDLEdBQUMsQ0FBYixDQUFsRCxJQUFtRXVNLENBQUMsQ0FBQ3FjLE1BQUYsQ0FBUzdNLENBQVQsRUFBVy9iLENBQUMsR0FBQyxDQUFiLENBQW5FLElBQW9GLENBQUN1TSxDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFULEVBQVcvYixDQUFDLEdBQUMsQ0FBYixDQUFyRixJQUFzR3VNLENBQUMsQ0FBQ3FjLE1BQUYsQ0FBUzdNLENBQVQsRUFBVy9iLENBQUMsR0FBQyxDQUFiLENBQXRHLEtBQXdIbWMsQ0FBQyxJQUFFLEVBQTNIO0FBQXRCO0FBQXBCOztBQUF5SyxXQUFJLElBQUluYyxDQUFDLEdBQUMsQ0FBVixFQUFZeU0sQ0FBQyxHQUFDek0sQ0FBZCxFQUFnQkEsQ0FBQyxFQUFqQjtBQUFvQixhQUFJLElBQUkrYixDQUFDLEdBQUMsQ0FBVixFQUFZdFAsQ0FBQyxHQUFDLENBQUYsR0FBSXNQLENBQWhCLEVBQWtCQSxDQUFDLEVBQW5CO0FBQXNCeFAsV0FBQyxDQUFDcWMsTUFBRixDQUFTN00sQ0FBVCxFQUFXL2IsQ0FBWCxLQUFlLENBQUN1TSxDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFDLEdBQUMsQ0FBWCxFQUFhL2IsQ0FBYixDQUFoQixJQUFpQ3VNLENBQUMsQ0FBQ3FjLE1BQUYsQ0FBUzdNLENBQUMsR0FBQyxDQUFYLEVBQWEvYixDQUFiLENBQWpDLElBQWtEdU0sQ0FBQyxDQUFDcWMsTUFBRixDQUFTN00sQ0FBQyxHQUFDLENBQVgsRUFBYS9iLENBQWIsQ0FBbEQsSUFBbUV1TSxDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFDLEdBQUMsQ0FBWCxFQUFhL2IsQ0FBYixDQUFuRSxJQUFvRixDQUFDdU0sQ0FBQyxDQUFDcWMsTUFBRixDQUFTN00sQ0FBQyxHQUFDLENBQVgsRUFBYS9iLENBQWIsQ0FBckYsSUFBc0d1TSxDQUFDLENBQUNxYyxNQUFGLENBQVM3TSxDQUFDLEdBQUMsQ0FBWCxFQUFhL2IsQ0FBYixDQUF0RyxLQUF3SG1jLENBQUMsSUFBRSxFQUEzSDtBQUF0QjtBQUFwQjs7QUFBeUssV0FBSSxJQUFJdUwsQ0FBQyxHQUFDLENBQU4sRUFBUTFuQixDQUFDLEdBQUMsQ0FBZCxFQUFnQnlNLENBQUMsR0FBQ3pNLENBQWxCLEVBQW9CQSxDQUFDLEVBQXJCO0FBQXdCLGFBQUksSUFBSStiLENBQUMsR0FBQyxDQUFWLEVBQVl0UCxDQUFDLEdBQUNzUCxDQUFkLEVBQWdCQSxDQUFDLEVBQWpCO0FBQW9CeFAsV0FBQyxDQUFDcWMsTUFBRixDQUFTN00sQ0FBVCxFQUFXL2IsQ0FBWCxLQUFlMG5CLENBQUMsRUFBaEI7QUFBcEI7QUFBeEI7O0FBQStELFVBQUloWixDQUFDLEdBQUNsWSxJQUFJLENBQUN3MUIsR0FBTCxDQUFTLE1BQUl0RSxDQUFKLEdBQU1qYixDQUFOLEdBQVFBLENBQVIsR0FBVSxFQUFuQixJQUF1QixDQUE3QjtBQUErQixhQUFPMFAsQ0FBQyxJQUFFLEtBQUd6TixDQUFiO0FBQWU7QUFBeGhHLEdBQXZNLEVBQWl1RzBWLENBQUMsR0FBQztBQUFDNkgsUUFBSSxFQUFDLGNBQVMxZixDQUFULEVBQVc7QUFBQyxVQUFHLElBQUVBLENBQUwsRUFBTyxNQUFNLElBQUlpTSxLQUFKLENBQVUsVUFBUWpNLENBQVIsR0FBVSxHQUFwQixDQUFOO0FBQStCLGFBQU82WCxDQUFDLENBQUM4SCxTQUFGLENBQVkzZixDQUFaLENBQVA7QUFBc0IsS0FBOUU7QUFBK0V3ZixRQUFJLEVBQUMsY0FBU3hmLENBQVQsRUFBVztBQUFDLGFBQUssSUFBRUEsQ0FBUDtBQUFVQSxTQUFDLElBQUUsR0FBSDtBQUFWOztBQUFpQixhQUFLQSxDQUFDLElBQUUsR0FBUjtBQUFhQSxTQUFDLElBQUUsR0FBSDtBQUFiOztBQUFvQixhQUFPNlgsQ0FBQyxDQUFDK0gsU0FBRixDQUFZNWYsQ0FBWixDQUFQO0FBQXNCLEtBQTNKO0FBQTRKNGYsYUFBUyxFQUFDLElBQUl2SSxLQUFKLENBQVUsR0FBVixDQUF0SztBQUFxTHNJLGFBQVMsRUFBQyxJQUFJdEksS0FBSixDQUFVLEdBQVY7QUFBL0wsR0FBbnVHLEVBQWs3R3BLLENBQUMsR0FBQyxDQUF4N0csRUFBMDdHLElBQUVBLENBQTU3RyxFQUE4N0dBLENBQUMsRUFBLzdHO0FBQWs4RzRLLEtBQUMsQ0FBQytILFNBQUYsQ0FBWTNTLENBQVosSUFBZSxLQUFHQSxDQUFsQjtBQUFsOEc7O0FBQXM5RyxPQUFJLElBQUlBLENBQUMsR0FBQyxDQUFWLEVBQVksTUFBSUEsQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkI7QUFBc0I0SyxLQUFDLENBQUMrSCxTQUFGLENBQVkzUyxDQUFaLElBQWU0SyxDQUFDLENBQUMrSCxTQUFGLENBQVkzUyxDQUFDLEdBQUMsQ0FBZCxJQUFpQjRLLENBQUMsQ0FBQytILFNBQUYsQ0FBWTNTLENBQUMsR0FBQyxDQUFkLENBQWpCLEdBQWtDNEssQ0FBQyxDQUFDK0gsU0FBRixDQUFZM1MsQ0FBQyxHQUFDLENBQWQsQ0FBbEMsR0FBbUQ0SyxDQUFDLENBQUMrSCxTQUFGLENBQVkzUyxDQUFDLEdBQUMsQ0FBZCxDQUFsRTtBQUF0Qjs7QUFBeUcsT0FBSSxJQUFJQSxDQUFDLEdBQUMsQ0FBVixFQUFZLE1BQUlBLENBQWhCLEVBQWtCQSxDQUFDLEVBQW5CO0FBQXNCNEssS0FBQyxDQUFDOEgsU0FBRixDQUFZOUgsQ0FBQyxDQUFDK0gsU0FBRixDQUFZM1MsQ0FBWixDQUFaLElBQTRCQSxDQUE1QjtBQUF0Qjs7QUFBb0R4ZCxHQUFDLENBQUMwakIsU0FBRixHQUFZO0FBQUNtTCxPQUFHLEVBQUMsYUFBU3RlLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBSythLEdBQUwsQ0FBUy9hLENBQVQsQ0FBUDtBQUFtQixLQUFwQztBQUFxQ2ljLGFBQVMsRUFBQyxxQkFBVTtBQUFDLGFBQU8sS0FBS2xCLEdBQUwsQ0FBU3ZQLE1BQWhCO0FBQXVCLEtBQWpGO0FBQWtGK1QsWUFBUSxFQUFDLGtCQUFTdmYsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJRSxDQUFDLEdBQUMsSUFBSW1YLEtBQUosQ0FBVSxLQUFLNEUsU0FBTCxLQUFpQmpjLENBQUMsQ0FBQ2ljLFNBQUYsRUFBakIsR0FBK0IsQ0FBekMsQ0FBTixFQUFrRHJNLENBQUMsR0FBQyxDQUF4RCxFQUEwREEsQ0FBQyxHQUFDLEtBQUtxTSxTQUFMLEVBQTVELEVBQTZFck0sQ0FBQyxFQUE5RTtBQUFpRixhQUFJLElBQUlKLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3hQLENBQUMsQ0FBQ2ljLFNBQUYsRUFBZCxFQUE0QnpNLENBQUMsRUFBN0I7QUFBZ0N0UCxXQUFDLENBQUMwUCxDQUFDLEdBQUNKLENBQUgsQ0FBRCxJQUFRcUksQ0FBQyxDQUFDMkgsSUFBRixDQUFPM0gsQ0FBQyxDQUFDNkgsSUFBRixDQUFPLEtBQUtwQixHQUFMLENBQVMxTyxDQUFULENBQVAsSUFBb0JpSSxDQUFDLENBQUM2SCxJQUFGLENBQU8xZixDQUFDLENBQUNzZSxHQUFGLENBQU05TyxDQUFOLENBQVAsQ0FBM0IsQ0FBUjtBQUFoQztBQUFqRjs7QUFBc0ssYUFBTyxJQUFJL2YsQ0FBSixDQUFNeVEsQ0FBTixFQUFRLENBQVIsQ0FBUDtBQUFrQixLQUEvUjtBQUFnU2tlLE9BQUcsRUFBQyxhQUFTcGUsQ0FBVCxFQUFXO0FBQUMsVUFBRyxLQUFLaWMsU0FBTCxLQUFpQmpjLENBQUMsQ0FBQ2ljLFNBQUYsRUFBakIsR0FBK0IsQ0FBbEMsRUFBb0MsT0FBTyxJQUFQOztBQUFZLFdBQUksSUFBSS9iLENBQUMsR0FBQzJYLENBQUMsQ0FBQzZILElBQUYsQ0FBTyxLQUFLcEIsR0FBTCxDQUFTLENBQVQsQ0FBUCxJQUFvQnpHLENBQUMsQ0FBQzZILElBQUYsQ0FBTzFmLENBQUMsQ0FBQ3NlLEdBQUYsQ0FBTSxDQUFOLENBQVAsQ0FBMUIsRUFBMkMxTyxDQUFDLEdBQUMsSUFBSXlILEtBQUosQ0FBVSxLQUFLNEUsU0FBTCxFQUFWLENBQTdDLEVBQXlFek0sQ0FBQyxHQUFDLENBQS9FLEVBQWlGQSxDQUFDLEdBQUMsS0FBS3lNLFNBQUwsRUFBbkYsRUFBb0d6TSxDQUFDLEVBQXJHO0FBQXdHSSxTQUFDLENBQUNKLENBQUQsQ0FBRCxHQUFLLEtBQUs4TyxHQUFMLENBQVM5TyxDQUFULENBQUw7QUFBeEc7O0FBQXlILFdBQUksSUFBSUEsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDeFAsQ0FBQyxDQUFDaWMsU0FBRixFQUFkLEVBQTRCek0sQ0FBQyxFQUE3QjtBQUFnQ0ksU0FBQyxDQUFDSixDQUFELENBQUQsSUFBTXFJLENBQUMsQ0FBQzJILElBQUYsQ0FBTzNILENBQUMsQ0FBQzZILElBQUYsQ0FBTzFmLENBQUMsQ0FBQ3NlLEdBQUYsQ0FBTTlPLENBQU4sQ0FBUCxJQUFpQnRQLENBQXhCLENBQU47QUFBaEM7O0FBQWlFLGFBQU8sSUFBSXpRLENBQUosQ0FBTW1nQixDQUFOLEVBQVEsQ0FBUixFQUFXd08sR0FBWCxDQUFlcGUsQ0FBZixDQUFQO0FBQXlCO0FBQW5qQixHQUFaLEVBQWlrQmdiLENBQUMsQ0FBQzZFLGNBQUYsR0FBaUIsQ0FBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFELEVBQVcsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FBWCxFQUFxQixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFyQixFQUErQixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sQ0FBTixDQUEvQixFQUF3QyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF4QyxFQUFrRCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFsRCxFQUE0RCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE1RCxFQUFzRSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF0RSxFQUFnRixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFoRixFQUEwRixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUExRixFQUFvRyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFwRyxFQUE4RyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE5RyxFQUF3SCxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sRUFBUCxDQUF4SCxFQUFtSSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFuSSxFQUE2SSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE3SSxFQUF1SixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sQ0FBTixDQUF2SixFQUFnSyxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sR0FBUCxDQUFoSyxFQUE0SyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE1SyxFQUFzTCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF0TCxFQUF3TSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF4TSxFQUEwTixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUExTixFQUFvTyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFwTyxFQUE4TyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE5TyxFQUF3UCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF4UCxFQUFrUSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFsUSxFQUE0USxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE1USxFQUFzUixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF0UixFQUF3UyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF4UyxFQUEwVCxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sRUFBUCxDQUExVCxFQUFxVSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUFyVSxFQUF1VixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF2VixFQUF5VyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF6VyxFQUEyWCxDQUFDLENBQUQsRUFB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LE1BQU0sQ0FBQ3JGLFNBQVAsQ0FBaUJxUCxTQUFqQixHQUEyQixZQUFVO0FBQUMsa0JBQVksT0FBTyxLQUFLUyxTQUFMLENBQWVULFNBQWxDLEtBQThDLENBQUMsS0FBS2IsUUFBTixJQUFnQixLQUFLQSxRQUFMLElBQWUsQ0FBN0UsS0FBaUYsS0FBS3NCLFNBQUwsQ0FBZVQsU0FBZixFQUFqRjtBQUE0RyxHQUF0eEIsRUFBdXhCaEssTUFBTSxDQUFDckYsU0FBUCxDQUFpQndCLEtBQWpCLEdBQXVCLFlBQVU7QUFBQyxTQUFLc08sU0FBTCxDQUFldE8sS0FBZjtBQUF1QixHQUFoMUIsRUFBaTFCNkQsTUFBTSxDQUFDMkssWUFBUCxHQUFvQjNULENBQXIyQjtBQUF1MkIsQ0FBeDhtQixFQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVgsd0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB1dGlsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gIHJldHVybiB7XG4gICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMpXG4gICAgfVxuICB9LCBkdXJhdGlvbilcblxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFV0aWwgPSB7XG5cbiAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKSAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcbiAgICByZXR1cm4gcHJlZml4XG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgY29uc3QgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJ1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgIGxldCB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpXG5cbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG4gIH0sXG5cbiAgcmVmbG93KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSxcblxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIC8vIFRPRE86IFJlbW92ZSBpbiB2NVxuICBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcbiAgfSxcblxuICB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xuICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlICAgICAgICAgPSBjb25maWdbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSlcbiAgICAgICAgICA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmaW5kU2hhZG93Um9vdChlbGVtZW50KSB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG4gIH0sXG5cbiAgalF1ZXJ5RGV0ZWN0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJylcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpXG4gICAgY29uc3QgbWluTWFqb3IgPSAxXG4gICAgY29uc3QgbHRNYWpvciA9IDJcbiAgICBjb25zdCBtaW5NaW5vciA9IDlcbiAgICBjb25zdCBtaW5QYXRjaCA9IDFcbiAgICBjb25zdCBtYXhNYWpvciA9IDRcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKVxuICAgIH1cbiAgfVxufVxuXG5VdGlsLmpRdWVyeURldGVjdGlvbigpXG5zZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdhbGVydCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMT1NFICAgICAgICAgIDogYGNsb3NlJHtFVkVOVF9LRVl9YCxcbiAgQ0xPU0VEICAgICAgICAgOiBgY2xvc2VkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQUxFUlQgOiAnYWxlcnQnLFxuICBGQURFICA6ICdmYWRlJyxcbiAgU0hPVyAgOiAnc2hvdydcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjbG9zZShlbGVtZW50KSB7XG4gICAgbGV0IHJvb3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIGxldCBwYXJlbnQgICAgID0gZmFsc2VcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KGAuJHtDbGFzc05hbWUuQUxFUlR9YClbMF1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpXG4gICAgcmV0dXJuIGNsb3NlRXZlbnRcbiAgfVxuXG4gIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICQoZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpXG4gICAgICAuZGV0YWNoKClcbiAgICAgIC50cmlnZ2VyKEV2ZW50LkNMT1NFRClcbiAgICAgIC5yZW1vdmUoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9oYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oXG4gIEV2ZW50LkNMSUNLX0RBVEFfQVBJLFxuICBTZWxlY3Rvci5ESVNNSVNTLFxuICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbilcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdidXR0b24nXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBBQ1RJVkUgOiAnYWN0aXZlJyxcbiAgQlVUVE9OIDogJ2J0bicsXG4gIEZPQ1VTICA6ICdmb2N1cydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfVE9HR0xFX0NBUlJPVCAgIDogJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLFxuICBEQVRBX1RPR0dMRVMgICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyxcbiAgREFUQV9UT0dHTEUgICAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uXCJdJyxcbiAgREFUQV9UT0dHTEVTX0JVVFRPTlMgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSAuYnRuJyxcbiAgSU5QVVQgICAgICAgICAgICAgICAgOiAnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKScsXG4gIEFDVElWRSAgICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBCVVRUT04gICAgICAgICAgICAgICA6ICcuYnRuJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xJQ0tfREFUQV9BUEkgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEZPQ1VTX0JMVVJfREFUQV9BUEkgOiBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBibHVyJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgTE9BRF9EQVRBX0FQSSAgICAgICA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWVcbiAgICBsZXQgYWRkQXJpYVByZXNzZWQgPSB0cnVlXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBTZWxlY3Rvci5EQVRBX1RPR0dMRVNcbiAgICApWzBdXG5cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklOUFVUKVxuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRSlcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0xBQkVMJyAmJiBpbnB1dC5jaGVja2VkID09PSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgaXQncyBub3QgYSByYWRpbyBidXR0b24gb3IgY2hlY2tib3ggZG9uJ3QgYWRkIGEgcG9pbnRsZXNzL2ludmFsaWQgY2hlY2tlZCBwcm9wZXJ0eSB0byB0aGUgaW5wdXRcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICBhZGRBcmlhUHJlc3NlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5fZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICBpZiAoYWRkQXJpYVByZXNzZWQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsXG4gICAgICAgICAgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXRcblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZS5CVVRUT04pKSB7XG4gICAgICBidXR0b24gPSAkKGJ1dHRvbikuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pWzBdXG4gICAgfVxuXG4gICAgaWYgKCFidXR0b24gfHwgYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlucHV0QnRuID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG5cbiAgICAgIGlmIChpbnB1dEJ0biAmJiAoaW5wdXRCdG4uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGlucHV0QnRuLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyB3b3JrIGFyb3VuZCBGaXJlZm94IGJ1ZyAjMTU0MDk5NVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxuICAgIH1cbiAgfSlcbiAgLm9uKEV2ZW50LkZPQ1VTX0JMVVJfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IuQlVUVE9OKVswXVxuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuRk9DVVMsIC9eZm9jdXMoaW4pPyQvLnRlc3QoZXZlbnQudHlwZSkpXG4gIH0pXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIC8vIGVuc3VyZSBjb3JyZWN0IGFjdGl2ZSBjbGFzcyBpcyBzZXQgdG8gbWF0Y2ggdGhlIGNvbnRyb2xzJyBhY3R1YWwgdmFsdWVzL3N0YXRlc1xuXG4gIC8vIGZpbmQgYWxsIGNoZWNrYm94ZXMvcmVhZGlvIGJ1dHRvbnMgaW5zaWRlIGRhdGEtdG9nZ2xlIGdyb3Vwc1xuICBsZXQgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRVNfQlVUVE9OUykpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG4gICAgaWYgKGlucHV0LmNoZWNrZWQgfHwgaW5wdXQuaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhbGwgYnV0dG9uIHRvZ2dsZXNcbiAgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgID0gJ2Nhcm91c2VsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IEFSUk9XX0xFRlRfS0VZQ09ERSAgICAgPSAzNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuY29uc3QgQVJST1dfUklHSFRfS0VZQ09ERSAgICA9IDM5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCAgICAgICAgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbCA6IDUwMDAsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgc2xpZGUgICAgOiBmYWxzZSxcbiAgcGF1c2UgICAgOiAnaG92ZXInLFxuICB3cmFwICAgICA6IHRydWUsXG4gIHRvdWNoICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWwgOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBzbGlkZSAgICA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2UgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXAgICAgIDogJ2Jvb2xlYW4nLFxuICB0b3VjaCAgICA6ICdib29sZWFuJ1xufVxuXG5jb25zdCBEaXJlY3Rpb24gPSB7XG4gIE5FWFQgICAgIDogJ25leHQnLFxuICBQUkVWICAgICA6ICdwcmV2JyxcbiAgTEVGVCAgICAgOiAnbGVmdCcsXG4gIFJJR0hUICAgIDogJ3JpZ2h0J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgU0xJREUgICAgICAgICAgOiBgc2xpZGUke0VWRU5UX0tFWX1gLFxuICBTTElEICAgICAgICAgICA6IGBzbGlkJHtFVkVOVF9LRVl9YCxcbiAgS0VZRE9XTiAgICAgICAgOiBga2V5ZG93biR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgICAgIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFICAgICA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hTVEFSVCAgICAgOiBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWAsXG4gIFRPVUNITU9WRSAgICAgIDogYHRvdWNobW92ZSR7RVZFTlRfS0VZfWAsXG4gIFRPVUNIRU5EICAgICAgIDogYHRvdWNoZW5kJHtFVkVOVF9LRVl9YCxcbiAgUE9JTlRFUkRPV04gICAgOiBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gLFxuICBQT0lOVEVSVVAgICAgICA6IGBwb2ludGVydXAke0VWRU5UX0tFWX1gLFxuICBEUkFHX1NUQVJUICAgICA6IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJICA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQ0FST1VTRUwgICAgICA6ICdjYXJvdXNlbCcsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJyxcbiAgU0xJREUgICAgICAgICA6ICdzbGlkZScsXG4gIFJJR0hUICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1yaWdodCcsXG4gIExFRlQgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1sZWZ0JyxcbiAgTkVYVCAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLW5leHQnLFxuICBQUkVWICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tcHJldicsXG4gIElURU0gICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbScsXG4gIFBPSU5URVJfRVZFTlQgOiAncG9pbnRlci1ldmVudCdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIEFDVElWRSAgICAgIDogJy5hY3RpdmUnLFxuICBBQ1RJVkVfSVRFTSA6ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nLFxuICBJVEVNICAgICAgICA6ICcuY2Fyb3VzZWwtaXRlbScsXG4gIElURU1fSU1HICAgIDogJy5jYXJvdXNlbC1pdGVtIGltZycsXG4gIE5FWFRfUFJFViAgIDogJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnLFxuICBJTkRJQ0FUT1JTICA6ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gIERBVEFfU0xJREUgIDogJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJyxcbiAgREFUQV9SSURFICAgOiAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJ1xufVxuXG5jb25zdCBQb2ludGVyVHlwZSA9IHtcbiAgVE9VQ0ggOiAndG91Y2gnLFxuICBQRU4gICA6ICdwZW4nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pdGVtcyAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCAgID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggICAgPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCAgICA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTkRJQ0FUT1JTKVxuICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkICAgID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgICAgICA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5ORVhUKVxuICAgIH1cbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmXG4gICAgICAoJCh0aGlzLl9lbGVtZW50KS5pcygnOnZpc2libGUnKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmNzcygndmlzaWJpbGl0eScpICE9PSAnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLlBSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk5FWFRfUFJFVikpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG5cbiAgY3ljbGUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4XG4gICAgICA/IERpcmVjdGlvbi5ORVhUXG4gICAgICA6IERpcmVjdGlvbi5QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgICAgID0gbnVsbFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICAvLyBzd2lwZSBsZWZ0XG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHRoaXMucHJldigpXG4gICAgfVxuXG4gICAgLy8gc3dpcGUgcmlnaHRcbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub24oRXZlbnQuS0VZRE9XTiwgKGV2ZW50KSA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFdmVudC5NT1VTRUVOVEVSLCAoZXZlbnQpID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgICAub24oRXZlbnQuTU9VU0VMRUFWRSwgKGV2ZW50KSA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAoIXRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBlbnN1cmUgc3dpcGluZyB3aXRoIG9uZSB0b3VjaCBhbmQgbm90IHBpbmNoaW5nXG4gICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KChldmVudCkgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSVRFTV9JTUcpKS5vbihFdmVudC5EUkFHX1NUQVJULCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuUE9JTlRFUkRPV04sIChldmVudCkgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5QT0lOVEVSVVAsIChldmVudCkgPT4gZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNIU1RBUlQsIChldmVudCkgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5UT1VDSE1PVkUsIChldmVudCkgPT4gbW92ZShldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNIRU5ELCAoZXZlbnQpID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlDT0RFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMucHJldigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgPyBbXS5zbGljZS5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklURU0pKVxuICAgICAgOiBbXVxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFRcbiAgICBjb25zdCBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggICAgID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCAgID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgICA9IGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleFxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhICAgICA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYgPyAtMSA6IDFcbiAgICBjb25zdCBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGhcblxuICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xXG4gICAgICA/IHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDogdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkVfSVRFTSkpXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZGVFdmVudClcblxuICAgIHJldHVybiBzbGlkZUV2ZW50XG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbmRpY2F0b3JzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkFDVElWRSkpXG4gICAgICAkKGluZGljYXRvcnMpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICBjb25zdCBuZXh0SW5kaWNhdG9yID0gdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQuY2hpbGRyZW5bXG4gICAgICAgIHRoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KVxuICAgICAgXVxuXG4gICAgICBpZiAobmV4dEluZGljYXRvcikge1xuICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbiwgZWxlbWVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgICA9IGVsZW1lbnQgfHwgYWN0aXZlRWxlbWVudCAmJlxuICAgICAgdGhpcy5fZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBsZXQgZGlyZWN0aW9uYWxDbGFzc05hbWVcbiAgICBsZXQgb3JkZXJDbGFzc05hbWVcbiAgICBsZXQgZXZlbnREaXJlY3Rpb25OYW1lXG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDbGFzc05hbWUuTEVGVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuTkVYVFxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLkxFRlRcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDbGFzc05hbWUuUklHSFRcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLlBSRVZcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERpcmVjdGlvbi5SSUdIVFxuICAgIH1cblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiAkKG5leHRFbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKVxuICAgIGlmIChzbGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCBzbGlkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSUQsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgIH0pXG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0xJREUpKSB7XG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhvcmRlckNsYXNzTmFtZSlcblxuICAgICAgVXRpbC5yZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgY29uc3QgbmV4dEVsZW1lbnRJbnRlcnZhbCA9IHBhcnNlSW50KG5leHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMClcbiAgICAgIGlmIChuZXh0RWxlbWVudEludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBuZXh0RWxlbWVudEludGVydmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgICAgJChuZXh0RWxlbWVudClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhgJHtkaXJlY3Rpb25hbENsYXNzTmFtZX0gJHtvcmRlckNsYXNzTmFtZX1gKVxuICAgICAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5BQ1RJVkV9ICR7b3JkZXJDbGFzc05hbWV9ICR7ZGlyZWN0aW9uYWxDbGFzc05hbWV9YClcblxuICAgICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpLCAwKVxuICAgICAgICB9KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudClcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgbGV0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBfY29uZmlnID0ge1xuICAgICAgICAgIC4uLl9jb25maWcsXG4gICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVthY3Rpb25dKClcbiAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnRlcnZhbCAmJiBfY29uZmlnLnJpZGUpIHtcbiAgICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICAgIGRhdGEuY3ljbGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2RhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gJChzZWxlY3RvcilbMF1cblxuICAgIGlmICghdGFyZ2V0IHx8ICEkKHRhcmdldCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICB9XG5cbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1NMSURFLCBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfUklERSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCAkY2Fyb3VzZWwgPSAkKGNhcm91c2Vsc1tpXSlcbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcm91c2VsXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdjb2xsYXBzZSdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZSA6IHRydWUsXG4gIHBhcmVudCA6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gIHBhcmVudCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgU0hPVyAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSElERSAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIFNIT1cgICAgICAgOiAnc2hvdycsXG4gIENPTExBUFNFICAgOiAnY29sbGFwc2UnLFxuICBDT0xMQVBTSU5HIDogJ2NvbGxhcHNpbmcnLFxuICBDT0xMQVBTRUQgIDogJ2NvbGxhcHNlZCdcbn1cblxuY29uc3QgRGltZW5zaW9uID0ge1xuICBXSURUSCAgOiAnd2lkdGgnLFxuICBIRUlHSFQgOiAnaGVpZ2h0J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgQUNUSVZFUyAgICAgOiAnLnNob3csIC5jb2xsYXBzaW5nJyxcbiAgREFUQV9UT0dHTEUgOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJHtlbGVtZW50LmlkfVwiXSxgICtcbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMke2VsZW1lbnQuaWR9XCJdYFxuICAgICkpXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFKSlcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZWxlbSA9IHRvZ2dsZUxpc3RbaV1cbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgICAgLmZpbHRlcigoZm91bmRFbGVtKSA9PiBmb3VuZEVsZW0gPT09IGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQUNUSVZFUykpXG4gICAgICAgIC5maWx0ZXIoKGVsZW0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgYWN0aXZlc0RhdGEgPSAkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvcikuZGF0YShEQVRBX0tFWSlcbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLCAnaGlkZScpXG4gICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICQoYWN0aXZlcykuZGF0YShEQVRBX0tFWSwgbnVsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGhcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRyaWdnZXIpXG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgJGVsZW0gPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKVxuICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gRGltZW5zaW9uLldJRFRIIDogRGltZW5zaW9uLkhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRcblxuICAgICAgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID1cbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIiR7dGhpcy5fY29uZmlnLnBhcmVudH1cIl1gXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICQoY2hpbGRyZW4pLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLFxuICAgICAgICBbZWxlbWVudF1cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBjb25zdCBpc09wZW4gPSAkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbiAgfVxuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJHRoaXMuZGF0YSgpLFxuICAgICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgX2NvbmZpZylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvcnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuXG4gICQoc2VsZWN0b3JzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJCh0aGlzKVxuICAgIGNvbnN0IGRhdGEgICAgPSAkdGFyZ2V0LmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgY29uZmlnICA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKVxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKiFcbiAqIEBmaWxlT3ZlcnZpZXcgS2lja2FzcyBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgcGxhY2UgcG9wcGVycyBuZWFyIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50cy5cbiAqIEB2ZXJzaW9uIDEuMTYuMFxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuXG52YXIgdGltZW91dER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbG9uZ2VyVGltZW91dEJyb3dzZXJzID0gWydFZGdlJywgJ1RyaWRlbnQnLCAnRmlyZWZveCddO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxvbmdlclRpbWVvdXRCcm93c2Vycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufSgpO1xuXG5mdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgZm4oKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gIHZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG52YXIgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlO1xuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xudmFyIGRlYm91bmNlID0gc3VwcG9ydHNNaWNyb1Rhc2tzID8gbWljcm90YXNrRGVib3VuY2UgOiB0YXNrRGVib3VuY2U7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgdmFyIGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICB2YXIgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcbiAgfVxuXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuXG4gIHZhciBfZ2V0U3R5bGVDb21wdXRlZFByb3AgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dZO1xuXG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugbm9kZSBvZiB0aGUgcmVmZXJlbmNlIG9iamVjdCwgb3IgdGhlIHJlZmVyZW5jZSBvYmplY3QgaXRzZWxmLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpIHtcbiAgcmV0dXJuIHJlZmVyZW5jZSAmJiByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA/IHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlIDogcmVmZXJlbmNlO1xufVxuXG52YXIgaXNJRTExID0gaXNCcm93c2VyICYmICEhKHdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIHZhciBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIHZhciBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gIGlmIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiYgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIHx8IHN0YXJ0LmNvbnRhaW5zKGVuZCkpIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICB2YXIgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50KSB7XG4gIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cblxuLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICB2YXIgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQSArICdXaWR0aCddLCAxMCkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10sIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChib2R5WydvZmZzZXQnICsgYXhpc10sIGJvZHlbJ3Njcm9sbCcgKyBheGlzXSwgaHRtbFsnY2xpZW50JyArIGF4aXNdLCBodG1sWydvZmZzZXQnICsgYXhpc10sIGh0bWxbJ3Njcm9sbCcgKyBheGlzXSwgaXNJRSgxMCkgPyBwYXJzZUludChodG1sWydvZmZzZXQnICsgYXhpc10pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnKV0pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0JyldKSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudCkge1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpXG4gIH07XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IG9mZnNldHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IENsaWVudFJlY3QgbGlrZSBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb2Zmc2V0cywge1xuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodFxuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICB9O1xuXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcbiAgdmFyIHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICB2YXIgd2lkdGggPSBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuaGVpZ2h0O1xuXG4gIHZhciBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgdmFyIHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIGlzSUUxMCA9IGlzSUUoMTApO1xuICB2YXIgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIHZhciBjaGlsZHJlblJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xuICB2YXIgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KHBhcmVudCk7XG4gIHZhciBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gIHZhciBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYgKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCwgMTApO1xuICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCwgMTApO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb24gPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KSA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudCkge1xuICB2YXIgZXhjbHVkZVNjcm9sbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIHZhciB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICB2YXIgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xuICB2YXIgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIHZhciBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5mdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQocGFyZW50Tm9kZSk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICB2YXIgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIHdoaWxlIChlbCAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWwsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnKSB7XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudCAtIEVsZW1lbnQgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kYXJpZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZml4ZWRQb3NpdGlvbiAtIElzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuXG4gIHZhciBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIHZhciBib3VuZGFyaWVzTm9kZSA9IHZvaWQgMDtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHJlZmVyZW5jZSkpO1xuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGJvdW5kYXJpZXNOb2RlLCBvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgdmFyIF9nZXRXaW5kb3dTaXplcyA9IGdldFdpbmRvd1NpemVzKHBvcHBlci5vd25lckRvY3VtZW50KSxcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0V2luZG93U2l6ZXMuaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoID0gX2dldFdpbmRvd1NpemVzLndpZHRoO1xuXG4gICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBoZWlnaHQgKyBvZmZzZXRzLnRvcDtcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gd2lkdGggKyBvZmZzZXRzLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHBhZGRpbmdzXG4gIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDA7XG4gIHZhciBpc1BhZGRpbmdOdW1iZXIgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcic7XG4gIGJvdW5kYXJpZXMubGVmdCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5sZWZ0IHx8IDA7XG4gIGJvdW5kYXJpZXMudG9wICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnRvcCB8fCAwO1xuICBib3VuZGFyaWVzLnJpZ2h0IC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnJpZ2h0IHx8IDA7XG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmJvdHRvbSB8fCAwO1xuXG4gIHJldHVybiBib3VuZGFyaWVzO1xufVxuXG5mdW5jdGlvbiBnZXRBcmVhKF9yZWYpIHtcbiAgdmFyIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIHJlZlJlY3QsIHBvcHBlciwgcmVmZXJlbmNlLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgcGFkZGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogMDtcblxuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgdmFyIHJlY3RzID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3BcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH1cbiAgfTtcblxuICB2YXIgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCByZWN0c1trZXldLCB7XG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pXG4gICAgfSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5hcmVhIC0gYS5hcmVhO1xuICB9KTtcblxuICB2YXIgZmlsdGVyZWRBcmVhcyA9IHNvcnRlZEFyZWFzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0O1xuICAgIHJldHVybiB3aWR0aCA+PSBwb3BwZXIuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHBvcHBlci5jbGllbnRIZWlnaHQ7XG4gIH0pO1xuXG4gIHZhciBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5IDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgdmFyIGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICB2YXIgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgdmFyIHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0XG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICB2YXIgaXNIb3JpeiA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgdmFyIHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gKyByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLSBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuXG4vKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBwcm9wLCB2YWx1ZSkge1xuICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICByZXR1cm4gY3VyW3Byb3BdID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIHZhciBtYXRjaCA9IGZpbmQoYXJyLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5mdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIHZhciBtb2RpZmllcnNUb1J1biA9IGVuZHMgPT09IHVuZGVmaW5lZCA/IG1vZGlmaWVycyA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgdmFyIGZuID0gbW9kaWZpZXJbJ2Z1bmN0aW9uJ10gfHwgbW9kaWZpZXIuZm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fVxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0aGlzLnN0YXRlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudCh0aGlzLm9wdGlvbnMucGxhY2VtZW50LCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgZGF0YS5vcmlnaW5hbFBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKHRoaXMucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIGVuYWJsZWQgPSBfcmVmLmVuYWJsZWQ7XG4gICAgcmV0dXJuIGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgdmFyIHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIHRvQ2hlY2sgPSBwcmVmaXggPyAnJyArIHByZWZpeCArIHVwcGVyUHJvcCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS53aWxsQ2hhbmdlID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbn1cblxuZnVuY3Rpb24gYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbFBhcmVudCwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKSB7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIG9wdGlvbnMsIHN0YXRlLCB1cGRhdGVCb3VuZCkge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHZhciBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxFbGVtZW50LCAnc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQsIHN0YXRlLnNjcm9sbFBhcmVudHMpO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsRWxlbWVudDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgYWRkIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCBzdGFydCByZWNhbGN1bGF0aW5nXG4gKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMsIHRoaXMuc3RhdGUsIHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIHN0YXRlKSB7XG4gIC8vIFJlbW92ZSByZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcblxuICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIGBvblVwZGF0ZWAgY2FsbGJhY2sgYW55bW9yZSxcbiAqIHVubGVzcyB5b3UgY2FsbCBgdXBkYXRlYCBtZXRob2QgbWFudWFsbHkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSByZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5zdGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0geyp9IGlucHV0IHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gbiAhPT0gJycgJiYgIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgc3R5bGUgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgdmFyIHVuaXQgPSAnJztcbiAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICBpZiAoWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT0gLTEgJiYgaXNOdW1lcmljKHN0eWxlc1twcm9wXSkpIHtcbiAgICAgIHVuaXQgPSAncHgnO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdICsgdW5pdDtcbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIGF0dHJpYnV0ZXMgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1twcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLnN0eWxlcyAtIExpc3Qgb2Ygc3R5bGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzYW1lIGRhdGEgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoZGF0YSkge1xuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5zdHlsZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyBpbiB0aGlzIHdheSB3ZSBjYW4gbWFrZSB0aGUgM3JkIHBhcnR5IG1vZGlmaWVycyBhZGQgY3VzdG9tIHN0eWxlcyB0byBpdFxuICAvLyBCZSBhd2FyZSwgbW9kaWZpZXJzIGNvdWxkIG92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHByZXZpb3VzXG4gIC8vIGxpbmVzIG9mIHRoaXMgbW9kaWZpZXIhXG4gIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5zdHlsZXMpO1xuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyB0aGV5IHdpbGwgYmUgc2V0IGFzIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBkZWZpbmVkIGFuZCBhcnJvd1N0eWxlcyBoYXMgc29tZSBwcm9wZXJ0aWVzXG4gIGlmIChkYXRhLmFycm93RWxlbWVudCAmJiBPYmplY3Qua2V5cyhkYXRhLmFycm93U3R5bGVzKS5sZW5ndGgpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5hcnJvd0VsZW1lbnQsIGRhdGEuYXJyb3dTdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogU2V0IHRoZSB4LXBsYWNlbWVudCBhdHRyaWJ1dGUgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBiZWNhdXNlIGl0IGNvdWxkIGJlIHVzZWRcbiAqIHRvIGFkZCBtYXJnaW5zIHRvIHRoZSBwb3BwZXIgbWFyZ2lucyBuZWVkcyB0byBiZSBjYWxjdWxhdGVkIHRvIGdldCB0aGVcbiAqIGNvcnJlY3QgcG9wcGVyIG9mZnNldHMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLm1vZGlmaWVyc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHBvcHBlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQb3BwZXIuanMgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlT25Mb2FkKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zLCBtb2RpZmllck9wdGlvbnMsIHN0YXRlKSB7XG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICB2YXIgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICB2YXIgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQob3B0aW9ucy5wbGFjZW1lbnQsIHJlZmVyZW5jZU9mZnNldHMsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gIC8vIHdpdGhvdXQgdGhlIHBvc2l0aW9uIGFwcGxpZWQgd2UgY2FuJ3QgZ3VhcmFudGVlIGNvcnJlY3QgY29tcHV0YXRpb25zXG4gIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtCb29sZWFufSBzaG91bGRSb3VuZCAtIElmIHRoZSBvZmZzZXRzIHNob3VsZCBiZSByb3VuZGVkIGF0IGFsbFxuICogQHJldHVybnMge09iamVjdH0gVGhlIHBvcHBlcidzIHBvc2l0aW9uIG9mZnNldHMgcm91bmRlZFxuICpcbiAqIFRoZSB0YWxlIG9mIHBpeGVsLXBlcmZlY3QgcG9zaXRpb25pbmcuIEl0J3Mgc3RpbGwgbm90IDEwMCUgcGVyZmVjdCwgYnV0IGFzXG4gKiBnb29kIGFzIGl0IGNhbiBiZSB3aXRoaW4gcmVhc29uLlxuICogRGlzY3Vzc2lvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9wdWxsLzcxNVxuICpcbiAqIExvdyBEUEkgc2NyZWVucyBjYXVzZSBhIHBvcHBlciB0byBiZSBibHVycnkgaWYgbm90IHVzaW5nIGZ1bGwgcGl4ZWxzIChTYWZhcmlcbiAqIGFzIHdlbGwgb24gSGlnaCBEUEkgc2NyZWVucykuXG4gKlxuICogRmlyZWZveCBwcmVmZXJzIG5vIHJvdW5kaW5nIGZvciBwb3NpdGlvbmluZyBhbmQgZG9lcyBub3QgaGF2ZSBibHVycmluZXNzIG9uXG4gKiBoaWdoIERQSSBzY3JlZW5zLlxuICpcbiAqIE9ubHkgaG9yaXpvbnRhbCBwbGFjZW1lbnQgYW5kIGxlZnQvcmlnaHQgdmFsdWVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgc2hvdWxkUm91bmQpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kLFxuICAgICAgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4gIHZhciBub1JvdW5kID0gZnVuY3Rpb24gbm9Sb3VuZCh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG5cbiAgdmFyIHJlZmVyZW5jZVdpZHRoID0gcm91bmQocmVmZXJlbmNlLndpZHRoKTtcbiAgdmFyIHBvcHBlcldpZHRoID0gcm91bmQocG9wcGVyLndpZHRoKTtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZGF0YS5wbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIGlzVmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuaW5kZXhPZignLScpICE9PSAtMTtcbiAgdmFyIHNhbWVXaWR0aFBhcml0eSA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gcG9wcGVyV2lkdGggJSAyO1xuICB2YXIgYm90aE9kZFdpZHRoID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSAxICYmIHBvcHBlcldpZHRoICUgMiA9PT0gMTtcblxuICB2YXIgaG9yaXpvbnRhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiBpc1ZlcnRpY2FsIHx8IGlzVmFyaWF0aW9uIHx8IHNhbWVXaWR0aFBhcml0eSA/IHJvdW5kIDogZmxvb3I7XG4gIHZhciB2ZXJ0aWNhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiByb3VuZDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IGhvcml6b250YWxUb0ludGVnZXIoYm90aE9kZFdpZHRoICYmICFpc1ZhcmlhdGlvbiAmJiBzaG91bGRSb3VuZCA/IHBvcHBlci5sZWZ0IC0gMSA6IHBvcHBlci5sZWZ0KSxcbiAgICB0b3A6IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLmJvdHRvbSksXG4gICAgcmlnaHQ6IGhvcml6b250YWxUb0ludGVnZXIocG9wcGVyLnJpZ2h0KVxuICB9O1xufVxuXG52YXIgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIHggPSBvcHRpb25zLngsXG4gICAgICB5ID0gb3B0aW9ucy55O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcblxuICB2YXIgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJztcbiAgfSkuZ3B1QWNjZWxlcmF0aW9uO1xuICBpZiAobGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJyk7XG4gIH1cbiAgdmFyIGdwdUFjY2VsZXJhdGlvbiA9IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkID8gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uIDogb3B0aW9ucy5ncHVBY2NlbGVyYXRpb247XG5cbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIHZhciBvZmZzZXRQYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG5cbiAgLy8gU3R5bGVzXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvblxuICB9O1xuXG4gIHZhciBvZmZzZXRzID0gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAyIHx8ICFpc0ZpcmVmb3gpO1xuXG4gIHZhciBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgdmFyIHNpZGVCID0geSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIHZhciBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gIC8vIElmIHRoZSBjb250ZW50IG9mIHRoZSBwb3BwZXIgZ3Jvd3Mgb25jZSBpdCdzIGJlZW4gcG9zaXRpb25lZCwgaXRcbiAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRvIGF2b2lkIHRoaXMgcHJvYmxlbSwgd2UgcHJvdmlkZSB0d28gb3B0aW9ucyAoeCBhbmQgeSksIHdoaWNoIGFsbG93XG4gIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gIC8vIGB4YCB0byBgdG9wYCB0byBtYWtlIHRoZSBwb3BwZXIgZ3JvdyB0b3dhcmRzIGl0cyB0b3AgaW5zdGVhZCBvZlxuICAvLyBpdHMgYm90dG9tLlxuICB2YXIgbGVmdCA9IHZvaWQgMCxcbiAgICAgIHRvcCA9IHZvaWQgMDtcbiAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAvLyBhbmQgbm90IHRoZSBib3R0b20gb2YgdGhlIGh0bWwgZWxlbWVudFxuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICB9XG4gIGlmIChzaWRlQiA9PT0gJ3JpZ2h0Jykge1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCwgMCknO1xuICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgIHN0eWxlc1tzaWRlQl0gPSAwO1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3Rod2VyaXNlLCB3ZSB1c2UgdGhlIHN0YW5kYXJkIGB0b3BgLCBgbGVmdGAsIGBib3R0b21gIGFuZCBgcmlnaHRgIHByb3BlcnRpZXNcbiAgICB2YXIgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIHZhciBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBzaWRlQSArICcsICcgKyBzaWRlQjtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnRcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0gX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIGRhdGEuYXR0cmlidXRlcyk7XG4gIGRhdGEuc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgZGF0YS5zdHlsZXMpO1xuICBkYXRhLmFycm93U3R5bGVzID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5hcnJvdywgZGF0YS5hcnJvd1N0eWxlcyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChtb2RpZmllcnMsIHJlcXVlc3RpbmdOYW1lLCByZXF1ZXN0ZWROYW1lKSB7XG4gIHZhciByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUgPT09IHJlcXVlc3RpbmdOYW1lO1xuICB9KTtcblxuICB2YXIgaXNSZXF1aXJlZCA9ICEhcmVxdWVzdGluZyAmJiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJiBtb2RpZmllci5lbmFibGVkICYmIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlcjtcbiAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgdmFyIF9yZXF1ZXN0aW5nID0gJ2AnICsgcmVxdWVzdGluZ05hbWUgKyAnYCc7XG4gICAgdmFyIHJlcXVlc3RlZCA9ICdgJyArIHJlcXVlc3RlZE5hbWUgKyAnYCc7XG4gICAgY29uc29sZS53YXJuKHJlcXVlc3RlZCArICcgbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJyArIF9yZXF1ZXN0aW5nICsgJyBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICcgKyBfcmVxdWVzdGluZyArICchJyk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzJGFycm93O1xuXG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJyk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgdmFyIHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICB2YXIgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1bmN0aW9uXG4gIC8vXG5cbiAgLy8gdG9wL2xlZnQgc2lkZVxuICBpZiAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgcG9wcGVyW3NpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPSBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPSByZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplIC0gcG9wcGVyW29wU2lkZV07XG4gIH1cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICB2YXIgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIHZhciBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgcG9wcGVyTWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydtYXJnaW4nICsgc2lkZUNhcGl0YWxpemVkXSwgMTApO1xuICB2YXIgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydib3JkZXInICsgc2lkZUNhcGl0YWxpemVkICsgJ1dpZHRoJ10sIDEwKTtcbiAgdmFyIHNpZGVWYWx1ZSA9IGNlbnRlciAtIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLSBwb3BwZXJNYXJnaW5TaWRlIC0gcG9wcGVyQm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0gKF9kYXRhJG9mZnNldHMkYXJyb3cgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgc2lkZSwgTWF0aC5yb3VuZChzaWRlVmFsdWUpKSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgYWx0U2lkZSwgJycpLCBfZGF0YSRvZmZzZXRzJGFycm93KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCB2YXJpYXRpb25cbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50IHZhcmlhdGlvblxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pIHtcbiAgaWYgKHZhcmlhdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gJ3N0YXJ0JztcbiAgfSBlbHNlIGlmICh2YXJpYXRpb24gPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIHZhcmlhdGlvbjtcbn1cblxuLyoqXG4gKiBMaXN0IG9mIGFjY2VwdGVkIHBsYWNlbWVudHMgdG8gdXNlIGFzIHZhbHVlcyBvZiB0aGUgYHBsYWNlbWVudGAgb3B0aW9uLjxiciAvPlxuICogVmFsaWQgcGxhY2VtZW50cyBhcmU6XG4gKiAtIGBhdXRvYFxuICogLSBgdG9wYFxuICogLSBgcmlnaHRgXG4gKiAtIGBib3R0b21gXG4gKiAtIGBsZWZ0YFxuICpcbiAqIEVhY2ggcGxhY2VtZW50IGNhbiBoYXZlIGEgdmFyaWF0aW9uIGZyb20gdGhpcyBsaXN0OlxuICogLSBgLXN0YXJ0YFxuICogLSBgLWVuZGBcbiAqXG4gKiBWYXJpYXRpb25zIGFyZSBpbnRlcnByZXRlZCBlYXNpbHkgaWYgeW91IHRoaW5rIG9mIHRoZW0gYXMgdGhlIGxlZnQgdG8gcmlnaHRcbiAqIHdyaXR0ZW4gbGFuZ3VhZ2VzLiBIb3Jpem9udGFsbHkgKGB0b3BgIGFuZCBgYm90dG9tYCksIGBzdGFydGAgaXMgbGVmdCBhbmQgYGVuZGBcbiAqIGlzIHJpZ2h0LjxiciAvPlxuICogVmVydGljYWxseSAoYGxlZnRgIGFuZCBgcmlnaHRgKSwgYHN0YXJ0YCBpcyB0b3AgYW5kIGBlbmRgIGlzIGJvdHRvbS5cbiAqXG4gKiBTb21lIHZhbGlkIGV4YW1wbGVzIGFyZTpcbiAqIC0gYHRvcC1lbmRgIChvbiB0b3Agb2YgcmVmZXJlbmNlLCByaWdodCBhbGlnbmVkKVxuICogLSBgcmlnaHQtc3RhcnRgIChvbiByaWdodCBvZiByZWZlcmVuY2UsIHRvcCBhbGlnbmVkKVxuICogLSBgYm90dG9tYCAob24gYm90dG9tLCBjZW50ZXJlZClcbiAqIC0gYGF1dG8tZW5kYCAob24gdGhlIHNpZGUgd2l0aCBtb3JlIHNwYWNlIGF2YWlsYWJsZSwgYWxpZ25tZW50IGRlcGVuZHMgYnkgcGxhY2VtZW50KVxuICpcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBlbnVtIHtTdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqIEBtZXRob2QgcGxhY2VtZW50c1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgcGxhY2VtZW50cyA9IFsnYXV0by1zdGFydCcsICdhdXRvJywgJ2F1dG8tZW5kJywgJ3RvcC1zdGFydCcsICd0b3AnLCAndG9wLWVuZCcsICdyaWdodC1zdGFydCcsICdyaWdodCcsICdyaWdodC1lbmQnLCAnYm90dG9tLWVuZCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2xlZnQtZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCddO1xuXG4vLyBHZXQgcmlkIG9mIGBhdXRvYCBgYXV0by1zdGFydGAgYW5kIGBhdXRvLWVuZGBcbnZhciB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4vKipcbiAqIEdpdmVuIGFuIGluaXRpYWwgcGxhY2VtZW50LCByZXR1cm5zIGFsbCB0aGUgc3Vic2VxdWVudCBwbGFjZW1lbnRzXG4gKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAqXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gY291bnRlciAtIFNldCB0byB0cnVlIHRvIHdhbGsgdGhlIHBsYWNlbWVudHMgY291bnRlcmNsb2Nrd2lzZVxuICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gKi9cbmZ1bmN0aW9uIGNsb2Nrd2lzZShwbGFjZW1lbnQpIHtcbiAgdmFyIGNvdW50ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gIHZhciBhcnIgPSB2YWxpZFBsYWNlbWVudHMuc2xpY2UoaW5kZXggKyAxKS5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cblxudmFyIEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZSdcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBmbGlwKGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gaWYgYGlubmVyYCBtb2RpZmllciBpcyBlbmFibGVkLCB3ZSBjYW4ndCB1c2UgdGhlIGBmbGlwYCBtb2RpZmllclxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdpbm5lcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YS5mbGlwcGVkICYmIGRhdGEucGxhY2VtZW50ID09PSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50KSB7XG4gICAgLy8gc2VlbXMgbGlrZSBmbGlwIGlzIHRyeWluZyB0byBsb29wLCBwcm9iYWJseSB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2Ugb24gYW55IG9mIHRoZSBmbGlwcGFibGUgc2lkZXNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgdmFyIGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuICAgIHZhciByZWZPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIG92ZXJsYXBzUmVmID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihyZWZPZmZzZXRzLmxlZnQpIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IocmVmT2Zmc2V0cy5yaWdodCkgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihyZWZPZmZzZXRzLnRvcCkgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihyZWZPZmZzZXRzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzTGVmdCA9IGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIHZhciBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgdmFyIG92ZXJmbG93c1RvcCA9IGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICB2YXIgb3ZlcmZsb3dzQm90dG9tID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0JvdW5kYXJpZXMgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbTtcblxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQgPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NMZWZ0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20gfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NUb3ApO1xuXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb24gPSBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgfHwgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudDtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcblxuICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLnBvcHBlciwgZ2V0UG9wcGVyT2Zmc2V0cyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpKTtcblxuICAgICAgZGF0YSA9IHJ1bk1vZGlmaWVycyhkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZGF0YSwgJ2ZsaXAnKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSAtIHBvcHBlclttZWFzdXJlbWVudF07XG4gIH1cbiAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtzaWRlXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5mdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gIHZhciBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIHZhciB2YWx1ZSA9ICtzcGxpdFsxXTtcbiAgdmFyIHVuaXQgPSBzcGxpdFsyXTtcblxuICAvLyBJZiBpdCdzIG5vdCBhIG51bWJlciBpdCdzIGFuIG9wZXJhdG9yLCBJIGd1ZXNzXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB2b2lkIDA7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICclcCc6XG4gICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgY2FzZSAnJXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgfVxuXG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICB2YXIgc2l6ZSA9IHZvaWQgMDtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5mdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMsIGJhc2VQbGFjZW1lbnQpIHtcbiAgdmFyIG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICB2YXIgdXNlSGVpZ2h0ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgdmFyIGZyYWdtZW50cyA9IG9mZnNldC5zcGxpdCgvKFxcK3xcXC0pLykubWFwKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgcmV0dXJuIGZyYWcudHJpbSgpO1xuICB9KTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgdmFyIGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihmaW5kKGZyYWdtZW50cywgZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy5zZWFyY2goLyx8XFxzLykgIT09IC0xO1xuICB9KSk7XG5cbiAgaWYgKGZyYWdtZW50c1tkaXZpZGVyXSAmJiBmcmFnbWVudHNbZGl2aWRlcl0uaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybignT2Zmc2V0cyBzZXBhcmF0ZWQgYnkgd2hpdGUgc3BhY2UocykgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhIGNvbW1hICgsKSBpbnN0ZWFkLicpO1xuICB9XG5cbiAgLy8gSWYgZGl2aWRlciBpcyBmb3VuZCwgd2UgZGl2aWRlIHRoZSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHMgdG8gZGl2aWRlXG4gIC8vIHRoZW0gYnkgb2ZzZXQgWCBhbmQgWS5cbiAgdmFyIHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICB2YXIgb3BzID0gZGl2aWRlciAhPT0gLTEgPyBbZnJhZ21lbnRzLnNsaWNlKDAsIGRpdmlkZXIpLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpKV0gOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgdmFyIG1lYXN1cmVtZW50ID0gKGluZGV4ID09PSAxID8gIXVzZUhlaWdodCA6IHVzZUhlaWdodCkgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgcmV0dXJuIG9wXG4gICAgLy8gVGhpcyBhZ2dyZWdhdGVzIGFueSBgK2Agb3IgYC1gIHNpZ24gdGhhdCBhcmVuJ3QgY29uc2lkZXJlZCBvcGVyYXRvcnNcbiAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJycgJiYgWycrJywgJy0nXS5pbmRleE9mKGIpICE9PSAtMSkge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVyIHZhbHVlcyAoaW4gcHgpXG4gICAgLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gTG9vcCB0cm91Z2ggdGhlIG9mZnNldHMgYXJyYXlzIGFuZCBleGVjdXRlIHRoZSBvcGVyYXRpb25zXG4gIG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICBvcC5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnLCBpbmRleDIpIHtcbiAgICAgIGlmIChpc051bWVyaWMoZnJhZykpIHtcbiAgICAgICAgb2Zmc2V0c1tpbmRleF0gKz0gZnJhZyAqIChvcFtpbmRleDIgLSAxXSA9PT0gJy0nID8gLTEgOiAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEBhcmd1bWVudCB7TnVtYmVyfFN0cmluZ30gb3B0aW9ucy5vZmZzZXQ9MFxuICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIG9mZnNldChkYXRhLCBfcmVmKSB7XG4gIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldDtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LFxuICAgICAgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICB2YXIgb2Zmc2V0cyA9IHZvaWQgMDtcbiAgaWYgKGlzTnVtZXJpYygrb2Zmc2V0KSkge1xuICAgIG9mZnNldHMgPSBbK29mZnNldCwgMF07XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0cyA9IHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyLCByZWZlcmVuY2UsIGJhc2VQbGFjZW1lbnQpO1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMV07XG4gIH1cblxuICBkYXRhLnBvcHBlciA9IHBvcHBlcjtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBib3VuZGFyaWVzRWxlbWVudCA9IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICB2YXIgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gIHZhciBwb3BwZXJTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICB2YXIgdG9wID0gcG9wcGVyU3R5bGVzLnRvcCxcbiAgICAgIGxlZnQgPSBwb3BwZXJTdHlsZXMubGVmdCxcbiAgICAgIHRyYW5zZm9ybSA9IHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXTtcblxuICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICBwb3BwZXJTdHlsZXMudG9wID0gdG9wO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBvcHRpb25zLmJvdW5kYXJpZXMgPSBib3VuZGFyaWVzO1xuXG4gIHZhciBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIHZhciBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIHZhciBjaGVjayA9IHtcbiAgICBwcmltYXJ5OiBmdW5jdGlvbiBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW3BsYWNlbWVudF07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBwbGFjZW1lbnQsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNlY29uZGFyeTogZnVuY3Rpb24gc2Vjb25kYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihwb3BwZXJbbWFpblNpZGVdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0gLSAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBtYWluU2lkZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICB2YXIgc2lkZSA9IFsnbGVmdCcsICd0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG4gICAgcG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgY2hlY2tbc2lkZV0ocGxhY2VtZW50KSk7XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAvLyBpZiBzaGlmdCBzaGlmdHZhcmlhdGlvbiBpcyBzcGVjaWZpZWQsIHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcjtcblxuICAgIHZhciBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIHZhciBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSksXG4gICAgICBlbmQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSlcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIHNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciBib3VuZCA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93JztcbiAgfSkuYm91bmRhcmllcztcblxuICBpZiAocmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHwgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHwgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHwgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnQpIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSB0cnVlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNIb3JpeiA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBzdWJ0cmFjdExlbmd0aCA9IFsndG9wJywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID09PSAtMTtcblxuICBwb3BwZXJbaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnXSA9IHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtIChzdWJ0cmFjdExlbmd0aCA/IHBvcHBlcltpc0hvcml6ID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDApO1xuXG4gIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBNb2RpZmllciBmdW5jdGlvbiwgZWFjaCBtb2RpZmllciBjYW4gaGF2ZSBhIGZ1bmN0aW9uIG9mIHRoaXMgdHlwZSBhc3NpZ25lZFxuICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICogbWFrZSBzdXJlIHRoZXkgYXJlIHBlcmZvcm1hbnQgZW5vdWdoIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tzLlxuICpcbiAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gKiBAYXJndW1lbnQge2RhdGFPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gKiBQb3BwZXIuanMgdXNlcyBhIHNldCBvZiA5IG1vZGlmaWVycyB0byBwcm92aWRlIGFsbCB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0aWVzXG4gKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogVXN1YWxseSB5b3UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZSB0aGUgYG9yZGVyYCwgYGZuYCBhbmQgYG9uTG9hZGAgcHJvcHMuXG4gKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gKi9cbnZhciBtb2RpZmllcnMgPSB7XG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHNoaWZ0IHRoZSBwb3BwZXIgb24gdGhlIHN0YXJ0IG9yIGVuZCBvZiBpdHMgcmVmZXJlbmNlXG4gICAqIGVsZW1lbnQuPGJyIC8+XG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICogSXQgY2FuIGJlIG9uZSBlaXRoZXIgYC1lbmRgIG9yIGAtc3RhcnRgLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgc2hpZnQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAxMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBzaGlmdFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAqXG4gICAqIEl0IGFjY2VwdHMgdGhlIGZvbGxvd2luZyB1bml0czpcbiAgICogLSBgcHhgIG9yIHVuaXQtbGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogLSBgJXBgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICpcbiAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICogYHdpZHRoYC4gSW4gY2FzZSBvZiBgbGVmdGAgb3IgYHJpZ2h0YCwgaXQgd2lsbCBiZSB0aGUgYGhlaWdodGAuXG4gICAqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAqIGFzIGBTdHJpbmdgIGRpdmlkZWQgYnkgYSBjb21tYSBvciBvbmUgKG9yIG1vcmUpIHdoaXRlIHNwYWNlcy48YnIgLz5cbiAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAqIEFkZGl0aW9uYWxseSwgaXQgYWNjZXB0cyBhZGRpdGlvbnMgYW5kIHN1YnRyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCB1bml0cy5cbiAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIFZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogYGBgXG4gICAqIDEwXG4gICAqICcxMCUnXG4gICAqICcxMCwgMTAnXG4gICAqICcxMCUsIDEwJ1xuICAgKiAnMTAgKyAxMCUnXG4gICAqICcxMCAtIDV2aCArIDMlJ1xuICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgKiBgYGBcbiAgICogPiAqKk5CKio6IElmIHlvdSBkZXNpcmUgdG8gYXBwbHkgb2Zmc2V0cyB0byB5b3VyIHBvcHBlcnMgaW4gYSB3YXkgdGhhdCBtYXkgbWFrZSB0aGVtIG92ZXJsYXBcbiAgICogPiB3aXRoIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50LCB1bmZvcnR1bmF0ZWx5LCB5b3Ugd2lsbCBoYXZlIHRvIGRpc2FibGUgdGhlIGBmbGlwYCBtb2RpZmllci5cbiAgICogPiBZb3UgY2FuIHJlYWQgbW9yZSBvbiB0aGlzIGF0IHRoaXMgW2lzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIG9mZnNldDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0yMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDIwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IG9mZnNldCxcbiAgICAvKiogQHByb3Age051bWJlcnxTdHJpbmd9IG9mZnNldD0wXG4gICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgb2Zmc2V0OiAwXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSBzdXJlIHRoZSByZWZlcmVuY2UgYW5kIGl0cyBwb3BwZXIgc3RheSBuZWFyIGVhY2ggb3RoZXJcbiAgICogd2l0aG91dCBsZWF2aW5nIGFueSBnYXAgYmV0d2VlbiB0aGUgdHdvLiBFc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZSBhcnJvdyBpc1xuICAgKiBlbmFibGVkIGFuZCB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCBpdCBwb2ludHMgdG8gaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBJdCBjYXJlcyBvbmx5IGFib3V0IHRoZSBmaXJzdCBheGlzLiBZb3UgY2FuIHN0aWxsIGhhdmUgcG9wcGVycyB3aXRoIG1hcmdpblxuICAgKiBiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGtlZXBUb2dldGhlcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj00MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDQwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGtlZXBUb2dldGhlclxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1vZGlmaWVyIGlzIHVzZWQgdG8gbW92ZSB0aGUgYGFycm93RWxlbWVudGAgb2YgdGhlIHBvcHBlciB0byBtYWtlXG4gICAqIHN1cmUgaXQgaXMgcG9zaXRpb25lZCBiZXR3ZWVuIHRoZSByZWZlcmVuY2UgZWxlbWVudCBhbmQgaXRzIHBvcHBlciBlbGVtZW50LlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIG91dGVyIHNpemUgb2YgdGhlIGBhcnJvd0VsZW1lbnRgIG5vZGUgdG8gZGV0ZWN0IGhvdyBtYW55XG4gICAqIHBpeGVscyBvZiBjb25qdW5jdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIGFyZSBsaW1pdGVkIHRvIHRoaXMgbW9kaWZpZXIuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VcbiAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgKlxuICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdXIgb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdW5kZWZpbmVkXG4gIH1cbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBEZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHt9LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWQuIFRoaXMgY2FsbGJhY2sgaXMgbm90IGNhbGxlZFxuICAgKiBvbiB0aGUgaW5pdGlhbGl6YXRpb24vY3JlYXRpb24gb2YgdGhlIHBvcHBlciwgYnV0IG9ubHkgb24gc3Vic2VxdWVudFxuICAgKiB1cGRhdGVzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvblVwZGF0ZX1cbiAgICovXG4gIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSgpIHt9LFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vZGlmaWVycyB1c2VkIHRvIG1vZGlmeSB0aGUgb2Zmc2V0cyBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLlxuICAgKiBUaGV5IHByb3ZpZGUgbW9zdCBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIFBvcHBlci5qcy5cbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVyczogbW9kaWZpZXJzXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25VcGRhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8vIFV0aWxzXG4vLyBNZXRob2RzXG52YXIgUG9wcGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2UuXG4gICAqIEBjbGFzcyBQb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIC8gWE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIFBvcHBlcihyZWZlcmVuY2UsIHBvcHBlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wcGVyKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLnVwZGF0ZSk7XG4gICAgfTtcblxuICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXVxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZSAmJiByZWZlcmVuY2UuanF1ZXJ5ID8gcmVmZXJlbmNlWzBdIDogcmVmZXJlbmNlO1xuICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30sIG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSwgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0pO1xuICAgIH0pXG4gICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICB9KTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllck9wdGlvbnMpIHtcbiAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoX3RoaXMucmVmZXJlbmNlLCBfdGhpcy5wb3BwZXIsIF90aGlzLm9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgX3RoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHZhciBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuXG5cbiAgY3JlYXRlQ2xhc3MoUG9wcGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICAgKiBpbmNsdWRlIGBwb3BwZXItdXRpbHMuanNgIGJlZm9yZSBgcG9wcGVyLmpzYC5cbiAgICAgKlxuICAgICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICAgKiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHYyISBVc2UgdGhlIFBvcHBlclV0aWxzIG1vZHVsZSBkaXJlY3RseSBpbnN0ZWFkLlxuICAgICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS44XG4gICAgICogQG1lbWJlciBVdGlsc1xuICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgKi9cblxuICB9XSk7XG4gIHJldHVybiBQb3BwZXI7XG59KCk7XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cblxuXG5Qb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuUG9wcGVyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJ1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgICAgPSAnZHJvcGRvd24nXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgICAgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcbmNvbnN0IFNQQUNFX0tFWUNPREUgICAgICAgICAgICA9IDMyIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHNwYWNlIGtleVxuY29uc3QgVEFCX0tFWUNPREUgICAgICAgICAgICAgID0gOSAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB0YWIga2V5XG5jb25zdCBBUlJPV19VUF9LRVlDT0RFICAgICAgICAgPSAzOCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcbmNvbnN0IEFSUk9XX0RPV05fS0VZQ09ERSAgICAgICA9IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggPSAzIC8vIE1vdXNlRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRoZSByaWdodCBidXR0b24gKGFzc3VtaW5nIGEgcmlnaHQtaGFuZGVkIG1vdXNlKVxuY29uc3QgUkVHRVhQX0tFWURPV04gICAgICAgICAgID0gbmV3IFJlZ0V4cChgJHtBUlJPV19VUF9LRVlDT0RFfXwke0FSUk9XX0RPV05fS0VZQ09ERX18JHtFU0NBUEVfS0VZQ09ERX1gKVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICAgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBLRVlET1dOX0RBVEFfQVBJIDogYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBLRVlVUF9EQVRBX0FQSSAgIDogYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERJU0FCTEVEICAgICAgICA6ICdkaXNhYmxlZCcsXG4gIFNIT1cgICAgICAgICAgICA6ICdzaG93JyxcbiAgRFJPUFVQICAgICAgICAgIDogJ2Ryb3B1cCcsXG4gIERST1BSSUdIVCAgICAgICA6ICdkcm9wcmlnaHQnLFxuICBEUk9QTEVGVCAgICAgICAgOiAnZHJvcGxlZnQnLFxuICBNRU5VUklHSFQgICAgICAgOiAnZHJvcGRvd24tbWVudS1yaWdodCcsXG4gIE1FTlVMRUZUICAgICAgICA6ICdkcm9wZG93bi1tZW51LWxlZnQnLFxuICBQT1NJVElPTl9TVEFUSUMgOiAncG9zaXRpb24tc3RhdGljJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gIEZPUk1fQ0hJTEQgICAgOiAnLmRyb3Bkb3duIGZvcm0nLFxuICBNRU5VICAgICAgICAgIDogJy5kcm9wZG93bi1tZW51JyxcbiAgTkFWQkFSX05BViAgICA6ICcubmF2YmFyLW5hdicsXG4gIFZJU0lCTEVfSVRFTVMgOiAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIFRPUCAgICAgICA6ICd0b3Atc3RhcnQnLFxuICBUT1BFTkQgICAgOiAndG9wLWVuZCcsXG4gIEJPVFRPTSAgICA6ICdib3R0b20tc3RhcnQnLFxuICBCT1RUT01FTkQgOiAnYm90dG9tLWVuZCcsXG4gIFJJR0hUICAgICA6ICdyaWdodC1zdGFydCcsXG4gIFJJR0hURU5EICA6ICdyaWdodC1lbmQnLFxuICBMRUZUICAgICAgOiAnbGVmdC1zdGFydCcsXG4gIExFRlRFTkQgICA6ICdsZWZ0LWVuZCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0ICAgICAgIDogMCxcbiAgZmxpcCAgICAgICAgIDogdHJ1ZSxcbiAgYm91bmRhcnkgICAgIDogJ3Njcm9sbFBhcmVudCcsXG4gIHJlZmVyZW5jZSAgICA6ICd0b2dnbGUnLFxuICBkaXNwbGF5ICAgICAgOiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZyA6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBmbGlwICAgICAgICAgOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5ICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5ICAgICAgOiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnIDogJyhudWxsfG9iamVjdCknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgID0gZWxlbWVudFxuICAgIHRoaXMuX3BvcHBlciAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ICAgICA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2hvdyh0cnVlKVxuICB9XG5cbiAgc2hvdyh1c2VQb3BwZXIgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0b3RhbGx5IFBvcHBlci5qcyBmb3IgRHJvcGRvd24gaW4gTmF2YmFyXG4gICAgaWYgKCF0aGlzLl9pbk5hdmJhciAmJiB1c2VQb3BwZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAgICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICAgICAqL1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudFxuICAgICAgfSBlbHNlIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGJvdW5kYXJ5IGlzIG5vdCBgc2Nyb2xsUGFyZW50YCwgdGhlbiBzZXQgcG9zaXRpb24gdG8gYHN0YXRpY2BcbiAgICAgIC8vIHRvIGFsbG93IHRoZSBtZW51IHRvIFwiZXNjYXBlXCIgdGhlIHNjcm9sbCBwYXJlbnQncyBib3VuZGFyaWVzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MjUxXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvdW5kYXJ5ICE9PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgICAkKHBhcmVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlBPU0lUSU9OX1NUQVRJQylcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICQocGFyZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVkJBUl9OQVYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX21lbnUgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0ssIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4kKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLl9tZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTUVOVSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21lbnVcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgJHBhcmVudERyb3Bkb3duID0gJCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgbGV0IHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NXG5cbiAgICAvLyBIYW5kbGUgZHJvcHVwXG4gICAgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUFVQKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BcbiAgICAgIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QRU5EXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuUklHSFRcbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUExFRlQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkxFRlRcbiAgICB9IGVsc2UgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NRU5EXG4gICAgfVxuICAgIHJldHVybiBwbGFjZW1lbnRcbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdCgnLm5hdmJhcicpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5fZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuZmxpcFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlci5qcyBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzLmFwcGx5U3R5bGUgPSB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBvcHBlckNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgY29uc3QgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiZcbiAgICAgICAgICAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcblxuICAgICAgaWYgKGNvbnRleHQuX3BvcHBlcikge1xuICAgICAgICBjb250ZXh0Ll9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgICQoZHJvcGRvd25NZW51KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICQocGFyZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcGFyZW50XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgc3RhdGljIF9kYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgICA/IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSAmJlxuICAgICAgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHxcbiAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IuTUVOVSkubGVuZ3RoKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LndoaWNoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5EQVRBX1RPR0dMRSlcbiAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVklTSUJMRV9JVEVNUykpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiAkKGl0ZW0pLmlzKCc6dmlzaWJsZScpKVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX1VQX0tFWUNPREUgJiYgaW5kZXggPiAwKSB7IC8vIFVwXG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIERvd25cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuTUVOVSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LktFWVVQX0RBVEFfQVBJfWAsIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuRk9STV9DSElMRCwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdtb2RhbCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcCA6IHRydWUsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgZm9jdXMgICAgOiB0cnVlLFxuICBzaG93ICAgICA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wIDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgZm9jdXMgICAgOiAnYm9vbGVhbicsXG4gIHNob3cgICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElERV9QUkVWRU5URUQgICAgOiBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgICAgICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBSRVNJWkUgICAgICAgICAgICA6IGByZXNpemUke0VWRU5UX0tFWX1gLFxuICBDTElDS19ESVNNSVNTICAgICA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgS0VZRE9XTl9ESVNNSVNTICAgOiBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VVUF9ESVNNSVNTICAgOiBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VET1dOX0RJU01JU1MgOiBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSAgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBTQ1JPTExBQkxFICAgICAgICAgOiAnbW9kYWwtZGlhbG9nLXNjcm9sbGFibGUnLFxuICBTQ1JPTExCQVJfTUVBU1VSRVIgOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICBCQUNLRFJPUCAgICAgICAgICAgOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOICAgICAgICAgICAgICAgOiAnbW9kYWwtb3BlbicsXG4gIEZBREUgICAgICAgICAgICAgICA6ICdmYWRlJyxcbiAgU0hPVyAgICAgICAgICAgICAgIDogJ3Nob3cnLFxuICBTVEFUSUMgICAgICAgICAgICAgOiAnbW9kYWwtc3RhdGljJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRElBTE9HICAgICAgICAgOiAnLm1vZGFsLWRpYWxvZycsXG4gIE1PREFMX0JPRFkgICAgIDogJy5tb2RhbC1ib2R5JyxcbiAgREFUQV9UT0dHTEUgICAgOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1MgICA6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UICA6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgU1RJQ0tZX0NPTlRFTlQgOiAnLnN0aWNreS10b3AnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5ESUFMT0cpXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAoZXZlbnQpID0+IHRoaXMuaGlkZShldmVudClcbiAgICApXG5cbiAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50Lk1PVVNFVVBfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcbiAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uICA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKChodG1sRWxlbWVudCkgPT4gJChodG1sRWxlbWVudCkub2ZmKEVWRU5UX0tFWSkpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRXZlbnQuRk9DVVNJTmAgYW5kIGBFdmVudC5DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEV2ZW50LkNMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gbnVsbFxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IGhpZGVFdmVudFByZXZlbnRlZCA9ICQuRXZlbnQoRXZlbnQuSElERV9QUkVWRU5URUQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnRQcmV2ZW50ZWQpXG4gICAgICBpZiAoaGlkZUV2ZW50UHJldmVudGVkLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU1RBVElDKVxuXG4gICAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNUQVRJQylcbiAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTU9EQUxfQk9EWSkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuXG4gICAgaWYgKCQodGhpcy5fZGlhbG9nKS5oYXNDbGFzcyhDbGFzc05hbWUuU0NST0xMQUJMRSkgJiYgbW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEV2ZW50LkZPQ1VTSU4sIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVVwZGF0ZShldmVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICQod2luZG93KS5vZmYoRXZlbnQuUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgID8gQ2xhc3NOYW1lLkZBREUgOiAnJ1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfSlcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZW1vdmVCYWNrZHJvcCgpXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSByZWN0LmxlZnQgKyByZWN0LnJpZ2h0IDwgd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgfVxuXG4gIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG4gICAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkpXG4gICAgICBjb25zdCBzdGlja3lDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlNUSUNLWV9DT05URU5UKSlcblxuICAgICAgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZWxlbWVudCkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3Qgc3RpY2t5IGNvbnRlbnQgbWFyZ2luXG4gICAgICAkKHN0aWNreUNvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbilcbiAgICAgICAgICAuY3NzKCdtYXJnaW4tcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IGJvZHkgcGFkZGluZ1xuICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgfVxuXG4gICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgfVxuXG4gIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAvLyBSZXN0b3JlIGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GSVhFRF9DT05URU5UKSlcbiAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7U2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlR9YCkpXG4gICAgJChlbGVtZW50cykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hcmdpbiA9ICQoZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIGlmICh0eXBlb2YgbWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIGJvZHkgcGFkZGluZ1xuICAgIGNvbnN0IHBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gIH1cblxuICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlNDUk9MTEJBUl9NRUFTVVJFUlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKCksXG4gICAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldClcbiAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgIGRhdGEuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBsZXQgdGFyZ2V0XG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKVxuICAgID8gJ3RvZ2dsZScgOiB7XG4gICAgICAuLi4kKHRhcmdldCkuZGF0YSgpLFxuICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICB9XG5cbiAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0EnIHx8IHRoaXMudGFnTmFtZSA9PT0gJ0FSRUEnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICR0YXJnZXQub25lKEV2ZW50LkhJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcsIHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IE1vZGFsXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdG9vbHMvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl1cblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0V2hpdGVsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteJjovPyNdKig/OlsvPyNdfCQpKS9naVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFthLXowLTkrL10rPSokL2lcblxuZnVuY3Rpb24gYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICBpZiAodXJpQXR0cnMuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihhdHRyLm5vZGVWYWx1ZS5tYXRjaChTQUZFX1VSTF9QQVRURVJOKSB8fCBhdHRyLm5vZGVWYWx1ZS5tYXRjaChEQVRBX1VSTF9QQVRURVJOKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKChhdHRyUmVnZXgpID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSByZWdFeHAubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGF0dHJOYW1lLm1hdGNoKHJlZ0V4cFtpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgd2hpdGVMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICh1bnNhZmVIdG1sLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IHdoaXRlbGlzdEtleXMgPSBPYmplY3Qua2V5cyh3aGl0ZUxpc3QpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChjcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICh3aGl0ZWxpc3RLZXlzLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5zbGljZS5jYWxsKGVsLmF0dHJpYnV0ZXMpXG4gICAgY29uc3Qgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KHdoaXRlTGlzdFsnKiddIHx8IFtdLCB3aGl0ZUxpc3RbZWxOYW1lXSB8fCBbXSlcblxuICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIHdoaXRlbGlzdGVkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgRGVmYXVsdFdoaXRlbGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdG9vbHMvc2FuaXRpemVyJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICA9ICd0b29sdGlwJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICAgID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggICAgPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ11cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZSAgICAgICAgICA6ICdzdHJpbmcnLFxuICB0aXRsZSAgICAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlciAgICAgICAgICAgOiAnc3RyaW5nJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbCAgICAgICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yICAgICAgICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldCAgICAgICAgICAgIDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGNvbnRhaW5lciAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJyhzdHJpbmd8YXJyYXkpJyxcbiAgYm91bmRhcnkgICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHNhbml0aXplICAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuICAgICAgICA6ICcobnVsbHxmdW5jdGlvbiknLFxuICB3aGl0ZUxpc3QgICAgICAgICA6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWcgICAgICA6ICcobnVsbHxvYmplY3QpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPICAgOiAnYXV0bycsXG4gIFRPUCAgICA6ICd0b3AnLFxuICBSSUdIVCAgOiAncmlnaHQnLFxuICBCT1RUT00gOiAnYm90dG9tJyxcbiAgTEVGVCAgIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogdHJ1ZSxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAwLFxuICBodG1sICAgICAgICAgICAgICA6IGZhbHNlLFxuICBzZWxlY3RvciAgICAgICAgICA6IGZhbHNlLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICd0b3AnLFxuICBvZmZzZXQgICAgICAgICAgICA6IDAsXG4gIGNvbnRhaW5lciAgICAgICAgIDogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJ2ZsaXAnLFxuICBib3VuZGFyeSAgICAgICAgICA6ICdzY3JvbGxQYXJlbnQnLFxuICBzYW5pdGl6ZSAgICAgICAgICA6IHRydWUsXG4gIHNhbml0aXplRm4gICAgICAgIDogbnVsbCxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiBEZWZhdWx0V2hpdGVsaXN0LFxuICBwb3BwZXJDb25maWcgICAgICA6IG51bGxcbn1cblxuY29uc3QgSG92ZXJTdGF0ZSA9IHtcbiAgU0hPVyA6ICdzaG93JyxcbiAgT1VUICA6ICdvdXQnXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSA6ICdmYWRlJyxcbiAgU0hPVyA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgVE9PTFRJUCAgICAgICA6ICcudG9vbHRpcCcsXG4gIFRPT0xUSVBfSU5ORVIgOiAnLnRvb2x0aXAtaW5uZXInLFxuICBBUlJPVyAgICAgICAgIDogJy5hcnJvdydcbn1cblxuY29uc3QgVHJpZ2dlciA9IHtcbiAgSE9WRVIgIDogJ2hvdmVyJyxcbiAgRk9DVVMgIDogJ2ZvY3VzJyxcbiAgQ0xJQ0sgIDogJ2NsaWNrJyxcbiAgTUFOVUFMIDogJ21hbnVhbCdcbn1cblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgIH1cblxuICAgIC8vIHByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSAgICA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyICAgICAgICA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbmZpZyAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwICAgICA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgIGxldCBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICAgIClcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcbiAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub2ZmKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlKClcbiAgICB9XG5cbiAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSBudWxsXG4gICAgdGhpcy5faG92ZXJTdGF0ZSAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICB0aGlzLnRpcCAgICAgPSBudWxsXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICgkKHRoaXMuZWxlbWVudCkuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpXG4gICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gVXRpbC5maW5kU2hhZG93Um9vdCh0aGlzLmVsZW1lbnQpXG4gICAgICBjb25zdCBpc0luVGhlRG9tID0gJC5jb250YWlucyhcbiAgICAgICAgc2hhZG93Um9vdCAhPT0gbnVsbCA/IHNoYWRvd1Jvb3QgOiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgKVxuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXAgICA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgICBjb25zdCB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYWNlbWVudCAgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpXG4gICAgICAgIDogdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpXG4gICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcblxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuXG4gICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpeFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcClcblxuICAgICAgICAkKHRoaXMudGlwKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZVxuXG4gICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApXG5cbiAgICAgICQodGlwKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJCh0aXAucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5UT09MVElQX0lOTkVSKSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgIC8vIENvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy53aGl0ZUxpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50Lmh0bWwoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnQudGV4dChjb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc0NvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgIH0sXG4gICAgICAgIGFycm93OiB7XG4gICAgICAgICAgZWxlbWVudDogU2VsZWN0b3IuQVJST1dcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkNyZWF0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZTogKGRhdGEpID0+IHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNDb25maWcsXG4gICAgICAuLi50aGlzLmNvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLmNvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLmVsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldENvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5jb25maWcuY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuICQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHJldHVybiAkKGRvY3VtZW50KS5maW5kKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssXG4gICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUlxuICAgICAgICAgID8gdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSXG4gICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkVcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAub24oXG4gICAgICAgICAgICBldmVudEluLFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2VudGVyKGV2ZW50KVxuICAgICAgICAgIClcbiAgICAgICAgICAub24oXG4gICAgICAgICAgICBldmVudE91dCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudClcbiAgICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKFxuICAgICAgJ2hpZGUuYnMubW9kYWwnLFxuICAgICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlclxuICAgIClcblxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnXG4gICAgICApXG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICgkKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgIF0gPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9ICQodGhpcy5lbGVtZW50KS5kYXRhKClcblxuICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKVxuICAgICAgLmZvckVhY2goKGRhdGFBdHRyKSA9PiB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIGNvbnN0IHBvcHBlckluc3RhbmNlID0gcG9wcGVyRGF0YS5pbnN0YW5jZVxuICAgIHRoaXMudGlwID0gcG9wcGVySW5zdGFuY2UucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpXG4gIH1cblxuICBfZml4VHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb25cblxuICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2VcbiAgICB0aGlzLmhpZGUoKVxuICAgIHRoaXMuc2hvdygpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvblxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdwb3BvdmVyJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCAgPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50IDogJ3JpZ2h0JyxcbiAgdHJpZ2dlciAgIDogJ2NsaWNrJyxcbiAgY29udGVudCAgIDogJycsXG4gIHRlbXBsYXRlICA6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50IDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSA6ICdmYWRlJyxcbiAgU0hPVyA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgVElUTEUgICA6ICcucG9wb3Zlci1oZWFkZXInLFxuICBDT05URU5UIDogJy5wb3BvdmVyLWJvZHknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG5cbiAgICAvLyBXZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KClcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5lbGVtZW50KVxuICAgIH1cbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5DT05URU5UKSwgY29udGVudClcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgfHxcbiAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdzY3JvbGxzcHknXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCA6IDEwLFxuICBtZXRob2QgOiAnYXV0bycsXG4gIHRhcmdldCA6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgOiAnbnVtYmVyJyxcbiAgbWV0aG9kIDogJ3N0cmluZycsXG4gIHRhcmdldCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQUNUSVZBVEUgICAgICA6IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWAsXG4gIFNDUk9MTCAgICAgICAgOiBgc2Nyb2xsJHtFVkVOVF9LRVl9YCxcbiAgTE9BRF9EQVRBX0FQSSA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERST1BET1dOX0lURU0gOiAnZHJvcGRvd24taXRlbScsXG4gIERST1BET1dOX01FTlUgOiAnZHJvcGRvd24tbWVudScsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9TUFkgICAgICAgIDogJ1tkYXRhLXNweT1cInNjcm9sbFwiXScsXG4gIEFDVElWRSAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgTkFWX0xJU1RfR1JPVVAgIDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgTkFWX0xJTktTICAgICAgIDogJy5uYXYtbGluaycsXG4gIE5BVl9JVEVNUyAgICAgICA6ICcubmF2LWl0ZW0nLFxuICBMSVNUX0lURU1TICAgICAgOiAnLmxpc3QtZ3JvdXAtaXRlbScsXG4gIERST1BET1dOICAgICAgICA6ICcuZHJvcGRvd24nLFxuICBEUk9QRE9XTl9JVEVNUyAgOiAnLmRyb3Bkb3duLWl0ZW0nLFxuICBEUk9QRE9XTl9UT0dHTEUgOiAnLmRyb3Bkb3duLXRvZ2dsZSdcbn1cblxuY29uc3QgT2Zmc2V0TWV0aG9kID0ge1xuICBPRkZTRVQgICA6ICdvZmZzZXQnLFxuICBQT1NJVElPTiA6ICdwb3NpdGlvbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLk5BVl9MSU5LU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuTElTVF9JVEVNU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuRFJPUERPV05fSVRFTVN9YFxuICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IDBcblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRXZlbnQuU0NST0xMLCAoZXZlbnQpID0+IHRoaXMuX3Byb2Nlc3MoZXZlbnQpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3dcbiAgICAgID8gT2Zmc2V0TWV0aG9kLk9GRlNFVCA6IE9mZnNldE1ldGhvZC5QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nXG4gICAgICA/IGF1dG9NZXRob2QgOiB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBPZmZzZXRNZXRob2QuUE9TSVRJT05cbiAgICAgID8gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cblxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcblxuICAgIHRhcmdldHNcbiAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBUT0RPIChmYXQpOiByZW1vdmUgc2tldGNoIHJlbGlhbmNlIG9uIGpRdWVyeSBwb3NpdGlvbi9vZmZzZXRcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUpXG4gICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgIH1cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3dcbiAgICAgID8gdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wICAgID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgICAgPSB0aGlzLl9jb25maWcub2Zmc2V0ICtcbiAgICAgIHNjcm9sbEhlaWdodCAtXG4gICAgICB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0TGVuZ3RoID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gb2Zmc2V0TGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3RvclxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKHNlbGVjdG9yKSA9PiBgJHtzZWxlY3Rvcn1bZGF0YS10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCAkbGluayA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJpZXMuam9pbignLCcpKSkpXG5cbiAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX0lURU0pKSB7XG4gICAgICAkbGluay5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKS5maW5kKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApLnByZXYoYCR7U2VsZWN0b3IuTkFWX0xJTktTfSwgJHtTZWxlY3Rvci5MSVNUX0lURU1TfWApLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApLnByZXYoU2VsZWN0b3IuTkFWX0lURU1TKS5jaGlsZHJlbihTZWxlY3Rvci5OQVZfTElOS1MpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEV2ZW50LkFDVElWQVRFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICB9KVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkFDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFNweXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9TUFkpKVxuICBjb25zdCBzY3JvbGxTcHlzTGVuZ3RoID0gc2Nyb2xsU3B5cy5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gc2Nyb2xsU3B5c0xlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0ICRzcHkgPSAkKHNjcm9sbFNweXNbaV0pXG4gICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RhYidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZScsXG4gIERJU0FCTEVEICAgICAgOiAnZGlzYWJsZWQnLFxuICBGQURFICAgICAgICAgIDogJ2ZhZGUnLFxuICBTSE9XICAgICAgICAgIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEUk9QRE9XTiAgICAgICAgICAgICAgOiAnLmRyb3Bkb3duJyxcbiAgTkFWX0xJU1RfR1JPVVAgICAgICAgIDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgQUNUSVZFICAgICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBBQ1RJVkVfVUwgICAgICAgICAgICAgOiAnPiBsaSA+IC5hY3RpdmUnLFxuICBEQVRBX1RPR0dMRSAgICAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgRFJPUERPV05fVE9HR0xFICAgICAgIDogJy5kcm9wZG93bi10b2dnbGUnLFxuICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgOiAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHRhcmdldFxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKVswXVxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU2VsZWN0b3IuQUNUSVZFX1VMIDogU2VsZWN0b3IuQUNUSVZFXG4gICAgICBwcmV2aW91cyA9ICQubWFrZUFycmF5KCQobGlzdEVsZW1lbnQpLmZpbmQoaXRlbVNlbGVjdG9yKSlcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8XG4gICAgICAgIGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKFxuICAgICAgdGhpcy5fZWxlbWVudCxcbiAgICAgIGxpc3RFbGVtZW50XG4gICAgKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoaWRkZW5FdmVudCA9ICQuRXZlbnQoRXZlbnQuSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuXG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGRlbkV2ZW50KVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpXG4gICAgICA/ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yLkFDVElWRV9VTClcbiAgICAgIDogJChjb250YWluZXIpLmNoaWxkcmVuKFNlbGVjdG9yLkFDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiAkKGFjdGl2ZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKFxuICAgICAgZWxlbWVudCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKVxuXG4gICAgICAkKGFjdGl2ZSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duQ2hpbGQgPSAkKGFjdGl2ZS5wYXJlbnROb2RlKS5maW5kKFxuICAgICAgICBTZWxlY3Rvci5EUk9QRE9XTl9BQ1RJVkVfQ0hJTERcbiAgICAgIClbMF1cblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgJChkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIFV0aWwucmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpKVxuXG4gICAgICAgICQoZHJvcGRvd25Ub2dnbGVMaXN0KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVGFiKHRoaXMpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVGFiLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUYWJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVGFiLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICd0b2FzdCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTElDS19ESVNNSVNTIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSAgICA6ICdmYWRlJyxcbiAgSElERSAgICA6ICdoaWRlJyxcbiAgU0hPVyAgICA6ICdzaG93JyxcbiAgU0hPV0lORyA6ICdzaG93aW5nJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uIDogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZSAgOiAnYm9vbGVhbicsXG4gIGRlbGF5ICAgICA6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiA6IHRydWUsXG4gIGF1dG9oaWRlICA6IHRydWUsXG4gIGRlbGF5ICAgICA6IDUwMFxufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9ESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPVylcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5ISURFKVxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TSE9XSU5HKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2UoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5TSE9XKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgRXZlbnQuQ0xJQ0tfRElTTUlTUyxcbiAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgICgpID0+IHRoaXMuaGlkZSgpXG4gICAgKVxuICB9XG5cbiAgX2Nsb3NlKCkge1xuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1cpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gICAgICAgICAgICAgPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogalF1ZXJ5IFJpcHBsZXMgcGx1Z2luIHYwLjYuMyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9zaXJ4ZW1pYy9qcXVlcnkucmlwcGxlc1xuICogTUlUIExpY2Vuc2VcbiAqIEBhdXRob3Igc2lyeGVtaWMgLyBodHRwczovL3NpcnhlbWljLmNvbS9cbiAqL1xuXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT90KHJlcXVpcmUoXCJqcXVlcnlcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLHQpOnQoZS4kKX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUpe3JldHVyblwiJVwiPT1lW2UubGVuZ3RoLTFdfWZ1bmN0aW9uIHIoZSl7dmFyIHQ9ZS5zcGxpdChcIiBcIik7aWYoMSE9PXQubGVuZ3RoKXJldHVybiB0Lm1hcChmdW5jdGlvbih0KXtzd2l0Y2goZSl7Y2FzZVwiY2VudGVyXCI6cmV0dXJuXCI1MCVcIjtjYXNlXCJ0b3BcIjpjYXNlXCJsZWZ0XCI6cmV0dXJuXCIwXCI7Y2FzZVwicmlnaHRcIjpjYXNlXCJib3R0b21cIjpyZXR1cm5cIjEwMCVcIjtkZWZhdWx0OnJldHVybiB0fX0pO3N3aXRjaChlKXtjYXNlXCJjZW50ZXJcIjpyZXR1cm5bXCI1MCVcIixcIjUwJVwiXTtjYXNlXCJ0b3BcIjpyZXR1cm5bXCI1MCVcIixcIjBcIl07Y2FzZVwiYm90dG9tXCI6cmV0dXJuW1wiNTAlXCIsXCIxMDAlXCJdO2Nhc2VcImxlZnRcIjpyZXR1cm5bXCIwXCIsXCI1MCVcIl07Y2FzZVwicmlnaHRcIjpyZXR1cm5bXCIxMDAlXCIsXCI1MCVcIl07ZGVmYXVsdDpyZXR1cm5bZSxcIjUwJVwiXX19ZnVuY3Rpb24gaShlLHQscil7ZnVuY3Rpb24gaShlLHQpe3ZhciByPXMuY3JlYXRlU2hhZGVyKGUpO2lmKHMuc2hhZGVyU291cmNlKHIsdCkscy5jb21waWxlU2hhZGVyKHIpLCFzLmdldFNoYWRlclBhcmFtZXRlcihyLHMuQ09NUElMRV9TVEFUVVMpKXRocm93IG5ldyBFcnJvcihcImNvbXBpbGUgZXJyb3I6IFwiK3MuZ2V0U2hhZGVySW5mb0xvZyhyKSk7cmV0dXJuIHJ9dmFyIG89e307aWYoby5pZD1zLmNyZWF0ZVByb2dyYW0oKSxzLmF0dGFjaFNoYWRlcihvLmlkLGkocy5WRVJURVhfU0hBREVSLGUpKSxzLmF0dGFjaFNoYWRlcihvLmlkLGkocy5GUkFHTUVOVF9TSEFERVIsdCkpLHMubGlua1Byb2dyYW0oby5pZCksIXMuZ2V0UHJvZ3JhbVBhcmFtZXRlcihvLmlkLHMuTElOS19TVEFUVVMpKXRocm93IG5ldyBFcnJvcihcImxpbmsgZXJyb3I6IFwiK3MuZ2V0UHJvZ3JhbUluZm9Mb2coby5pZCkpO28udW5pZm9ybXM9e30sby5sb2NhdGlvbnM9e30scy51c2VQcm9ncmFtKG8uaWQpLHMuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7Zm9yKHZhciBuLGEsdT0vdW5pZm9ybSAoXFx3KykgKFxcdyspL2csaD1lK3Q7bnVsbCE9KG49dS5leGVjKGgpKTspYT1uWzJdLG8ubG9jYXRpb25zW2FdPXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG8uaWQsYSk7cmV0dXJuIG99ZnVuY3Rpb24gbyhlLHQpe3MuYWN0aXZlVGV4dHVyZShzLlRFWFRVUkUwKyh0fHwwKSkscy5iaW5kVGV4dHVyZShzLlRFWFRVUkVfMkQsZSl9ZnVuY3Rpb24gbihlKXt2YXIgdD0vdXJsXFwoW1wiJ10/KFteXCInXSopW1wiJ10/XFwpLy5leGVjKGUpO3JldHVybiBudWxsPT10P251bGw6dFsxXX1mdW5jdGlvbiBhKGUpe3JldHVybiBlLm1hdGNoKC9eZGF0YTovKX12YXIgcyx1PShlPWUmJlwiZGVmYXVsdFwiaW4gZT9lLmRlZmF1bHQ6ZSkod2luZG93KSxoPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsaSl7dmFyIG89XCJPRVNfdGV4dHVyZV9cIitlLG49bytcIl9saW5lYXJcIixhPW4gaW4gcixzPVtvXTtyZXR1cm4gYSYmcy5wdXNoKG4pLHt0eXBlOnQsYXJyYXlUeXBlOmksbGluZWFyU3VwcG9ydDphLGV4dGVuc2lvbnM6c319dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpZighKHM9dC5nZXRDb250ZXh0KFwid2ViZ2xcIil8fHQuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiKSkpcmV0dXJuIG51bGw7dmFyIHI9e307aWYoW1wiT0VTX3RleHR1cmVfZmxvYXRcIixcIk9FU190ZXh0dXJlX2hhbGZfZmxvYXRcIixcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiLFwiT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1zLmdldEV4dGVuc2lvbihlKTt0JiYocltlXT10KX0pLCFyLk9FU190ZXh0dXJlX2Zsb2F0KXJldHVybiBudWxsO3ZhciBpPVtdO2kucHVzaChlKFwiZmxvYXRcIixzLkZMT0FULEZsb2F0MzJBcnJheSkpLHIuT0VTX3RleHR1cmVfaGFsZl9mbG9hdCYmaS5wdXNoKGUoXCJoYWxmX2Zsb2F0XCIsci5PRVNfdGV4dHVyZV9oYWxmX2Zsb2F0LkhBTEZfRkxPQVRfT0VTLG51bGwpKTt2YXIgbz1zLmNyZWF0ZVRleHR1cmUoKSxuPXMuY3JlYXRlRnJhbWVidWZmZXIoKTtzLmJpbmRGcmFtZWJ1ZmZlcihzLkZSQU1FQlVGRkVSLG4pLHMuYmluZFRleHR1cmUocy5URVhUVVJFXzJELG8pLHMudGV4UGFyYW1ldGVyaShzLlRFWFRVUkVfMkQscy5URVhUVVJFX01JTl9GSUxURVIscy5ORUFSRVNUKSxzLnRleFBhcmFtZXRlcmkocy5URVhUVVJFXzJELHMuVEVYVFVSRV9NQUdfRklMVEVSLHMuTkVBUkVTVCkscy50ZXhQYXJhbWV0ZXJpKHMuVEVYVFVSRV8yRCxzLlRFWFRVUkVfV1JBUF9TLHMuQ0xBTVBfVE9fRURHRSkscy50ZXhQYXJhbWV0ZXJpKHMuVEVYVFVSRV8yRCxzLlRFWFRVUkVfV1JBUF9ULHMuQ0xBTVBfVE9fRURHRSk7Zm9yKHZhciBhPW51bGwsdT0wO3U8aS5sZW5ndGg7dSsrKWlmKHMudGV4SW1hZ2UyRChzLlRFWFRVUkVfMkQsMCxzLlJHQkEsMzIsMzIsMCxzLlJHQkEsaVt1XS50eXBlLG51bGwpLHMuZnJhbWVidWZmZXJUZXh0dXJlMkQocy5GUkFNRUJVRkZFUixzLkNPTE9SX0FUVEFDSE1FTlQwLHMuVEVYVFVSRV8yRCxvLDApLHMuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhzLkZSQU1FQlVGRkVSKT09PXMuRlJBTUVCVUZGRVJfQ09NUExFVEUpe2E9aVt1XTticmVha31yZXR1cm4gYX0oKSxkPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiBuZXcgSW1hZ2VEYXRhKGUsdCl9Y2F0Y2gocil7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpLmNyZWF0ZUltYWdlRGF0YShlLHQpfX0oMzIsMzIpO2UoXCJoZWFkXCIpLnByZXBlbmQoXCI8c3R5bGU+LmpxdWVyeS1yaXBwbGVzIHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAwOyB9PC9zdHlsZT5cIik7dmFyIGM9ZnVuY3Rpb24odCxyKXtmdW5jdGlvbiBpKCl7by5kZXN0cm95ZWR8fChvLnN0ZXAoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaSkpfXZhciBvPXRoaXM7dGhpcy4kZWw9ZSh0KSx0aGlzLmludGVyYWN0aXZlPXIuaW50ZXJhY3RpdmUsdGhpcy5yZXNvbHV0aW9uPXIucmVzb2x1dGlvbix0aGlzLnRleHR1cmVEZWx0YT1uZXcgRmxvYXQzMkFycmF5KFsxL3RoaXMucmVzb2x1dGlvbiwxL3RoaXMucmVzb2x1dGlvbl0pLHRoaXMucGVydHVyYmFuY2U9ci5wZXJ0dXJiYW5jZSx0aGlzLmRyb3BSYWRpdXM9ci5kcm9wUmFkaXVzLHRoaXMuY3Jvc3NPcmlnaW49ci5jcm9zc09yaWdpbix0aGlzLmltYWdlVXJsPXIuaW1hZ2VVcmw7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtuLndpZHRoPXRoaXMuJGVsLmlubmVyV2lkdGgoKSxuLmhlaWdodD10aGlzLiRlbC5pbm5lckhlaWdodCgpLHRoaXMuY2FudmFzPW4sdGhpcy4kY2FudmFzPWUobiksdGhpcy4kY2FudmFzLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6MCx0b3A6MCxyaWdodDowLGJvdHRvbTowLHpJbmRleDotMX0pLHRoaXMuJGVsLmFkZENsYXNzKFwianF1ZXJ5LXJpcHBsZXNcIikuYXBwZW5kKG4pLHRoaXMuY29udGV4dD1zPW4uZ2V0Q29udGV4dChcIndlYmdsXCIpfHxuLmdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIiksaC5leHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24oZSl7cy5nZXRFeHRlbnNpb24oZSl9KSx0aGlzLnVwZGF0ZVNpemU9dGhpcy51cGRhdGVTaXplLmJpbmQodGhpcyksZSh3aW5kb3cpLm9uKFwicmVzaXplXCIsdGhpcy51cGRhdGVTaXplKSx0aGlzLnRleHR1cmVzPVtdLHRoaXMuZnJhbWVidWZmZXJzPVtdLHRoaXMuYnVmZmVyV3JpdGVJbmRleD0wLHRoaXMuYnVmZmVyUmVhZEluZGV4PTE7Zm9yKHZhciBhPWguYXJyYXlUeXBlLHU9YT9uZXcgYSh0aGlzLnJlc29sdXRpb24qdGhpcy5yZXNvbHV0aW9uKjQpOm51bGwsZD0wO2Q8MjtkKyspe3ZhciBjPXMuY3JlYXRlVGV4dHVyZSgpLGY9cy5jcmVhdGVGcmFtZWJ1ZmZlcigpO3MuYmluZEZyYW1lYnVmZmVyKHMuRlJBTUVCVUZGRVIsZikscy5iaW5kVGV4dHVyZShzLlRFWFRVUkVfMkQsYykscy50ZXhQYXJhbWV0ZXJpKHMuVEVYVFVSRV8yRCxzLlRFWFRVUkVfTUlOX0ZJTFRFUixoLmxpbmVhclN1cHBvcnQ/cy5MSU5FQVI6cy5ORUFSRVNUKSxzLnRleFBhcmFtZXRlcmkocy5URVhUVVJFXzJELHMuVEVYVFVSRV9NQUdfRklMVEVSLGgubGluZWFyU3VwcG9ydD9zLkxJTkVBUjpzLk5FQVJFU1QpLHMudGV4UGFyYW1ldGVyaShzLlRFWFRVUkVfMkQscy5URVhUVVJFX1dSQVBfUyxzLkNMQU1QX1RPX0VER0UpLHMudGV4UGFyYW1ldGVyaShzLlRFWFRVUkVfMkQscy5URVhUVVJFX1dSQVBfVCxzLkNMQU1QX1RPX0VER0UpLHMudGV4SW1hZ2UyRChzLlRFWFRVUkVfMkQsMCxzLlJHQkEsdGhpcy5yZXNvbHV0aW9uLHRoaXMucmVzb2x1dGlvbiwwLHMuUkdCQSxoLnR5cGUsdSkscy5mcmFtZWJ1ZmZlclRleHR1cmUyRChzLkZSQU1FQlVGRkVSLHMuQ09MT1JfQVRUQUNITUVOVDAscy5URVhUVVJFXzJELGMsMCksdGhpcy50ZXh0dXJlcy5wdXNoKGMpLHRoaXMuZnJhbWVidWZmZXJzLnB1c2goZil9dGhpcy5xdWFkPXMuY3JlYXRlQnVmZmVyKCkscy5iaW5kQnVmZmVyKHMuQVJSQVlfQlVGRkVSLHRoaXMucXVhZCkscy5idWZmZXJEYXRhKHMuQVJSQVlfQlVGRkVSLG5ldyBGbG9hdDMyQXJyYXkoWy0xLC0xLDEsLTEsMSwxLC0xLDFdKSxzLlNUQVRJQ19EUkFXKSx0aGlzLmluaXRTaGFkZXJzKCksdGhpcy5pbml0VGV4dHVyZSgpLHRoaXMuc2V0VHJhbnNwYXJlbnRUZXh0dXJlKCksdGhpcy5sb2FkSW1hZ2UoKSxzLmNsZWFyQ29sb3IoMCwwLDAsMCkscy5ibGVuZEZ1bmMocy5TUkNfQUxQSEEscy5PTkVfTUlOVVNfU1JDX0FMUEhBKSx0aGlzLnZpc2libGU9ITAsdGhpcy5ydW5uaW5nPSEwLHRoaXMuaW5pdGVkPSEwLHRoaXMuZGVzdHJveWVkPSExLHRoaXMuc2V0dXBQb2ludGVyRXZlbnRzKCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkpfTtjLkRFRkFVTFRTPXtpbWFnZVVybDpudWxsLHJlc29sdXRpb246MjU2LGRyb3BSYWRpdXM6MjAscGVydHVyYmFuY2U6LjAzLGludGVyYWN0aXZlOiEwLGNyb3NzT3JpZ2luOlwiXCJ9LGMucHJvdG90eXBlPXtzZXR1cFBvaW50ZXJFdmVudHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cmV0dXJuIHIudmlzaWJsZSYmci5ydW5uaW5nJiZyLmludGVyYWN0aXZlfWZ1bmN0aW9uIHQodCxpKXtlKCkmJnIuZHJvcEF0UG9pbnRlcih0LHIuZHJvcFJhZGl1cyooaT8xLjU6MSksaT8uMTQ6LjAxKX12YXIgcj10aGlzO3RoaXMuJGVsLm9uKFwibW91c2Vtb3ZlLnJpcHBsZXNcIixmdW5jdGlvbihlKXt0KGUpfSkub24oXCJ0b3VjaG1vdmUucmlwcGxlcyB0b3VjaHN0YXJ0LnJpcHBsZXNcIixmdW5jdGlvbihlKXtmb3IodmFyIHI9ZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLGk9MDtpPHIubGVuZ3RoO2krKyl0KHJbaV0pfSkub24oXCJtb3VzZWRvd24ucmlwcGxlc1wiLGZ1bmN0aW9uKGUpe3QoZSwhMCl9KX0sbG9hZEltYWdlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztzPXRoaXMuY29udGV4dDt2YXIgdD10aGlzLmltYWdlVXJsfHxuKHRoaXMub3JpZ2luYWxDc3NCYWNrZ3JvdW5kSW1hZ2UpfHxuKHRoaXMuJGVsLmNzcyhcImJhY2tncm91bmRJbWFnZVwiKSk7aWYodCE9dGhpcy5pbWFnZVNvdXJjZSlpZih0aGlzLmltYWdlU291cmNlPXQsdGhpcy5pbWFnZVNvdXJjZSl7dmFyIHI9bmV3IEltYWdlO3Iub25sb2FkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gMD09KGUmZS0xKX1zPWUuY29udGV4dDt2YXIgaT10KHIud2lkdGgpJiZ0KHIuaGVpZ2h0KT9zLlJFUEVBVDpzLkNMQU1QX1RPX0VER0U7cy5iaW5kVGV4dHVyZShzLlRFWFRVUkVfMkQsZS5iYWNrZ3JvdW5kVGV4dHVyZSkscy50ZXhQYXJhbWV0ZXJpKHMuVEVYVFVSRV8yRCxzLlRFWFRVUkVfV1JBUF9TLGkpLHMudGV4UGFyYW1ldGVyaShzLlRFWFRVUkVfMkQscy5URVhUVVJFX1dSQVBfVCxpKSxzLnRleEltYWdlMkQocy5URVhUVVJFXzJELDAscy5SR0JBLHMuUkdCQSxzLlVOU0lHTkVEX0JZVEUsciksZS5iYWNrZ3JvdW5kV2lkdGg9ci53aWR0aCxlLmJhY2tncm91bmRIZWlnaHQ9ci5oZWlnaHQsZS5oaWRlQ3NzQmFja2dyb3VuZCgpfSxyLm9uZXJyb3I9ZnVuY3Rpb24oKXtzPWUuY29udGV4dCxlLnNldFRyYW5zcGFyZW50VGV4dHVyZSgpfSxyLmNyb3NzT3JpZ2luPWEodGhpcy5pbWFnZVNvdXJjZSk/bnVsbDp0aGlzLmNyb3NzT3JpZ2luLHIuc3JjPXRoaXMuaW1hZ2VTb3VyY2V9ZWxzZSB0aGlzLnNldFRyYW5zcGFyZW50VGV4dHVyZSgpfSxzdGVwOmZ1bmN0aW9uKCl7cz10aGlzLmNvbnRleHQsdGhpcy52aXNpYmxlJiYodGhpcy5jb21wdXRlVGV4dHVyZUJvdW5kYXJpZXMoKSx0aGlzLnJ1bm5pbmcmJnRoaXMudXBkYXRlKCksdGhpcy5yZW5kZXIoKSl9LGRyYXdRdWFkOmZ1bmN0aW9uKCl7cy5iaW5kQnVmZmVyKHMuQVJSQVlfQlVGRkVSLHRoaXMucXVhZCkscy52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsMixzLkZMT0FULCExLDAsMCkscy5kcmF3QXJyYXlzKHMuVFJJQU5HTEVfRkFOLDAsNCl9LHJlbmRlcjpmdW5jdGlvbigpe3MuYmluZEZyYW1lYnVmZmVyKHMuRlJBTUVCVUZGRVIsbnVsbCkscy52aWV3cG9ydCgwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KSxzLmVuYWJsZShzLkJMRU5EKSxzLmNsZWFyKHMuQ09MT1JfQlVGRkVSX0JJVHxzLkRFUFRIX0JVRkZFUl9CSVQpLHMudXNlUHJvZ3JhbSh0aGlzLnJlbmRlclByb2dyYW0uaWQpLG8odGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSwwKSxvKHRoaXMudGV4dHVyZXNbMF0sMSkscy51bmlmb3JtMWYodGhpcy5yZW5kZXJQcm9ncmFtLmxvY2F0aW9ucy5wZXJ0dXJiYW5jZSx0aGlzLnBlcnR1cmJhbmNlKSxzLnVuaWZvcm0yZnYodGhpcy5yZW5kZXJQcm9ncmFtLmxvY2F0aW9ucy50b3BMZWZ0LHRoaXMucmVuZGVyUHJvZ3JhbS51bmlmb3Jtcy50b3BMZWZ0KSxzLnVuaWZvcm0yZnYodGhpcy5yZW5kZXJQcm9ncmFtLmxvY2F0aW9ucy5ib3R0b21SaWdodCx0aGlzLnJlbmRlclByb2dyYW0udW5pZm9ybXMuYm90dG9tUmlnaHQpLHMudW5pZm9ybTJmdih0aGlzLnJlbmRlclByb2dyYW0ubG9jYXRpb25zLmNvbnRhaW5lclJhdGlvLHRoaXMucmVuZGVyUHJvZ3JhbS51bmlmb3Jtcy5jb250YWluZXJSYXRpbykscy51bmlmb3JtMWkodGhpcy5yZW5kZXJQcm9ncmFtLmxvY2F0aW9ucy5zYW1wbGVyQmFja2dyb3VuZCwwKSxzLnVuaWZvcm0xaSh0aGlzLnJlbmRlclByb2dyYW0ubG9jYXRpb25zLnNhbXBsZXJSaXBwbGVzLDEpLHRoaXMuZHJhd1F1YWQoKSxzLmRpc2FibGUocy5CTEVORCl9LHVwZGF0ZTpmdW5jdGlvbigpe3Mudmlld3BvcnQoMCwwLHRoaXMucmVzb2x1dGlvbix0aGlzLnJlc29sdXRpb24pLHMuYmluZEZyYW1lYnVmZmVyKHMuRlJBTUVCVUZGRVIsdGhpcy5mcmFtZWJ1ZmZlcnNbdGhpcy5idWZmZXJXcml0ZUluZGV4XSksbyh0aGlzLnRleHR1cmVzW3RoaXMuYnVmZmVyUmVhZEluZGV4XSkscy51c2VQcm9ncmFtKHRoaXMudXBkYXRlUHJvZ3JhbS5pZCksdGhpcy5kcmF3UXVhZCgpLHRoaXMuc3dhcEJ1ZmZlckluZGljZXMoKX0sc3dhcEJ1ZmZlckluZGljZXM6ZnVuY3Rpb24oKXt0aGlzLmJ1ZmZlcldyaXRlSW5kZXg9MS10aGlzLmJ1ZmZlcldyaXRlSW5kZXgsdGhpcy5idWZmZXJSZWFkSW5kZXg9MS10aGlzLmJ1ZmZlclJlYWRJbmRleH0sY29tcHV0ZVRleHR1cmVCb3VuZGFyaWVzOmZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLiRlbC5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIiksbz10aGlzLiRlbC5jc3MoXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIiksbj1yKHRoaXMuJGVsLmNzcyhcImJhY2tncm91bmQtcG9zaXRpb25cIikpO2lmKFwiZml4ZWRcIj09bz8oKGU9e2xlZnQ6d2luZG93LnBhZ2VYT2Zmc2V0LHRvcDp3aW5kb3cucGFnZVlPZmZzZXR9KS53aWR0aD11LndpZHRoKCksZS5oZWlnaHQ9dS5oZWlnaHQoKSk6KChlPXRoaXMuJGVsLm9mZnNldCgpKS53aWR0aD10aGlzLiRlbC5pbm5lcldpZHRoKCksZS5oZWlnaHQ9dGhpcy4kZWwuaW5uZXJIZWlnaHQoKSksXCJjb3ZlclwiPT1pKXZhciBhPU1hdGgubWF4KGUud2lkdGgvdGhpcy5iYWNrZ3JvdW5kV2lkdGgsZS5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kSGVpZ2h0KSxzPXRoaXMuYmFja2dyb3VuZFdpZHRoKmEsaD10aGlzLmJhY2tncm91bmRIZWlnaHQqYTtlbHNlIGlmKFwiY29udGFpblwiPT1pKXZhciBhPU1hdGgubWluKGUud2lkdGgvdGhpcy5iYWNrZ3JvdW5kV2lkdGgsZS5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kSGVpZ2h0KSxzPXRoaXMuYmFja2dyb3VuZFdpZHRoKmEsaD10aGlzLmJhY2tncm91bmRIZWlnaHQqYTtlbHNle3ZhciBzPShpPWkuc3BsaXQoXCIgXCIpKVswXXx8XCJcIixoPWlbMV18fHM7dChzKT9zPWUud2lkdGgqcGFyc2VGbG9hdChzKS8xMDA6XCJhdXRvXCIhPXMmJihzPXBhcnNlRmxvYXQocykpLHQoaCk/aD1lLmhlaWdodCpwYXJzZUZsb2F0KGgpLzEwMDpcImF1dG9cIiE9aCYmKGg9cGFyc2VGbG9hdChoKSksXCJhdXRvXCI9PXMmJlwiYXV0b1wiPT1oPyhzPXRoaXMuYmFja2dyb3VuZFdpZHRoLGg9dGhpcy5iYWNrZ3JvdW5kSGVpZ2h0KTooXCJhdXRvXCI9PXMmJihzPXRoaXMuYmFja2dyb3VuZFdpZHRoKihoL3RoaXMuYmFja2dyb3VuZEhlaWdodCkpLFwiYXV0b1wiPT1oJiYoaD10aGlzLmJhY2tncm91bmRIZWlnaHQqKHMvdGhpcy5iYWNrZ3JvdW5kV2lkdGgpKSl9dmFyIGQ9blswXSxjPW5bMV07ZD10KGQpP2UubGVmdCsoZS53aWR0aC1zKSpwYXJzZUZsb2F0KGQpLzEwMDplLmxlZnQrcGFyc2VGbG9hdChkKSxjPXQoYyk/ZS50b3ArKGUuaGVpZ2h0LWgpKnBhcnNlRmxvYXQoYykvMTAwOmUudG9wK3BhcnNlRmxvYXQoYyk7dmFyIGY9dGhpcy4kZWwub2Zmc2V0KCk7dGhpcy5yZW5kZXJQcm9ncmFtLnVuaWZvcm1zLnRvcExlZnQ9bmV3IEZsb2F0MzJBcnJheShbKGYubGVmdC1kKS9zLChmLnRvcC1jKS9oXSksdGhpcy5yZW5kZXJQcm9ncmFtLnVuaWZvcm1zLmJvdHRvbVJpZ2h0PW5ldyBGbG9hdDMyQXJyYXkoW3RoaXMucmVuZGVyUHJvZ3JhbS51bmlmb3Jtcy50b3BMZWZ0WzBdK3RoaXMuJGVsLmlubmVyV2lkdGgoKS9zLHRoaXMucmVuZGVyUHJvZ3JhbS51bmlmb3Jtcy50b3BMZWZ0WzFdK3RoaXMuJGVsLmlubmVySGVpZ2h0KCkvaF0pO3ZhciBsPU1hdGgubWF4KHRoaXMuY2FudmFzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7dGhpcy5yZW5kZXJQcm9ncmFtLnVuaWZvcm1zLmNvbnRhaW5lclJhdGlvPW5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoL2wsdGhpcy5jYW52YXMuaGVpZ2h0L2xdKX0saW5pdFNoYWRlcnM6ZnVuY3Rpb24oKXt2YXIgZT1bXCJhdHRyaWJ1dGUgdmVjMiB2ZXJ0ZXg7XCIsXCJ2YXJ5aW5nIHZlYzIgY29vcmQ7XCIsXCJ2b2lkIG1haW4oKSB7XCIsXCJjb29yZCA9IHZlcnRleCAqIDAuNSArIDAuNTtcIixcImdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDAuMCwgMS4wKTtcIixcIn1cIl0uam9pbihcIlxcblwiKTt0aGlzLmRyb3BQcm9ncmFtPWkoZSxbXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIsXCJjb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzO1wiLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcIixcInVuaWZvcm0gdmVjMiBjZW50ZXI7XCIsXCJ1bmlmb3JtIGZsb2F0IHJhZGl1cztcIixcInVuaWZvcm0gZmxvYXQgc3RyZW5ndGg7XCIsXCJ2YXJ5aW5nIHZlYzIgY29vcmQ7XCIsXCJ2b2lkIG1haW4oKSB7XCIsXCJ2ZWM0IGluZm8gPSB0ZXh0dXJlMkQodGV4dHVyZSwgY29vcmQpO1wiLFwiZmxvYXQgZHJvcCA9IG1heCgwLjAsIDEuMCAtIGxlbmd0aChjZW50ZXIgKiAwLjUgKyAwLjUgLSBjb29yZCkgLyByYWRpdXMpO1wiLFwiZHJvcCA9IDAuNSAtIGNvcyhkcm9wICogUEkpICogMC41O1wiLFwiaW5mby5yICs9IGRyb3AgKiBzdHJlbmd0aDtcIixcImdsX0ZyYWdDb2xvciA9IGluZm87XCIsXCJ9XCJdLmpvaW4oXCJcXG5cIikpLHRoaXMudXBkYXRlUHJvZ3JhbT1pKGUsW1wicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1wiLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcIixcInVuaWZvcm0gdmVjMiBkZWx0YTtcIixcInZhcnlpbmcgdmVjMiBjb29yZDtcIixcInZvaWQgbWFpbigpIHtcIixcInZlYzQgaW5mbyA9IHRleHR1cmUyRCh0ZXh0dXJlLCBjb29yZCk7XCIsXCJ2ZWMyIGR4ID0gdmVjMihkZWx0YS54LCAwLjApO1wiLFwidmVjMiBkeSA9IHZlYzIoMC4wLCBkZWx0YS55KTtcIixcImZsb2F0IGF2ZXJhZ2UgPSAoXCIsXCJ0ZXh0dXJlMkQodGV4dHVyZSwgY29vcmQgLSBkeCkuciArXCIsXCJ0ZXh0dXJlMkQodGV4dHVyZSwgY29vcmQgLSBkeSkuciArXCIsXCJ0ZXh0dXJlMkQodGV4dHVyZSwgY29vcmQgKyBkeCkuciArXCIsXCJ0ZXh0dXJlMkQodGV4dHVyZSwgY29vcmQgKyBkeSkuclwiLFwiKSAqIDAuMjU7XCIsXCJpbmZvLmcgKz0gKGF2ZXJhZ2UgLSBpbmZvLnIpICogMi4wO1wiLFwiaW5mby5nICo9IDAuOTk1O1wiLFwiaW5mby5yICs9IGluZm8uZztcIixcImdsX0ZyYWdDb2xvciA9IGluZm87XCIsXCJ9XCJdLmpvaW4oXCJcXG5cIikpLHMudW5pZm9ybTJmdih0aGlzLnVwZGF0ZVByb2dyYW0ubG9jYXRpb25zLmRlbHRhLHRoaXMudGV4dHVyZURlbHRhKSx0aGlzLnJlbmRlclByb2dyYW09aShbXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIsXCJhdHRyaWJ1dGUgdmVjMiB2ZXJ0ZXg7XCIsXCJ1bmlmb3JtIHZlYzIgdG9wTGVmdDtcIixcInVuaWZvcm0gdmVjMiBib3R0b21SaWdodDtcIixcInVuaWZvcm0gdmVjMiBjb250YWluZXJSYXRpbztcIixcInZhcnlpbmcgdmVjMiByaXBwbGVzQ29vcmQ7XCIsXCJ2YXJ5aW5nIHZlYzIgYmFja2dyb3VuZENvb3JkO1wiLFwidm9pZCBtYWluKCkge1wiLFwiYmFja2dyb3VuZENvb3JkID0gbWl4KHRvcExlZnQsIGJvdHRvbVJpZ2h0LCB2ZXJ0ZXggKiAwLjUgKyAwLjUpO1wiLFwiYmFja2dyb3VuZENvb3JkLnkgPSAxLjAgLSBiYWNrZ3JvdW5kQ29vcmQueTtcIixcInJpcHBsZXNDb29yZCA9IHZlYzIodmVydGV4LngsIC12ZXJ0ZXgueSkgKiBjb250YWluZXJSYXRpbyAqIDAuNSArIDAuNTtcIixcImdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgueCwgLXZlcnRleC55LCAwLjAsIDEuMCk7XCIsXCJ9XCJdLmpvaW4oXCJcXG5cIiksW1wicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1wiLFwidW5pZm9ybSBzYW1wbGVyMkQgc2FtcGxlckJhY2tncm91bmQ7XCIsXCJ1bmlmb3JtIHNhbXBsZXIyRCBzYW1wbGVyUmlwcGxlcztcIixcInVuaWZvcm0gdmVjMiBkZWx0YTtcIixcInVuaWZvcm0gZmxvYXQgcGVydHVyYmFuY2U7XCIsXCJ2YXJ5aW5nIHZlYzIgcmlwcGxlc0Nvb3JkO1wiLFwidmFyeWluZyB2ZWMyIGJhY2tncm91bmRDb29yZDtcIixcInZvaWQgbWFpbigpIHtcIixcImZsb2F0IGhlaWdodCA9IHRleHR1cmUyRChzYW1wbGVyUmlwcGxlcywgcmlwcGxlc0Nvb3JkKS5yO1wiLFwiZmxvYXQgaGVpZ2h0WCA9IHRleHR1cmUyRChzYW1wbGVyUmlwcGxlcywgdmVjMihyaXBwbGVzQ29vcmQueCArIGRlbHRhLngsIHJpcHBsZXNDb29yZC55KSkucjtcIixcImZsb2F0IGhlaWdodFkgPSB0ZXh0dXJlMkQoc2FtcGxlclJpcHBsZXMsIHZlYzIocmlwcGxlc0Nvb3JkLngsIHJpcHBsZXNDb29yZC55ICsgZGVsdGEueSkpLnI7XCIsXCJ2ZWMzIGR4ID0gdmVjMyhkZWx0YS54LCBoZWlnaHRYIC0gaGVpZ2h0LCAwLjApO1wiLFwidmVjMyBkeSA9IHZlYzMoMC4wLCBoZWlnaHRZIC0gaGVpZ2h0LCBkZWx0YS55KTtcIixcInZlYzIgb2Zmc2V0ID0gLW5vcm1hbGl6ZShjcm9zcyhkeSwgZHgpKS54ejtcIixcImZsb2F0IHNwZWN1bGFyID0gcG93KG1heCgwLjAsIGRvdChvZmZzZXQsIG5vcm1hbGl6ZSh2ZWMyKC0wLjYsIDEuMCkpKSksIDQuMCk7XCIsXCJnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoc2FtcGxlckJhY2tncm91bmQsIGJhY2tncm91bmRDb29yZCArIG9mZnNldCAqIHBlcnR1cmJhbmNlKSArIHNwZWN1bGFyO1wiLFwifVwiXS5qb2luKFwiXFxuXCIpKSxzLnVuaWZvcm0yZnYodGhpcy5yZW5kZXJQcm9ncmFtLmxvY2F0aW9ucy5kZWx0YSx0aGlzLnRleHR1cmVEZWx0YSl9LGluaXRUZXh0dXJlOmZ1bmN0aW9uKCl7dGhpcy5iYWNrZ3JvdW5kVGV4dHVyZT1zLmNyZWF0ZVRleHR1cmUoKSxzLmJpbmRUZXh0dXJlKHMuVEVYVFVSRV8yRCx0aGlzLmJhY2tncm91bmRUZXh0dXJlKSxzLnBpeGVsU3RvcmVpKHMuVU5QQUNLX0ZMSVBfWV9XRUJHTCwxKSxzLnRleFBhcmFtZXRlcmkocy5URVhUVVJFXzJELHMuVEVYVFVSRV9NQUdfRklMVEVSLHMuTElORUFSKSxzLnRleFBhcmFtZXRlcmkocy5URVhUVVJFXzJELHMuVEVYVFVSRV9NSU5fRklMVEVSLHMuTElORUFSKX0sc2V0VHJhbnNwYXJlbnRUZXh0dXJlOmZ1bmN0aW9uKCl7cy5iaW5kVGV4dHVyZShzLlRFWFRVUkVfMkQsdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZSkscy50ZXhJbWFnZTJEKHMuVEVYVFVSRV8yRCwwLHMuUkdCQSxzLlJHQkEscy5VTlNJR05FRF9CWVRFLGQpfSxoaWRlQ3NzQmFja2dyb3VuZDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuJGVsWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZTtcIm5vbmVcIiE9ZSYmKHRoaXMub3JpZ2luYWxJbmxpbmVDc3M9ZSx0aGlzLm9yaWdpbmFsQ3NzQmFja2dyb3VuZEltYWdlPXRoaXMuJGVsLmNzcyhcImJhY2tncm91bmRJbWFnZVwiKSx0aGlzLiRlbC5jc3MoXCJiYWNrZ3JvdW5kSW1hZ2VcIixcIm5vbmVcIikpfSxyZXN0b3JlQ3NzQmFja2dyb3VuZDpmdW5jdGlvbigpe3RoaXMuJGVsLmNzcyhcImJhY2tncm91bmRJbWFnZVwiLHRoaXMub3JpZ2luYWxJbmxpbmVDc3N8fFwiXCIpfSxkcm9wQXRQb2ludGVyOmZ1bmN0aW9uKGUsdCxyKXt2YXIgaT1wYXJzZUludCh0aGlzLiRlbC5jc3MoXCJib3JkZXItbGVmdC13aWR0aFwiKSl8fDAsbz1wYXJzZUludCh0aGlzLiRlbC5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpKXx8MDt0aGlzLmRyb3AoZS5wYWdlWC10aGlzLiRlbC5vZmZzZXQoKS5sZWZ0LWksZS5wYWdlWS10aGlzLiRlbC5vZmZzZXQoKS50b3Atbyx0LHIpfSxkcm9wOmZ1bmN0aW9uKGUsdCxyLGkpe3M9dGhpcy5jb250ZXh0O3ZhciBuPXRoaXMuJGVsLmlubmVyV2lkdGgoKSxhPXRoaXMuJGVsLmlubmVySGVpZ2h0KCksdT1NYXRoLm1heChuLGEpO3IvPXU7dmFyIGg9bmV3IEZsb2F0MzJBcnJheShbKDIqZS1uKS91LChhLTIqdCkvdV0pO3Mudmlld3BvcnQoMCwwLHRoaXMucmVzb2x1dGlvbix0aGlzLnJlc29sdXRpb24pLHMuYmluZEZyYW1lYnVmZmVyKHMuRlJBTUVCVUZGRVIsdGhpcy5mcmFtZWJ1ZmZlcnNbdGhpcy5idWZmZXJXcml0ZUluZGV4XSksbyh0aGlzLnRleHR1cmVzW3RoaXMuYnVmZmVyUmVhZEluZGV4XSkscy51c2VQcm9ncmFtKHRoaXMuZHJvcFByb2dyYW0uaWQpLHMudW5pZm9ybTJmdih0aGlzLmRyb3BQcm9ncmFtLmxvY2F0aW9ucy5jZW50ZXIsaCkscy51bmlmb3JtMWYodGhpcy5kcm9wUHJvZ3JhbS5sb2NhdGlvbnMucmFkaXVzLHIpLHMudW5pZm9ybTFmKHRoaXMuZHJvcFByb2dyYW0ubG9jYXRpb25zLnN0cmVuZ3RoLGkpLHRoaXMuZHJhd1F1YWQoKSx0aGlzLnN3YXBCdWZmZXJJbmRpY2VzKCl9LHVwZGF0ZVNpemU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRlbC5pbm5lcldpZHRoKCksdD10aGlzLiRlbC5pbm5lckhlaWdodCgpO2U9PXRoaXMuY2FudmFzLndpZHRoJiZ0PT10aGlzLmNhbnZhcy5oZWlnaHR8fCh0aGlzLmNhbnZhcy53aWR0aD1lLHRoaXMuY2FudmFzLmhlaWdodD10KX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuJGVsLm9mZihcIi5yaXBwbGVzXCIpLnJlbW92ZUNsYXNzKFwianF1ZXJ5LXJpcHBsZXNcIikucmVtb3ZlRGF0YShcInJpcHBsZXNcIikscz1udWxsLGUod2luZG93KS5vZmYoXCJyZXNpemVcIix0aGlzLnVwZGF0ZVNpemUpLHRoaXMuJGNhbnZhcy5yZW1vdmUoKSx0aGlzLnJlc3RvcmVDc3NCYWNrZ3JvdW5kKCksdGhpcy5kZXN0cm95ZWQ9ITB9LHNob3c6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITAsdGhpcy4kY2FudmFzLnNob3coKSx0aGlzLmhpZGVDc3NCYWNrZ3JvdW5kKCl9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLnZpc2libGU9ITEsdGhpcy4kY2FudmFzLmhpZGUoKSx0aGlzLnJlc3RvcmVDc3NCYWNrZ3JvdW5kKCl9LHBhdXNlOmZ1bmN0aW9uKCl7dGhpcy5ydW5uaW5nPSExfSxwbGF5OmZ1bmN0aW9uKCl7dGhpcy5ydW5uaW5nPSEwfSxzZXQ6ZnVuY3Rpb24oZSx0KXtzd2l0Y2goZSl7Y2FzZVwiZHJvcFJhZGl1c1wiOmNhc2VcInBlcnR1cmJhbmNlXCI6Y2FzZVwiaW50ZXJhY3RpdmVcIjpjYXNlXCJjcm9zc09yaWdpblwiOnRoaXNbZV09dDticmVhaztjYXNlXCJpbWFnZVVybFwiOnRoaXMuaW1hZ2VVcmw9dCx0aGlzLmxvYWRJbWFnZSgpfX19O3ZhciBmPWUuZm4ucmlwcGxlcztlLmZuLnJpcHBsZXM9ZnVuY3Rpb24odCl7aWYoIWgpdGhyb3cgbmV3IEVycm9yKFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViR0wsIHRoZSBPRVNfdGV4dHVyZV9mbG9hdCBleHRlbnNpb24gb3IgcmVuZGVyaW5nIHRvIGZsb2F0aW5nIHBvaW50IHRleHR1cmVzLlwiKTt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjE/QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpOnZvaWQgMDtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKSxvPWkuZGF0YShcInJpcHBsZXNcIiksbj1lLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGkuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0KTsob3x8XCJzdHJpbmdcIiE9dHlwZW9mIHQpJiYobz9cInN0cmluZ1wiPT10eXBlb2YgdCYmYy5wcm90b3R5cGVbdF0uYXBwbHkobyxyKTppLmRhdGEoXCJyaXBwbGVzXCIsbz1uZXcgYyh0aGlzLG4pKSl9KX0sZS5mbi5yaXBwbGVzLkNvbnN0cnVjdG9yPWMsZS5mbi5yaXBwbGVzLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5mbi5yaXBwbGVzPWYsdGhpc319KTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcIi4uL3FyY29kZS5taW4uanNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5LnJpcHBsZXMvZGlzdC9qcXVlcnkucmlwcGxlcy1taW5cIjtcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKFwiLm5hdl9fYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhbmltYXRlXCIpO1xuXG4gICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwic2hvdy1uYXZcIikpIHtcbiAgICAgICQoXCJib2R5XCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcInNob3ctbmF2XCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImhpZGUtbmF2XCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGUtbmF2XCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcImJvZHlcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiaGlkZS1uYXZcIilcbiAgICAgICAgLmFkZENsYXNzKFwic2hvdy1uYXZcIik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgJChcIi5uYXZfX21hbmlmZXN0bywgLm1fX2Nsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcInNob3ctbWFuaWZlc3RvXCIpKSB7XG4gICAgICAkKFwiYm9keVwiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzaG93LW1hbmlmZXN0b1wiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJoaWRlLW1hbmlmZXN0b1wiKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRlLW1hbmlmZXN0b1wiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCJib2R5XCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImhpZGUtbWFuaWZlc3RvXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcInNob3ctbWFuaWZlc3RvXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gICQoXCIjY2Fyb3VzZWwtaG9tZXBhZ2VcIikucmlwcGxlcyh7XG4gICAgcmVzb2x1dGlvbjogMTAyNCxcbiAgICAvLyBkcm9wUmFkaXVzOiAyMCxcbiAgICBwZXJ0dXJiYW5jZTogMC4wMVxuICB9KTtcblxuICAkKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkZXZlbnRfdXJsID0gJChcIiNldmVudF91cmxcIik7XG4gICAgaWYgKCEkZXZlbnRfdXJsLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgICRldmVudF91cmwgPSBKU09OLnBhcnNlKCRldmVudF91cmwudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGlmIGludmFsaWQganNvblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBRUkNvZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxcmNvZGVcIiksICRldmVudF91cmwpO1xuICB9KTtcblxuICAkKFwiI3RlYW1Nb2RhbFwiKS5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBHZXQgdGhlIGJ1dHRvbiB0aGF0IHRyaWdnZXJlZCB0aGUgbW9kYWxcbiAgICBjb25zdCBidXR0b24gPSAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgLy8gUmVzZXQgdmFsdWVzXG4gICAgbGV0IHRlYW1PYmogPSBudWxsO1xuICAgICQodGhpcylcbiAgICAgIC5maW5kKFwiLm1vZGFsLWVtYWlsXCIpXG4gICAgICAuaHRtbChcIlwiKTtcbiAgICAkKHRoaXMpXG4gICAgICAuZmluZChcIi5tb2RhbC13ZWJzaXRlXCIpXG4gICAgICAuaHRtbChcIlwiKTtcbiAgICAkKHRoaXMpXG4gICAgICAuZmluZChcIi5tb2RhbC1mYWNlYm9va1wiKVxuICAgICAgLmh0bWwoXCJcIik7XG4gICAgJCh0aGlzKVxuICAgICAgLmZpbmQoXCIubW9kYWwtbGlua2VkaW5cIilcbiAgICAgIC5odG1sKFwiXCIpO1xuICAgICQodGhpcylcbiAgICAgIC5maW5kKFwiLm1vZGFsLXdlaWJvXCIpXG4gICAgICAuaHRtbChcIlwiKTtcblxuICAgIHRlYW1PYmogPSB7XG4gICAgICBuYW1lOiBidXR0b24uc2libGluZ3MoXCIudGVhbS1tZW1iZXJfX25hbWVcIikudGV4dCgpLFxuICAgICAgcG9zOiBidXR0b24uc2libGluZ3MoXCIudGVhbS1tZW1iZXJfX3Bvc1wiKS50ZXh0KCksXG4gICAgICB3aHk6IGJ1dHRvbi5zaWJsaW5ncyhcIi50ZWFtLW1lbWJlcl9fd2h5XCIpLnRleHQoKSxcbiAgICAgIGVtYWlsOiAkLnRyaW0oYnV0dG9uLnNpYmxpbmdzKFwiLnRlYW0tbWVtYmVyX19lbWFpbFwiKS50ZXh0KCkpLFxuICAgICAgd2ViOiAkLnRyaW0oYnV0dG9uLnNpYmxpbmdzKFwiLnRlYW0tbWVtYmVyX193ZWJzaXRlXCIpLnRleHQoKSksXG4gICAgICBmYjogJC50cmltKGJ1dHRvbi5zaWJsaW5ncyhcIi50ZWFtLW1lbWJlcl9fZmFjZWJvb2tcIikudGV4dCgpKSxcbiAgICAgIGluOiAkLnRyaW0oYnV0dG9uLnNpYmxpbmdzKFwiLnRlYW0tbWVtYmVyX19saW5rZWRpblwiKS50ZXh0KCkpLFxuICAgICAgd2I6ICQudHJpbShidXR0b24uc2libGluZ3MoXCIudGVhbS1tZW1iZXJfX3dlaWJvXCIpLnRleHQoKSlcbiAgICB9O1xuXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRlYW1PYmopKSB7XG4gICAgICBsZXQgdmFsID0gdGVhbU9ialtrZXldO1xuICAgICAgaWYgKGtleSA9PT0gXCJuYW1lXCIgJiYgdmFsKSB7XG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAuZmluZChcIi5tb2RhbC10aXRsZVwiKVxuICAgICAgICAgIC50ZXh0KHRlYW1PYmoubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcInBvc1wiICYmIHZhbCkge1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLmZpbmQoXCIubW9kYWwtcG9zXCIpXG4gICAgICAgICAgLnRleHQodGVhbU9iai5wb3MpO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJ3aHlcIiAmJiB2YWwpIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5maW5kKFwiLm1vZGFsLXdoeVwiKVxuICAgICAgICAgIC50ZXh0KHRlYW1PYmoud2h5KTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiZW1haWxcIiAmJiB2YWwpIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5maW5kKFwiLm1vZGFsLWVtYWlsXCIpXG4gICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgPGEgaHJlZj1cIm1haWx0bzoke3RlYW1PYmouZW1haWx9XCI+PGkgY2xhc3M9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+PC9hPmBcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJ3ZWJcIiAmJiB2YWwpIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5maW5kKFwiLm1vZGFsLXdlYnNpdGVcIilcbiAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGA8YSBocmVmPVwiJHt0ZWFtT2JqLndlYn1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtZ2xvYmVcIj48L2k+PC9hPmBcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJmYlwiICYmIHZhbCkge1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLmZpbmQoXCIubW9kYWwtZmFjZWJvb2tcIilcbiAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGA8YSBocmVmPVwiJHt0ZWFtT2JqLmZifVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPjwvYT5gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiaW5cIiAmJiB2YWwpIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5maW5kKFwiLm1vZGFsLWxpbmtlZGluXCIpXG4gICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgPGEgaHJlZj1cIiR7dGVhbU9iai5pbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+PC9hPmBcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJ3YlwiICYmIHZhbCkge1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLmZpbmQoXCIubW9kYWwtd2VpYm9cIilcbiAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGA8YSBocmVmPVwiJHt0ZWFtT2JqLndifVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48aSBjbGFzcz1cImZhYiBmYS13ZWlib1wiPjwvaT48L2E+YFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiLnNoYXJlLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBsaW5rID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICB3aW5kb3cub3BlbihsaW5rLCBcIlwiLCBcIndpZHRoPTYwMCxoZWlnaHQ9MzAwXCIpO1xuICB9KTtcblxuICBjb25zdCBmb3JtX2ludGVyZXN0X2xhc3QgPSAkKFwiI2Zvcm0taW50ZXJlc3QgLndwY2Y3LWxpc3QtaXRlbS5sYXN0IGlucHV0XCIpO1xuICBjb25zdCBmb3JtX2ludGVyZXN0X290aGVyID0gJChcIiNmb3JtLWludGVyZXN0LW90aGVyXCIpO1xuXG4gIGNvbnN0IGZvcm1fZm91bmQgPSAkKFwiI2Zvcm0tZm91bmRcIik7XG4gIGNvbnN0IGZvcm1fZm91bmRfb3RoZXIgPSAkKFwiI2Zvcm0tZm91bmQtb3RoZXJcIik7XG5cbiAgZm9ybV9pbnRlcmVzdF9sYXN0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgICAgZm9ybV9pbnRlcmVzdF9vdGhlci5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1faW50ZXJlc3Rfb3RoZXIuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9ybV9mb3VuZC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxldCByYWRpb1RleHQgPSAkKCdpbnB1dFtuYW1lPVwiZm9ybS1mb3VuZFwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgaWYgKHJhZGlvVGV4dCA9PSBcIk90aGVyXCIpIHtcbiAgICAgIGZvcm1fZm91bmRfb3RoZXIuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtX2ZvdW5kX290aGVyLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcInNob3ctbmF2XCIpKSB7XG4gICAgICAkKFwiYm9keVwiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzaG93LW5hdlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJoaWRlLW5hdlwiKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRlLW5hdlwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCJib2R5XCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImhpZGUtbmF2XCIpXG4gICAgICAgIC5hZGRDbGFzcyhcInNob3ctbmF2XCIpO1xuICAgIH1cbiAgfVxufSk7XG4iLCJ2YXIgUVJDb2RlOyFmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dGhpcy5tb2RlPWMuTU9ERV84QklUX0JZVEUsdGhpcy5kYXRhPWEsdGhpcy5wYXJzZWREYXRhPVtdO2Zvcih2YXIgYj1bXSxkPTAsZT10aGlzLmRhdGEubGVuZ3RoO2U+ZDtkKyspe3ZhciBmPXRoaXMuZGF0YS5jaGFyQ29kZUF0KGQpO2Y+NjU1MzY/KGJbMF09MjQwfCgxODM1MDA4JmYpPj4+MTgsYlsxXT0xMjh8KDI1ODA0OCZmKT4+PjEyLGJbMl09MTI4fCg0MDMyJmYpPj4+NixiWzNdPTEyOHw2MyZmKTpmPjIwNDg/KGJbMF09MjI0fCg2MTQ0MCZmKT4+PjEyLGJbMV09MTI4fCg0MDMyJmYpPj4+NixiWzJdPTEyOHw2MyZmKTpmPjEyOD8oYlswXT0xOTJ8KDE5ODQmZik+Pj42LGJbMV09MTI4fDYzJmYpOmJbMF09Zix0aGlzLnBhcnNlZERhdGE9dGhpcy5wYXJzZWREYXRhLmNvbmNhdChiKX10aGlzLnBhcnNlZERhdGEubGVuZ3RoIT10aGlzLmRhdGEubGVuZ3RoJiYodGhpcy5wYXJzZWREYXRhLnVuc2hpZnQoMTkxKSx0aGlzLnBhcnNlZERhdGEudW5zaGlmdCgxODcpLHRoaXMucGFyc2VkRGF0YS51bnNoaWZ0KDIzOSkpfWZ1bmN0aW9uIGIoYSxiKXt0aGlzLnR5cGVOdW1iZXI9YSx0aGlzLmVycm9yQ29ycmVjdExldmVsPWIsdGhpcy5tb2R1bGVzPW51bGwsdGhpcy5tb2R1bGVDb3VudD0wLHRoaXMuZGF0YUNhY2hlPW51bGwsdGhpcy5kYXRhTGlzdD1bXX1mdW5jdGlvbiBpKGEsYil7aWYodm9pZCAwPT1hLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYS5sZW5ndGgrXCIvXCIrYik7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aCYmMD09YVtjXTspYysrO3RoaXMubnVtPW5ldyBBcnJheShhLmxlbmd0aC1jK2IpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGgtYztkKyspdGhpcy5udW1bZF09YVtkK2NdfWZ1bmN0aW9uIGooYSxiKXt0aGlzLnRvdGFsQ291bnQ9YSx0aGlzLmRhdGFDb3VudD1ifWZ1bmN0aW9uIGsoKXt0aGlzLmJ1ZmZlcj1bXSx0aGlzLmxlbmd0aD0wfWZ1bmN0aW9uIG0oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfWZ1bmN0aW9uIG4oKXt2YXIgYT0hMSxiPW5hdmlnYXRvci51c2VyQWdlbnQ7cmV0dXJuL2FuZHJvaWQvaS50ZXN0KGIpJiYoYT0hMCxhTWF0PWIudG9TdHJpbmcoKS5tYXRjaCgvYW5kcm9pZCAoWzAtOV1cXC5bMC05XSkvaSksYU1hdCYmYU1hdFsxXSYmKGE9cGFyc2VGbG9hdChhTWF0WzFdKSkpLGF9ZnVuY3Rpb24gcihhLGIpe2Zvcih2YXIgYz0xLGU9cyhhKSxmPTAsZz1sLmxlbmd0aDtnPj1mO2YrKyl7dmFyIGg9MDtzd2l0Y2goYil7Y2FzZSBkLkw6aD1sW2ZdWzBdO2JyZWFrO2Nhc2UgZC5NOmg9bFtmXVsxXTticmVhaztjYXNlIGQuUTpoPWxbZl1bMl07YnJlYWs7Y2FzZSBkLkg6aD1sW2ZdWzNdfWlmKGg+PWUpYnJlYWs7YysrfWlmKGM+bC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxvbmcgZGF0YVwiKTtyZXR1cm4gY31mdW5jdGlvbiBzKGEpe3ZhciBiPWVuY29kZVVSSShhKS50b1N0cmluZygpLnJlcGxhY2UoL1xcJVswLTlhLWZBLUZdezJ9L2csXCJhXCIpO3JldHVybiBiLmxlbmd0aCsoYi5sZW5ndGghPWE/MzowKX1hLnByb3RvdHlwZT17Z2V0TGVuZ3RoOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyc2VkRGF0YS5sZW5ndGh9LHdyaXRlOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9dGhpcy5wYXJzZWREYXRhLmxlbmd0aDtjPmI7YisrKWEucHV0KHRoaXMucGFyc2VkRGF0YVtiXSw4KX19LGIucHJvdG90eXBlPXthZGREYXRhOmZ1bmN0aW9uKGIpe3ZhciBjPW5ldyBhKGIpO3RoaXMuZGF0YUxpc3QucHVzaChjKSx0aGlzLmRhdGFDYWNoZT1udWxsfSxpc0Rhcms6ZnVuY3Rpb24oYSxiKXtpZigwPmF8fHRoaXMubW9kdWxlQ291bnQ8PWF8fDA+Ynx8dGhpcy5tb2R1bGVDb3VudDw9Yil0aHJvdyBuZXcgRXJyb3IoYStcIixcIitiKTtyZXR1cm4gdGhpcy5tb2R1bGVzW2FdW2JdfSxnZXRNb2R1bGVDb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZHVsZUNvdW50fSxtYWtlOmZ1bmN0aW9uKCl7dGhpcy5tYWtlSW1wbCghMSx0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKX0sbWFrZUltcGw6ZnVuY3Rpb24oYSxjKXt0aGlzLm1vZHVsZUNvdW50PTQqdGhpcy50eXBlTnVtYmVyKzE3LHRoaXMubW9kdWxlcz1uZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7Zm9yKHZhciBkPTA7ZDx0aGlzLm1vZHVsZUNvdW50O2QrKyl7dGhpcy5tb2R1bGVzW2RdPW5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtmb3IodmFyIGU9MDtlPHRoaXMubW9kdWxlQ291bnQ7ZSsrKXRoaXMubW9kdWxlc1tkXVtlXT1udWxsfXRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLDApLHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50LTcsMCksdGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsdGhpcy5tb2R1bGVDb3VudC03KSx0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCksdGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKSx0aGlzLnNldHVwVHlwZUluZm8oYSxjKSx0aGlzLnR5cGVOdW1iZXI+PTcmJnRoaXMuc2V0dXBUeXBlTnVtYmVyKGEpLG51bGw9PXRoaXMuZGF0YUNhY2hlJiYodGhpcy5kYXRhQ2FjaGU9Yi5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlcix0aGlzLmVycm9yQ29ycmVjdExldmVsLHRoaXMuZGF0YUxpc3QpKSx0aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsYyl9LHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm46ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9LTE7Nz49YztjKyspaWYoISgtMT49YStjfHx0aGlzLm1vZHVsZUNvdW50PD1hK2MpKWZvcih2YXIgZD0tMTs3Pj1kO2QrKyktMT49YitkfHx0aGlzLm1vZHVsZUNvdW50PD1iK2R8fCh0aGlzLm1vZHVsZXNbYStjXVtiK2RdPWM+PTAmJjY+PWMmJigwPT1kfHw2PT1kKXx8ZD49MCYmNj49ZCYmKDA9PWN8fDY9PWMpfHxjPj0yJiY0Pj1jJiZkPj0yJiY0Pj1kPyEwOiExKX0sZ2V0QmVzdE1hc2tQYXR0ZXJuOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj0wLGM9MDs4PmM7YysrKXt0aGlzLm1ha2VJbXBsKCEwLGMpO3ZhciBkPWYuZ2V0TG9zdFBvaW50KHRoaXMpOygwPT1jfHxhPmQpJiYoYT1kLGI9Yyl9cmV0dXJuIGJ9LGNyZWF0ZU1vdmllQ2xpcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5jcmVhdGVFbXB0eU1vdmllQ2xpcChiLGMpLGU9MTt0aGlzLm1ha2UoKTtmb3IodmFyIGY9MDtmPHRoaXMubW9kdWxlcy5sZW5ndGg7ZisrKWZvcih2YXIgZz1mKmUsaD0wO2g8dGhpcy5tb2R1bGVzW2ZdLmxlbmd0aDtoKyspe3ZhciBpPWgqZSxqPXRoaXMubW9kdWxlc1tmXVtoXTtqJiYoZC5iZWdpbkZpbGwoMCwxMDApLGQubW92ZVRvKGksZyksZC5saW5lVG8oaStlLGcpLGQubGluZVRvKGkrZSxnK2UpLGQubGluZVRvKGksZytlKSxkLmVuZEZpbGwoKSl9cmV0dXJuIGR9LHNldHVwVGltaW5nUGF0dGVybjpmdW5jdGlvbigpe2Zvcih2YXIgYT04O2E8dGhpcy5tb2R1bGVDb3VudC04O2ErKyludWxsPT10aGlzLm1vZHVsZXNbYV1bNl0mJih0aGlzLm1vZHVsZXNbYV1bNl09MD09YSUyKTtmb3IodmFyIGI9ODtiPHRoaXMubW9kdWxlQ291bnQtODtiKyspbnVsbD09dGhpcy5tb2R1bGVzWzZdW2JdJiYodGhpcy5tb2R1bGVzWzZdW2JdPTA9PWIlMil9LHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPWYuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMudHlwZU51bWJlciksYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2JdLGU9YVtjXTtpZihudWxsPT10aGlzLm1vZHVsZXNbZF1bZV0pZm9yKHZhciBnPS0yOzI+PWc7ZysrKWZvcih2YXIgaD0tMjsyPj1oO2grKyl0aGlzLm1vZHVsZXNbZCtnXVtlK2hdPS0yPT1nfHwyPT1nfHwtMj09aHx8Mj09aHx8MD09ZyYmMD09aD8hMDohMX19LHNldHVwVHlwZU51bWJlcjpmdW5jdGlvbihhKXtmb3IodmFyIGI9Zi5nZXRCQ0hUeXBlTnVtYmVyKHRoaXMudHlwZU51bWJlciksYz0wOzE4PmM7YysrKXt2YXIgZD0hYSYmMT09KDEmYj4+Yyk7dGhpcy5tb2R1bGVzW01hdGguZmxvb3IoYy8zKV1bYyUzK3RoaXMubW9kdWxlQ291bnQtOC0zXT1kfWZvcih2YXIgYz0wOzE4PmM7YysrKXt2YXIgZD0hYSYmMT09KDEmYj4+Yyk7dGhpcy5tb2R1bGVzW2MlMyt0aGlzLm1vZHVsZUNvdW50LTgtM11bTWF0aC5mbG9vcihjLzMpXT1kfX0sc2V0dXBUeXBlSW5mbzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLmVycm9yQ29ycmVjdExldmVsPDwzfGIsZD1mLmdldEJDSFR5cGVJbmZvKGMpLGU9MDsxNT5lO2UrKyl7dmFyIGc9IWEmJjE9PSgxJmQ+PmUpOzY+ZT90aGlzLm1vZHVsZXNbZV1bOF09Zzo4PmU/dGhpcy5tb2R1bGVzW2UrMV1bOF09Zzp0aGlzLm1vZHVsZXNbdGhpcy5tb2R1bGVDb3VudC0xNStlXVs4XT1nfWZvcih2YXIgZT0wOzE1PmU7ZSsrKXt2YXIgZz0hYSYmMT09KDEmZD4+ZSk7OD5lP3RoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50LWUtMV09Zzo5PmU/dGhpcy5tb2R1bGVzWzhdWzE1LWUtMSsxXT1nOnRoaXMubW9kdWxlc1s4XVsxNS1lLTFdPWd9dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtOF1bOF09IWF9LG1hcERhdGE6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9LTEsZD10aGlzLm1vZHVsZUNvdW50LTEsZT03LGc9MCxoPXRoaXMubW9kdWxlQ291bnQtMTtoPjA7aC09Milmb3IoNj09aCYmaC0tOzspe2Zvcih2YXIgaT0wOzI+aTtpKyspaWYobnVsbD09dGhpcy5tb2R1bGVzW2RdW2gtaV0pe3ZhciBqPSExO2c8YS5sZW5ndGgmJihqPTE9PSgxJmFbZ10+Pj5lKSk7dmFyIGs9Zi5nZXRNYXNrKGIsZCxoLWkpO2smJihqPSFqKSx0aGlzLm1vZHVsZXNbZF1baC1pXT1qLGUtLSwtMT09ZSYmKGcrKyxlPTcpfWlmKGQrPWMsMD5kfHx0aGlzLm1vZHVsZUNvdW50PD1kKXtkLT1jLGM9LWM7YnJlYWt9fX19LGIuUEFEMD0yMzYsYi5QQUQxPTE3LGIuY3JlYXRlRGF0YT1mdW5jdGlvbihhLGMsZCl7Zm9yKHZhciBlPWouZ2V0UlNCbG9ja3MoYSxjKSxnPW5ldyBrLGg9MDtoPGQubGVuZ3RoO2grKyl7dmFyIGk9ZFtoXTtnLnB1dChpLm1vZGUsNCksZy5wdXQoaS5nZXRMZW5ndGgoKSxmLmdldExlbmd0aEluQml0cyhpLm1vZGUsYSkpLGkud3JpdGUoZyl9Zm9yKHZhciBsPTAsaD0wO2g8ZS5sZW5ndGg7aCsrKWwrPWVbaF0uZGF0YUNvdW50O2lmKGcuZ2V0TGVuZ3RoSW5CaXRzKCk+OCpsKXRocm93IG5ldyBFcnJvcihcImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoXCIrZy5nZXRMZW5ndGhJbkJpdHMoKStcIj5cIis4KmwrXCIpXCIpO2ZvcihnLmdldExlbmd0aEluQml0cygpKzQ8PTgqbCYmZy5wdXQoMCw0KTswIT1nLmdldExlbmd0aEluQml0cygpJTg7KWcucHV0Qml0KCExKTtmb3IoOzspe2lmKGcuZ2V0TGVuZ3RoSW5CaXRzKCk+PTgqbClicmVhaztpZihnLnB1dChiLlBBRDAsOCksZy5nZXRMZW5ndGhJbkJpdHMoKT49OCpsKWJyZWFrO2cucHV0KGIuUEFEMSw4KX1yZXR1cm4gYi5jcmVhdGVCeXRlcyhnLGUpfSxiLmNyZWF0ZUJ5dGVzPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD0wLGU9MCxnPW5ldyBBcnJheShiLmxlbmd0aCksaD1uZXcgQXJyYXkoYi5sZW5ndGgpLGo9MDtqPGIubGVuZ3RoO2orKyl7dmFyIGs9YltqXS5kYXRhQ291bnQsbD1iW2pdLnRvdGFsQ291bnQtaztkPU1hdGgubWF4KGQsayksZT1NYXRoLm1heChlLGwpLGdbal09bmV3IEFycmF5KGspO2Zvcih2YXIgbT0wO208Z1tqXS5sZW5ndGg7bSsrKWdbal1bbV09MjU1JmEuYnVmZmVyW20rY107Yys9azt2YXIgbj1mLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwobCksbz1uZXcgaShnW2pdLG4uZ2V0TGVuZ3RoKCktMSkscD1vLm1vZChuKTtoW2pdPW5ldyBBcnJheShuLmdldExlbmd0aCgpLTEpO2Zvcih2YXIgbT0wO208aFtqXS5sZW5ndGg7bSsrKXt2YXIgcT1tK3AuZ2V0TGVuZ3RoKCktaFtqXS5sZW5ndGg7aFtqXVttXT1xPj0wP3AuZ2V0KHEpOjB9fWZvcih2YXIgcj0wLG09MDttPGIubGVuZ3RoO20rKylyKz1iW21dLnRvdGFsQ291bnQ7Zm9yKHZhciBzPW5ldyBBcnJheShyKSx0PTAsbT0wO2Q+bTttKyspZm9yKHZhciBqPTA7ajxiLmxlbmd0aDtqKyspbTxnW2pdLmxlbmd0aCYmKHNbdCsrXT1nW2pdW21dKTtmb3IodmFyIG09MDtlPm07bSsrKWZvcih2YXIgaj0wO2o8Yi5sZW5ndGg7aisrKW08aFtqXS5sZW5ndGgmJihzW3QrK109aFtqXVttXSk7cmV0dXJuIHN9O2Zvcih2YXIgYz17TU9ERV9OVU1CRVI6MSxNT0RFX0FMUEhBX05VTToyLE1PREVfOEJJVF9CWVRFOjQsTU9ERV9LQU5KSTo4fSxkPXtMOjEsTTowLFE6MyxIOjJ9LGU9e1BBVFRFUk4wMDA6MCxQQVRURVJOMDAxOjEsUEFUVEVSTjAxMDoyLFBBVFRFUk4wMTE6MyxQQVRURVJOMTAwOjQsUEFUVEVSTjEwMTo1LFBBVFRFUk4xMTA6NixQQVRURVJOMTExOjd9LGY9e1BBVFRFUk5fUE9TSVRJT05fVEFCTEU6W1tdLFs2LDE4XSxbNiwyMl0sWzYsMjZdLFs2LDMwXSxbNiwzNF0sWzYsMjIsMzhdLFs2LDI0LDQyXSxbNiwyNiw0Nl0sWzYsMjgsNTBdLFs2LDMwLDU0XSxbNiwzMiw1OF0sWzYsMzQsNjJdLFs2LDI2LDQ2LDY2XSxbNiwyNiw0OCw3MF0sWzYsMjYsNTAsNzRdLFs2LDMwLDU0LDc4XSxbNiwzMCw1Niw4Ml0sWzYsMzAsNTgsODZdLFs2LDM0LDYyLDkwXSxbNiwyOCw1MCw3Miw5NF0sWzYsMjYsNTAsNzQsOThdLFs2LDMwLDU0LDc4LDEwMl0sWzYsMjgsNTQsODAsMTA2XSxbNiwzMiw1OCw4NCwxMTBdLFs2LDMwLDU4LDg2LDExNF0sWzYsMzQsNjIsOTAsMTE4XSxbNiwyNiw1MCw3NCw5OCwxMjJdLFs2LDMwLDU0LDc4LDEwMiwxMjZdLFs2LDI2LDUyLDc4LDEwNCwxMzBdLFs2LDMwLDU2LDgyLDEwOCwxMzRdLFs2LDM0LDYwLDg2LDExMiwxMzhdLFs2LDMwLDU4LDg2LDExNCwxNDJdLFs2LDM0LDYyLDkwLDExOCwxNDZdLFs2LDMwLDU0LDc4LDEwMiwxMjYsMTUwXSxbNiwyNCw1MCw3NiwxMDIsMTI4LDE1NF0sWzYsMjgsNTQsODAsMTA2LDEzMiwxNThdLFs2LDMyLDU4LDg0LDExMCwxMzYsMTYyXSxbNiwyNiw1NCw4MiwxMTAsMTM4LDE2Nl0sWzYsMzAsNTgsODYsMTE0LDE0MiwxNzBdXSxHMTU6MTMzNSxHMTg6Nzk3MyxHMTVfTUFTSzoyMTUyMixnZXRCQ0hUeXBlSW5mbzpmdW5jdGlvbihhKXtmb3IodmFyIGI9YTw8MTA7Zi5nZXRCQ0hEaWdpdChiKS1mLmdldEJDSERpZ2l0KGYuRzE1KT49MDspYl49Zi5HMTU8PGYuZ2V0QkNIRGlnaXQoYiktZi5nZXRCQ0hEaWdpdChmLkcxNSk7cmV0dXJuKGE8PDEwfGIpXmYuRzE1X01BU0t9LGdldEJDSFR5cGVOdW1iZXI6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWE8PDEyO2YuZ2V0QkNIRGlnaXQoYiktZi5nZXRCQ0hEaWdpdChmLkcxOCk+PTA7KWJePWYuRzE4PDxmLmdldEJDSERpZ2l0KGIpLWYuZ2V0QkNIRGlnaXQoZi5HMTgpO3JldHVybiBhPDwxMnxifSxnZXRCQ0hEaWdpdDpmdW5jdGlvbihhKXtmb3IodmFyIGI9MDswIT1hOyliKyssYT4+Pj0xO3JldHVybiBifSxnZXRQYXR0ZXJuUG9zaXRpb246ZnVuY3Rpb24oYSl7cmV0dXJuIGYuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVthLTFdfSxnZXRNYXNrOmZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYSl7Y2FzZSBlLlBBVFRFUk4wMDA6cmV0dXJuIDA9PShiK2MpJTI7Y2FzZSBlLlBBVFRFUk4wMDE6cmV0dXJuIDA9PWIlMjtjYXNlIGUuUEFUVEVSTjAxMDpyZXR1cm4gMD09YyUzO2Nhc2UgZS5QQVRURVJOMDExOnJldHVybiAwPT0oYitjKSUzO2Nhc2UgZS5QQVRURVJOMTAwOnJldHVybiAwPT0oTWF0aC5mbG9vcihiLzIpK01hdGguZmxvb3IoYy8zKSklMjtjYXNlIGUuUEFUVEVSTjEwMTpyZXR1cm4gMD09YipjJTIrYipjJTM7Y2FzZSBlLlBBVFRFUk4xMTA6cmV0dXJuIDA9PShiKmMlMitiKmMlMyklMjtjYXNlIGUuUEFUVEVSTjExMTpyZXR1cm4gMD09KGIqYyUzKyhiK2MpJTIpJTI7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJiYWQgbWFza1BhdHRlcm46XCIrYSl9fSxnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1uZXcgaShbMV0sMCksYz0wO2E+YztjKyspYj1iLm11bHRpcGx5KG5ldyBpKFsxLGcuZ2V4cChjKV0sMCkpO3JldHVybiBifSxnZXRMZW5ndGhJbkJpdHM6ZnVuY3Rpb24oYSxiKXtpZihiPj0xJiYxMD5iKXN3aXRjaChhKXtjYXNlIGMuTU9ERV9OVU1CRVI6cmV0dXJuIDEwO2Nhc2UgYy5NT0RFX0FMUEhBX05VTTpyZXR1cm4gOTtjYXNlIGMuTU9ERV84QklUX0JZVEU6cmV0dXJuIDg7Y2FzZSBjLk1PREVfS0FOSkk6cmV0dXJuIDg7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiK2EpfWVsc2UgaWYoMjc+Yilzd2l0Y2goYSl7Y2FzZSBjLk1PREVfTlVNQkVSOnJldHVybiAxMjtjYXNlIGMuTU9ERV9BTFBIQV9OVU06cmV0dXJuIDExO2Nhc2UgYy5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBjLk1PREVfS0FOSkk6cmV0dXJuIDEwO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIithKX1lbHNle2lmKCEoNDE+YikpdGhyb3cgbmV3IEVycm9yKFwidHlwZTpcIitiKTtzd2l0Y2goYSl7Y2FzZSBjLk1PREVfTlVNQkVSOnJldHVybiAxNDtjYXNlIGMuTU9ERV9BTFBIQV9OVU06cmV0dXJuIDEzO2Nhc2UgYy5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBjLk1PREVfS0FOSkk6cmV0dXJuIDEyO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIithKX19fSxnZXRMb3N0UG9pbnQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEuZ2V0TW9kdWxlQ291bnQoKSxjPTAsZD0wO2I+ZDtkKyspZm9yKHZhciBlPTA7Yj5lO2UrKyl7Zm9yKHZhciBmPTAsZz1hLmlzRGFyayhkLGUpLGg9LTE7MT49aDtoKyspaWYoISgwPmQraHx8ZCtoPj1iKSlmb3IodmFyIGk9LTE7MT49aTtpKyspMD5lK2l8fGUraT49Ynx8KDAhPWh8fDAhPWkpJiZnPT1hLmlzRGFyayhkK2gsZStpKSYmZisrO2Y+NSYmKGMrPTMrZi01KX1mb3IodmFyIGQ9MDtiLTE+ZDtkKyspZm9yKHZhciBlPTA7Yi0xPmU7ZSsrKXt2YXIgaj0wO2EuaXNEYXJrKGQsZSkmJmorKyxhLmlzRGFyayhkKzEsZSkmJmorKyxhLmlzRGFyayhkLGUrMSkmJmorKyxhLmlzRGFyayhkKzEsZSsxKSYmaisrLCgwPT1qfHw0PT1qKSYmKGMrPTMpfWZvcih2YXIgZD0wO2I+ZDtkKyspZm9yKHZhciBlPTA7Yi02PmU7ZSsrKWEuaXNEYXJrKGQsZSkmJiFhLmlzRGFyayhkLGUrMSkmJmEuaXNEYXJrKGQsZSsyKSYmYS5pc0RhcmsoZCxlKzMpJiZhLmlzRGFyayhkLGUrNCkmJiFhLmlzRGFyayhkLGUrNSkmJmEuaXNEYXJrKGQsZSs2KSYmKGMrPTQwKTtmb3IodmFyIGU9MDtiPmU7ZSsrKWZvcih2YXIgZD0wO2ItNj5kO2QrKylhLmlzRGFyayhkLGUpJiYhYS5pc0RhcmsoZCsxLGUpJiZhLmlzRGFyayhkKzIsZSkmJmEuaXNEYXJrKGQrMyxlKSYmYS5pc0RhcmsoZCs0LGUpJiYhYS5pc0RhcmsoZCs1LGUpJiZhLmlzRGFyayhkKzYsZSkmJihjKz00MCk7Zm9yKHZhciBrPTAsZT0wO2I+ZTtlKyspZm9yKHZhciBkPTA7Yj5kO2QrKylhLmlzRGFyayhkLGUpJiZrKys7dmFyIGw9TWF0aC5hYnMoMTAwKmsvYi9iLTUwKS81O3JldHVybiBjKz0xMCpsfX0sZz17Z2xvZzpmdW5jdGlvbihhKXtpZigxPmEpdGhyb3cgbmV3IEVycm9yKFwiZ2xvZyhcIithK1wiKVwiKTtyZXR1cm4gZy5MT0dfVEFCTEVbYV19LGdleHA6ZnVuY3Rpb24oYSl7Zm9yKDswPmE7KWErPTI1NTtmb3IoO2E+PTI1NjspYS09MjU1O3JldHVybiBnLkVYUF9UQUJMRVthXX0sRVhQX1RBQkxFOm5ldyBBcnJheSgyNTYpLExPR19UQUJMRTpuZXcgQXJyYXkoMjU2KX0saD0wOzg+aDtoKyspZy5FWFBfVEFCTEVbaF09MTw8aDtmb3IodmFyIGg9ODsyNTY+aDtoKyspZy5FWFBfVEFCTEVbaF09Zy5FWFBfVEFCTEVbaC00XV5nLkVYUF9UQUJMRVtoLTVdXmcuRVhQX1RBQkxFW2gtNl1eZy5FWFBfVEFCTEVbaC04XTtmb3IodmFyIGg9MDsyNTU+aDtoKyspZy5MT0dfVEFCTEVbZy5FWFBfVEFCTEVbaF1dPWg7aS5wcm90b3R5cGU9e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5udW1bYV19LGdldExlbmd0aDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm51bS5sZW5ndGh9LG11bHRpcGx5OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1uZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSthLmdldExlbmd0aCgpLTEpLGM9MDtjPHRoaXMuZ2V0TGVuZ3RoKCk7YysrKWZvcih2YXIgZD0wO2Q8YS5nZXRMZW5ndGgoKTtkKyspYltjK2RdXj1nLmdleHAoZy5nbG9nKHRoaXMuZ2V0KGMpKStnLmdsb2coYS5nZXQoZCkpKTtyZXR1cm4gbmV3IGkoYiwwKX0sbW9kOmZ1bmN0aW9uKGEpe2lmKHRoaXMuZ2V0TGVuZ3RoKCktYS5nZXRMZW5ndGgoKTwwKXJldHVybiB0aGlzO2Zvcih2YXIgYj1nLmdsb2codGhpcy5nZXQoMCkpLWcuZ2xvZyhhLmdldCgwKSksYz1uZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSksZD0wO2Q8dGhpcy5nZXRMZW5ndGgoKTtkKyspY1tkXT10aGlzLmdldChkKTtmb3IodmFyIGQ9MDtkPGEuZ2V0TGVuZ3RoKCk7ZCsrKWNbZF1ePWcuZ2V4cChnLmdsb2coYS5nZXQoZCkpK2IpO3JldHVybiBuZXcgaShjLDApLm1vZChhKX19LGouUlNfQkxPQ0tfVEFCTEU9W1sxLDI2LDE5XSxbMSwyNiwxNl0sWzEsMjYsMTNdLFsxLDI2LDldLFsxLDQ0LDM0XSxbMSw0NCwyOF0sWzEsNDQsMjJdLFsxLDQ0LDE2XSxbMSw3MCw1NV0sWzEsNzAsNDRdLFsyLDM1LDE3XSxbMiwzNSwxM10sWzEsMTAwLDgwXSxbMiw1MCwzMl0sWzIsNTAsMjRdLFs0LDI1LDldLFsxLDEzNCwxMDhdLFsyLDY3LDQzXSxbMiwzMywxNSwyLDM0LDE2XSxbMiwzMywxMSwyLDM0LDEyXSxbMiw4Niw2OF0sWzQsNDMsMjddLFs0LDQzLDE5XSxbNCw0MywxNV0sWzIsOTgsNzhdLFs0LDQ5LDMxXSxbMiwzMiwxNCw0LDMzLDE1XSxbNCwzOSwxMywxLDQwLDE0XSxbMiwxMjEsOTddLFsyLDYwLDM4LDIsNjEsMzldLFs0LDQwLDE4LDIsNDEsMTldLFs0LDQwLDE0LDIsNDEsMTVdLFsyLDE0NiwxMTZdLFszLDU4LDM2LDIsNTksMzddLFs0LDM2LDE2LDQsMzcsMTddLFs0LDM2LDEyLDQsMzcsMTNdLFsyLDg2LDY4LDIsODcsNjldLFs0LDY5LDQzLDEsNzAsNDRdLFs2LDQzLDE5LDIsNDQsMjBdLFs2LDQzLDE1LDIsNDQsMTZdLFs0LDEwMSw4MV0sWzEsODAsNTAsNCw4MSw1MV0sWzQsNTAsMjIsNCw1MSwyM10sWzMsMzYsMTIsOCwzNywxM10sWzIsMTE2LDkyLDIsMTE3LDkzXSxbNiw1OCwzNiwyLDU5LDM3XSxbNCw0NiwyMCw2LDQ3LDIxXSxbNyw0MiwxNCw0LDQzLDE1XSxbNCwxMzMsMTA3XSxbOCw1OSwzNywxLDYwLDM4XSxbOCw0NCwyMCw0LDQ1LDIxXSxbMTIsMzMsMTEsNCwzNCwxMl0sWzMsMTQ1LDExNSwxLDE0NiwxMTZdLFs0LDY0LDQwLDUsNjUsNDFdLFsxMSwzNiwxNiw1LDM3LDE3XSxbMTEsMzYsMTIsNSwzNywxM10sWzUsMTA5LDg3LDEsMTEwLDg4XSxbNSw2NSw0MSw1LDY2LDQyXSxbNSw1NCwyNCw3LDU1LDI1XSxbMTEsMzYsMTJdLFs1LDEyMiw5OCwxLDEyMyw5OV0sWzcsNzMsNDUsMyw3NCw0Nl0sWzE1LDQzLDE5LDIsNDQsMjBdLFszLDQ1LDE1LDEzLDQ2LDE2XSxbMSwxMzUsMTA3LDUsMTM2LDEwOF0sWzEwLDc0LDQ2LDEsNzUsNDddLFsxLDUwLDIyLDE1LDUxLDIzXSxbMiw0MiwxNCwxNyw0MywxNV0sWzUsMTUwLDEyMCwxLDE1MSwxMjFdLFs5LDY5LDQzLDQsNzAsNDRdLFsxNyw1MCwyMiwxLDUxLDIzXSxbMiw0MiwxNCwxOSw0MywxNV0sWzMsMTQxLDExMyw0LDE0MiwxMTRdLFszLDcwLDQ0LDExLDcxLDQ1XSxbMTcsNDcsMjEsNCw0OCwyMl0sWzksMzksMTMsMTYsNDAsMTRdLFszLDEzNSwxMDcsNSwxMzYsMTA4XSxbMyw2Nyw0MSwxMyw2OCw0Ml0sWzE1LDU0LDI0LDUsNTUsMjVdLFsxNSw0MywxNSwxMCw0NCwxNl0sWzQsMTQ0LDExNiw0LDE0NSwxMTddLFsxNyw2OCw0Ml0sWzE3LDUwLDIyLDYsNTEsMjNdLFsxOSw0NiwxNiw2LDQ3LDE3XSxbMiwxMzksMTExLDcsMTQwLDExMl0sWzE3LDc0LDQ2XSxbNyw1NCwyNCwxNiw1NSwyNV0sWzM0LDM3LDEzXSxbNCwxNTEsMTIxLDUsMTUyLDEyMl0sWzQsNzUsNDcsMTQsNzYsNDhdLFsxMSw1NCwyNCwxNCw1NSwyNV0sWzE2LDQ1LDE1LDE0LDQ2LDE2XSxbNiwxNDcsMTE3LDQsMTQ4LDExOF0sWzYsNzMsNDUsMTQsNzQsNDZdLFsxMSw1NCwyNCwxNiw1NSwyNV0sWzMwLDQ2LDE2LDIsNDcsMTddLFs4LDEzMiwxMDYsNCwxMzMsMTA3XSxbOCw3NSw0NywxMyw3Niw0OF0sWzcsNTQsMjQsMjIsNTUsMjVdLFsyMiw0NSwxNSwxMyw0NiwxNl0sWzEwLDE0MiwxMTQsMiwxNDMsMTE1XSxbMTksNzQsNDYsNCw3NSw0N10sWzI4LDUwLDIyLDYsNTEsMjNdLFszMyw0NiwxNiw0LDQ3LDE3XSxbOCwxNTIsMTIyLDQsMTUzLDEyM10sWzIyLDczLDQ1LDMsNzQsNDZdLFs4LDUzLDIzLDI2LDU0LDI0XSxbMTIsNDUsMTUsMjgsNDYsMTZdLFszLDE0NywxMTcsMTAsMTQ4LDExOF0sWzMsNzMsNDUsMjMsNzQsNDZdLFs0LDU0LDI0LDMxLDU1LDI1XSxbMTEsNDUsMTUsMzEsNDYsMTZdLFs3LDE0NiwxMTYsNywxNDcsMTE3XSxbMjEsNzMsNDUsNyw3NCw0Nl0sWzEsNTMsMjMsMzcsNTQsMjRdLFsxOSw0NSwxNSwyNiw0NiwxNl0sWzUsMTQ1LDExNSwxMCwxNDYsMTE2XSxbMTksNzUsNDcsMTAsNzYsNDhdLFsxNSw1NCwyNCwyNSw1NSwyNV0sWzIzLDQ1LDE1LDI1LDQ2LDE2XSxbMTMsMTQ1LDExNSwzLDE0NiwxMTZdLFsyLDc0LDQ2LDI5LDc1LDQ3XSxbNDIsNTQsMjQsMSw1NSwyNV0sWzIzLDQ1LDE1LDI4LDQ2LDE2XSxbMTcsMTQ1LDExNV0sWzEwLDc0LDQ2LDIzLDc1LDQ3XSxbMTAsNTQsMjQsMzUsNTUsMjVdLFsxOSw0NSwxNSwzNSw0NiwxNl0sWzE3LDE0NSwxMTUsMSwxNDYsMTE2XSxbMTQsNzQsNDYsMjEsNzUsNDddLFsyOSw1NCwyNCwxOSw1NSwyNV0sWzExLDQ1LDE1LDQ2LDQ2LDE2XSxbMTMsMTQ1LDExNSw2LDE0NiwxMTZdLFsxNCw3NCw0NiwyMyw3NSw0N10sWzQ0LDU0LDI0LDcsNTUsMjVdLFs1OSw0NiwxNiwxLDQ3LDE3XSxbMTIsMTUxLDEyMSw3LDE1MiwxMjJdLFsxMiw3NSw0NywyNiw3Niw0OF0sWzM5LDU0LDI0LDE0LDU1LDI1XSxbMjIsNDUsMTUsNDEsNDYsMTZdLFs2LDE1MSwxMjEsMTQsMTUyLDEyMl0sWzYsNzUsNDcsMzQsNzYsNDhdLFs0Niw1NCwyNCwxMCw1NSwyNV0sWzIsNDUsMTUsNjQsNDYsMTZdLFsxNywxNTIsMTIyLDQsMTUzLDEyM10sWzI5LDc0LDQ2LDE0LDc1LDQ3XSxbNDksNTQsMjQsMTAsNTUsMjVdLFsyNCw0NSwxNSw0Niw0NiwxNl0sWzQsMTUyLDEyMiwxOCwxNTMsMTIzXSxbMTMsNzQsNDYsMzIsNzUsNDddLFs0OCw1NCwyNCwxNCw1NSwyNV0sWzQyLDQ1LDE1LDMyLDQ2LDE2XSxbMjAsMTQ3LDExNyw0LDE0OCwxMThdLFs0MCw3NSw0Nyw3LDc2LDQ4XSxbNDMsNTQsMjQsMjIsNTUsMjVdLFsxMCw0NSwxNSw2Nyw0NiwxNl0sWzE5LDE0OCwxMTgsNiwxNDksMTE5XSxbMTgsNzUsNDcsMzEsNzYsNDhdLFszNCw1NCwyNCwzNCw1NSwyNV0sWzIwLDQ1LDE1LDYxLDQ2LDE2XV0sai5nZXRSU0Jsb2Nrcz1mdW5jdGlvbihhLGIpe3ZhciBjPWouZ2V0UnNCbG9ja1RhYmxlKGEsYik7aWYodm9pZCAwPT1jKXRocm93IG5ldyBFcnJvcihcImJhZCBycyBibG9jayBAIHR5cGVOdW1iZXI6XCIrYStcIi9lcnJvckNvcnJlY3RMZXZlbDpcIitiKTtmb3IodmFyIGQ9Yy5sZW5ndGgvMyxlPVtdLGY9MDtkPmY7ZisrKWZvcih2YXIgZz1jWzMqZiswXSxoPWNbMypmKzFdLGk9Y1szKmYrMl0saz0wO2c+aztrKyspZS5wdXNoKG5ldyBqKGgsaSkpO3JldHVybiBlfSxqLmdldFJzQmxvY2tUYWJsZT1mdW5jdGlvbihhLGIpe3N3aXRjaChiKXtjYXNlIGQuTDpyZXR1cm4gai5SU19CTE9DS19UQUJMRVs0KihhLTEpKzBdO2Nhc2UgZC5NOnJldHVybiBqLlJTX0JMT0NLX1RBQkxFWzQqKGEtMSkrMV07Y2FzZSBkLlE6cmV0dXJuIGouUlNfQkxPQ0tfVEFCTEVbNCooYS0xKSsyXTtjYXNlIGQuSDpyZXR1cm4gai5SU19CTE9DS19UQUJMRVs0KihhLTEpKzNdO2RlZmF1bHQ6cmV0dXJuIHZvaWQgMH19LGsucHJvdG90eXBlPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9TWF0aC5mbG9vcihhLzgpO3JldHVybiAxPT0oMSZ0aGlzLmJ1ZmZlcltiXT4+PjctYSU4KX0scHV0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrKyl0aGlzLnB1dEJpdCgxPT0oMSZhPj4+Yi1jLTEpKX0sZ2V0TGVuZ3RoSW5CaXRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxwdXRCaXQ6ZnVuY3Rpb24oYSl7dmFyIGI9TWF0aC5mbG9vcih0aGlzLmxlbmd0aC84KTt0aGlzLmJ1ZmZlci5sZW5ndGg8PWImJnRoaXMuYnVmZmVyLnB1c2goMCksYSYmKHRoaXMuYnVmZmVyW2JdfD0xMjg+Pj50aGlzLmxlbmd0aCU4KSx0aGlzLmxlbmd0aCsrfX07dmFyIGw9W1sxNywxNCwxMSw3XSxbMzIsMjYsMjAsMTRdLFs1Myw0MiwzMiwyNF0sWzc4LDYyLDQ2LDM0XSxbMTA2LDg0LDYwLDQ0XSxbMTM0LDEwNiw3NCw1OF0sWzE1NCwxMjIsODYsNjRdLFsxOTIsMTUyLDEwOCw4NF0sWzIzMCwxODAsMTMwLDk4XSxbMjcxLDIxMywxNTEsMTE5XSxbMzIxLDI1MSwxNzcsMTM3XSxbMzY3LDI4NywyMDMsMTU1XSxbNDI1LDMzMSwyNDEsMTc3XSxbNDU4LDM2MiwyNTgsMTk0XSxbNTIwLDQxMiwyOTIsMjIwXSxbNTg2LDQ1MCwzMjIsMjUwXSxbNjQ0LDUwNCwzNjQsMjgwXSxbNzE4LDU2MCwzOTQsMzEwXSxbNzkyLDYyNCw0NDIsMzM4XSxbODU4LDY2Niw0ODIsMzgyXSxbOTI5LDcxMSw1MDksNDAzXSxbMTAwMyw3NzksNTY1LDQzOV0sWzEwOTEsODU3LDYxMSw0NjFdLFsxMTcxLDkxMSw2NjEsNTExXSxbMTI3Myw5OTcsNzE1LDUzNV0sWzEzNjcsMTA1OSw3NTEsNTkzXSxbMTQ2NSwxMTI1LDgwNSw2MjVdLFsxNTI4LDExOTAsODY4LDY1OF0sWzE2MjgsMTI2NCw5MDgsNjk4XSxbMTczMiwxMzcwLDk4Miw3NDJdLFsxODQwLDE0NTIsMTAzMCw3OTBdLFsxOTUyLDE1MzgsMTExMiw4NDJdLFsyMDY4LDE2MjgsMTE2OCw4OThdLFsyMTg4LDE3MjIsMTIyOCw5NThdLFsyMzAzLDE4MDksMTI4Myw5ODNdLFsyNDMxLDE5MTEsMTM1MSwxMDUxXSxbMjU2MywxOTg5LDE0MjMsMTA5M10sWzI2OTksMjA5OSwxNDk5LDExMzldLFsyODA5LDIyMTMsMTU3OSwxMjE5XSxbMjk1MywyMzMxLDE2NjMsMTI3M11dLG89ZnVuY3Rpb24oKXt2YXIgYT1mdW5jdGlvbihhLGIpe3RoaXMuX2VsPWEsdGhpcy5faHRPcHRpb249Yn07cmV0dXJuIGEucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsYSk7Zm9yKHZhciBkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmYy5zZXRBdHRyaWJ1dGUoZCxiW2RdKTtyZXR1cm4gY312YXIgYj10aGlzLl9odE9wdGlvbixjPXRoaXMuX2VsLGQ9YS5nZXRNb2R1bGVDb3VudCgpO01hdGguZmxvb3IoYi53aWR0aC9kKSxNYXRoLmZsb29yKGIuaGVpZ2h0L2QpLHRoaXMuY2xlYXIoKTt2YXIgaD1nKFwic3ZnXCIse3ZpZXdCb3g6XCIwIDAgXCIrU3RyaW5nKGQpK1wiIFwiK1N0cmluZyhkKSx3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsZmlsbDpiLmNvbG9yTGlnaHR9KTtoLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIixcInhtbG5zOnhsaW5rXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpLGMuYXBwZW5kQ2hpbGQoaCksaC5hcHBlbmRDaGlsZChnKFwicmVjdFwiLHtmaWxsOmIuY29sb3JEYXJrLHdpZHRoOlwiMVwiLGhlaWdodDpcIjFcIixpZDpcInRlbXBsYXRlXCJ9KSk7Zm9yKHZhciBpPTA7ZD5pO2krKylmb3IodmFyIGo9MDtkPmo7aisrKWlmKGEuaXNEYXJrKGksaikpe3ZhciBrPWcoXCJ1c2VcIix7eDpTdHJpbmcoaSkseTpTdHJpbmcoail9KTtrLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFwiaHJlZlwiLFwiI3RlbXBsYXRlXCIpLGguYXBwZW5kQ2hpbGQoayl9fSxhLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe2Zvcig7dGhpcy5fZWwuaGFzQ2hpbGROb2RlcygpOyl0aGlzLl9lbC5yZW1vdmVDaGlsZCh0aGlzLl9lbC5sYXN0Q2hpbGQpfSxhfSgpLHA9XCJzdmdcIj09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkscT1wP286bSgpP2Z1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3RoaXMuX2VsSW1hZ2Uuc3JjPXRoaXMuX2VsQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSx0aGlzLl9lbEltYWdlLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHRoaXMuX2VsQ2FudmFzLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9ZnVuY3Rpb24gZChhLGIpe3ZhciBjPXRoaXM7aWYoYy5fZkZhaWw9YixjLl9mU3VjY2Vzcz1hLG51bGw9PT1jLl9iU3VwcG9ydERhdGFVUkkpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksZT1mdW5jdGlvbigpe2MuX2JTdXBwb3J0RGF0YVVSST0hMSxjLl9mRmFpbCYmX2ZGYWlsLmNhbGwoYyl9LGY9ZnVuY3Rpb24oKXtjLl9iU3VwcG9ydERhdGFVUkk9ITAsYy5fZlN1Y2Nlc3MmJmMuX2ZTdWNjZXNzLmNhbGwoYyl9O3JldHVybiBkLm9uYWJvcnQ9ZSxkLm9uZXJyb3I9ZSxkLm9ubG9hZD1mLGQuc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFGQ0FZQUFBQ05ieWJsQUFBQUhFbEVRVlFJMTJQNC8vOC93MzhHSUFYRElCS0UwREh4Z2xqTkJBQU85VFhMMFk0T0h3QUFBQUJKUlU1RXJrSmdnZz09XCIsdm9pZCAwfWMuX2JTdXBwb3J0RGF0YVVSST09PSEwJiZjLl9mU3VjY2Vzcz9jLl9mU3VjY2Vzcy5jYWxsKGMpOmMuX2JTdXBwb3J0RGF0YVVSST09PSExJiZjLl9mRmFpbCYmYy5fZkZhaWwuY2FsbChjKX1pZih0aGlzLl9hbmRyb2lkJiZ0aGlzLl9hbmRyb2lkPD0yLjEpe3ZhciBiPTEvd2luZG93LmRldmljZVBpeGVsUmF0aW8sYz1DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZTtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZT1mdW5jdGlvbihhLGQsZSxmLGcsaCxpLGope2lmKFwibm9kZU5hbWVcImluIGEmJi9pbWcvaS50ZXN0KGEubm9kZU5hbWUpKWZvcih2YXIgbD1hcmd1bWVudHMubGVuZ3RoLTE7bD49MTtsLS0pYXJndW1lbnRzW2xdPWFyZ3VtZW50c1tsXSpiO2Vsc2VcInVuZGVmaW5lZFwiPT10eXBlb2YgaiYmKGFyZ3VtZW50c1sxXSo9Yixhcmd1bWVudHNbMl0qPWIsYXJndW1lbnRzWzNdKj1iLGFyZ3VtZW50c1s0XSo9Yik7Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fXZhciBlPWZ1bmN0aW9uKGEsYil7dGhpcy5fYklzUGFpbnRlZD0hMSx0aGlzLl9hbmRyb2lkPW4oKSx0aGlzLl9odE9wdGlvbj1iLHRoaXMuX2VsQ2FudmFzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksdGhpcy5fZWxDYW52YXMud2lkdGg9Yi53aWR0aCx0aGlzLl9lbENhbnZhcy5oZWlnaHQ9Yi5oZWlnaHQsYS5hcHBlbmRDaGlsZCh0aGlzLl9lbENhbnZhcyksdGhpcy5fZWw9YSx0aGlzLl9vQ29udGV4dD10aGlzLl9lbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksdGhpcy5fYklzUGFpbnRlZD0hMSx0aGlzLl9lbEltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksdGhpcy5fZWxJbWFnZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuX2VsLmFwcGVuZENoaWxkKHRoaXMuX2VsSW1hZ2UpLHRoaXMuX2JTdXBwb3J0RGF0YVVSST1udWxsfTtyZXR1cm4gZS5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9lbEltYWdlLGM9dGhpcy5fb0NvbnRleHQsZD10aGlzLl9odE9wdGlvbixlPWEuZ2V0TW9kdWxlQ291bnQoKSxmPWQud2lkdGgvZSxnPWQuaGVpZ2h0L2UsaD1NYXRoLnJvdW5kKGYpLGk9TWF0aC5yb3VuZChnKTtiLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5jbGVhcigpO2Zvcih2YXIgaj0wO2U+ajtqKyspZm9yKHZhciBrPTA7ZT5rO2srKyl7dmFyIGw9YS5pc0RhcmsoaixrKSxtPWsqZixuPWoqZztjLnN0cm9rZVN0eWxlPWw/ZC5jb2xvckRhcms6ZC5jb2xvckxpZ2h0LGMubGluZVdpZHRoPTEsYy5maWxsU3R5bGU9bD9kLmNvbG9yRGFyazpkLmNvbG9yTGlnaHQsYy5maWxsUmVjdChtLG4sZixnKSxjLnN0cm9rZVJlY3QoTWF0aC5mbG9vcihtKSsuNSxNYXRoLmZsb29yKG4pKy41LGgsaSksYy5zdHJva2VSZWN0KE1hdGguY2VpbChtKS0uNSxNYXRoLmNlaWwobiktLjUsaCxpKX10aGlzLl9iSXNQYWludGVkPSEwfSxlLnByb3RvdHlwZS5tYWtlSW1hZ2U9ZnVuY3Rpb24oKXt0aGlzLl9iSXNQYWludGVkJiZkLmNhbGwodGhpcyxhKX0sZS5wcm90b3R5cGUuaXNQYWludGVkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JJc1BhaW50ZWR9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fb0NvbnRleHQuY2xlYXJSZWN0KDAsMCx0aGlzLl9lbENhbnZhcy53aWR0aCx0aGlzLl9lbENhbnZhcy5oZWlnaHQpLHRoaXMuX2JJc1BhaW50ZWQ9ITF9LGUucHJvdG90eXBlLnJvdW5kPWZ1bmN0aW9uKGEpe3JldHVybiBhP01hdGguZmxvb3IoMWUzKmEpLzFlMzphfSxlfSgpOmZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oYSxiKXt0aGlzLl9lbD1hLHRoaXMuX2h0T3B0aW9uPWJ9O3JldHVybiBhLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj10aGlzLl9odE9wdGlvbixjPXRoaXMuX2VsLGQ9YS5nZXRNb2R1bGVDb3VudCgpLGU9TWF0aC5mbG9vcihiLndpZHRoL2QpLGY9TWF0aC5mbG9vcihiLmhlaWdodC9kKSxnPVsnPHRhYmxlIHN0eWxlPVwiYm9yZGVyOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1wiPiddLGg9MDtkPmg7aCsrKXtnLnB1c2goXCI8dHI+XCIpO2Zvcih2YXIgaT0wO2Q+aTtpKyspZy5wdXNoKCc8dGQgc3R5bGU9XCJib3JkZXI6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7cGFkZGluZzowO21hcmdpbjowO3dpZHRoOicrZStcInB4O2hlaWdodDpcIitmK1wicHg7YmFja2dyb3VuZC1jb2xvcjpcIisoYS5pc0RhcmsoaCxpKT9iLmNvbG9yRGFyazpiLmNvbG9yTGlnaHQpKyc7XCI+PC90ZD4nKTtnLnB1c2goXCI8L3RyPlwiKX1nLnB1c2goXCI8L3RhYmxlPlwiKSxjLmlubmVySFRNTD1nLmpvaW4oXCJcIik7dmFyIGo9Yy5jaGlsZE5vZGVzWzBdLGs9KGIud2lkdGgtai5vZmZzZXRXaWR0aCkvMixsPShiLmhlaWdodC1qLm9mZnNldEhlaWdodCkvMjtrPjAmJmw+MCYmKGouc3R5bGUubWFyZ2luPWwrXCJweCBcIitrK1wicHhcIil9LGEucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fZWwuaW5uZXJIVE1MPVwiXCJ9LGF9KCk7UVJDb2RlPWZ1bmN0aW9uKGEsYil7aWYodGhpcy5faHRPcHRpb249e3dpZHRoOjI1NixoZWlnaHQ6MjU2LHR5cGVOdW1iZXI6NCxjb2xvckRhcms6XCIjMDAwMDAwXCIsY29sb3JMaWdodDpcIiNmZmZmZmZcIixjb3JyZWN0TGV2ZWw6ZC5IfSxcInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9e3RleHQ6Yn0pLGIpZm9yKHZhciBjIGluIGIpdGhpcy5faHRPcHRpb25bY109YltjXTtcInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpLHRoaXMuX2FuZHJvaWQ9bigpLHRoaXMuX2VsPWEsdGhpcy5fb1FSQ29kZT1udWxsLHRoaXMuX29EcmF3aW5nPW5ldyBxKHRoaXMuX2VsLHRoaXMuX2h0T3B0aW9uKSx0aGlzLl9odE9wdGlvbi50ZXh0JiZ0aGlzLm1ha2VDb2RlKHRoaXMuX2h0T3B0aW9uLnRleHQpfSxRUkNvZGUucHJvdG90eXBlLm1ha2VDb2RlPWZ1bmN0aW9uKGEpe3RoaXMuX29RUkNvZGU9bmV3IGIocihhLHRoaXMuX2h0T3B0aW9uLmNvcnJlY3RMZXZlbCksdGhpcy5faHRPcHRpb24uY29ycmVjdExldmVsKSx0aGlzLl9vUVJDb2RlLmFkZERhdGEoYSksdGhpcy5fb1FSQ29kZS5tYWtlKCksdGhpcy5fZWwudGl0bGU9YSx0aGlzLl9vRHJhd2luZy5kcmF3KHRoaXMuX29RUkNvZGUpLHRoaXMubWFrZUltYWdlKCl9LFFSQ29kZS5wcm90b3R5cGUubWFrZUltYWdlPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fb0RyYXdpbmcubWFrZUltYWdlJiYoIXRoaXMuX2FuZHJvaWR8fHRoaXMuX2FuZHJvaWQ+PTMpJiZ0aGlzLl9vRHJhd2luZy5tYWtlSW1hZ2UoKX0sUVJDb2RlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX29EcmF3aW5nLmNsZWFyKCl9LFFSQ29kZS5Db3JyZWN0TGV2ZWw9ZH0oKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9