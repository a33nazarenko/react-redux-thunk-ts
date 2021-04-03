import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { setIncrement } from "./actions";

export const testThunk = (
  email: any
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      
    } catch (e) {
      
    }
  };
};
