import { useTheme as useThemeEmotion } from "emotion-theming";
import { DefaultTheme } from "app-theme";

const useTheme = () => useThemeEmotion<DefaultTheme>();

export { useTheme };
