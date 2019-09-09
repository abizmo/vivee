const ratio = 3;

const sizes = {
  // rectificar: copiados de otro sitio
  base: 16 / ratio,
  font: 45 / ratio,
  radius: 6 / ratio,
  padding: 25 / ratio,
  margin: 27 / ratio
};

const fonts = {
  h1: {
    fontSize: sizes.font * 1.333,
    lineHeight: sizes.font * 2
  },
  h2: {
    fontSize: sizes.font * 1.178,
    lineHeight: sizes.font * 1.778
  },
  header: {
    fontSize: sizes.font * 1.089,
    lineHeight: sizes.font * 1.622
  },
  body: {
    fontSize: sizes.font,
    lineHeight: sizes.font * 1.511
  },
  caption: {
    fontSize: sizes.font * 0.933,
    lineHeight: sizes.font * 1.4
  },
  label: {
    fontSize: sizes.font * 0.889,
    lineHeight: sizes.font * 1.333
  },
  small: {
    fontSize: sizes.font * 0.8,
    lineHeight: sizes.font * 1.222
  },
  smaller: {
    fontSize: sizes.font * 0.667,
    lineHeight: sizes.font * 1.022
  }
};

const colors = {
  primary: "#53714B",
  lighter: "#85B276",
  grey: "#B8B6B6",
  greylight: "#ECECEC",
  accent: "#F6830A",
  white: "#FFFFFF",
  black: "#34302D",
  blue: "#3B5998"
};

export { colors, sizes, fonts };
