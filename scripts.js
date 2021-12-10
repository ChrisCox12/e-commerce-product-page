const sidebar = document.querySelector('.sidebar');

function toggleSidebar() {
    if(sidebar.classList.contains('toggled--Sidebar')) {
        sidebar.classList.remove('toggled--Sidebar');
    }
    else {
        sidebar.classList.add('toggled--Sidebar');
    }
}

/* const nav__sidebar = document.getElementById("nav__sidebar");
const cart = document.getElementById("cart");

function toggleSidebar() {
    if(nav__sidebar.classList.contains("toggled--Sidebar")) {
        nav__sidebar.classList.remove("toggled--Sidebar");
    }
    else {
        nav__sidebar.classList.add("toggled--Sidebar");
    }
}

function toggleCart() {
    if(cart.classList.contains("toggled--Cart")) {
        cart.classList.remove("toggled--Cart");
    }
    else {
        cart.classList.add("toggled--Cart");
    }
}
 */