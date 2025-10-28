import { validatePizza } from "../src/validate.js";
import { Pizza } from "../src/validate.js";

const good_pizza = {
    "size": 10,
    "crust": "normal",
    "isDeepDish": false,
    "toppings": [
        "mozzarella",
        "basil",
        "olive oil"
    ]
}

const bad_pizza_1 = {
    "size": 10,
    "crust": "normal",
    "isDeepDish": false,
    "toppings": [
        "mozzarella",
        "basil",
        "brocolli"
    ]
}

const bad_pizza_2 = {
    "size": "small",
    "crust": "normal",
    "isDeepDish": false,
    "toppings": [
        "mozzarella",
        "basil"
    ],
    "company": "Dominos"
}

test("good pizza passes validation", () => {
    expect(validatePizza(good_pizza)).toEqual({
        isPizza: true,
        pizza: good_pizza
    })
});
