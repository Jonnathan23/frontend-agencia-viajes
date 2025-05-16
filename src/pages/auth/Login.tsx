import { useState } from "react";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <div className={`panels-container ${isLogin ? "" : "reversed"}`}>
                <div className="panel panel--left">
                    {isLogin ? (
                        <div className="cont--form">
                            <h1 className="auth--title">Iniciar sesion</h1>
                            <form className="form--login">
                                <div className="cont--field">
                                    <label className="label--field" htmlFor="usr_email">Email</label>
                                    <input className="field" type="email" name="usr_email" id="usr_email" placeholder="Ej. ejemplo@gmail.com" />
                                </div>
                                <div className="cont--field">
                                    <label className="label--field" htmlFor="usr_password">Contraseña</label>
                                    <input className="field" type="password" name="usr_password" id="usr_password" placeholder="Contraseña" />
                                </div>
                                <div className="cont--button">
                                    <button className="button">Ingresar</button>
                                </div>
                            </form>

                        </div>
                    ) : (
                        <div className="cont--form">
                            <h1 className="auth--title">Registrarse</h1>
                            <form>
                                <div>
                                    <label htmlFor="usr_email">Email</label>
                                    <input type="email" name="usr_email" id="usr_email" placeholder="Ej. ejemplo@gmail.com" />
                                </div>
                                <div>
                                    <label htmlFor="usr_email">Nombre de usuario</label>
                                    <input type="email" name="usr_email" id="usr_email" placeholder="Ej. ejemplo@gmail.com" />
                                </div>
                                <div>
                                    <label htmlFor="usr_password">Contraseña</label>
                                    <input type="password" name="usr_password" id="usr_password" placeholder="Contraseña" />
                                </div>
                                <div>
                                    <label htmlFor="usr_password">Confirmar contraseña</label>
                                    <input type="password" name="usr_password" id="usr_password" placeholder="Contraseña" />
                                </div>
                                <button >Registrarse</button>
                            </form>
                        </div>)}
                </div>

                <div className="panel panel--right">
                    {isLogin ?
                        (
                            <button className="button--no-account" onClick={() => setIsLogin(false)}>No tengo Cuenta</button>
                        ) : (
                            <button onClick={() => setIsLogin(true)}>Ya tengo Cuenta</button>
                        )}
                </div>
            </div>
        </>
    );
}
