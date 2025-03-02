import React , {useState} from 'react';
import { createAsanas } from '../api';
const CreateAsana = () => {
    const [name,setName] = useState('');
    const [difficulty,setDifficulty] = useState('Easy');
    const final = async(e) => {
        e.preventDefault();
        await createAsanas({name,difficulty});
        alert ('New Asana Added')
    };
    return (
        <div> 
        <h2>Add New Asana</h2>
        <form onSubmit={final}>
            <input value={name} onChange={(e) => setName(e.target.value)}placeholder='Asana'/>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
            </select>
            <button type='submit'>Add</button>
        </form>
        </div>
    )
}

export default CreateAsana;