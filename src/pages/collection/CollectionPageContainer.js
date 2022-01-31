import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../store/shop/shopSelectors';

import withSpinner from '../../components/with-spinner/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(connect(mapStateToProps), withSpinner)(CollectionPage);

export default CollectionPageContainer;
