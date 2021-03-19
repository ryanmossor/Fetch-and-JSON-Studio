window.addEventListener("load", function () {
    const astronauts = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    astronauts.then(response => response.json()
    .then(json => {
        const container = document.getElementById("container");
        json.sort((a, b) => (b.hoursInSpace > a.hoursInSpace) ? 1 : -1);
        for (let i = 0; i < json.length; i++) {
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li class="active">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
            </div>`
        }
        let activeVar = document.getElementsByClassName("active");
        for (let j = 0; j < json.length; j++) {
            // if (activeVar[j].innerHTML === "Active: true") {
            //     activeVar[j].style.color = "green";
            // }
            if (json[j].active === true) {
                activeVar[j].style.color = "green";
            } else {
                activeVar[j].style.color = "red";
            }
        }
        document.querySelector("H1").innerHTML = `Astronaut Count: ${json.length}`;
    }
    ));
});