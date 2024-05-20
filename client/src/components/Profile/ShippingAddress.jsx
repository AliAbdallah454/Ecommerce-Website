import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Menu from './Menu'
import Form from './Form'
import ProfileButton from './ProfileButton'

export default function ShippingAddress() {

    const navigate = useNavigate()

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
        "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
        "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
        "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North",
        "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
        "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
        "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
        "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
        "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
      
    let [firstName, setFirstName] = useState('')
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    let [lastName, setLastName] = useState('')
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    let [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    let [country, setCountry] = useState('')
    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    let [street1, setStreet1] = useState('')
    const handleStreet1 = (event) => {
        setStreet1(event.target.value)
    }

    let [street2, setStreet2] = useState('')
    const handleStreet2 = (e) => {
        setStreet2(e.target.value)
    }

    let [city, setCity] = useState('')
    const handleCity = (e) => {
        setCity(e.target.value)
    }

    let [state, setState] = useState('')
    const handleState = (e) => {
        setState(e.target.value)
    }

    let [zipCode, setZipCode] = useState('')
    const handleZipCode = (e) => {
        setZipCode(e.target.value)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const newAddress = {
            country: country,
            street1: street1,
            street2: street2,
            city: city,
            state: state,
            zipCode: zipCode
        }

        const info = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            newAddress: newAddress,
        }

        const response = await axios.post("http://localhost:3001/userinfo/updateaddress", info, { withCredentials: true })
        if(response.data.status === "ok"){
            alert(response.data.message)
        } 
        else{
            alert(response.data.message)
            navigate("/login")
        }

    }

    useEffect(() => {

        const fetchData = async () => {
            console.log('in useeffect')
            const response = await axios.get("http://localhost:3001/userinfo/getallinfo", { withCredentials: true })
            const user = response.data.user
            console.log(user)
            
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setPhoneNumber(user.phoneNumber)
            setCity(user.address.city)
            setCountry(user.address.country)
            setStreet1(user.address.street1)
            setStreet2(user.address.street2)
            setState(user.address.state)
            setZipCode(user.address.zipCode)

        }

        fetchData()

    }, [])

    return(

        <div className="flex">
            
            <div className='mt-10 flex justify-center w-4/12 h-96'>
                <Menu />
            </div>
            <div className='py-10 w-8/12'>
                <div className="flex flex-col items-center">
                    <h1 className='pb-7 font-extrabold text-4xl'>Sipping Address</h1>
                    <Form value={ firstName } text="First Name" type="text" onChange={ handleFirstName } />
                    <Form value={ lastName } text="Last Name" type="text" onChange={ handleLastName } />
                    <Form value={ phoneNumber } text="Phone Number" type="text" onChange={ handlePhoneNumber } />
                    <div className='p-2'></div>
                    <div className="pb-3">
                        <p className="font-bold">Country</p>
                        <select onChange={handleCountry} className="w-88 h-11 font-sans px-3 outline-none border-1 border-black" name="countries" id="countries">
                            {countries.map(c => c === country ? <option selected key={ c } value={ c }>{ c }</option> : <option key={ c } value={ c }>{ c }</option>)}
                        </select>
                    </div>
                    <Form value={ street1 } onChange={ handleStreet1 } text="Street Address" type="text" />
                    <Form value={ street2 } onChange={ handleStreet2 } text="" type="text" />
                    <Form value={ city } onChange={ handleCity } text="City" type="text" />
                    <Form value={ state } onChange={ handleState } text="State / Province" type="text" />
                    <Form value={ zipCode } onChange={ handleZipCode } text="Zip Code" type="text" />
            
                    <ProfileButton text="SAVE" onClick={ handleSubmit } />
                </div>
            </div>
        </div>
    )

}