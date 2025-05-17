import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTravels from "./layouts/AppTravels";
import CustomerPage from "./pages/customer/CustomerPage";
import Auth from "./layouts/Auth";
import LoginPage from "./pages/auth/Login";
import ReservationPage from "./pages/customer/Reservations";
import MyProfile from "./pages/customer/MyProfile.tsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route element={<AppTravels />}>
                        <Route path="/" element={<CustomerPage />} index/>
                        <Route path="/reservation/flight-id" element={<ReservationPage />}/>
                    </Route>
                    <Route element={<Auth />}>
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                    <Route element={<MyProfile />}>
                        <Route path="/MyProfile" element={<MyProfile />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
