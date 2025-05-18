/**
 * @description Pagina de MiPerfil
 */
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function MyProfile() {
    const [user, setUser] = useState({
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'juan.perez@example.com',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [tempUser, setTempUser] = useState(user);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setTempUser({ ...tempUser, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setUser(tempUser);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempUser(user);
        setIsEditing(false);
    };

  return (
    <div className="myprofile-container">
      <div className="myprofile-avatar">
        {user.nombre.charAt(0)}
        {user.apellido.charAt(0)}
      </div>


            <h2 className="myprofile-title">Mi Perfil</h2>

            <div className="myprofile-info">
                <div className="myprofile-info-row">
                    <span className="myprofile-label">Nombre</span>
                    {isEditing ? (
                        <input
                            className="myprofile-input"
                            name="nombre"
                            value={tempUser.nombre}
                            onChange={handleChange}
                        />
                    ) : (
                        <span className="myprofile-value">{user.nombre}</span>
                    )}
                </div>

                <div className="myprofile-info-row">
                    <span className="myprofile-label">Apellido</span>
                    {isEditing ? (
                        <input
                            className="myprofile-input"
                            name="apellido"
                            value={tempUser.apellido}
                            onChange={handleChange}
                        />
                    ) : (
                        <span className="myprofile-value">{user.apellido}</span>
                    )}
                </div>

                <div className="myprofile-info-row">
                    <span className="myprofile-label">Correo</span>
                    {isEditing ? (
                        <input
                            className="myprofile-input"
                            name="correo"
                            value={tempUser.correo}
                            onChange={handleChange}
                        />
                    ) : (
                        <span className="myprofile-value">{user.correo}</span>
                    )}
                </div>
            </div>

            <div className="myprofile-actions">
                {isEditing ? (
                    <>
                        <button className="myprofile-btn myprofile-btn--save" onClick={handleSave}>
                            Guardar
                        </button>
                        <button className="myprofile-btn myprofile-btn--edit" onClick={handleCancel}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <button className="myprofile-btn myprofile-btn--edit" onClick={() => setIsEditing(true)}>
                        <PencilIcon className="myprofile-btn--icon" width={20} /> Editar
                    </button>
                )}
            </div>
        </div>
    );
}