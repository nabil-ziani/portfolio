
const Header = () => {
    return (
        <header>
            <nav className="flex justify-center items-center fixed top-5 w-full z-10">
                <ul className="flex justify-center items-center gap-2 p-2.5 border border-white/15 rounded-lg bg-white/10 backdrop-blur">
                    <li>
                        <a className="nav-item" href="#hero">Home</a>
                    </li>
                    <li>
                        <a className="nav-item" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="nav-item" href="#about">About</a>
                    </li>
                    <li>
                        <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header