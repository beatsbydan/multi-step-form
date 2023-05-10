import './App.css';
import Form from './Components/Form/Form';
import PackageContextProvider from './PackageContext/PackageContextProvider/PackageContextProvider';
function App() {
  return(
      <PackageContextProvider>
        <div className="App">
          <Form/>
        </div>
      </PackageContextProvider>
  );
}

export default App;
