export interface Query {
    query: {
        size: string;
        text: string;
        color: string;
    }
}

export interface Resp {
    width: number;
    height: number;
    title: string;
    hex: string;
}