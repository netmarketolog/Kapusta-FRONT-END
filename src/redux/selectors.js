//Auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectBalance = state => state.auth.user.balance;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token.accessToken; // ????
// Transactions
export const selectTransactions = state => state.transactions.items;
export const selectSumary = state => state.transactions.sumary;
export const selectReports = state => state.transactions.report;
// Operation type
export const selectOperationType = state => state.transactions.operationType;