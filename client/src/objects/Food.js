
class Food {
    constructor(food = {}) {
            this.name = food.name || ""
            this.kcal = food.kcal || ""
            this.carbohydrates = food.carbohydrates || ""
            this.sugar = food.sugar || ""
            this.fiber = food.fiber || ""
            this.protein = food.protein || ""
            this.fats = food.fats || ""
            this.saturatedFats = food.saturatedFats || ""
            this.transFats = food.transFats || ""
            this.polyunsaturatedFats = food.polyunsaturatedFats || ""
            this.monounsaturatedFats = food.monounsaturatedFats || ""
            this.potassium = food.potassium || ""
            this.phosphate = food.phosphate || ""
            this.calcium = food.calcium || ""
            this.sodium = food.sodium || ""
            this.vitamineA = food.vitamineA || ""
            this.vitamineB1 = food.vitamineB1 || ""
            this.vitamineB2 = food.vitamineB2 || ""
            this.vitamineB3 = food.vitamineB3 || ""
            this.vitamineB5 = food.vitamineB5 || ""
            this.vitamineB6 = food.vitamineB6 || ""
            this.vitamineB7 = food.vitamineB7 || ""
            this.vitamineB9 = food.vitamineB9 || ""
            this.vitamineB12 = food.vitamineB12 || ""
            this.vitamineC = food.vitamineC || ""
            this.vitamineD = food.vitamineD || ""
            this.vitamineE = food.vitamineE || ""
            this.vitamineK = food.vitamineK || ""
        
    }
    /*set(key,value) {
        keys = ["name","kcal","sugar","fiber",
            "protein","saturatedFats","transFats","polyunsaturatedFats",
            "monounsaturatedFats","potassium","phosphate","calcium","sodium","vitamineA",
            "vitamineB1","vitamineB2","vitamineB3","vitamineB5",
            "vitamineB6","vitamineB7","vitamineB9","vitamineB12",
            "vitamineC","vitamineD","vitamineE","vitamineK"
        ]
        if (keys.indexOf(key) === -1) {
            return console.log("key value of Food Object not valid")
        }
        this.food[key] = value
    }*/
}
export default Food
