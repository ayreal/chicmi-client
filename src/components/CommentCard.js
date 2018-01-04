import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

const CommentCard = props => {
  console.log("%c ... rendering Comment \n", "color: #42dff4");
  return (
    <Comment>
      <Comment.Avatar src={props.data.photo} />
      <Comment.Content>
        <Comment.Author as="a">{props.data.name}</Comment.Author>
        <Comment.Metadata>
          <div> {moment(new Date(props.data.created_at)).fromNow()}</div>
        </Comment.Metadata>
        <Comment.Text>{props.data.text}</Comment.Text>
        <Comment.Actions>
          {props.data.user_id === props.currentUser.id ? (
            <Comment.Action onClick={() => props.deleteComment(props.data)}>
              Delete?
            </Comment.Action>
          ) : null}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default CommentCard;
