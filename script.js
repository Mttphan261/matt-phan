// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2); 
function addingEventListener() {

    let currentGame
    let currentQuote    

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


    // const gameArray = [metroid,poke]

    function showSNESFavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = metroid;
        // for(game of gameArray){
        //     game.style.display="none";
        // }
        metroid.style.display="block";
        
    }

    function showGBFavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = poke;
        // for(game of gameArray){
        //     game.style.display="none";
        // }
        poke.style.display="block";
    }

    function showGCNFavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = re4;
        re4.style.display="block";
    }

    function showPS2FavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = kh2;
        kh2.style.display="block";
    }

    function showPS3FavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = ds;
        ds.style.display="block";
    }

    function showPS4FavGame() {
        if (currentGame) {
            currentGame.style.display="none";
        }
        currentGame = dmc5;
        dmc5.style.display="block";
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
    
// document.body.appendChild(MetP);
// document.body.removeChild(ReP, PokP);

// const MetP = document.createElement('p');
// MetP.textContent = '"Super Metroid Baby" - Matt Phan'
// MetP.classList.add('quote');

// const PokP = document.createElement('p');
// PokP.textContent = '"Pokemon Silver  Baby" - Matt Phan"'
// PokP.classList.add('quote');

// const ReP = document.createElement('p');
// ReP.textContent = '"Resident Evil 4 Baby" - Matt Phan"'
// ReP.classList.add('quote')
}

addingEventListener()
