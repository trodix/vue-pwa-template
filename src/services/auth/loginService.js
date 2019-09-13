import Api from '../../axios.config'

export default {
    login({ _email, _password }) {
        return Api.post('/login', {
            _email, _password
        })
    }
}