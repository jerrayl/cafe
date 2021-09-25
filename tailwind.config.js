// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundImage: {
            'card': "url('assets/images/card_background.png')",
            'manaorb': "url('assets/images/mana_orb.png')",
            'deck': "url('assets/images/deck.png')",
            'discard': "url('assets/images/discard.png')"
           }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}