import React, { Component } from 'react'
import { withRouter } from 'react-router'
import "./Employee.css"
import AnimalCard from "../animals/AnimalCard"

class EmployeeList extends Component {

    handleClick = (event) => {
        this.props.deleteEmployee(this.props.employee.id);
    }

    render() {
        return (
            <section className="employees">
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Admit Employee
                    </button>
                </div>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card card--employee">
                            <div>
                                <h5 className="card-title">
                                    {employee.name}
                                    <button type="button"
                                        onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Delete</button>
                                </h5>

                                <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                                <div className="animals--caretaker">
                                    {
                                        this.props.animals
                                            .filter(anml => anml.employeeId === employee.id)
                                            .map(anml => <AnimalCard key={anml.id} animal={anml} deleteAnimal={this.props.deleteAnimal} {...this.props} />)
                                    }
                                </div>

                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}
export default withRouter(EmployeeList)