import express from "express";
import svg from "./resources/svg";

import type { Request, Response, NextFunction, Express } from "express"
import type { Query } from "./resources/types";

const PORT: string = process.env.PORT || '5000';

const api: Express = express();

api.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');

    next();
});

api.get("/", (req: Query, res: Response): Response<string, Record<string, string>> =>
    res.setHeader('content-type', 'image/svg+xml').status(200).send(svg(req)));

api.listen(PORT, (): void => console.log(`Running on port: http://localhost:${PORT}`));

export default api;

