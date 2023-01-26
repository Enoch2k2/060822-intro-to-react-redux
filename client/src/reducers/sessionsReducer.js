const initialState = {
  currentUser: {},
  loggedIn: true
}

const sessionsReducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default sessionsReducer;