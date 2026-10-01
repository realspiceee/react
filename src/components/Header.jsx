import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <p>for communicate</p>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/profile">Профиль</Link>
                <Link to="/settings">Настройки</Link>
                <Link to="/info">Информация</Link>
            </nav>
        </header>
    )
}

export default Header;