import './orderCallWork.scss';
import HeaderCallButton from '../HeaderCallButton/HeaderCallButton';


function OrderCallWork() {


    return (
        <div className='ordercall__wrapper'>
            <h3>Замовити дзвінок</h3>
            <form action="submit">
            <input type="tel" id="phone" name="phone"
                pattern="+[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required placeholder='+38(___)___ __ __'/>
            
            <HeaderCallButton name="Замовити дзвінок" width="260"></HeaderCallButton>
            </form>
        </div>
    )
}

export default OrderCallWork;