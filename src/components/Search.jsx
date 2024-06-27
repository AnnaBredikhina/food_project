import { useState } from "react";

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return <div>
        <div className="input-field">
            <input
                type="search"
                placeholder="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className="btn orange lighten-2 search-btn" onClick={handleSubmit}>search</button>
        </div>
    </div>
}

export { Search };