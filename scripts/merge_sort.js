function Merge() {
  document.getElementById("Time_Worst").innerText = "O(n log n)";
  document.getElementById("Time_Average").innerText = "O(n log n)";
  document.getElementById("Time_Best").innerText = "O(n log n)";
  document.getElementById("Space_Worst").innerText = "O(n)";

  c_delay = 0;
  merge_sort(0, array_size - 1);
  enable_buttons();
}

function merge_sort(start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    merge_sort(start, mid);
    merge_sort(mid + 1, end);
    merge(start, mid, end);
  }
}

function merge(start, mid, end) {
  const n1 = mid - start + 1;
  const n2 = end - mid;
  const Left = [], Right = [];

  for (let i = 0; i < n1; i++) {
    Left[i] = div_sizes[start + i];
    div_update(divs[start + i], div_sizes[start + i], "bar-active", div_sizes[start + i]);
  }

  for (let j = 0; j < n2; j++) {
    Right[j] = div_sizes[mid + 1 + j];
    div_update(divs[mid + 1 + j], div_sizes[mid + 1 + j], "bar-compare", div_sizes[mid + 1 + j]);
  }

  let i = 0, j = 0, k = start;

  while (i < n1 && j < n2) {
    if (Left[i] <= Right[j]) {
      div_sizes[k] = Left[i];
      div_update(divs[k], div_sizes[k], "bar-swap", div_sizes[k]);
      i++;
    } else {
      div_sizes[k] = Right[j];
      div_update(divs[k], div_sizes[k], "bar-swap", div_sizes[k]);
      j++;
    }
    k++;
  }

  while (i < n1) {
    div_sizes[k] = Left[i];
    div_update(divs[k], div_sizes[k], "bar-swap", div_sizes[k]);
    i++; k++;
  }

  while (j < n2) {
    div_sizes[k] = Right[j];
    div_update(divs[k], div_sizes[k], "bar-swap", div_sizes[k]);
    j++; k++;
  }

  for (let m = start; m <= end; m++) {
    div_update(divs[m], div_sizes[m], "bar-sorted", div_sizes[m]);
  }
}
