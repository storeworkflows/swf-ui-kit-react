import { getFormModel } from '@swf/form-logic-generator';
import { snHttpFactory } from "sn-http-request";

const snHttp = snHttpFactory({
	xsrfToken: window.g_ck,
	batching: false
});

const getForm = async (table, query) => {
	return snHttp.get(`/api/now/table/${table}?sysparm_query=${query}&sysparm_fields=sys_id`)
		.then(response => response.data.result[0])
		.catch(error => console.log(error));
}

const getRecordData = async (table, keyValue, referenceKey = null) => {
	let sysId = keyValue;

	if (referenceKey) {
		const response = await getForm(table, `${referenceKey}=${keyValue}`);
		sysId = response.sys_id;
	}

	const { formData: { layout }, gForm, gUser } = await getFormModel({
		table,
		sysId,
		views: '',
		query: '',
		workspaceConfigId: ''
	}, {
		id: 1
	}, (form) => console.log(form));

	return layout;
}

const getReferenceFieldData = async (table, keyValue, referenceKey = null) => {
	let sysId = keyValue;

	if (referenceKey) {
		const response = await getForm(table, `${referenceKey}=${keyValue}`);
		sysId = response.sys_id;
	}

	return {table, sysId}
}

export {
	getForm,
	getRecordData,
	getReferenceFieldData
}
