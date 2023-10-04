import StepperCta from "../Stepper/StepperCta";

function CartCard() {
  return (
    <div className="cart-card">
      <div className="cart-card-body">
        <div className="content-start">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" />
        </div>
        <div className="content-end">
          <h6 className="fw-bold">Chicken Biriyani</h6>
          <p className="fw-500 text-grey text-sm">Biriyani</p>
          <div className="clearfix-10"></div>
          <StepperCta />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
