import React, { Component } from 'react'

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
                        < div key={animal.id} >
                            {animal.name}
                            <button onClick={() => this.props.deleteAnimal(animal.id)}>Delete</button>
                        </div>
                    )
                }
            </section>
        )
    }
}