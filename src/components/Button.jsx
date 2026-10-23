function Button() {
    const handleClick =() => {
        alert("Welcome to React, Patrick!");
    }
    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default Button;