interface TaskElementProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

function TaskElement({ text, completed, onToggle, onDelete }: TaskElementProps) {
  return (
    <li>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={onToggle}>
        {completed ? 'Выполнено' : 'Выполнить'}
      </button>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
}

export default TaskElement;
