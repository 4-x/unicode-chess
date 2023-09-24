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

### Algebraic Notation Conversion

```
const standardAlgebraicMove = 'Nc3';
const unicodeAlgebraicMove = chessSymbols.algebraicToUnicodeAlgebraic(standardAlgebraicMove);
console.log('Unicode algebraic move:', unicodeAlgebraicMove); // Outputs: '♞c3'

const unicodeAlgebraicMove2 = '♟e5';
const standardAlgebraicMove2 = chessSymbols.unicodeAlgebraicToAlgebraic(unicodeAlgebraicMove2);
console.log('Standard algebraic move:', standardAlgebraicMove2); // Outputs: 'e5'
```

### PGN Conversion

```
// Standard PGN with sample moves
const standardPGN = `
[Event "Example Game"]
[Site "Chess.com"]
[Date "2023.09.25"]
[Round "1"]
[White "Player1"]
[Black "Player2"]
[Result "1-0"]

1. e4 e5
2. Nf3 Nc6
3. d4 d6
4. Bb5 Bd7
5. O-O Nf6
6. Nc3 a6
7. Bxc6 Bxc6
8. Qd3 Be7
9. Rd1 O-O
10. Bg5 Nh5
11. Bxe7 Qxe7
12. Qc4 Bd7
13. Qxc7 Rd8
14. dxe5 Qe6
15. Rd6 Qg4
16. h3 Qe6
17. Rxe6 Qxe6
18. Rd1 Rc8
19. Qxd6 Qe8
20. Nd5 Rb8
21. Ng5 Qb5
22. Nxf7
1-0
`;

// Convert standard PGN to Unicode PGN
const unicodePGN = chessSymbols.pgnToUnicodeFullPGN(standardPGN);
console.log('Unicode PGN:');
console.log(unicodePGN);

// Convert Unicode PGN back to standard PGN
const convertedPGN = chessSymbols.unicodePgnToPgnFullPGN(unicodePGN);
console.log('Converted PGN:');
console.log(convertedPGN);
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
