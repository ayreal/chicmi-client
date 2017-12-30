import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

class DesignerCard extends Component {
  isUserDesigner = designer => {
    return designer.id === this.props.data.id;
  };

  renderFollowButton = () => {
    // if the currentDesigner is also a userDesigner
    if (this.props.user.designers.find(this.isUserDesigner)) {
      return (
        <Button
          animated
          size="small"
          textAlign="center"
          onClick={() => this.props.handleUnfollowDesigner(this.props.data)}
        >
          <Button.Content visible>Unfollow</Button.Content>
          <Button.Content hidden>
            <Icon name="cancel" />
          </Button.Content>
        </Button>
      );
    } else {
      return (
        <Button
          animated
          onClick={() => this.props.handleFollowDesigner(this.props.data)}
          size="small"
          textAlign="center"
        >
          <Button.Content visible>Follow</Button.Content>
          <Button.Content hidden>
            <Icon name="check" />
          </Button.Content>
        </Button>
      );
    }
  };

  render() {
    const { data } = this.props;

    return (
      <Card>
        <Image src={data.designer_hero_card_url} />
        <Card.Content>
          <Card.Header>{data.designer_name_en}</Card.Header>
          <Card.Meta>
            <span className="date">{data.type_name}</span>
          </Card.Meta>
          {this.props.loggedIn ? this.renderFollowButton() : null}
          <Card.Description>
            <a href={data.website} target="_blank">
              Designer Website
            </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a
            href={`https://www.instagram.com/${data.instagram}`}
            target="_blank"
          >
            <Icon name="instagram" size="large" />
          </a>
          <a href={data.facebook} target="_blank">
            <Icon name="facebook" size="large" />
          </a>
          <a href={`https://www.twitter.com/${data.twitter}`} target="_blank">
            <Icon name="twitter" size="large" />
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default DesignerCard;
