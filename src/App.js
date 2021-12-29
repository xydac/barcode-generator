import "./App.css";
import Barcode from "react-barcode";

const BarcodeData = ({ labelTop, labelBottom, value }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      border: "1px solid #ddd",
    }}>
    {labelTop}
    <Barcode value={value} />
    {labelBottom}
  </div>
);

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const value = queryParams.get("value") || "Barcode";
  const labelTop = queryParams.get("labelTop");
  const labelBottom = queryParams.get("labelBottom");
  const rows = queryParams.get("rows") || 10;
  const columns = queryParams.get("columns") || 4;
  const range = [...Array(rows * columns).keys()];

  return (
    <div className="App">
      <div
        style={{
          margin: "auto",
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          width: "max-content",
        }}>
        {range.map((i) => (
          <BarcodeData
            key={i}
            value={value}
            labelBottom={labelBottom}
            labelTop={labelTop}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
