import './../styles/latestStories.css';
import HeadingText from './heading-text';
import Smallpara from './small-para';
import Catgorydate from './cat-dat';
import LoadButton from './load-button'; 
const Lateststories = ()=>{
    let storiesArray = [
        {
            id:'1',
            title:`Catch waves with an adventure guide`,
            description:"Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces",
            category:"TECH",
            date:'/ TODAT AT 11:54'
        },
        {
            id:'2',
            title:'Catch waves with an adventure guide',
            description:"Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces",
            category:"STYLE",
            date:'/ August 21 2017'
        },
        {
            id:'3',
            title:'Catch waves with an adventure guide',
            description:"Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces",
            category:"STYLE",
            date:'/ August 21 2017'
        }
    ]
    return(
        <>
            <div className="latest-stories-contianer">
                <HeadingText heading={"Latest Stories"}/>
                <div className="latest-stories-list">
                    {storiesArray.map((item,index)=>{
                        let a;
                        if(index===2)
                        {
                              a = "last"; 
                        }
                        else{
                            a = ""
                        }
                        return(
                            <div className={"latest-stories-item "+(a)} key={item.id}>
                                <p className="story-heading">{item.title}</p>
                                <Smallpara para={"story-para"} description={item.description}/> 
                                <Catgorydate category={item.category} date={item.date} />
                            </div>
                        )
                    })}
                    
                </div>
                <LoadButton button="Smallright" text="View More"/>
            </div>
        </>
    )
}
export default Lateststories;