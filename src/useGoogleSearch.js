import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Axios from "axios";

const API_KEY = "AIzaSyAdL2ZXG2dPOyPak_2x9xpr-OIXL-redec";
const CONTEXT_KEY = "6705435c214a644bf";

const useGoogleSearch = (term) => {
  //   const [data, setData] = useState(null);

  const { data } = useQuery(["search"], () => {
    return Axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    ).then((res) => res.data);
  });
  return data;
};

export default useGoogleSearch;
