export interface GetWalletBalancesResponse {
  getWalletBalances: {
    tokens: Token[];
  };
}

export interface Token {
  token_address: string;
  name: string;
  symbol: string;
  logo?: string;
  thumbnail?: string;
  decimals: number;
  balance: string;
  possible_spam: boolean;
  verified_collection?: boolean;
}

export interface WalletTransaction {
  from: string;
  gas: string;
  id: string;
  time: string;
  to: string;
  value: string;
}

export interface GetWalletTransactionsResponse {
  getWalletTransactions: {
    transactions: WalletTransaction[];
    nextCursor: string | null;
  }
}
