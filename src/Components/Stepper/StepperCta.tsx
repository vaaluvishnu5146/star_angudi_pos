import { useTheme } from "@mui/material/styles";
import "./style.scss";

function StepperCta() {
  const theme = useTheme();
  console.log(theme);
  return (
    <div className="stepper-cta">
      <button
        className="cta fw-bold"
        style={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        -
      </button>
      <p className="fw-bold">1</p>
      <button
        className="cta fw-bold"
        style={{
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
        }}
      >
        +
      </button>
    </div>
  );
}

export default StepperCta;
