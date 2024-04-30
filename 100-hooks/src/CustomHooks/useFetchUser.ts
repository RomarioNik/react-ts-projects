import { useState, useEffect } from "react";

type User = {
  [key: string]: string;
};

type FetchUser = {
  isLoading: boolean;
  isError: boolean;
  user: User | null;
};

export const useFetchUser = (link: string): FetchUser => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsError(false);
      try {
        const resp = await fetch(link);

        if (!resp.ok) {
          setIsError(true);
          // setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Some error";
        console.log(message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { isLoading, isError, user };
};
