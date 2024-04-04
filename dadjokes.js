console.log("jokes.js loaded");

const btnJoke = document.getElementById("btn");
const displayJoke = document.getElementById("joke");

const apiKey = "mD/emlANVzFDuQX3HBW15g==kv6EvzXgsIrTFBXP";

const options = {
    method: "GET",
    headers: {
        "X-API-Key": apiKey,
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    displayJoke.innerHTML = "Loading...";
    btnJoke.disabled = true;
    btnJoke.innerHTML = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnJoke.disabled = false;
    btnJoke.innerHTML = "TELL ME ANOTHER ONE!";

    displayJoke.innerHTML = data[0].joke;
}

// get joke on enter
btnJoke.addEventListener("click", getJoke);

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        getJoke();
    }
});

