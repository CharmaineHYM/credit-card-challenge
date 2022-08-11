<template>
<Register />
</template>

<script>
import Register from "./components/Register.vue"

export default {
    name: "App",
    components: { Register }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

:root{
    --linear-gradient: hsl(249, 99%, 64%) to hsl(278, 94%, 30%);
    --red: hsl(0, 100%, 66%);
    --White: hsl(0, 0%, 100%);
    --Light-grayish-violet: hsl(270, 3%, 87%);
    --Dark-grayish-violet: hsl(279, 6%, 55%);
    --Very-dark-violet: hsl(278, 68%, 11%);
    --fs-l: 1.5rem;
    --fs-r: 1rem;
    --fs-s: .8rem;
}

*, *::after, *::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    font-size: var(--fs-r);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
}

p, a, label, button, input, h1, h2, h3, h4{
     font-size: var(--fs-r);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
}

textarea:focus, input:focus{
    outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

button{
    cursor: pointer;
}

</style>
