type BuilderMethods<T> = {
    [K in keyof T]: (arg: T[K]) => GenericBuilder<T>;
};

interface Builder<T> {
    build(): T;
}

class GenericBuilder<T> implements Builder<T> {
    private obj: Partial<T> = {};

    constructor(private tConstructor: new () => T) {}

    build(): T {
        return { ...this.obj } as T;
    }

    get set() {
        const self = this;
        const setters: Partial<BuilderMethods<T>> = {};

        for (const key in self.obj) {
            setters[key] = (value: any) => {
                self.obj[key as keyof T] = value;
                return self;
            }
        }

        return setters as BuilderMethods<T>;
    }
}