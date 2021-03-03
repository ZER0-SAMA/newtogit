import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button/'
import ButtonGroup from '@material-ui/core/ButtonGroup/'
import SaveIcon from '@material-ui/icons/Save/'
import DeleteIcon from '@material-ui/icons/Delete/'
import ComaA from "./ComaA";
import ComaB from "./ComaB";
import ComaC from "./ComaC";
import Checkbox from '@material-ui/core/Checkbox/'
import FormControlLabel from '@material-ui/core/FormControlLabel/'
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import 'fontsource-roboto';
import Typography from'@material-ui/core/Typography'

const useStyle=makeStyles({
  root:{
    background:'linear-gradient(45deg,#fe6b8b,#ff8e53)',
    color:'white',
    marginBottom:15,
    borderRadius:15,
    padding:'15px 30px',
    border:0

  }

})
function ButtonStyled(){
  const classes=useStyle();
  return<Button className={classes.root}>Test Button</Button>
}
// function Increment(){ 
// const [incre,setIncre]=React.useState({
//   number:0
// });
// const increase=()=>{
//   setIncre({
//     number:number+1
//   })
// return( 
//       <button onClick={()=>{setIncre({number:number+1})}}>
//         {incre.number}</button>
// )
// }



function CheckboxExample(){
  const [checked,setChecked] =React.useState(true)
  return(
    <FormControlLabel
    control={ <Checkbox
      checked={checked}
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon/>} 
      onChange={(e)=>setChecked(e.target.checked)}
      color="primary"
      
      // inputProps={{
      //   'aria-label':'secondary checkbox'
      // }}

      />}
      label="Testing "/>
     
  )
}

function App() {
  const [increment,setIncrement]=React.useState(0);
  const [username,setUsername]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [showpass,setShowpass]=React.useState(false);
  const increase=()=>{
    setIncrement(increment+1);
    console.log({increment})
  };
  return (
    <div className="App">
     
      <button onClick={increase}>{increment}</button>
      <Input type="text" value={username} placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
      <Input type={showpass?"text":"password"} value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      {/* <button onClick={()=>{setShowpass(!showpass)}}>Show Password</button> */}
      <Checkbox onChange={()=>{setShowpass(!showpass)}}>Show Password</Checkbox>
      <h1>{username}</h1>
      <h1>{showpass?password:"X".repeat(password.length)}</h1>
      <ComaA/>
      <CheckboxExample/>
      <ButtonGroup> 
      <Button 
      startIcon={<SaveIcon/>} 
      style={{fontSize:20}} size="small"  onClick={()=>alert('hey')} variant="contained" color="primary">Save</Button>
      <Button 
      startIcon={<SaveIcon/>} 
      style={{fontSize:20}} size="small"  onClick={()=>alert('hey')} variant="contained" color="secondary">Delete</Button>
      </ButtonGroup>
      <TextField
       variant="filled" color="secondary" type="email" label ="Time " placeholder="email"
       />
       <ButtonStyled/>
       <Typography variant="h1">
         Typo
       </Typography>
    </div>
  );
}

export default App;
