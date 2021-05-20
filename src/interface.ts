// To add a new configuration option:
// 1. Edit package.json
// 2. Add the configuration option in this interface
// 3. utils.getConfiguration()
// 4. utils.isDefaultConfiguration()
// 5. generateThemes.ts
export interface Configuration {
  darkContrast?: string;
  lightContrast?: string;
  darkWorkbench?: string;
  lightWorkbench?: string;
  darkSelection?: string;
  lightSelection?: string;
  darkCursor?: string;
  lightCursor?: string;
  italicKeywords?: boolean;
  italicComments?: boolean;
  diagnosticTextBackgroundOpacity?: string;
}

export interface Palette {
  bg0: string;
  bg1: string;
  bg: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  grey0: string;
  grey1: string;
  grey2: string;
  fg: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  aqua: string;
  blue: string;
  purple: string;
  dimRed: string;
  dimOrange: string;
  dimYellow: string;
  dimGreen: string;
  dimAqua: string;
  dimBlue: string;
  dimPurple: string;
  shadow: string;
  badge: string;
}
