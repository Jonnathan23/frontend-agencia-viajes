import { Link } from "react-router-dom";

export default function AgentHeader() {
    return (
        <header className="app-travels--header">
            <div className="w-64 lg:ml-16">
                <Link to="/">
                    {
                        // TODO: the logo has to be added
                    }
                </Link>
            </div>
            <nav>
                <nav className="lg:mr-16">
                    <a href=""></a>
                </nav>
            </nav>
        </header>
    );
}
