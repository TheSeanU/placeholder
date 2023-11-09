"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBackgroundColorHsp = exports.validateRequest = void 0;
const validateRequest = (req) => {
    const { size, text, color } = req.query;
    const [w, h] = size ? size.split(",") : "250, 250".split(",");
    let width = +w;
    let height = +h;
    if (!width || width === 0 || width > 1800)
        width = 250;
    if (!height || height === 0 || height > 1800)
        height = 250;
    const title = !text || text.length >= 30 ? `${width}x${height}` : text;
    const hex = color ? `#${color}` : '#E7E5E4';
    return { width, height, title, hex };
};
exports.validateRequest = validateRequest;
const checkBackgroundColorHsp = (color) => {
    const hex = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    const red = hex >> 16;
    const green = hex >> 8 & 255;
    const blue = hex & 255;
    const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));
    if (hsp >= 170)
        return false;
    return true;
};
exports.checkBackgroundColorHsp = checkBackgroundColorHsp;
//# sourceMappingURL=helpers.js.map