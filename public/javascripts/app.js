window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
      countDownToTime("Apr 31, 2020 "+ new Date().getTime(), 'countdown1'); // ****** Change this line!
    }
    function countDownToTime(countTo, id) {
      countTo = new Date(countTo).getTime();
      var now = new Date(),
          countTo = new Date(countTo),
          timeDifference = (countTo - now);
          
      var secondsInADay = 60 * 60 * 1000 * 24,
          secondsInAHour = 60 * 60 * 1000;
    
      days = Math.floor(timeDifference / (secondsInADay) * 1);
      hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
      mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
      secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
    
      var idEl = document.getElementById(id);
      idEl.getElementsByClassName('days')[0].innerHTML = days;
      idEl.getElementsByClassName('hours')[0].innerHTML = hours;
      idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
      idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
      
      document.getElementById("jNbre").innerHTML = (30 - days);
    
      clearTimeout(countDownToTime.interval);
      countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);

      var aud = document.getElementById("myAudio");
      aud.volume = 0.5; // default 1 means 100%
    }