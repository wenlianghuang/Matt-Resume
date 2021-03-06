import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Dropzone from 'react-dropzone';
import UploadForm from './Components/UploadForm';
//import {UPLOADFILE} from './graphql';
//import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
//import {useMutation,gql} from '@apollo/client';

import {useMutation} from '@apollo/react-hooks';
import {UPLOADFILE} from './graphql';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

//暫時沒辦法upload with Graphql

/*const uploadFileMutation = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;*/


//基本上在各別的server 和 client都沒問題，問題可能就是出現由client stream to server的過程中出錯QQ
//function App(){
  /*return(
  <Mutation mutation={UPLOADFILE}>
    {mutate => (
      <Dropzone onDrop={([file]) => mutate({ variables: { file } })}>
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
    )}
  </Mutation>
  )*/
  
  /** 20210306 
  const [uploadFile] = useMutation(UPLOADFILE,{
    onCompleted: data => console.log(data) 
  });
  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    if(!file) return;
    uploadFile({variables: {file}}); 
  };
  
  return(
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange}/>
    </div>
  )*/
  
//}

export default App;
