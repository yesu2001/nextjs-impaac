import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import campaignReducer from './slices/campaign';
import newCampaignReducer from './slices/newCampaign';
import donationReducer from './slices/donation';
import dashboardReducer from './slices/dashboard';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
};

// const campaignPersistConfig = {
//   key: 'campaign',
//   storage,
//   keyPrefix: 'redux-',
// };

const newCampaignPersistConfig = {
  key: 'newCampaign',
  storage,
  keyPrefix: 'redux-',
};

const rootReducer = combineReducers({
  donation: donationReducer,
  campaign: campaignReducer,
  newCampaign: persistReducer(newCampaignPersistConfig, newCampaignReducer),
  dashboard: dashboardReducer,
});

export { rootPersistConfig, rootReducer };
