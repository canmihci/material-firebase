import * as firebase from 'firebase'
import FirebaseConfig from '@/api/config'

const firebaseApp = firebase.initializeApp(FirebaseConfig)

export default firebaseApp
