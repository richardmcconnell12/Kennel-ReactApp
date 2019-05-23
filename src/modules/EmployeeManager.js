const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employees`).then(e => e.json())
    },

    deleteEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE",
            header: {
                "Content-Type": "application/json"
            },
        }).then(e => e.json())
    },

    post(employee) {
        console.log(employee)
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(e => e.json())
    }
}