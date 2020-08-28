export interface NotifyOptions {
  key?: string | number;
  message: string;
  options: {
    key: string | number;
    variant?: 'default' | 'error' | 'success' | 'warning' | 'info';
  };
  dismissAll?: string | number;
}
export interface Notify {
  notifies: NotifyOptions[];
}

export const notifiesStore: Notify = {
  notifies: [],
};

export interface NotifyAction {
  type: 'REMOVE_SNACKBAR' | 'CLOSE_SNACKBAR' | 'ENQUEUE_SNACKBAR';
  notify: NotifyOptions;
}

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export const notifiesReducer = (
  state = notifiesStore,
  action: NotifyAction
) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifies: [
          ...state.notifies,
          {
            key: action.notify.key,
            ...action.notify,
          },
        ],
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        notifies: state.notifies.map((notify: NotifyOptions) => {
          return action.notify.dismissAll || notify.key === action.notify.key
            ? { ...notify, dismissed: true }
            : { ...notify };
        }),
      };

    case REMOVE_SNACKBAR:
      return {
        ...state,
        notifies: state.notifies.filter(
          (notify: NotifyOptions) => notify.key !== action.notify.key
        ),
      };

    default:
      return state;
  }
};

export const enqueueSnackbar = (notify: NotifyOptions) => {
  const key = notify.options && notify.options.key;

  return {
    type: ENQUEUE_SNACKBAR,
    notify: {
      ...notify,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

export const closeSnackbar = (key: string | number) => ({
  type: CLOSE_SNACKBAR,
  notify: {
    dismissAll: !key,
    key,
  },
});

export const removeSnackbar = (key: string | number) => ({
  type: REMOVE_SNACKBAR,
  notify: {
    key,
  },
});

export default notifiesReducer;
