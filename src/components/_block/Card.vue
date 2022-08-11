<template>
  <div class="card__container">
      <div class="card__wrapper">
      <div class="card">
    <div class="front__card">
        <img src="../../assets/bg-card-front.png" class="front__card__img card__img"/>
        <div class="card__content">
            <div class="card__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="47" fill="none"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            </div>

            <h1 class="card__number">{{showCardNb}}</h1>
            <p class="card__name">{{showCardName}}</p>
            <p class="card__date">{{showExpMonth}}/{{showExpYear}}</p>
        </div>
       
    </div>
    <div class="back__card">
        <img src="../../assets/bg-card-back.png" class="back__card__img card__img"/>
        <p class="card__csv">{{showCvc}}</p>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import {store} from '../../store/Store'

const showCardNb = computed(() => {
    let card__number = store.value.cardNb || "0000000000000000"
    card__number = card__number.padEnd(16, "0");
    return (
        card__number.substring(0, 4) + ' ' +
        card__number.substring(4, 8) + ' ' +
        card__number.substring(8, 12) + ' ' +
        card__number.substring(12, 16)
    )
})

const showCardName = computed(() => {
    let card__name = store.value.cardName || "Jane Appleseed" 
    return card__name
})

const showExpMonth = computed(() => {
    let exp_month = store.value.expMonth || "00"
     exp_month = exp_month.padStart(2, "0");
    return exp_month
})

const showExpYear = computed(() => {
    let exp_year = store.value.expYear || "00"
     exp_year = exp_year.padStart(2, "0");
    return exp_year
})

const showCvc = computed(() => {
    let cvc = store.value.cvc || "00"
     cvc = cvc.padEnd(3, "0");
    return cvc
})



</script>

<style>
.card__wrapper{
    background: url(../../assets/bg-main-desktop.png);
    background-size: cover;
    position: relative;
    height: 100%;
    width: 70%;
}
.front__card{
    width: 100%;
    position: absolute;
    top: 20%;
    right: -25%;
}
.back__card{
    width: 100%;
    position: absolute;
    top: 53%;
    right: -45%;
}
.card__img{
    width: 100%;
}

.card__content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 5% 60% 30% 5%;
    grid-template-rows: 10% repeat(4, 1fr) 5%;
    justify-self: flex-start;
    align-items: center;
    padding: .5rem;
}
.card__logo{
    grid-row: 2/3;
    grid-column: 2/4;
}
.card__number{
    grid-row: 4/5;
    grid-column: 2/4;
}
.card__name{
    grid-row: 5/6;
    grid-column: 2/3;
}
.card__date{
    grid-row: 5/6;
    grid-column: 3/4;
    text-align: right;
}
h1.card__number{
    font-size: 1.8vw; 
    letter-spacing: 2px;
    color: var(--White);
    font-weight: 100;
    white-space: nowrap;
}

.card__name, .card__date{
    color: var(--White);
    font-weight: 100;
    font-size: var(--fs-s);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.card__csv{
    position: absolute;
    top: 43%;
    right: 12%;
    font-size: var(--fs-r);
    letter-spacing: 2px;
    color: var(--White);
    font-weight: 100;
}

@media only screen and (min-width: 1440px) {
    h1.card__number{
        font-size: 1.8rem;
    }
}

@media only screen and (max-width: 1000px) {
    .front__card, .back__card{
        width: 110%;
    }
    .back__card{
        top: 50%;
    }
}
@media only screen and (max-width: 913px) {
    .front__card{
        max-width: 350px;
        left: 0%;
        z-index: 1;
        top: 60%;
    }
    .back__card{
        max-width: 350px;
        right: 0;
        top: 25%;
    }
    h1.card__number{
        font-size: 1.3rem;
    }
}
@media only screen and (max-width: 539px) {
    .front__card,
    .back__card{
        max-width: 90%;
    }
    .front__card{
        top: 70%;
    }
}
</style>