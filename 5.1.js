function makeChessBoard() {
    let NumCell = 1;
  let VNumber = 1;
    let board = document.createElement('table');
  
  const HLetters = " ABCDEFGH";
  board.innerHTML = '';
  board.style = "border-collapse: collapse";
  document.body.appendChild(board);

            for (let row = 0; row <= 8; row++) {
                                
                let newRow = document.createElement('tr');
                board.appendChild(newRow);

                if (board.childElementCount == 1) {
                    for (i of HLetters) {
                        let newColumn = document.createElement('td');
                        newColumn.innerHTML = i;
                        newColumn.style = 'text-align: center';
                        newRow.appendChild(newColumn)
                    }

                } else {
                    for (let column = 0; column <= 8; column++) {
                        let newColumn = document.createElement('td');

                        if (newRow.childElementCount == 0) {
                            newColumn.innerHTML = VNumber;
                            newColumn.style = "text-align: center";
                            VNumber += 1
                        } else if (NumCell % 2 == 0) {
                            newColumn.style = "background-color: black; width:50px; height:50px; border: 1px solid black;"
                        } else {
                            newColumn.style = "background-color: white; width:50px; height:50px; border: 1px solid black;"
                        }

                        newRow.appendChild(newColumn);

                        NumCell += 1
                    }
                }
            }
        }
makeChessBoard()