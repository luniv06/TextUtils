import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  // createBrowserRouter,
  // RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode disabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  // const AppLayout = () => (
  //   <>
  //     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  //     <Alert alert={alert} />
  //   </>
  // );

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route element={<AppLayout />}>
  //       <Route path="/" element={<TextForm />} />
  //       <Route path="/about" element={<About />} />
  //     </Route>
  //   )
  // );

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Enter your text to analyse"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
      {/* <div className="container my-3">
        <RouterProvider router={router} />
      </div> */}
    </>
  );
}

export default App;
