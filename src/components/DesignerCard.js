import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const DesignerCard = props => {
  console.log("%c >> Inside render DesignerCard \n", "color: #bada55");
  console.log("PROPS: ", props);
  console.log("----------------------- \n");
  return (
    <Card>
      <Image src={props.data.designer_hero_card_url} />
      <Card.Content>
        <Card.Header>{props.data.designer_name_en}</Card.Header>
        <Card.Meta>
          <span className="date">{props.data.type_name}</span>
        </Card.Meta>
        <Button onClick={() => props.handleFollowDesigner(props.data)}>
          Click
        </Button>
        <Card.Description>
          <a href={props.data.website} target="_blank">
            Designer Website
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href={`https://www.instagram.com/${props.data.instagram}`}
          target="_blank"
        >
          <Icon name="instagram" size="large" />
        </a>
        <a href={props.data.facebook} target="_blank">
          <Icon name="facebook" size="large" />
        </a>
        <a
          href={`https://www.twitter.com/${props.data.twitter}`}
          target="_blank"
        >
          <Icon name="twitter" size="large" />
        </a>
      </Card.Content>
    </Card>
  );
};

export default DesignerCard;
