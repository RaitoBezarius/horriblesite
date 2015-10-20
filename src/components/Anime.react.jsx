import React from 'react';

import {Panel} from 'react-bootstrap';

class AnimeVersion extends React.Component {
  static propTypes = {
    version: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <section>
        <p>Quality: {this.props.version.quality}</p>
        {_.map(this.props.version.providers, provider => {
          return (
            <section>
              <a href={provider.link}>{provider.name}</a>
              <br />
            </section>
          );
        })}
      </section>
    );
  }
}


export default class Anime extends React.Component {
  static propTypes = {
    anime: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <Panel header={this.props.anime.title + ' ' + this.props.anime.episode} eventKey={this.props.anime.id}>
        {_.map(this.props.anime.versions, version => {
          return (
            <AnimeVersion version={version} />
          );
        })}
      </Panel>
    );
  }
}
