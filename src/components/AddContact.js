import React from "react";
// function AddContact(){
//     return(
//         <div className="ui main">
//             <h2>Add Contact</h2>
//             <form className="ui form">
//             <div className="field">
//                 <label>Name</label>
//                 <input type="text" name="name" placeholder="Name" />
//             </div>
//             <div className="field">
//                 <label>Email</label>
//                 <input type="text" name="Email" placeholder="Email" />
//             </div>
//             <button className="ui button blue">Add</button>
//             </form>
//         </div>
//     );
// }
// export default AddContact;

class AddContact extends React.Component {
    state={
        name:"",
        email:"",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name ==="" || this.state.email===""){
            alert("All the field are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "",email:""});
        this.props.history.push("/");

    };
  render() {
    const myStyle= {
      margin: '50px 0 0 0',
    };
    return (
      <div className="ui main" style={myStyle}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input type="text" 
            name="name" 
            placeholder="Name"
            value={this.state.name}
            onChange={(e)=>this.setState({name: e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="Email" placeholder="Email" 
            value={this.state.email}
            onChange={(e)=>this.setState({email: e.target.value})}/>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
