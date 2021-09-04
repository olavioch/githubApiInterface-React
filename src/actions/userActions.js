export const changeNome = (nome) =>{
	return{
		type:'changeNome',
		payload : {
			nome
		}
	};
}
export const changeApi = (info) => {
	return{
		type: 'changeApi',
		payload: {
			info
		}
	};
}
export const getRepos = (repos) => {
	return{
		type: 'getRepos',
		payload: {
			repos
		}
	};
}
export const getStarred = (starred) => {
	return{
		type: 'getStarred',
		payload: {
			starred
		}
	};
}