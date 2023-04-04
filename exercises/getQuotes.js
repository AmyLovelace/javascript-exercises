let endpoint = "https://dummyjson.com/quotes";

const dummyGet = async (url) => {
 try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};


const result = dummyGet(endpoint)
  .then((quote) => {
    console.log(quote);
  })
  .catch((error) => {
    console.error(error);
  });

