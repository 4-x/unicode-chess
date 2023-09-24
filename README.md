# Unicode Chess ♔♕♖♗♘♙♚♛♜♝♞♟

An small class-based typescript library for using and converting unicode chess piece symbols and standard chess notation.

## Usage

```
const chessSymbols = new ChessPieceSymbols();
```

### Symbol Conversion

```
console.log(chessSymbols.getSymbolByName("king", "white")); // Outputs: ♔
console.log(chessSymbols.getNameBySymbol("♛")); // Outputs: { name: 'queen', color: 'black' }
```

### FEN String Conversion

```
const standardFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const unicodeFEN = chessSymbols.fenToUnicodeFen(standardFEN);
console.log("Unicode FEN:", unicodeFEN);

const convertedFEN = chessSymbols.unicodeFenToFen(unicodeFEN);
console.log("Converted FEN:", convertedFEN);
```

## To Do

- [ ] Algebraic notation conversion
- [ ] PGN conversion?
- [ ] Verbose mode (to return objects instead of string primitives)

## References

- [Chess symbols in Unicode](https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode)
- [Algebraic notation (chess)](<https://en.wikipedia.org/wiki/Algebraic_notation_(chess)>)
- [Forsyth–Edwards Notation](https://en.wikipedia.org/wiki/Forsyth–Edwards_Notation)
- [Portable Game Notation](https://en.wikipedia.org/wiki/Portable_Game_Notation)

<!-- ## Related Chess Projects
- Reactive Chess
- ASCII Chess
- Chess socket
- Chess.js -->
