import React from 'react';
import './App.css';
import axios from 'axios';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `778448547b6c7b3f409329b9df3a6965`

function App() {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');
    const [resData,setresData] = React.useState({})
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
        let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
        axios.get(finalAPIEndPoint)
        .then((response) => {
           setresData(response.data);
            console.log(response.data);
        })
    },[])

    return (
        <div className="App">
        <h1>{resData.name}</h1>
        <h1>{resData.base}</h1>
        <h1>{resData.weather.description}</h1>
        </div>
    );
}

export default App;

