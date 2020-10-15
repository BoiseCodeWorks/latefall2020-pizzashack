import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import Topping from "../Models/Topping.js";

export function saveState() {
  localStorage.setItem("pizzashack", JSON.stringify({
    pizzas: ProxyState.pizzas, toppings: ProxyState.toppings
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("pizzashack"))
  if (data) {
    ProxyState.pizzas = data.pizzas.map(p => new Pizza(p))
    ProxyState.toppings = data.toppings.map(t => new Topping(t))
  }
}