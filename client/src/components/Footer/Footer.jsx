import FooterWord from "./FooterWord"

export default function Footer() {

    return(

        <div>
    
            <div className='h-20'></div>
    
            <footer>
    
                <div className='p-4 flex border-t-2 border-gray-300'>
    
                    <div className='w-6/12 flex justify-between items-center'>
                        <FooterWord text="Privacy Policy"/>
                        <FooterWord text="Terms of use"/>
                        <FooterWord text="Terms of sale"/>
                        <FooterWord text="CA transparency"/>
                        <FooterWord text="Cookies"/>
                    </div>
    
                </div>
    
            </footer>
    
        </div>
    )

}