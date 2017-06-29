import { EventEmitter } from 'events';

export type ID = number | string;
export type Document = {
    _id: ID,
    _rev?: string,
    [key: string]: any
}

export type FilterParams = {
    filter?: string | ((doc: any, req: any) => boolean),
    onChange?: Function,
    [key: string]: any
}

export interface DBConnectorInterface {
    use(name: string): DBInterface;
}

export interface DBInterface {
    get(id: ID, params?: any): Promise<Document>;
    getOrNull(id: ID, params?: any): Promise<Document | null>;
    put(doc: Document): Promise<Document>;
    remove(id: ID, rev: string): Promise<any>;
    view(design: string, view: string, params: any): Promise<any>
    follow(params: FilterParams): EventEmitter;
}
