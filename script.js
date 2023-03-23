// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2); 
function addingEventListener() {

    let currentGame
    let currentQuote
    let currentGif    

    const SNES = document.getElementById('SuperNintendo');
    const GB = document.getElementById('gameboy');
    const GCN = document.getElementById('gamecube');
    const PS2 = document.getElementById('Playstation2');
    const PS3 = document.getElementById('Playstation3');
    const PS4 = document.getElementById('Playstation4');

    const metroid = document.getElementById('SuperMetroid');
    const poke = document.getElementById('Pokemon');
    const re4 = document.getElementById('ResidentEvil4');
    const kh2 = document.getElementById('KingdomHearts2');
    const ds = document.getElementById('DarkSouls');
    const dmc5 = document.getElementById('DevilMayCry5');

    const smq = document.getElementById('SuperMetroidQuote');
    const pkmq = document.getElementById('PokemonQuote');
    const re4q = document.getElementById('ResidentEvil4Quote');
    const kh2q =  document.getElementById('KingdomHearts2Quote');
    const dsq = document.getElementById('DarkSoulsQuote');
    const dmc5q = document.getElementById('DevilMayCry5Quote');

    const smgif = document.getElementById('SuperMetroidGif');
    const pkmgif = document.getElementById('PokemonGif');
    const re4gif = document.getElementById('ResidentEvil4Gif');
    const kh2gif = document.getElementById('KingdomHearts2Gif'); 
    const dsgif = document.getElementById('DarkSoulsGif');
    const dmc5gif = document.getElementById('DevilMayCry5Gif');

    function showSNESFavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = metroid;
        metroid.style.display="flex";
        
        if (currentGif) {
            currentGif.style.display="none";
        }
        currentGif = smgif;
        smgif.style.display="flex"
    }

    function showGBFavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = poke;
        poke.style.display="flex";

        if (currentGif) {
            currentGif.style.display="none";
        }
        currentGif = pkmgif;
        pkmgif.style.display="flex"
    }

    function showGCNFavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = re4;
        re4.style.display="block";

        if (currentGif) {
            currentGif.style.display="none";
        }
        currentGif = re4gif;
        re4gif.style.display="flex"
    }

    function showPS2FavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = kh2;
        kh2.style.display="block";

        if (currentGif) {
            currentGif.style.display="none";
        }
        currentGif = kh2gif;
        kh2gif.style.display="flex";
    }

    function showPS3FavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = ds;
        ds.style.display="block";

        if (currentGif) {
            currentGif.style.display="none";
        }
        currentGif = dsgif;
        dsgif.style.display="flex"
    }

    function showPS4FavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = dmc5;
        dmc5.style.display="block";

        if (currentGif) {
            currentGif.style.display="none";
        }
        currentGif = dmc5gif;
        dmc5gif.style.display="flex"
    }

    function showSNESQuote() {
        if (currentQuote) {
            currentQuote.style.display="none";
        }
        currentQuote = smq;
        smq.style.display="block";
        }
    

    function showGBFavQuote() {
        if (currentQuote) {
            currentQuote.style.display="none";
        }
        currentQuote = pkmq;
        pkmq.style.display="block";
        }

    function showGCNFavQuote() {
        if (currentQuote) {
            currentQuote.style.display="none";
        }
        currentQuote = re4q;
        re4q.style.display="block";
        }

    function showPS2FavQuote() {
        if (currentQuote) {
            currentQuote.style.display="none";    
        }
        currentQuote = kh2q;
        kh2q.style.display="block";
        }

    function showPS3FavQuote() {
        if (currentQuote) {
            currentQuote.style.display="none";
        }
        currentQuote =  dsq;
        dsq.style.display="block";
        }
    
    function showPS4FavQuote() {
        if (currentQuote) {
            currentQuote.style.display="none";
        }
        currentQuote = dmc5q;
         dmc5q.style.display="block";
        }


    GB.addEventListener('click', showGBFavGame);
    SNES.addEventListener('click', showSNESFavGame);
    GCN.addEventListener('click', showGCNFavGame);
    PS2.addEventListener('click', showPS2FavGame);
    PS3.addEventListener('click', showPS3FavGame);
    PS4.addEventListener('click', showPS4FavGame);

    SNES.addEventListener('click', showSNESQuote);
    GB.addEventListener('click', showGBFavQuote);
    GCN.addEventListener('click', showGCNFavQuote);
    PS2.addEventListener('click', showPS2FavQuote);
    PS3.addEventListener('click',  showPS3FavQuote);
    PS4.addEventListener('click', showPS4FavQuote);
    }

addingEventListener()

