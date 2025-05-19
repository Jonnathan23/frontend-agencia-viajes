import { use } from "react";
import AddFlight from "./fligths/AddFlight";
import { useNavigate } from "react-router-dom";

export default function AgentPage() {

    const navigate = useNavigate();

    const handleAddFlight = () => navigate("/agent/add-flight");
    const handleEditFlight = () => navigate("/agent/edit-flight");

    return (
        <div className="agent--page">
            <div className="agent--header">
                <h1>Registro de vuelos</h1>
                <p>Completa el formulario para agregar un nuevo vuelo al sistema.</p>
            </div>

            <div className="agent--content">
                <button onClick={handleAddFlight}  >Agregar Vuelo</button>
                <button onClick={handleEditFlight}  >Edita Vuelo Vuelo</button>
            </div>
        </div>
    );
}
