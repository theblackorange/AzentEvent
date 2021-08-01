import React from 'react';
import './Events.css';
import image from '../.././images/image.jpg';


function Events({name, country, date, time}) {
    return (
        <div className="card">
            <div className="image align">
                <img src={image} alt={country} />
            </div>
            <div className="title align">
                <div>{name}  {country}</div>
            </div>
            <div className="des align">
                <div>{date}</div>
            </div>
            <div className="time align">
                <div>Zoom meet : {time}</div>
            </div>    

            <div className="align button">
                <a className="button-text" href='##'>Register</a>
            </div>
            
            
        </div>
    )
}

export default Events