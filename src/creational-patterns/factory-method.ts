abstract class AbstractFactoryMethod {
    public abstract createFactoryMethod(): string;

    render() {
        const factory = this.createFactoryMethod();
        console.log(`${factory} factory has been created.`);
    }
}

class FactoryMethod extends AbstractFactoryMethod {
    public createFactoryMethod(): string {
        return "factory-1";
    }
}
