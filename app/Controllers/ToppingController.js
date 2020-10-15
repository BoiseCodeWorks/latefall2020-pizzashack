import { ProxyState } from "../AppState.js";
import { pizzaService } from "../Services/PizzaService.js";
import { toppingService } from "../Services/ToppingService.js";


//Private


//Public
export default class ToppingController {

  create(e, pizzaId) {
    e.preventDefault()

    let form = e.target

    let rawTopping = {
      title: form.toppingTitle.value,
      // pizzaId
      pizzaId: pizzaId
    }

    toppingService.create(rawTopping)

    form.reset()
  }

  delete(id) {
    toppingService.delete(id)
  }

}
