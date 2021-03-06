// export function fetchImage (searchTerm){
//     const API_ROOT_URL = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=";
    
//     const url =   API_ROOT_URL + searchTerm;
  
//     return fetch(url)
//     .then(response => {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//     }
//         return response.json();
//     });
// }

// export default fetchImage;
import axios from 'axios';

const API_ROOT_URL = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=";
//const API_ROOT_URL = "/photos?tags=";

const FETCH_IMAGE_DATA = 'FETCH_IMAGE_DATA';

export function fetchImage(searchTerm){
  const url =   API_ROOT_URL + searchTerm;
   const response = axios.get(url);
    return {
        type : FETCH_IMAGE_DATA,
        payload: response
    }
}

export default FETCH_IMAGE_DATA;