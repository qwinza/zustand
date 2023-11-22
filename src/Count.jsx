import { useAppStore } from "./stores/App-store";
import { shallow } from "zustand/shallow";

export default function Count() {
  const [count, increase, decrease] = useAppStore((state) => {
    return [state.count, state.increase, state.decrease];
  }, shallow);

  return (
    <>
      <button type="button" onClick={decrease}>
        -
      </button>
      <div>count: {count}</div>
      <button type="button" onClick={increase}>
        +
      </button>
    </>
  );
}
