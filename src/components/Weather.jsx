import React, { useState } from 'react'
import { Button, Form, Input } from 'reactstrap';
import DisplayWeather from './DisplayWeather';





function Weather() {

    const [input, setInput] = useState("");
    const [weather, setWeather] = useState([]);
    const APIKEY = "c2ccfd9d1c994c584962e12bbafbf022";

    async function getWeather(e) {
        e.preventDefault();
        console.log(input);
        // data lincham fetch garcham
        const data = await fetch(

            `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${APIKEY}`
        )
        const jsonvalue = await data.json();
        setWeather({ data: jsonvalue });
        // console.log(jsonvalue);
        console.log(weather);

        setInput("");

    }

    return (
        <div className="weather">
            <h1 className="weatherTitle">Weather App</h1>
            <Form className="weatherForm">
                <Input value={input} type="text" placeholder="city" onChange={e => setInput(e.target.value)} />
                <Button disabled={!input} type="submit" color="primary" onClick={getWeather}> Get weather</Button>
            </Form>
            {weather.data !== undefined ? (
                <div className="">
                    <DisplayWeather data={weather.data} />
                </div>
            ) : null}
        </div>
    )
}

export default Weather
