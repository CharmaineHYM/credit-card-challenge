<template>
    <input class="default__input" 
    :placeholder="placeholder" 
    :type="props.type" 
    :value="props.modelValue" 
    @input="emit('update:modelValue', formatValidation($event.target))" 
    v-bind="attrs"/>
</template>

<script setup>
import { useAttrs } from 'vue'
import { formatValidation } from '../../helper/formatValidation'
const props = defineProps({
    placeholder: String,
    type: String,
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const attrs = useAttrs()

</script>


<style>
.default__input{
    width: 100%;
    padding: 10px;
    border: 1px solid var(--Light-grayish-violet);
    border-radius: 5px;
    margin: 5px 0;
}
.default__input::placeholder{
    color: var(--Light-grayish-violet);
}
</style>