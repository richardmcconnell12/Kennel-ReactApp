import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./Owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationsManager"
import OwnersManager from "../modules/OwnersManager"
import AnimalDetails from "./animals/AnimalDetails"
import AnimalForm from "./animals/AnimalForm"
import EmployeeDetails from "./employee/EmployeeDetails"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerDetails from "./Owners/OwnerDetails"
import OwnerForm from "./Owners/OwnerForm"
import AnimalEditForm from "./animals/AnimalEditForm"
import OwnerEditForm from "./Owners/OwnerEditForm"
import Login from "./Authenication/Login"
import { withRouter } from 'react-router'
import "./Kennel.css"
class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }


    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(() => AnimalManager.getAll())
            .then(animals => { newState.animals = animals })
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    }

    deleteEmployee = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployee(id)
            .then(() => EmployeeManager.getAll())
            .then(employees => { newState.employees = employees })
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            });
    }

    deleteOwner = (id) => {
        const newState = {};
        OwnersManager.deleteOwner(id)
            .then(() => OwnersManager.getAll())
            .then(owners => { newState.owners = owners })
            .then(() => {
                this.props.history.push("/owners")
                this.setState(newState)
            });
    }

    addAnimal = (animal) =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );

    addEmployee = (employee) =>
        EmployeeManager.post(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );

    addOwner = (owner) =>
        OwnersManager.post(owner)
            .then(() => OwnersManager.getAll())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );

    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
            .then(() => AnimalManager.getAll())
            .then(animals => {
                this.props.history.push("/animals")
                this.setState({
                    animals: animals
                })
            });
    };

    updateOwner = (editedOwnerObject) => {
        return OwnersManager.put(editedOwnerObject)
            .then(() => OwnersManager.getAll())
            .then(owners => {
                this.props.history.push("/owners")
                this.setState({
                    owners: owners
                })
            });
    };

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
                <Route path="/login" component={Login} />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees}
                            animals={this.state.animals}
                            deleteAnimal={this.deleteAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} />
                }} />

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetails animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />

                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} />
                }}
                />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "404", breed: "Employee not found" }
                    }

                    return <EmployeeDetails {...props}
                        employee={employee}
                        deleteEmployee={this.deleteEmployee} />
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees} />
                }} />

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}
                        owners={this.state.owners}
                        deleteOwner={this.deleteOwner} />
                }} />

                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    // Find the owner with the id of the route parameter
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId)
                    )

                    // If the owner wasn't found, create a default one
                    if (!owner) {
                        owner = { id: 404, name: "404", animal: "Owner not found" }
                    }

                    return <OwnerDetails {...props}
                        owner={owner}
                        deleteOwner={this.deleteOwner} />
                }} />

                <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                    return <OwnerEditForm {...props} owners={this.state.owners} updateOwner={this.updateOwner} />
                }}
                />

                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwner={this.addOwner}
                        animals={this.state.owners} />
                }} />

            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)