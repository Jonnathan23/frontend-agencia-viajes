import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";

export default function CustomerHeader() {
    return (
        <header className="app-travels--header">
            <div className="">
                <Link to="/">
                    <h1>SafeShip</h1>
                </Link>
            </div>
            <nav className="app-travels--header--nav">
                <Link to="/">Pagos</Link>
                <div>
                    <NavMenu />
                </div>
            </nav>
        </header>
    );
}
