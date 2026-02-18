import { type CSSProperties } from "react";

const firstName = "Erik";
const lastName = "Steg";

const favoriteGames = ["Atlantis", "Cult of the lamb", "Metal Fatigue"];
const isActive = false;

const address = {
    city: "Buenos Aires",
    zipCode: "ABC-1234"
}

const myStyle: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10
}

export function MyAwesomeApp() {
    return (<div>
        <h1 data-testid="first-name-title">{firstName}</h1>
        <h3>{lastName}</h3>

        <p className="mi-clase-favorita"> {favoriteGames.join(", ")}</p>
        <p>{2 + 2}</p>

        <p>{isActive ? 'Activo' : 'No activo'}</p>
        <p style={myStyle}
        >{JSON.stringify(address)}</p>

    </div>)
}