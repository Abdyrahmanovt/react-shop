import Rating from "./Rating";
import './Card.css'
const Card = () => {
    return (
        <div className='box-card'>
            <div>
                <h4 className='card-title'>LOREM IPSUM</h4>
                <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <Rating />
        </div>
    )
}
export default Card