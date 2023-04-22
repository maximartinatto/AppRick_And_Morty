import style from './About.module.css';

const About = () => {
    return(
        <div className={style.container}>
            <h1>App Rick & Morty</h1>
            <h2>¿Quien soy?</h2>
            <p>Me llamo Maximiliano, soy programador en sistemas administrativos
               Actualmente estoy cursando la tecnicatura superior en desarrollo de software.
               Mis objetivos como futuro desarrollador de software es especializarme en desarrollo web, 
               aunque me gusta mucho el desarrollo frontend, me interesa mejorar y ampliar mis conocimientos
               en desarrollo backend. 
            </p>
        </div>
    )
}
export default About;