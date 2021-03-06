import React, { Component } from "react";
import kennelPup from "./kennel-pup.svg";
import "./Animal.css";

export default class AnimalDetails extends Component {

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={this.props.animal.id} className="card--detail mx-auto">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={kennelPup} className="icon--pup--deats" alt="kennel-pup" />
                            {this.props.animal.name}
                        </h4>
                        <h6 className="card-title">{this.props.animal.breed}</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteAnimal(this.props.animal.id)
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
