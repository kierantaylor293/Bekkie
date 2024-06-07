var listOfDescriptions = ["Fabulous","Slay","Girl Boss", "Just a Girl", "Queen", "Bew-ree-full", "Wicked af", "The Best"]


$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


  function updateStuff() {
   updateHeader();
   updateCount();

  }

  async function updateHeader() {
   for (const element of listOfDescriptions) {
      await updateDescription(element);
   }
   
   updateHeader();
  }





function updateCount() {
   var bekkiesBirthday = new Date(1999,6,14,0,0,0);



   var countDownDate = new Date(2024,5,6,0,0,0).getTime();

   // Update the count down every 1 second
   var x = setInterval(function() {
   
     var now = new Date().getTime();
     var distance = countDownDate - now;
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
     + minutes + "m " + seconds + "s ";
       


     // If the count down is over, write some text 
     if (days < 0 && days >= -1) {
      clearInterval(x);
       document.getElementById("beforeBirthday").style.display = "none";
      document.getElementById("onBirthday").style.display = "block";
      document.getElementById("afterBirthday").style.display = "none";
     } else if (days < -1) {
      clearInterval(x);
      var bekkiesAge = (((new Date().getTime() - bekkiesBirthday.getTime()) / (1000 * 60 * 60 * 24 * 365))).toFixed(2);
      document.getElementById("currentAge").innerHTML = bekkiesAge + " years old!";
      document.getElementById("beforeBirthday").style.display = "none";
      document.getElementById("onBirthday").style.display = "none";
      document.getElementById("afterBirthday").style.display = "block";
     } else {
      document.getElementById("beforeBirthday").style.display = "block";
      document.getElementById("onBirthday").style.display = "none";
      document.getElementById("afterBirthday").style.display = "none";
     }
   }, 1000);
}


async function updateDescription(elementName) {
   document.getElementById("descriptionid").innerHTML = elementName;




   await sleep(1500);
}

  function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}


function buttonClicked() {
      var password = new String(document.getElementById("password").value).toLowerCase();


   if(password == "thesteamcrane") {
      document.getElementById("loveMessage").style.display = "block";
      document.getElementById("passwordAndButton").style.display = "none";
      document.getElementById("loveMessage").innerHTML = "I just wanted to say, that I love you. <br>Severely.<br><br> You're my favourite person.<br> You're lovely, kind, smart, beautiful and I'm so lucky to have met you. <br>I miss you. I cherish every second I spend with you, so I just want to continue spending them with you. ❤️🍅"
   } else {
      document.getElementById("wrongPassword").style.display = "block";
   }
   
}



