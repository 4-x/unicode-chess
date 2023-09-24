class ChessPieceSymbols {
  private symbols: Record<string, Record<"white" | "black", string>> = {
    king: { white: "♔", black: "♚" },
    queen: { white: "♕", black: "♛" },
    rook: { white: "♖", black: "♜" },
    bishop: { white: "♗", black: "♝" },
    knight: { white: "♘", black: "♞" },
    pawn: { white: "♙", black: "♟" },
  };

  private reverseSymbols: Record<string, { piece: string; color: "white" | "black" }> = {};

  constructor() {
    for (const piece in this.symbols) {
      if (this.symbols.hasOwnProperty(piece)) {
        const color: "white" | "black" = "white"; // Default to white
        this.reverseSymbols[this.symbols[piece][color]] = { piece, color };
        this.reverseSymbols[this.symbols[piece]["black"]] = { piece, color: "black" };
      }
    }
  }

  getSymbolByName(name: string, color: "white" | "black"): string | undefined {
    return this.symbols[name.toLowerCase()]?.[color.toLowerCase()];
  }

  getNameBySymbol(symbol: string): { name: string; color: "white" | "black" } | undefined {
    const pieceInfo = this.reverseSymbols[symbol];
    if (pieceInfo) {
      return { name: pieceInfo.piece, color: pieceInfo.color };
    }
    return undefined;
  }

  // Utility function to convert from standard FEN to Unicode FEN
  fenToUnicodeFen(fen: string): string {
    return fen.replace(/[\w]/g, (match) => {
      if (match === match.toLowerCase()) {
        return this.getSymbolByName(match, "black") || match;
      } else {
        return this.getSymbolByName(match, "white") || match;
      }
    });
  }

  // Utility function to convert from Unicode FEN to standard FEN
  unicodeFenToFen(unicodeFen: string): string {
    return unicodeFen.replace(/[\u2654-\u265F]/g, (match) => {
      return this.getNameBySymbol(match)?.name || match.toLowerCase();
    });
  }

  // Utility function to convert from standard algebraic notation to Unicode algebraic notation
  algebraicToUnicodeAlgebraic(algebraicMove: string): string {
    return algebraicMove.replace(/[NBRQK]/g, (match) => {
      return this.getSymbolByName(match.toLowerCase(), 'white') || match;
    });
  }

  // Utility function to convert from Unicode algebraic notation to standard algebraic notation
  unicodeAlgebraicToAlgebraic(unicodeAlgebraicMove: string): string {
    return unicodeAlgebraicMove.replace(/[\u2654-\u265F]/g, (match) => {
      return this.getNameBySymbol(match)?.name || match.toLowerCase();
    });
  }

  // Utility function to convert from standard PGN to Unicode PGN
  pgnToUnicodeFullPGN(standardPGN: string): string {
    const moves = standardPGN.split(/\d+\.\s*/).filter(Boolean);
    const convertedMoves = moves.map((move, index) => {
      const isWhiteMove = index % 2 === 0;
      const notationConverter = isWhiteMove
        ? this.algebraicToUnicodeAlgebraic.bind(this)
        : this.unicodeAlgebraicToAlgebraic.bind(this);
      const convertedMove = move.trim().split(/\s+/).map(notationConverter).join(' ');
      return `${index + 1}. ${convertedMove}`;
    });
    return convertedMoves.join('\n');
  }

  // Utility function to convert from Unicode PGN to standard PGN
  unicodePgnToPgnFullPGN(unicodePGN: string): string {
    const moves = unicodePGN.split(/\d+\.\s*/).filter(Boolean);
    const convertedMoves = moves.map((move, index) => {
      const isWhiteMove = index % 2 === 0;
      const notationConverter = isWhiteMove
        ? this.unicodeAlgebraicToAlgebraic.bind(this)
        : this.algebraicToUnicodeAlgebraic.bind(this);
      const convertedMove = move.trim().split(/\s+/).map(notationConverter).join(' ');
      return `${index + 1}. ${convertedMove}`;
    });
    return convertedMoves.join('\n');
  }
}

export { ChessPieceSymbols }
