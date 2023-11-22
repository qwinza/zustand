import { useAppStore } from "./stores/App-store"

export default function Username () {
    const username = useAppStore((state) => {
        return state.username;
    });
    const updateUsername = useAppStore((state) => state.updateUsername);
    console.log(useAppStore());

    return(
        <div>
            <p>Username : {username}</p>
            <input type="text" onChange={(event) => {
                const newUsername = event.target.value;

                updateUsername(newUsername)
            }} />
        </div>
    )
}