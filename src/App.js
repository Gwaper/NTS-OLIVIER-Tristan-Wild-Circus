import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Homepage';
import  Reservation from './Components/Reservation/Reservation';
import ArtistPage from './Components/ArtistPage/ArtistPage';
import GoldenBook from './Components/GoldenBook/GoldenBook';
import Menu from'./Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import './geoBoostrap.css'




function App() {
  return (
    <div className="App">
       <div>
          <Menu />
          <Route path="/" exact component={HomePage} />
          <Route path="/reservation" exact component={Reservation} />
          <Route path="/artistpage" exact component={ArtistPage} />
          <Route path="/goldenbook" exact component={GoldenBook} />
     
          <Footer />
        </div>
    </div>
  );
}

export default App;
