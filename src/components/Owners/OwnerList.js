import React, { Component } from 'react'

export default class Owners extends Component {
    render() {
        return (
            <section className="owners">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            <h5>{owner.name}</h5>
                            {owner.phoneNumber}
                        </div>
                    )
                }
            </section>
        )
    }
}