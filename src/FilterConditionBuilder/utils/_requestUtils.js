import fetch from 'cross-fetch';

export const REQUEST_UTILS = {
    prepareQueryParams: function(obj) {
        return Object.keys(obj)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
                .join('&');
    },
    fetchRequest: async function({url, params}) {
        let result;
        try {
            const response = await fetch(url, {
                ...params,
                credentials: 'same-origin',
                headers: {
                    'content-type': "application/json",
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck
                },
            });
            const resultJson = await response.json();
            result = resultJson.result;
        } catch (e) {
            console.error(e)
        }
        return result;
    },
    fetchTableData: async function({table, queryParams}) {
        const endpoint = `${window.location.origin}/api/now/ui/meta/${table}`;
        const query = queryParams ? this.prepareQueryParams(queryParams) : "";
        const url = `${endpoint}?${query}`
        const params = {
            method: "GET"
        }
        return await this.fetchRequest({url, params})
    },
    fetchReferenceData: async function({table, queryParams}) {
        const endpoint = `${window.location.origin}/api/now/table/${table}`;
        const query = queryParams ? this.prepareQueryParams(queryParams) : "";
        const url = `${endpoint}?${query}`;
        const params = {
            method: "GET"
        }
        return await this.fetchRequest({url, params})
    },
    fetchFilterTemplates: async function ({table, user}){
        const endpoint = `${window.location.origin}/api/now/table/sys_filter`;
        const queryParams = {
            sysparm_query: `table=${table}^userISEMPTY^ORuser=${user}`,
            sysparm_fields: "filter,sys_id,sys_name,table,title,user,group"
        };
        const query = this.prepareQueryParams(queryParams);
        const url = `${endpoint}?${query}`;
        const params = {
            method: "GET"
        };

        return await this.fetchRequest({url, params});
    }
};