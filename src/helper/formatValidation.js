import { store } from '../store/Store'

export function formatValidation(el){
    if(el.attributes.pattern){
        const regex = new RegExp(el.attributes.pattern.value)
        el.value = el.value.replace(regex, '')
        return el.value
    }else{
        return
    }
}