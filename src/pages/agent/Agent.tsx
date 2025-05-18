export default function AgentPage() {
  return (
    <div className="agent--page">
      <div className="agent--header">
        <h1>Registro de vuelos</h1>
        <p>Completa el formulario para agregar un nuevo vuelo al sistema.</p>
      </div>

      <div className="agent--content">
        <form className="form--register">
          <div className="form--group">
            <label htmlFor="flight-number">Número de vuelo</label>
            <input type="text" id="flight-number" placeholder="AA-1234" />
          </div>

          <div className="form--group">
            <label htmlFor="origin">Origen</label>
            <select id="origin">
              <option value="">Seleccionar ciudad</option>
              <option value="bogota">Bogotá</option>
              <option value="medellin">Medellín</option>
              <option value="cali">Cali</option>
            </select>
          </div>

          <div className="form--group">
            <label htmlFor="destination">Destino</label>
            <select id="destination">
              <option value="">Seleccionar ciudad</option>
              <option value="cartagena">Cartagena</option>
              <option value="pereira">Pereira</option>
              <option value="barranquilla">Barranquilla</option>
            </select>
          </div>

          <div className="form--group--double">
            <div>
              <label htmlFor="departure">Hora de salida</label>
              <input type="datetime-local" id="departure" />
            </div>
            <div>
              <label htmlFor="arrival">Hora de llegada</label>
              <input type="datetime-local" id="arrival" />
            </div>
          </div>

          <div className="form--group--double">
            <div>
              <label htmlFor="seats">Asientos totales</label>
              <input type="number" id="seats" min={0} />
            </div>
            <div>
              <label htmlFor="price">Precio</label>
              <input type="number" id="price" min={0} />
            </div>
          </div>

          <div className="form--group">
            <label htmlFor="active">¿Activo?</label>
            <select id="active">
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          <button className="btn--register">Registrar vuelo</button>
        </form>
      </div>
    </div>
  );
}
