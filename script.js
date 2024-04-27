const div = document.createElement("div")
document.body.appendChild(div)
div.style.display="flex"
div.style.justifyContent="center"
div.style.backgroundColor="black"
div.style.margin="3em 5em "
div.style.borderRadius="20px"

// For H1 Element
const elem=div.appendChild(document.createElement("h1"))
elem.style.backgroundColor="white"
elem.style.color="balck"
elem.style.display="inline-block"
elem.style.padding="0.8em"
elem.style.textAlign="center"
elem.style.borderRadius="15px"
elem.innerText = "10"

// CallBack Hell Function
const countdown= ()=>{
    setTimeout(() => {
        elem.innerText = "9"
        setTimeout(() => {
            elem.innerText = "8"
            setTimeout(() => {
                elem.innerText = "7"
                setTimeout(() => {
                    elem.innerText = "6"
                    setTimeout(() => {
                        elem.innerText = "5"
                        setTimeout(() => {
                            elem.innerText = "4"   
                            setTimeout(() => {
                                elem.innerText = "3";                                  
                                setTimeout(() => {
                                    elem.innerText = "2"
                                    setTimeout(() => {
                                        elem.innerText = "1"
                                        setTimeout(() => {
                                            elem.innerText = "Happy Independence Day" 

                                        }, 1000);
                                       
                                    }, 1000);
                                
                                }, 1000);
    
                            }, 1000); 
                           
                        }, 1000);
                       
                    }, 1000);
                    
                },1000);
               
            }, 1000);
           
        }, 1000);
       
    }, 1000);
}
countdown()


// function displayCountdown(count, next) {
//     var countdownElement = document.getElementById('countdown');
    
//     setTimeout(function () {
//       countdownElement.innerHTML = count;
//       setTimeout(function () {
//         countdownElement.innerHTML = '';
//         next();
//       }, 500);
//     }, 1000);
//   }
  
//   displayCountdown(10, function () {
//     displayCountdown(9, function () {
//       displayCountdown(8, function () {
//         displayCountdown(7, function () {
//           displayCountdown(6, function () {
//             displayCountdown(5, function () {
//               displayCountdown(4, function () {
//                 displayCountdown(3, function () {
//                   displayCountdown(2, function () {
//                     displayCountdown(1, function () {
//                       document.getElementById('countdown').innerHTML = "Happy Independence Day!  ";
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
  