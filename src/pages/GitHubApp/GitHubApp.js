//React
import React, {Component} from "react";
//components
import Profile from '../../components/Profile/Profile';
import Repositories from '../../components/Repositories/Repositories';
import NaoEncontrada from '../../components/NaoEncontrada/NaoEncontrada';
//styled components
import Button from '../../styledcomponents/Button';
// redux e actions
import {connect} from 'react-redux';
import {changeNome, changeApi} from '../../actions/userActions';
//Router
import {Link} from 'react-router-dom';
class GitHubApp extends Component{
		constructor(props){
			super(props);
			this.state={};
			this.guardarNome = this.guardarNome.bind(this);
			this.chamarAPI = this.chamarAPI.bind(this);
		}
		chamarAPI(nome){
			fetch('https://api.github.com/users/'+nome)
			.then(resposta => resposta.json())
			.then(json =>{
				console.log(json);
				this.props.changeApi(json);
			});
			}
		guardarNome(){
		let nome = document.getElementById('inputnome').value;
		this.chamarAPI(nome)
		this.props.changeNome(nome);
		}
		
		render(){
		return(
				<div>
					<div className='pesquisa'>
						<input type='text' id='inputnome' placeholder= 'Digite qualquer nome aqui'/>
						<Button onClick={this.guardarNome}>
							<Link to='/'>Procurar</Link>
						</Button>
					</div>
					{this.props.info.name?<div><Profile/><Repositories/></div>  : <NaoEncontrada/>}
				</div>
		);
		}
};
const mapActionsToProps = {
	changeNome,
	changeApi
};
const mapStateToProps = (state) =>({
	nome: state.usersearch.nome,
	info: state.usersearch.info
}); 
export default connect(mapStateToProps, mapActionsToProps)(GitHubApp);