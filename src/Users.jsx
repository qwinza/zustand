import { shallow } from "zustand/shallow";
import { useAppStore } from "./stores/App-store";
import { useState } from "react";

export default function Username() {
  const [user, getUser, logoutUser] = useAppStore(
    (state) => [state.user, state.getUser, state.logoutUser],
    shallow
  );

  const [username, setUsername] = useState("");

  return (
    <div>
      <p>Login by Username</p>
      <input
        type="text"
        placeholder="new username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={() => getUser(username)}>
        Login
      </button>
      {user.login && (
        <>
          <p>Logged in as {user.login}</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      )}
    </div>
  );
}
