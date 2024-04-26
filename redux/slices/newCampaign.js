import { createSlice } from '@reduxjs/toolkit';


// ----------------------------------------------------------------------

const initialState = {
    isLoading: false,
    error: null,
    newCampaign: {
        beneficiaryName: "",
        beneficiaryAge: "",
        beneficiaryGender: "",
        title: "",
        description: "",
        targetAmount: "",
        ytlink: "",
        imageURL: [],
        endDate: "",
        areaCode: "",
        category: "",
        otherCategory: "",
        ngoName: "",
        location: "",
        isChecked: false
    },
    activeStep: 0,
};

const slice = createSlice({
    name: 'newCampaign',
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

        addCart(state, action) {
            state.newCampaign = action.payload
        },
        addImageToCart(state, action) {
            state.newCampaign.imageURL = [...state.newCampaign.imageURL, action.payload]
        },
        removeImageFromCart(state, action) {
            state.newCampaign.imageURL = action.payload
        },
        removeAllImageFromCart(state, action) {
            state.newCampaign.imageURL = []
        },
        onBackStep(state) {
            state.activeStep -= 1;
        },

        onNextStep(state) {
            state.activeStep += 1;
        },

        onGotoStep(state, action) {
            const goToStep = action.payload;
            state.activeStep = goToStep;
        },

        resetCart(state) {
            state.activeStep = 0;
            state.newCampaign.beneficiaryName = "";
            state.newCampaign.beneficiaryAge = "";
            state.newCampaign.beneficiaryGender = "";
            state.newCampaign.title = "";
            state.newCampaign.description = "";
            state.newCampaign.targetAmount = "";
            state.newCampaign.ytlink = "";
            state.newCampaign.endDate = "";
            state.newCampaign.imageURL = "";
            state.newCampaign.areaCode = "";
            state.newCampaign.category = "";
            state.newCampaign.otherCategory = "";
            state.newCampaign.ngoName = "";
            state.newCampaign.location = "";
            state.newCampaign.isChecked = false
        },
    },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    getCart,
    addCart,
    addImageToCart,
    onGotoStep,
    onBackStep,
    onNextStep,
    deleteCart,
    resetCart,
    removeImageFromCart,
    removeAllImageFromCart,
    createBilling,
    applyShipping,
    applyDiscount,
    increaseQuantity,
    decreaseQuantity,
    sortBynewCampaigns,
    filternewCampaigns,
} = slice.actions;

// ----------------------------------------------------------------------

// export function getnewCampaigns() {
//     return async () => {
//         dispatch(slice.actions.startLoading());
//         try {
//             const response = await axios.get('/api/newCampaigns');
//             dispatch(slice.actions.getnewCampaignsSuccess(response.data.newCampaigns));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// // ----------------------------------------------------------------------

// export function getnewCampaign(name) {
//     return async () => {
//         dispatch(slice.actions.startLoading());
//         try {
//             const response = await axios.get('/api/newCampaigns/newCampaign', {
//                 params: { name },
//             });
//             dispatch(slice.actions.getnewCampaignSuccess(response.data.newCampaign));
//         } catch (error) {
//             console.error(error);
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }
