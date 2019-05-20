import React, { Component } from 'react';
import EmployeeList from "./employee/EmployeeList";  // Import EmployeeList component
import LocationList from "./Location/LocationList";
import AnimalList from "./animals/AnimalList";
import Joke from "./Joke/Joke";


export default class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, animal: "Dog", name: "Rover" },
        { id: 2, animal: "Cat", name: "Mr. Mittens" },
        { id: 3, animal: "Horse", name: "Silver Screen" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        "id": 75,
        "type": "general",
        "setup": "What do you give to a lemon in need?",
        "punchline": "Lemonaid."
    }

    setNewJokeState = (jokeObj) => {
        this.setState({
            id: jokeObj.id,
            type: jokeObj.type,
            setup: jokeObj.setup,
            punchline: jokeObj.punchline
        })
    }

    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <LocationList locations={this.state.locations} />
                <br />
                <EmployeeList employees={this.state.employees} />
                <br />
                <AnimalList animals={this.state.animals} />
                <hr />
                <Joke type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    setNewJokeState={this.setNewJokeState} />
            </div>
        );
    }
}