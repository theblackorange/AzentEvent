import React from 'react';
import './Countries.css'

function Countries({ nation, currentEventsDisplay}) {

    const displayEvents = (eachNation) => {
        currentEventsDisplay(eachNation);
    }

    return (
        <span className="countries">
            <ul className="list">
                {nation.map((eachNation) => (
                    <li className="listElements"><a href='##' onClick={() => displayEvents(eachNation)}>{eachNation}</a></li>
                ))}
            </ul>
        </span>
    )
}

export default Countries
