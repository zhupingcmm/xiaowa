import mockData from './mock'
/**
 * @desc
 * @param params
 * @return {Promise<any | never>}
 */
export const request = params=>{
  const requestParams={
   ...params,
   method:(params.method && params.method.toUpperCase()) || 'GET'
  };

  return new Promise((resolve,reject)=>{
      resolve(mockData)
  })

  // return fetch(requestParams).then(
  //     res=>res.json()
  // )
};
