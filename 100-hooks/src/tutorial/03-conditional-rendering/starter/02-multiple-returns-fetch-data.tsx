import { useEffect, useState } from "react";
import { z } from "zod";

const url = "https://api.github.com/users/QuincyLarson";

const userSchema = z.object({
  avatar_url: z.string(),
  bio: z.string(),
  blog: z.string(),
  company: z.string(),
  created_at: z.string(),
  email: z.union([z.string(), z.null()]),
  events_url: z.string(),
  followers: z.number(),
  followers_url: z.string(),
  following: z.number(),
  following_url: z.string(),
  gists_url: z.string(),
  gravatar_id: z.string(),
  hireable: z.union([z.string(), z.null()]),
  html_url: z.string(),
  id: z.number(),
  location: z.string(),
  login: z.string(),
  name: z.string(),
  node_id: z.string(),
  organizations_url: z.string(),
  public_gists: z.number(),
  public_repos: z.number(),
  received_events_url: z.string(),
  repos_url: z.string(),
  site_admin: z.union([z.string(), z.boolean()]),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  twitter_username: z.union([z.string(), z.null()]),
  type: z.string(),
  updated_at: z.string(),
  url: z.string(),
});

type User = z.infer<typeof userSchema>;

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          throw Error("Bad request...");
        }

        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Somthing happend...";
        console.log(message);

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) <h2>Loading...</h2>;

  if (isError) <h2>Error happend...</h2>;

  if (!user) return;

  const { avatar_url, name, company, bio }: User = user;

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
