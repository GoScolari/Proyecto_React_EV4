import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Filters.css'

export function Filters () {
    const { filters,busqueda, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    
    const handleChangeInput = e => {
        setFilters(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value}))
            console.log("busqueda: "+e.target.value)
    }

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory=(event)=>{
        setFilters(prevState=>({
            ...prevState,
            category: event.target.value
        }))
    }


    return (
        <section className="filters">
            <section class="containerInput">
                <div className='containerInput2'>
                    <input
                        className='form-control inputBuscar'
                        placeholder='Búsqueda'
                        onChange={handleChangeInput}
                        value={busqueda}
                    />
                    <button className='btn btn-success'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </section>
            <section className='containerFilters'>
                <div className='containerFilters2'>
                    <div class='contenedorPrecio'>
                        <div>
                            <label htmlFor={minPriceFilterId}>Precio </label>
                            <input 
                                type='range'
                                id={minPriceFilterId}
                                min='0'
                                max='1749'
                                onChange={handleChangeMinPrice}
                                value={filters.minPrice}
                            />
                            <span>${filters.minPrice}</span>
                        </div>
                    </div>
                    <div class='contenedorCategoria'>
                        <div>
                            <label htmlFor={categoryFilterId}>Categoría </label>
                            <select id={categoryFilterId} onChange={handleChangeCategory}>
                                <option value="all">Todas</option>
                                <option value="Celulares">Celulares</option>
                                <option value="Computadores">Computadores</option>
                                <option value="Cosméticos">Cosméticos</option>
                                <option value="Decoración">Decoración</option>
                                <option value="Medicamentos">Medicamentos</option>
                                <option value="Perfumes">Perfumes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}