// import logo from './logo.svg';
import p6 from "./photo_2024-10-05_17-11-25.jpg"
import './App.css';
function App() {
  return (
    <div className="card">
      <div className="C1">
        <img className="imageDashboard" src={p6} alt="helooo i am not heer" />
      </div>
      <div className="C2">
        <div className="productdetails">
          <h1 className="productName">
            Lift Check Valve with SS screen DN350-1000{" "}
          </h1>
          <div className="PI">
            <p className="productdeDescription">
              hghgfhg mnzdbj,hvglwf ,hlkhlkaf ,kamsbdlhjhblascm,hhhhhhhhhhhhhbjjhsjhb,,,,,,,,,,,,,,,,,,,,,cmsncljhaljfm,n,jbljgasfcb,,,,cmbkugougefhnl
            </p>
            <img className="pdf" src={p6} alt="helooo i am not heer" />
          </div>
        </div>
        <p className="C3"> <a href="#">Contact Us </a>
          to order & inquire about this product 
        </p>
      </div>
    </div>
  );
}
export default App;
