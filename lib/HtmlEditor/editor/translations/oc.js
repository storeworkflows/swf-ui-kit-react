"use strict";

!function (n) {
  var i = n.oc = n.oc || {};
  i.dictionary = Object.assign(i.dictionary || {}, {
    Bold: "Gras",
    Cancel: "Anullar",
    Code: "",
    Italic: "Italica",
    Save: "Enregistrar",
    Underline: ""
  }), i.getPluralForm = function (n) {
    return n > 1;
  };
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));