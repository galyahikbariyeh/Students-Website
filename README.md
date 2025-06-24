# Students Website
The Student Dashboard is a website built using React.JS, React Hooks, and MUI libraries. It allows users to log in. Upon logging in, a welcome message appears on the dashboard page, including the user's name, the number of students, and the most recent student added. Students can be added through the "Students" page, where they can edit or delete their data. There is also a settings page that allows users to adjust the registration mode (light or dark).

# steps
1- login page --> insert your email and password
2-  dashboard -->When you login, you will be directed to the dashboard, A welcome message will appear with the user name, number of students, and the last added student. 
3- studentPage-->Through it, you can add a student through the Add Student button, and through it, you can also modify the student’s information or delete a student.
4- settingPage --> You can change the mode ( light or dark).

# Steps to run the project
1- cd student-web
2- npm start

# React Hooks
1- useState --> I used it to store state like username, fields, theme.
2- useEffect --> I used it to execute codes when the page loads.
3- useContext --> I used it to share data between pages.
4- useRef --> To auto focus on input when page loads.
5- useReducer --> I used it to manage student data (add, delete, edit).
6- useMemo --> I used it to improve performance when calculating the number of students or the last student added.
7- useCallback --> I used it to pass functions like (handleDelete, handleEdit) statically to children of components.







