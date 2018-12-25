import Typography from 'typography'

const options = {
  bodyFontFamily: ['Montserrat', 'Verdana', 'Arial'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  overrideStyles: () => ({
    h1: {
      margin: '1rem 0 2rem 0'
    }
  })
}

const typography = new Typography(options)

export default typography