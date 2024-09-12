import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>asdasdasd</h1>
            <h1>{data.message}</h1>
            <ul>
                {data.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
