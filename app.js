const tbody_table = document.querySelector('tbody');
const sum_of_over = document.querySelector('.sum_of_over');
const sum_of_shortage = document.querySelector('.sum_of_shortage');
const over_age = document.querySelector('.over_avg');
const shortage_avg = document.querySelector('.shortage_avg');
const file = document.querySelector("#file");

let random_num = [], demond = [], over = [], shortage = [];

file.addEventListener("change", () => {
    readXlsxFile(file.files[0]).then((rows) => {
        const table_data = rows.map((el) => (
            `<tr>
        <th scope="row">${el[0]}</th>
        <td>${el[1]}</td>
        <td>${el[2]}</td>
        <td>${el[3]}</td>
        <td>${el[4]}</td>
    </tr>
    `
       ))
       table_data.forEach(el => {
        tbody_table.innerHTML += el
       })
       
        rows.forEach((el, index) => {
            demond[index] = el[2]
            over[index] = el[3]
            shortage[index] = el[4]
       })
       let sumOver = over.reduce((a, b) => a + b);
       let sumShortage = shortage.reduce((a, b) => a + b);
       
       sum_of_over.innerHTML = `Sum of over = ${sumOver}`
       sum_of_shortage.innerHTML = `Sum of shortage = ${sumShortage}`
       over_age.innerHTML = `The average number of pizzas produced more than requirement = ${sumOver / 30}`
       shortage_avg.innerHTML = `The average number of shortage of pizzas supplied = ${sumShortage / 30}`   
      })
})
