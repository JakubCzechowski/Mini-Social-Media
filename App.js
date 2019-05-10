import React from 'react';
import './App.css';
import PeopleList from './PeopleList.js';
import ContactForm from './ContactForm.js';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import { data } from './Constants';


// const data = [
//   { id: 4, name: 'Jan', surname: 'Kowalski', gender: 'Male', mail: 'jan.kowalski@gmail.com' },
//   { id: 1, name: 'Janina', surname: 'Kowalski', gender: 'Male', mail: 'jan.kowalski@gmail.com'  },
//   { id: 9, name: 'Jacek', surname: 'Kowalski', gender: 'Male', mail: 'jan.kowalski@gmail.com'  }];


const Home = () => {
  return (  
    <div>
      <p>Test</p>
      <img src="https://i.ytimg.com/vi/K62_uVfrJsg/hqdefault.jpg" alt="kotek"></img>
    </div>
  )
}


const PersonDetails = (props) => {
  var currentPersonId = props.match.params.id;
  var currentPerson = data.find(x => x.id == currentPersonId);
  return (
    <div>
      {currentPerson.name}<br />
      {currentPerson.id}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div class="header">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/People'>People</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <hr />


      <Route exact path="/" component={Home} />
      <Route path="/People" component={PeopleList} />
      <Route path="/Contact" component={ContactForm} />
      <Route path="/PersonDetails/:id" component={PersonDetails} />

    </BrowserRouter>
  );
}

export default App;
