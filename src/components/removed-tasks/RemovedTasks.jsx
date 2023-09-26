import React from 'react';
import './RemovedTasks.scss';
import RemovedTask from './removed-task/RemovedTask';
import useStore from '../../stores/useStore';
import Info from '../info/Info';
import { Tooltip } from 'react-tooltip';
import { VscArrowLeft } from 'react-icons/vsc';

function RemovedTasks() {
  const { removedTasks } = useStore((store) => store.state);
  const { closeTrashContent } = useStore((store) => store.actions);

  return (
    <div>
      <button
        className="button bg-transparent border-0 button-check mb-3 ps-0"
        data-tooltip-id="back-to-tasks"
        data-tooltip-content="Back To Tasks"
        data-tooltip-place="bottom"
        onClick={() => closeTrashContent()}
      >
        <VscArrowLeft />
      </button>
      <h3 className="mb-4 text-white fs-5">Removed Tasks:</h3>
      <ul className="list-unstyled">
        {removedTasks.map(({ id, value, removed }, index) => {
          return (
            <RemovedTask key={index} id={id} value={value} removed={removed} />
          );
        })}
      </ul>
      {removedTasks.length === 0 && (
        <Info
          label="No tasks for recovery or permanently delete"
          content="All deleted tasks will appear here."
        />
      )}
      <Tooltip id="back-to-tasks" />
    </div>
  );
}

export default RemovedTasks;
