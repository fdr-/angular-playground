export class BaseCollection<T extends {id: string}> extends Map<string, T> {
    lastIndex: number = 0;

    constructor(entries: T[] = []) {
        super(entries.map((e: T) => [e.id, e]));
    }

    create(value: T): this {
        return super.set((++this.lastIndex).toString(), value);
    }

    update(key: string, value: T): this {
        return super.set(key, value);
    }

    get(key: string): T | undefined {
        return super.get(key);
    }

    has(key: string): boolean {
        return super.has(key);
    }

    delete(key: string): boolean {
        return super.delete(key);
    }
}
