import { readEndpoint } from "observable-redux-json-api";
import { Action } from "redux";
import { Epic } from "redux-observable";

export const fetchUsers: Epic<Action, RootState> = (action$, store) =>
  action$
    .ofType("USERS/FETCH_USERS")
    .delay(1500)
    .mergeMap(() => store.dispatch(readEndpoint("users")))
    .mapTo({ type: "USERS/FETCH_USERS_DONE" });

export default fetchUsers;
