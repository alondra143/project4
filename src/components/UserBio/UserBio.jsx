import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";

export default function ProfileBio({ user }) {
  return (
    <Grid textAlign="center" columns={2} className="Profile">
      <Grid.Row>
        <Grid.Column>
          <Image
            src={`${
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } `}
            size="medium"
            avatar
            circular
          />
        </Grid.Column>
        <Segment>
        <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
          <Segment vertical>
            <h3 style={{color: "white"}}>{user.username}</h3>
          </Segment>
          <Segment>
            <span> {user.username} says: {user.bio}</span>
          </Segment>
        </Grid.Column>
        </Segment>
      </Grid.Row>
    </Grid>
  );
}
