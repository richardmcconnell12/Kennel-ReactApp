import React, { Component } from "react";

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating employee object, and
          invoking the function reference passed from parent component
       */
    constructNewEmployee = evt => {
        if (this.state.employee === "") {
            window.alert("Please input a caretaker");
        } else {
            const employee = {
                name: this.state.name
            };

            // Create the employee and redirect user to employee list
            this.props
                .addEmployee(employee)
                .then(() => this.props.history.push("/employees"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="name">Name of Employee</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Name of Employee"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal">Assign an animal</label>
                        <select
                            defaultValue=""
                            name="animal"
                            id="animalId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an animal</option>
                            {this.props.animals.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="button" onClick={this.constructNewEmployee}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form >
            </React.Fragment >
        );
    }
}