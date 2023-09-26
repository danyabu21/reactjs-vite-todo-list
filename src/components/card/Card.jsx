import EditTask from '../edit-task/EditTask';
import Header from '../header/Header';
import CreateTask from '../create-task/CreateTask';
import List from '../list/List';
import './Card.scss';
import useStore from '../../stores/useStore';
import FilterTask from '../filter-task/FilterTask';
import RemovedTasks from '../removed-tasks/RemovedTasks';
import RemovedList from '../removed-list/RemovedList';

function Card() {
  const { isEditing, isTrashActive } = useStore((store) => store.state);

  return (
    <div className="card-app p-4 d-flex flex-column justify-content-between">
      <Header />
      {!isEditing && !isTrashActive && (
        <>
          <CreateTask />
          <FilterTask />
          <List />
          <RemovedList />
        </>
      )}
      {isEditing && <EditTask />}
      {isTrashActive && <RemovedTasks />}
    </div>
  );
}

export default Card;
