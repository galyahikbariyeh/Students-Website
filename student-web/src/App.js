import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route,Navigate,useLocation } from 'react-router-dom';
import Login from './pages/LoginPage.js';

import { UserProvider } from './context/userContext.js';
import DashboardLayoutSlots from './components/Dashbord.js';
import LoginPage from './pages/LoginPage.js';
import StudentsPage from './pages/studentPage.js';
import { StudentProvider } from './context/studentContext.js';
import { AuthProvider } from './context/AuthContext';
import { ThemeModeProvider } from './context/ThemeContext.js';
import SettingsPage from './pages/settingPage.js';

import ButtonAppBar from './components/NavBar.js';

function App() {
  return (
     <BrowserRouter>
    

   <ThemeModeProvider> 
    <AuthProvider>
       <StudentProvider>
        
     
        <Routes>
           <Route path="/dashboard" element={<DashboardLayoutSlots />} />
          <Route path="/" element={<Login />} />
          <Route path="/students" element={<DashboardLayoutSlots />} />
           <Route path="/settings" element={<DashboardLayoutSlots />} />
        
          
        </Routes>
      
    </StudentProvider>
    </AuthProvider>
    </ThemeModeProvider>
   

    </BrowserRouter>
      
  
   
    
  );
}

export default App;
