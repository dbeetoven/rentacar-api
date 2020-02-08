export interface AbstractService<I,T>{
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    findOne(options: object): Promise<T | null>;
    create(i: I): Promise<T>;
    update(id: number, i: I): Promise<T | null>;
    delete(id: number): Promise<T>;
}