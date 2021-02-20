import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext';
import { Tarea } from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const ListadoTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;

    if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (
        <>
            <h2>Proyecto: { proyectoActual.nombre }</h2>
            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0 
                        ? (<li className="tarea"><p>No Hay Tareas</p></li>)
                        : <TransitionGroup>
                            {
                                tareasproyecto.map(tarea => (
                                    <CSSTransition
                                        key={tarea._id}
                                        timeout={200}
                                        classNames="tarea"
                                    >
                                        <Tarea
                                            tarea={tarea}
                                        />
                                    </CSSTransition>
                                ))
                            }
                          </TransitionGroup>
                }
            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}>
                Eliminar Proyecto &times;
            </button>
        </>
    )
}
