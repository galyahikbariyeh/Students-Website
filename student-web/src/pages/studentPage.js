import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Fade,
  Backdrop,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStudents } from '../context/studentContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function StudentsPage() {
  const { students, dispatch } = useStudents();

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [level, setLevel] = useState('');
  const [open, setOpen] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditedIndex(null);
    setUsername('');
    setAge('');
    setLevel('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = { name: username, age: Number(age), level };

    if (editedIndex !== null) {
      dispatch({ type: 'UPDATE', index: editedIndex, payload: newStudent });
    } else {
      dispatch({ type: 'ADD', payload: newStudent });
    }

    handleClose();
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE', index });
  };

  const handleEdit = (index) => {
    const student = students[index];
    setUsername(student.name);
    setAge(student.age);
    setLevel(student.level);
    setEditedIndex(index);
    handleOpen();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Students List
      </Typography>

      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Student
      </Button>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Level</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.level}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleEdit(index)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {students.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No students available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

     
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" gutterBottom>
              {editedIndex !== null ? 'Edit Student' : 'Add Student'}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <TextField
                label="Age"
                fullWidth
                type="number"
                margin="normal"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <TextField
                label="Level"
                fullWidth
                margin="normal"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
                {editedIndex !== null ? 'Update' : 'Add'}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
      
    </Box>
  );
}
