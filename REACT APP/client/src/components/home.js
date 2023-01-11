import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { indigo } from "@mui/material/colors";

const Homepage = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [detected, setDetected] = useState();
  const [semantic, setSemantic] = useState();
  const [toolslist, setTools] = useState();
  const [processing1, setProcessing1] = useState(false);
  const [processing2, setProcessing2] = useState(false);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setDetected();
    setSemantic();
    console.log("yo" + e.target.files);
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    console.log(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  async function detect() {
    console.log(selectedFile);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:8000/object-to-img", formData, config)
      .then((res) => {
        setProcessing1(true);
        setTools(res.data.result);
        var encode_image = JSON.parse(res.data.img.body)["image"];
        var image = new Image();
        image.src = "data:image/png;base64," + encode_image;
        console.log(typeof image);
        setDetected("data:image/png;base64," + encode_image);
        setProcessing1(false);
      })
      .catch((err) => console.log(err));
    axios
      .post("http://localhost:8000/image-segmentation", formData, config)
      .then((res) => {
        setProcessing2(true);
        console.log(res);
        var encode_image = JSON.parse(res.data[1].body)["image"];
        var image = new Image();
        image.src = "data:image/png;base64," + encode_image;
        console.log(typeof image);
        setSemantic("data:image/png;base64," + encode_image);
        setProcessing2(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <center>
      <div className="homepage"style={{marginTop:"50px"}}>
        <h1 className="message" >Welcome {props.details.user.name} !!!</h1>
        <br></br>
        <input className="upload" type="file" onChange={onSelectFile} style={{aliginItems:"center",textAlign:"center"}}/> <br />
        <br />
        {selectedFile && (
          <img
            src={preview}
            style={{ maxWidth: "800px", maxHeight: "600px" }}
          />
        )}
        <br /> <br />
        <button  onClick={detect} className="detect" style={{padding:"0px 10px",borderRadius:"8px",color:"#98AFC7"}}>
          Detect
        </button>
        <br />
        <br />
     
      {processing1 && processing2 ? (
        <h1>processing.......</h1>
      ) : (
        <div className="image-detect">
          {detected && (
            <h1>
              Detected Image:
            </h1>
          )}
          <br />
          <br />
          <br />
          <div
            container
            spacing={2}
            style={{ paddingLeft: "200px", paddingTop: "10px" }}
          >
            <div xs={8}>
              <div>
                {detected && (
                  <img
                    src={detected}
                    style={{ maxWidth: "800px", maxHeight: "600px" }}
                  />
                )}
              </div>
            </div>
            <div xs={8}>
              <div>
                {detected && (
                  <h1 style={{ color: "indigo",textAlign:"center" }}>Detected person:</h1>
                )}
                {detected && (
                  <ul style={{ color: "white" }}>
                    {toolslist.length > 0 &&
                      toolslist.map((item) => (
                        <li key={item} style={{ textAlign:"center"}}>
                          {" "}
                          <h2 style={{ color: "#002233",textAlign:"center" }}>{item}</h2>{" "}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          {semantic && (
            <h1 style={{ paddingLeft: "50px" }}>Segmented Image:</h1>
          )}
          <br />
          <div
            container
            spacing={2}
            style={{ paddingLeft: "200px", paddingTop: "10px" }}
          >
            <div xs={8}>
              <div>
                {semantic && (
                  <img
                    src={semantic}
                    style={{ maxWidth: "800px", maxHeight: "600px" }}
                  />
                )}
              </div>
            </div>
            <div xs={4}>
              <div>{semantic}</div>
            </div>
          </div>
        </div>
      )}
      
    </div>
    <div className="btn">
    <a href="/" className="btn btn-dark">LOG OUT</a>
    </div>
    </center>
  );
};

export default Homepage;
