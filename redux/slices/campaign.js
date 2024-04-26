import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../config';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  refresh: false,
  campaigns: [],
  campaign: null,
  sortBy: null,
  filters: {
    category: 'All',
  },
};

const slice = createSlice({
  name: 'campaign',
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
    // refreash campaign
    refreshCampaign(state) {
      state.refresh = !state.refresh;
    },

    // GET campaignS
    getcampaignsSuccess(state, action) {
      state.isLoading = false;
      state.campaigns = action.payload;
    },

    // GET campaign
    getcampaignSuccess(state, action) {
      state.isLoading = false;
      state.campaign = action.payload;
    },

    //  SORT & FILTER campaignS
    sortByCampaigns(state, action) {
      state.sortBy = action.payload;
    },

    filterCampaigns(state, action) {
      state.filters.category = action.payload.category;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getCart,
  addCart,
  resetCart,
  refreshCampaign,
  onGotoStep,
  onBackStep,
  onNextStep,
  deleteCart,
  createBilling,
  applyShipping,
  applyDiscount,
  increaseQuantity,
  decreaseQuantity,
  sortByCampaigns,
  filterCampaigns,
} = slice.actions;

// ----------------------------------------------------------------------

export function getCampaigns() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${API}/api/campaigns`);
      dispatch(slice.actions.getcampaignsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getCampaign(name) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/campaigns/campaign', {
        params: { name },
      });

      dispatch(slice.actions.getcampaignSuccess(response.data.campaign));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
