// Write your JavaScript code here!

let fuelCheck = null;
let weightCheck = null;
let targetLocation = 

fetch("https://handlers.education.launchcode.org/static/planets.json").then(
   function(response){
      response.json().then(function(json){       
         targetLocation = json[Math.floor(Math.random() * (json.length))]; 

         document.getElementById("missionTarget").innerHTML =
         `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${targetLocation.name}</li>
            <li>Diameter: ${targetLocation.diameter}</li>
            <li>Star: ${targetLocation.star}</li>
            <li>Distance from Earth: ${targetLocation.distance}</li>
            <li>Number of Moons: ${targetLocation.moons}</li>
         </ol>
         <img src="${targetLocation.image}"></img>`;        
      });
   });

 
window.addEventListener("load", function() {
   let form = this.document.querySelector("form");
   form.addEventListener("submit", function(event) {

      fuelCheck = false;
      weightCheck = false;

      let pilot = document.getElementById("pilotName").value;
      let copilot = document.getElementById("copilotName").value;
      let fuel = document.getElementById("fuelLevel").value;
      let weight = document.getElementById("cargoWeight").value;

      if (pilot ==='' || copilot === '' || fuel ==='' || weight ==='' ){
         alert ("All fields are reqired!");
         event.preventDefault();
      } else
      
      if (!isNaN(pilot) || !isNaN(copilot) || isNaN(fuel) || isNaN(weight)){
         alert ("Make sure to enter valid information for each field!");
         event.preventDefault();
      } else

      {
         document.getElementById("faultyItems").style.visibility = "visible";

         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

         if (fuel < 10000){
            document.getElementById("fuelStatus").innerHTML = "Fuel level to low for launch";    
            event.preventDefault();
         }
         else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level acceptable for launch";
            fuelCheck = true;
         }

         if (weight > 10000){
            document.getElementById("cargoStatus").innerHTML ="Cargo mass too high for launch";
            event.preventDefault();
         }
         else {
            document.getElementById("cargoStatus").innerHTML ="Cargo mass low enogh for launch";
            weightCheck = true;
         }
           

         if (fuelCheck === true && weightCheck === true){
            document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
         }
         else{
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
         }
         event.preventDefault();
      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
