function Header() {
    return <div className="navbar-fixed">
        <nav className="green lighten-1">
            <div className="nav-wrapper">
                {/* eslint-disable-next-line  */}
                <a href="/food_project" className="brand-logo">React Food</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/AnnaBredikhina/food_project">Repo</a></li>
                </ul>
            </div>
        </nav>
    </div>
}

export { Header };