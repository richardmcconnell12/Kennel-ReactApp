import React, { Component } from 'react';
import kennelPup from "./kennel-pup.svg";
import { Link } from "react-router-dom";
import "./Animal.css";

export default class AnimalList extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.animal.id);
        this.props.deleteAnimal(this.props.animal.id);
    }

    render() {
        return (
            <section className="animals">
                {
                    this.props.animals.map(animal =>
                        < div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={kennelPup} className="icon--pup" alt="kennel-pup" />
                                    <p>{animal.name}</p>
                                    <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                    <button onClick={() => this.props.deleteAnimal(animal.id)}>Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}
