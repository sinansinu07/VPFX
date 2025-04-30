import { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import PopupForm from "./Components/PopupForm/PopupForm"


// New Commit

function App() {

//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         const target = document.querySelector(this.getAttribute('href'));
//         const navHeight = 50; // Adjust based on navbar height
//         const offsetTop = target.offsetTop - navHeight;

//         window.scrollTo({
//             top: offsetTop,
//             behavior: "smooth"
//         });
//     });
// });
  const [formOpen, setFormOpen] = useState(true)

  const [formAppear, setFormAppear] = useState(false);

  // Function to handle closing the popup and storing flag in localStorage
  const handleClose = () => {
    setFormOpen(false);
    localStorage.setItem('formAppear', 'true'); // Set flag so popup doesn't reappear
  };

  // Check localStorage on initial load
  useEffect(() => {
    const formAppearFlag = localStorage.getItem('formAppear');
    if (formAppearFlag === 'true') {
      setFormAppear(false); // Popup should not appear if previously closed
    } else {
      setFormAppear(true); // Show popup if it's the first visit
    }
  }, []);


  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      {formOpen && formAppear && <PopupForm handleClose = {handleClose} />}
      <Footer/>
    </Fragment>
  );
}

export default App;
