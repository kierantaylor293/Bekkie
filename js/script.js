var listOfDescriptions = ["Fabulous","Slay","Girl Boss", "Just a Girl", "Queen", "Bew-ree-full", "Wicked af", "The Best"]


$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


 async function updateStuff() {


   for (const element of listOfDescriptions) {
      await updateDescription(element);
   }
   
   updateStuff();
  }


async function updateDescription(elementName) {
   document.getElementById("descriptionid").innerHTML = elementName;
   await sleep(1500);
}

  function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}



