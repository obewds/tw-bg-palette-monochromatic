// ./tests/TwBgPaletteMonochromatic.test.js

import { mount } from '@vue/test-utils'
import TwBgPaletteMonochromatic from '../src/components/TwBgPaletteMonochromatic.vue'



test('TwBgPaletteMonochromatic.vue component mounts successfully', async () => {

    expect(TwBgPaletteMonochromatic).toBeTruthy()

})



test('TwBgPaletteMonochromatic.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(TwBgPaletteMonochromatic, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('TwBgPaletteMonochromatic.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(TwBgPaletteMonochromatic, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
