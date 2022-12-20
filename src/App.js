import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <About />
        {/* <TextForm heading="Enter your text to analyse" /> */}
      </div>
    </>
  );
}

export default App;
