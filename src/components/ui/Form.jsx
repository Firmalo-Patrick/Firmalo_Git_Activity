
import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert(`Submitted name: ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <button type="submit">Submit</button>
        </form>
    );
}
