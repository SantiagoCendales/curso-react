export const saveToStorage = ({board, turn}) => {
  localStorage.setItem('board', JSON.stringify(board));
  localStorage.setItem('turn', turn);
}