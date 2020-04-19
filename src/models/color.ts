export enum GRAY {
  GAINSBORO = '#dcdcdc', // GAINSBORO = 밝은 회색
  LIGHT = '#d3d3d3',
  SILVER = '#c0c0c0',
  DARK = '#a9a9a9',
  GRAY = '#808080',
  DIM = '#696969',
  LIGHT_SLATE = '#778899', // slate = 짙은
  SLATE = '#708090'
}

export enum BLACK {
  BLACK = '#000000',
  LIGHT = '#222222'
}

export enum WHITE {
  WHITE = '#ffffff',
  SNOW = '#fffafa',
  GHOST = '#f8f8ff',
  SMOKE = '#f5f5f5',
  BEIGE = '#f5f5dc',
  IVORY = '#fffff0',
  ANTIQUE = '#faebd7',
  LINEN = '#faf0e6',
  LAVENDER_BLUSH = '#fff0f5',
  MISTY_ROSE = '#ffe4e1',
  NAVAJO = '#ffdead',
  OLD_LACE = '#fdf5e6',
  FLORAL = '#fffaf0',
  SEA_SHALL = '#fff5ee'
}

export enum RED {
  RED = '#ff0000'
}

export enum GREEN {
  MINT_CREAM = '#f5fffa',
  HONEYDEW = '#f0fff0',
  GREEN = '#00ff00'
}

export enum BLUE {
  ALICE = '#f0f8ff',
  AZURE = '#f0ffff',
  BLUR = '#0000ff',
  LIGHT = '#add8e6'
}

export enum GRADIENT {
  RED_TO_YELLOW = 'linear-gradient(90deg, rgba(194,65,119,0.8) 0%, rgba(239,125,96,0.8) 100%)'
}

export type ColorType = GRAY | BLACK | WHITE | RED | GREEN | BLUE | GRADIENT

export const ColorPalette = {
  Gray: GRAY,
  White: WHITE,
  Black: BLACK,
  Red: RED,
  Blue: BLUE,
  Green: GREEN,
  Gradient: GRADIENT
}
