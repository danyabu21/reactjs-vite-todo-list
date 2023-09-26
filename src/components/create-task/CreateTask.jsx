import React from 'react';
import './CreateTask.scss';
import useStore from '../../stores/useStore';

function CreateTask() {
  const { createTask } = useStore((store) => store.actions);
  const [inputValue, setInputValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue || inputValue.match(/^(\s)+$/)) {
      return null;
    } else {
      createTask(inputValue);
      setInputValue('');
      inputRef.current.focus();
    }
  }

  const inputRef = React.useRef();

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="input-group mb-4">
      <input
        type="text"
        className="form-control text-light"
        placeholder="Add task..."
        aria-label="add-task"
        aria-describedby="add-task"
        ref={inputRef}
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button className="btn btn-outline-primary" type="submit" id="button-add">
        Create
      </button>
    </form>
  );
}

export default CreateTask;
