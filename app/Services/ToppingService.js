import { ProxyState } from "../AppState.js";
import Topping from "../Models/Topping.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

class ToppingService {
  constructor() {
    ProxyState.on("toppings", saveState)
  }

  delete(id) {
    ProxyState.toppings = ProxyState.toppings.filter(t => t.id != id)
    console.log(ProxyState.toppings);
  }

  create(rawTopping) {
    let toppings = ProxyState.toppings
    toppings.push(new Topping(rawTopping))
    ProxyState.toppings = toppings
    console.log(ProxyState.toppings);
  }

}

export const toppingService = new ToppingService();

