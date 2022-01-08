let header = "CSE Part_2 Second Semester";

let course = ["Cyber law", "Linerar Methods", "Linear Algebra", "Therory of computation", "Computer Architecture", "Design analysis and Algorithm", "Technical writting and Presentation"];

// start with back-tics syntax
let html = `<h2> ${header} </h2> <ul>`;

for (const x of course) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("jsTemplate").innerHTML = html;

