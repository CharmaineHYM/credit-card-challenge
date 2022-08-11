<template>
    <div class="register">
        <Form />
         <Card />
    </div>
</template>

<script setup>
import Form from "./_block/Form.vue";
import Card from "./_block/Card.vue";
</script>

<style>
.register{
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;
    height: 100vh;
    max-width: 1440px;
    margin: auto;
}

.form{
    grid-column: 2/3;
    grid-row: 1/2;
}

.card__container{
    grid-column: 1/2;
    grid-row: 1/2;
}
@media only screen and (max-width: 913px) {
    .register{
        grid-template-columns: 1fr;
        grid-template-rows: 1.5fr 1fr;
        height: auto;
    }
    .form{
        grid-column: 1/2;
        grid-row: 2/3;
    }
    .card__wrapper{
        width: 100%;
        height: 70%;
    }
    .card{
        height: 100%;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 450px;
    }
}

@media only screen and (max-width: 539px) {
    .register{
        grid-template-rows: 310px 420px;
    }
    .card{
        width: 90%;
        top: -10px;
    } 
}

</style>