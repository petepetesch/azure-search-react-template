import React from "react";
import { useHistory } from "react-router-dom";
// router dom is important
/* close to release of UAT for V2 */
import SearchBar from '../../components/SearchBar/SearchBar';

import "./Home.css";
import "../../pages/Search/Search.css";

export default function Home() {
  const history = useHistory();
  const navigateToSearchPage = (q) => {
    if (!q || q === '') {
      q = '*'
    }
    history.push('/search?q=' + q);
  }

  return (
    <main className="main main--home">
      <div className="row home-search">
        <img className="logo" src="/images/cognitive-search.png" alt="Cognitive Search"></img>
        <p className="poweredby lead">UVOC Search provided by Azure Cognitive Search V3</p>
        <SearchBar postSearchHandler={navigateToSearchPage}></SearchBar>
      </div>
    </main>
  );
};
