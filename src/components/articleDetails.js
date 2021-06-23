import './../styles/articleDetails.css';
import ProfileDetails from './profile';
import Social from './social';
import ReactImage from './../images/Postpage-web – 1/react.png';
import Code from './../images/Postpage-web – 1/codeimg.png';
import Tag from './tag';
import Clap from './clap';

const ArticleDetails = ()=>{
    let ArticleDetailsArray =[
        {
            heading:'5 Ways to animate a React app.',
            image1:`${ReactImage}`,
            image2:`${Code}`,
            paragraph:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.",
            paragraph2:"Let’s talk about them"

        }
    ]

    return(
        <div className="article-Deatils-Container">
            <h2 className="article-heading">{ArticleDetailsArray[0].heading}</h2>
            <div className="profile-container">
                <ProfileDetails name="name"/> 
                <Social />                
            </div>
            <div className="article-desccription-container">
                <img src={ArticleDetailsArray[0].image1} alt="ReactImage" className="react-image"></img>
                <p className="article-paragraph">
                    {ArticleDetailsArray[0].paragraph}
                </p>
                <p className="article-paragraph">
                    {ArticleDetailsArray[0].paragraph2}
                </p>
                <img src={ArticleDetailsArray[0].image2} alt="CodeImage" className="codeImage"></img>
                <Tag /> 
                <Clap />     
                <hr className="line"/>
                <ProfileDetails name="footer" />
                <hr className="line"/>
            </div>
        </div>
        
    )
}
export default ArticleDetails;