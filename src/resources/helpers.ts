import type { Query, Resp } from "./types";

export const validateRequest = (req: Query): Resp => {
    const { size, text, color } = req.query;
    const [w, h] = size ? size.split(",") : "250, 250".split(",");

    let width: number = +w;
    let height: number = +h;

    if (!width || width === 0 || width > 1800) width = 250;
    if (!height || height === 0 || height > 1800) height = 250;

    const title = !text || text.length >= 30 ? `${width}x${height}` : text
    const hex = color ? `#${color}` : '#E7E5E4'

    return { width, height, title, hex }
}

export const checkBackgroundColorHsp = (color: string): boolean => {
    const hex: number = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    const red = hex >> 16;
    const green = hex >> 8 & 255;
    const blue = hex & 255;

    const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

    if (hsp >= 170) return false;

    return true;
}