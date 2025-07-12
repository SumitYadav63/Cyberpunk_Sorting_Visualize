function Bubble() {
  // Complexity Info
  document.getElementById("Time_Worst").innerText = "O(n²)";
  document.getElementById("Time_Average").innerText = "O(n²)";
  document.getElementById("Time_Best").innerText = "O(n)";
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (let i = 0; i < array_size - 1; i++) {
    for (let j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "bar-compare", div_sizes[j]);
      div_update(divs[j + 1], div_sizes[j + 1], "bar-compare", div_sizes[j + 1]);

      if (div_sizes[j] > div_sizes[j + 1]) {
        // Swap
        [div_sizes[j], div_sizes[j + 1]] = [div_sizes[j + 1], div_sizes[j]];
        div_update(divs[j], div_sizes[j], "bar-swap", div_sizes[j]);
        div_update(divs[j + 1], div_sizes[j + 1], "bar-swap", div_sizes[j + 1]);
      }

      div_update(divs[j], div_sizes[j], "bar-default", div_sizes[j]);
      div_update(divs[j + 1], div_sizes[j + 1], "bar-default", div_sizes[j + 1]);
    }

    div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "bar-sorted", div_sizes[array_size - i - 1]);
  }

  div_update(divs[0], div_sizes[0], "bar-sorted", div_sizes[0]);

  enable_buttons();
}
