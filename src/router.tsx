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
                    {
                        //Layout AppTravles
                    }
                    <Route element={<AppTravels />}>
                        <Route path="/" element={<CustomerPage />} index/>
                        <Route path="/reservation/flight-id" element={<ReservationPage />}/>
                        <Route path="/my-profile" element={<MyProfile />} />
                    </Route>
                    {
                        //Layout Auth
                    }
                    <Route element={<Auth />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/forgot-password" element={<LoginPage />} />
                    </Route>                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
