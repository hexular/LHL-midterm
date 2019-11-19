function getMyDetails() {
  return $.ajax({
    url: "api/users/me",
  });
}

function logOut() {
  return $.ajax({
    method: "POST",
    url: "api/users/logout",
  })
}

function logIn(data) {
  return $.ajax({
    method: "POST",
    url: "api/users/login",
    data
  });
}

function signUp(data) {
  return $.ajax({
    method: "POST",
    url: "/users",
    data
  });
}

function showMenu() {
  return $.ajax({
    url: "api/restaurants/me"
  })
}

function findOrders(restaurantId) {
  return $.ajax({
    url: "/orders",
    data: restaurantId
  })
}

function submitOrder(data) {
  return $.ajax({
    method: "POST",
    url: "/restaurants"
  })
}

function updateOrder(order_id, status) {
  return $.ajax({
    method: "POST",
    url: `orders/${order_id}`,
    data: { status: status }
  })
}
