import themes from "@/helpers/themes";

export const switchTheme = (theme) => {
  const currentTheme = themes[theme];
  const CSSVariables = Object.keys(currentTheme);
  const applyCSStoDocument = (variable) =>
    document.documentElement.style.setProperty(
      `--${variable}`,
      currentTheme[variable]
    );

  CSSVariables.forEach(applyCSStoDocument);
};
