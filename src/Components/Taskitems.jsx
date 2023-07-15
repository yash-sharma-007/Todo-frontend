import React from "react";
import "../Styles/taskitems.css";

const Taskitems = ({
  title,
  description,
  isCompleted,
  time,
  updateHandler,
  deleteHandler,
  id,
}) => {
  let days=Math.ceil( Math.abs(new Date(Date.now()) - new Date(time)) / (1000 * 60 * 60 * 24));
  let daysMessage;
  if (days === 0) {
    daysMessage = 'Today';
  } else if (days === 1) {
    daysMessage = 'Yesterday';
  } else {
    daysMessage = `${days} days ago`;
  }
  
  return (
    <div>
      {isCompleted ? (
       <div
       className="todo p-2 my-5"
       style={{
         borderRadius: '10px',
         backgroundColor: "#16f041",
         border: "1px solid black",
         overflow: "hidden",
         position: "relative", 
       }}
     >
       <div>
         <h6
           style={{
             position: "absolute", 
             top: "10px", 
             right: "10px", 
           }}
         >
           {daysMessage}
         </h6>
         <div className="remove-scroll">{title}</div>
         <p className="remove-scroll">{description}</p>
         <input
           style={{ marginLeft: "5px", transform: "scale(2)" }}
           className="m-3"
           onChange={() => updateHandler(id)}
           type="checkbox"
           checked={isCompleted}
         />
         <button
           style={{ backgroundColor: "red", border: "1px solid black" }}
           onClick={() => deleteHandler(id)}
           className="btn ml-3"
         >
           Delete
         </button>
       </div>
     </div>
     
      ) : (
        <div
  className="todo p-2 my-5"
  style={{
    borderRadius: '10px',
    backgroundColor: "#ff878d",
    border: "1px solid black",
    overflow: "hidden",
    position: "relative", 
  }}
>
  <div>
    <h6
      style={{
        position: "absolute", 
        top: "10px", 
        right: "10px", 
      }}
    >
      {daysMessage}
    </h6>
    <div className="remove-scroll">{title}</div>
    <p className="remove-scroll">{description}</p>
    <input
      style={{ marginLeft: "5px", transform: "scale(2)" }}
      className="m-3"
      onChange={() => updateHandler(id)}
      type="checkbox"
      checked={isCompleted}
    />
    <button
      style={{ backgroundColor: "red", border: "1px solid black" }}
      onClick={() => deleteHandler(id)}
      className="btn ml-3"
    >
      Delete
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default Taskitems;
