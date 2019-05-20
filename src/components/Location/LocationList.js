import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h4>{location.name}</h4>
                            {location.address}
                        </div>
                    )
                }
            </section>
        )
    }
}