import logo from './logo.svg';

import './App.css';
import { useEffect,useState } from 'react';
import Weather from './Components/Weather';

function App() {
  const [lat, setlat] = useState(0);
  const [lng, setLng] = useState(0);
  const isLoading=false;
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setlat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Your browser does not support geolocation!')
    }

  }, [])
if (isLoading) {
  return <p>loading...</p>
}
else {
  return (
    <div classname="content">
      <h3> Your Position</h3>
    <p>
      Position:&nbsp;
      {lat.toFixed(3)},
      {lng.toFixed(3)}
    </p>
    <Weather lat={lat} lng={lng} />
    </div>
  );
}
}

export default App;
