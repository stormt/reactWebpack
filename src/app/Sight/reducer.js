export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'child_2':
      state.child_2 = action.data + ' child_2';
      return state;
    case 'child_2_1':
      state.child_2_1 = action.data + ' child_2_1';
      return state;
    default:
      return state
  }
}
