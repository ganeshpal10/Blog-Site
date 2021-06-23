import './../styles/profile.css';
import Mask from './../images/Postpage-web – 1/mask2.png';

const ProfileDetails= (props)=>{
    if(props.name==="name"){
        return(
            <div className="profile-details">
                <img src={Mask} alt=""></img>
                <div className="profile-description">
                    <p className="profile-name">Dmitry Nozhenko</p>
                    <p className="profile-date">Jan 28,2019 &middot; 10 min reads</p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="profile-details-footer profile-details">
                <img src={Mask} alt=""></img>
                <div className="profile-description-footer profile-description">
                    <p className="profile-written">WRITTEN BY</p>
                    <p className="profile-name-footer profile-name">Dmitry Nozhenko</p>
                    <p className="profile-date-footer profile-date">Jan 28,2019 &middot; 10 min reads</p>
                </div>
            </div>
        )
    }
}
export default ProfileDetails;