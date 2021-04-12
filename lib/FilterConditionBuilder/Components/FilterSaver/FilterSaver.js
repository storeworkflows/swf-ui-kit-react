"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _Requests = require("./Requests");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FilterSaver = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterSaver, _React$Component);

  var _super = _createSuper(FilterSaver);

  function FilterSaver(props) {
    var _this;

    _classCallCheck(this, FilterSaver);

    _this = _super.call(this, props);
    _this.state = {
      filterTitle: '',
      radioValue: 'Me',
      groupDropdownItems: [],
      groupValue: '',
      isAdmin: false
    };
    _this.handleInputTitle = _this.handleInputTitle.bind(_assertThisInitialized(_this));
    _this.handleRadioChanged = _this.handleRadioChanged.bind(_assertThisInitialized(_this));
    _this.handleDropdownItemSelected = _this.handleDropdownItemSelected.bind(_assertThisInitialized(_this));
    _this.handleSaveClicked = _this.handleSaveClicked.bind(_assertThisInitialized(_this));
    _this.radioOptions = ['Me', 'Everyone', 'Group'];
    return _this;
  }

  _createClass(FilterSaver, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.setState({ isAdmin: window.swfPortalUser.isTeamworkAdmin });
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(prevProps, prevState) {
        var groups, groupDropdownItems;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(prevState.radioValue !== this.state.radioValue && this.state.radioValue === 'Group')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return (0, _Requests.fetchGroupList)();

              case 3:
                groups = _context.sent;
                groupDropdownItems = groups.map(function (group) {
                  return {
                    id: group.sys_id,
                    label: group.name
                  };
                });
                this.setState({
                  groupDropdownItems: groupDropdownItems
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x, _x2) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "handleInputTitle",
    value: function handleInputTitle(e) {
      this.setState({
        filterTitle: e.target.value
      });
    }
  }, {
    key: "handleRadioChanged",
    value: function handleRadioChanged(e) {
      this.setState({
        radioValue: e.id,
        groupValue: ''
      });
    }
  }, {
    key: "handleDropdownItemSelected",
    value: function handleDropdownItemSelected(e) {
      var id = e.clickedItem.id;
      this.setState({
        groupValue: id
      });
    }
  }, {
    key: "handleSaveClicked",
    value: function () {
      var _handleSaveClicked = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this$props, user, table, query, isFilterSaved, _this$state, filterTitle, radioValue, groupValue, filterData, response, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = this.props, user = _this$props.user, table = _this$props.table, query = _this$props.query, isFilterSaved = _this$props.isFilterSaved;
                _this$state = this.state, filterTitle = _this$state.filterTitle, radioValue = _this$state.radioValue, groupValue = _this$state.groupValue;
                filterData = {
                  table: table,
                  filter: query,
                  group: groupValue,
                  user: radioValue === 'Everyone' ? '' : user,
                  title: filterTitle.trim()
                };
                _context2.next = 5;
                return (0, _Requests.postFilter)(filterData);

              case 5:
                response = _context2.sent;
                result = response.result;
                result.sys_id ? isFilterSaved({
                  isSaved: true
                }) : isFilterSaved({
                  isSaved: false
                });

                if (result) {
                  this.setState({
                    filterTitle: '',
                    radioValue: 'Me',
                    groupValue: ''
                  });
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSaveClicked() {
        return _handleSaveClicked.apply(this, arguments);
      }

      return handleSaveClicked;
    }()
  }, {
    key: "_getRadioOptions",
    value: function _getRadioOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var radioValue = this.state.radioValue;
      if (Array.isArray(options)) return options.map(function (option) {
        return {
          id: option,
          label: option,
          checked: option === radioValue
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          filterTitle = _this$state2.filterTitle,
          radioValue = _this$state2.radioValue,
          groupValue = _this$state2.groupValue,
          groupDropdownItems = _this$state2.groupDropdownItems,
          isAdmin = _this$state2.isAdmin;
      var radioValues = !isAdmin ? this.radioOptions : ['Me'];

      var radioOptions = this._getRadioOptions(radioValues);

      var isButtonDisabled = !filterTitle || radioValue === 'Group' && !groupValue;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "filter-saver",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "input-title__container input-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
            type: "text",
            label: "Filter title",
            value: filterTitle,
            onInput: this.handleInputTitle,
            autofocus: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "radio-buttons__container input-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.RadioButtons, {
            layout: "horizontal",
            label: "Visible to:",
            manageValue: true,
            options: radioOptions,
            onChange: this.handleRadioChanged
          })
        }), radioValue === "Group" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "group-dropdown__container input-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Dropdown, {
            manageSelectedItems: true,
            items: groupDropdownItems,
            selectedItems: [groupValue],
            onItemSelected: this.handleDropdownItemSelected,
            placeholder: "Group list"
          })
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "button-save__container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            label: "Save",
            variant: "primary",
            disabled: isButtonDisabled,
            onClick: this.handleSaveClicked
          })
        })]
      });
    }
  }]);

  return FilterSaver;
}(React.Component);

var _default = FilterSaver;
exports["default"] = _default;