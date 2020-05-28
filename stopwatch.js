function Stopwatch(updateTiming, updateLaps) {
  let startTime = 0;
  this.running = false;
  let duration = 0;
  let updateTime = 0;
  let lapArray = [];
  this.counter = 0;

  this.start = function () {
    if (!this.running) {
      startTime = Date.now();
      this.running = true;
      duration = setInterval(updateDuration, 100);
    }
  };

  this.stop = function () {
    if (this.running) {
      endTime = Date.now() - startTime;
      clearInterval(duration);
      this.running = false;
    }
  };

  this.lap = function () {
    lapArray.push(updateDuration());
    updateLaps(lapArray);
    this.counter++;
  };

  this.reset = function () {
    startTime = 0;
    this.running = false;
    duration = 0;
    updateTime = 0;
    lapArray = [];
    this.counter = 0;
  };

  function updateDuration() {
    now = Date.now();
    updateTime += (now - startTime) / 100;
    startTime = now;
    let time = formatTime(updateTime);
    updateTiming(time);
    return time;
  }

  function formatTime(decisecond) {
    let seconds = Math.floor(decisecond / 10);
    decisecond = Math.floor(decisecond - seconds * 10).toString();

    let minutes = Math.floor(seconds / 60).toString();
    seconds = (seconds % 60).toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if (decisecond.length < 2) {
      decisecond = decisecond + '0';
    }

    return `${minutes}:${seconds}:${decisecond}`;
  }
}
