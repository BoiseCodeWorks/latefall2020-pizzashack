import { ProxyState } from "../AppState.js";
import { pizzaService } from "../Services/PizzaService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.pizzas.forEach(p => template += p.Template)
  document.getElementById("pizzas").innerHTML = template
}

//Public
export default class PizzaController {
  constructor() {
    ProxyState.on("pizzas", _draw);
    ProxyState.on("toppings", _draw);
    _draw()
  }

  create(e) {
    e.preventDefault()

    let form = e.target

    let rawPizzaDough = {
      // title: e.target.title.value
      title: form.title.value
    }

    pizzaService.create(rawPizzaDough)

    form.reset()
  }

  delete(id) {
    pizzaService.delete(id)
  }

}
