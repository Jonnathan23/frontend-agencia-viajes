import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function CustomerHeader() {
    return (
        <header className="app-travels--header">
            <div className="app-travels--header--container--logo">
                <Link className="app-travels--header--logo" to="/">
                    <h1>Safeship</h1>
                </Link>
            </div>
            <nav className="app-travels--header--nav">
                <form className="app-travels--header--nav--search">
                    <input className="app-travels--header--nav--search--input" type="text" placeholder="Buscar vuelos" />
                    <button className="app-travels--header--nav--search--button" type="submit">
                        <MagnifyingGlassIcon className="app-travels--header--nav--search--icon" />
                    </button>
                </form>
                <div>
                    <NavMenu />
                </div>
            </nav>
        </header>
    );
}
