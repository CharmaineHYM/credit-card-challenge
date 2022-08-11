<template>
    <label :class="props.pattern" class="default__label"><slot /></label>
</template>

<script setup>
const props = defineProps({
    pattern: String,
})
</script>

<style>
.default__label{
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--Very-dark-violet);
    font-size: var(--fs-s);
}
</style>