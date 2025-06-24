function startCountdown() {
      let count = 10;
      clearInterval(window.stopwatchInterval);
      clearInterval(window.countdownInterval);
      document.getElementById('timerDisplay').textContent = "Countdown: " + count;
      window.countdownInterval = setInterval(() => {
        count--;
        document.getElementById('timerDisplay').textContent = "Countdown: " + count;
        if (count < 0) clearInterval(window.countdownInterval);
      }, 1000);
    }

    let seconds = 0;
    function startStopwatch() {
      clearInterval(window.countdownInterval);
      clearInterval(window.stopwatchInterval);
      //seconds = 0;
      window.stopwatchInterval = setInterval(() => {
        document.getElementById('timerDisplay').textContent = "Stopwatch: " + seconds++;
      }, 1000);
    }

    function stopStopwatch() {
      clearInterval(window.stopwatchInterval);
    }

    // this inside object
    const person = {
      name: 'Ajay',
      greet: function () {
        document.getElementById('greetResult').textContent = "Hello, I'm " + this.name;
      }
    };

    // map, filter, reduce
    function arrayMethods() {
      let arr = [1, 2, 3, 4];
      let map = arr.map(x => x * 2);
      let filter = arr.filter(x => x % 2 === 0);
      let reduce = arr.reduce((acc, cur) => acc + cur, 0);
      document.getElementById('arrayResult').textContent =
        "Original: " + arr + "\n" +
        "Map: " + map + "\n" +
        "Filter: " + filter + "\n" +
        "Reduce: " + reduce;
    }

    //  try-catch-finally
    function errorExample() {
      try {
        let x = a + 1;
        console.log("try is working", x);
      } catch (err) {
        document.getElementById('errorMsg').textContent = "Error: " + err.message;
      } finally {
        console.log("finally runs always");
      }
    }

    // 05. Get and Set input value using jQuery
    function getSetValue() {
      let val = $('#nameInput').val(); 
      alert("You entered: " + val);   
      $('#nameInput').val('Updated Name');
      $('#getSetResult').text("Updated input value to: Updated Name"); 
    }

    // 06. Change HTML content using jQuery
    function changeContent() {
      $('#htmlBox').html('<strong>Updated Content</strong>');
    }

    // 07. Toggle Class
    function toggleClass() {
      $('#box').toggleClass('highlight');
    }

    // 08. jQuery Events
    $('#eventBtn').on('click', function () {
      $(this).text('Clicked!').css('background', 'lightgreen');
    });

    // 09. Animate
    function animateBox() {
      $('#box').animate({
        left: '200px',
        opacity: 0.5
      }, 1000).animate({
        left: '0px',
        opacity: 1
      }, 1000);
    }

    // 10. Arrow vs Normal Function
    function compareFunctions() {
      const normalFn = {
        name: "Normal",
        show: function () {
          return this.name;
        }
      };

      const arrowFn = {
        name: "Arrow",
        show: () => {
          return this.name;
        }
      };

      document.getElementById('functionResult').textContent =
        "Normal: " + normalFn.show() + "\n" +
        "Arrow: " + arrowFn.show();
    }
