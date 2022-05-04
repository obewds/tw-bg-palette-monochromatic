// ./tests/TwBgPaletteMonochromatic.test.js

import { twBgPaletteMonochromatic } from '../src/index'



test('twBgPaletteMonochromatic component returns a truthy value', async () => {

    expect(twBgPaletteMonochromatic).toBeTruthy()

})



test('twBgPaletteMonochromatic.monochromatic component returns an object with a truthy monochromatic property', async () => {

    expect(twBgPaletteMonochromatic.monochromatic).toBeTruthy()

})



test('twBgPaletteMonochromatic.monochromatic.colors component returns an object with a truthy colors property', async () => {

    expect(twBgPaletteMonochromatic.monochromatic.colors).toBeTruthy()

})



test('twBgPaletteMonochromatic component returns an object with the standard five default color names', async () => {

    expect(twBgPaletteMonochromatic.monochromatic.colors['default']).toBeTruthy()
    expect(twBgPaletteMonochromatic.monochromatic.colors['error']).toBeTruthy()
    expect(twBgPaletteMonochromatic.monochromatic.colors['primary']).toBeTruthy()
    expect(twBgPaletteMonochromatic.monochromatic.colors['secondary']).toBeTruthy()
    expect(twBgPaletteMonochromatic.monochromatic.colors['success']).toBeTruthy()

})
