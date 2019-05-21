import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./Owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationsManager"
import OwnersManager from "../modules/OwnersManager"
import "./Kennel.css"
export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(() => AnimalManager.getAll())
            .then(animals => { newState.animals = animals })
            .then(() => this.setState(newState))
    }

    deleteEmployee = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployee(id)
            .then(() => EmployeeManager.getAll())
            .then(employees => { newState.employees = employees })
            .then(() => this.setState(newState));
    }

    deleteOwner = (id) => {
        const newState = {};
        OwnersManager.deleteOwner(id)
            .then(() => OwnersManager.getAll())
            .then(owners => { newState.owners = owners })
            .then(() => this.setState(newState));
    }


    componentDidMount() {
        const newState = {}
        AnimalManager.getAll()
            .then(animals => { newState.animals = animals })
            .then(EmployeeManager.getAll()
                .then(employees => { newState.employees = employees })
                .then(LocationManager.getAll()
                    .then(locations => { newState.locations = locations })
                    .then(OwnersManager.getAll()
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
                    return <EmployeeList employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners}
                        deleteOwner={this.deleteOwner} />
                }} />
            </React.Fragment>
        )
    }
}