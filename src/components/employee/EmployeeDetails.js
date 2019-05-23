import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class EmployeeDetails extends Component {

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employee">
                <div key={this.props.employee.id} className="employee--detail">
                    <div className="employee-body">
                        <h4 className="employee-title">
                            {this.props.employee.name}
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteEmployee(this.props.animal.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                        >Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}
