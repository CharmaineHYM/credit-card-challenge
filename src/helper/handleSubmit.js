import { store } from '../store/Store'

let error = {
    typeOne: 'Wong format, please check again',
    typeTwo: "Can't be blank",
    typeThree: "Only accept Visa, Master or AE"
}

function validateCardName(value){
    value = value ? value.toString() : "";
    let err = ''
    let isFilled = value.length
    if(!isFilled){ err = error.typeTwo }
    store.value.cardNameErr = err
    let isValid = isFilled
    return isValid
}

function validateCardNumber(value){
    value = value ? value.toString() : "";
    let err = ''
    let isFilled = value.length
    let isLongEnough = value.length === 16
    let isValidCard = ["1","4","5"].includes( value[0] );

    if( !isFilled ) { err = error.typeTwo }
    else if( !isLongEnough ) { err = error.typeOne }
    else if( !isValidCard ) { err = error.typeThree }
    store.value.cardNbErr = err;
    let isValid = isFilled && isLongEnough && isValidCard;
    return isValid; 
}

function validateExpDate(month, year){
    month = month ? month.toString() : "";
    year = year ? year.toString() : "";
    let err = ''
    let today = new Date();
    let thisYear = today.getFullYear().toString().slice(2)
    let thisMonth = today.getMonth() +1

    let isFilled = month.length && year.length
    let isDateValid = 
    parseInt(month) < 12 || 
    parseInt(year) > parseInt(thisYear) ||
    (parseInt(year) == parseInt(thisYear) && 
    parseInt(month) > thisMonth)

    if( !isDateValid ) { err = error.typeOne }
    if( !isFilled ) { err = error.typeTwo }

    store.value.expDateErr = err

    let isValid = isFilled && isDateValid

    return isValid
}


function validateCvc(value){
    value = value ? value.toString() : "";
    let err = ''
    let isFilled = value.length
    let isLongEnough = value.length >= 3

    if( !isFilled ) { err = error.typeTwo }
    else if( !isLongEnough ) { err = error.typeOne }
    store.value.cvcErr = err
    let isValid = isFilled && isLongEnough

    return isValid
}


export function handleSubmit() {
    let { cardName, cardNb, expMonth, expYear, cvc } = store.value;
    let isValidCardName = validateCardName(cardName) 
    let isValidCardNb = validateCardNumber(cardNb) 
    let isValidExpDate = validateExpDate(expMonth, expYear) 
    let isValidCvc = validateCvc(cvc) 

    store.value.isValid = (
        isValidCardName && 
        isValidCardNb && 
        isValidExpDate && 
        isValidCvc
    );
}