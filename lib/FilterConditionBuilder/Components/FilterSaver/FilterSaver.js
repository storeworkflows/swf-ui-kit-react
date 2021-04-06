"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Requests = require("./Requests");

var _index = require("../../../index");

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
        var _this$props, user, table, query, _this$state, filterTitle, radioValue, groupValue, filterData, response, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = this.props, user = _this$props.user, table = _this$props.table, query = _this$props.query;
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

                if (result) {
                  this.setState({
                    filterTitle: '',
                    radioValue: 'Me',
                    groupValue: ''
                  });
                }

              case 8:
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
            onInput: this.handleInputTitle
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyU2F2ZXIvRmlsdGVyU2F2ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyU2F2ZXIiLCJwcm9wcyIsInN0YXRlIiwiZmlsdGVyVGl0bGUiLCJyYWRpb1ZhbHVlIiwiZ3JvdXBEcm9wZG93bkl0ZW1zIiwiZ3JvdXBWYWx1ZSIsImlzQWRtaW4iLCJoYW5kbGVJbnB1dFRpdGxlIiwiYmluZCIsImhhbmRsZVJhZGlvQ2hhbmdlZCIsImhhbmRsZURyb3Bkb3duSXRlbVNlbGVjdGVkIiwiaGFuZGxlU2F2ZUNsaWNrZWQiLCJyYWRpb09wdGlvbnMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJncm91cHMiLCJtYXAiLCJncm91cCIsImlkIiwic3lzX2lkIiwibGFiZWwiLCJuYW1lIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGlja2VkSXRlbSIsInVzZXIiLCJ0YWJsZSIsInF1ZXJ5IiwiZmlsdGVyRGF0YSIsImZpbHRlciIsInRpdGxlIiwidHJpbSIsInJlc3BvbnNlIiwicmVzdWx0Iiwib3B0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsIm9wdGlvbiIsImNoZWNrZWQiLCJyYWRpb1ZhbHVlcyIsIl9nZXRSYWRpb09wdGlvbnMiLCJpc0J1dHRvbkRpc2FibGVkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsV0FBVyxFQUFFLEVBREo7QUFFVEMsTUFBQUEsVUFBVSxFQUFFLElBRkg7QUFHVEMsTUFBQUEsa0JBQWtCLEVBQUUsRUFIWDtBQUlUQyxNQUFBQSxVQUFV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cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hHcm91cExpc3QsIHBvc3RGaWx0ZXIgfSBmcm9tICcuL1JlcXVlc3RzJztcclxuaW1wb3J0IHsgSW5wdXQsIFJhZGlvQnV0dG9ucywgQnV0dG9uLCBEcm9wZG93biB9IGZyb20gJy4uLy4uLy4uL2luZGV4JztcclxuXHJcbmNsYXNzIEZpbHRlclNhdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmaWx0ZXJUaXRsZTogJycsXHJcbiAgICAgICAgICAgIHJhZGlvVmFsdWU6ICdNZScsXHJcbiAgICAgICAgICAgIGdyb3VwRHJvcGRvd25JdGVtczogW10sXHJcbiAgICAgICAgICAgIGdyb3VwVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBpc0FkbWluOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dFRpdGxlID0gdGhpcy5oYW5kbGVJbnB1dFRpdGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYWRpb0NoYW5nZWQgPSB0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRHJvcGRvd25JdGVtU2VsZWN0ZWQgPSB0aGlzLmhhbmRsZURyb3Bkb3duSXRlbVNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTYXZlQ2xpY2tlZCA9IHRoaXMuaGFuZGxlU2F2ZUNsaWNrZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWRpb09wdGlvbnMgPSBbJ01lJywgJ0V2ZXJ5b25lJywgJ0dyb3VwJ107XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGlzQWRtaW46IHdpbmRvdy5zd2ZQb3J0YWxVc2VyLmlzVGVhbXdvcmtBZG1pbiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAocHJldlN0YXRlLnJhZGlvVmFsdWUgIT09IHRoaXMuc3RhdGUucmFkaW9WYWx1ZSAmJiB0aGlzLnN0YXRlLnJhZGlvVmFsdWUgPT09ICdHcm91cCcpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgZmV0Y2hHcm91cExpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRHJvcGRvd25JdGVtcyA9IGdyb3Vwcy5tYXAoZ3JvdXAgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBncm91cC5zeXNfaWQsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZ3JvdXAubmFtZVxyXG4gICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBncm91cERyb3Bkb3duSXRlbXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUlucHV0VGl0bGUoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJUaXRsZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSYWRpb0NoYW5nZWQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpb1ZhbHVlOiBlLmlkLCBncm91cFZhbHVlOiAnJyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyb3Bkb3duSXRlbVNlbGVjdGVkKGUpIHtcclxuICAgICAgICBjb25zdCB7IGNsaWNrZWRJdGVtOiB7IGlkIH0gfSA9IGU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdyb3VwVmFsdWU6IGlkIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaGFuZGxlU2F2ZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VyLCB0YWJsZSwgcXVlcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJUaXRsZSwgcmFkaW9WYWx1ZSwgZ3JvdXBWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJEYXRhID0ge1xyXG4gICAgICAgICAgICB0YWJsZSxcclxuICAgICAgICAgICAgZmlsdGVyOiBxdWVyeSxcclxuICAgICAgICAgICAgZ3JvdXA6IGdyb3VwVmFsdWUsXHJcbiAgICAgICAgICAgIHVzZXI6IHJhZGlvVmFsdWUgPT09ICdFdmVyeW9uZScgPyAnJyA6IHVzZXIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmaWx0ZXJUaXRsZS50cmltKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdEZpbHRlcihmaWx0ZXJEYXRhKTtcclxuICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHJhZGlvVmFsdWU6ICdNZScsXHJcbiAgICAgICAgICAgICAgICBncm91cFZhbHVlOiAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmFkaW9PcHRpb25zKG9wdGlvbnMgPSBbXSkge1xyXG4gICAgICAgIGNvbnN0IHsgcmFkaW9WYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSlcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMubWFwKG9wdGlvbiA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IG9wdGlvbixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBvcHRpb24gPT09IHJhZGlvVmFsdWVcclxuICAgICAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZmlsdGVyVGl0bGUsXHJcbiAgICAgICAgICAgIHJhZGlvVmFsdWUsXHJcbiAgICAgICAgICAgIGdyb3VwVmFsdWUsXHJcbiAgICAgICAgICAgIGdyb3VwRHJvcGRvd25JdGVtcyxcclxuICAgICAgICAgICAgaXNBZG1pblxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCByYWRpb1ZhbHVlcyA9ICFpc0FkbWluID8gdGhpcy5yYWRpb09wdGlvbnMgOiBbJ01lJ107XHJcbiAgICAgICAgY29uc3QgcmFkaW9PcHRpb25zID0gdGhpcy5fZ2V0UmFkaW9PcHRpb25zKHJhZGlvVmFsdWVzKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNCdXR0b25EaXNhYmxlZCA9ICFmaWx0ZXJUaXRsZSB8fCAocmFkaW9WYWx1ZSA9PT0gJ0dyb3VwJyAmJiAhZ3JvdXBWYWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXNhdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXRpdGxlX19jb250YWluZXIgaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlSW5wdXRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1idXR0b25zX19jb250YWluZXIgaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWaXNpYmxlIHRvOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZVZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9WYWx1ZSA9PT0gXCJHcm91cFwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1kcm9wZG93bl9fY29udGFpbmVyIGlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlU2VsZWN0ZWRJdGVtcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Z3JvdXBEcm9wZG93bkl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tncm91cFZhbHVlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17dGhpcy5oYW5kbGVEcm9wZG93bkl0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdyb3VwIGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tc2F2ZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0J1dHRvbkRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVDbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU2F2ZXIiXX0=