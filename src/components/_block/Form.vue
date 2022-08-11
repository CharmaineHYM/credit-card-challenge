<template>
<section class="form">
    <Success v-if="store.isValid" />
    <form class="personalDetail" v-else>
        <div class="cardName">
            <Field.Label class="label">Cardholder Name</Field.Label>
            <Field.Input placeholder="e.g. Jane Appleseed" type="text" v-model="store.cardName" pattern="[^a-z A-Z]+" />
            <Field.Error v-show="store.cardNameErr" >{{store.cardNameErr}}</Field.Error>
        </div>

        <div class="cardNb">
            <Field.Label class="label">Card Number</Field.Label>
            <Field.Input placeholder="e.g. 1234 5678 9123 0000" v-model="formatedCardNb" maxlength="19" pattern="[^0-9]+" />
            <Field.Error v-show="store.cardNbErr" >{{store.cardNbErr}}</Field.Error>
        </div>

        <div class="expDate">
            <Field.Label class="label">Exp. Date (MM/YY)</Field.Label>
            <div class="expDate__options">
                <Field.Input placeholder="MM" class="month" v-model="store.expMonth" maxlength="2" pattern="[^0-9]+" /> 
                <Field.Input placeholder="YY"  class="year" v-model="store.expYear" maxlength="2" pattern="[^0-9]+" />
            </div>
                <Field.Error v-show="store.expDateErr" >{{store.expDateErr}}</Field.Error>
        </div>

        <div class="cvc">
            <Field.Label class="label">cvc</Field.Label>
            <Field.Input placeholder="e.g. 123" v-model="store.cvc" maxlength="3" pattern="[^0-9]+" />
           <Field.Error v-show="store.cvcErr" >{{store.cvcErr}}</Field.Error>
        </div>

        <Field.Submit class="submit" @click.prevent="handleSubmit">Confirm</Field.Submit>
    </form>
</section>

</template>

<script setup>
import * as Field from '../form/Field'
import {store} from '../../store/Store'
import {handleSubmit} from '../../helper/handleSubmit'
import Success from '../Success.vue'
import { computed } from '@vue/reactivity';
import { mask } from "maska";

const formatedCardNb = computed({
    get(){
        return mask(store.value.cardNb , "#### #### #### ####")
    },
    set(value){
        store.value.cardNb = value.replace(/\s+/g, "")
        console.log(store.value.cardNb)
    }
})

</script>

<style>

.form{
    background-color: var(--White);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 1rem;
}
.personalDetail{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 400px;
}
.cardName, .cardNb{
    grid-column: 1/3;
}
.expDate{
    grid-column: 1/2;
}
.cvc{
    grid-column: 2/3;
}

.submit{
    grid-column: 1/3;
}

.expDate__options{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: .5rem;
}

.expDate__options .month{
    grid-column: 1/2;
}
.expDate__options .year{
    grid-column: 2/3;
}
</style>