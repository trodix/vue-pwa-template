import Api from '../../axios.config'

export default {
    login({ _email, _password }) {
        return Api.post('/login_check', {
            _username: _email, 
            _password: _password
        })
    }
}