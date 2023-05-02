import { checkBackgroundColorHsp, validateRequest } from "./helpers";
import type { Query, Resp } from "./types";

export default (req: Query): string => {
    const { width, height, title, hex }: Resp = validateRequest(req)

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}" height="${height}">
        <rect x="0" y="0" width="${width}" height="${height}" fill="${hex}" />
        <text x="50%" y="50%" dominant-baseline="middle" fill="${checkBackgroundColorHsp(hex) ? '#ffffff' : '#000000'}" text-anchor="middle">${title}</text>    
    </svg>`;
}