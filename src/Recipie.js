
import { Ritem } from "./Ritem";
export const Recipie = ({ data, deleteData }) => {
  
  if (data === null) {
    return null;
  } else {
    return (
      <>
        {data.map((e,i) => {
          return <Ritem key={i} data={e} deleteData={deleteData} />;
        })}
      </>
    );
  }
};