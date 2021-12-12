window.onload = () => 
{
    var boxes = document.querySelectorAll(".container-box div");
    var information = document.getElementById("winner");
    var reset = document.getElementById("clear");
    //let xscore = document.getElementById("xscore");
    //let oscore = document.getElementById("oscore");
    //0score = 0;
    //xscore = 0;
    let player = "O",
      game_over = false;
    let move = [...Array(9)].fill("x");
    boxes.forEach((element, box) => {
      element.onclick = () => {
        if (move[box] == "x" && !game_over) {
          player = player == "X" ? "O" : "X";
          information.innerHTML = `Next: ${player == "X" ? "O" : "X"}`;
          move[box] = element.innerHTML = player;
          gameOver();
        }
      };
    });

    const restartGame = () => {
      (player = "O"), (game_over = false);
      move = [...Array(9)].fill("x");
      boxes.forEach((element) => {
        element.innerHTML = " ";
      });
      information.innerHTML = "Turn: X";
    };
    reset.addEventListener("click", restartGame);
  
    const gameOver = () => {
      for (let i = 0; i < 9; i += 3) {
        if (move[i] !== "x" && move[i] === move[i + 1] && move[i] === move[i + 2]) 
        {
          information.innerHTML = `Winner: ${player}`;
          game_over = true;
          return;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (move[i] !== "x" && move[i] === move[i + 3] && move[i] === move[i + 6]) 
        {
          information.innerHTML = `Winner: ${player}`;
          game_over = true;
          return;
        }
      }

      if (move[0] !== "x" && move[0] === move[4] && move[0] === move[8]) 
      {
        information.innerHTML = `Winner: ${player}`;
        game_over = true;
        return;
      }

      if (move[2] !== "x" && move[2] === move[4] && move[2] === move[6]) 
      {
        information.innerHTML = `Winner: ${player}`;
        game_over = true;
        return;
      }
      
      if (move.every((element) => element !== "x")) 
      {
        information.innerHTML = "Draw!";
        game_over = true;
        return;
      }

      // if(game_over = true && ${player} == "X")
      // {
      //   xscore = ++1;
      //   xscore.innerHTML = "${xscore}";
      // }

       // if(game_over = true && ${player} == "O")
      // {
      //   oscore = ++1;
      //   oscore.innerHTML = "${oscore}";
      // }

    };  
  };
  