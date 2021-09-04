import  React, {Component} from "react";
import Lista from '../../styledcomponents/Lista';
import GitHubApp from '../../pages/GitHubApp/GitHubApp';
import {connect} from 'react-redux';
import Grid from '../../styledcomponents/Grid';
class ListRepositories extends Component{
		constructor(props){
			super(props);
			this.state={};
		}
		render(){
			return(
			<div>
				<GitHubApp />
				<Grid>
					{this.props.repos.map(item => 
						<Lista>
							<a href={item.html_url}>
							{item.name}
							</a><br />
							fullname: <br/>
							{item.full_name}
						</Lista>
					)}
				</Grid>
			</div>
			);
		}
};
const mapStateToProps = (state) =>({repos: state.usersearch.repos});
export default connect(mapStateToProps)(ListRepositories);