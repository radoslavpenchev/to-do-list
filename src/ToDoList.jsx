import List from '@mui/material/List';

import { useState , useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import {Box, Typography} from '@mui/material';



const initialTodos = JSON.parse(localStorage.getItem('todos') || '[]');

export default function ToDoList() {
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        })
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [
                ...prevTodos,
                {
                    id: crypto.randomUUID(),
                    text: text,
                    completed: false
                }
            ];
        });
    };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3,
        }}>
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            ToDo's
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <ToDoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
        ))}
        <ToDoForm  addTodo={addTodo} />
        </List>
        </Box>
    );
}


