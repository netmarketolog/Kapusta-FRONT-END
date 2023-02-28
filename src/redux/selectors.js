//Auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectBalance = state => state.auth.user.balance;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectTokenDeadline = state => state.auth.token?.expiresIn;

// Transactions
export const selectTransactions = state => state.transactions.items;
export const selectSumary = state => state.transactions.sumary;
export const selectReports = state => state.transactions.report;
