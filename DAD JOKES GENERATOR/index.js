const btnEl = document.getElementById("btn");
const pEl = document.getElementById("joke");

const apiKey = "UcEXP/VW+96fxtswSLtfOA==O5doMmTRgBKCuOAH";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    pEl.textContent = "Updating...";
    btnEl.disabled = true;
    btnEl.textContent = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);

    btnEl.disabled = false;
    btnEl.textContent = "Generate A Joke ";
    pEl.textContent = data[0].joke;
  } catch (error) {
    console.log(error);
    pEl.textContent = "Some thing Error";
    btnEl.disabled = false;
    btnEl.textContent = "Generate A Joke ";
  }
}

btnEl.addEventListener("click", getJoke);
