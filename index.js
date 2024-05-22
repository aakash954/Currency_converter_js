import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_c4yzyw2xPx6NTOkdmH1wCqnSA1QS5VYFWkylCSbx');
Convertcurr("INR","USD",3);
export async function Convertcurr(fromcurr,tocurr,unit){
   const res=await freecurrencyapi.latest({
        base_currency: fromcurr,
        currencies: tocurr
    });
    const multiplier=res.data[tocurr];
    return multiplier * unit;
}