import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initState = {
  loading: true,
  error: false,
  data: null
};

const actionTypes = {
  fetch: "fetch",
  success: "'success",
  failure: "failure"
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null
      };
    }
    case actionTypes.success: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case actionTypes.failure: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
};
const githubUsers = (q) => {
  return axios("https://api.github.com/search/users", {
    method: "GET",
    params: {
      q
    }
  });
};
function Github() {
  const [query, setQuery] = useState("react");
  const [{ loading, error, data }, dispatch] = useReducer(
    githubReducer,
    initState
  );

  useEffect(
    (q) => {
      dispatch({
        type: actionTypes.fetch
      });
      githubUsers(query)
        .then((res) => {
          dispatch({
            type: actionTypes.success,
            payload: res.data
          });
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.failure
          });
        });
    },
    [query]
  );

  const clicked = (query) => setQuery(query);

  return (
    <div>
      <h1>Github Users</h1>
      {loading && <div>...loading</div>}
      {error && <div>Something went wrong</div>}
      <SearchBox clicked={clicked} />
      {data?.items?.map((items) => (
        <div key={items.id}>{items.login}</div>
      ))}
    </div>
  );
}
const SearchBox = ({ clicked }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => clicked(text)}>Search</button>
    </div>
  );
};
export default Github;
