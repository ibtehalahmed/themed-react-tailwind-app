import React, { createContext, useState, ReactNode, FC } from 'react';

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  // Add more theme-related settings as needed
}

interface ConfigContextProps {
  colorPalette: string;
  buttonShape: string;
  theme: ThemeSettings;
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
  setColorPalette: () => {},
  setButtonShape: () => {},
  setTheme: () => {},

};

export const ConfigContext = createContext<ConfigContextProps>(defaultContext);

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [colorPalette, setColorPalette] = useState('blue');
  const [buttonShape, setButtonShape] = useState('rounded');
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  return (
    <ConfigContext.Provider value={{theme, setTheme, colorPalette, buttonShape, setColorPalette, setButtonShape }}>
      {children}
    </ConfigContext.Provider>
  );
};
