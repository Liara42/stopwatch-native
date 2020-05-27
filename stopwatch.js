function Stopwatch(){
    let startTime = 0;
    let endTime = 0;
    this.running = false;
    let duration = 0;
    let updateTime = 0;
  
    this.start = function(){
      if(!this.running){
          startTime = Date.now();
          duration = setInterval(updateDuration,10);
          this.running = true;
        }
    }
    
    this.stop = function(){
        if(this.running){
            clearInterval(duration);
            this.running = false;
            endTime = Date.now();
        }
   }
    
    this.reset = function(){
      startTime = 0;
      endTime = 0;
      duration = 0;
      this.running = false;
      lapTimes = [];
   }
   
   function updateDuration(){
       now = Date.now();
       updateTime += (now - startTime);
       startTime = now;

       return formatTime(updateTime);
       
    }

    function formatTime(miliseconds){
        let seconds = Math.floor(miliseconds / 1000);
        miliseconds = (miliseconds % 1000).toString();

        let minutes = Math.floor(seconds / 60).toString();
        seconds = (seconds % 60).toString();

        if (minutes.length < 2){
            minutes = "0" + minutes;
        }

        if (seconds.length < 2){
            seconds = "0" + seconds;
        }

        while (miliseconds < 3)
        {
            miliseconds = "0" + miliseconds;
        }

        return `${minutes}:${seconds}:${miliseconds}`;
    }
}
  
let sw = new Stopwatch();