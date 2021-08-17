import './Navbar.css'
const Navbar = ()=>{
    return (
        <ul className="nav">
            <li>
                <a href="#" className='menu'>Доставка</a>
            </li>
            <li>
                <a href="#" className='menu'>Оплата</a>
            </li>
            <li>
                <a href="#" className='menu'>Отзывы</a>
            </li>
            <li>
                <a href="#" className='menu'>Вопрос - ответ</a>
            </li>
            <li>
                <a href="#" className='menu'>Контакты</a>
            </li>
        </ul>
    )
}
export default Navbar