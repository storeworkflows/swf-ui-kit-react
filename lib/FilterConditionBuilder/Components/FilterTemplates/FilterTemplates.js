"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _PopoverContent = _interopRequireDefault(require("./PopoverContent/PopoverContent"));

var _index = require("../../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var FilterTemplates = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTemplates, _React$Component);

  var _super = _createSuper(FilterTemplates);

  function FilterTemplates(props) {
    var _this;

    _classCallCheck(this, FilterTemplates);

    _this = _super.call(this, props);

    _this.handleSelectItem = function (_ref) {
      var clickedItem = _ref.clickedItem;
      var setQuery = _this.props.setQuery;

      _this.setState({
        selectedItem: clickedItem
      });

      setQuery({
        query: clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.id
      });
    };

    _this.state = {
      popoverToogle: false,
      popoverTarget: null,
      btnRef: null,
      filteredValues: [],
      searchValue: "",
      selectedItem: {
        id: "",
        label: ""
      }
    };
    return _this;
  }

  _createClass(FilterTemplates, [{
    key: "render",
    value: function render() {
      var filterList = this.props.filterList;
      var selectedItem = this.state.selectedItem;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          marginRight: "1rem"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Dropdown, {
          items: filterList.map(function (_ref2) {
            var title = _ref2.title,
                filter = _ref2.filter;
            return {
              id: filter,
              label: title
            };
          }),
          manageSelectedItems: true,
          onItemSelected: this.handleSelectItem,
          selectedItems: [selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id],
          select: "single",
          placeholder: "-- Choose filter --"
        })
      });
    }
  }]);

  return FilterTemplates;
}(React.Component);

exports["default"] = FilterTemplates;