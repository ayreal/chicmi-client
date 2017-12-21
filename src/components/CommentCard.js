import React from "react";
import { Comment } from "semantic-ui-react";

const CommentCard = props => {
  console.log("%c ... rendering Comment \n", "color: #42dff4");
  return (
    <Comment>
      <Comment.Avatar src="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5dtbmo5eTa4c8T9FJukpS2y1xgpYwo_1680x8400" />
      <Comment.Content>
        <Comment.Author as="a">{props.data.user_id}</Comment.Author>
        <Comment.Metadata>
          <div>{props.data.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>{props.data.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default CommentCard;
