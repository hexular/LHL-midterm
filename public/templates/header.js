/*
  always: logo and app name

  when logged out:
    register
    login
  when logged in:
    user name, or restaurant name
      if user name -> cart icon
      if restaurant -> just name
*/


$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("nav").remove();
    let header;
    if (!user) {
      header = $(`<nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" id="brand" href="#">LitApp.JS</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarToggler">
                      <div class="user-actions ml-auto d-flex flex-column flex-lg-row">
                        <button id="register-btn" class="btn btn-outline-secondary my-2 my-lg-0 ml-0 ml-lg-2">Register</button>
                        <button id="login-btn" class="btn btn-outline btn-login my-2 my-lg-0 ml-0 ml-lg-2">Login</button>
                      </div>
                    </div>
                  </nav>`);
    } else {
      header = $(`<nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" id="brand" href="#">LitApp.JS</a>
      <p>Hello ${currentUser.name ? currentUser.name : currentUser.title}</p>
      <div>
        <button>Logout</button>
      </div>
      </div>
    </nav>`);
    }

    $pageHeader.append(header);
  }

  updateHeader(undefined);

  window.header.update = updateHeader;

  function getMyDetails() {
    console.log("getMyDetails");
    return $.ajax({
      url: "/users/me",
    });
  }


  getMyDetails()
    .then(function( json ) {
    updateHeader(json.user);
  });

  // $("header").on("click", '.my_reservations_button', function() {
  //   propertyListings.clearListings();
  //   getAllReservations()
  //     .then(function(json) {
  //       propertyListings.addProperties(json.reservations, true);
  //       views_manager.show('listings');
  //     })
  //     .catch(error => console.error(error));
  // });
  // $("header").on("click", '.my_listing_button', function() {
  //   propertyListings.clearListings();
  //   getAllListings(`owner_id=${currentUser.id}`)
  //     .then(function(json) {
  //       propertyListings.addProperties(json.properties);
  //       views_manager.show('listings');
  //   });
  // });

  // $("header").on("click", '.home', function() {
  //   propertyListings.clearListings();
  //   getAllListings()
  //     .then(function(json) {
  //       propertyListings.addProperties(json.properties);
  //       views_manager.show('listings');
  //   });
  // });

  $("header").on('click', '#brand', function(event) {
    event.preventDefault();
    views_manager.show('food_options');
  });

  $("header").on('click', '#login-btn', () => {
    console.log('login btn click')
    views_manager.show('logIn');
  });

  $("header").on('click', '#register-btn', () => {
    console.log('register btn click')
    views_manager.show('signUp');
  });

  $("header").on('click', '.logout_button', () => {
    logOut().then(() => {
      header.update(null);
    });
  });

  // $('header').on('click', '.create_listing_button', function() {
  //   views_manager.show('newProperty');
  // });

});
