import { Margin, usePDF } from "react-to-pdf";

const Test2 = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM },
  });
  return (
    <div>
      <button onClick={toPDF}>Download PDF</button>
      <div ref={targetRef}>
        <h2>hello world</h2>
      </div>
    </div>
  );
};

export default Test2;
