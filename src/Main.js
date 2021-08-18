import Card from "./Card";
import './Main.css'

const Main = () => {
    return (
        <div className="section">
            <div className='container'>
                <div>
                    <h2 className='main-title'>Shop</h2>
                    <p className='main-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main