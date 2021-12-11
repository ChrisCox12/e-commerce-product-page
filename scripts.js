const sidebar = document.querySelector('.sidebar');
const cart = document.querySelector('.cart');
const product_images = document.querySelector('.product-images');
const images = Array.from(product_images.children);
const carousel = document.querySelector('.carousel');
const carousel_width = carousel.getBoundingClientRect().width;
const product_images_children = product_images.children;
const next_button = document.querySelector('.carousel__button.next-arrow');
const prev_button = document.querySelector('.carousel__button.prev-arrow');

//  arranges the images to be positioned next to each other
//  *    triggers on load    *
images.forEach((image, index) => {
    image.style.left = (carousel_width * index) + 'px';
});

//  for displaying and hiding the sidebar
//  *   hidden by default   *
function toggleSidebar() {
    if(sidebar.classList.contains('toggled--Sidebar')) {
        sidebar.classList.remove('toggled--Sidebar');
    }
    else {
        sidebar.classList.add('toggled--Sidebar');
    }
}

//  for displaying and hiding the cart
//  *   hidden by default   *
function toggleCart() {
    if(cart.classList.contains('toggled--Cart')) {
        cart.classList.remove('toggled--Cart');
    }
    else {
        cart.classList.add('toggled--Cart');
    }
}

//  displays the next image available
function nextImage() {
    const currentImage = product_images.querySelector('.current-image');
    const nextImage = currentImage.nextElementSibling;

    currentImage.classList.remove('current-image');
    nextImage.classList.add('current-image');

    moveImages(nextImage);
}

//  displays the previous image available
function prevImage() {
    const currentImage = product_images.querySelector('.current-image');
    const prevImage = currentImage.previousElementSibling;

    currentImage.classList.remove('current-image');
    prevImage.classList.add('current-image');

    moveImages(prevImage);
}

//  moves the list of images to display the right image
function moveImages(targetImage) {
    const amountToMove = targetImage.style.left;

    //  handles double negatives automatically, converting them to positives
    //  so, no need to check for positive or negative values
    product_images.style = 'transform: translateX(-' + amountToMove + ')';
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