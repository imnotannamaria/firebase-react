import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAKswI72jV749cCn5-4bs_tAnZEuzUJr_A',
  authDomain: 'firebase-react.firebaseapp.com',
  projectId: 'firebase-react',
  storageBucket: 'firebase-react.appspot.com',
  messagingSenderId: '912561787310',
  appId: '1:912561787310:web:671c22a413c0ea1052f83f',
  measurementId: 'G-CRDD6G7XYY',
}

initializeApp(firebaseConfig)

export const auth = getAuth()
