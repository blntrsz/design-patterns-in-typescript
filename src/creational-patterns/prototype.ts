class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

class Prototype {
    public component: object;
    public circularReference: ComponentWithBackReference;

    constructor(component: object) {
        this.component = component;
        this.circularReference = new ComponentWithBackReference(this);
    }

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

const p1 = new Prototype({});
const p2 = p1.clone();
p2.circularReference;
