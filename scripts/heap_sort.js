function Heap() {
  document.getElementById("Time_Worst").innerText = "O(n log n)";
  document.getElementById("Time_Average").innerText = "O(n log n)";
  document.getElementById("Time_Best").innerText = "O(n log n)";
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (let i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
    heapify(array_size, i);
  }

  for (let i = array_size - 1; i > 0; i--) {
    [div_sizes[0], div_sizes[i]] = [div_sizes[i], div_sizes[0]];
    div_update(divs[0], div_sizes[0], "bar-swap", div_sizes[0]);
    div_update(divs[i], div_sizes[i], "bar-sorted", div_sizes[i]);
    heapify(i, 0);
  }

  div_update(divs[0], div_sizes[0], "bar-sorted", div_sizes[0]);
  enable_buttons();
}

function heapify(n, i) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && div_sizes[l] > div_sizes[largest]) largest = l;
  if (r < n && div_sizes[r] > div_sizes[largest]) largest = r;

  if (largest !== i) {
    [div_sizes[i], div_sizes[largest]] = [div_sizes[largest], div_sizes[i]];
    div_update(divs[i], div_sizes[i], "bar-swap", div_sizes[i]);
    div_update(divs[largest], div_sizes[largest], "bar-swap", div_sizes[largest]);
    heapify(n, largest);
  }
}
