import { Outlet } from "react-router-dom";
import CustomerHeader from "../components/headers/CustomerHeader";
import AgentHeader from "../components/headers/AgentHeader";

export default function AppTravels() {
    const isCustomer = true;
    return (
        <div className="app-travels">
            {isCustomer ? <CustomerHeader /> : <AgentHeader />}
            <div>
                <Outlet />
            </div>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}
