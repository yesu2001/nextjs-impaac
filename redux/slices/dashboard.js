import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../config";
// utils
import axios from "../../utils/axios";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  reload: false,
  error: null,
  myCampaigns: [],
  myDonations: [],
  myWithdrawals: [],
  myCampaign: null,
  sortBy: null,
};

const slice = createSlice({
  name: "myCampaign",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // STOP LOADING
    stopLoading(state) {
      state.isLoading = false;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET myCampaignS
    getmyCampaignsSuccess(state, action) {
      state.isLoading = false;
      state.myCampaigns = action.payload;
    },

    // GET myCampaign
    getmyCampaignSuccess(state, action) {
      state.isLoading = false;
      state.myCampaign = [];
      state.myCampaign = action.payload;
    },

    // GET myDonors
    getMyDonationsSuccess(state, action) {
      state.isLoading = false;
      state.myDonations = action.payload;
    },
    // GET myWithdrawals
    getMyWithdrawalsSuccess(state, action) {
      state.isLoading = false;
      state.myWithdrawals = action.payload;
    },

    // refreash campaign
    refreshDashboard(state) {
      state.reload = !state.reload;
    },

    //  SORT & FILTER myCampaignS
    sortBymyCampaigns(state, action) {
      state.sortBy = action.payload;
    },

    filtermyCampaigns(state, action) {
      state.filters.category = action.payload.category;
      state.filters.colors = action.payload.colors;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  sortBymyCampaigns,
  filtermyCampaigns,
  refreshDashboard,
  startLoading,
  stopLoading,
} = slice.actions;

// ----------------------------------------------------------------------

export function getmyCampaigns(id, token) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${API}/api/user/campaign/list/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(slice.actions.getmyCampaignsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getmyCampaign(name) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/myCampaigns/myCampaign", {
        params: { name },
      });
      if (!response.error) {
        dispatch(slice.actions.getmyCampaignSuccess(response.data.myCampaign));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMyDonations(id, token) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${API}/api/user/donation/list/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(slice.actions.getMyDonationsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMyWithdrawals(id, token) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        `${API}/api/user/withdrawal/list/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(slice.actions.getMyWithdrawalsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
