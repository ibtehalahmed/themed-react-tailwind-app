import { IThemeColors, IThemeVariables } from "./config";


const staticColors = {
    // define any static colors that will have the same value for all apps
  };
  
  const configurableColors: IThemeColors = {
    "accent-1": withOpacity("--color-accent-1"),
  };
  
  function withOpacity(variableName: keyof IThemeVariables): string {
    return `rgba(var(${variableName}), <alpha-value>)`;
  }
  
  const colors = { ...staticColors, ...configurableColors };
  export default colors;