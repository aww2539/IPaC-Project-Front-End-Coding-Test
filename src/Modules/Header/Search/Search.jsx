import { TextField } from "@mui/material"
import { useEffect, useRef } from "react"

export const Search = ({ search, setSearch }) => {
    const searchRef = useRef(null)

    useEffect(() => {
        const handleKeyPress = (e) => {
          const modifierPressed = e.getModifierState &&
            (e.getModifierState('Meta') || e.getModifierState('Control'))

          if (modifierPressed && e.code == 'KeyS') {
            e.preventDefault()
            searchRef.current.focus()
          }
              
          if (e.code == 'Escape') {
            e.preventDefault()
            searchRef.current.blur()
          }

        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
      }, [])

    return (
        <>
            <TextField
                placeholder='Search (Ctrl/Cmd + S)'
                value={search}
                sx={{
                    bgcolor: '#fff',
                    border: 'none',
                    width: 300,
                }}
                onChange={(e) => setSearch(e.target.value)}
                inputRef={searchRef}
            />
        </>
    )
}