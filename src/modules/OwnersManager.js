const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/owners`).then(e => e.json())
    },

    deleteOwner(id) {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE",
            header: {
                "Content-Type": "application/json"
            },
        }).then(e => e.json())
    },

    post(owner) {
        console.log(owner)
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        }).then(e => e.json())
    }
}