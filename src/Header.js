import './Header.css'
import Logo from "./Logo";
import Navbar from "./Navbar";

const header =() =>{
    return (
<div className='shop'>
    <div className='container'>
        <div className='header'>
            <Logo />
            <Navbar />
        </div>
    </div>

</div>
    )
}
export default header