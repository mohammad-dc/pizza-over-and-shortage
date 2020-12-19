const tbody_table = document.querySelector('tbody');
const sum_of_over = document.querySelector('.sum_of_over');
const sum_of_shortage = document.querySelector('.sum_of_shortage');
const over_age = document.querySelector('.over_avg');
const shortage_avg = document.querySelector('.shortage_avg');

let random_num = [], demond = [], over = [], shortage = [];
for (let i = 0; i < 30; i++) {
    random_num[i] = Math.floor(Math.random() * (99 - 0) + 0);
    if (random_num[i] >= 0 && random_num[i] <= 5) {
        demond[i] = 196
        over[i] = 0
        shortage[i] = 4
    }
    if (random_num[i] >= 6 && random_num[i] <= 14) {
        demond[i] = 197
        over[i] = 0
        shortage[i] = 3
    }
    if (random_num[i] >= 15 && random_num[i] <= 24) {
        demond[i] = 198
        over[i] = 0
        shortage[i] = 2
    }
    if (random_num[i] >= 25 && random_num[i] <= 40) {
        demond[i] = 199
        over[i] = 0
        shortage[i] = 1
    }
    if (random_num[i] >= 41 && random_num[i] <= 60) {
        demond[i] = 200
        over[i] = 0
        shortage[i] = 0
    }
    if (random_num[i] >= 61 && random_num[i] <= 81) {
        demond[i] = 201
        over[i] = 1
        shortage[i] = 0
    }
    if (random_num[i] >= 82 && random_num[i] <= 89) {
        demond[i] = 202
        over[i] = 2
        shortage[i] = 0
    }
    if (random_num[i] >= 90 && random_num[i] <= 96) {
        demond[i] = 203
        over[i] = 3
        shortage[i] = 0
    }
    if (random_num[i] >= 97 && random_num[i] <= 99) {
        demond[i] = 204
        over[i] = 4
        shortage[i] = 0
    }
}

const table_data = random_num.map((el, index) => (
    `<tr>
        <th scope="row">${index + 1}</th>
        <td>${random_num[index]}</td>
        <td>${demond[index]}</td>
        <td>${over[index]}</td>
        <td>${shortage[index]}</td>
    </tr>
    `
))

table_data.forEach(el => {
    tbody_table.innerHTML += el
})

let sumOver = over.reduce((a, b) => a + b);
let sumShortage = shortage.reduce((a, b) => a + b);

sum_of_over.innerHTML = `Sum of over = ${sumOver}`
sum_of_shortage.innerHTML = `Sum of shortage = ${sumShortage}`
over_age.innerHTML = `The average number of pizzas produced more than requirement = ${sumOver / 30}`
shortage_avg.innerHTML = `The average number of shortage of pizzas supplied = ${sumShortage / 30}`     
