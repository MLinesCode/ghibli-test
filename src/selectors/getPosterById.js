import { images } from "../data/Images";

export const getPosterById = ( url ) => {
  
  return images.find( image => image.url === url)

}