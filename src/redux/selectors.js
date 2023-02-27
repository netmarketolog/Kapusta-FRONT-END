//Auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectBalance = state => state.auth.user.balance;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token.accessToken; // ????
// Transactions
export const selectTransactions = state => state.transaction.items;
export const selectSumary = state => state.transaction.sumary;
export const selectReports = state => state.transaction.report;
