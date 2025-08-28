const historyData=[];

// get  value by id
function getInnerText(id){
    const element = document.getElementById(id)
    const text = element.innerText
    const textconverted = parseInt(text)
    return textconverted
}


// coin deduction on call button click
const callButtons = document.getElementsByClassName('call');


  for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function (e) {
        e.preventDefault();
      const callCost = 20;
      const currentCoin = getInnerText('coin');
      

      if (currentCoin >= callCost) {
        const newCoin = currentCoin - callCost;
        document.getElementById('coin').innerText = newCoin;
      } else {
        alert('Not enough coins'); 
        return
      }
    });
  }
  
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
                    <p class="text-[rgba(17, 17, 17, 1)]">${data.date}</p>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
}

// history
document.getElementById('all-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "National Emergency Number",
        number : 999,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('police-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Police Helpline Number",
        number : 999,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('fire-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Fire Service Number",
        number : 999,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('ambulance-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Ambulance Service",
        number : 1811111111 ,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('woman-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Woman & Child Helpline",
        number : 109,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('corrupt-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Anti Corruption Helpline",
        number : 106,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('electricity-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Electricity Helpline",
        number : 16216,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('brac-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Brac Helpline",
        number : 16445,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})
document.getElementById('railway-btn').addEventListener('click', function(e){
    e.preventDefault();
    const data ={
        name : "Bangladesh Railway Helpline",
        number : 163,
        date : new Date().toLocaleTimeString()
    }
historyData.push(data);
renderHistory('history-container', historyData);
})

// clear history

document.getElementById('clear-btn').addEventListener('click', function(e) {
    e.preventDefault();

    
    historyData.length = 0;

    const container = document.getElementById('history-container');
    if (container) {
        container.innerHTML = "";
    }
});









