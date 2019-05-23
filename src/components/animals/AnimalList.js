import React, { Component } from 'react';
import kennelPup from "./kennel-pup.svg";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import "./Animal.css";

class AnimalList extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.animal.id);
        this.props.deleteAnimal(this.props.animal.id);
    }

    render() {
        return (
            <section className="animals">
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
                {
                    this.props.animals.map(animal =>
                        < div key={animal.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={kennelPup} className="icon--pup" alt="kennel-pup" />
                                    <h5>{animal.name}</h5>
                                    <p>{animal.breed}</p>
                                    <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => {
                                            this.props.history.push(`/animals/${animal.id}/edit`);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => this.props.deleteAnimal(animal.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default withRouter(AnimalList)