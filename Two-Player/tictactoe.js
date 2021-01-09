let visited = [0,0,0,0,0,0,0,0,0,0];
var player1=prompt("Player1: ");
var player2=prompt("Player2: ");
alert(player1 + ": X\n" + player2 + ": O")
var chance=1;
var restart = document.querySelector("#res");
var cells = document.querySelectorAll("td");
var won = 0;
// function Restart() {
//   for (var i=0; i<cells.length;  i++) {
//     cells[i].textContent=" ";
//   }
// }

restart.addEventListener('click', function(){
  for (var i=0; i<cells.length;  i++) {
    cells[i].textContent=" ";
  }
  visited=[0,0,0,0,0,0,0,0,0,0];
  won=0;
});

var grid1 = document.querySelector('#one')
grid1.addEventListener('click', function() {
  if (visited[1]==0) {
    if (chance==1) {
      grid1.textContent="X";
    chance=2;
  }
    else {
      grid1.textContent="O";
      chance=1;
    }
    if ((grid1.textContent==grid2.textContent && grid2.textContent==grid3.textContent) || (grid1.textContent==grid4.textContent && grid4.textContent==grid7.textContent) || (grid1.textContent==grid5.textContent && grid5.textContent==grid9.textContent)) {
      if (chance==1) {
        grid1.textContent="O";
        alert(player1+" Wins")
        won=1;
      }
      else {
        grid1.textContent="X";
        alert(player2+" Wins")
        won=1;
      }
    }
    visited[1]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid2 = document.querySelector('#two')
grid2.addEventListener('click', function() {
  if (visited[2]==0) {
    if (chance==1) {
    grid2.textContent="X";
    chance=2;
    }
    else {
      grid2.textContent="O";
      chance=1;
    }
    if ((grid1.textContent==grid2.textContent && grid2.textContent==grid3.textContent) || (grid2.textContent==grid5.textContent && grid5.textContent==grid8.textContent)) {
      if (chance==1) {
        grid2.textContent="O";
        alert(player1+" Wins")
        won=1;
      }
      else {
        grid2.textContent="X";
        alert(player2+" Wins")
        won=1;
      }
    }
    visited[2]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid3 = document.querySelector('#three')
grid3.addEventListener('click', function() {
  if (visited[3]==0) {
    if (chance==1) {
    grid3.textContent="X";
    chance=2;
    }
    else {
      grid3.textContent="O";
      chance=1;
    }
    if ((grid1.textContent==grid2.textContent && grid2.textContent==grid3.textContent) || (grid3.textContent==grid6.textContent && grid6.textContent==grid9.textContent) || (grid3.textContent==grid5.textContent && grid5.textContent==grid7.textContent)) {
      if (chance==1) {
        grid3.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid3.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[3]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid4 = document.querySelector('#four')
grid4.addEventListener('click', function() {
  if (visited[4]==0) {
    if (chance==1) {
    grid4.textContent="X";
    chance=2;
    }
    else {
      grid4.textContent="O";
      chance=1;
    }
    if ((grid4.textContent==grid5.textContent && grid5.textContent==grid6.textContent) || (grid1.textContent==grid4.textContent && grid4.textContent==grid7.textContent)) {
      if (chance==1) {
        grid4.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid4.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[4]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid5 = document.querySelector('#five')
grid5.addEventListener('click', function() {
  if (visited[5]==0) {
    if (chance==1) {
    grid5.textContent="X";
    chance=2;
    }
    else {
      grid5.textContent="O";
      chance=1;
    }
    if ((grid1.textContent==grid5.textContent && grid5.textContent==grid9.textContent) || (grid3.textContent==grid5.textContent && grid5.textContent==grid7.textContent) || (grid4.textContent==grid5.textContent && grid5.textContent==grid6.textContent) || (grid2.textContent==grid5.textContent && grid5.textContent==grid8.textContent)) {
      if (chance==1) {
        grid5.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid5.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[5]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid6 = document.querySelector('#six')
grid6.addEventListener('click', function() {
  if (visited[6]==0) {
    if (chance==1) {
    grid6.textContent="X";
    chance=2;
    }
    else {
      grid6.textContent="O";
      chance=1;
    }
    if ((grid4.textContent==grid5.textContent && grid5.textContent==grid6.textContent) || (grid3.textContent==grid6.textContent && grid6.textContent==grid9.textContent)) {
      if (chance==1) {
        grid6.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid6.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[6]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid7 = document.querySelector('#seven')
grid7.addEventListener('click', function() {
  if (visited[7]==0) {
    if (chance==1) {
    grid7.textContent="X";
    chance=2;
    }
    else {
      grid7.textContent="O";
      chance=1;
    }
    if ((grid1.textContent==grid4.textContent && grid4.textContent==grid7.textContent) || (grid7.textContent==grid8.textContent && grid8.textContent==grid9.textContent) || (grid3.textContent==grid5.textContent && grid5.textContent==grid7.textContent)) {
      if (chance==1) {
        grid7.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid7.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[7]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid8 = document.querySelector('#eight')
grid8.addEventListener('click', function() {
  if (visited[8]==0) {
    if (chance==1) {
    grid8.textContent="X";
    chance=2;
    }
    else {
      grid8.textContent="O";
      chance=1;
    }
    if ((grid7.textContent==grid8.textContent && grid8.textContent==grid9.textContent) || (grid2.textContent==grid5.textContent && grid5.textContent==grid8.textContent)) {
      if (chance==1) {
        grid8.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid8.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[8]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});

var grid9 = document.querySelector('#nine')
grid9.addEventListener('click', function() {
  if (visited[9]==0) {
    if (chance==1) {
    grid9.textContent="X";
    chance=2;
    }
    else {
      grid9.textContent="O";
      chance=1;
    }
    if ((grid3.textContent==grid6.textContent && grid6.textContent==grid9.textContent) || (grid7.textContent==grid8.textContent && grid8.textContent==grid9.textContent) || (grid1.textContent==grid5.textContent && grid5.textContent==grid9.textContent)) {
      if (chance==1) {
        grid9.textContent="O";
        alert(player2+" Wins")
        won=1;
      }
      else {
        grid9.textContent="X";
        alert(player1+" Wins")
        won=1;
      }
    }
    visited[9]=1;
    if ((won==0) && (grid1.textContent=='X' || grid1.textContent=='O') && (grid2.textContent=='X' || grid2.textContent=='O') && (grid3.textContent=='X' || grid3.textContent=='O') && (grid4.textContent=='X' || grid4.textContent=='O') && (grid5.textContent=='X' || grid5.textContent=='O') && (grid6.textContent=='X' || grid6.textContent=='O') && (grid7.textContent=='X' || grid7.textContent=='O') && (grid8.textContent=='X' || grid8.textContent=='O') && (grid9.textContent=='X' || grid9.textContent=='O')) {
      alert("It's Tie!")
    }
  }
});
