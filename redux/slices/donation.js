import { createSlice } from '@reduxjs/toolkit';



// ----------------------------------------------------------------------

const initialState = {
    isLoading: false,
    error: null,
    donationCheckout: {
        amount: 500,
        currency: "INR",
        isAnonymous: false
    }
};

const slice = createSlice({
    name: 'donation',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        addAmount(state, action) {
            const amount = action.payload;
            state.donationCheckout.amount = amount
        },
        addAnonymous(state, action) {
            const value = action.payload;
            state.donationCheckout.isAnonymous = value
        },

        addCurrency(state, action) {
            const currency = action.payload;
            state.donationCheckout.currency = currency
        },

    },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    addAmount,
    addCurrency,
    startLoading,
    addAnonymous
} = slice.actions;

// ----------------------------------------------------------------------
