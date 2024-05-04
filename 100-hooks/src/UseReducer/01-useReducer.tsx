import { useReducer } from "react";
import { ActionKind } from "./actions";
import { defaultState, reducer } from "./reducer";

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id: number) => {
    dispatch({ type: ActionKind.REMOVE_ITEM, payload: id });
  };

  const clearList = () => {
    dispatch({ type: ActionKind.CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: ActionKind.RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
