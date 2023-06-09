import { Box } from "./components/Box";
import { Dustbin } from "./Dustbin";
export const Container = () => (
  <div>
    <div style={{ overflow: "hidden", clear: "both" }}>
      <Dustbin allowedDropEffect="any" />
      <Dustbin allowedDropEffect="copy" />
      <Dustbin allowedDropEffect="move" />
    </div>
    <div style={{ overflow: "hidden", clear: "both" }}>
      <Box name="Glass" />
      <Box name="Banana" />
      <Box name="Paper" />
    </div>
  </div>
);
