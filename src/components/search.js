import "../App.css";
import axios from "axios";

const search = ({setIsFetch,setSearchParam,setResponse,setLoader}) => {
    const handleSubmit = (e) => {
    
        e.preventDefault();
        const pincode = e.target.pincode.value;
        if (!/^\d{6}$/.test(pincode)) {
            alert("Please enter a 6-digit number for the pincode.");
        }else{
            setLoader(true)
            setSearchParam(pincode);
            
            const fetchData = async () => {
                try {
                    const response = await axios({
                        url: `https://api.postalpincode.in/pincode/${pincode}`,
                    });
                    
                    setResponse(response);
                    setIsFetch(true);
                    setLoader(false);
                } catch (error) {
                    alert(error);
                }
            };
            fetchData();
        }
      };
    
      return (
        <div>
          <h2>Enter Pincode</h2>
          <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Pincode" name="pincode" className="input-box" />
            <br/>
            <button className="btn">Lookup</button>
          </form>
        </div>
      );
    }
export default search;
