/* --- General Styles --- */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4; /* Light gray background */
    color: #333;
}

main {
    padding: 20px;
    margin: 0 auto;
    max-width: 900px;
    background-color: #fff; /* White content background */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    color: #4A2C2A; /* Coffee Brown */
}

/* --- Header and Navigation --- */
header {
    background-color: #6F4E37; /* Darker Coffee Brown */
    color: white;
    padding: 20px;
    text-align: center;
    border-bottom: 5px solid #E9DBC4; /* Cream border */
}

nav ul {
    list-style: none;
    padding: 0;
    text-align: center;
    background-color: #8D6E63; /* Medium Brown */
    margin: 0;
    overflow: hidden;
}

nav li {
    display: inline;
    margin: 0;
}

nav a {
    display: inline-block;
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #4A2C2A; /* Dark Brown on hover */
}

/* --- Content Sections --- */
section, article {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
}

/* --- Footer --- */
footer {
    text-align: center;
    padding: 10px;
    background-color: #ccc;
    color: #333;
    font-size: 0.8em;
    margin-top: 20px;
}

/* --- Videos Page Styles --- */
iframe {
    width: 100%; /* Make video embeds responsive */
    max-width: 560px;
    height: 315px;
    border: 2px solid #6F4E37;
    border-radius: 5px;
    display: block;
    margin: 10px 0;
}

/* --- Form Styles (request.html) --- */
form {
    padding: 20px;
    border: 1px solid #E9DBC4;
    border-radius: 5px;
}

fieldset {
    border: 1px solid #8D6E63;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
}

legend {
    font-weight: bold;
    color: #4A2C2A;
    padding: 0 10px;
}

label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea,
select {
    width: calc(100% - 22px); /* Full width minus padding/border */
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding in the element's total width and height */
}

button[type="submit"] {
    background-color: #6F4E37;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 15px;
}

button[type="submit"]:hover {
    background-color: #4A2C2A;
}

/* --- Table Styles (request.html) --- */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    background-color: #fff;
    border: 1px solid #E9DBC4;
}

caption {
    margin: 10px 0;
    font-style: italic;
    color: #4A2C2A;
}

table thead tr {
    background-color: #6F4E37;
    color: #ffffff;
    text-align: left;
}

table th,
table td {
    padding: 12px 15px;
    border: 1px solid #ddd;
}

table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3; /* Zebra stripes */
}

table tbody tr:hover {
    background-color: #E9DBC4; /* Hover color */
}

table tfoot td {
    background-color: #8D6E63;
    color: white;
    font-style: italic;
    text-align: center;
}
