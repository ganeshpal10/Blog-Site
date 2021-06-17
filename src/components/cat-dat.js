import './../styles/Category-date.css';

const Catgorydate =(props)=>{
    return(
        <>
            <p className="para-category">{props.category} &nbsp; <span className="para-date">{props.date}</span></p>
        </>
    )
}
export default Catgorydate;
