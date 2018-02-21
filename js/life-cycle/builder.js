"use strict"

class Builder {
  static buildBoard() {
    let boardBody = [];
    boardBody.push(_iboard.tbodystart);
    for (var i = 0; i < 9; i++) {
      if (i % 3 == 0)boardBody.push(_iboard.trstart);
      boardBody.push(_iboard.td);
      if (i % 3 == 2)boardBody.push(_iboard.trend);
    }
    boardBody.push(_iboard.tbodyend);
    $(_iboard.boardFrame).html(boardBody.join(""));
  }
}
Builder.buildBoard();
