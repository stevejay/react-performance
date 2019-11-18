import { useTheme as useThemeEmotion } from "emotion-theming";
import { AppTheme } from "app-theme";

const useTheme = () => useThemeEmotion<AppTheme>();

export { useTheme };
