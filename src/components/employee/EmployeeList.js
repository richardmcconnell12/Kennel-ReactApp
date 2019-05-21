import React, { Component } from 'react'


export default class EmployeeList extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.employee.id);
        this.props.deleteEmployee(this.props.employee.id);
    }

    render() {
        console.log(this.props.employees)
        return (
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            <p>{employee.name}</p>
                            <button onClick={() => this.props.deleteEmployee(employee.id)}>Fire!</button>
                        </div>
                    )
                }
            </section>
        );
    }
}