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

        let customersDiv = document.querySelector('.customers');
        let resultsArr = data.results;

        function markup() {
          let image = resultsArr[i].picture.large;
          let fullName = resultsArr[i].name.first + ' ' + data.results[i].name.last;
          let email = resultsArr[i].email;
          let street = resultsArr[i].location.street;
          let location = resultsArr[i].location.city + ", " + data.results[i].location.state + " " + data.results[i].location.postcode;
          let phone = resultsArr[i].phone;
          let markup =

            `
              <div class= customer">
                <img src='${image}'</img>
                <p class='name'><span>${fullName}</span></p>
                <p class='email'>${email}</p>
                <p class='street'>${street}</p>
                <p class='location'>${location}</p
                <p class='phone'>${phone}</p>
              </div>
            `
            return markup;
        }

        for (var i=0; i<12; i++) {

        customersDiv.innerHTML += markup();

      }
    })
})
