
const Header = () => {
    return (
        <nav className="flex justify-center items-center fixed top-3 w-full z-10">
            <ul className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <li>
                    <a className="nav-item" href="#">Home</a>
                </li>
                <li>
                    <a className="nav-item" href="#">Projects</a>
                </li>
                <li>
                    <a className="nav-item" href="#">About</a>
                </li>
                <li>
                    <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header