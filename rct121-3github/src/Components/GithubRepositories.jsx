import axios from "axios";

const { useState, useEffect } = require("react");

const githubUsers = (q, page = 1) => {
  return axios("https://api.github.com/search/users", {
    method: "GET",
    params: {
      q,
      per_page: 6,
      page
    }
  });
};

function GithubRepositories() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("react");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    githubUsers(query, page)
      .then((r) => {
        setLoading(false);
        setData(r.data);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  }, [query, page]);

  const clicked = (query) => setQuery(query);

  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>...loading</div>}
      {error && <div>.error</div>}
      <SearchBox clicked={clicked} />
      {data?.items?.map((i) => (
        <GithubCard key={i.id} {...i} />
      ))}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
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

const GithubCard = ({ avatar_url, login }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <img src={avatar_url} width="50px" alt={login} />
      <div>{login}</div>
    </div>
  );
};
export default GithubRepositories;
