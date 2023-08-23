export default function BulletPoint({ image, text }) {

    return(

        <div className='py-3 flex justify-start'>
            <img src={ image } alt="hey" className='h-6 w-6' />
            <span className='px-6 font-bold hover:text-wilsonRed transition-all ease-in'>{ text }</span>
        </div>

    )

}