import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import { data } from './Constants';


const Person = (props) => {
    return (
        <div className="Person">
            <Link to={`/PersonDetails/${props.id}`}><h1>{props.name}</h1></Link>
        </div>
    )
}

class PeopleList extends Component {
    render() {
        return (
            <div>
                {data.map((v) => {
                    return <Person id={v.id} name={v.name}/>
                })}
            </div>
        );
    }
}

export default PeopleList;