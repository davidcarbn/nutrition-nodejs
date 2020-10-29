
class Food {
    constructor(food = {}) {
            this.name = food.name || null
            this.kcal = food.kcal || null
            this.carbohydrates = food.carbohydrates || null
            this.sugar = food.sugar || null
            this.fiber = food.fiber || null
            this.protein = food.protein || null
            this.fats = food.fats || null
            this.saturatedFats = food.saturatedFats || null
            this.transFats = food.transFats || null
            this.polyunsaturatedFats = food.polyunsaturatedFats || null
            this.monounsaturatedFats = food.monounsaturatedFats || null
            this.potassium = food.potassium || null
            this.phosphate = food.phosphate || null
            this.calcium = food.calcium || null
            this.sodium = food.sodium || null
            this.vitamineA = food.vitamineA || null
            this.vitamineB1 = food.vitamineB1 || null
            this.vitamineB2 = food.vitamineB2 || null
            this.vitamineB3 = food.vitamineB3 || null
            this.vitamineB5 = food.vitamineB5 || null
            this.vitamineB6 = food.vitamineB6 || null
            this.vitamineB7 = food.vitamineB7 || null
            this.vitamineB9 = food.vitamineB9 || null
            this.vitamineB12 = food.vitamineB12 || null
            this.vitamineC = food.vitamineC || null
            this.vitamineD = food.vitamineD || null
            this.vitamineE = food.vitamineE || null
            this.vitamineK = food.vitamineK || null
        
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
