import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PropertyList from './components/PropertyList/PropertyList';
import PropertyHighlights from './components/PropertyHighlights/PropertyHighlights';
import PopularProperties from './components/PopularProperties/PopularProperties';
import ExclusiveProperties from './components/ExclusiveProperties/ExclusiveProperties';
import AdviceTools from './components/AdviceTools/AdviceTools';
import Footer from './components/Footer/Footer';
import ResearchInsights from './components/ResearchInsights/ResearchInsights';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="search">
          <SearchBar />
        </div>
        <div id="properties">
          <PropertyList />
          <PropertyHighlights />
          <PopularProperties />
          <ExclusiveProperties />
        </div>
        <div id="insights">
          <ResearchInsights />
        </div>
        <div id="tools">
          <AdviceTools />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
