
let endpoint = "https://dummyjson.com/users/12";

const dummyDelete = async (url) => {
 try {
    const response = await fetch(url,{
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const result = dummyDelete(endpoint)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });