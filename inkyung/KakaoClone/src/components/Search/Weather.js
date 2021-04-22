import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow, FaTemperatureHigh} from "react-icons/fa";
import dotenv from "dotenv";

dotenv.config();

class Weather extends React.Component{
    constructor(){
        super();
       this.state = {
            weather:{
                main: '',
                humidity: '',
                temp: 0,
                temp_min: 0,
                temp_max: 0,
                feels_like: 0,
                icon: '',
                wind: 0,
                description: ''
            }
        }
    }

    componentWillMount(){
        const http = axios.create(
            {
                baseURL: 'http://api.openweathermap.org/data/2.5'
            }
        )

        http.get(
            `/weather?q=${encodeURIComponent('Seoul')}&appid=${process.env.REACT_APP_WEATHER_AUTH}`
        ).then((result) => {
            //console.log(result)

            this.setState({
                weather:{
                    main: result.data.weather[0].main,
                    description: result.data.weather[0].description,
                    icon: 'http://openweathermap.org/img/wn/'+result.data.weather[0].icon+'@2x.png',
                    wind: Math.round(result.data.wind.speed),
                    humidity: result.data.main.humidity,
                    temp: Math.round(result.data.main.temp - 273),
                    feels_like: Math.round(result.data.main.feels_like - 273),
                    temp_min: Math.round(result.data.main.temp_min - 273),
                    temp_max: Math.round(result.data.main.temp_max - 273)
                }
            })
        })
    }

    render(){
        return(
            <Frame>
                <Info>
                    <Icon src={this.state.weather.icon}/>
                    <Temp>{this.state.weather.temp}<Unit>℃</Unit></Temp>
                    <Loc>
                        <Text>서울특별시</Text>
                        <Text>체감기온 {this.state.weather.feels_like}°</Text>
                    </Loc>
                </Info>
                <Description>
                    <Text><Low/> {this.state.weather.temp_min}°</Text>&nbsp;&nbsp;
                    <Text><High/> {this.state.weather.temp_max}°</Text>&nbsp;&nbsp;
                    <Text><Humid/> {this.state.weather.humidity}%</Text>&nbsp;&nbsp;
                    <Text><Wind/> {this.state.weather.wind}m/s</Text>&nbsp;&nbsp;
                    <Text>{this.state.weather.description}</Text>
                </Description>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 5em;
    display: flex;
    flex-direction: column;

`

const Info = styled.div`
    height: 3.5em;
    display: flex;
    flex-direction: row;
    padding-left: 5%;
    padding-right: 5%;
`

const Icon = styled.img`
    height: 3.5em;
`

const Temp = styled.div`
    font-size: xxx-large;
    display: flex;
    flex-direction: row;
    padding-left: 3%;
    padding-right: 3%;
    font-weight: 500;
`

const Unit = styled.div`
    font-size: smaller;
    font-weight: 100;
`

const Text = styled.div`
    font-weight: 300;
    font-size: medium;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`

const Loc = styled.div`
    display: flex;    
    align-items: flex-start; 
    flex-direction: column;
    font-size: large;
`

const Description = styled.div`
    height: 2.5em;
    padding-left: 4%;
    padding-right: 4%;
    display: flex;
    flex-direction: row;
    font-weight: 100;
    font-size: medium;
    justify-content: space-between;
`
export const Low = styled(FaTemperatureLow)`
    font-size: larger;
    color: darkcyan;
`
export const High = styled(FaTemperatureHigh)`
    font-size: larger;
    color: crimson;
`
export const Wind = styled(BiWind)`
    font-size: larger;
    color: lightsteelblue;
`
export const Humid = styled(WiHumidity)`
    font-size: larger;
    color: steelblue;
`

export default Weather;