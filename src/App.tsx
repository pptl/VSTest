import { useAppSelector } from "./hooks/storeHooks"
import { useAppDispatch } from "./hooks/storeHooks";
import { increment, decrement } from "./slices/ClassInfoSlice";

function Counter() {
  const dispatch = useAppDispatch();

  function incrementCounter() {
    dispatch(increment());
  }

  function decrementCounter() {
    dispatch(decrement());
  }

  return (
    <>
      <div>
        <div>
          <button onClick={incrementCounter}>
            Increment +
          </button>
        </div>
        <div>
          <button onClick={decrementCounter}>
            Decrement -
          </button>
        </div>
      </div>
    </>
  );
}


function App() {
  const count = useAppSelector((state) => state.classInfoReducer.value);
  return (
    <div>
      <div>
        <div >
          <div>
            <h1>The count is {count} </h1>
          </div>
        </div>
        <div>
          <div>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;