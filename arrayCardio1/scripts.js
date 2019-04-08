'use strict'

let answers = document.querySelector('.answers')

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const res1 = inventors.filter(inventor =>
    inventor.year >= 1500 && inventor.year < 1600
)

answers.innerHTML += `<div class="answer">
        <span>1. Filter the list of inventors for those who were born in the 1500's</span>
        ${res1.map(res => {
    return `<p>${res.first} ${res.last} was born in ${res.year}</p>`
}).join("")}
 </div>`


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const res2 = inventors.map(inventor => {
    return { first: inventor.first, last: inventor.last }
})

answers.innerHTML += `<div class="answer">
        <span>2. Give us an array of the inventors' first and last names</span>
        ${res2.map(res => {
    return `<p>${res.first} ${res.last}</p>`
}).join("")}
 </div>`

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const res3 = inventors.sort((invA, invB) => {
    if (invA.year < invB.year) return 1
    else return -1
})

answers.innerHTML += `<div class="answer">
        <span>3. Sort the inventors by birthdate, oldest to youngest</span>
        ${res3.map(res => {
    return `<p>${res.first} ${res.last} was born in ${res.year}</p>`
}).join("")}
 </div>`

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const res4 = inventors.reduce((acc, inventor) => {
    return acc + (inventor.passed - inventor.year)
}, 0)

answers.innerHTML += `<div class="answer">
        <span>4. How many years did all the inventors live?</span>
        <p>they live a total of ${res4} years</p>
 </div>`

// 5. Sort the inventors by years lived
const res5 = inventors.sort((invA, invB) => {
    if ((invA.passed - invA.year) > (invB.passed - invB.year)) return 1
    else return -1
})

answers.innerHTML += `<div class="answer">
        <span>5. Sort the inventors by years lived</span>
        ${res5.map(res => {
    return `<p>${res.first} ${res.last} lived ${res.passed - res.year} years</p>`
}).join("")}
 </div>`


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
const boulevards = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"]

const res6 = boulevards.filter(boulevard => boulevard.includes('de'))

answers.innerHTML += `<div class="answer">
        <span>6. create a list of Boulevards in Paris that contain 'de' anywhere in the name</span>
        ${res6.map(res => {
    return `<p>${res}</p>`
}).join("")}
 </div>`


// 7. sort Exercise
// Sort the people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

const res7 = people.sort((name1, name2) => {
    if (name1.split(',')[0] > name2.split(',')[0]) return 1
    else return -1
})

answers.innerHTML += `<div class="answer">
        <span>7. Sort the people alphabetically by last name</span>
        ${res7.map(res => {
    return `<p>${res}</p>`
}).join("")}
 </div>`

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const res8 = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0

    obj[item]++

    return obj

}, {})

answers.innerHTML += `<div class="answer">
        <span>8. Sum up the instances of each of these</span>
        <p>car: ${res8.car}</p>
        <p>truck: ${res8.truck}</p>
        <p>bike: ${res8.bike}</p>
        <p>van: ${res8.van}</p>
        <p>walk: ${res8.walk}</p>
 </div>`