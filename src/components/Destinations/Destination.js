import React from "react";
import "./Destination.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import {db} from "../../firebase"

function Destination() {
  // const [destination, setDestination] = useState([]);

  // useEffect(() => {
  //   db.collection("Destination").onSnapshot(snacpshot => {
  //     setDestination(snacpshot.docs.map(doc => {
  //       {

  //       }
  //     }))
  //   })
  // })
  return (
    <div>
      <div className="search-body">
        <div className=" search_input">
          <SearchIcon className="search_inputIcon" />
          <input placeholder="Destination" />

          <ArrowForwardIcon type="submit" className="search_inputIcon" />
        </div>
      </div>

      <div className="desti-wrapper"></div>
    </div>
  );
}

export default Destination;
