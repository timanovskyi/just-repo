export type Events = {
    [key: string]: Callback[];
}

export type Callback = () => void