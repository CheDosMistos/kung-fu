const { Console } = require("console-mpds");
const console = new Console();

playTicTacToe();


function playTicTacToe() {
  do {
    playGame();
  } while (isResumed());

  function playGame() {
    const MAX_PLAYERS = 2;
    const playerControls = assignPlayerControls(selectTotalPlayers(MAX_PLAYERS));

    const MAX_TOKENS = 3;
    const TOKEN_EMPTY = ` `;
    let tokens = [
      [TOKEN_EMPTY, TOKEN_EMPTY, TOKEN_EMPTY],
      [TOKEN_EMPTY, TOKEN_EMPTY, TOKEN_EMPTY],
      [TOKEN_EMPTY, TOKEN_EMPTY, TOKEN_EMPTY]
    ];
    let turn = 0;
    let winner;
    do {
      writelnTokens(tokens);
      placeToken(tokens, turn, playerControls[turn]);
      winner = isTicTacToe(tokens, turn);
      if (!winner) {
        turn = nextTurn(turn);
      }
    } while (!winner);
    writelnTokens(tokens);
    console.writeln(`Victoria para ${getToken(turn)}`);

    function selectTotalPlayers(maxPlayers) {
      let totalPlayers;
      let error;
      do {
        totalPlayers = console.readNumber(`Selecciona el número de jugadores:`);
        error = totalPlayers < 0 || maxPlayers < totalPlayers;
        if (error) {
          console.writeln(`Debes seleccionar entre 0 y ${maxPlayers} jugadores.`);
        }
      } while (error);
      return totalPlayers;
    }

    function assignPlayerControls(totalPlayers) {
      let playerControls = [playerRandom, playerRandom];

      for (let i = 0; i < totalPlayers; i++) {
        playerControls[i] = playerUser;
      }
      return playerControls;

      function playerUser(tokens, turn, isOrigin) {
        if (isOrigin) {
          return origin(tokens);
        }
        return target(tokens);

        function origin(tokens) {
          let error;
          let originRow;
          let originColumn;
          do {
            originRow = read(`Fila origen`);
            originColumn = read(`Columna origen`);
            error = !isOccupied(tokens, originRow, originColumn, turn);
            if (error) {
              console.writeln(`No hay una ficha de la propiedad de ${getToken(turn)}`);
            }
          } while (error);
          return [originRow, originColumn];
        }

        function target(tokens) {
          let error;
          let targetRow;
          let targetColumn;
          do {
            targetRow = read(`Fila destino`);
            targetColumn = read(`Columna destino`);
            error = !isEmpty(tokens, targetRow, targetColumn);
            if (error) {
              console.writeln(`Indique una celda vacía`);
            }
          } while (error);
          return [targetRow, targetColumn];
        }
      }

      function playerRandom(tokens, turn, isOrigin) {
        if (isOrigin) {
          return origin(tokens);
        }
        return target(tokens);

        function origin(tokens) {
          let originRow;
          let originColumn;
          do {
            originRow = randomNumber(MAX_TOKENS);
            originColumn = randomNumber(MAX_TOKENS);
          } while (!isOccupied(tokens, originRow, originColumn, turn));
          return [originRow, originColumn];
        }

        function target(tokens) {
          let targetRow;
          let targetColumn;
          do {
            targetRow = randomNumber(MAX_TOKENS);
            targetColumn = randomNumber(MAX_TOKENS);
          } while (!isEmpty(tokens, targetRow, targetColumn));
          return [targetRow, targetColumn];
        }

        function randomNumber(maxTokens) {
          return Math.floor(Math.random() * maxTokens);
        }
      }
    }

    function writelnTokens(tokens) {
      const HORIZONTAL_SEPARTOR = `-------------`;
      const VERTICAL_SEPARATOR = `|`;
      let msg = ``;
      for (let i = 0; i < tokens.length; i++) {
        msg += `${HORIZONTAL_SEPARTOR}\n`;
        for (let j = 0; j < tokens[i].length; j++) {
          msg += `${VERTICAL_SEPARATOR} ${tokens[i][j]} `;
        }
        msg += `${VERTICAL_SEPARATOR}\n`;
      }
      msg += HORIZONTAL_SEPARTOR;
      console.writeln(msg);
    }

    function placeToken(tokens, turn, askForPosition) {
      console.writeln(`Turno para ${getToken(turn)}`);

      let originRow;
      let originColumn;
      const movement = getNumTokens(tokens) === MAX_PLAYERS * MAX_TOKENS;
      if (movement) {
        [originRow, originColumn] = askForPosition(tokens, turn, true);
      }

      let targetRow;
      let targetColumn;
      [targetRow, targetColumn] = askForPosition(tokens, turn, false);

      if (movement) {
        tokens[originRow][originColumn] = TOKEN_EMPTY;
      }
      tokens[targetRow][targetColumn] = getToken(turn);
    }

    function getToken(turn) {
      const TOKEN_X = `X`;
      const TOKEN_Y = `Y`;
      return turn === 0 ? TOKEN_X : TOKEN_Y;
    }

    function getNumTokens(tokens) {
      let empties = 0;
      for (let i = 0; i < tokens.length; i++) {
        for (let j = 0; j < tokens[i].length; j++) {
          if (tokens[i][j] === TOKEN_EMPTY) {
            empties++;
          }
        }
      }
      return MAX_TOKENS ** 2 - empties;
    }

    function read(title) {
      let position;
      let error;
      do {
        position = console.readNumber(`${title}: `);
        error = position < 1 || 3 < position;
        if (error) {
          console.writeln(`Por favor un numero entre 1 y ${MAX_TOKENS} inclusives`)
        }
      } while (error);
      return position - 1;
    }

    function isEmpty(tokens, row, column) {
      return tokens[row][column] === TOKEN_EMPTY;
    }

    function nextTurn(turn) {
      return (turn + 1) % MAX_PLAYERS;
    }

    function isOccupied(tokens, row, column, turn) {
      return tokens[row][column] === getToken(turn);
    }

    function isTicTacToe(tokens, turn) {
      let countRows = [0, 0, 0];
      let countColumns = [0, 0, 0];
      let countDiagonal = 0;
      let countInverse = 0;
      for (let i = 0; i < tokens.length; i++) {
        for (let j = 0; j < tokens[i].length; j++) {
          if (tokens[i][j] === getToken(turn)) {
            countRows[i]++;
            countColumns[j]++;
            if (i - j === 0) {
              countDiagonal++;
            }
            if (i + j === MAX_TOKENS - 1) {
              countInverse++;
            }
          }
        }
      }
      if (countDiagonal === MAX_TOKENS || countInverse === MAX_TOKENS) {
        return true;
      }
      for (let i = 0; i < countRows.length; i++) {
        if (countRows[i] === MAX_TOKENS) {
          return true;
        }
        if (countColumns[i] === MAX_TOKENS) {
          return true;
        }
      }
      return false;
    }

  }

  function isResumed() {
    let result;
    let answer;
    let error = false;
    do {
      answer = console.readString(`¿Quieres jugar otra partida? `);
      result = answer === `si`;
      error = !result && answer !== `no`;
      if (error) {
        console.writeln(`Por favor, responda "si" o "no"`);
      }
    } while (error);
    return result;
  }

}