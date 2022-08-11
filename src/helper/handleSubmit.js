import { store } from '../store/Store'

let error = {
    typeOne: 'Wong format, please check again',
    typeTwo: "Can't be blank"
}

function validateCardName(value){
    if(!value){
        store.value.cardNameErr = error.typeTwo
    }
    else{
        store.value.cardNameErr = ''
        return true
    }

    return false
}

function validateCardNumber(value){
    if(!value){
        store.value.cardNbErr = error.typeTwo
    }
    else{
        if(!(value.startsWith(1) || value.startsWith(4) || value.startsWith(5))){
            store.value.cardNbErr = error.typeOne
        }else{
            if(!(value.length === 16)){
                store.value.cardNbErr = error.typeOne
            }
            else{
                store.value.cardNbErr = ''
                return true
            }
        }
        
    }

    return false
}

function validateExpDate(month, year){
    let today = new Date();
    let thisYear = today.getFullYear().toString().slice(2)
    let thisMonth = today.getMonth() +1

    if(!month || !year){
        store.value.expDateErr = error.typeTwo
    }
    else{
        if(parseInt(month) > 12 || 
        parseInt(year) < parseInt(thisYear) ||
        (parseInt(year) == parseInt(thisYear) && 
        parseInt(month) < thisMonth)){
            store.value.expDateErr = error.typeOne
        }
        else{
            store.value.expDateErr = ''
            return true
        }
    }
    return false
}


function validateCvc(value){
    if(!value){
        store.value.cvcErr = error.typeTwo
    }else{
        if(value.length < 3){
            store.value.cvcErr = error.typeOne
        }
        else{
            store.value.cvcErr = ''
            return true
        }
    }
    return false
}

export function handleSubmit(){
    let isValidCardName = validateCardName(store.value.cardName)
    let isValidCardNb = validateCardNumber(store.value.cardNb)
    let isValidExpDate = validateExpDate(store.value.expMonth, store.value.expYear)
    let isValidCvc = validateCvc(store.value.cvc)
    if(
        isValidCardName &&
        isValidCardNb && 
        isValidExpDate && 
        isValidCvc
    ){
       store.value.isValid = true
    }
    
}