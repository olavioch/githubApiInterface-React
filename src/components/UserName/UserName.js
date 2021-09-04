import  React, {Component} from "react";
import {connect} from 'react-redux';
class UserName extends Component{
		constructor(props){
			super(props);
			this.state = {};
		}
		render(){
		return(
		<div className="UserName">
			<h1>{this.props.nome}</h1>
			Usuario: {this.props.nome}<br/>
			Compania: {this.props.info.company} <br/>
			local: {this.props.info.location}<br/>
			<ul>
				<li>followers: {this.props.info.followers}</li>
				<li>following: {this.props.info.following}</li>
				<li>Gists: {this.props.info.public_gists}</li>
				<li>Repos: {this.props.info.public_repos}</li>
			</ul>
		</div>
		);
		}
};
const mapStateToProps = (state) => ({
	nome: state.usersearch.nome,
	info: state.usersearch.info
});
export default connect(mapStateToProps)(UserName);