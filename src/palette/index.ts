import { Configuration, Palette } from "../interface";
import { default as darkForeground } from "./dark/foreground";
import { default as darkBackgroundHard } from "./dark/background/hard";
import { default as darkBackgroundMedium } from "./dark/background/medium";
import { default as darkBackgroundSoft } from "./dark/background/soft";
import { default as lightForeground } from "./light/foreground";
import { default as lightBackgroundHard } from "./light/background/hard";
import { default as lightBackgroundMedium } from "./light/background/medium";
import { default as lightBackgroundSoft } from "./light/background/soft";

export function getPalette(
  configuration: Configuration,
  variant: string
): Palette {
  let paletteBackground = darkBackgroundMedium;
  let paletteForeground = darkForeground;
  if (variant === "dark") {
    paletteForeground = darkForeground;
    switch (
      configuration.darkContrast // {{{
    ) {
      case "hard": {
        paletteBackground = darkBackgroundHard;
        break;
      }
      case "medium": {
        paletteBackground = darkBackgroundMedium;
        break;
      }
      case "soft": {
        paletteBackground = darkBackgroundSoft;
        break;
      }
      default: {
        paletteBackground = darkBackgroundMedium;
      }
    } // }}}
  } else {
    paletteForeground = lightForeground;
    switch (
      configuration.lightContrast // {{{
    ) {
      case "hard": {
        paletteBackground = lightBackgroundHard;
        break;
      }
      case "medium": {
        paletteBackground = lightBackgroundMedium;
        break;
      }
      case "soft": {
        paletteBackground = lightBackgroundSoft;
        break;
      }
      default: {
        paletteBackground = lightBackgroundMedium;
      }
    } // }}}
  }
  return {
    // {{{
    bg0: paletteBackground.bg0,
    bg1: paletteBackground.bg1,
    bg: paletteBackground.bg,
    bg2: paletteBackground.bg2,
    bg3: paletteBackground.bg3,
    bg4: paletteBackground.bg4,
    bg5: paletteBackground.bg5,
    grey0: paletteBackground.grey0,
    grey1: paletteBackground.grey1,
    grey2: paletteBackground.grey2,
    shadow: paletteBackground.shadow,
    fg: paletteForeground.fg,
    red: paletteForeground.red,
    orange: paletteForeground.orange,
    yellow: paletteForeground.yellow,
    green: paletteForeground.green,
    aqua: paletteForeground.aqua,
    blue: paletteForeground.blue,
    purple: paletteForeground.purple,
    dimRed: paletteForeground.dimRed,
    dimOrange: paletteForeground.dimOrange,
    dimYellow: paletteForeground.dimYellow,
    dimGreen: paletteForeground.dimGreen,
    dimAqua: paletteForeground.dimAqua,
    dimBlue: paletteForeground.dimBlue,
    dimPurple: paletteForeground.dimPurple,
    badge: paletteForeground.badge,
  }; // }}}
}

// vim: fdm=marker fmr={{{,}}}:
