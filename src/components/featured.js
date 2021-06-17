import "./../styles/featured.css";
import bg1 from "./../images/bg1.jpg"
import bg2 from "./../images/bg2.jpg";


let Featured = ()=>{

let titleArray = [
    {
        title:"Title of vertical gallery",
        date:"Travel / August 21 2017"
    },
    {
        title:'The  Sound  cloud\nYou  loved  is  doomed',
        date:"Travel / August 21 2017"
    },
    {
        title:'The  Sound  cloud\nYou  loved  is  doomed',
        date:"Travel / August 21 2017"
    },

]

    return(
        <>
            <div className = "featured-conatiner">
                <div className = "featured-item1 featured-item">
                    <img src={bg1} alt="bg1"></img>
                    <div className="title-contianer">
                        <p className = "title">
                            {titleArray[0].title}
                        </p>
                        <p className = "date">
                            {titleArray[0].date}
                        </p>
                    </div>
                </div>
                <div className = "featured-item2 featured-item">
                    <img src={bg2} alt="bg2"></img>
                    <div className="title-contianer2">
                    <p className = "title">
                        {titleArray[1].title}
                    </p>
                    <p className = "date">
                        {titleArray[1].date}
                    </p>
                    </div>
                </div>
                <div className = "featured-item3 featured-item">
                    <img src={bg2} alt="bg2"></img>
                    <div className="title-contianer3">
                        <p className = "title">
                            {titleArray[2].title}
                        </p>
                        <p className = "date">
                            {titleArray[2].date}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured;