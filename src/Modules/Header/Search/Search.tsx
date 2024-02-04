import { TextField } from "@mui/material"
import { useEffect, useRef } from "react"

type SearchProps = {
  search: string
  setSearch: (searchString: string) => void
}

export const Search = ({ search, setSearch }: SearchProps) => {
    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleKeyPress = (e: { getModifierState: (arg0: string) => any; code: string; preventDefault: () => void }) => {
          const modifierPressed = e.getModifierState &&
            (e.getModifierState('Meta') || e.getModifierState('Control'))

          if (modifierPressed && e.code == 'KeyS' && searchRef.current) {
            e.preventDefault()
            searchRef.current.focus()
          }
              
          if (e.code == 'Escape' && searchRef.current) {
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