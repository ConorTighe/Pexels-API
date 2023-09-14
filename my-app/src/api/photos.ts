import axios from 'axios';
import { type IPhoto } from '../interfaces/photos';
namespace Pexels {
  export const getPhotos = async (): Promise<IPhoto[]> => {
    try {
      // this header should be on the server side and in a env var I but kept it in to save you the hassel of generating a key or adding a .env file
      const { data } = await axios.get('http://localhost:8088/https://api.pexels.com/v1/curated', {
        headers: { Authorization: process.env.PEXELS_KEY },
      });

      return data.photos;
    } catch (e) {
      return [];
    }
  }
}

export default Pexels;
