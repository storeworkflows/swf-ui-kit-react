Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getIconByFileType = exports.checkFileToUpload = exports.sameContent = exports.getFileExtensions = void 0;

const _constants = require('./constants');

const getFileExtensions = function getFileExtensions(fileName) {
  const splitted = fileName.split('.');
  if (splitted.length > 1) return splitted[splitted.length - 1];
  return '';
};

exports.getFileExtensions = getFileExtensions;

const sameContent = function sameContent(fileType, content) {
  return content.some((el) => el === fileType);
};

exports.sameContent = sameContent;

const isMediaType = function isMediaType(fileType, mediaType) {
  const type = fileType.split('/')[0];
  return type === mediaType;
};

const checkFileToUpload = function checkFileToUpload(file, props) {
  const { maxAttachmentSize } = props;
  const { contentType } = props;
  const { extensions } = props;
  const { errorMessagesDelay } = props;
  const { tableSysId } = props;
  const { tableName } = props;
  const isFitSize = maxAttachmentSize ? file.size <= maxAttachmentSize : true;
  const isFitType = contentType ? contentType.includes(file.type) : true;
  const isFitExtensions = extensions ? extensions.includes(getFileExtensions(file.name)) : true;
  const errorIcon = 'exclamation-circle';
  const errorMessages = [];
  const delay = errorMessagesDelay;
  if (!isFitType) {
    errorMessages.push({
      content: 'Available types: '.concat(contentType.join(', ')),
      icon: errorIcon,
      delay,
    });
  }
  if (!isFitSize) {
    errorMessages.push({
      content: 'Max file size = '.concat(maxAttachmentSize / 1024, ' Kb'),
      icon: errorIcon,
      delay,
    });
  }
  if (!isFitExtensions) {
    errorMessages.push({
      content: 'Available extensions: '.concat(extensions.join(', ')),
      icon: errorIcon,
      delay,
    });
  }
  if (!tableSysId || !tableName) {
    errorMessages.push({
      content: "Can't get access to table",
      icon: errorIcon,
      delay,
    });
  }
  return errorMessages;
};

exports.checkFileToUpload = checkFileToUpload;

const getIconByFileType = function getIconByFileType(fileType) {
  const { CONTENT_TYPE } = _constants.ATTACHMENT;
  const { IMAGE_ICON } = _constants.ATTACHMENT;

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
