interface Array<T> {
    _reverse(): T[]
    _forEach(callbackfn: (value: T, index: number) => void): void
    _map<U>(callbackfn: (value: T, index: number) => U): U[]
    _includes(searchElement: T, fromIndex?: number): boolean
    _filter<S extends T>(predicate: (value: T, index: number) => value is S): S[]
    _some(predicate: (value: T, index: number) => unknown): boolean
    _every(predicate: (value: T, index: number) => unknown): boolean
    _find<S extends T>(predicate: (value: T, index: number) => unknown): S | undefined
    _findIndex(predicate: (value: T, index: number) => unknown): number
    _slice(start?: number, end?: number): T[]
    _join(separator?: string): string
    _at(index: number): T | undefined
    _concat(...items: (T | ConcatArray<T>)[]): T[]
    _reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U
    _flat(depth?: number): unknown[]
    _sort(compareFn?: (a: T, b: T) => number): T

    // Iterator functions
    _keys(): IterableIterator<number>
    _values(): IterableIterator<T>
    _entries(): IterableIterator<[number, T]>
}
