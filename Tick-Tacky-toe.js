var currentPlayer = "Keenan";
var nextPlayer = "Chloe";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]


handleClick = function (event) {
    var cell = event.target

    if (cell.innerHTML.includes("Keenan") || cell.innerHTML.includes("Chloe")) {
      return false;
    }

    cell.innerHTML = currentPlayer;

    if(currentPlayer === "Keenan" ) {
      playerSelections = playerXSelections;
      nextPlayer = "Chloe";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "Keenan";
    }
  
    playerSelections.push(parseInt(cell.id));

    if(checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
      }

      if(checkDraw()) {
        alert("Draw!");
        resetGame();
      }
  
    // Swap players
    currentPlayer = nextPlayer;
  }

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

function checkWinner() {
  for (var i = 0; i < winningCombinations.length; i++) {
    let matches = 0;
        for (let j = 0; j < winningCombinations[i].length; j++) {
          console.log("playerselections: " + playerSelections)
          if (playerSelections.includes(winningCombinations[i][j])) {
            matches++;
            console.log(matches);
            }
            if (matches == 3) {
              return true;
            }
        }
    }   
  }

  function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
  } 

  function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }
  }
