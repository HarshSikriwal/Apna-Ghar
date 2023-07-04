import Loading from "../assets/Loading.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        src={Loading}
        alt="Loading..."
        className="text-center m-auto"
      ></img>
    </div>
  );
}

export default Spinner;
