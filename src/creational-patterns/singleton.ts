class Singleton {
    private static _instance: Singleton;

    // constructor should be private so new instance could not be initialized
    private constructor() {}

    // return the single instance of the singleton or create one if not yet initilized
    public static get instance() {
        if (!this._instance) {
            this._instance = new Singleton();
        }

        return this._instance;
    }
}

console.log(Singleton.instance);
