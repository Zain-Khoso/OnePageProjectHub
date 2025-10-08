const output = document.getElementById("output");

async function qotGen() {
  let data;

  try {
    data = await (
      await fetch("https://api.animechan.io/v1/quotes/random")
    ).json();
    output.textContent = `"${data.data.content}", ~~${data.data.character.name}~~. From ${data.data.anime.name}`;
  } catch (err) {
    alert("Sorry, Some Error occured.");
    return;
  }
}

document.getElementById("generate").addEventListener("click", qotGen);
