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
    }
}