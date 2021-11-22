import React from "react";
import { Card, Icon, Image, } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default function EntryComp({ entry, user, removeLike, addLike }) {
    // is user in array? if yes, heart is red. if not, heart is grey
    // look for match in entry.likes for user and return index or -1
  const likeIndex = entry.likes.findIndex(
    (eachLike) => eachLike.username === user.username
  );
  const likeColor = likeIndex > -1 ? "red" : "grey";

  const clickLikes =
    likeIndex > -1
      ? () => removeLike(entry.likes[likeIndex]._id)
      : () => addLike(entry._id);

  return (
    <Card key={entry._id} raised>
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${entry.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  entry.user.photoUrl
                    ? entry.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {entry.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      <Card.Content>
        <Card.Header>{entry.title}</Card.Header>
        <Card.Description>{entry.body}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"heart"} size="large" color={likeColor} onClick={clickLikes} />
        {entry.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

