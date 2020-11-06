import React from 'react';
import { RecoilRoot, atom, selector } from 'recoil';

import './App.css';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';

// const textState = atom({
//   key: 'textState',
//   default: ''
// });

// const charCountState = selector({
//   key: 'charCountState',
//   get: ({get}) => {
//     const text = get(textState);
//     return text.length;
//   }
// });

// const todoListState = atom({
//   key: 'todoListState',
//   default: [],
// });

// const todoListFilterState = atom({
//   key: 'todoListFilterState',
//   default: 'Show All',
// });

// const filteredTodoListState = selector({
//   key: 'filteredTodoListState',
//   get: ({ get }) => {
//     const filter = get(todoListFilterState);
//     const list = get(todoListState);

//     switch (filter) {
//       case 'Show Completed': 
//         return list.filter((item) => item.isComplete);
//       case 'Show Uncompleted':
//         return list.filter((item) => !item.isComplete);
//       default: 
//         return list;
//     }
//   }
// });

// const todoListStatsState = selector({
//   key: 'todoListStatsState',
//   get: ({ get }) => {
//     const todoList = get(todoListState);
//     const totalNum = todoList.length;
//     const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
//     const totalUncompletedNum = totalNum - totalCompletedNum;
//     const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

//     return {
//       totalNum,
//       totalCompletedNum,
//       totalUncompletedNum,
//       percentCompleted,
//     }
//   }
// });

function App() {
  return (
    // <RecoilRoot>
    //   <CharacterCounter charCountState={charCountState} textState={textState} />
    //   <TodoList todoListState={todoListState} filteredTodoListState={filteredTodoListState} todoListFilterState={todoListFilterState} todoListStatsState={todoListStatsState} />
    // </RecoilRoot>
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
  </RecoilRoot>
  );
}

export default App;
