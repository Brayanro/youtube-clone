import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories.map(({ name, icon }) => (
        <button
          key={name}
          className='category-btn'
          onClick={() => setSelectedCategory(name)}
          style={{ background: name === selectedCategory && '#fc1503', color: '#fff' }}
        >
          <span style={{ color: name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{icon}</span>
          <span style={{ opacity: name === selectedCategory ? '1' : '8' }}>{name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar
