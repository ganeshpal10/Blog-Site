import './../styles/tag.css';

const Tag = (props)=>{

    return(
        <>
        <div className="tag-container">
            {props.tag.map((item,index)=>{
                return(
                    <p className="tag-item " key={index}>{item}</p>        
                )
            })}
        </div>
        </>
    )
}

export default Tag;