import React, { useEffect, useState } from 'react';
import { getAsanas } from '../api.js';

const List = () => {
    const [asanas, setAsanas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAsanas()
            .then((res) => {
                console.log('API Response:', res.data); // Debugging API response
                if (Array.isArray(res.data)) {
                    setAsanas(res.data); // Directly set the response if it's an array
                } else {
                    setError('Invalid API response format');
                }
            })
            .catch((err) => {
                console.error('Error fetching asanas:', err);
                setError('Failed to fetch asanas. Please try again.');
            });
    }, []);

    return (
        <div>
            <h2>Yog Asanas</h2>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul>
                    {asanas.length > 0 ? (
                        asanas.map((asana) => (
                            <li key={asana._id}>
                                {asana.name} - {asana.difficulty} - {asana.rating}
                            </li>
                        ))
                    ) : (
                        <p>Loading asanas...</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default List;
