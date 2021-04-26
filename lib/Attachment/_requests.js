"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRequest = exports.uploadRequest = exports.downloadRequest = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var downloadSuccess = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var receivedFile;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            receivedFile = data.result;
            return _context.abrupt("return", {
              file: {
                name: receivedFile.file_name,
                size: receivedFile.size_bytes,
                type: receivedFile.content_type,
                link: receivedFile.download_link
              },
              tableName: receivedFile.table_name,
              tableSysId: receivedFile.table_sys_id,
              attachmentSysId: receivedFile.sys_id
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function downloadSuccess(_x) {
    return _ref.apply(this, arguments);
  };
}();

var uploadSuccess = function uploadSuccess(data, file) {
  var resultFile = data.result;
  return {
    systemMessages: [],
    file: file,
    attachmentSysId: resultFile.sys_id,
    displayValue: resultFile.file_name
  };
};

var errorMessage = function errorMessage(error, delay) {
  var errorIcon = "exclamation-circle";
  return {
    systemMessages: [{
      content: error.toString(),
      icon: errorIcon,
      delay: delay
    }]
  };
};

var downloadRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(attachmentSysId, delay) {
    var _window, _window2, url, requestOptions, response, data, error;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!attachmentSysId) {
              _context2.next = 19;
              break;
            }

            url = "/api/now/attachment/".concat(attachmentSysId);
            requestOptions = {
              method: 'GET',
              credentials: 'same-origin',
              headers: {
                'content-type': "application/json",
                'X-Transaction-Source': (_window = window) === null || _window === void 0 ? void 0 : _window.transaction_source,
                'X-UserToken': (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.g_ck
              }
            };
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();

          case 9:
            data = _context2.sent;

            if (response.ok) {
              _context2.next = 13;
              break;
            }

            error = data && data.message || response.statusText;
            return _context2.abrupt("return", errorMessage(error, delay));

          case 13:
            return _context2.abrupt("return", downloadSuccess(data));

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 16]]);
  }));

  return function downloadRequest(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.downloadRequest = downloadRequest;

var uploadRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file, tableSysId, tableName, delay) {
    var url, modifiedTableName, data, requestOptions, response, _data, error;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(tableName && tableSysId)) {
              _context3.next = 24;
              break;
            }

            url = "/api/now/attachment/upload";
            modifiedTableName = 'ZZ_YY' + tableName;
            data = new FormData();
            data.append('table_name', modifiedTableName);
            data.append('table_sys_id', tableSysId);
            data.append('file', file);
            requestOptions = {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              },
              body: data
            };
            _context3.prev = 8;
            _context3.next = 11;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 11:
            response = _context3.sent;
            _context3.next = 14;
            return response.json();

          case 14:
            _data = _context3.sent;

            if (response.ok) {
              _context3.next = 18;
              break;
            }

            error = _data && _data.message || response.statusText;
            return _context3.abrupt("return", errorMessage(error, delay));

          case 18:
            return _context3.abrupt("return", uploadSuccess(_data, file));

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](8);
            console.log(_context3.t0);

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[8, 21]]);
  }));

  return function uploadRequest(_x4, _x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.uploadRequest = uploadRequest;

var deleteRequest = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(attachmentSysId, input, delay) {
    var url, requestOptions, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!attachmentSysId) {
              _context4.next = 16;
              break;
            }

            url = "/api/now/attachment/".concat(attachmentSysId);
            requestOptions = {
              method: 'DELETE',
              credentials: 'same-origin',
              headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              }
            };
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 6:
            response = _context4.sent;

            if (response.ok) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", errorMessage(response.statusText, delay));

          case 9:
            if (input) input.value = "";
            return _context4.abrupt("return", {
              systemMessages: [],
              file: undefined,
              attachmentSysId: undefined
            });

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 13]]);
  }));

  return function deleteRequest(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteRequest = deleteRequest;