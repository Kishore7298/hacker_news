import { createSelector } from "reselect";

const userNameSelector = createSelector(
    state => state.auth,
    auth => {
        if(auth && auth['user_name']){
            return auth['user_name'];
        } else {
            return null;
        }
    }
)

export default userNameSelector;