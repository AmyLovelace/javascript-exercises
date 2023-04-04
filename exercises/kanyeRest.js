let endpoint = "https://api.kanye.rest/";

const kanyeRest = async (url) => {
  const response = await fetch(url);
  const quoteResponse = await response.json();
  const quote = quoteResponse.quote;
  return quote;
};


const result = kanyeRest(endpoint)
  .then((quote) => {
    console.log(quote);
  })
  .catch((error) => {
    console.error(error);
  });
