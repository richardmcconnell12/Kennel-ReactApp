import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        console.log(this.props.employees)
        return (
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                        </div>
                    )
                }
            </section>
        );
    }
}