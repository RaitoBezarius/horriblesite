import React from 'react';

import {PanelGroup} from 'react-bootstrap';

import AnimesStore from 'stores/AnimesStore';
import AnimesActions from 'actions/AnimesActions';
import connectToStores from 'alt/utils/connectToStores';

import Anime from 'components/Anime.react';

import _ from 'lodash';

@connectToStores
export default class AnimeList extends React.Component {
  componentDidMount() {
    AnimesActions.fetchAnimes();
  }
  static propsTypes = {
    animes: React.PropTypes.object.isRequired
  }
  static getStores() {
    return [AnimesStore]
  }
  static getPropsFromStores() {
    return AnimesStore.getState();
  }

  render() {
    return (
      <PanelGroup accordion>
        {_.size(this.props.animes) > 0 ? _.map(this.props.animes, (anime, key) => {
          return (
            <Anime key={key}
            anime={anime}
          />
          );
        }) : (<h1>No animes :(</h1>)}
        </PanelGroup>
    );
  }
}
