import { useState, useRef } from 'react';
import TaskRowItem from './TaskRowItem';

function MyTaskList() {
  const [myTasksArray, setMyTasksArray] = useState<string[]>([]);
  const [taskCompletedStates, setTaskCompletedStates] = useState<boolean[]>([]);
  const [inputTaskText, setInputTaskText] = useState('');
  const [searchTextValue, setSearchTextValue] = useState('');
  const searchFieldRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    if (inputTaskText.trim() !== '') {
      setMyTasksArray([...myTasksArray, inputTaskText]);
      setTaskCompletedStates([...taskCompletedStates, false]);
      setInputTaskText('');
    }
  };

  const toggleCompletion = (index: number) => {
    const updatedStates = [...taskCompletedStates];
    updatedStates[index] = !updatedStates[index];
    setTaskCompletedStates(updatedStates);
  };

  const deleteTaskItem = (index: number) => {
    const updatedTasks = myTasksArray.filter((_, i) => i !== index);
    const updatedStates = taskCompletedStates.filter((_, i) => i !== index);
    setMyTasksArray(updatedTasks);
    setTaskCompletedStates(updatedStates);
  };

  const clearSearchInput = () => {
    setSearchTextValue('');
    if (searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  };

  const taskItemsWithIndex = myTasksArray.map((taskItemValue, index) => ({
    text: taskItemValue,
    index: index,
    completed: taskCompletedStates[index]
  }));

  const displayedTasks = taskItemsWithIndex.filter((taskEntry) => 
    taskEntry.text.includes(searchTextValue)
  );

  return (
    <div>
      <input
        type="text"
        value={inputTaskText}
        onChange={(e) => setInputTaskText(e.target.value)}
        placeholder="Введите дело"
      />
      <button onClick={handleAddTask}>Добавить</button>
      
      <div style={{ marginTop: '10px' }}>
        <input
          ref={searchFieldRef}
          type="text"
          value={searchTextValue}
          onChange={(e) => setSearchTextValue(e.target.value)}
          placeholder="Поиск по делам"
        />
        <button onClick={clearSearchInput}>Очистить</button>
      </div>

      <ul>
        {displayedTasks.map((taskEntry) => (
          <TaskRowItem
            key={taskEntry.index}
            text={taskEntry.text}
            completed={taskEntry.completed}
            onToggle={() => toggleCompletion(taskEntry.index)}
            onDelete={() => deleteTaskItem(taskEntry.index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default MyTaskList;
