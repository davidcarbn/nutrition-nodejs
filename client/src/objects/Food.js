
class Food {
    constructor(food = {}) {
            this.name = food.name || ""
            this.kcal = food.kcal || 0
            this.sugar = food.sugar || 0
            this.fiber = food.fiber || 0
            this.protein = food.protein || 0
            this.saturatedFats = food.saturatedFats || 0
            this.transFats = food.transFats || 0
            this.polyunsaturatedFats = food.polyunsaturatedFats || 0
            this.monounsaturatedFats = food.monounsaturatedFats || 0
            this.potassium = food.potassium || 0
            this.phosphate = food.phosphate || 0
            this.calcium = food.calcium || 0
            this.sodium = food.sodium || 0
            this.vitamineA = food.vitamineA || 0
            this.vitamineB1 = food.vitamineB1 || 0
            this.vitamineB2 = food.vitamineB2 || 0
            this.vitamineB3 = food.vitamineB3 || 0
            this.vitamineB5 = food.vitamineB5 || 0
            this.vitamineB6 = food.vitamineB6 || 0
            this.vitamineB7 = food.vitamineB7 || 0
            this.vitamineB9 = food.vitamineB9 || 0
            this.vitamineB12 = food.vitamineB12 || 0
            this.vitamineC = food.vitamineC || 0
            this.vitamineD = food.vitamineD || 0
            this.vitamineE = food.vitamineE || 0
            this.vitamineK = food.vitamineK || 0
        
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
