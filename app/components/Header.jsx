
export default function Header(){
    return(
        <header class="header">
        <div class="containers">
            <div class="main-menu">
                
                <div class="logo-text">

                    <img src="/logo-icons.png" alt="" />
                    <p>vkmerd</p>
                </div>

                <nav class="bar-menu">
                    <ul>
                        <li class="menu-item"><a href="#" class="menu-item-btn">Anasayfa</a></li>
                        <li class="menu-item"><a href="#" class="menu-item-btn">Hakkımda</a></li>
                        <li class="menu-item"><a href="#" class="menu-item-btn">Projelerim</a></li>
                        <li class="menu-item"><a href="#" class="menu-item-btn">İletişim</a></li>
                    </ul>
                </nav>

                <a href="#" class="cta-btn">Bana Ulaş!</a>
                
                <div class="hamburger-menu">
                </div>

            </div>
            <div class="side-menu">
                <ul>
                    <li class="menu-item"><a href="#" class="menu-item-btn">Anasayfa</a></li>
                    <li class="menu-item"><a href="#" class="menu-item-btn">Hakkımda</a></li>
                    <li class="menu-item"><a href="#" class="menu-item-btn">Projelerim</a></li>
                    <li class="menu-item"><a href="#" class="menu-item-btn">İletişim</a></li>
                </ul>
            </div>
        </div>
        </header>
    )
}