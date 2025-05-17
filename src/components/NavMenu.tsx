import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function NavMenu() {

    const handleLogout = () => console.log('logout');

        return (
            <Popover className="popover">
                <Popover.Button className="popover--button">
                    <Bars3Icon className='popover--button--bars-icon' />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="popover--transition--enter"
                    enterFrom="popover--transition--enter-from"
                    enterTo="popover--transition--enter-to"
                    leave="popover--transition--leave"
                    leaveFrom="popover--transition--leave-from"
                    leaveTo="popover--transition--leave-to"

                >
                    <Popover.Panel className="popover--panel">
                        <div className="popover--panel--content">
                            <p className='popover--panel--message'>Hola: {/*TODO: USERNAME */}</p>
                            <Link
                                to='/MyProfile'
                                className='popover--panel--link'
                            >Mi Perfil</Link>
                            <Link
                                to='/'
                                className='popover--panel--link'
                            >Mis Reservaciones</Link>
                            <button
                                className='popover--panel--link popover--panel--link--logout'
                                type='button'
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        );
    }
