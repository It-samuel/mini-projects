const main = document.getElementById('main');
const addUserBtn = document.getElementById('Add User');
const doubleBtn  = document.getElementById('Double Money');
const showMillionairesBtn = document.getElementById('Show Millionaires');
const sortBtn = document.getElementById('Sort');
const calculateWealthBtn = document.getElementById('Calculate Wealth');


let data = [];


getRandomUser();
getRandomUser();  
// Fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
    
}


function addData(obj) {
    data.push(obj);

    updateDOM();
}

function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}


// Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



// Event listeners
addUserBtn.addEventListener('click', getRandomUser);