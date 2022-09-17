export default (await import('vue')).defineComponent({
    name: 'App',
    components: {
        Second,
        Second
    },
    data() {
        return {
            operand1: 0,
            operand2: 0,
            error: '',
            result: 0,
            operators: ['+', '-', '*', '/', '**', '%'],
            author: 'Admin'
        };
    },
    methods: {
        getResult(operator) {
            this.error = '';
            switch (operator) {
                case '+':
                    this.result = this.operand1 + this.operand2;
                    break;
                case '-':
                    this.result = this.operand1 - this.operand2;
                    break;
                case '*':
                    this.result = this.operand1 * this.operand2;
                    break;
                case '/':
                    if (this.operand2 == 0) {
                        this.error = 'на ноль делить нельзя';
                    } else {
                        this.result = this.operand1 / this.operand2;
                        break;
                    }
                    this.result = this.operand1 / this.operand2;
                    break;
                case '**':
                    this.result = Math.pow(this.operand1, this.operand2);
                    break;
                case '%':
                    this.result = this.operand1 % this.operand2;
                    break;
                default:
                    this.result = 'Err';
                    break;
            }
        }
    }
});
function __VLS_template() {
    // @ts-ignore
    [operand1, operator, operand2, result, error, operators, getResult, author];
    return {};
}
