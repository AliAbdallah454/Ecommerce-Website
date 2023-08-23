import { NavLink } from "react-router-dom"

export default function NavbarIcon({ text, url }) {

    return(
        <NavLink to={ url }>
            <p className="py-4 px-3 m-3 bg-white text-lg font-extrabold hover:border-b-2 hover:border-black hover:transition-all hover:ease-in">{ text }</p>
        </NavLink>
    )

}