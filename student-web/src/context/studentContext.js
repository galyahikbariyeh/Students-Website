import React, { createContext, useReducer, useContext, useEffect } from 'react';

const StudentContext = createContext();

const defaultStudents = [
  { name: 'Ali', age: 8, level: '4th' },
  { name: 'Mohammad', age: 16, level: '10th' },
  { name: 'Alaa', age: 18, level: '12th' },
  { name: 'Hamza', age: 18, level: '12th' },
];


function studentReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((_, i) => i !== action.index);
    case 'UPDATE':
      const updated = [...state];
      updated[action.index] = action.payload;
      return updated;
    default:
      return state;
  }
}

export function StudentProvider({ children }) {
 
  const stored = localStorage.getItem('students');
  const initialState = stored ? JSON.parse(stored) : defaultStudents;

  const [students, dispatch] = useReducer(studentReducer, initialState);


  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}

