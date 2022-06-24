const id = "d31ecc05f21261c8d54d";
const clientSecret = "83e8851087842c59349be7f1aa84217d3eeab145";

// HTML select DOM
const input = document.querySelector("#inputDemo");
const btn = document.querySelector("#btn");

// btn click event
btn.addEventListener("click", getData);

async function getData(e) {
  const url = `https://api.github.com/users/${input.value}/repos?client_id-${id}&clieent_secret=${clientSecret}`;
  e.preventDefault();

  const result = await fetch(url);
  const data = await result.json();

  console.log(data);

  if (data.length > 1) {
    const githubResult = document.getElementById("result");
    githubResult.textContent = "";
    data.map((x) => {
      githubResult.innerHTML += `
        <div class="h-100 p-5 text-white bg-dark rounded-3 m-3">
          <h2 class="text-danger">${x.name}</h2>
          <p class="text-primary display 4">${x.description}</p>
          <img src=${x.owner.avatar_url} alt="" srcset="">
          <a href=${x.clone_url} target="_blank"><button class="btn btn-outline-light" type="button">github repo</button></a>
        </div>
        `;
    });
  }
  input.value = "";
}
