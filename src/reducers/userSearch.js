const initialState = {
	nome: '',
	info: {}, 
	repos: [],
	starred: []
};
const userSearch = (state=initialState, action) => {
	if(action.type == 'changeNome'){
		return {...state, nome: action.payload.nome}
	}
	if(action.type == 'changeApi'){
		return {...state, info: action.payload.info}
	}
	if(action.type == 'getRepos'){
		return {...state, repos: action.payload.repos}
	}
	if(action.type == 'getStarred'){
		return {...state, starred: action.payload.starred}
	}
	return state;
};
export default userSearch;