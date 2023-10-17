import "./stylepayitem.css"

function PaymentMethoditem(props) {
  return (
      <div className="methoditem">
          <div className="methodimg">
              <img src={props.imgsrc} alt="" />
          </div>
          <div className="methodname">
              {props.name}
          </div>
    </div>
  )
}

export default PaymentMethoditem