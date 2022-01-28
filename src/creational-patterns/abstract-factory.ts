interface AbstractProduct {
    name: string;
}

interface AbstractFactory {
    createProduct(): AbstractProduct;
}

class Product implements AbstractProduct {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Factory implements AbstractFactory {
    createProduct() {
        return new Product("product");
    }
}
