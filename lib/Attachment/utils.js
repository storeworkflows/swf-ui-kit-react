"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconByFileType = exports.sameContent = exports.getFileExtensions = void 0;

var _constants = require("./constants");

var getFileExtensions = function getFileExtensions(fileName) {
  var splitted = fileName.split('.');
  if (splitted.length > 1) return splitted[splitted.length - 1];
  return "";
};

exports.getFileExtensions = getFileExtensions;

var sameContent = function sameContent(fileType, content) {
  return content.some(function (el) {
    return el === fileType;
  });
};

exports.sameContent = sameContent;

var isMediaType = function isMediaType(fileType, mediaType) {
  var type = fileType.split("/")[0];
  return type === mediaType;
};

var getIconByFileType = function getIconByFileType(fileType) {
  var CONTENT_TYPE = _constants.ATTACHMENT.CONTENT_TYPE,
      IMAGE_ICON = _constants.ATTACHMENT.IMAGE_ICON;

  switch (true) {
    case isMediaType(fileType, CONTENT_TYPE.MEDIA_TYPE.IMAGE):
      return IMAGE_ICON.IMAGE;

    case sameContent(fileType, CONTENT_TYPE.WORD):
      return IMAGE_ICON.WORD;

    case sameContent(fileType, CONTENT_TYPE.EXCEL):
      return IMAGE_ICON.EXCEL;

    case sameContent(fileType, CONTENT_TYPE.PDF):
      return IMAGE_ICON.PDF;

    case sameContent(fileType, CONTENT_TYPE.POWER_POINT):
      return IMAGE_ICON.POWER_POINT;

    case sameContent(fileType, CONTENT_TYPE.ARCHIVE):
      return IMAGE_ICON.ARCHIVE;

    case isMediaType(fileType, CONTENT_TYPE.MEDIA_TYPE.AUDIO):
      return IMAGE_ICON.AUDIO;

    case isMediaType(fileType, CONTENT_TYPE.MEDIA_TYPE.VIDEO):
      return IMAGE_ICON.VIDEO;

    default:
      return IMAGE_ICON.DEFAULT;
  }
};

exports.getIconByFileType = getIconByFileType;