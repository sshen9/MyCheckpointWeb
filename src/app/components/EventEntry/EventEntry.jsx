import React, {useState, useEffect } from "react";
import "./EventEntry.css";
import { Link } from "react-router-dom";

function EventEntry(props) {
    const { name, date, id } = props;
    const [counts, setCounts] = useState([]);
    useEffect (() => {
        setCounts({
            total: 10,
            checkmarks : 5
        })
    }, []);
    return (
        <div>
            <Link to={"./myevents/event/" + id}>
                <li className="list-group-item">
                    <div className="text-left">
                        <div className="row">
                            <div className="col-lg-6 col-5">
                                <p className="text-left">{name + id}</p>
                            </div>
                            <div className="col-lg-4 col-4">
                                <p>{date}</p>
                            </div>
                            <div className="col-lg-2 col-3">
                                <p className="text-right">#/total</p>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>
        </div>
    );
}

export default EventEntry;
