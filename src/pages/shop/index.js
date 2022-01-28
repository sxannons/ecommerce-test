import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

import { database, dbCollection, onFirestoreChange, convertCollectionsSnapshotToMap, dbGetDocs } from '../../firebase/firebase.utils';
import { updateCollections } from '../../store/shop/shopActions';

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-4eb7d/databases/(default)/documents/collections`)
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    //Promise pattern
    const collectionRef = dbCollection(database, 'collections');
    dbGetDocs(collectionRef).then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);

      this.setState({ loading: false });
    });

    //// Observable pattern
    // this.unsubscribeFromSnapshot = onFirestoreChange(collectionRef, async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);

    //   this.setState({ loading: false });
    // });
  }
  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) this.unsubscribeFromSnapshot();
  }

  render() {
    return (
      <div className="shop-page">
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
