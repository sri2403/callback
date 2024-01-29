function displayCountdown(count, next) {
    var countdownElement = document.getElementById('countdown');
    
    setTimeout(function () {
      countdownElement.innerHTML = count;
      setTimeout(function () {
        countdownElement.innerHTML = '';
        next();
      }, 500);
    }, 1000);
  }
  
  displayCountdown(10, function () {
    displayCountdown(9, function () {
      displayCountdown(8, function () {
        displayCountdown(7, function () {
          displayCountdown(6, function () {
            displayCountdown(5, function () {
              displayCountdown(4, function () {
                displayCountdown(3, function () {
                  displayCountdown(2, function () {
                    displayCountdown(1, function () {
                      document.getElementById('countdown').innerHTML = "Happy Independence Day!  ";
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  