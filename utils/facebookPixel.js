import ReactPixel from 'react-facebook-pixel';

export const PixeEvent = (name, data) => {
    ReactPixel.trackCustom(name, data);
}

// export const createCampaignPageEvent = (data) => {
//     ReactPixel.trackCustom("P:CreateCamapign", data);
// }