import { change } from "../store/color/action";
import { selectCurrentColor } from "../store/color/reducer";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    color: selectCurrentColor(state),
  };
};

const ButtonColor = ({ color, change }) => {
  return (
    <div className="col-sm-4">
      <div className={"card " + color}>
        <div className="container">
          <div className="card-body">
            <h5 className="card-title">Color actual: {color}</h5>
            <div className="btn-group" role="group">
              <button
                className="btn btn-danger"
                onClick={() => change("bg-danger")}
              >
                RED
              </button>
              <button
                className="btn btn-primary"
                onClick={() => change("bg-primary")}
              >
                BLUE
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => change("bg-secondary")}
              >
                GREY
              </button>
              <button
                className="btn btn-success"
                onClick={() => change("bg-success")}
              >
                GREEN
              </button>
              <button
                className="btn btn-warning"
                onClick={() => change("bg-warning")}
              >
                YELLOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStatetoProps, { change })(ButtonColor);
