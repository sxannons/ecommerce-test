import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import { database, dbCollection, dbGetDocs, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';
import ShopActionTypes from './shopTypes';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = dbCollection(database, 'collections');
    const snapshot = yield dbGetDocs(collectionRef);
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
