interface BuilderProduct {
    featureA: string;
    featureB?: string;
    featureC?: string;
}

class Builder {
    private _product: BuilderProduct;

    constructor() {
        this._product = { featureA: "a" };
    }

    createFeatureB() {
        this._product.featureB = "b";
    }

    createFeatureC() {
        this._product.featureC = "c";
    }

    get product() {
        return this._product;
    }
}

class Director {
    private _builder: Builder;

    constructor(builder: Builder) {
        this._builder = builder;
    }

    createMainProduct() {
        this._builder.createFeatureB();
        this._builder.createFeatureC();
    }

    get product(): BuilderProduct {
        return this._builder.product;
    }
}

console.log(new Director(new Builder()));
