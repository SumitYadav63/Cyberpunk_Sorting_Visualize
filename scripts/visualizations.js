let speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
  const array_speed = parseInt(inp_aspeed.value);
  const speed_map = { 1: 1, 2: 10, 3: 100, 4: 1000, 5: 10000 };
  speed = speed_map[array_speed] || 1000;
  delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

let delay_time = 10000 / (Math.floor(array_size / 10) * speed);
let c_delay = 0;

function div_update(div, height, state = "bar-default", value = null) {
  window.setTimeout(() => {
    const displayValue = value ?? parseInt(div.dataset.value);
    div.dataset.value = displayValue;

    div.style.height = `${height}%`;
    div.style.margin = "0 1px";
    div.style.width = `${100 / array_size - 0.5}%`;
    div.style.position = "relative";

    // Always update number below bar
    div.innerHTML = `
      <span style="position:absolute; bottom:-1.2rem; font-size:0.75rem; width:100%; text-align:center;">
        ${displayValue}
      </span>
    `;

    // Clear previous color classes
    div.classList.remove(
      "bar-sorted", "bar-swap", "bar-compare", "bar-pivot", "bar-active", "bar-default"
    );
    div.classList.add(state);
  }, (c_delay += delay_time));
}

function waitForDelay() {
  const speed = document.getElementById("a_speed").value;
  const ms = 300 / speed;
  return new Promise(resolve => setTimeout(resolve, ms));
}

function enable_buttons() {
  window.setTimeout(() => {
    butts_algos.forEach(btn => {
      btn.className = "algo-btn neon-pulse";
      btn.disabled = false;
    });
    inp_as.disabled = false;
    inp_gen.disabled = false;
    inp_aspeed.disabled = false;
  }, (c_delay += delay_time));
}
