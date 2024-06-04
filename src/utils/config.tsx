import React, { createContext, useState, ReactNode, FC, useEffect, useMemo } from 'react';
import applyTheme from "./applyTheme";
// Defines the color channels. Passed to the context from each app.
// i.e. {"rgb-accent-1": "252 66 201"}
export interface IThemeRGB {
  "rgb-accent-1"?: string;
}
export const tailwindColorTheme: IThemeRGB = {
  "rgb-accent-1": "237, 137, 54", // ld-orange
};
// Name of the CSS variables used in tailwind.config.ts
export interface IThemeVariables {
  "--color-accent-1": string;
}

// Name of the defined colors in the Tailwind theme
export interface IThemeColors {
  "accent-1"?: string;
}
interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  // Add more theme-related settings as needed
}

interface ConfigContextProps {
  colorPalette: string;
  buttonShape: string;
  theme: ThemeSettings;
  themeRGB: IThemeRGB;
  setColorPalette: (color: string) => void;
  setButtonShape: (shape: string) => void;
  setTheme: (theme: ThemeSettings) => void;

}
const defaultTheme: ThemeSettings = {
  primaryColor: 'blue',
  secondaryColor: 'gray',
  // Define default values for other theme-related settings
};
const defaultContext: ConfigContextProps = {
  colorPalette: 'blue',
  buttonShape: 'rounded',
  theme: defaultTheme,
  themeRGB: {} as IThemeRGB,
  setColorPalette: () => {},
  setButtonShape: () => {},
  setTheme: () => {},

};


export const ConfigContext = createContext<ConfigContextProps>(defaultContext);

interface ConfigProviderProps {
  children: ReactNode;
  themeRGB?: IThemeRGB;
}

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }, { themeRGB }) => {
  const [colorPalette, setColorPalette] = useState('blue');
  const [buttonShape, setButtonShape] = useState('rounded');
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  useEffect(() => {
    applyTheme(themeRGB);
  }, []);

  const value = useMemo(() => {
    return { themeRGB: themeRGB };
  }, [themeRGB]);

  return (
    <ConfigContext.Provider value={{theme, setTheme, colorPalette, buttonShape, setColorPalette, setButtonShape, themeRGB }}>
      {children}
    </ConfigContext.Provider>
  );
};
