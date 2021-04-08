import fetch from "cross-fetch";


const downloadSuccess = async (data) => {
    let receivedFile = data.result;
    console.log(data.result);
    return{
        file: {
            name: receivedFile.file_name,
            size: receivedFile.size_bytes,
            type: receivedFile.content_type,
            link: receivedFile.download_link
        },
        tableName: receivedFile.table_name,
        tableSysId: receivedFile.table_sys_id,
        attachmentSysId: receivedFile.sys_id
    }
}

const uploadSuccess = (data, file) => {
    let resultFile = data.result;
    return{
        systemMessages: [],
        file: file,
        attachmentSysId: resultFile.sys_id,
        displayValue: resultFile.file_name
    };
}

const errorMessage = (error, delay) => {
    let errorIcon = "exclamation-circle"
    return{
        systemMessages: [{content: error.toString(), icon: errorIcon, delay: delay}]
    };
}

export const downloadRequest = async (attachmentSysId, delay) => {
    if (attachmentSysId) {
        let url = `/api/now/attachment/${attachmentSysId}`;

        const requestOptions = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
            }
        };
        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return errorMessage(error, delay)
            }
            return downloadSuccess(data);
        } catch (error) {
            console.log(error);
        }
    }
}

export const uploadRequest = async (file, tableSysId, tableName, delay) => {
    if (tableName && tableSysId) {
        let url = `/api/now/attachment/upload`;

        const modifiedTableName = 'ZZ_YY' + tableName;
        const data = new FormData();
        data.append('table_name', modifiedTableName);
        data.append('table_sys_id', tableSysId);
        data.append('file', file);

        const requestOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
            },
            body: data
        };

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return errorMessage(error, delay)
            }
            return uploadSuccess(data, file);
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteRequest = async (attachmentSysId, input, delay) => {
    if (attachmentSysId) {
        let url = `/api/now/attachment/${attachmentSysId}`;

        const requestOptions = {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
            }
        };

        try {
            const response = await fetch(url, requestOptions);

            if (!response.ok )
                return errorMessage(response.statusText, delay);

            if (input)
                input.value = "";

            return {
                systemMessages: [],
                file: undefined,
                attachmentSysId: undefined
            }
        } catch (error) {
            console.log(error);
        }
    }
}