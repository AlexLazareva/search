import React from 'react';
import people from './people.json';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: people
        };
    }

    mapPerson(person, idx) {
        return <li key={idx}>{person.name} <b>{idx}</b></li>;
    }

    handleChange(event) {
        const { value } = event.target;

        const filtered = people.filter((person) => {
            return person.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        });

        this.setState({ filtered});
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange.bind(this)}/>
                <ul>
                    { this.state.filtered.map(this.mapPerson.bind(this)) }
                </ul>
            </div>
        );
    }
}
