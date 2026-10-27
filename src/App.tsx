import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ExclusiveDeals from './components/ExclusiveDeals';
import PopularCategories from './components/PopularCategories';
import HighestRatedSalons from './components/HighestRatedSalons';
import BottomNav from './components/BottomNav';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-wrapper">
      <Header />
      <SearchBar />
      <ExclusiveDeals />
      <PopularCategories />
      <HighestRatedSalons />
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
