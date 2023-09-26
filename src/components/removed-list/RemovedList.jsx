import React from 'react';
import './RemovedList.scss';
import { VscClearAll } from 'react-icons/vsc';
import { Tooltip } from 'react-tooltip';
import useStore from '../../stores/useStore';

function RemovedList() {
  const { openTrashContent } = useStore((store) => store.actions);
  const { removedTasks } = useStore((store) => store.state);

  return (
    <button
      className="d-flex align-items-center ps-0 p-2 ps-0 icon-trash"
      data-tooltip-id="go-to-removed-tasks"
      data-tooltip-content="Go To Removed Tasks"
      data-tooltip-place="bottom"
      disabled={removedTasks.length > 0 ? false : true}
      onClick={() => openTrashContent()}
    >
      <VscClearAll />
      <Tooltip id="go-to-removed-tasks" />
    </button>
  );
}

export default RemovedList;
