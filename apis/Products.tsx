import axios from "axios";

export default axios.create({
  baseURL: "https://skygarden.search.windows.net",
});

//https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11
