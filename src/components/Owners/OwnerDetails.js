import React, { Component } from 'react';


export default class OwnerDetails extends Component {

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="owner">
                <div key={this.props.owner.id} className="owner--detail">
                    <div className="owner-body">
                        <h4 className="owner-title">
                            <p>{this.props.owner.name}</p>
                            <p>{this.props.owner.phoneNumber}</p>
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    () => this.props.deleteOwner(this.props.owner.id)
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