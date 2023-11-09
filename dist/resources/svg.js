"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
exports.default = (req) => {
    const { width, height, title, hex } = (0, helpers_1.validateRequest)(req);
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}" height="${height}">
        <rect x="0" y="0" width="${width}" height="${height}" fill="${hex}" />
            <svg x="45%" y="45%" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_16_509)">
                    <path d="M41.4815 10.6667H22.5185C15.9729 10.6667 10.6666 15.973 10.6666 22.5186V41.4816C10.6666 48.0272 15.9729 53.3334 22.5185 53.3334H41.4815C48.027 53.3334 53.3333 48.0272 53.3333 41.4816V22.5186C53.3333 15.973 48.027 10.6667 41.4815 10.6667Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32.0481 38.6188L42.2801 28.2534C42.7762 27.7509 43.3672 27.3519 44.0187 27.0796C44.6702 26.8072 45.3694 26.667 46.0755 26.667C46.7817 26.667 47.4808 26.8072 48.1323 27.0796C48.7839 27.3519 49.3748 27.7509 49.8709 28.2534L53.3333 31.7604" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.8667 46.6468L22.1334 36.2467C22.6288 35.7462 23.2185 35.3488 23.8685 35.0776C24.5185 34.8064 25.2158 34.6667 25.92 34.6667C26.6243 34.6667 27.3216 34.8064 27.9716 35.0776C28.6215 35.3488 29.2113 35.7462 29.7067 36.2467L45.7867 52.5401" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_16_509">
                    <rect width="64" height="64" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
    </svg>`;
};
//# sourceMappingURL=svg.js.map