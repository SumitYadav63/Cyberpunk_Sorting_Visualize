var inp_as = document.getElementById('a_size'),
    array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var cont = document.getElementById("array_container");
cont.style = "flex-direction: row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";
  div_sizes = [];
  divs = [];

  for (let i = 0; i < array_size; i++) {
    let value = Math.floor(Math.random() * 95) + 5;
    div_sizes[i] = value;

    let bar = document.createElement("div");
    let widthPercent = 100 / array_size;

    bar.style.height = `${value}%`;
    bar.style.width = `calc(${widthPercent}% - 2px)`;
    bar.dataset.value = value;

    // Reset bar state and apply default style
    bar.classList.add("bar", "bar-default");

    cont.appendChild(bar);
    divs[i] = bar;
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size;

for (let i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (let i = 0; i < butts_algos.length; i++) {
    butts_algos[i].className = "butt_locked";
    butts_algos[i].disabled = true;
  }
  inp_as.disabled = true;
  inp_gen.disabled = true;
  inp_aspeed.disabled = true;
}

function runalgo() {
  disable_buttons();
  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble": Bubble(); break;
    case "Selection": Selection_sort(); break;
    case "Insertion": Insertion(); break;
    case "Merge": Merge(); break;
    case "Quick": Quick(); break;
    case "Heap": Heap(); break;
  }
}
