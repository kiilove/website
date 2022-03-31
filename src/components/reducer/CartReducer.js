import { ReduceCapacityRounded } from "@mui/icons-material";

const useCarts = [];

function ReduceCarts(state, action) {
  switch (action.type) {
    case "ADD":
      useCarts.push(action.payload);
    case "EDIT":
      useCarts[Number(action.payload.cartIndex)] = action.payload.cartInfo;
    default:
      return;
  }
}
