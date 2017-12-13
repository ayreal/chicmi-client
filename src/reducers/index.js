const defaultState = { profile: {}, loading: false };

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, profile: {}, loading: true };
    case "FETCH_PROFILE":
      console.log("Action.user is", action.user);
      return {
        ...state,
        profile: {
          firstName: action.user.firstName,
          picture: action.user.picture
        },
        loading: false
      };
    default:
      return state;
  }
};

export default rootReducer;
