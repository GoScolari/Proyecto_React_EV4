import { useCart } from '../hooks/useCart.js'
import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className="footer">
            {/* Filtros aplicados */}
            {
                JSON.stringify(filters, null, 2)
            }

            {/* Productos agregados al carrito */}
            {/* {
                JSON.stringify(cart, null, 2)
            } */}

        </footer>
    )
}