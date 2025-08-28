const historyData=[];

// get  value by id
function getInnerText(id){
    const element = document.getElementById(id)
    const text = element.innerText
    const textconverted = parseInt(text)
    return textconverted
}


// coin deduction on call button click

  
// like button functionality
const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
  heart.addEventListener('click', function() {
    let loveCount = getInnerText('love');

   
    if (heart.classList.contains('active')) {
      // Remove like
      loveCount--;
      heart.classList.remove('active');
      heart.classList.replace('fa-solid', 'fa-regular'); 
    } else {
      // Add like
      loveCount++;
      heart.classList.add('active');
      heart.classList.replace('fa-regular', 'fa-solid'); 
    }

    // Update the display
    document.getElementById('love').innerText = loveCount;
  });
});
// copy button functionality
// Function to increment the copy count
// Select all copy buttons
const copyButtons = document.querySelectorAll('.copy');

copyButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get current copy count
    const countEl = document.getElementById('copy-count');
    let count = parseInt(countEl.innerText) || 0;

    // Increment by 1
    count++;

    // Update the display
    countEl.innerText = count;
  });
});


// Function to copy number to clipboard
const copyTextButtons = document.querySelectorAll('.copy-text');

copyTextButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Find the nearest card container
    const card = button.closest('.card-container');
    if (!card) return;

    // Get the number
    const numberEl = card.querySelector('.number');
    if (!numberEl) return;
    const numberText = numberEl.innerText;

    // Get the service text
    const serviceEl = card.querySelector('.service');
    const serviceText = serviceEl ? serviceEl.innerText : '';

    // Combine service and number
    const textToCopy = `${serviceText} : ${numberText}`;

    // Copy to clipboard
    navigator.clipboard.writeText(numberText)
      .then(() => alert(`Copied ${textToCopy}`))
      .catch(err => console.error('Failed to copy:', err));
  });
});





// history render function
function renderHistory(containerId, dataList) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    container.innerHTML = ""; 

    for (const data of dataList) {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between items-center bg-[#fafafa] rounded-[8px] p-[10px] mb-[10px]">
                <div>
                    <p>${data.name}</p>
                    <p class="text-[#5c5c5c]">${data.number}</p>
                </div>
                <div>
                    <p class="text-[rgba(17, 17, 17, 1)] hind-madurai-regular ">${data.date}</p>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
}

// history & call 
// National Emergency Number
document.getElementById('all-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
    const data ={
            name : "National Emergency Number",
            number : 999,
            date : new Date().toLocaleTimeString()
        }
    alert(`Calling ${data.name} at ${data.number}...`);

    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Police Helpline
document.getElementById('police-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
const data ={
        name : "Police Helpline Number",
        number : 999,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);

    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Fire Service
document.getElementById('fire-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
const data ={
        name : "Fire Service Number",
        number : 999,
        date : new Date().toLocaleTimeString()
    }
alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Ambulance Service
document.getElementById('ambulance-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
    const data ={
        name : "Ambulance Service",
        number : 1811111111,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Woman & Child Helpline
document.getElementById('woman-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
    const data ={
        name : "Woman & Child Helpline",
        number : 109,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Anti Corruption Helpline
document.getElementById('corrupt-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
    const data ={
        name : "Anti Corruption Helpline",
        number : 106,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Electricity Helpline
document.getElementById('electricity-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
    const data ={
        name : "Electricity Helpline",
        number : 16216,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Brac Helpline
document.getElementById('brac-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
const data ={
        name : "Brac Helpline",
        number : 16445,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// Bangladesh Railway Helpline
document.getElementById('railway-btn').addEventListener('click', function(e){
    e.preventDefault();
    const callCost = 20;
    const currentCoin = getInnerText('coin');
    if(currentCoin < callCost){
        alert('Not enough coins');
        return;
    }
    const data ={
        name : "Bangladesh Railway Helpline",
        number : 163,
        date : new Date().toLocaleTimeString()
    }
    alert(`Calling ${data.name} at ${data.number}...`);
    const newCoin = currentCoin - callCost;
    document.getElementById('coin').innerText = newCoin;

    
    historyData.push(data);
    renderHistory('history-container', historyData);
});

// clear history

document.getElementById('clear-btn').addEventListener('click', function(e) {
    e.preventDefault();

    
    historyData.length = 0;

    const container = document.getElementById('history-container');
    if (container) {
        container.innerHTML = "";
    }
});









