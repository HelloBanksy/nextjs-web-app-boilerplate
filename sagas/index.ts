import { all } from 'redux-saga/effects'
import { homepageSaga } from './homepageSaga'

export default function* rootSaga() {
  yield all([
    homepageSaga()
  ])
}
