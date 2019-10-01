import Api from '../../axios.config'

export default {
    login({ _email, _password }) {
        return Api.post('/login_check', {
            _username: _email, 
            _password: _password
        })
    },
    register({ _email, _password, _passwordConfirm, _lastname, _firstname }) {
        return Api.post('/public/signup', {
            _email: _email, 
            _password: _password,
            _passwordConfirm: _passwordConfirm,
            _lastname: _lastname,
            _firstname: _firstname
        })
    }
}