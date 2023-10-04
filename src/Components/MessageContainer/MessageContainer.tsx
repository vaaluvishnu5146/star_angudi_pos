export default function MessageContainer({ uri = "", message = "" }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{
        height: 250,
      }}
    >
      <img
        className="mb-3"
        style={{
          width: 200,
        }}
        src={uri}
        alt="no data"
      />
      <h3>{message}</h3>
    </div>
  );
}
