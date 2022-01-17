import $api from "./index";

export default class AuthService {
    static async login(email,password){
        return $api.post('/login', {email,password})
    }

    static async registration(data){
        return $api.post('/registration', data)
    }

    static async logout(){
        return $api.post('/logout')
    }
}