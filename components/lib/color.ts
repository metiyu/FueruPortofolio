// lib/colors.ts

// Base Colors
export const BACKGROUND_DARK = "#111111";
export const BACKGROUND_LIGHT = "#ffffff";

// Primary Colors
export const PRIMARY_DARK = "#ffffff";
export const PRIMARY_DARK_FOREGROUND = "hsl(var(--primary-foreground))";

export const PRIMARY_LIGHT = "#111111";
export const PRIMARY_LIGHT_FOREGROUND = "hsl(var(--primary-foreground))";

// Secondary Colors
export const SECONDARY_DARK = "#bdbdbd";
export const SECONDARY_DARK_FOREGROUND = "hsl(var(--secondary-foreground))";

export const SECONDARY_LIGHT = "#767676";
export const SECONDARY_LIGHT_FOREGROUND = "hsl(var(--secondary-foreground))";

// Accent Color
export const ACCENT = "#fab54e";
export const ACCENT_FOREGROUND = "hsl(var(--accent-foreground))";

// Grouped helpers
export const primary = {
    dark: PRIMARY_DARK,
    light: PRIMARY_LIGHT,
    foreground: PRIMARY_DARK_FOREGROUND,
};

export const secondary = {
    dark: SECONDARY_DARK,
    light: SECONDARY_LIGHT,
    foreground: SECONDARY_DARK_FOREGROUND,
};

export const accent = {
    default: ACCENT,
    foreground: ACCENT_FOREGROUND,
};

// Utility to get current theme color (example)
export function getPrimaryColor(isDarkMode: boolean): string {
    return isDarkMode ? PRIMARY_DARK : PRIMARY_LIGHT;
}

export function getSecondaryColor(isDarkMode: boolean): string {
    return isDarkMode ? SECONDARY_DARK : SECONDARY_LIGHT;
}