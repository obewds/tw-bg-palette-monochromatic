// ./docs/.vitepress/config.js

module.exports = {
    base: '/tw-bg-palette-monochromatic/',
    title: '@obewds/tw-bg-palette-monochromatic',
    description: 'A documentation site for the TwBgPaletteMonochromatic component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/tw-bg-palette-monochromatic" },
            { text: "GitHub", link: "https://github.com/obewds/tw-bg-palette-monochromatic" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
