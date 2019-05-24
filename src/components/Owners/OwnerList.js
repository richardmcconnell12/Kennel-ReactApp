import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

class OwnerList extends Component {

    handleClick = (event) => {
        this.props.deleteOwner(this.props.owner.id);
    }

    render() {
        return (
            <section className="owners">
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Add Owner
                    </button>
                </div>
                {
                    this.props.owners.map(owner =>
                        < div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <p>{owner.name}</p>
                                    <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => {
                                            this.props.history.push(`/owners/${owner.id}/edit`);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => this.props.deleteOwner(owner.id)}>Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}
export default withRouter(OwnerList)