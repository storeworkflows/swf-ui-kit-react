"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeURL = exports.noop = void 0;

var noop = function noop() {
  return void 0;
};

exports.noop = noop;

var normalizeURL = function normalizeURL(url) {
  var isLocal = location.hostname === "localhost";
  return isLocal ? "https://ven04075.service-now.com".concat(url) : url;
};

exports.normalizeURL = normalizeURL;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub29wIiwibm9ybWFsaXplVVJMIiwidXJsIiwiaXNMb2NhbCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sS0FBSyxDQUFYO0FBQUEsQ0FBYjs7OztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUNqQyxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQixXQUF0QztBQUVBLFNBQU9GLE9BQU8sNkNBQXFDRCxHQUFyQyxJQUE2Q0EsR0FBM0Q7QUFDSCxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB2b2lkIDA7XHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplVVJMID0gKHVybCkgPT4ge1xyXG4gICAgY29uc3QgaXNMb2NhbCA9IGxvY2F0aW9uLmhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiXHJcblxyXG4gICAgcmV0dXJuIGlzTG9jYWwgP2BodHRwczovL3ZlbjA0MDc1LnNlcnZpY2Utbm93LmNvbSR7dXJsfWAgOiB1cmxcclxufSJdfQ==