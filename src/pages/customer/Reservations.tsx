
export default function ReservationPage() {
    return (
        <main>
            <section>
                <h2>Vuelo {/*TODO: flight name */}</h2>
                <p>Detalles acerca del vuelo</p>
            </section>

            <form action="">
                <div>
                    <label htmlFor="usr_email">Selecionar</label>
                    <input type="email" name="usr_email" id="usr_email" placeholder="Ej. ejemplo@gmail.com" />
                </div>
                <div>
                    <label htmlFor="usr_email">Email</label>
                    <input type="email" name="usr_email" id="usr_email" placeholder="Ej. ejemplo@gmail.com" />
                </div>
                <button>Reservar</button>
            </form>
        </main>
    );
}
