import { EventEmitter } from 'events';

export type ID = string;
export interface Document {
    _id: ID
    _rev?: string
    [key: string]: any
}

export interface FilterParams {
    filter?: string | ((doc: any, req: any) => boolean)
    onChange?: (...params: any[]) => void
    [key: string]: any
}

export interface DBConnectorInterface {
    use(name: string): DBInterface;
}

export interface DBInterface {
    get(id: ID, params?: any): Promise<Document>
    getOrNull(id: ID, params?: any): Promise<Document | null>
    list(params?: any): Promise<any>
    put(doc: Document): Promise<any>
    remove(id: ID, rev: string): Promise<any>
    view(design: string, view: string, params: any): Promise<any>
    follow(params: FilterParams): EventEmitter
}
