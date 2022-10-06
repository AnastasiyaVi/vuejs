import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent'

describe('TestComponent', () => {
    test("Test Content Component", () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello from test'
            }
        });
        expect(wrapper.text()).toEqual('The message is: Hello from test');
    })

    test("Test Content Component toContain", () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello from test'
            }
        });
        expect(wrapper.text()).toContain('Hello from test');
    })
}) 