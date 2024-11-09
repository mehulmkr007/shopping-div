export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = "https://fakestoreapi.com";
    if (action.type === "api/makecall") {
      const { url, onStart, onSuccess, onError} = action.payload;
      next(action); 

      dispatch({type: onStart})
      fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: onSuccess,
            payload: data,
          })
        )
        .catch(() => {
          dispatch({
            type: onError
          });
        });
    } else next(action);
  };
