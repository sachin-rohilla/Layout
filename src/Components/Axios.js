import React from 'react'
import axios from 'axios'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from 'react';




const Axios = () => {

    

const [inputCity, setInputCity] = useState("");
const [data, setData] = useState({});

const getWetherDetails = (cityName) => {
  
 
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=e4b2c3bd2f677e854d83635398fe3a76"
    )
    .then((res) => {
      console.log("response", res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
    
};

const handleInput = (e) => {
  console.log("value", e.target.value);
  setInputCity(e.target.value);
};

const handleSearch = () => {
  getWetherDetails(inputCity);
};


 

  
  
  
  return (
    <>
      <TextField id="standard-basic"  variant="standard"  value={inputCity} onChange={handleInput}/>
      <Button color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Typography variant="h3" component="div" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        {((data?.main?.temp) - 273.15).toFixed(2)}°C
      </Typography>
     
    </>
  );
}

export default Axios