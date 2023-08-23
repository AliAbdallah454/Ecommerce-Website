import { NavLink } from 'react-router-dom'

export default function MenuLink({text, url}) {

    const activeClassName = "font-bold border-l-3 border-wilsonRed"
    const nonActiveClassName = "border-l-0  "

    return (

        <div>
            <NavLink to={ url } className={({ isActive }) => isActive ? activeClassName : nonActiveClassName}>
                <p className='px-4 py-1 underline inline-block'>{ text }</p>
            </NavLink>         
        </div>
    )
}
