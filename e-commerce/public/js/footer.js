const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `

    <div class="footer-content">
        <img src="img/logo.png" class="logo-footer" alt="">
        <div class="footer-ul">
            <ul class="category">
                <li class="category-title">psu</li>
                <li><a href="#" class="footer-link">Corsair</a></li>
                <li><a href="#" class="footer-link">EVGA</a></li>
                <li><a href="#" class="footer-link">SeaSonic</a></li>
                <li><a href="#" class="footer-link">Be Quiet</a></li>
                <li><a href="#" class="footer-link">XPG</a></li>
                <li><a href="#" class="footer-link">Gigabyte</a></li>
                <li><a href="#" class="footer-link">Thermaltake</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">gpu</li>
                <li><a href="#" class="footer-link">Nvidia</a></li>
                <li><a href="#" class="footer-link">AMD</a></li>
                <li><a href="#" class="footer-link">ASUS</a></li>
                <li><a href="#" class="footer-link">MSI</a></li>
                <li><a href="#" class="footer-link">Gigabyte</a></li>
                <li><a href="#" class="footer-link">ASRock</a></li>
                <li><a href="#" class="footer-link">Sapphire</a></li>
            </ul>
        </div>
    </div>

    <p class="footer-info-intro"> About our company </p>
    <p class="footer-info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo aperiam animi ullam atque, laboriosam delectus veritatis porro esse, neque deleniti saepe similique labore tenetur doloribus iusto. Possimus, non tempore.</p>
    <p class="footer-info"> For support contact our customers services at xxxxxxxx@xxxxxxxx.xxx</p>
    <p class="footer-info">telephone - xxxxxxx-xxxxxxx</p>
    <div class="footer-socials">
        <div>
            <a href="#" class="social-link"> terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebbok</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credits">Best hardware store in all 5 continents</p>

    `;
}

createFooter();