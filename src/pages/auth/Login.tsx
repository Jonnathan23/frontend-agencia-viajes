
export default function LoginPage() {
    return (
        <>
            <h1>Iniciar sesion</h1>
            <form>
                <div>
                    <label htmlFor="usr_email">Email</label>
                    <input type="email" name="usr_email" id="usr_email" placeholder="Ej. ejemplo@gmail.com" />
                </div>
                <div>
                    <label htmlFor="usr_password">Contraseña</label>
                    <input type="password" name="usr_password" id="usr_password" placeholder="Contraseña" />
                </div>
            </form>

        </>
    );
}
