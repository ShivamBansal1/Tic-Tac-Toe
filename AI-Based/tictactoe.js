let visited = [0,0,0,0,0,0,0,0,0,0];
var player=prompt("Player: ");
alert(player +": O")
var cells = document.querySelectorAll('td');
var restart = document.querySelector("#res");
var board = [['_','_','_'],
             ['_','_','_'],
             ['_','_','_']]

 var grid1 = document.querySelector('#one');
 var grid2 = document.querySelector('#two');
 var grid3 = document.querySelector('#three');
 var grid4 = document.querySelector('#four');
 var grid5 = document.querySelector('#five');
 var grid6 = document.querySelector('#six');
 var grid7 = document.querySelector('#seven');
 var grid8 = document.querySelector('#eight');
 var grid9 = document.querySelector('#nine');
//////////////////////////////////////////////////////////////////////////////
function computerChance(board){
  class TicTacToe {
    constructor() {
      this.row=-1
      this.col=-1
    }
  }

  function base_case(board) {
    for(var i=0; i<board.length; i++) {
          if (board[i][0]==board[i][1] && board[i][2]==board[i][1]) {
              if (board[i][0]=='x')
                  return 10;
              else if (board[i][0]=='o')
                  return -10;
          }
        }

      for(var j=0; j<board.length; j++) {
          if (board[0][j]==board[1][j] && board[2][j]==board[1][j]) {
              if (board[0][j]=='x')
                  return 10;
              else if (board[0][j]=='o')
                  return -10;
          }
      }

      if ((board[0][0]==board[1][1] && board[1][1]==board[2][2]) || (board[0][2]==board[1][1] && board[1][1]==board[2][0])) {
          if (board[1][1]=='x')
                  return 10;
          else if (board[1][1]=='o')
              return -10;
      }

      for(var i=0; i<board.length; i++) {
          for(var j=0; j<board.length; j++) {
              if (board[i][j] == '_')
                 return 0;
          }
      }
      return 1;
  }

  function next_move(board, is_cross, no_of_moves) {
      if (base_case(board)==10)
          return 10;
      if (base_case(board)==-10)
          return -10;
      if (base_case(board)==1)
          return 0;

      if (is_cross) {
          var optimal = -100;
          for(var i=0; i<board.length; i++) {
              for(var j=0; j<board.length; j++) {
                  if (board[i][j]=="_") {
                      board[i][j]='x';
                      optimal = Math.max(optimal, next_move(board, 0, no_of_moves+1));
                      board[i][j]='_';
                  }
              }
          }
          return optimal-no_of_moves;
      }

      else {
          var optimal = 100;
          for(var i=0; i<board.length; i++) {
              for(var j=0; j<board.length; j++) {
                  if (board[i][j]=="_") {
                      board[i][j]='o';
                      optimal = Math.min(optimal, next_move(board, 1, no_of_moves+1));
                      board[i][j]='_';
                  }
              }
          }
          return optimal+no_of_moves;
      }
  }

  function next_optimal_move(board) {
      var optimal_move = -100;
      Move = new TicTacToe();
      for(var i=0; i<board.length; i++) {
          for(var j=0; j<board.length; j++) {
              if (board[i][j] == '_') {
                  board[i][j] = 'x';
                  var move = next_move(board, 0, 1);
                  board[i][j] = '_';
                  if (move>optimal_move) {
                      Move.row = i;
                      Move.col = j;
                      optimal_move = move;
                  }
              }
          }
      }
      return Move;
  }

  Move = new TicTacToe();
  Move = next_optimal_move(board);
  return [Move.row, Move.col];
}
//////////////////////////////////////////////////////////////////////////////
function gridNumber(row,col) {
  if (row==1)
  {
    if (col==1)
      return [grid1,1];
    if (col==2)
      return [grid2,2];
    if (col==3)
      return [grid3,3];
  }
  if (row==2)
  {
    if (col==1)
      return [grid4,4];
    if (col==2)
      return [grid5,5];
    if (col==3)
      return [grid6,6];
  }
  if (col==1)
    return [grid7,7];
  if (col==2)
    return [grid8,8];
  if (col==3)
    return [grid9,9];
}
//////////////////////////////////////////////////////////////////////////////
function isWinner(board) {
  for(var i=0; i<board.length; i++) {
        if (board[i][0]==board[i][1] && board[i][2]==board[i][1]) {
            if (board[i][0]=='x')
                return 'x';
            else if (board[i][0]=='o')
                return 'o';
        }
      }

    for(var j=0; j<board.length; j++) {
        if (board[0][j]==board[1][j] && board[2][j]==board[1][j]) {
            if (board[0][j]=='x')
                return 'x';
            else if (board[0][j]=='o')
                return 'o';
        }
    }

    if ((board[0][0]==board[1][1] && board[1][1]==board[2][2]) || (board[0][2]==board[1][1] && board[1][1]==board[2][0])) {
        if (board[1][1]=='x')
                return 'x';
        else if (board[1][1]=='o')
            return 'o';
    }

    for(var i=0; i<board.length; i++) {
        for(var j=0; j<board.length; j++) {
            if (board[i][j] == '_')
               return 0;
        }
    }
    return 1;
}
//////////////////////////////////////////////////////////////////////////////
  restart.addEventListener('click', function(){
    for (var i=0; i<cells.length;  i++) {
      cells[i].textContent=" ";
    }
    visited=[0,0,0,0,0,0,0,0,0,0];
    board = [['_','_','_'],
               ['_','_','_'],
               ['_','_','_']]
    ;
  });

grid1.addEventListener('click', function() {
  if (visited[1]==0 && (isWinner(board) != 'x' || isWinner(board) != 'o'))
  {
    grid1.textContent='O'
    board[0][0]='o';
    visited[1]=1;
    check_status = isWinner(board)
    if (check_status=='o')
      alert(player+" Wins")
    else if (check_status==1)
      alert("It's a Tie!")
    var pos = computerChance(board);
    var row = pos[0];
    var col = pos[1];
    board[row][col] = 'x';
    grid = gridNumber(row+1, col+1);
    grid[0].textContent='X';
    visited[grid[1]]=1;
    check_status = isWinner(board)
    if (check_status=='x')
      alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid2.addEventListener('click', function() {
    if (visited[2]==0 && (isWinner(board) != 'x' || isWinner(board) != 'o'))
    {
      grid2.textContent='O'
      board[0][1]='o';
      visited[2]=1;
      check_status = isWinner(board)
      if (check_status=='o')
        alert(player+" Wins")
      else if (check_status==1)
        alert("It's a Tie!")
      var pos = computerChance(board);
      var row = pos[0];
      var col = pos[1];
      board[row][col] = 'x';
      grid = gridNumber(row+1, col+1);
      grid[0].textContent='X';
      visited[grid[1]]=1;
      check_status = isWinner(board)
      if (check_status=='x')
        alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid3.addEventListener('click', function() {
    if (visited[3]==0 && (isWinner(board) != 'x' || isWinner(board) != 'o'))
    {
      grid3.textContent='O'
      board[0][2]='o';
      visited[3]=1;
      check_status = isWinner(board)
      if (check_status=='o')
        alert(player+" Wins")
      else if (check_status==1)
        alert("It's a Tie!")
      var pos = computerChance(board);
      var row = pos[0];
      var col = pos[1];
      board[row][col] = 'x';
      grid = gridNumber(row+1, col+1);
      grid[0].textContent='X';
      visited[grid[1]]=1;
      check_status = isWinner(board)
      if (check_status=='x')
        alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid4.addEventListener('click', function() {
  if (visited[4]==0 && (isWinner(board) != 'x' || isWinner(board) != 'o'))
  {
    grid4.textContent='O'
    board[1][0]='o';
    visited[4]=1;
    check_status = isWinner(board)
    if (check_status=='o')
      alert(player+" Wins")
    else if (check_status==1)
      alert("It's a Tie!")
    var pos = computerChance(board);
    var row = pos[0];
    var col = pos[1];
    board[row][col] = 'x';
    grid = gridNumber(row+1, col+1);
    grid[0].textContent='X';
    visited[grid[1]]=1;
    check_status = isWinner(board)
    if (check_status=='x')
      alert("Computer Wins")
  }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid5.addEventListener('click', function() {
    if (visited[5]==0 && (isWinner(board) != 'x' && isWinner(board) != 'o'))
    {
      grid5.textContent='O'
      board[1][1]='o';
      visited[5]=1;
      check_status = isWinner(board)
      if (check_status=='o')
        alert(player+" Wins")
      else if (check_status==1)
        alert("It's a Tie!")
      var pos = computerChance(board);
      var row = pos[0];
      var col = pos[1];
      board[row][col] = 'x';
      grid = gridNumber(row+1, col+1);
      grid[0].textContent='X';
      visited[grid[1]]=1;
      check_status = isWinner(board)
      if (check_status=='x')
        alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid6.addEventListener('click', function() {
    if (visited[6]==0 && (isWinner(board) != 'x' && isWinner(board) != 'o'))
    {
      grid6.textContent='O'
      board[1][2]='o';
      visited[6]=1;
      check_status = isWinner(board)
      if (check_status=='o')
        alert(player+" Wins")
      else if (check_status==1)
        alert("It's a Tie!")
      var pos = computerChance(board);
      var row = pos[0];
      var col = pos[1];
      board[row][col] = 'x';
      grid = gridNumber(row+1, col+1);
      grid[0].textContent='X';
      visited[grid[1]]=1;
      check_status = isWinner(board)
      if (check_status=='x')
        alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid7.addEventListener('click', function() {
  if (visited[7]==0 && (isWinner(board) != 'x' && isWinner(board) != 'o'))
  {
    grid7.textContent='O'
    board[2][0]='o';
    visited[7]=1;
    check_status = isWinner(board)
    if (check_status=='o')
      alert(player+" Wins")
    else if (check_status==1)
      alert("It's a Tie!")
    var pos = computerChance(board);
    var row = pos[0];
    var col = pos[1];
    board[row][col] = 'x';
    grid = gridNumber(row+1, col+1);
    grid[0].textContent='X';
    visited[grid[1]]=1;
    check_status = isWinner(board)
    if (check_status=='x')
      alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid8.addEventListener('click', function() {
  if (visited[8]==0 && (isWinner(board) != 'x' && isWinner(board) != 'o'))
  {
    grid8.textContent='O'
    board[2][1]='o';
    visited[8]=1;
    check_status = isWinner(board)
    if (check_status=='o')
      alert(player+" Wins")
    else if (check_status==1)
      alert("It's a Tie!")
    var pos = computerChance(board);
    var row = pos[0];
    var col = pos[1];
    board[row][col] = 'x';
    grid = gridNumber(row+1, col+1);
    grid[0].textContent='X';
    visited[grid[1]]=1;
    check_status = isWinner(board)
    if (check_status=='x')
      alert("Computer Wins")
  }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});

grid9.addEventListener('click', function() {
  if (visited[9]==0 && (isWinner(board) != 'x' && isWinner(board) != 'o'))
  {
    grid9.textContent='O'
    board[2][2]='o';
    visited[9]=1;
    check_status = isWinner(board)
    if (check_status=='o')
      alert(player+" Wins")
    else if (check_status==1)
      alert("It's a Tie!")
    var pos = computerChance(board);
    var row = pos[0];
    var col = pos[1];
    board[row][col] = 'x';
    grid = gridNumber(row+1, col+1);
    grid[0].textContent='X';
    visited[grid[1]]=1;
    check_status = isWinner(board)
    if (check_status=='x')
      alert("Computer Wins")
    }
    else
    {
      if (isWinner(board) == 'o')
        alert(player + " Wins")
      else
        alert("Computer Wins")
    }
});
