Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = graphqlRequest;

const _crossFetch = _interopRequireDefault(require('cross-fetch'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

const DEFAULT_GQL_ENDPOINT = 'api/now/graphql';

function graphqlRequest(_ref) {
  const _ref$operationName = _ref.operationName;
  const operationName = _ref$operationName === void 0 ? '' : _ref$operationName;
  const _ref$query = _ref.query;
  const query = _ref$query === void 0 ? {} : _ref$query;
  const _ref$variables = _ref.variables;
  const variables = _ref$variables === void 0 ? {} : _ref$variables;
  const _ref$params = _ref.params;
  const params = _ref$params === void 0 ? {} : _ref$params;

  const options = _objectSpread(_objectSpread({
    method: 'POST',
  }, params), {}, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
      'X-Transaction-Source': window.transaction_source,
      'X-UserToken': window.g_ck,
    },
    body: JSON.stringify([{
      operationName,
      query,
      variables,
    }]),
  });

  return (0, _crossFetch.default)(DEFAULT_GQL_ENDPOINT, options);
}
