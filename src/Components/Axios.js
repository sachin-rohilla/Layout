import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
const Axios = () => {


  return (
    <>
    <InputLabel>Color</InputLabel>
      <FormControl>
        <Select>
          <MenuItem value={1}>Yellow</MenuItem>
          <MenuItem value={2}>Blue</MenuItem>
          <MenuItem value={3}>Black</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Axios;
