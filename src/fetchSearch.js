

const fetchSearch = async ({ queryKey }) => {
    const _input = queryKey[1];
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=cat&location=${_input}&breed=`
      );
  
    if (!res.ok) {
      throw new Error(`details/${id} fetch not ok`);
    }
  
    return res.json();
};
  
export default fetchSearch;