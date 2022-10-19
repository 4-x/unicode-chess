class UChess {
  constructor() {
    this.pieces = [
      {
        symbol: '♚',
        name: 'king',
        char: 'k',
        color: 'black'
      },
      {
        symbol: '♛',
        name: 'queen',
        char: 'q',
        color: 'black'
      },
      {
        symbol: '♜',
        name: 'rook',
        char: 'r',
        color: 'black'
      },
      {
        symbol: '♝',
        name: 'bishop',
        char: 'b',
        color: 'black'
      },
      {
        symbol: '♞',
        name: 'knight',
        char: 'n',
        color: 'black'
      },
      {
        symbol: '♟',
        name: 'pawn',
        char: 'p',
        color: 'black'
      },
      {
        symbol: '♔',
        name: 'king',
        char: 'K',
        color: 'white'
      },
      {
        symbol: '♕',
        name: 'queen',
        char: 'Q',
        color: 'white'
      },
      {
        symbol: '♖',
        name: 'rook',
        char: 'R',
        color: 'white'
      },
      {
        symbol: '♗',
        name: 'bishop',
        char: 'B',
        color: 'white'
      },
      {
        symbol: '♘',
        name: 'knight',
        char: 'N',
        color: 'white'
      },
      {
        symbol: '♙',
        name: 'pawn',
        char: 'P',
        color: 'white'
      }
    ]
    this.piece = this.pieces.reduce((o, piece) => {
      return {...o, [piece.symbol]: piece.char, [piece.char]: piece.symbol}
    }, {})
  }

  get white() {
    return this.pieces.filter(piece=>{
      return piece.color=='white'
    })
  }

  get black() {
    return this.pieces.filter(piece=>{
      return piece.color=='black'
    })
  }

  pick = function () {
    // finder utility
    // options?
  }

  convert = function (pieceStr, options) {
    let output;

    if (pieceStr.length == 1) {
      output = this.piece[pieceStr];
    } else {
    }

    // TODO algebraic
    // TODO fen
    // TODO pgn

    // TODO verbose option
    // TODO hungry/careless mode - flip; to uc; to char

    // html entities
    output = options && options.html ? `&#${output.charCodeAt(0)};` : output;

    return output;
  }

  wrap = function (pieceStr, htmlTagStr) {
    const el = document.createElement(htmlTagStr);
    el.textContent = pieceStr;
    return el;
  }

}

export const uchess = new UChess()