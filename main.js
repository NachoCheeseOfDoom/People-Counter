let counter = 0;
let count = document.getElementById("count-el");
let saveEl = document.getElementById('save-el');

// console.log(counter);

function incrementBtn() {
  counter += 1;
  count.innerHTML = counter;
}

function saveBtn() {
  saveEl.innerHTML += + counter + " - ";
  count.innerHTML = counter = 0;
}


