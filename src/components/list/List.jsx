import Task from './task/Task';
import React from 'react';
import './List.scss';
import useStore from '../../stores/useStore';
import Info from '../info/Info';

function List() {
  const { tasks } = useStore((store) => store.state);
  const { filterValue } = useStore((store) => store.state);

  const renderIncompletedTasks = tasks
    .filter((task) => !task.completed)
    .map(({ id, value, completed }) => (
      <Task key={id} id={id} value={value} completed={completed} />
    ));

  const renderCompletedTasks = tasks
    .filter((task) => task.completed)
    .map(({ id, value, completed }) => (
      <Task key={id} id={id} value={value} completed={completed} />
    ));

  return (
    <ul className="list-unstyled">
      {filterValue === 'incompleted' && renderIncompletedTasks.length === 0 && (
        <Info
          label="There are no incomplete tasks"
          content="All incomplete tasks will apper here."
        />
      )}
      {filterValue === 'incompleted' &&
        renderIncompletedTasks.length > 0 &&
        renderIncompletedTasks}
      {filterValue === 'completed' && renderCompletedTasks.length === 0 && (
        <Info
          label=" There are no complete tasks"
          content="All completed tasks will appear here"
        />
      )}
      {filterValue === 'completed' &&
        renderCompletedTasks.length > 0 &&
        renderCompletedTasks}
    </ul>
  );
}

export default List;
