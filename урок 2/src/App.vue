<template>
  <div>
    <div class="screen">
      <input type="number" v-model.number="operand1" />
      {{ operator }}
      <input type="number" v-model.number="operand2" />
      =
      {{ result }}

      <div v-if='error' class="error">{{ error }}</div>


    </div>

    <div class="keyboard">
      <button v-for="(item, index) in operators" v-bind:key="index" @click="setOperator(item)">{{ item }}</button>




    </div>

    <hr />
    <input type="checkbox" id="checkbox" @click="checked = !checked" v-model="checked" />
    <label for="checkbox">Цифровая Клавиатура</label>
    <div v-if="checked">
      <keyboard @addNum="addNumber" @delNum="delNumber" />
    </div>

    <div class="results">
      <div class="logs">Последние вычисления: <br />{{ logs }}</div>
      <div class="result">
        <div v-if="result > 0">Результат положительный</div>
        <div v-else-if="result < 0">Результат отрицательный</div>
        <div v-else>Результат = 0</div>
      </div>
      <div class="numbers" v-for="(item, idx) in numbersComp" :key="idx">
        {{ item }}
      </div>

      <Second v-bind:username="author"></Second>
      <ul>
        <li v-for="[time, msg] in Object.entries(log)" :key="time">{{time}}: {{msg}}</li>
      </ul>


    </div>
  </div>
</template>

<script>
// import Second from './components/Second.vue'
import keyboard from "./components/keyboard.vue";



export default {
  name: 'App',
  components: { keyboard },
  // components: {
  //   Second
  // },
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operator: '+',
      error: '',

      operators: ['+', '-', '*', '/', '**', '%'],
      // author: 'Admin',
      numbers: [0, 1, 2, 3, 5, 6, 7, 8, 9],
      log: {},
      checked: false


    }
  },
  computed: {
    result() {
      this.error = '';
      //this.log.[new Date().toTimeString()] = `${this.operand1} ${operator} ${this.operand2}`;
      // this.$set(this.log, new Date().toTimeString(), `${this.operand1} ${operator} ${this.operand1}`);
      switch (this.operator) {
        case '+':
          return this.operand1 + this.operand2
          break;
        case '-':
          return this.operand1 - this.operand2
          break;
        case '*':
          return this.operand1 * this.operand2
          break;
        case '/':
          if (this.operand2 == 0) {
            this.error = 'на ноль делить нельзя'
            return 'err'
          } else {
            return this.operand1 / this.operand2
            break;
          }

        case '**':
          return Math.pow(this.operand1, this.operand2)
          break;
        case '%':
          return this.operand1 % this.operand2
          break;
        default:
          return 'Err'
          break;
      }
    }
  },
  watch: {
    operand1(newValue) {
      this.result = this.operand2 + newValue;
    },
    operand2(newValue) {
      this.result = this.operand1 + newValue;
    },
  },
  methods: {
    setOperator(operator) {
      this.operator = operator
    },
    getResult(operator) {

    }
  }
}
</script>

<style lang="scss">

</style>
