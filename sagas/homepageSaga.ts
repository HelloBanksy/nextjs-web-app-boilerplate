import { takeLatest, put } from 'redux-saga/effects'

function* setSomepageData(props: any) {
  yield put({ type: `${props.type}_ASYNC`, data: 'Hello there!' })
}

export function* homepageSaga() {
  yield takeLatest('SET_HOMEPAGE_DATA', setSomepageData)
}
