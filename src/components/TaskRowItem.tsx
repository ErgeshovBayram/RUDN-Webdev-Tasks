interface TaskRowItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

function TaskRowItem({ text, completed, onToggle, onDelete }: TaskRowItemProps) {
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

export default TaskRowItem;
