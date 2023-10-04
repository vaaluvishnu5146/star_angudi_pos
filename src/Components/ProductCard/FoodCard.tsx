import "./style.scss";
import ButtonC from "../../Elements/Buttons/Button";

export interface Data {
  id?: number;
  title?: String;
  description?: String;
  image?: String;
}

type Props = {
  data: Data;
  isEdit?: Boolean;
  isCart?: Boolean;
  handleEdit?: () => void;
};

export default function ProductCard({
  data,
  isEdit = false,
  isCart = false,
  handleEdit = () => {},
}: Props) {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-md-3 col-lg-3 col-xl-3">
      <div className="content-card">
        <div className="card-header mb-2">
          <div className="card-header-overlay">
            <div className="row">
              {/* CHIP HERE */}
              <img
                style={{
                  width: "25px",
                  height: "25px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1200px-Non_veg_symbol.svg.png" // https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png
                alt="vegornonveg"
              />
            </div>
          </div>
          <img src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA=" />
        </div>
        <div className="card-body">
          <h6 className="fw-500 text-dark">Chicken Biriyani</h6>
          {/* <p className="fw-500 text-grey text-sm">30 Served / 20 Left</p> */}
          <div className="clearfix-10"></div>
          <div className="row mb-2">
            <h4 className="fw-600 text-primary">₹120</h4>
            {/* <p className="text-sm fw-400 text-primary">/Portion</p> */}
          </div>
          <div className="d-flex align-items-center justify-content-end">
            {isEdit && <ButtonC label="Edit" onClick={handleEdit} />}
            {isCart && <ButtonC label="Add To Cart" onClick={() => {}} />}
          </div>
        </div>
      </div>
    </div>
  );
}
