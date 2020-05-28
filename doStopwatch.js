let timer = document.getElementById('timer');
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let laps = document.getElementById('lapList');

function updateTiming(time) {
  timer.textContent = time;
}

function updateLaps(lap) {
  laps.textContent = lap;
}

const sw = new Stopwatch(updateTiming, updateLaps);

leftButton.addEventListener('click', function () {
  if (sw.running) {
    sw.lap();
  } else {
    sw.start();
  }

  leftButton.textContent = 'Lap';
  rightButton.textContent = 'Pause';
});

rightButton.addEventListener('click', function () {
  if (sw.running) {
    sw.stop();
    rightButton.textContent = 'Reset';
    leftButton.textContent = 'Continue';
  } else {
    sw.reset();
    laps.textContent = '.';
    timer.textContent = '00:00:00';
    leftButton.textContent = 'Start';
  }
});
