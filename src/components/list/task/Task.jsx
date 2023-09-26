import React from 'react';
import './Task.scss';
import { VscCheck, VscRedo, VscEdit, VscChromeClose } from 'react-icons/vsc';
import { Tooltip } from 'react-tooltip';
import useStore from '../../../stores/useStore';

function Task({ id, value, completed }) {
  const { completeTask, openEdit, removeTask } = useStore(
    (store) => store.actions
  );

  return (
    <li
      id={id}
      className={`${
        completed ? 'completed ' : ''
      } task-item d-flex align-items-center justify-content-between mb-2 p-2 rounded `}
    >
      <p className="task-title mb-0">{value}</p>
      <div className="icons">
        <button
          className="button bg-transparent border-0 button-check"
          data-tooltip-id={completed ? 'uncomplete' : 'complete'}
          data-tooltip-content={completed ? 'Uncomplete Task' : 'Complete Task'}
          data-tooltip-place="bottom"
          onClick={() => completeTask(id)}
        >
          {completed ? <VscRedo /> : <VscCheck />}
        </button>
        <button
          className="button bg-transparent border-0 button-edit"
          data-tooltip-id="edit"
          data-tooltip-content="Edit Task"
          data-tooltip-place="bottom"
          onClick={() => openEdit(id)}
        >
          <VscEdit />
        </button>
        <button
          className="button bg-transparent border-0 button-remove"
          data-tooltip-id="remove"
          data-tooltip-content="Remove Task"
          data-tooltip-place="bottom"
          onClick={() => removeTask(id)}
        >
          <VscChromeClose />
        </button>
      </div>
      <Tooltip id="complete" />
      <Tooltip id="uncompete" />
      <Tooltip id="edit" />
      <Tooltip id="remove" />
    </li>
  );
}

export default Task;
