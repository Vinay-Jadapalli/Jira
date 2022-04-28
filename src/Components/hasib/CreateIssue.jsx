import React, {useState} from 'react'
import "./CreateIssue.css"
import {Button} from '@mui/material';

import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
// import img from "../assets/cloud.png"

function CreateIssue() {

  const [project, setProject] = useState("")
  const [issueType, setIssueType] = useState("")
  const [summary, setSummary] = useState("")
  const [description, setDescription] = useState("")
  const [assignee, setAssignee] = useState("")
  const [labels, setLabels] = useState("")
  const [reporter, setReporter] = useState("")
  const [browse, setBrowse] = useState("")
  const [linkedIssues, setLinkedIssues] = useState("")
  const [selectIssue, setSelectIssue] = useState("")
  const [flagged, setFlagged] = useState("")

  const [check, setCheck] = useState("")


  const handleChange = (e, editor) => {
    const data = editor.getData()
    setDescription(data)
  }


  return (
    <>
      <div className="main">
        <div className="top fixed-top">
          <h3>Create Issue</h3>

          <div className='import'>
            <input
              accept="image/*"
              // className={classes.input}
              style={{display: 'none'}}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" style={{backgroundColor: "#f2f2f2", height: "30px"}} >
                import issues
              </Button>
            </label>

          </div>
          {/* <h2>...</h2> */}
        </div>

        <div className="contained">


          <div style={{marginTop: "36px"}}>
            <p>Project *</p>
            <div className='selectItem'>
              {/* <img src={img} alt="" /> */}
              <select className="form-select" aria-label="Default select example"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              >

                <option >

                  ELIT</option>
                <option >elite</option>
                <option > Elit</option>
              </select>
            </div>
          </div>



          <div style={{marginTop: "36px"}}>
            <p>Issue type *</p>
            <div className='selectItem'>
              <select className="form-select" aria-label="Default select example"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}

              >
                <option value="">Task</option>
                <option value="1">Bugs</option>
                <option value="2">Error</option>
                <option value="3">Bug Fixing</option>
              </select>
            </div>
          </div>

          <hr style={{opacity: "40%", width: "99%", marginTop: "30px"}} />

          <div className='message'>
            <p>Summary *</p>
            <div className="input-group">
              <textarea className="form-control" aria-label="With textarea"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
              >

              </textarea>
            </div>
          </div>




          <div className="col-sm-12 mt10" style={{marginTop: "25px"}}>
            <p >Description *</p>
            <CKEditor
              editor={ClassicEditor}
              className="color_highlight_text"
              data={description}
              onChange={handleChange}
              onReady={_editor => {

              }}

            // onChange={(_event, editor) => {
            //   const data = editor.getData();
            //   this.updateInputState("requirementInput", "reqDescription", data)
            // }}
            />

          </div>



          <div style={{marginTop: "36px"}}>
            <p>Assignee </p>
          </div>

          <div className='selectItem'>
            <select className="form-select" aria-label="Default select example"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            >
              <option value="">Automatic</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>



          <div style={{marginTop: "36px"}}>
            <p>Labels</p>
          </div>

          <div className='selectItem'>
            <select className="form-select" aria-label="Default select example"
              value={labels}
              onChange={(e) => setLabels(e.target.value)}
            >
              <option value="">Select label</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div style={{marginTop: "36px"}}>
            <p>Reporter *</p>
          </div>

          <div className='selectItem'>
            <select className="form-select" aria-label="Default select example"
              value={reporter}
              onChange={(e) => setReporter()}
            >
              <option value="">Hasibullah Ansari</option>
              <option value="1">Sameer Khan</option>
              <option value="2">King Bhai</option>
              <option value="3">Raja Bhai</option>
            </select>
          </div>

          <div className='browse'>
            <CloudUploadOutlinedIcon />
            <span>drop files to attch or</span>
            <input
              accept="image/*"
              // className={classes.input}
              style={{display: 'none'}}
              id="raised-button-file"
              multiple
              type="file"
              value={browse}
              onChange={(e) => setBrowse(e.target.value)}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" style={{color: "white", backgroundColor: "#245ee3", height: "30px"}} >
                browse
              </Button>
            </label>

          </div>


          <div style={{marginTop: "36px"}}>
            <p>Linked Issues </p>
          </div>

          <div className='selectItem'>
            <select className="form-select" aria-label="Default select example"
              value={linkedIssues}
              onChange={(e) => setLinkedIssues(e.target.value)}
            >
              <option value="">blocks</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className='selectItem' style={{marginTop: "20px"}}>
            <select className="form-select" aria-label="Default select example"
              value={selectIssue}
              onChange={(e) => setSelectIssue(e.target.value)}
            >
              <option value="">Select issues</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>


          <div style={{marginTop: "36px"}}>
            <p>Flagged </p>
          </div>

          <div className='selectItem'>
            <select className="form-select" aria-label="Default select example"
              value={flagged}
              onChange={(e) => setFlagged(e.target.value)}
            >
              <option value="">Blocks</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <span>Allows to flag issues with impediments.</span>
          </div>

        </div>

      </div>



      {/* ....... Footer ........  */}


      <div className='fixed-bottom mt-10'>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="flexCheckDefault"
            value={check}
            onChange={(e) => setCheck(e.target.value)}
          />

          <label className="form-check-label">
            Create another issue
          </label>
        </div>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn">cancel</button>
            <button type="button" className="btn btn-primary">create</button>

          </div>
        </div>

      </div>


    </>
  );
}

export default CreateIssue;
