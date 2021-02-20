import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault();
        
        if (nombre === '') {
            mostrarError();
            return;
        }

        agregarProyecto(proyecto);

        setProyecto({
            nombre: ''
        })
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()} >
                Nuevo Proyecto
            </button>
            {
                formulario 
                    ?   (
                            <form
                                className="formulario-nuevo-proyecto"
                                onSubmit={onSubmitProyecto} >
                                <input 
                                    type="text"
                                    className="input-text"
                                    placeholder="Nombre Del Proyecto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeProyecto} />
                                <input 
                                    type="submit"
                                    className="btn btn-primario btn-block"
                                    value="Agregar Proyecto" />
                            </form>
                        )
                    : null
            }

            { errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio.</p> : null }
        </>
    )
}
