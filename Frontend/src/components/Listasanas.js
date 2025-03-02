import React, {useEffect,useState} from 'react';
import {getAsanas}from '../api.js'
const List = () => {
    const [asanas,setAsanas] = useState([]);
    useEffect(() => {
        getAsanas().then((res) => setAsanas(res.data.data));
    },[]);
    return(
        <div>
            <h2>Yog Asanas</h2>
            <ul>
                {asanas.map((asana) => (
                    <li key = {asana.id}>
                        {asana.name} - {asana.difficulty} - {asana.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;