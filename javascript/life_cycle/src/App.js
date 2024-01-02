
import './App.css';
import StyleComponent from './Components/StyleComponent';
// import CountdownTimer from './Components/CountdownTimer';
import AppStyle from './Components/AppStyle';

// import Counter from './Components/count';
import LoginPage from './Components/LoginPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <CountdownTimer /> */}
      {/* <Counter /> */}
      {/* <StyleComponent primary={true}  /> */}
      <LoginPage  primary={true}/>
      <AppStyle primary={true}/>
      </header>
    </div>
  );
}

export default App;
