import React, { Component } from "react";

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: "",
        phoneNumber: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating owner object, and
          invoking the function reference passed from parent component
       */
    constructNewOwner = evt => {
        if (this.state.animal === "") {
            window.alert("Please select animal");
        } else {
            const owner = {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                // Make sure the animalId is saved to the database as a number since it is a foreign key.
                // animalId: parseInt(this.state.animalId)
            };

            // Create the owner and redirect user to owner list
            this.props
                .addOwner(owner)
                .then(() => this.props.history.push("/owners"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="name">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Owner name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phoneNumber"
                            placeholder="Phone Number"
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="animal">Add Animal</label>
                        <select
                            defaultValue=""
                            name="name"
                            id="animalId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an Animal</option>
                            {this.props.animals.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div> */}
                    <button type="button" onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >
                        Submit
      </button>
                </form>
            </React.Fragment>
        );
    }
}