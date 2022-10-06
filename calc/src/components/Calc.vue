<template>
    <div>
        <div>
            <input type="number" name="operand1" placeholder="op1" v-model.number="operand1" />
            <input type="number" name="operand2" placeholder="op2" v-model.number="operand2" />
            = {{ result }}
        </div>

        <div class="error" v-if="error">Ошибка: {{ error }}</div>

        <div class="buttons"></div>
        <button class="keyboard-btn" v-for="btn in buttons" :key="btn" :name="btn" @click="calculate(btn)">
            {{ btn }}
        </button>
        <div class="keybord-show">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">Отобразить экранную клавиатуру</label>
        </div>

        <div class="keyboard" v-if="checked">
            <button class="keyboard-btn" v-for="btn in collections" :key="btn.id" :name=btn.name
                @click="addSymbol(btn.id)">
                {{ btn.id }}
            </button>
            <button class="keyboard-btn" id="removeBtn" @click="removeSymbol">&#8592;</button>

            <div class="selectField">
                <input type="radio" id="one" name="radioBtn1" value="operand1" v-model="selectedField" />
                <label for="one">Операнд 1</label>

                <input type="radio" id="two" name="radioBtn2" value="operand2" v-model="selectedField" />
                <label for="two">Операнд 2</label>
                <span> Выбрано: {{ selectedField }} </span>
            </div>
        </div>

        <div class="logs">{{ logs }}</div>
    </div>
</template>
  
<script>
export default {
    name: "Calc",
    data: () => ({
        operand1: 0,
        operand2: 0,
        result: 0,
        error: "",
        selectedField: "operand1",
        buttons: ["+", "-", "*", "/", "^"],
        collections: [
            { id: "0", name: "btn0" },
            { id: "1", name: "btn1" },
            { id: "2", name: "btn2" },
            { id: "3", name: "btn3" },
            { id: "4", name: "btn4" },
            { id: "5", name: "btn5" },
            { id: "6", name: "btn6" },
            { id: "7", name: "btn7" },
            { id: "8", name: "btn8" },
            { id: "9", name: "btn9" }
        ],
        checked: false,
        logs: {},
    }),
    methods: {
        calculate(operation = "+") {
            this.error = "";
            switch (operation) {
                case "+":
                    this.add();
                    break;
                case "-":
                    this.substract();
                    break;
                case "*":
                    this.mult();
                    break;
                case "/":
                    this.div();
                    break;
                case "^":
                    this.pow();
                    break;
            }
            const key = Date.now();
            const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
            this.$set(this.logs, key, value);
        },
        add() {
            this.result = this.operand1 + this.operand2;
        },
        substract() {
            this.result = this.operand1 - this.operand2;
        },
        div() {
            const { operand1, operand2 } = this;
            if (operand2 === 0) {
                this.error = "На 0 делить нельзя!!!";
            } else {
                this.result = operand1 / operand2;
            }
        },
        mult() {
            this.result = this.operand1 * this.operand2;
        },
        pow() {
            this.result = Math.pow(this.operand1, this.operand2);
        },
        addSymbol(s) {
            if (this[this.selectedField] === 0) {
                this[this.selectedField] = +s;
            } else {
                this[this.selectedField] = parseInt(this[this.selectedField] + s);
            }
        },
        removeSymbol() {
            if (this[this.selectedField] < 10) {
                this[this.selectedField] = 0;
            } else {
                this[this.selectedField] = parseInt(
                    ("" + this[this.selectedField]).slice(0, -1)
                );
            }
        },
    },
};
</script>
  
<style lang="scss" scoped>
.error {
    color: red;
}

.buttons {
    padding: 5px 0;
}

.keybord-show {
    padding: 10px 0;
}

.keyboard {
    padding: 10px 0;
}

.keyboard-btn {
    margin: 0 5px;
}

.selectField {
    padding: 10px 0;
}
</style>