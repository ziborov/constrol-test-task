import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View } from "react-native"


function TableData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View>

            {data ? <p>{data.message}</p> : <p>Loading...</p>}

        </View>


    );
}

export default TableData;