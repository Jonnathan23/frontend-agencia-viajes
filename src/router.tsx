import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTravels from "./layouts/AppTravels";
import CustomerPage from "./pages/customer/CustomerPage";
import Auth from "./layouts/Auth";
import LoginPage from "./pages/auth/Login";
import ReservationPage from "./pages/customer/Reservations";
import MyProfile from "./pages/customer/MyProfile.tsx";
import AgentPage from "./pages/agent/Agent.tsx";
import AddFlight from "./pages/agent/fligths/AddFlight.tsx";
import EditFlight from "./pages/agent/fligths/EditFlight.tsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route element={<AppTravels />}>
                        <Route path="/" element={<CustomerPage />} index/>
                        <Route path="/reservation/flight-id" element={<ReservationPage />}/>
                        <Route path="/MyProfile" element={<MyProfile />} />
                        <Route path="/agent" element={<AgentPage />} />
                        <Route path="/agent/add-flight" element={<AddFlight />} />
                        <Route path="/agent/edit-flight" element={<EditFlight />} />
                    </Route>
                    <Route element={<Auth />}>
                        <Route path="/login" element={<LoginPage />} />
                    </Route>                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}