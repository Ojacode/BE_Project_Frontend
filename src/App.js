// Example using Axios
import React, { useState, useEffect } from "react";
import "../src/App.css";
import axios from "axios";

function App() {
  // const [data, setData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  //  <div>
  // //    <br></br>
  // //    <br></br>
  // //    <br></br>
  // //    <br></br>
  // //  <h3 align="center">Google Scholar</h3>
  // //   <form class="form" action="/submit" method="post">
  // //           <label forname="name">Name of faculty</label>
  // //           <input type="text" id="name" name="name"></input>
  // //       <button class="btn">Submit</button>
  // //   </form>
  // //  </div>
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3 align="center">Model input</h3>
      {/* <form className="form"> */}
      <div className="form">
        <input type="file" onChange={handleFileChange} />
        <button className="btn" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {/* </form> */}
    </div>
  );

  // return (
  //   <div>
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <h3 align="center">Model input</h3>
  //     <form className="form">
  //       <label forname="name">File name</label>
  //       <input type="file" onChange={handleFileChange} />
  //       <button className="btn" onClick={handlePostRequest}>
  //         Submit
  //       </button>
  //       <pre>{JSON.stringify(data, null, 2)}</pre>
  //     </form>
  //   </div>
  // );
}

export default App;

// // import logo from './logo.svg';
// import './App.css';
// import React,{Component} from 'react';
// // import Home component
// import Google from "./google";
// import PointCloudVisualization from "./visualization"

// function App() {
//   return (
//     <div className="App">

//        {/* <Google/>
//         */}
//         <PointCloudVisualization/>
//       {/* </header> */}
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       {/* This is the alias of BrowserRouter i.e. Router */}
//       <Router>
//         <Switch>
//           {/* This route is for home component
//           with exact path "/", in component props
//           we passes the imported component*/}
//           <Route exact path="/" component={Home} />

//           {/* This route is for about component
//           with exact path "/about", in component
//           props we passes the imported component*/}
//           <Route path="/google" component={Google} />

//           {/* This route is for contactus component
//           with exact path "/contactus", in
//           component props we passes the imported component*/}
//           {/* <Route path="/contactus" component={ContactUs} /> */}

//           {/* If any route mismatches the upper
//           route endpoints then, redirect triggers
//           and redirects app to home component with to="/" */}
//           <Redirect to="/" />
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;
//
// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     {/* <img src={logo} className="App-logo" alt="logo" /> */}
//     <p>
//     <code>Helllooo</code>
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

//  <div>
//    <br></br>
//    <br></br>
//    <br></br>
//    <br></br>
//  <h3 align="center">Google Scholar</h3>
//   <form class="form" action="/submit" method="post">
//           <label forname="name">Name of faculty</label>
//           <input type="text" id="name" name="name"></input>
//       <button class="btn">Submit</button>
//   </form>
//  </div>

// );
// }

// export default App;
