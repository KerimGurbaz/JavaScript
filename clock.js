<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Clock</title>
  <style>
    * {
      padding: 0;
      border: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: rgb(9, 2, 53);
    }

    #clock h2 {
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      position: relative;
      display: block;
      color: #ffffff;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 1.5em;
      margin-bottom: 1rem;
    }

    #clock #time {
      display: flex;
    }

    #clock #time div {
      position: relative;
      margin: 5px 5px;
      -webkit-box-reflect: below 1px linear-gradient(transparent,#0004)  ;
    }

    #clock #time div span{
      width:100px;
      height:80px;
      background:#2196f3 ;
      display: block;
      position: relative;
      box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, .2);
      text-align: center;
      font-size: 3.5 em;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color:#ffffff;

    }
    #clock #time div span:nth-child(2){
      font-size: 1.5em;
      line-height: 80px;
    }
  </style>

</head>

<body>
  <div id="clock">
    <h2>The time is now</h2>
    <div id="time">
      <div> <span id="hour">00</span> <span>Hour</span></div>
      <div> <span id="minutes">00</span> <span>Minutes</span></div>
      <div> <span id="second">00</span> <span>Second</span></div>

    </div>
  </div>
  <script>
    function clock(){
      const hour =document.getElementById("hour");
      const minutes =document.getElementById("minutes");
      const second =document.getElementById("second");

      var h = new Date().getHours();
      var m = new Date().getMinutes();
      var s= new Date().getSeconds();

      hour.innerHTML= h ;
      minutes.innerHTML = m ;
      second.innerHTML= s ;

    }

    var Interval=setInterval(clock,1000)
  </script>


</body>

</html>
