function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
    if (b == 0) return "Cannot divide by zero";
    return a / b;
}

function andOp(a, b) { return a && b; }
function orOp(a, b) { return a || b; }
function notOp(a) { return !a; }

function showArithmetic() {
    document.getElementById("inputs").style.display = "block";

    document.getElementById("buttons").innerHTML = `
        <button onclick="calculateArithmetic('add')">Add</button>
        <button onclick="calculateArithmetic('sub')">Subtract</button>
        <button onclick="calculateArithmetic('mul')">Multiply</button>
        <button onclick="calculateArithmetic('div')">Divide</button>
    `;
}

function showLogical() {
    document.getElementById("inputs").style.display = "block";

    document.getElementById("buttons").innerHTML = `
        <button onclick="calculateLogical('and')">AND</button>
        <button onclick="calculateLogical('or')">OR</button>
        <button onclick="calculateLogical('not')">NOT</button>
    `;
}

function calculateArithmetic(type) {
    let a = Number(document.getElementById("val1").value);
    let b = Number(document.getElementById("val2").value);

    let result;

    if (type === 'add') result = add(a, b);
    if (type === 'sub') result = sub(a, b);
    if (type === 'mul') result = mul(a, b);
    if (type === 'div') result = div(a, b);

    document.getElementById("output").innerText = "Result: " + result;
}

function calculateLogical(type) {
    let a = document.getElementById("val1").value === "true";
    let b = document.getElementById("val2").value === "true";

    let result;

    if (type === 'and') result = andOp(a, b);
    if (type === 'or') result = orOp(a, b);
    if (type === 'not') result = notOp(a);

    document.getElementById("output").innerText = "Result: " + result;
}