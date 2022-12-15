import { createSignal } from "solid-js";

export default function Counter() {
	const [count, setCount] = createSignal(0)
  return <>
	<button onClick={() => setCount(c => c + 1)}>+</button>
	<button onClick={() => setCount(c => c-1)}>-</button>
	<div>{count}</div>
	<div>{count}</div>
	<div>{count}</div>
  </>
}
