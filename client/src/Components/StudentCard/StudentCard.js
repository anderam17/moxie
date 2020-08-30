import React from "react"

function studentCard(props){
return (
<>
<div data-id={props.id} className="card mt-3 col-md-4">
        <div className="card-header text-center">
        <h5 className="student-name">{props.first_name} {props.last_name}</h5>
        </div>
        {/* //! how to put things in class name */}
        <div className="card-body ${props.grade}" id="cardBody">
      <p className="card-text studentGrade">Grade: <span className="stuGrade">{props.grade} </span> </p>
      {/* //! NEed to figure out teacher name */}
      <p className="card-text teacher">Homeroom Teacher: <br/> <span className="hrTeacher"> Teacher First + Teacher Last </span> </p>
      {/* //! {props.detention? "Yes" : "No"} --> This was in the og thing, maybe put it in the call instead */}
      <p className="card-text studentDetention">Detention: <span className="hasDetention"> {props.detention}</span> </p> 
      </div>

      <div className="card-footer mx-auto">
      <div className="btn-group" role="group">

      <button type="button"className="btn darkblue" data-id={props.id} data-toggle="modal" data-target="#updateModal" id="edit">Edit</button>

      <button type="button" className="btn yellow" data-id={props.id} data-detention={props.detention} id="detentionBtn">Detention</button>

      <button type="button" className="btn red" id = "deleteBtn" data-id={props.id}>Delete</button>
      </div>

      </div>
      </div>
      </>
)
    }

    export default studentCard;