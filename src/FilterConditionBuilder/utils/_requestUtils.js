import fetch from 'cross-fetch';

export const REQUEST_UTILS = {
  prepareQueryParams(obj) {
    return Object.keys(obj)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
      .join('&');
  },
  async fetchRequest({ url, params }) {
    let result;
    try {
      const response = await fetch(url, {
        ...params,
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json',
          'X-Transaction-Source': window.transaction_source,
          'X-UserToken': window.g_ck,
        },
      });
      const resultJson = await response.json();
      result = resultJson.result;
    } catch (e) {
      console.error(e);
    }
    return result;
  },
  async fetchTableData({ table, queryParams }) {
    const endpoint = `${window.location.origin}/api/now/ui/meta/${table}`;
    const query = queryParams ? this.prepareQueryParams(queryParams) : '';
    const url = `${endpoint}?${query}`;
    const params = {
      method: 'GET',
    };
    return await this.fetchRequest({ url, params });
  },
  async fetchReferenceData({ table, queryParams }) {
    const endpoint = `${window.location.origin}/api/now/table/${table}`;
    const query = queryParams ? this.prepareQueryParams(queryParams) : '';
    const url = `${endpoint}?${query}`;
    const params = {
      method: 'GET',
    };
    return await this.fetchRequest({ url, params });
  },
  async fetchFilterTemplates({ table, filter }) {
    const endpoint = `${window.location.origin}/api/now/table/sys_filter`;
    const queryParams = {
      sysparm_query: `table=${table}^${filter}`,
      sysparm_fields: 'filter,sys_id,sys_name,table,title,user,group',
    };
    const query = this.prepareQueryParams(queryParams);
    const url = `${endpoint}?${query}`;
    const params = {
      method: 'GET',
    };

    return await this.fetchRequest({ url, params });
  },
  async fetchGroup({ sys_id }) {
    const endpoint = `${window.location.origin}/api/now/table/sys_user_group`;
    const queryParams = {
      sysparm_query: `sys_id=${sys_id}`,
    };
    const query = this.prepareQueryParams(queryParams);
    const url = `${endpoint}?${query}`;
    const params = {
      method: 'GET',
    };

    return await this.fetchRequest({ url, params });
  },
};
