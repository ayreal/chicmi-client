import React from "react";
import { Comment } from "semantic-ui-react";

const CommentCard = props => {
  console.log("%c ... rendering Comment \n", "color: #42dff4");
  return (
    <Comment>
      <Comment.Avatar src={props.data.photo} />
      <Comment.Content>
        <Comment.Author as="a">{props.data.name}</Comment.Author>
        <Comment.Metadata>
          <div>{props.data.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>{props.data.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default CommentCard;
