const fetchBtn = document.getElementById("fetchBtn");
const output = document.getElementById("output");

fetchBtn.addEventListener("click", () => {

    output.innerHTML = "<p>Loading data...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(data => {

            output.innerHTML = "";

            data.forEach(user => {

                const userDiv = document.createElement("div");

                userDiv.classList.add("user");

                userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                `;

                output.appendChild(userDiv);
            });
        })

        .catch(error => {

            output.innerHTML = "<p>Error fetching data.</p>";

            console.log(error);
        });
});