import { useTheme as useThemeEmotion } from "emotion-theming";
import { theme } from "./theme";

const useTheme = () => useThemeEmotion<typeof theme>();

export { useTheme };
