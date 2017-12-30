import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const DesignerCard = props => {
  console.log("%c >> Inside render DesignerCard \n", "color: #bada55");
  console.log("PROPS: ", props);
  console.log("----------------------- \n");
  return (
    <Card>
      {/* <Image src={} /> */}
      <Card.Content>
        <Card.Header>{props.data.designer_name_en}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{props.data.facebook}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default DesignerCard;
