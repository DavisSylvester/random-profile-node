export interface IRepository<T> {
    save(data: T): Promise<T | null>;
    find(id: number | string | null): Promise<T | T[] | null>;
    get(id: number | string | null): Promise<T | T[] | null>;
    getById(id: string | number): Promise<T | null>;
}
//# sourceMappingURL=IRepository.d.mts.map