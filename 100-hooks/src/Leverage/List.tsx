import { people, type People } from "../data";
import defaultAvatar from "../assets/default-avatar.svg";

export const List = () => {
  return (
    <ul>
      {people.map((person: People) => (
        <li
          key={person.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div key={person.id}>
            <img
              style={{ width: "50px" }}
              src={person.images?.[0]?.small?.url || defaultAvatar}
              alt={person.name}
            />
          </div>
          <p style={{ margin: 0 }}>{person.name}</p>
          <p style={{ margin: 0 }}>{person?.nickName}</p>
        </li>
      ))}
    </ul>
  );
};
