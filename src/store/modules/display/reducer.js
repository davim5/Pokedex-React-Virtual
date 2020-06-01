const INITIAL_STATE = {
  id: 0,
  active: false,
};

export default function display(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_POKEMON':
      return action.id;
    default:
      return state;
  }
}
