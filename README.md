# Unicode Chess
An small library for using and converting unicode chess piece symbols.

## Usage

```js
import { uchess } from uchess
```

### Get piece primitives

Call the color and piece:

```js
uchess[color][piece]

// black knight ♞
uchess.black.n
// white rook ♖
uchess.white.r 
```

Or call the piece directly using capital letters for white and lowercase for black.

## Convert pieces
Accepts any letter represtation or unicode chess symbol and returns the opposite.

Also converts FEN strings and Algebraic Notation.

```js
uchess.convert(pieceString||unicodeSymbol, options)

uchess.convert('♕') // Q
uchess.convert('q') // ♛
```

With additional options for accessing html entities
```js
uchess.convert('q', {html:true}) // &#9819;
```


### Algebraic Notation <=> Figurine Algebraic Notation

```js

```

## To Do
- [ ] FEN string conversion
- [ ] Algebraic notation conversion
- [ ] PGN conversion?
- [ ] Options string / object
- [ ] Optimize


## References
- [Chess symbols in Unicode](https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode)
- [Algebraic notation (chess)](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))
- [Forsyth–Edwards Notation](https://en.wikipedia.org/wiki/Forsyth–Edwards_Notation)
- [Portable Game Notation](https://en.wikipedia.org/wiki/Portable_Game_Notation)

## Related Chess Projects
- Reactive Chess
- ASCII Chess
- Chess socket
