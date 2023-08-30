import axios from 'axios';
import { IPhoto } from '../interfaces/photos';

class Pexels {
  static getPhotos = async () :Promise <IPhoto[]> => {
    try {
      // this header should be on the server side and in a env var I but kept it in to save you the hassel of generating a key or adding a .env file
      const { data } = await axios.get(`http://localhost:8088/https://api.pexels.com/v1/curated`, 
      { headers: { "Authorization": "BFui2ILVGkzIwx9TX8n2UQZtoTm7trJHLccD9MrV90474Pk52dpRDifY" }});
        
      return data.photos;
    } catch (e) {
      return [];
    }
  };
}

export default Pexels;