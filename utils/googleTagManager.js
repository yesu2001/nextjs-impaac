import TagManager from "react-gtm-module";


export const GtmEvent = (event, data) => {
    TagManager.dataLayer({
        dataLayer: {
            event,
            data
        },
    });
}