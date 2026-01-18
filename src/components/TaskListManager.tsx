import { useState } from 'react';
import TaskElement from './TaskElement';

function TaskListManager() {
  const [taskArray, setTaskArray] = useState<string[]>([]);
  const [taskStatuses, setTaskStatuses] = useState<boolean[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const addNewTask = () => {
    if (newTaskText.trim() !== '') {
      setTaskArray([...taskArray, newTaskText]);
      setTaskStatuses([...taskStatuses, false]);
      setNewTaskText('');
    }
  };

  const markAsDone = (index: number) => {
    const updatedStatuses = [...taskStatuses];
    updatedStatuses[index] = !updatedStatuses[index];
    setTaskStatuses(updatedStatuses);
  };

  const removeTask = (index: number) => {
    const updatedTasks = taskArray.filter((_, i) => i !== index);
    const updatedStatuses = taskStatuses.filter((_, i) => i !== index);
    setTaskArray(updatedTasks);
    setTaskStatuses(updatedStatuses);
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Введите дело"
      />
      <button onClick={addNewTask}>Добавить</button>
      <ul>
        {taskArray.map((taskItem, index) => (
          <TaskElement
            key={index}
            text={taskItem}
            completed={taskStatuses[index]}
            onToggle={() => markAsDone(index)}
            onDelete={() => removeTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskListManager;
