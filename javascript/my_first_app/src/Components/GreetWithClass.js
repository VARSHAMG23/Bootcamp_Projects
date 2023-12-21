import { Component} from "react";
class GreetWithClass extends Component {
    constructor(props) {
        super(props);
        this.age=20;
    }
    render() {
       return(
        <>
       <h1>Hello With Class</h1>
       <h2>age{this.props.age}</h2>
       <h2>age{this.age}</h2>
       </>
       );
       
    }
}
export default GreetWithClass;