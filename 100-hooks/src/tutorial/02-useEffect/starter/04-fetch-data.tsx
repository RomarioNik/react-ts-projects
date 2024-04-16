import { useState, useEffect } from "react";
import { z } from "zod";

const url = "https://api.github.com/users";

const userSchema = z.object({
  avatar_url: z.string(),
  events_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  gravatar_id: z.string(),
  html_url: z.string(),
  id: z.number(),
  login: z.string(),
  node_id: z.string(),
  organizations_url: z.string(),
  received_events_url: z.string(),
  repos_url: z.string(),
  site_admin: z.boolean(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  type: z.string(),
  url: z.string(),
});

type User = z.infer<typeof userSchema>;

const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("bad fetch...");

        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Somthing happend...";
        console.log(message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>;
      <ul className="users">
        {users.length >= 0 &&
          users.map(({ id, avatar_url, login, html_url }) => (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="_blank">
                  User page
                </a>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
export default FetchData;
