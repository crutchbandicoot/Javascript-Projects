const secondHand = document.querySelector('.second-hand');

    const minuteHand = document.querySelector('.min-hand');

    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
      const now = new Date();

      //Seconds
      const seconds = now.getSeconds();
      const secondDegrees = ((seconds/60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondDegrees}deg)`;

      //Minutes
      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes/60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

      //Hours
      const hours = now.getHours();
      const hourDegrees = ((hours/12) *360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);