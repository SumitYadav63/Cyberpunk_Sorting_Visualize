
function Insertion() {
  document.getElementById("Time_Worst").innerText = "O(n²)";
  document.getElementById("Time_Average").innerText = "O(n²)";
  document.getElementById("Time_Best").innerText = "O(n)";
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (let i = 1; i < array_size; i++) {
    let key = div_sizes[i];
    let j = i - 1;

    div_update(divs[i], div_sizes[i], "bar-compare", div_sizes[i]);

    while (j >= 0 && div_sizes[j] > key) {
      div_update(divs[j], div_sizes[j], "bar-swap", div_sizes[j]);
      div_sizes[j + 1] = div_sizes[j];
      div_update(divs[j + 1], div_sizes[j + 1], "bar-swap", div_sizes[j + 1]);
      div_update(divs[j], div_sizes[j], "bar-default", div_sizes[j]);
      j--;
    }

    div_sizes[j + 1] = key;
    div_update(divs[j + 1], div_sizes[j + 1], "bar-sorted", div_sizes[j + 1]);
  }

  for (let t = 0; t < array_size; t++) {
    div_update(divs[t], div_sizes[t], "bar-sorted", div_sizes[t]);
  }

  enable_buttons();
}
