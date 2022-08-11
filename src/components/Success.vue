<template>
<div class="success">
  <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
  <div class="text">
    <h1 class="success__title">Thank You!</h1>
    <p class="success__help__msg">We've added your card details</p>
  </div>
  <Submit class="success__button" @click="handleRefresh">Continue</Submit>
</div>
</template>

<script setup>
import { store } from '@/store/Store'
import Submit from '../components/form/Submit.vue'

const handleRefresh = () => {
  store.value.isValid = ''
  store.value.cardName = ''
  store.value.cardNb = ''
  store.value.expMonth = ''
  store.value.expYear = ''
  store.value.cvc = ''
}
</script>

<style>
.success{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  width: 100%;
}
.success svg{
  margin: auto;
}
.success__title{
    font-size: var(--fs-l);
    color: var(--Very-dark-violet);
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 1rem;
}
.success__help__msg{
  font-size: var(--fs-r);
  color: var(--Dark-grayish-violet);
}
.success__button{
  width: 50%;
  margin: auto;
}
</style>