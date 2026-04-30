let leads = [];

function changeTitle() {
    document.getElementById("title").innerHTML = "<b>LeadHub Updated 🚀</b>";
}

function addLead() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const business = document.getElementById("business").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const date = document.getElementById("date").value;

    if (!name || !email || !business || !phone || !company || !date) {
        alert("Fill all fields");
        return;
    }

    const lead = { name, email, business, phone, company, date };
    leads.push(lead);

    displayLeads();
    clearInputs();
}

function displayLeads() {
    const tableBody = document.getElementById("leadTableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < leads.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${leads[i].date}</td>
            <td><strong>${leads[i].name}</strong></td>
            <td>${leads[i].email}</td>
            <td>${leads[i].phone}</td>
            <td>${leads[i].company}</td>
            <td>${leads[i].business}</td>
            <td>
                <button class="delete-btn" onclick="deleteLead(${i})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    }
}

function deleteLead(index) {
    leads.splice(index, 1);
    displayLeads();
}

function clearInputs() {
    const fields = ["name", "email", "business", "phone", "company", "date"];
    fields.forEach(id => document.getElementById(id).value = "");
}