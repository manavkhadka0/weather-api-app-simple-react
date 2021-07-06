import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function DisplayWeather({ data }) {
    return (
        <div className="dw">
            <Card style={{ width: '200px' }}>
                <CardImg top width="100%" src={`https://www.countryflags.io/${data.sys.country}/shiny/64.png`} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Temperature</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Min Temp:{data.main.temp_min}&deg;C</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Max Temp:{data.main.temp_max}&deg;C</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Feels Like:{data.main.feels_like}&deg;C</CardSubtitle>
                </CardBody>
            </Card>
            <Card style={{ width: '200px' }}>
                <CardImg top width="100%" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{data.weather[0].main}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{data.weather[0].description}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Pressure: {data.main.pressure}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Humidity: {data.main.humidity}</CardSubtitle>

                </CardBody>
            </Card>
        </div>
    )
}

export default DisplayWeather
