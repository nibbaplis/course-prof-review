import React , {Component} from 'react';
import styles from './form.css';
import API from '../utils/API';

class CourseForm extends Component {
  state = {}
  handleSubmit(e){
    e.preventDefault();
    var Name = this.refs.name.value;
    var Description = this.refs.desc.value;
    
    
    API.post('/api/course/add', {
        Name : Name,
        Description: Description,
        Professor_history: [],
        Reviews: [],
        Relevant_tags: [],
        Average_grade: 0
      }).then(function (response) {
        alert("Course added successfully!");
        window.location = '/course/add';
      }).catch(function (error) {
        console.log(error);
      });
  }
  render(){
    this.handleSubmit = this.handleSubmit.bind(this)
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="name"/> 
        <textarea type="text" placeholder="Description" ref="desc"/>
        <input type="text" placeholder="Relevent Tags" ref="tags"/>
        <input type="number" placeholder="Average Grade" ref="grade"/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default CourseForm;