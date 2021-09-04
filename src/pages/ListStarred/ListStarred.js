import  React, {Component} from "react";
import Lista from '../../styledcomponents/Lista';
import GitHubApp from '../../pages/GitHubApp/GitHubApp';
import {connect} from 'react-redux';
import Grid from '../../styledcomponents/Grid';
class ListStarred extends Component{
		constructor(props){
			super(props);
			this.state={};
		}
		render(){
		return(
		<div>
			<GitHubApp />
			<Grid>
				{this.props.starred.map(item => 
					<Lista>
						{item.name}<br />
						fullname: <br/>
						{item.full_name}
					</Lista>
				)}
			</Grid>
		</div>
		);
	}
};
const mapStateToProps = (state) =>({
	starred: state.usersearch.starred
});
export default connect(mapStateToProps)(ListStarred);