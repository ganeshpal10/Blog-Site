import './../styles/small-para.css';

const Smallpara=(props)=>{
    return(
        <>
            <p className={"small-para "+(props.para)}>{props.description}</p>
        </>
    )
}
export default Smallpara;