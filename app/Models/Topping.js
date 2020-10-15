import { generateId } from "../Utils/GenerateId.js"

export default class Topping {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    this.pizzaId = data.pizzaId
  }

  get Template() {

    return /*html*/`
        <div class="col-12 border rounded shadow-lg">
            <h1>${this.title} <button class="text-danger close mt-3 float-right" onclick="app.toppingController.delete('${this.id}')"><span>&times;</span></button></h1>
        </div>
        `
  }
}
