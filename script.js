// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2); 
function addingEventListener() {

    const input = document.getElementById('snes');

    function showFavGame() {
        document.getElementById('SuperMetroid').style.display="block";
    }

    input.addEventListener('click', showFavGame);

}

addingEventListener()