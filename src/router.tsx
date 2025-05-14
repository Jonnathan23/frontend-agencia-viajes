import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTravels from "./layouts/AppTravels";
import CustomerPage from "./pages/customer/CustomerPage";
import Auth from "./layouts/Auth";
import LoginPage from "./pages/auth/Login";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route element={<AppTravels />}>
                        <Route path="/" element={<CustomerPage />} index/>
                    </Route>
                    <Route element={<Auth />}>
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
