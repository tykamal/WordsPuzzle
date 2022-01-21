import { useState } from 'react'

const useModal = () => {
    const [isShowing, setisShowing] = useState(false)

    function toggle() {
        setisShowing(!isShowing)
    }

    return {
        isShowing,
        toggle
    }
}

export default useModal