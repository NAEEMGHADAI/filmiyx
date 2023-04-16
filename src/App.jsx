import { useEffect } from "react";
import { fetchDataFromAPI } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import Explore from "./pages/explore/explore";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const { url } = useSelector((state) => state.home); // getting data from reducer - means getting data from store
  const dispatch = useDispatch(); // dispatching action - means calling action and passing data to reducer

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    const data = await fetchDataFromAPI("/movie/popular");
    console.log(data);
    dispatch(getApiConfiguration(data));
  };

  return <div className="App">{url?.total_pages}</div>;
}

export default App;
