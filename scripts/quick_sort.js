function Quick() {
  document.getElementById("Time_Worst").innerText = "O(n²)";
  document.getElementById("Time_Average").innerText = "O(n log n)";
  document.getElementById("Time_Best").innerText = "O(n log n)";
  document.getElementById("Space_Worst").innerText = "O(log n)";

  c_delay = 0;
  quick_sort(0, array_size - 1);
  for (let i = 0; i < array_size; i++) {
    div_update(divs[i], div_sizes[i], "bar-sorted", div_sizes[i]);
  }
  enable_buttons();
}

function quick_sort(start, end) {
  if (start < end) {
    const pivot_index = partition(start, end);
    quick_sort(start, pivot_index - 1);
    quick_sort(pivot_index + 1, end);
  }
}

function partition(start, end) {
  const pivot = div_sizes[end];
  div_update(divs[end], div_sizes[end], "bar-pivot", div_sizes[end]);

  let i = start - 1;
  for (let j = start; j < end; j++) {
    div_update(divs[j], div_sizes[j], "bar-compare", div_sizes[j]);
    if (div_sizes[j] < pivot) {
      i++;
      [div_sizes[i], div_sizes[j]] = [div_sizes[j], div_sizes[i]];
      div_update(divs[i], div_sizes[i], "bar-swap", div_sizes[i]);
      div_update(divs[j], div_sizes[j], "bar-swap", div_sizes[j]);
    }
    div_update(divs[j], div_sizes[j], "bar-default", div_sizes[j]);
  }

  i++;
  [div_sizes[i], div_sizes[end]] = [div_sizes[end], div_sizes[i]];
  div_update(divs[end], div_sizes[end], "bar-default", div_sizes[end]);
  div_update(divs[i], div_sizes[i], "bar-sorted", div_sizes[i]);
  return i;
}
