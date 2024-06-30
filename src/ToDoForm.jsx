import ListItem from "@mui/material/ListItem";
import {TextField} from "@mui/material";
import {Create} from "@mui/icons-material";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";

import {useState} from "react";

export default function ToDoForm({addTodo}) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="Add Todo"
            variant="outlined" 
            onChange = {handleChange} 
            value={text} 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="create todo"
                        edge="end"
                        type="submit"
                        >
                            <Create />
                        </IconButton>
                    </InputAdornment>
                ),  
            }}
            />
            </form>
        </ListItem>
    )
}