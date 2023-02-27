//Auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectBalance = state => state.balance;

export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = store => store.auth.accessToken; // ????
