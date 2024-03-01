import MonthsList from "./MonthsList";
import useFetch from "./useFetch";
import ReactLoading from 'react-loading';

const Months = () => {
  const { error, isPending, data: months } = useFetch('http://localhost:8000/Tbl_Months')
  console.log(months);
  return (
    <div className="months">
      { error && <div>{ error }</div> }
      { isPending &&
      <div style={{height:"70vh"}} className="d-flex justify-content-center align-items-center mt-5">
       <ReactLoading type="balls" color="red" height={667} width={375} />
      </div>}
      { months && <MonthsList months={months} /> }
    </div>
  );
}
export default Months;