import {ATTACHMENT} from './constants'

export const getFileExtensions = (fileName) => {
    let splitted = fileName.split('.');
    if(splitted.length>1)
        return splitted[splitted.length-1]
    return "";
}


export const sameContent = (fileType, content) => {
    return content.some(el=> el === fileType)
}

const isMediaType = (fileType, mediaType) => {
    let type = fileType.split("/")[0];
    return type === mediaType;
}

export const getIconByFileType = (fileType) => {
    const {CONTENT_TYPE, IMAGE_ICON} = ATTACHMENT;
    switch (true) {
        case (isMediaType(fileType, CONTENT_TYPE.MEDIA_TYPE.IMAGE)) :
            return IMAGE_ICON.IMAGE;
        case (sameContent(fileType, CONTENT_TYPE.WORD)):
            return IMAGE_ICON.WORD;
        case (sameContent(fileType, CONTENT_TYPE.EXCEL)):
            return IMAGE_ICON.EXCEL;
        case(sameContent(fileType, CONTENT_TYPE.PDF)):
            return IMAGE_ICON.PDF;
        case (sameContent(fileType, CONTENT_TYPE.POWER_POINT)):
            return IMAGE_ICON.POWER_POINT;
        case (sameContent(fileType, CONTENT_TYPE.ARCHIVE)):
            return IMAGE_ICON.ARCHIVE;
        case(isMediaType(fileType, CONTENT_TYPE.MEDIA_TYPE.AUDIO)):
            return IMAGE_ICON.AUDIO;
        case (isMediaType(fileType, CONTENT_TYPE.MEDIA_TYPE.VIDEO)):
            return IMAGE_ICON.VIDEO;
        default: return IMAGE_ICON.DEFAULT;
    }
}