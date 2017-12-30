import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

class DesignerCard extends Component {
  isUserDesigner = designer => {
    designer.id === this.props.data.id;
  };

  renderFollowButton = () => {
    // if the currentEvent is also a userEvent
    if (this.props.userDesigners.find(this.isUserDesigner)) {
      return (
        <Button animated size="small" textAlign="center">
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
    console.log("%c >> Inside render DesignerCard \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");

    return (
      <Card>
        <Image src={data.designer_hero_card_url} />
        <Card.Content>
          <Card.Header>{data.designer_name_en}</Card.Header>
          <Card.Meta>
            <span className="date">{data.type_name}</span>
          </Card.Meta>
          {this.renderFollowButton()}
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
