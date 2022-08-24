module.exports = {
  mode:'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
        roboto: ['"Roboto"'],
        inter: ['"Inter"'],
      },
      colors: {
        'orangeff9':'#FF9900',
        'orangeff8':'#F85A47',
        'gray31':'#31353B',
        'gray33':'#333333',
        'grayda':'#DADADA',
        'grayOp':'rgba(0, 0, 0, 0.4)',
      },
      gridTemplateColumns:{
        "work":"1fr auto 1fr auto 1fr"
      }
    },
  },
  plugins: [],
}
