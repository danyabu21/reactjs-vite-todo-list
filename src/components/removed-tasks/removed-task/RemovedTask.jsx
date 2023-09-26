import React from 'react';
import './RemovedTask.scss';
import { VscRefresh, VscTrash } from 'react-icons/vsc';
import { Tooltip } from 'react-tooltip';
import useStore from '../../../stores/useStore';

function RemovedTask({ value, id }) {
  const { deletePermanently, recoveryDeletedTask } = useStore(
    (state) => state.actions
  );

  return (
    <li className="task-item d-flex align-items-center justify-content-between mb-2 p-2 rounded text-light removed">
      <p className=" task-title mb-0">{value}</p>
      <div>
        <button
          className="button bg-transparent border-0 button-check"
          data-tooltip-id="recovery-task"
          data-tooltip-content="Recovery Task"
          data-tooltip-place="bottom"
          onClick={() => recoveryDeletedTask(id)}
        >
          <VscRefresh />
        </button>
        <button
          className="button bg-transparent border-0 button-check"
          data-tooltip-id="delete-task"
          data-tooltip-content="Delete Task Permanently"
          data-tooltip-place="bottom"
          onClick={() => deletePermanently(id)}
        >
          <VscTrash />
        </button>
      </div>
      <Tooltip id="recovery-task" />
      <Tooltip id="delete-task" />
    </li>
  );
}

export default RemovedTask;
