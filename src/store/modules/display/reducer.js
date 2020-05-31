export default function display(state = 0, action) {
  switch (action.type) {
    case 'SET_POKEMON':
      return action.id;
    default:
      return state;
  }
}
