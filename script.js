const API_URL = "http://127.0.0.1:8000/api/leads/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3NDU3NDUwLCJpYXQiOjE3Nzc0NTcxNTAsImp0aSI6IjRhNDRmODE1NTZlNTQ3OTFiNGU2Yjk0YjAxY2IzMDcyIiwidXNlcl9pZCI6IjUifQ.0LOS1yMu_C7Mqj9UTr6DuCmLyiSqr4EAjrBhu26KNfk";

let editId = null;

function createOrUpdateLead() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const business = document.getElementById("business").value;

    if (!name || !email) {
        alert("Please fill in Name and Email");
        return;
    }

    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}${editId}/` : API_URL;

    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + TOKEN
        },
        body: JSON.stringify({
            name: name,
            email: email,
            business_unit: business
        })
    })
    .then(res => res.json())
    .then(() => {
        clearForm();
        getLeads();
    })
    .catch(err => console.error("Error saving lead:", err));
}

function getLeads() {
    fetch(API_URL, {
        headers: {
            "Authorization": "Bearer " + TOKEN
        }
    })
    .then(res => res.json())
    .then(data => {
        const tableBody = document.getElementById("leadTableBody");
        if (!tableBody) return; 
        
        tableBody.innerHTML = "";

        data.forEach(lead => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td><strong>${lead.name}</strong></td>
                <td>${lead.email}</td>
                <td><span class="unit-tag">${lead.business_unit || 'N/A'}</span></td>
                <td class="action-buttons">
                    <button class="btn-edit" onclick="editLead(${lead.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteLead(${lead.id})">Delete</button>
                </td>
            `;

            tableBody.appendChild(tr);
        });
    })
    .catch(err => console.error("Error fetching leads:", err));
}

function deleteLead(id) {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    fetch(`${API_URL}${id}/`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + TOKEN
        }
    })
    .then(() => getLeads())
    .catch(err => console.error("Error deleting lead:", err));
}

function editLead(id) {
    fetch(`${API_URL}${id}/`, {
        headers: {
            "Authorization": "Bearer " + TOKEN
        }
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("name").value = data.name;
        document.getElementById("email").value = data.email;
        document.getElementById("business").value = data.business_unit;

        editId = id;
        document.getElementById("name").focus();
    })
    .catch(err => console.error("Error loading lead:", err));
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("business").value = "";
    editId = null;
}

getLeads();