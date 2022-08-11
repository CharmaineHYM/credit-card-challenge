import { ref } from 'vue'

export const store = ref({
  cardName: '',
  cardNb: '',
  expMonth: '',
  expYear: '',
  cvc: '',
  cardNameErr: '',
  cardNbErr: '',
  expDateErr: '',
  cvcErr: '',
  isValid: false
})

