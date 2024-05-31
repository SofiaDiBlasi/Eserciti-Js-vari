async function getProva(){

    const risposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        mode: "cors",
        method: "GET",
    });
    return await risposta.json();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bottoneBellissimo").addEventListener("click", async () => {
        const risp = await getProva();
        console.log(risp);
    });
});