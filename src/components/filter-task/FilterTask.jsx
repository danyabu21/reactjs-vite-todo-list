import React from 'react';
import './FilterTask.scss';
import useStore from '../../stores/useStore';

function FilterTask() {
  const { setFilter } = useStore((store) => store.actions);
  const { filterValue } = useStore((store) => store.state);

  return (
    <div className="form-group ms-auto d-flex justify-content-end pb-3 mb-3">
      <select
        onChange={({ target }) => setFilter(target.value)}
        value={filterValue}
        className="form-control-sm  text-light"
        id="exampleFormControlSelect1"
      >
        <option value="incompleted">Incompleted</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default FilterTask;
