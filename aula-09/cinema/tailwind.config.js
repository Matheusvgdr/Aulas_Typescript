/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spider-man': "url('./assets/img/bg-main.png')",
        'new1': "url('./assets/img/new1.png')",
        'new2': "url('./assets/img/new2.png')",
        'new3': "url('./assets/img/new3.png')",
        'new4': "url('./assets/img/new4.png')",
        'new5': "url('./assets/img/new5.png')",
        'bg-second-page': "url('./assets/img/starwars.png')",
        'bg-sobre': "url('./assets/img/bg-3.png')",
        'bg-espaco': "url('./assets/img/bg-space.png')",
        'bg-terror': "url('./assets/img/bg-terror.png')",
        'sp1': "url('./assets/img/sp1.png')",
        'sp2': "url('./assets/img/sp2.png')",
        'sp3': "url('./assets/img/sp3.png')",
        'sp4': "url('./assets/img/sp4.png')",
        'sp5': "url('./assets/img/sp5.png')",
        'terr1': "url('./assets/img/terr1.png')",
        'terr2': "url('./assets/img/terr2.png')",
        'terr3': "url('./assets/img/terr3.png')",
        'terr4': "url('./assets/img/terr4.png')",
        'terr5': "url('./assets/img/terr5.png')"
      }
    },

    fontFamily: {
      'gilroy': ['Gilroy-Bold', 'Gilroy-Medium', 'Gilroy-Regular', 'Gilroy-Light'],
    }
  },

  plugins: [],
}
