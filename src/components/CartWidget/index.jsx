import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import "./CartWidget.css"

function CartWidget ({cantidad}) {
    return (
        <div>
            <FontAwesomeIcon className='cart' icon={faCartShopping} /> <div className='dot counter'>{cantidad}</div>
        </div>
    )
}

export default CartWidget