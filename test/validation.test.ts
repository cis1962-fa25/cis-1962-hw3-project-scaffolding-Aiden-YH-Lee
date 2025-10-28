import { validatePizza } from "../src/validate.js";

const good_pizza = {
    size: 10,
    crust: "normal",
    isDeepDish: false,
    toppings: ["mozzarella", "basil", "olive oil"],
};

const bad_pizza_1 = {
    size: 10,
    crust: "normal",
    isDeepDish: false,
    toppings: ["mozzarella", "basil", "broccoli"],
};

const bad_pizza_2 = {
    size: "small",
    crust: "normal",
    isDeepDish: false,
    toppings: ["mozzarella", "basil"],
    company: "Dominos",
};

test("good pizza passes validation", () => {
    expect(validatePizza(good_pizza)).toEqual({
        isPizza: true,
        pizza: good_pizza,
    });
});

test("bad pizza with broccoli fails validation", () => {
    const result = validatePizza(bad_pizza_1);
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
        expect(result.errors).toBeDefined();
    }
});

test("bad pizza with wrong type fails validation", () => {
    const result = validatePizza(bad_pizza_2);
    expect(result.isPizza).toBe(false);
    if (!result.isPizza) {
        expect(result.errors).toBeDefined();
    }
});
