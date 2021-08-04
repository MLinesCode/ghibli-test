import { useState } from "react";

export const useFetchFilms = () => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // setTimeout(() => {
  //   setState({
  //     data: [1,2,3],
  //     loading: false
  //   })
  // }, 3000 )

  return state;

}