import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default class ClassDemo extends Component {
    constructor(props){
        super(props);
        this.state={count1:0};
    }
    handleIncrement=()=>{
        return(
          this.setState(prevState=>({count1:prevState.count1+1}))
        )
    }
    handleDecrement=()=>{  
        if (this.state.count1>0){
            return(this.setState(prevState=>({count1:prevState.count1-1})))
        }
        else{
            return(this.setState(prevState=>({count1:prevState.count1=0})))
        }
    }
    
  render() {
    
    return (
      <>
      
        <table>
        <tbody>
        <tr>
        <td>X</td>
        <td><Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></td>
        <td width="200px"><img src={this.props.imgUrl} width="100px" height="100px"></img></td>
        <td width="200px">{this.props.item}</td>
        
        <td width="200px">
      <button onClick={this.handleIncrement}> + </button>
      {this.state.count1}
      <button onClick={this.handleDecrement}> - </button>
      </td>
      <td width="200px">{this.props.desc}</td>
      </tr>
      </tbody>
      </table>
      </>
    )
  }
}