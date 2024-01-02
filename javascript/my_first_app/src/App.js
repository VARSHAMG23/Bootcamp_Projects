
import './App.css';
import GreetWithClass from './Components/GreetWithClass.js';
import Navbar from './Components/Navbar.js';
import Counter from './Components/Count.js';
import Count from './Components/increment.js';
import Greet from './Components/Greet.js';
import Message from './Components/message.js';
import CountWithFunction from './Components/CountWithFunction.js';
import Footer from './Components/footer.js';
import Conditional from './Components/Conditional.js';

import Even from './Components/Even.js';
import Printeven from './Components/Printeven.js';
import Welcomeadmin from './Components/Welcomeadmin.js';
import MyList from './Components/MyList.js';
import ExampleForLifeCycle from './Components/ExampleForLifeCycle.js';

function App() {
  return (
    <div className="App">
       App Component
          <Navbar />
     <GreetWithClass age="20"/>
     <Counter/>
     <Count />
     <Greet name="Varsha"  marks="100"/>
     <Greet/>
     <Message />
     <CountWithFunction/>
     <br/>
     <Footer/>
     <br/>
     <Conditional isLoggedIn="1" name="Varsha" />
     
     <Even num="7"/>
     <Printeven number="3"/>
     <Welcomeadmin name="Varsha" />
     <MyList/>
     <ExampleForLifeCycle /> 
   
     
     
    
    </div>
  );
}

export default App;
