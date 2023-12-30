export type DataProp= {img: string, header: string, caption: string};

export type ProjectData = DataProp & {price_1: number, price_2: number}

export type ProjectProp<T extends ProjectData> = {
    data: T
} 