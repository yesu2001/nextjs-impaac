import { pinCodeHelper } from "../helper/pincode";


export const pinCodeInfo = (code) =>new Promise((resolve,reject)=>{ pinCodeHelper(code)
    .then((response) => {
        resolve( {city:response[0].district,state: response[0].circle , country:'INDIA'})
    })
    .catch((err) => {
        reject(err)
    });
})