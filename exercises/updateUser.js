let endpoint = "https://dummyjson.com/users/12";

const dummyUpdate = async (url) => {
 try {
    const response = await fetch(url,{
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lastName: 'Owais'
      })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const result = dummyUpdate(endpoint)
  .then((quote) => {
    console.log(quote);
  })
  .catch((error) => {
    console.error(error);
  });