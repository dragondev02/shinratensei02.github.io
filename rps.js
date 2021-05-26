console.log("Sajt");

const playedicons = document.querySelector(".playedicons");
let pscore = 0;
let cscore = 0;

// A round starts when any of the playable icons are clicked
const icons = document.querySelectorAll(".icons");
icons.forEach(icons => {
    icons.addEventListener("click", playround)
});

// The playround function shows the right icon in the play area, calculates the winner, and updates the scores.
function playround(e){
    console.log(e);

    // Set players icon to the clicked one
    let playericon = document.querySelector('.playedbyp');
    playericon.src = `${e.target.id}.png`;
    playericon.style.visibility = "visible";
    playedicons.style.background = "none";
    
    playericon.addEventListener("error", hideimg);
    
   
    // Store the clicked icon's name as the player's choice of weapon
    let playerchoice = `"${e.target.id}"`

    // Generate and store a computer answer, then change the computers played icon as well
    let computericon = document.querySelector('.playedbyc');
    let computerchoice;
    computericon.style.visibility = "visible";

    // Create a random choice for the computer
    let randomizer = Math.floor(Math.random() * 3) +1;;

        if (randomizer == 1)
        {
            computerchoice = "\"rock\"";
            computericon.src = "rock.png";
        }
        else if (randomizer== 2)
        {
            computerchoice = "\"paper\"";
            computericon.src = "paper.png";
        }
        else 
        {
            computerchoice = "\"scissor\"";
            computericon.src = "scissor.png";
        }


        // Variables that define the span that holds the dynamically changing score points
        let playerscore = document.querySelector('.playerscore');
        let computerscore = document.querySelector('.computerscore');


        // Game logic for update of scores

        //Scenarios when player chose rock
        if (playerchoice === "\"rock\"" && computerchoice === "\"paper\""){
            updateAiScore(1);
        }
        else if (playerchoice === "\"rock\"" && computerchoice === "\"scissor\""){
            updatePlayerScore(1);
        }


        // Screnarios when player chose paper
        if (playerchoice === "\"paper\"" && computerchoice === "\"scissor\""){
            updateAiScore(1);
        }
        else if (playerchoice === "\"paper\"" && computerchoice === "\"rock\""){
            updatePlayerScore(1);
        }

        // Scenarios when player chose scissor
        if (playerchoice === "\"scissor\"" && computerchoice === "\"rock\""){
            updateAiScore(1);
        }
        else if (playerchoice === "\"scissor\"" && computerchoice === "\"paper\""){
            updatePlayerScore(1);
        }




        // This function hides the played icons if case an error occours
        function hideimg(){
            playericon.style.visibility = "hidden";
            computericon.style.visibility = "hidden";
            return;
            }


        // Adds one to the score of the computer and updates the text on screen
        function updateAiScore (i)
        {
            cscore += i;
            computerscore.textContent = cscore;
        }

        // Adds one to the score of the player and updates the text on screen
        function updatePlayerScore (i)
        {
            pscore += i;
            playerscore.textContent = pscore;
        }


        // If someone reaches 5 points, declare the winner and restart the game
        if (pscore == 5){
            playedicons.style.background = "rgba(84, 232, 73, 0.1)";
            setTimeout(function(){ alert("You have reached 5 points and won the game! :)"); }, 1000);
            pscore = 0;
            cscore = 0;
            playerscore.textContent = 0;
            computerscore.textContent = 0;
        }
        else if (cscore == 5){
            playedicons.style.background = "rgba(228, 51, 51, 0.1)";
            setTimeout(function(){ alert("The computer has reached 5 points. You lost! :( "); }, 100);
            pscore = 0;
            cscore = 0;
            playerscore.textContent = 0;
            computerscore.textContent = 0;
        }
}






