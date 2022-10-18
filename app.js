export const uchess = {
  piece: {
    'white': {
      'k': '♔',
      'q': '♕',
      'r': '♖',
      'b': '♗',
      'n': '♘',
      'p': '♙'
    },
    'black': {
      'k': '♚',
      'q': '♛',
      'r': '♜',
      'b': '♝',
      'n': '♞',
      'p': '♟'
    },
    'k': '♚',
    'q': '♛',
    'r': '♜',
    'b': '♝',
    'n': '♞',
    'p': '♟',
    'K': '♔',
    'Q': '♕',
    'R': '♖',
    'B': '♗',
    'N': '♘',
    'P': '♙',
    '♚': 'k',
    '♛': 'q',
    '♜': 'r',
    '♝': 'b',
    '♞': 'n',
    '♟': 'p',
    '♔': 'K',
    '♕': 'Q',
    '♖': 'R',
    '♗': 'B',
    '♘': 'N',
    '♙': 'P'
  },
  convert: function (pieceStr, options) {
    let output

    if (pieceStr.length == 1) {
      output = this.piece[pieceStr] 
    } else {
      
    }
    
    // algebraic
    // fen
    // pgn

    // html entities
    output = options && options.html ? `&#${output.charCodeAt(0)};` : output
    
    return output
  }

}