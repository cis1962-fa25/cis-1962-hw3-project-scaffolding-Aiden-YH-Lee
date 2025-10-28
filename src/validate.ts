import { z } from "zod";

const excludeSet = new Set(["broccoli", "apple", "banana", "kiwi"]);

const PizzaSchema = z.object({
    size: z.number(),
    crust: z.enum(["stuffed", "normal"]),
    isDeepDish: z.boolean().optional().default(false),
    // toppings: z.array(z.string()).refine((arr) => {
    //     let res = true
    //     for (const str of arr) {
    //         if (str in ["broccoli", "apple", "banana", "kiwi"]) {
    //             res = false
    //         }
    //     }
    //     return res;
    // })
    toppings: z.array(z.string()).refine((arr) => arr.some(k => excludeSet.has(k)))
})

type Pizza = z.infer<typeof PizzaSchema>;

type Response =
    | { isPizza: true; pizza: Pizza }
    | { isPizza: false; errors: string };

export function validatePizza(pizza: unknown): Response {
    try {
        const parsedPizza = PizzaSchema.parse(pizza);
        return {
            isPizza: true,
            pizza: parsedPizza,
        }
    } catch (e) {
        if (e instanceof z.ZodError) {
            return {
                isPizza: false,
                errors: e.message
            }
        } else {
            return {
                isPizza: false,
                errors: "Unknown error."
            }
        }

    }
}