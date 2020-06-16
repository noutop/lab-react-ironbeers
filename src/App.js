import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import './App.css';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  
  return (
    <div className="App" >
      <Route path="/:whatever"><Link to="/">Home</Link></Route>
      <Route exact path="/">
        <h1><Link to="/beers">All Beers</Link></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam impedit commodi ut reiciendis quidem quibusdam. Eveniet placeat obcaecati, corporis accusamus, tempore dignissimos unde quis ea nam, voluptates reiciendis numquam.</p>
        <h1><Link to="/random-beer">Random Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nihil. Veniam voluptatem nihil autem numquam, et velit reiciendis obcaecati quisquam perspiciatis mollitia explicabo eligendi officiis earum dolor adipisci deserunt soluta?</p>
        <h1><Link to="/new-beer">New Beer</Link></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aspernatur maxime quas officia beatae vel. Exercitationem, voluptatum officia, corporis error magnam, asperiores assumenda reprehenderit quas est labore quasi eum neque?</p>
      </Route>
      <Route exact path="/beers" component={Beers}></Route>

      <Route path="/beers/:id" component={BeerDetails}/>

      <Route path="/random-beer" component={RandomBeer}/>
      <Route path="/new-beer" component={NewBeer}/>
    </div>
  );
}

export default App;
