import alt from 'core/Dispatcher';
import AnimesActions from 'actions/AnimesActions';

class AnimesStore {
  constructor() {
    this.bindListeners({
      handleFetchedAnimes: AnimesActions.fetchedAnimes,
      handleFetchingAnimes: AnimesActions.fetchAnimes,
      handleFailure: AnimesActions.fetchingFailed
    });

    this.animes = {};
    this.fetching = false;
  }

  handleFetchedAnimes(animes) {
    this.setState(prevState => {
      prevState.fetching = false;
      prevState.animes = animes;
      console.log('Animes fetched', animes);
      return prevState;
    });
  }

  handleFetchingAnimes() {
    this.setState({fetching: true});
  }

  handleFailure(error) {
    console.error(error);
  }
}

export default alt.createStore(AnimesStore, 'AnimesStore');
