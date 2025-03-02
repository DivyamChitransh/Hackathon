import React,{useState} from "react";
import { rateAsana } from "../api";
const RateAsana = () => {
    const [asanaId,setAsanaId] = useState('');
    const [rating,setRating] = useState(5);
    const handle = async(e) => {
        e.preventDefault();
        await rateAsana(asanaId,rating);
        alert('Rating Done')
    };

    return (
        <div>
            <h2>Rate the Yogasana</h2>
            <form onSubmit={handle}>
                <input value={asanaId} onChange={(e) => setAsanaId(e.target.value)} placeholder="Asana Id"/>
                <input type="number" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)}/>
                <button type="submit">Rate Yogasana</button>
            </form>
        </div>
    )
}

export default RateAsana;