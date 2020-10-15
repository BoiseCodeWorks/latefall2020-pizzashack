import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import { saveState } from "../Utils/LocalStorage.js";

class PizzaService {
  constructor() {
    ProxyState.on("pizzas", saveState)
  }
  delete(id) {
    ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != id)
    ProxyState.toppings = ProxyState.toppings.filter(t => t.pizzaId != id)
    console.log(ProxyState.toppings);
    console.log(ProxyState.pizzas);

  }
  create(rawPizzaDough) {
    let pizzas = ProxyState.pizzas
    pizzas.push(new Pizza(rawPizzaDough))
    ProxyState.pizzas = pizzas
    // NOTE this is the same as above
    // ProxyState.pizzas = [...ProxyState.pizzas, new Pizza(rawPizzaDough)]
    console.log(ProxyState.pizzas);
  }

}

export const pizzaService = new PizzaService();

