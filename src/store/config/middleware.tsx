const middleware = (action: { [key: string]: any }) => (next: any) => {
  next(action);
};

export default middleware;
