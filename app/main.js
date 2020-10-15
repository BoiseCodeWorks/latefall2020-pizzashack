import PizzaController from "./Controllers/PizzaController.js";
import ToppingController from "./Controllers/ToppingController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  pizzaController = new PizzaController();
  toppingController = new ToppingController()
}

window["app"] = new App();
loadState()