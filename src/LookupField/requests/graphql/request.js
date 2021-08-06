import graphqlRequest from '../../../utils/graphqlRequest/graphqlRequest';
import { query } from './template';

export const glRequest = async ({
  chars,
  name,
  sys_id,
  table,
  controller,
}) => {
  const response = await graphqlRequest({
    operationName: 'reference',
    query,
    variables: {
      chars,
      encodedRecord: '',
      field: name,
      ignoreRefQual: false,
      paginationLimit: 25,
      serializedChanges: '{}',
      sortBy: '',
      sys_id,
      table,
    },
    params: {
      signal: controller.current.signal,
    },
  });
  return await response.json();
};
