import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import List from '../src/components/Listasanas.js';
import CreateAsana from './components/CreateAsana.js';
import RateAsana from './components/RateAsana.js';
import Progress from './components/userprogress.js';
import Newuser from './components/usercreation.js';
function App(){
    return (
        <Router>
            <nav>
                <Link to ='/'>Home</Link>   <Link to = '/create'>New Asana</Link>   <Link to='/rate'>Rate</Link>   <Link to='/progress'>Progress</Link>   <Link to='/register'>Create</Link>
            </nav>
            <Routes>
                <Route path='/' element = {<List />} />
                <Route path='/create' element = {<CreateAsana/>} />
                <Route path='/rate' element = {<RateAsana/>} />
                <Route path='/progress' element = {<Progress />} />
                <Route path='/register' element = {<Newuser />} />
            </Routes>
        </Router>
    )
};

export default App;