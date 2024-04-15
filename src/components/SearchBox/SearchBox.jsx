import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { Box, TextField } from '@mui/material';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeInputHandler = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box>
      <TextField
        fullWidth
        id="filter"
        label="Find contacts by name or number"
        name="filter"
        value={filter}
        onChange={onChangeInputHandler}
        variant="outlined"
        sx={{ mb: 2 }}
      />
    </Box>
  );
}

export default SearchBox;
