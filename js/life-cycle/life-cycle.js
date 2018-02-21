"use strict";
class Lifecycle {
  static newGame() {
    Builder.buildBoard();
  }

  static stop() {

  }

  static checkScore(player1, player2) {
    if (player1 == 3) return {winner: "Player1"}
    else if (player2 == 3) return {winner: "Player2"}
    else return null;
  }

  static checkDiagonals(gameState) {
    let player1 = 0, player2 = 0;
    for (var i = 0; i < gameState.length; i++) {
      if ($(gameState[i][i]).hasClass("player1")) {
        player1++
      } else if ($(gameState[i][i]).hasClass("player2")) {
        player2++
      }
      let result = this.checkScore(player1, player2);
      if (result) return result;
    }

    player1 = 0;
    player2 = 0;

    for (var i = 0; i < gameState.length; i++) {
      if ($(gameState[i][gameState[i].length - i - 1]).hasClass("player1")) {
        player1++
      } else if ($(gameState[i][gameState[i].length - i - 1]).hasClass("player2")) {
        player2++
      }
      let result = this.checkScore(player1, player2);
      if (result) return result;
    }
  }

  static checkColumns(gameState) {
    let player1 = 0, player2 = 0;
    for (var i = 0; i < gameState.length; i++) {
      player1 = 0;
      player2 = 0;

      for (var j = 0; j < gameState[i].length; j++) {
        if ($(gameState[j][i]).hasClass("player1")) player1++;
        if ($(gameState[j][i]).hasClass("player2")) player2++;
      }
      let result = this.checkScore(player1, player2);
      if (result) return result;
    }
  }

  static checkRows(gameState) {
    let player1 = 0, player2 = 0;
    for (var i = 0; i < gameState.length; i++) {
      player1 = 0;
      player2 = 0;

      for (var j = 0; j < gameState[i].length; j++) {
        if ($(gameState[i][j]).hasClass("player1")) player1++;
        if ($(gameState[i][j]).hasClass("player2")) player2++;
      }
      let result = this.checkScore(player1, player2);
      if (result) return result;
    }
  }

  static checkGameOver() {
    let gameState = [], result = null;

    $("#tictactoe tr").each(function () {
      gameState.push($(this).find('td'));
    });
    return this.checkDiagonals(gameState) || this.checkRows(gameState) || this.checkColumns(gameState);
  }
}
