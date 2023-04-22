import style from "./Nav.module.css"
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch,  setAcces }) => {

    const handleLogOut = () =>{
        setAcces(false)
    }

    return (
        <nav className={style.nav}>

            <div className={style.btn}>
                <Link className={style.NavLink} to='/about'> ABOUT </Link>
                <Link className={style.NavLink} to='/home'> HOME </Link>
                <Link className={style.NavLink} to='/favorites'>FAVORITES</Link>
                
            </div>
            <SearchBar className={style.Search}onSearch={onSearch}/>
            <button className={style.Click} onClick={handleLogOut}>LOG OUT</button>

        </nav>
    )
}

export default Nav;