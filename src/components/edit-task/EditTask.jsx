import React from 'react';
import useStore from '../../stores/useStore';

function EditTask() {
  const { tasks, idTaskForEdit } = useStore((store) => store.state);
  const { closeEdit, editTask } = useStore((store) => store.actions);

  function handleSubmit(e) {
    e.preventDefault();
    editTask(idTaskForEdit, inputRef.current.value);
    closeEdit();
  }

  const [inputValue, setInputValue] = React.useState(() => {
    if (idTaskForEdit) {
      const taskForEdit = tasks.filter((task) => task.id === idTaskForEdit);
      return taskForEdit[0].value;
    }
  });

  const inputRef = React.useRef();

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="input-group mb-4">
      <input
        type="text"
        className="form-control text-light"
        placeholder="Add task..."
        aria-label="add-task"
        aria-describedby="add-task"
        value={inputValue}
        ref={inputRef}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button className="btn btn-outline-primary" type="submit" id="button-add">
        Save
      </button>
    </form>
  );
}

export default EditTask;
