import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import List from '../src/components/Listasanas.js';
function App(){
    return (
        <Router>
            <nav>
                <Link to ='/'>Home</Link>|<Link to = '/create'>New Asana</Link>|<Link to='/rate'>Rate</Link>|<Link to='/progress'>Progress</Link>
            </nav>
            <Routes>
                <Route path='/' element = {<List />} />
            </Routes>
        </Router>
    )
};

export default App;