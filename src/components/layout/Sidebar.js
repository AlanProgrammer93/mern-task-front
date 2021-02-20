import React from 'react'
import { ListadoProyecto } from '../proyects/ListadoProyecto'
import { NuevoProyecto } from '../proyects/NuevoProyecto'

export const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyecto />
            </div>
        </aside>
    )
}
