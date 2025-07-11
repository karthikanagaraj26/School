import { Box } from '@mui/material';
// import Herosection from "./Components/Herosection"
import Header from './Components/Header';
import Education from './Components/Education';
import Courses from './Components/Courses';
import Practice from "./Components/practice"
import Packages from "./Components/Packages"
import News from './Components/News';
import Footer from './Components/Footer';
function App() {
  return (
    
    <Box>
      <Header/>
      <Education/>
      <Courses/>
      <Practice />
      <Packages/>
      <News/>
      <Footer/>
    </Box>
    
  );
}

export default App;
