import React,{useState} from "react";
import { getUserProgress } from "../api";

const Progress = () => {
    const [userId,setuserId] = useState('');
    const [progress,setProgress] = useState(null);
    const fetchProgress = async() => {
        const res = await getUserProgress(userId);
        setProgress(res.data);
    };
    return (
        <div>
            <h2>Track Progress</h2>
            <input value={userId} onChange={(e) => setuserId(e.target.value)} placeholder="User Id" />
            <button onClick={fetchProgress}>Fetch Progress</button>
            {progress && (
                <ul>
                    {progress.CompletedAsanas.map((asana) => (
                        <li key={asana._id}>{asana.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Progress;