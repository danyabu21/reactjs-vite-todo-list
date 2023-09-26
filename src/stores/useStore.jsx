import { create } from 'zustand';
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';

const useStore = create((set, get) => {
  const setState = (fn) => set(produce(fn));

  return {
    state: {
      tasks: [],
      removedTasks: [],
      idTaskForEdit: '',
      isEditing: false,
      isTrashActive: false,
      filterValue: 'incompleted',
    },

    actions: {
      createTask: (value) => {
        setState(({ state }) => {
          state.tasks.push({
            id: uuidv4(),
            value: value,
            completed: false,
            removed: false,
          });
        });
      },

      completeTask: (id) => {
        setState(({ state }) => {
          state.tasks = state.tasks.map((task) => {
            if (task.id === id) {
              task.completed = !task.completed;
            }
            return task;
          });
        });
      },

      openEdit: (id) => {
        setState(({ state }) => {
          state.idTaskForEdit = id;
          state.isEditing = true;
        });
      },

      closeEdit: () => {
        setState(({ state }) => {
          state.isEditing = false;
        });
      },

      editTask: (id, value) => {
        setState(({ state }) => {
          state.tasks.map((task) => {
            if (task.id === id) {
              task.value = value;
            }
            return task;
          });
        });
      },

      removeTask: (id) => {
        setState(({ state }) => {
          state.removedTasks.push(
            ...state.tasks.filter((task) => {
              task.removed = true;
              return task.id === id;
            })
          );
          state.tasks = state.tasks.filter((task) => task.id !== id);
        });
      },

      setFilter: (value) => {
        setState(({ state }) => {
          state.filterValue = value;
        });
      },

      openTrashContent: () => {
        setState(({ state }) => {
          state.isTrashActive = true;
        });
      },

      closeTrashContent: () => {
        setState(({ state }) => {
          state.isTrashActive = false;
        });
      },

      deletePermanently: (id) => {
        setState(({ state }) => {
          if (
            window.confirm('Do you really want to delete the selected task?')
          ) {
            state.removedTasks = state.removedTasks.filter(
              (task) => task.id !== id
            );
          } else {
            return null;
          }
        });
      },

      recoveryDeletedTask: (id) => {
        setState(({ state }) => {
          let removedTask;
          state.removedTasks = state.removedTasks.filter((task) => {
            if (task.id === id) {
              removedTask = task;
            } else {
              return task;
            }
          });
          state.tasks = [...state.tasks, removedTask];
        });
      },
    },
  };
});

export default useStore;
