
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
        <img src="img/logo.png" class="corpo-logo" alt="">
        <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="btnS"><a href="search.html">search</a></button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>

    <ul class="links-container">
        <li class="link-item"><a href="index.html" class="link">home</a></li>
        <li class="link-item"><a href="product.html" class="link">cpus</a></li>
        <li class="link-item"><a href="product.html" class="link">gpus</a></li>
        <li class="link-item"><a href="product.html" class="link">storage</a></li>
        <li class="link-item"><a href="product.html" class="link">cases</a></li>
    </ul>
    `;
}

createNav();