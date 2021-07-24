// Colors
export const Colors = {};

// Margins
export const Margins = {
    XXL: "var(--margin-xxl)",
    XL: "var(--margin-xl)",
    L: "var(--margin-l)",
    M: "var(--margin-m)",
    S: "var(--margin-s)",
    XS: "var(--margin-xs)",
    XXS: "var(--margin-xxs)",
};

// Fonts
export const FontFamilies = {
    Body: "var(--font-body)",
};

// Font weights
export const FontWeights = {
    Regular: "var(--font-weight-regular)",
    Bold: "var(--font-weight-bold)",
};

// Line height
export const LineHeight = "var(--line-height)";

// Container template
export const Container = {
    Template: "var(--container-template)",
    Column: "var(--container-column)",
    Padding: "var(--container-padding)",
};

// Transitions
export const Transitions = {
    Short: "var(--transition-short)",
    Long: "var(--transition-long)",
};

// Media queries
const DevicesSizes = {
    MobileS: "320px",
    MobileM: "375px",
    MobileL: "425px",
    Tablet: "768px",
    Laptop: "1024px",
    LaptopL: "1440px",
    Desktop: "2560px",
};

export const Breakpoints = {
    MobileS: `(max-width: ${DevicesSizes.MobileS})`,
    MobileM: `(max-width: ${DevicesSizes.MobileM})`,
    MobileL: `(max-width: ${DevicesSizes.MobileL})`,
    Tablet: `(max-width: ${DevicesSizes.Tablet})`,
    Laptop: `(max-width: ${DevicesSizes.Laptop})`,
    LaptopL: `(max-width: ${DevicesSizes.LaptopL})`,
    Desktop: `(max-width: ${DevicesSizes.Desktop})`,
};
