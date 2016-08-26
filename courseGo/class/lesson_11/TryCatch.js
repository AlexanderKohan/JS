/**
 * Created by Alexander on 8/26/2016.
 */

try {
    console.log('Начало блока Try');
    lalala;
    console.log('Конец блока Try');
} catch (e) {
    console.log('Ошибка ' + e.name + ':' + e.message + '\n' + e.stack);
}
console.log('Потом код продолжит выполнение...');
