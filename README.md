# Unicode Chess
An small class-based javascript library for using and converting unicode chess piece symbols.

## Usage

```js
import { uchess } from uchess
```

### Get pieces 

#### String Primitives

Retrieve by color and piece:

```js
uchess.piece[color][piece]

// black knight ♞
uchess.piece.black.n

// white rook ♖
uchess.piece.white.r
```

Or call the piece directly using capital letters for white and lowercase for black.

```js
uchess.piece[pieceCharacter]

// black knight ♞
uchess.piece.N

// white rook ♖
uchess.piece.white.R
```

### Verbose picker method

Returns an array of piece objects matching the terms

```js
uchess.pick('rook')
uchess.pick('white')
uchess.pick('white', 'rook')
```

### Convert pieces

Flexible converter function that accepts any letter representation or unicode chess symbol and returns the opposite.

Also converts FEN strings and Algebraic Notation / Figurine Algebraic Notation.

```js
uchess.convert(pieceString||unicodeSymbol, options)

uchess.convert('♕') // Q

uchess.convert('q') // ♛
```

With additional options for accessing html entities
```js
uchess.convert('q', {html:true}) // &#9819;
```

## To Do
- [ ] FEN string conversion
- [ ] Algebraic notation conversion
- [ ] PGN conversion?
- [ ] Options string / object
- [ ] Optimize
- [ ] Verbose mode (return objects instead of string primitives)
- [ ] Careless mode
  - [ ] Flip all
  - [ ] To unicode
  - [ ] To character
- [ ] Typescript

## References
- [Chess symbols in Unicode](https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode)
- [Algebraic notation (chess)](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))
- [Forsyth–Edwards Notation](https://en.wikipedia.org/wiki/Forsyth–Edwards_Notation)
- [Portable Game Notation](https://en.wikipedia.org/wiki/Portable_Game_Notation)

## Related Chess Projects
- Reactive Chess
- ASCII Chess
- Chess socket
- Chess.js
