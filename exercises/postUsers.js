let endpoint = "https://dummyjson.com/users/add";

const dummyPost = async (url) => {
 try {
    const response = await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Muhammad',
        lastName: 'ali',
        age: 78,
        gender:'trigender'
      })
  });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const result = dummyPost(endpoint)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
