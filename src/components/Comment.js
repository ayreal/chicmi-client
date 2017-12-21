import React from "react";
import { Comment } from "semantic-ui-react";

const Comment = () => (
  <Comment>
    <Comment.Avatar src="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5dtbmo5eTa4c8T9FJukpS2y1xgpYwo_1680x8400" />
    <Comment.Content>
      <Comment.Author as="a">Matt</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>How artistic!</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default Comment;
