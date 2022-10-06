import { shallowMount } from '@vue/test-utils'
import Calc from '../components/Calc.vue'

const factory = (values = {}) => {
    return shallowMount(Calc, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe("Calculator tests", () => {
    it('Test operand1 input value', () => {
        const wrapper = factory();
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('1');

        expect(wrapper.vm.operand1).toBe(1);
    })

    it('Test operand2 input value', () => {
        const wrapper = factory();
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2');
        expect(wrapper.vm.operand2).toBe(2);
    })

    it('Test method sum', () => {
        const wrapper = factory();

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('1');

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2');

        const methodSum = wrapper.find('button[name="+"]');
        methodSum.trigger('click');

        expect(wrapper.vm.result).toBe(3);
    })

    it('Test method sub', () => {
        const wrapper = factory();

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('1');

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2');

        const methodSum = wrapper.find('button[name="-"]');
        methodSum.trigger('click');

        expect(wrapper.vm.result).toBe(-1);
    })

    it('Test method mul', () => {
        const wrapper = factory();

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('3');

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2');

        const methodSum = wrapper.find('button[name="*"]');
        methodSum.trigger('click');

        expect(wrapper.vm.result).toBe(6);
    })

    it('Test method div', () => {
        const wrapper = factory();

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('3');

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2');

        const methodSum = wrapper.find('button[name="/"]');
        methodSum.trigger('click');

        expect(wrapper.vm.result).toBe(1.5);
    })

    it('Test method pow', () => {
        const wrapper = factory();

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('3');

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2');

        const methodSum = wrapper.find('button[name="^"]');
        methodSum.trigger('click');

        expect(wrapper.vm.result).toBe(9);
    })

    it('Test operand1 add symbol', () => {
        const wrapper = factory({ checked: true, selectedField: "operand1" });

        const btn = wrapper.find('button[name="btn3"]');
        btn.trigger('click');

        const btn2 = wrapper.find('button[name="btn4"]');
        btn2.trigger('click');

        expect(wrapper.vm.operand1).toBe(34);
    })

    it('Test operand2 add symbol', () => {
        const wrapper = factory({ checked: true, selectedField: "operand2" });

        const btn = wrapper.find('button[name="btn1"]');
        btn.trigger('click');

        const btn2 = wrapper.find('button[name="btn4"]');
        btn2.trigger('click');

        expect(wrapper.vm.operand2).toBe(14);
    })

    it('Test operand1 delete symbol', () => {
        const wrapper = factory({ checked: true, operand1: 123, selectedField: "operand1" });

        const btn = wrapper.find('#removeBtn');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe(12);
    })

    it('Test operand2 delete symbol', () => {
        const wrapper = factory({ checked: true, operand2: 123, selectedField: "operand2" });

        const btn = wrapper.find('#removeBtn');
        btn.trigger('click');

        expect(wrapper.vm.operand2).toBe(12);
    })

    it('Test radio btn2 checked', () => {
        const wrapper = factory({ checked: true });

        const radio = wrapper.find('input[name=radioBtn2]');
        radio.setChecked();

        expect(wrapper.vm.selectedField).toBe("operand2");
    })

    it('Test show keyboard = true', () => {
        const wrapper = factory({ checked: true });

        expect(wrapper.find('.keyboard').exists()).toBe(true);
    })

    it('Test show keyboard = false', () => {
        const wrapper = factory({ checked: false });

        expect(wrapper.find('.keyboard').exists()).toBe(false);
    })

})