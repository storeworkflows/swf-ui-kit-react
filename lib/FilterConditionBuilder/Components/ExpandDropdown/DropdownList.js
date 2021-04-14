"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownList = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownList, _React$Component);

  var _super = _createSuper(DropdownList);

  function DropdownList(props) {
    var _this;

    _classCallCheck(this, DropdownList);

    _this = _super.call(this, props);

    _this.onSearch = function (_ref) {
      var value = _ref.value;
      var items = _this.props.items;
      var searchValue = value.trim();
      var filteredList = items.filter(function (item) {
        return !!item.label.toLowerCase().match(searchValue.toLowerCase());
      });

      _this.setState({
        searchValue: searchValue,
        filteredList: filteredList
      });
    };

    _this.state = {
      opened: _this.props.opened,
      selectedItems: _this.props.selectedItems,
      searchValue: "",
      filteredList: []
    };
    _this.inputRef = null;
    return _this;
  }

  _createClass(DropdownList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!!this.inputRef) setTimeout(function () {
        return _this2.inputRef.focus();
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          items = _this$props.items,
          expandIcon = _this$props.expandIcon,
          selectedItems = _this$props.selectedItems,
          onSelectAction = _this$props.onSelectAction,
          listIndex = _this$props.listIndex;
      var _this$state = this.state,
          searchValue = _this$state.searchValue,
          filteredList = _this$state.filteredList;
      var valueToShow = !!searchValue && !!filteredList.length ? filteredList : items;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "dropdown-list-container": true,
            "--not-first": listIndex > 0
          }),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "swf-form-group",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "input-group",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "text",
                ref: function ref(elem) {
                  return !_this3.inputRef ? _this3.inputRef = elem : function () {
                    return void 0;
                  };
                },
                className: "form-control",
                autoFocus: true,
                placeholder: "Search",
                value: searchValue,
                onChange: function onChange(e) {
                  return _this3.onSearch({
                    value: e.target.value
                  });
                }
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "dropdown-list",
            children: valueToShow.map(function (item) {
              var id = item.id,
                  label = item.label,
                  disabled = item.disabled,
                  reference = item.reference;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownItem["default"], {
                onSelectAction: onSelectAction,
                id: id,
                label: label,
                disabled: _this3.props.disabled || disabled,
                isSelected: selectedItems[listIndex] ? selectedItems[listIndex].id === id : false,
                expandIcon: expandIcon,
                reference: reference === "true",
                listIndex: listIndex,
                isDropdown: selectedItems[listIndex] ? selectedItems[listIndex].dropdownClicked && selectedItems[listIndex].id === id : false
              }, id + listIndex);
            })
          })]
        })
      });
    }
  }]);

  return DropdownList;
}(React.Component);

exports["default"] = DropdownList;