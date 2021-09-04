import  React, {Component} from "react";
import Foto from '../../styledcomponents/Foto';
import {connect} from 'react-redux';
class Avatar extends Component{
		constructor(props){
			super(props);
			this.state = {};
		}
		render(){
			return(
			<div>
				<Foto src={this.props.info.avatar_url} />
			</div>
			);
		}
};
const mapStateToProps = (state) => ({
	info: state.usersearch.info
});
export default connect(mapStateToProps)(Avatar);