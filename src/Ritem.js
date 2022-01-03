
import displayimage from "./images/logo.svg";
export const Ritem = ({ data, deleteData }) => {
  return (
    <>
      <div className="Ritemclass">
        <div>
          <img src={data.image || displayimage} alt="displayimage"></img>
        </div>
        <div>
          <p>Title : {data.title}</p>
          <p> ingredients: {data.ingredients}</p>
          <p>time to cook : {data.timetocook}</p>
          <p>instructions : {data.instructions}</p>
          
          
            
        </div>
        <div>
          <button className="deleteButton" onClick={() => deleteData(data.id)}>
            X
          </button>
        </div>
      </div>
      
    </>
  );
};
