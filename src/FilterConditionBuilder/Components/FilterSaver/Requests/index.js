const fetchRequest = async ({ url, params = {} }) => {
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

    result = Array.isArray(resultJson.result) ? resultJson.result.slice(0) : resultJson;
  } catch (e) {
    console.error(e);
  }
  return result;
};

const prepareQueryParams = (obj) => Object.keys(obj)
  .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
  .join('&');

const fetchGroupList = async () => {
  const endpoint = '/api/now/table/sys_user_group';
  const queryParams = {
    sysparm_query: 'active=true',
    sysparm_fields: 'sys_id,name,description',
  };
  const query = prepareQueryParams(queryParams);

  const url = `${endpoint}?${query}`;
  const params = {
    method: 'GET',
  };

  return await fetchRequest({ url, params });
};

const postFilter = async (data) => {
  const url = '/api/now/table/sys_filter';
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  return await fetchRequest({ url, params });
};

export {
  fetchGroupList,
  postFilter,
};
