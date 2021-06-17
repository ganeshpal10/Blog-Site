import './../styles/heading-text.css'

const HeadingText =(props)=>{
    return(
        <div className="latest-heading-text">
            <p>{props.heading}</p>
            <hr/>
        </div>
    )
}

export default HeadingText;