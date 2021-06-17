import "./../styles/latest.css";
import latestimg from "./../images/latest.png"
import HeadingText from "./heading-text";
import Catgorydate from "./cat-dat";
import Smallpara from "./small-para";

const Latest = ()=>{

let latest = [
    {
        id:"1",
        heading:`Joshua Tree \nOvernight Adventure`,
        description:`Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces`,
        category:`Travel`,
        date:`/ August 21 2017`
    },
    {
        id:"2",
        heading:`Joshua Tree \nOvernight Adventure`,
        description:`Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces`,
        category:`Travel`,
        date:`/ August 21 2017`
    },
    {
        id:"3",
        heading:`Joshua Tree \nOvernight Adventure`,
        description:`Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces`,
        category:`Travel`,
        date:`/ August 21 2017`
    }
]
        return(
            <div className="latest-contianer">
                <HeadingText heading={"The Latest"}/>
                 <div className="latest-container-list">
                    {latest.map((item)=>{
                        return(
                            <div className="latest-container-item" key={item.id}>
                                <img src={latestimg} alt="latest"></img>
                                <div className="content">
                                    <h2 className="latest-title-heading">{item.heading}</h2>
                                    <Smallpara para={"para"} description={item.description}/>
                                    <Catgorydate category={item.category} date={item.date}/>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
}

export default Latest;