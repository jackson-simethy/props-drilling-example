import logo from './logo.svg';
import './App.css';
import Parent from './Parent';


const App = () => {
  const dataToPass = 'Data from App Component';

  return (
    <div>
      <p>App Component</p>
      <p>Data to pass: {dataToPass}</p>
      <Parent data={dataToPass} />
    </div>
  );
};

export default App;