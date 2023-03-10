import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, border: '1px solid #121212', pl: 2, boxShadow: 'none', mr: { sm: 5 }, background: '#121212' }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ backgroundColor: '#121212', color: '#fff' }}
      />
      <IconButton
        type='submit'
        sx={{ p: '10px', color: '#fff' }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
