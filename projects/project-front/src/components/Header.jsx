import { Filters } from './Filters.jsx'

export function Header () {
    return (
        <header>
            <h1>Proyecto React</h1>
            <h2>Xavier Barrera - Cristian Henríquez - Gonzalo Scolari</h2>

            {<Filters />}
        </header>
    )
}