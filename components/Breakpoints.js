const DevicesSizes = {
    MobileS: "320px",
    MobileM: "375px",
    MobileL: "425px",
    Tablet: "768px",
    Laptop: "1024px",
    LaptopL: "1440px",
    Desktop: "2560px",
};

const Breakpoints = {
    MobileS: `(max-width: ${DevicesSizes.MobileS})`,
    MobileM: `(max-width: ${DevicesSizes.MobileM})`,
    MobileL: `(max-width: ${DevicesSizes.MobileL})`,
    Tablet: `(max-width: ${DevicesSizes.Tablet})`,
    Laptop: `(max-width: ${DevicesSizes.Laptop})`,
    LaptopL: `(max-width: ${DevicesSizes.LaptopL})`,
    Desktop: `(max-width: ${DevicesSizes.Desktop})`,
};

export default Breakpoints;
