import { useState } from "react"
import { useRef } from "react"

function InputCounter(){
    const [count, setCount] = useState(0);
    const inputRef = useRef(null)
    const handleInputChange = () => {
        setCount(inputRef.current.value.length)
    }
    return (
        <div>
            <input type="text" ref={inputRef} 
            onChange={handleInputChange} />
            <p></p>
        </div>
    )
}

export default InputCounter