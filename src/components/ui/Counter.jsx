
import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    // Run a side effect after rendering
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
