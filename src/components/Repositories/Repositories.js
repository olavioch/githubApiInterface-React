import  React, {Component} from "react";
import Button from '../../styledcomponents/Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRepos, getStarred} from '../../actions/userActions';
class Repositories extends Component{
		constructor(props){
			super(props);
			this.state = {};
			this.chamarApiRepositorio = this.chamarApiRepositorio.bind(this);
			this.chamarApiStarred = this.chamarApiStarred.bind(this);
		}
		chamarApiRepositorio(){
			fetch("https://api.github.com/users/"+this.props.nome+"/repos")
			.then(resposta => resposta.json())
			.then(json => {
					this.props.getRepos(json);
			});
		}
		chamarApiStarred(){
			fetch("https://api.github.com/users/"+this.props.nome+"/starred")
			.then(resposta => resposta.json())
			.then(json => {
					this.props.getStarred(json);
			});
		}
		render(){
			return(
				<div className="Repositories">
					<Button onClick={this.chamarApiRepositorio}>
						<Link to='/repositorios'>Repositories</Link>
					</Button>
					<Button onClick={this.chamarApiStarred}>
						<Link to='/starred'>Starred</Link>
					</Button>
				</div>
			);
		}
};
const mapStateToProps = (state) =>({
	nome: state.usersearch.nome,
	repos: state.usersearch.repos,
	starred: state.usersearch.starred
});
const mapActionsToProps = {
	getRepos,
	getStarred
};
export default connect(mapStateToProps, mapActionsToProps)(Repositories);