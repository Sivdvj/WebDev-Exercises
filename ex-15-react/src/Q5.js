import React,{Component} from "react";

class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
        console.log("Constructor: Component is initializing");
    }
    componentDidMount(){
        console.log("ComponenDidMount: Component has mounted");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Cmponent has updated");
    }
    componentWillUnmount(){
        console.log("Component has unmounted");
    }

    update=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    };
    render(){
        return(
            <div>
                <h2>Lifecycle Demo</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.update}>Update State</button>
            </div>
        )
    }

}

export default function App(){
    const [showComponent, setShowComponent] = React.useState(true);

    return (
      <div>
        <button onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? "Unmount Component" : "Mount Component"}
        </button>
        {showComponent && <LifeCycle />}
      </div>
    );
}

