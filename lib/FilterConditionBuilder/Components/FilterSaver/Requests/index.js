Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.postFilter = exports.fetchGroupList = void 0;

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
  };
}

const fetchRequest = /* #__PURE__ */(function () {
  const _ref2 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee(_ref) {
    let url; let _ref$params; let params; let result; let response; let
      resultJson;

    return regeneratorRuntime.wrap((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
            _context.prev = 1;
            _context.next = 4;
            return fetch(url, _objectSpread(_objectSpread({}, params), {}, {
              credentials: 'same-origin',
              headers: {
                'content-type': 'application/json',
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck,
              },
            }));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            resultJson = _context.sent;
            result = Array.isArray(resultJson.result) ? resultJson.result.slice(0) : resultJson;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context.catch(1);
            console.error(_context.t0);

          case 14:
            return _context.abrupt('return', result);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function fetchRequest(_x) {
    return _ref2.apply(this, arguments);
  };
}());

const prepareQueryParams = function prepareQueryParams(obj) {
  return Object.keys(obj).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
};

const fetchGroupList = /* #__PURE__ */(function () {
  const _ref3 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
    let endpoint; let queryParams; let query; let url; let
      params;
    return regeneratorRuntime.wrap((_context2) => {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoint = '/api/now/table/sys_user_group';
            queryParams = {
              sysparm_query: 'active=true',
              sysparm_fields: 'sys_id,name,description',
            };
            query = prepareQueryParams(queryParams);
            url = ''.concat(endpoint, '?').concat(query);
            params = {
              method: 'GET',
            };
            _context2.next = 7;
            return fetchRequest({
              url,
              params,
            });

          case 7:
            return _context2.abrupt('return', _context2.sent);

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchGroupList() {
    return _ref3.apply(this, arguments);
  };
}());

exports.fetchGroupList = fetchGroupList;

const postFilter = /* #__PURE__ */(function () {
  const _ref4 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3(data) {
    let url; let
      params;
    return regeneratorRuntime.wrap((_context3) => {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = '/api/now/table/sys_filter';
            params = {
              method: 'POST',
              body: JSON.stringify(data),
            };
            _context3.next = 4;
            return fetchRequest({
              url,
              params,
            });

          case 4:
            return _context3.abrupt('return', _context3.sent);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function postFilter(_x2) {
    return _ref4.apply(this, arguments);
  };
}());

exports.postFilter = postFilter;
