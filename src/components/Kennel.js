import React, { Component } from 'react';
import EmployeeList from "./employee/EmployeeList";  // Import EmployeeList component
import LocationList from "./Location/LocationList";
import AnimalList from "./animals/AnimalList";
import "./Kennel.css";


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
    }

    render() {
        return (
            <div className="kennel">
                <LocationList locations={this.state.locations} />
                <br />
                <EmployeeList employees={this.state.employees} />
                <br />
                <AnimalList animals={this.state.animals} />
            </div>
        );
    }
}