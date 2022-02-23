import firebase from "firebase/compat";

export default {
    actions: {
        async login({dispatch, commit}, {login, password}) {
            try{
                await firebase.auth().signInWithEmailAndPassword(login, password)
            } catch (e) {
                throw e
            }
        }
    }
}