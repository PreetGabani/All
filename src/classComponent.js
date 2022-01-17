import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// export default class classComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: "ABCD" }
//     }

//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({name:"XYZ"})
//         },2000)
//     }

//     shouldComponentUpdate(){
//         return false;
//     }
//     getSnapshotBeforeUpdate(preProps,preState){
//         document.getElementById("2").innerHTML="before update"+preState.name
//     }

//     componentDidUpdate(){
//         document.getElementById("1").innerHTML="updated"+this.state.name
//     }

//     changename = () => {
//         this.setState({name:"XYZ"})
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello:{this.state.name}</h1>
//                 <button className="btn btn-success" onClick={this.changename}>change name</button>
//                 <div id="1"></div>
//                 <div id="2"></div>
//             </div>
//         )
//     }
// }



export default class classComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    deleteState = () => {
        this.setState({ show: false })
    }

    render() {
        let temp;
        if (this.state.show) {
            temp = <AAb />;
          };


        return (
            <div className="text-center m-lg-5">
                {temp}
                <button className="btn btn-success" onClick={this.deleteState}>Delete</button>
            </div>
        )
    }
}


class AAb extends Component {
    componentWillUnmount() {
        alert("Unmount?")
    }
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(<classComponent />, document.getElementById("root"));

