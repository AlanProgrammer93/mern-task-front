import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext';

export const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    const seleccinoarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); //Filtrar las tareas del proyecto clickeado
    }
    
    return (
        <li>
            <button 
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccinoarProyecto(proyecto._id) } >
                {proyecto.nombre}
            </button>
        </li>
    )
}
