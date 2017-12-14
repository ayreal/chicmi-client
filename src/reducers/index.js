const defaultState = { currentUser: {}, loading: false };

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, profile: {}, loading: true };
    case "LOGIN_USER":
      console.log("Action.user is", action.user);
      return {
        ...state,
        currentUser: action.user,
        loading: false
      };
    default:
      return state;
  }
};

export default rootReducer;
