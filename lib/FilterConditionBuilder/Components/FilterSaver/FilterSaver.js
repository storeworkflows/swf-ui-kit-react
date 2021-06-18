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

    _this.handleLookupFieldValue = function (name, sys_id, dispVal) {
      _this.setState({
        lookupFieldVal: {
          name: name,
          sys_id: sys_id,
          dispVal: dispVal
        },
        groupValue: sys_id
      });
    };

    _this.state = {
      filterTitle: '',
      radioValue: 'Group',
      groupValue: _this.props.defaultGroup ? _this.props.defaultGroup.sys_id : "",
      isAdmin: false,
      lookupFieldVal: {
        name: "group",
        sys_id: _this.props.defaultGroup ? _this.props.defaultGroup.sys_id : null,
        dispVal: _this.props.defaultGroup ? _this.props.defaultGroup.displayValue : null
      }
    };
    _this.handleInputTitle = _this.handleInputTitle.bind(_assertThisInitialized(_this));
    _this.handleRadioChanged = _this.handleRadioChanged.bind(_assertThisInitialized(_this));
    _this.handleSaveClicked = _this.handleSaveClicked.bind(_assertThisInitialized(_this));
    _this.radioOptions = ['Me', 'Everyone', 'Group'];
    return _this;
  }

  _createClass(FilterSaver, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.setState({ isAdmin: window.swfPortalUser.isTeamworkAdmin });
    }
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
        groupValue: !(e.id === "Group") ? '' : this.props.defaultGroup.sys_id
      });
    }
  }, {
    key: "handleSaveClicked",
    value: function () {
      var _handleSaveClicked = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props, user, table, query, isFilterSaved, _this$state, filterTitle, radioValue, groupValue, filterData, response, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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
                _context.next = 5;
                return (0, _Requests.postFilter)(filterData);

              case 5:
                response = _context.sent;
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
                return _context.stop();
            }
          }
        }, _callee, this);
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
          isAdmin = _this$state2.isAdmin,
          lookupFieldVal = _this$state2.lookupFieldVal;
      var query = this.props.query;
      var radioValues = !isAdmin ? this.radioOptions : ['Me'];

      var radioOptions = this._getRadioOptions(radioValues);

      var isButtonDisabled = !filterTitle || radioValue === 'Group' && !groupValue || !query;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "filter-saver",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "input-title__container input-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
            type: "text",
            label: "Filter title",
            value: filterTitle,
            onInput: this.handleInputTitle,
            autofocus: true,
            required: true
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.LookupField, {
            type: "reference",
            table: "sys_filter",
            required: true,
            visible: true,
            name: "group",
            label: "Group",
            onValueChange: this.handleLookupFieldValue,
            value: lookupFieldVal.sys_id,
            content: lookupFieldVal.sys_id,
            manageInvalid: false,
            displayValue: lookupFieldVal.dispVal
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyU2F2ZXIvRmlsdGVyU2F2ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyU2F2ZXIiLCJwcm9wcyIsImhhbmRsZUxvb2t1cEZpZWxkVmFsdWUiLCJuYW1lIiwic3lzX2lkIiwiZGlzcFZhbCIsInNldFN0YXRlIiwibG9va3VwRmllbGRWYWwiLCJncm91cFZhbHVlIiwic3RhdGUiLCJmaWx0ZXJUaXRsZSIsInJhZGlvVmFsdWUiLCJkZWZhdWx0R3JvdXAiLCJpc0FkbWluIiwiZGlzcGxheVZhbHVlIiwiaGFuZGxlSW5wdXRUaXRsZSIsImJpbmQiLCJoYW5kbGVSYWRpb0NoYW5nZWQiLCJoYW5kbGVTYXZlQ2xpY2tlZCIsInJhZGlvT3B0aW9ucyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwidXNlciIsInRhYmxlIiwicXVlcnkiLCJpc0ZpbHRlclNhdmVkIiwiZmlsdGVyRGF0YSIsImZpbHRlciIsImdyb3VwIiwidGl0bGUiLCJ0cmltIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJpc1NhdmVkIiwib3B0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm9wdGlvbiIsImxhYmVsIiwiY2hlY2tlZCIsInJhZGlvVmFsdWVzIiwiX2dldFJhZGlvT3B0aW9ucyIsImlzQnV0dG9uRGlzYWJsZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQWtDbkJDLHNCQWxDbUIsR0FrQ00sVUFBQ0MsSUFBRCxFQUFPQyxNQUFQLEVBQWVDLE9BQWYsRUFBMkI7QUFDaEQsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLGNBQWMsRUFB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QUVLLGNBQWMsQ0FBQ0gsTUFSMUI7QUFTSSxZQUFBLE9BQU8sRUFBRUcsY0FBYyxDQUFDSCxNQVQ1QjtBQVVJLFlBQUEsYUFBYSxFQUFFLEtBVm5CO0FBV0ksWUFBQSxZQUFZLEVBQUVHLGNBQWMsQ0FBQ0Y7QUFYakM7QUFESixVQURKLEdBZ0JNLElBdENkLGVBd0NJO0FBQUssVUFBQSxTQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDSSxxQkFBQyxhQUFEO0FBQ0ksWUFBQSxLQUFLLEVBQUMsTUFEVjtBQUVJLFlBQUEsT0FBTyxFQUFDLFNBRlo7QUFHSSxZQUFBLFFBQVEsRUFBRXdDLGdCQUhkO0FBSUksWUFBQSxPQUFPLEVBQUUsS0FBSzNCO0FBSmxCO0FBREosVUF4Q0o7QUFBQSxRQURKO0FBbURIOzs7O0VBM0lxQjRCLEtBQUssQ0FBQ0MsUzs7ZUE4SWpCL0MsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IElucHV0LCBSYWRpb0J1dHRvbnMsIEJ1dHRvbiwgRHJvcGRvd24sIExvb2t1cEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmZXRjaEdyb3VwTGlzdCwgcG9zdEZpbHRlciB9IGZyb20gJy4vUmVxdWVzdHMnO1xyXG5cclxuY2xhc3MgRmlsdGVyU2F2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlclRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmFkaW9WYWx1ZTogJ0dyb3VwJyxcclxuICAgICAgICAgICAgZ3JvdXBWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0R3JvdXAgPyB0aGlzLnByb3BzLmRlZmF1bHRHcm91cC5zeXNfaWQgOiBcIlwiLFxyXG4gICAgICAgICAgICBpc0FkbWluOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9va3VwRmllbGRWYWw6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZ3JvdXBcIixcclxuICAgICAgICAgICAgICAgIHN5c19pZDogdGhpcy5wcm9wcy5kZWZhdWx0R3JvdXAgPyB0aGlzLnByb3BzLmRlZmF1bHRHcm91cC5zeXNfaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGlzcFZhbDogdGhpcy5wcm9wcy5kZWZhdWx0R3JvdXAgPyB0aGlzLnByb3BzLmRlZmF1bHRHcm91cC5kaXNwbGF5VmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUlucHV0VGl0bGUgPSB0aGlzLmhhbmRsZUlucHV0VGl0bGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlZCA9IHRoaXMuaGFuZGxlUmFkaW9DaGFuZ2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTYXZlQ2xpY2tlZCA9IHRoaXMuaGFuZGxlU2F2ZUNsaWNrZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWRpb09wdGlvbnMgPSBbJ01lJywgJ0V2ZXJ5b25lJywgJ0dyb3VwJ107XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGlzQWRtaW46IHdpbmRvdy5zd2ZQb3J0YWxVc2VyLmlzVGVhbXdvcmtBZG1pbiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnB1dFRpdGxlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmFkaW9DaGFuZ2VkKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmFkaW9WYWx1ZTogZS5pZCwgZ3JvdXBWYWx1ZTogIShlLmlkID09PSBcIkdyb3VwXCIpID8gJycgOiB0aGlzLnByb3BzLmRlZmF1bHRHcm91cC5zeXNfaWQgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMb29rdXBGaWVsZFZhbHVlID0gKG5hbWUsIHN5c19pZCwgZGlzcFZhbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvb2t1cEZpZWxkVmFsOiB7bmFtZSwgc3lzX2lkLCBkaXNwVmFsfSwgZ3JvdXBWYWx1ZTogc3lzX2lkfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVTYXZlQ2xpY2tlZCgpIHtcclxuICAgICAgICBjb25zdCB7IHVzZXIsIHRhYmxlLCBxdWVyeSwgaXNGaWx0ZXJTYXZlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGZpbHRlclRpdGxlLCByYWRpb1ZhbHVlLCBncm91cFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIHRhYmxlLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IHF1ZXJ5LFxyXG4gICAgICAgICAgICBncm91cDogZ3JvdXBWYWx1ZSxcclxuICAgICAgICAgICAgdXNlcjogcmFkaW9WYWx1ZSA9PT0gJ0V2ZXJ5b25lJyA/ICcnIDogdXNlcixcclxuICAgICAgICAgICAgdGl0bGU6IGZpbHRlclRpdGxlLnRyaW0oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0RmlsdGVyKGZpbHRlckRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSByZXNwb25zZTtcclxuICAgICAgICByZXN1bHQuc3lzX2lkID8gaXNGaWx0ZXJTYXZlZCh7aXNTYXZlZDogdHJ1ZX0pIDogaXNGaWx0ZXJTYXZlZCh7aXNTYXZlZDogZmFsc2V9KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9WYWx1ZTogJ01lJyxcclxuICAgICAgICAgICAgICAgIGdyb3VwVmFsdWU6ICcnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRSYWRpb09wdGlvbnMob3B0aW9ucyA9IFtdKSB7XHJcbiAgICAgICAgY29uc3QgeyByYWRpb1ZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5tYXAob3B0aW9uID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogb3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbixcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG9wdGlvbiA9PT0gcmFkaW9WYWx1ZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZmlsdGVyVGl0bGUsXHJcbiAgICAgICAgICAgIHJhZGlvVmFsdWUsXHJcbiAgICAgICAgICAgIGdyb3VwVmFsdWUsXHJcbiAgICAgICAgICAgIGlzQWRtaW4sXHJcbiAgICAgICAgICAgIGxvb2t1cEZpZWxkVmFsXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWVzID0gIWlzQWRtaW4gPyB0aGlzLnJhZGlvT3B0aW9ucyA6IFsnTWUnXTtcclxuICAgICAgICBjb25zdCByYWRpb09wdGlvbnMgPSB0aGlzLl9nZXRSYWRpb09wdGlvbnMocmFkaW9WYWx1ZXMpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0J1dHRvbkRpc2FibGVkID0gIWZpbHRlclRpdGxlIHx8IChyYWRpb1ZhbHVlID09PSAnR3JvdXAnICYmICFncm91cFZhbHVlKSB8fCAhcXVlcnk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXNhdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXRpdGxlX19jb250YWluZXIgaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlSW5wdXRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1idXR0b25zX19jb250YWluZXIgaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWaXNpYmxlIHRvOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZVZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhZGlvQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9WYWx1ZSA9PT0gXCJHcm91cFwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1kcm9wZG93bl9fY29udGFpbmVyIGlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvb2t1cEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZmVyZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU9XCJzeXNfZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17dGhpcy5oYW5kbGVMb29rdXBGaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb29rdXBGaWVsZFZhbC5zeXNfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bG9va3VwRmllbGRWYWwuc3lzX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZUludmFsaWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT17bG9va3VwRmllbGRWYWwuZGlzcFZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXNhdmVfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNCdXR0b25EaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlclNhdmVyIl19