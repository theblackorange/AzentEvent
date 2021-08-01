import React, {useState, useEffect} from 'react';
import Countries from '../countries/Countries';
import Events from '../events/Events';
import data from '../.././data/data.json';
import './Explore.css';

function Explore() {
    const [nation] = useState([ 'USA', 'UK', 'Australia', 'Canada', 'Singapore', 'Germany']);
    
    const [events] = useState(data.events);

    const [currentEvent,setCurrentEvent] = useState([]);
    
    const currentEventsDisplay = (eachNation) => {
        const current = events.filter(eve => {
            return eve.country===eachNation
        });
        setCurrentEvent(current);
    }

    useEffect(() => {
        const current = events.filter(eve => {
            return eve.country==='USA'
        });
        setCurrentEvent(current);
    },[]);

    return (
        <div>
            <Countries nation={nation} currentEventsDisplay={currentEventsDisplay}/>

            <div className="cards">
            {
                (currentEvent.length!==0)?
                    currentEvent.map((eve) => (
                        <Events key={eve.eventId} name={eve.name} country={eve.country} date={eve.date} image={eve.image} time={eve.time}/>
                    )
                    )
                :
                <div className="info">Please cick on any other country to view the Events</div>
                
            }
            </div>
            
        </div>
    )
}

export default Explore