// get input value by id
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
      console.log(currentCoin);

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





