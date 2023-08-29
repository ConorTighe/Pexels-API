import axios from 'axios';
import { IPhoto } from '../interfaces/photos';

class Pexels {
  static getPhotos = async () :Promise <IPhoto[]> => {
    try {
      const { data } = await axios.get(`http://localhost:8088/https://api.pexels.com/v1/curated`);
        
      return data.photos;
    } catch (e) {
      return [];
    }
  };
}

export default Pexels;