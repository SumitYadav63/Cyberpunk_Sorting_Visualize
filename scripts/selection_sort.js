
function Selection_sort() {
  document.getElementById("Time_Worst").innerText = "O(n²)";
  document.getElementById("Time_Average").innerText = "O(n²)";
  document.getElementById("Time_Best").innerText = "O(n²)";
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (let i = 0; i < array_size - 1; i++) {
    let min_index = i;
    div_update(divs[i], div_sizes[i], "bar-active", div_sizes[i]);

    for (let j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "bar-compare", div_sizes[j]);

      if (div_sizes[j] < div_sizes[min_index]) {
        if (min_index !== i) {
          div_update(divs[min_index], div_sizes[min_index], "bar-default", div_sizes[min_index]);
        }
        min_index = j;
        div_update(divs[min_index], div_sizes[min_index], "bar-pivot", div_sizes[min_index]);
      } else {
        div_update(divs[j], div_sizes[j], "bar-default", div_sizes[j]);
      }
    }

    if (min_index !== i) {
      [div_sizes[i], div_sizes[min_index]] = [div_sizes[min_index], div_sizes[i]];

      div_update(divs[min_index], div_sizes[min_index], "bar-swap", div_sizes[min_index]);
      div_update(divs[i], div_sizes[i], "bar-swap", div_sizes[i]);
    }

    div_update(divs[i], div_sizes[i], "bar-sorted", div_sizes[i]);
  }

  div_update(divs[array_size - 1], div_sizes[array_size - 1], "bar-sorted", div_sizes[array_size - 1]);
  enable_buttons();
}
