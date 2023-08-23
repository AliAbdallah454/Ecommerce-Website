export default function NavbarIcon({ image, onClick }) {

    return (

        <button onClick={ onClick }>
            <img src={ image } alt="" className="w-7 h-7 mx-3 hover:border-b-2 hover:border-black hover:transition-all hover:ease-in" />
        </button>

    )

}