import base from './base';
import { IThemes } from './utils';
import dark from './dark';
/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'base';

export const themes: IThemes = {
  base,
  dark,
};