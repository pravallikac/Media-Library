import React, { Component } from 'react';
import Image from '../components/Image';
import { connect } from 'react-redux';
import './ImageList.css'

class ImageList extends Component {

    renderList(){
        return this.props.items.map( item => {
            return (
                <div className="row">
            <Image key={item.date_taken + item.title} item = {item} /> 
            </div>
        )});
    }
    
    render(){
        if(this.props.items && this.props.items != null){
           return<div>{this.renderList()}</div>
        }
        
        return <div></div>;
    }

}

function mapStateToProps(state){
    return {
        items : state.items
    };
}

export default connect(mapStateToProps)(ImageList);