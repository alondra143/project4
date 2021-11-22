import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import EntryFeed from "../../components/EntryFeed/EntryFeed";
import UserBio from "../../components/UserBio/UserBio";
import userService from "../../utils/userService";
import * as likesApi from "../../utils/likesApi";

export default function ProfilePage(props) {
  const [entries, setEntries] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {

    getProfile();
  }, [username]);

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      setEntries(data.entries);
      setUser(data.user);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }

  async function addLike(entryId) {
    try {
      const data = await likesApi.create(entryId);
      console.log(data, " <- this is data the response from likes create");
      getProfile();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function removeLike(likesId) {
    try {
      const data = await likesApi.removeLike(likesId);
      console.log(data, " <- this is data the response from likes delete");
      getProfile(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  // error before loading check for fetch call vs http req
  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <UserBio user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 750 }} columns={3}>
          <EntryFeed
            isProfile={true}
            entries={entries}
            numPhotosCol={3}
            user={props.user}
			addLike={addLike}
			removeLike={removeLike}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
