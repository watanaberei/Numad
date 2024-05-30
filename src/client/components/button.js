import { format, parseISO } from "date-fns";
import  *  as element from "../components/elements";




const themes = {
    light: {
        // General theme styles
        primary: '#007bff',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        white: '#ffffff',
        black: '#000000',
        gray500: '#6c757d',
        // Button specific
        buttons: {
            'btn-primary': {
                default: { background: '#007bff', border: '#007bff', color: '#ffffff' },
                inverse: { background: '#ffffff', border: '#007bff', color: '#007bff' },
            },
            // Define other buttons as needed
        }
    },
    // Define more themes (dark, etc.) as needed
};

// Current theme placeholder
let currentTheme = 'light';






function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return; // Exit if theme is not defined

    Object.keys(theme).forEach(key => {
        if (key !== 'buttons') { // Skip buttons for global styles
            const cssVarName = `--${key}`;
            document.documentElement.style.setProperty(cssVarName, theme[key]);
        }
    });

    // Now apply button styles as well
    applyButtonStylesBasedOnTheme(themeName);
}

function applyButtonStylesBasedOnTheme(themeName) {
    const theme = themes[themeName];
    if (!theme || !theme.buttons) return;

    Object.entries(theme.buttons).forEach(([btnClass, variants]) => {
        Object.entries(variants).forEach(([variant, styles]) => {
            // Apply button variant styles
            // This is a placeholder, actual implementation would need to dynamically
            // create styles or classes based on these definitions
            console.log(`Applying ${variant} styles for ${btnClass} in ${themeName} theme:`, styles);
            // Example: --btn-primary-bg: styles.background;
        });
    });
}













// Function to apply button variant styles
function applyButtonVariant(themeName, {
    background,
    border,
    color, // Assuming a function colorContrast exists
    hoverBackground = 'black',
    hoverBorder = 'black',
    hoverColor, // This needs to be calculated based on hoverBackground
    activeBackground = 'primary', // Use actual color value
    activeBorder = 'primary', // Use actual color value
    activeColor, // This needs to be calculated based on activeBackground
    disabledBackground = 'gray-500', // Use actual color value
    disabledBorder = 'gray-500', // Use actual color value
    disabledColor = 'white', // Use actual color value
    btnFocusShadowColor = 'white' // Use actual color value
}) {
    const theme = themes[themeName]; // Assuming 'themes' is a global object containing theme definitions
    theme.btnColor = color || colorContrast(background); // Implement colorContrast
    theme.btnBg = background;
    theme.btnBorderColor = border;
    theme.btnHoverColor = hoverColor || colorContrast(hoverBackground);
    theme.btnHoverBg = hoverBackground;
    theme.btnHoverBorderColor = hoverBorder;
    theme.btnFocusShadowRgb = btnFocusShadowColor;
    theme.btnActiveColor = activeColor || colorContrast(activeBackground);
    theme.btnActiveBg = activeBackground;
    theme.btnActiveBorderColor = activeBorder;
    theme.btnDisabledColor = disabledColor;
    theme.btnDisabledBg = disabledBackground;
    theme.btnDisabledBorderColor = disabledBorder;

    // Apply the updated theme
    applyTheme(themeName);
}

// Function to apply button size
function applyButtonSize(themeName, {
    paddingY,
    paddingX,
    fontSize,
    borderRadius,
    lineHeight = null,
    iconSpacing, // Assuming a default value is set somewhere
    letterSpacing // Assuming a default value is set somewhere
}) {
    const theme = themes[themeName];
    theme.iconSpacing = iconSpacing;
    theme.btnPaddingY = paddingY;
    theme.btnPaddingX = paddingX;
    theme.btnFontSize = fontSize; // Implement responsive font size if needed
    theme.btnLineHeight = lineHeight;
    theme.btnLetterSpacing = letterSpacing;
    theme.btnBorderRadius = borderRadius;

    applyTheme(themeName);
}

// Function to apply button icon styles
// This one is more complex due to needing to manipulate pseudo-elements
// and potentially requiring direct DOM manipulation or CSS-in-JS approaches
function applyButtonIcon(selector, {
    icon,
    width = '1rem', // Assuming spacer value
    height = width,
    size = `${width} ${height}`,
    pseudo = 'before',
    position = '50%'
}) {
    // This functionality would likely require manipulating the stylesheet directly,
    // adding a class with the necessary properties, or using a CSS-in-JS solution.
}

// Utility function to calculate color contrast
function colorContrast(color) {
    // Placeholder for color contrast calculation
    // Return 'black' or 'white' based on contrast
}

// Note: Actual implementation of colorContrast, responsive font sizing (rfs),
// and direct manipulation of pseudo-elements for button icons would require
// additional logic not covered here. This is a conceptual translation.

export const button = {
render: () => {
    return `
    ${element.lineH.render(30)}


            <div class="button">
                <div class="button-anchor">
                    <button class="container">
                        <div class="label-glyph">
                            <div class="text3">
                                <div class="button2">button</div>
                            </div>
                            <div class="glyph">
                                <div class="glyph-temp2"></div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            ${applyTheme('light')}; // To apply the light theme globally


        </div>
        ${element.lineH.render(30)}
    </div>
</section>
    `;

}

}