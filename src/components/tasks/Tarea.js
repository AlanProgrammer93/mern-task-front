import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

export const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareasContext;

    const [proyectoActual] = proyecto;
    // proyecto[0]

    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual.id);
    }

    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        actualizarTarea(tarea);
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                        ?   (
                                <button 
                                    type="button"
                                    className="completo"
                                    onClick={() => cambiarEstado(tarea)} >
                                    Completo
                                </button>
                            )
                        :   (
                            <button 
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)} >
                                Incompleto
                            </button>
                            )
                }
            </div>
            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}>
                    Editar
                </button>

                <button 
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea._id)}>
                    Eliminar
                </button>
            </div>
        </li>
    )
}
