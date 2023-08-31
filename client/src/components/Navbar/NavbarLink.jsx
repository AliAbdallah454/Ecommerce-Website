import { Link } from "react-router-dom";

export default function NavbarLink({ image, to }) {

    return (

        <Link to={to}>
            <img src={ image } alt="" className="w-7 h-7 mx-3 hover:border-b-2 hover:border-black hover:transition-all hover:ease-in" />
        </Link>

    )

}