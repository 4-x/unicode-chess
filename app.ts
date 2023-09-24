class ChessPieceSymbols {
  private symbols: Record<string, Record<string, string>> = {
    king: { white: "♔", black: "♚" },
    queen: { white: "♕", black: "♛" },
    rook: { white: "♖", black: "♜" },
    bishop: { white: "♗", black: "♝" },
    knight: { white: "♘", black: "♞" },
    pawn: { white: "♙", black: "♟" },
  };

  private reverseSymbols: Record<string, Record<string, string>> = {};

  constructor() {
    for (const piece in this.symbols) {
      if (this.symbols.hasOwnProperty(piece)) {
        this.reverseSymbols[this.symbols[piece].white] = { piece, color: "white" };
        this.reverseSymbols[this.symbols[piece].black] = { piece, color: "black" };
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
}