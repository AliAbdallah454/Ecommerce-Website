export default function FooterWord({ text, onclick }) {

    return(

        <button onClick={ () => alert("Footer clicked") }>
            <p className="text-sm text-gray-500 hover:text-gray-800">{ text }</p>
        </button>

    )

}