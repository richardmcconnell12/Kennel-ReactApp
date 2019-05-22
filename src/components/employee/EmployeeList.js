import React, { Component } from 'react'


export default class EmployeeList extends Component {

    handleClick = (event) => {
        this.props.deleteEmployee(this.props.employee.id);
    }

    render() {
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