import React, { useContext, useEffect, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

export const FormTarea = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { 
        tareaseleccionada, 
        errortarea, 
        agregarTarea, 
        validarTarea, 
        obtenerTareas, 
        actualizarTarea,
        limpiarTarea
    } = tareasContext;

    useEffect(() => {
        if (tareaseleccionada !== null) {
            setTarea(tareaseleccionada);
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])

    const [tarea, setTarea] = useState({
        nombre: ''
    })

    const { nombre } = tarea;

    if (!proyecto) return null;

    const [proyectoActual] = proyecto;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        if (tareaseleccionada === null) {
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);

            limpiarTarea();
        }

        obtenerTareas(proyectoActual.id);

        setTarea({
            nombre: ''
        })

    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre De La Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange} />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'} />
                </div>
            </form>
            {
                errortarea  ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>
                            : null
            }
        </div>
    )
}
