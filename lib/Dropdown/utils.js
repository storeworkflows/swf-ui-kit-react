"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemById = void 0;

var getItemById = function getItemById(id, items) {
  var result = null;
  items.map(function (el) {
    if (el.id === id) result = el;
  });
  return result;
};

exports.getItemById = getItemById;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXRJdGVtQnlJZCIsImlkIiwiaXRlbXMiLCJyZXN1bHQiLCJtYXAiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU9BLFdBQVcsR0FBSSxTQUFmQSxXQUFlLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3hDLE1BQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsR0FBTixDQUFXLFVBQUFDLEVBQUUsRUFBSTtBQUNiLFFBQUdBLEVBQUUsQ0FBQ0osRUFBSCxLQUFVQSxFQUFiLEVBQ0lFLE1BQU0sR0FBR0UsRUFBVDtBQUNQLEdBSEQ7QUFJQSxTQUFPRixNQUFQO0FBQ0gsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCAgZ2V0SXRlbUJ5SWQgID0gKGlkLCBpdGVtcykgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBpdGVtcy5tYXAoIGVsID0+IHtcclxuICAgICAgICBpZihlbC5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGVsO1xyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIl19