<template>
  <div>
    <div class="screen">
      <input type="number" v-model="operand1" />
      {{ operator }}
      <input type="number" v-model="operand2" />
      =
      {{ result }}
    </div>
    <div class="keyboard">
      <button @click="operator = '+'">+</button>
      <button @click="operator = '-'">-</button>
      <button @click="operator = '*'">*</button>
      <button @click="operator = '/'">/</button>
      <button @click="operator = '**'">Степень</button>
      <button @click="operator = '%'">Цел.дел.</button>
      <button @click="getResult">=</button>
    </div>


  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operator: '+',
      result: 0
    }
  },
  methods: {
    getResult() {
      switch (this.operator) {
        case '+':
          this.result = Number(this.operand1) + Number(this.operand2)
          break;
        case '-':
          this.result = this.operand1 - this.operand2
          break;
        case '*':
          this.result = this.operand1 * this.operand2
          break;
        case '/':
          this.result = this.operand1 / this.operand2
          break;
        case '**':
          this.result = Math.pow(this.operand1, this.operand2)
          break;
        case '%':
          this.result = this.operand1 % this.operand2
          break;
        default:
          this.result = 'Err'
          break;
      }
    }
  }
}
</script>

<style lang="scss">

</style>
