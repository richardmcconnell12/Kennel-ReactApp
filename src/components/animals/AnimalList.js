import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import AnimalCard from "./AnimalCard"
import "./Animal.css";

class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        onClick={() => this.props.history.push("/animals/new")}
                        className="btn btn-success">
                        Admit Animal
                    </button>
                </div>
                <section className="animals">
                    {
                        this.props.animals.map(animal =>
                            <AnimalCard key={animal.id} animal={animal} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(AnimalList)