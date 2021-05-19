import fetch from "cross-fetch";

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
                'X-Transaction-Source': window?.transaction_source,
                'X-UserToken': window?.g_ck
            }
        };
        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return errorMessage(error, delay)
            }
            return data.result;
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
            const response = await fetch(url, requestOptions)
            const data = await response?.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return errorMessage(error, delay)
            }
            return data.result;
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteRequest = async (attachmentSysId, delay) => {
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

        } catch (error) {
            console.log(error);
        }
    }
}