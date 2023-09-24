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

### FEN Conversion

```
const standardFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const unicodeFEN = chessSymbols.fenToUnicodeFen(standardFEN);
console.log("Unicode FEN:", unicodeFEN);

const convertedFEN = chessSymbols.unicodeFenToFen(unicodeFEN);
console.log("Converted FEN:", convertedFEN);
```

### PGN Conversion

```
const standardPGNMove = 'Nf3';
const unicodePGNMove = chessSymbols.pgnToUnicodePgn(standardPGNMove);
console.log('Unicode PGN move:', unicodePGNMove); // Outputs: '♘f3'

const unicodePGNMove2 = '♙e4';
const standardPGNMove2 = chessSymbols.unicodePgnToPgn(unicodePGNMove2);
console.log('Standard PGN move:', standardPGNMove2); // Outputs: 'e4'
```

### Algebraic Notation Conversion

```
const standardAlgebraicMove = 'Nc3';
const unicodeAlgebraicMove = chessSymbols.algebraicToUnicodeAlgebraic(standardAlgebraicMove);
console.log('Unicode algebraic move:', unicodeAlgebraicMove); // Outputs: '♞c3'

const unicodeAlgebraicMove2 = '♟e5';
const standardAlgebraicMove2 = chessSymbols.unicodeAlgebraicToAlgebraic(unicodeAlgebraicMove2);
console.log('Standard algebraic move:', standardAlgebraicMove2); // Outputs: 'e5'
```

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
