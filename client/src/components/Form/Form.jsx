import style from './Form.module.css'
import rick from '../../assets/rick.jpeg'
import { useState } from "react";
import validation from '../Validation/Validation.js'

const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        // debemos retornar el objeto y copiar lo que estaba antes
        setUserData({
            ...userData,
            [event.target.name]: event.target.value // bracket notations => propiedad del objeto que es variable
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return (
        <div>
            <form className={style.container} onSubmit={handleSubmit}>
                <img className={style.img} src={rick} alt="rick"/>
                <label className={style.label} htmlFor="email">Email: </label>
                <input className={style.input} name="email" type="email" placeholder="Ingresa tu email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p className={style.text}>{errors.email}</p>}
                <label className={style.label} htmlFor="password">Password: </label>
                <input className={style.input} name="password" type="text" placeholder="Ingresa tu password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p className={style.text}>{errors.password}</p>}
                <button className={style.boton}>Submit</button>
            </form>
        </div>
        
    )
}

export default Form;