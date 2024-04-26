export const validate = (metaData) => {
    const {
        beneficiary_name, category, title, description, target_amount, gallery, end_date,
        location, isChecked
    } = metaData
    if (beneficiary_name.length < 4) {
        return 'Enter valid beneficiary name';
    }
    // if (pincode.length !== 6) {
    //     return 'Enter valid Pincode'
    // }
    if (location.length < 4) {
        return 'Enter valid Pincode'
    }

    if (!end_date) {
        return 'Select campaign end date'
    }

    if (!category) {
        return 'select Cause Category'
    }

    const numberRegex = /^\d+$/;
    if (!numberRegex.test(target_amount)) {
        return 'Enter valid amount';
    } if (target_amount < 10000) {
        return 'Amount cannot be less than 10000';
    }
    if (title.length < 4) {
        return 'Enter valid campaign name';
    }

    if (!gallery.length > 0) {
        return 'Cover picture required';
    }
    // const ytlinkRegex = /^((?: https ?:) ?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/
    // if (ytlink) {
    //     if (!ytlinkRegex.test(ytlink)) {
    //         return "Enter valid Youtube Link"
    //     }
    // }

    if (description.length < 4) {
        return 'Enter your story';
    }

    if (!isChecked) {
        return "Accept teams and conditions"
    }
    return false;
};
