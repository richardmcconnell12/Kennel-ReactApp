import React, { Component } from 'react'
import { withRouter } from 'react-router'

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
                        Add Employee
                    </button>
                </div>
                {
                    this.props.employees.map(employee =>
                        < div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <p>{employee.name}</p>
                                    <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}
export default withRouter(EmployeeList)