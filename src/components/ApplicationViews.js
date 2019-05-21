import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./Owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationsManager"
import OwnerManager from "../modules/OwnersManager"
import "./Kennel.css"


export default class ApplicationViews extends Component {

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ricky McConnell", phoneNumber: "330-867-5309" },
        { id: 2, name: "Rob Keller", phoneNumber: "123-456-7890" },
        { id: 3, name: "Steven Soundlee", phoneNumber: "765-345-567" },
        { id: 4, name: "Kelly Whitmer", phoneNumber: "546-764-1035" }
    ]

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: this.ownersFromAPI
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(() => AnimalManager.getAll())
            .then(animals => { newState.animals = animals })
            .then(() => this.setState(newState))
    }


    componentDidMount() {
        const newState = {}
        AnimalManager.getAll()
            .then(animals => { newState.animals = animals })
            .then(EmployeeManager.getAll()
                .then(employees => { newState.employees = employees })
                .then(LocationManager.getAll()
                    .then(locations => { newState.locations = locations })
                    .then(OwnerManager.getAll()
                        .then(owners => { newState.owners = owners })
                        .then(() => this.setState(newState)))))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}