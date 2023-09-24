# Unicode Chess ♔♕♖♗♘♙♚♛♜♝♞♟

An small class-based javascript library for using and converting unicode chess piece symbols and standard chess notation.

## Usage

```
const chessSymbols = new ChessPieceSymbols();

console.log(chessSymbols.getSymbolByName("king", "white")); // Outputs: ♔
console.log(chessSymbols.getNameBySymbol("♛")); // Outputs: { name: 'queen', color: 'black' }
```

## To Do

- [ ] FEN string conversion
- [ ] Algebraic notation conversion
- [ ] PGN conversion?
- [ ] Options string / object
- [ ] Optimize
- [ ] Verbose mode (to return objects instead of string primitives)
- [ ] Careless mode
  - [ ] Flip all characters
  - [ ] To unicode
  - [ ] To character
- [ ] Typescript

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
