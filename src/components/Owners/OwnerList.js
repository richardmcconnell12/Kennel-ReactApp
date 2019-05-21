import React, { Component } from 'react'

export default class Owners extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.owner.id);
        this.props.deleteOwner(this.props.owner.id);
    }

    render() {
        return (
            <section className="owners">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            <h5>{owner.name}</h5>
                            <p>{owner.phoneNumber}</p>
                            <button onClick={() => this.props.deleteOwner(owner.id)}>Delete Owner</button>
                        </div>
                    )
                }
            </section>
        )
    }
}