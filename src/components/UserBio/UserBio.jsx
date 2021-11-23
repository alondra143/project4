import React from "react";
import { Icon, Image, Grid, Segment } from "semantic-ui-react";
import moment from 'moment';

export default function ProfileBio({ user }) {
  const timeAgo = moment(user.createdAt).fromNow();


  return (
    <Grid textAlign="center" columns={2} className="Profile">
      <Grid.Row color="grey" verticalAlign="middle" style={{borderBottomStyle: 'dotted', }}>
        <Grid.Column>
          <Image
            src={`${user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              } `}
            size="small"
            avatar
            circular
          />
        </Grid.Column>
        <div style={{ backgroundImage: `url('https://i.imgur.com/gDPeFF4.jpg)`, backgroundSize: "cover" }} id="segment-bio">
          <Segment color>
            <Grid.Column textAlign="center" style={{ maxWidth: 450 }} >
              <Segment vertical>
                <h3 style={{ color: "red" }}>viewing {user.username}'s journal</h3>
              </Segment>
            </Grid.Column>
          </Segment>
          <span style={{color:"black", margin: '2rem'}}> started: {timeAgo}</span>
          <br />
          <span style={{color: 'black', margin: '2rem'}}>{user.username}'s bio: {user.bio}</span>
          <Icon name="star" align="center" color="red" size="huge"></Icon>
        </div>
      </Grid.Row>
    </Grid>
  );
}
