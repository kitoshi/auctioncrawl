import React from 'react';
import Content from './components/Content.jsx';
import Landing from './components/Landing.jsx';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
//import { getAuth, onAuthStateChanged } from 'firebase/auth';

/*const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});*/

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ul className='navBorder'>
          <li>
            <Link to='/content' className='navitem' style={{ float: 'right' }}>
              Auctions
            </Link>
          </li>
          <li>
            <Link to='/' className='navitem' style={{ float: 'right' }}>
              Home
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/content' element={<Content />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
