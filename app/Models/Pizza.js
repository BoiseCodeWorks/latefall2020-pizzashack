import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from '../AppState.js'

export default class Pizza {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
    }

    get Template() {

        return /*html*/`
        <div class="col-4 border rounded shadow-lg">
            <h1>${this.title} <button class="text-danger close mt-3" onclick="app.pizzaController.delete('${this.id}')"><span>&times;</span></button></h1>
            <form onsubmit="app.toppingController.create(event, '${this.id}')">
                    <div class="form-group">
                        <input type="text" name="toppingTitle" class="form-control" placeholder="Enter Topping Title here...">
                        <button type="submit" name="" id="" class="btn btn-primary btn-lg btn-block">Create</button>
                    </div>
            </form>
            <h5>Toppings:</h5>
            <div class="row">
                ${this.Toppings}
            </div>
        </div>
        `
    }
    get Toppings() {
        let template = ""
        let toppings = ProxyState.toppings.filter(t => t.pizzaId == this.id)
        toppings.forEach(t => template += t.Template)
        return template
    }

}
