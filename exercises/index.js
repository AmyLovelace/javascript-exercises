import fetch from 'node-fetch';
import fs from 'fs';

let endpoint = "https://rickandmortyapi.com/api/character/7";

const getUser = async (url) => {
 try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


const downloadImage = async (url, fileName) => {
  try {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(fileName, buffer, () => console.log('File saved successfully'));
  } catch (error) {
    console.error(error);
  }
};

getUser(endpoint)
  .then((data) => {
    downloadImage(data.image, 'image.png');
  })
  .catch((error) => {
    console.error(error);
  });
