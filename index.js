// 2048
$(".game-over").hide();
let gameBoardArray = [];
let numberArray = [];
let score = 0;
let gameOver = false;

function gameBoxObject(value, fill, status, newRand) {
  this.value = value;
  this.fill = fill;
  this.status = status;
  this.newRand = newRand;
}

makeGameBoardArray();
randomNumber();
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    gameBoardArray[i][j].newRand = "no";
  }
}
display();

$(document).keydown(function(e) {
  e.preventDefault();
  if (e.key === "ArrowLeft") {
    if (checkBoard(gameBoardArray, "ArrowLeft")) {
      arrowLeft(gameBoardArray);
      if (notFilled(gameBoardArray)) {
        randomNumber();
      }
    } else {
      if (!(notFilled(gameBoardArray))) {
        gameOver = true;
      }
    }
  } else if (e.key === "ArrowUp") {
    if (checkBoard(gameBoardArray, "ArrowUp")) {
      arrowUp(gameBoardArray);
      if (notFilled(gameBoardArray)) {
        randomNumber();
      }
    } else {
      if (!(notFilled(gameBoardArray))) {
        gameOver = true;
      }
    }
  } else if (e.key === "ArrowRight") {
    if (checkBoard(gameBoardArray, "ArrowRight")) {
      arrowRight(gameBoardArray);
      if (notFilled(gameBoardArray)) {
        randomNumber();
      }
    } else {
      if (!(notFilled(gameBoardArray))) {
        gameOver = true;
      }
    }
  } else if (e.key === "ArrowDown") {
    if (checkBoard(gameBoardArray, "ArrowDown")) {
      arrowDown(gameBoardArray);
      if (notFilled(gameBoardArray)) {
        randomNumber();
      }
    } else {
      if (!(notFilled(gameBoardArray))) {
        gameOver = true;
      }
    }
  }
  if (gameOver) {
    $(".game-over").fadeIn(1000);
  } else {
    display();
    flash(numberArray);
    console.log(gameBoardArray);
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        gameBoardArray[i][j].status = "old";
        gameBoardArray[i][j].newRand = "no";
      }
    }
    console.log(gameBoardArray);
  }
});

$(".status button").click(function () {
  gameOver = false;
  $(".game-over").hide();
  score = 0;
  makeGameBoardArray();
  randomNumber();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      gameBoardArray[i][j].newRand = "no";
    }
  }
  display();
});

function randomNumber() {
  let randomR = Math.floor(Math.random() * 4);
  let randomC = Math.floor(Math.random() * 4);
  while (gameBoardArray[randomR][randomC].fill === "yes") {
    randomR = Math.floor(Math.random() * 4);
    randomC = Math.floor(Math.random() * 4);
  }
  let randomN = Math.ceil(Math.random() * 4);
  if (randomN === 1 || randomN === 3) {
    randomN += 1;
  }
  gameBoardArray[randomR][randomC].fill = "yes";
  gameBoardArray[randomR][randomC].value = randomN;
  gameBoardArray[randomR][randomC].newRand = "yes";
}

function makeGameBoardArray() {
  gameBoardArray = [];
  for (var i = 0; i < 4; i++) {
    gameBoardArray.push([]);
  }

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var gameBox = new gameBoxObject("&nbsp;", "no", "old", "no");
      gameBoardArray[i].push(gameBox);
    }
  }
}

function makeNumberArray(arrIn) {
  arrOut = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      arrOut.push(arrIn[i][j]);
    }
  }
  return arrOut;
}

function display() {
  $(".score-display #score").text(score);
  numberArray = makeNumberArray(gameBoardArray);
  var boxNumber = 0;
  $(".box").each(function(index) {
    $(this).html("<h1>" + numberArray[boxNumber].value + "</h1>");
    boxNumber++;
  });
  $(".box h1").each(function(index) {
    if ($(this).text() === "2") {
      $(this).css("background-color", "#EEE4DA");
    } else if ($(this).text() === "4") {
      $(this).css("background-color", "#EEE1C9");
    } else if ($(this).text() === "8") {
      $(this).css("background-color", "#F3B27A");
      $(this).css("color", "white");
    } else if ($(this).text() === "16") {
      $(this).css("background-color", "#F69664");
      $(this).css("color", "white");
    } else if ($(this).text() === "32") {
      $(this).css("background-color", "#F77C5F");
      $(this).css("color", "white");
    } else if ($(this).text() === "64") {
      $(this).css("background-color", "#F75F3B");
      $(this).css("color", "white");
    } else if ($(this).text() === "128") {
      $(this).css("background-color", "#EDD073");
      $(this).css("color", "white");
      $(this).css("font-size", "47px");
      $(this).css("padding", "41px 0 41px");
    } else if ($(this).text() === "256") {
      $(this).css("background-color", "#EDC850");
      $(this).css("color", "white");
      $(this).css("font-size", "47px");
      $(this).css("padding", "41px 0 41px");
    } else if ($(this).text() === "512") {
      $(this).css("background-color", "#EDC53F");
      $(this).css("color", "white");
      $(this).css("font-size", "47px");
      $(this).css("padding", "41px 0 41px");
    } else if ($(this).text() === "1024") {
      $(this).css("background-color", "#EDC22E");
      $(this).css("color", "white");
      $(this).css("font-size", "39px");
      $(this).css("padding", "45px 0 45px");
    } else if ($(this).text() === "2048") {
      $(this).css("background-color", "#ECC300");
      $(this).css("color", "white");
      $(this).css("font-size", "39px");
      $(this).css("padding", "45px 0 45px");
    } else if (parseInt($(this).text()) > 2048){
      $(this).css("background-color", "#3C3A32");
      $(this).css("color", "white");
      $(this).css("font-size", "33px");
      $(this).css("padding", "48px 0 48px");
    } else {
      $(this).css("background-color", "#CDC1B4");
    }
  });
}

function flash(arr) {
  var boxNumber = 0;
  $(".box").each(function(index) {
    if (arr[boxNumber].newRand === "yes") {
      $(this).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    boxNumber++;
  });
}

function checkBoard(arr, direction) {
  var tempArray = [];
  tempArray = JSON.parse(JSON.stringify(arr));
  switch (direction) {
    case "ArrowLeft":
      arrowLeft(tempArray);
      if (compareArr(tempArray, arr)) {
        return false;
      } else {
        return true;
      }
    case "ArrowUp":
      arrowUp(tempArray);
      if (compareArr(tempArray, arr)) {
        return false;
      } else {
        return true;
      }
    case "ArrowRight":
      arrowRight(tempArray);
      if (compareArr(tempArray, arr)) {
        return false;
      } else {
        return true;
      }
    case "ArrowDown":
      arrowDown(tempArray);
      if (compareArr(tempArray, arr)) {
        return false;
      } else {
        return true;
      }
  }
}

function compareArr(arr1, arr2) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (arr1[i][j].value !== arr2[i][j].value) {
        return false;
      }
    }
  }
  return true;
}

function notFilled(arr) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (arr[i][j].value === "&nbsp;") {
        return true;
      }
    }
  }
  return false;
}

function arrowLeft(arr) {
  var count = 1;
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (arr[i][j].fill === "yes") {
        if (arr[i][j - count].fill === "yes") {
          if (arr[i][j - count].value === arr[i][j].value && arr[i][j - count].status === "old") {
            arr[i][j - count].value += arr[i][j].value;
            arr[i][j - count].status = "new";
            score += (arr[i][j-count].value)/2;
            arr[i][j].fill = "no";
            arr[i][j].value = "&nbsp;";
            j = j - count;
            count = 1;
          } else {
            if (count > 1) {
              arr[i][j - count + 1].value = arr[i][j].value;
              arr[i][j - count + 1].fill = "yes";
              arr[i][j].value = "&nbsp;";
              arr[i][j].fill = "no";
              j = j - count + 1;
              count = 1;
            }
          }
        } else {
          arr[i][j - count].value = arr[i][j].value;
          arr[i][j - count].fill = "yes";
          arr[i][j].value = "&nbsp;";
          arr[i][j].fill = "no";
          j = j - count;
          count = 1;
        }
      } else {
        count++;
      }
    }
    count = 1;
  }
}

function arrowRight(arr) {
  var count = 1;
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if (arr[i][j].fill === "yes") {
        if (arr[i][j + count].fill === "yes") {
          if (arr[i][j + count].value === arr[i][j].value && arr[i][j + count].status === "old") {
            arr[i][j + count].value += arr[i][j].value;
            arr[i][j + count].status = "new";
            score += (arr[i][j+count].value)/2;
            arr[i][j].fill = "no";
            arr[i][j].value = "&nbsp;";
            j = j + count;
            count = 1;
          } else {
            if (count > 1) {
              arr[i][j + count - 1].value = arr[i][j].value;
              arr[i][j + count - 1].fill = "yes";
              arr[i][j].value = "&nbsp;";
              arr[i][j].fill = "no";
              j = j + count - 1;
              count = 1;
            }
          }
        } else {
          arr[i][j + count].value = arr[i][j].value;
          arr[i][j + count].fill = "yes";
          arr[i][j].value = "&nbsp;";
          arr[i][j].fill = "no";
          j = j + count;
          count = 1;
        }
      } else {
        count++;
      }
    }
    count = 1;
  }
}

function arrowUp(arr) {
  var count = 1;
  for (var j = 0; j < 4; j++) {
    for (var i = 1; i < 4; i++) {
      if (arr[i][j].fill === "yes") {
        if (arr[i-count][j].fill === "yes") {
          if (arr[i-count][j].value === arr[i][j].value && arr[i-count][j].status === "old") {
            arr[i-count][j].value += arr[i][j].value;
            arr[i-count][j].status = "new";
            score += (arr[i-count][j].value)/2;
            arr[i][j].fill = "no";
            arr[i][j].value = "&nbsp;";
            i = i - count;
            count = 1;
          } else {
            if (count > 1) {
              arr[i-count+1][j].value = arr[i][j].value;
              arr[i-count+1][j].fill = "yes";
              arr[i][j].value = "&nbsp;";
              arr[i][j].fill = "no";
              i = i - count + 1;
              count = 1;
            }
          }
        } else {
          arr[i-count][j].value = arr[i][j].value;
          arr[i-count][j].fill = "yes";
          arr[i][j].value = "&nbsp;";
          arr[i][j].fill = "no";
          i = i - count;
          count = 1;
        }
      } else {
        count++;
      }
    }
    count = 1;
  }
}

function arrowDown(arr) {
  var count = 1;
  for (var j = 0; j < 4; j++) {
    for (var i = 2; i >= 0; i--) {
      if (arr[i][j].fill === "yes") {
        if (arr[i+count][j].fill === "yes") {
          if (arr[i+count][j].value === arr[i][j].value && arr[i+count][j].status === "old") {
            arr[i+count][j].value += arr[i][j].value;
            arr[i+count][j].status = "new";
            score += (arr[i+count][j].value)/2;
            arr[i][j].fill = "no";
            arr[i][j].value = "&nbsp;";
            i = i + count;
            count = 1;
          } else {
            if (count > 1) {
              arr[i+count-1][j].value = arr[i][j].value;
              arr[i+count-1][j].fill = "yes";
              arr[i][j].value = "&nbsp;";
              arr[i][j].fill = "no";
              i = i + count - 1;
              count = 1;
            }
          }
        } else {
          arr[i+count][j].value = arr[i][j].value;
          arr[i+count][j].fill = "yes";
          arr[i][j].value = "&nbsp;";
          arr[i][j].fill = "no";
          i = i + count;
          count = 1;
        }
      } else {
        count++;
      }
    }
    count = 1;
  }
}
