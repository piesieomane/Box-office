const API_BASE_URL = 'https://api.tvmaze.com';

const apiGet = async (queryString) => {
  const responce = await fetch(`${API_BASE_URL}${queryString}`).then((r) => r.json());
  return responce;
};

export default apiGet;
