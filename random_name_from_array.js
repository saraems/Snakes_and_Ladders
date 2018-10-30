// Napisz prostą maszynę losującą, czyli funkcję, która przyjmuje jako argument tablicę zawierającą listę osób. Twoja funkcja powinna zwracać losową osobę z tej tablicy. Przykładowa tablica do wywołania funkcji: const students = ["John", "Bill", "Emma", "Stella", "Rob"].


const getRandomInt = function (array) {
    let max = array.length;
    const min = 0;
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(array[randomIndex])
}