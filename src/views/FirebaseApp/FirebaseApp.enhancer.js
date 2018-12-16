// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { deleteFirebaseApp as deleteFirebaseAppCreator } from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import { createShareLink } from '../../lib/firebaseApp';
import * as R from '../../routes';

const mapStateToProps = ({ currentFirebaseApp, firebaseApps }) => ({
  app: firebaseApps[currentFirebaseApp],
});

const mapDispatchToProps = { deleteFirebaseApp: deleteFirebaseAppCreator };

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleBackClick: R.HOME,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    handleDeleteClick: ({ app, deleteFirebaseApp, handleBackClick }) => () => {
      handleBackClick();
      deleteFirebaseApp(app.id);
    },

    handleShareClick: ({ app }) => () => {
      prompt('Share this link:', createShareLink(app));
    },

  }),
);

export default enhancer;