/**
 * Created by Alexander on 8/27/2016.
 */
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    this.waterAmount = function(amount) {
// вызов без параметра, значит режим геттера, возвращаем свойство
        if (!arguments.length) return waterAmount;
// иначе режим сеттера
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }
        waterAmount = amount;
    };
}
var coffeeMachine = new CoffeeMachine(1000, 500);
// пример использования
coffeeMachine.waterAmount(450);
console.log( coffeeMachine.waterAmount() ); // 450
