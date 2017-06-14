// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element


'use strict';

fetch('https://randomuser.me/api/?results=12')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('There was error! ' + response.status);
        return;
      }

      response.json().then(function(data){
        for (let i=0; i<12; i++){
        let image = data.results[i].picture.large;
        let fullName = data.results[i].name.first + ' ' + data.results[i].name.last;
        // console.log(fullName);
        let email = data.results[i].email;
        // console.log(email);
        let street = data.results[i].location.street;
        // console.log(street);
        let location = data.results[i].location.city + ", " + data.results[i].location.state + " " + data.results[i].location.postcode;
        // console.log(cityStateZip);
        let phone = data.results[i].phone;


        let markup = `


          <div class= customer">
            <img src='${image}'</img>
            <p class='name'><span>${fullName}</span></p>
            <p class='email'>${email}</p>
            <p class='street'>${street}</p>
            <p class='location'>${location}</p>
            <p class='phone'>${phone}</p>
          </div>



        `

        let customersDiv = document.querySelector('.customers');


        customersDiv.innerHTML += markup;


      }
    })
})
