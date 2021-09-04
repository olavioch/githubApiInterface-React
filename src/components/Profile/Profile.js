import  React, {Component} from "react";
import Avatar from '../../components/Avatar/Avatar';
import UserName from '../../components/UserName/UserName';
import UserStatus from '../../components/UserStatus/UserStatus';
class Profile extends Component{
		render(){
			return(
				<div className="Profile">
					<Avatar/>
					<div>
						<UserName/>
						<UserStatus/>
					</div>
				</div>
			);}
};
export default Profile;