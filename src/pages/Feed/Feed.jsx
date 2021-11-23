import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import EntryFeed from "../../components/EntryFeed/EntryFeed";
import * as entriesApi from "../../utils/entriesApi";
import * as likesApi from '../../utils/likesApi'
import "./Feed.css"

import { Grid, Item } from "semantic-ui-react";
import SecondHeader from "../../components/SecondHeader/SecondHeader";

export default function Feed(props) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  

  async function addLike(entryId){
	  try {
		  const data = await likesApi.create(entryId);
		  console.log(data, 'createLike')
		  getEntries()

	  } catch(err){
		  console.log(err)
		  setError(err.message)
	  }
  }

  async function removeLike(likesId){
	try {
		const data = await likesApi.removeLike(likesId);
		console.log(data, 'removeLike resp likesApi call')
		getEntries(false)

	} catch(err){
		console.log(err)
		setError(err.message)
	}	
  }




  async function getEntries(showLoading) {
    try {
	  showLoading ? setLoading(true) : setLoading(false)

      const data = await entriesApi.getAll();
      setEntries([...data.entries].reverse());
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err, " this is the error from getEntries");
    }
  }

  useEffect(() => {
    getEntries();
  }, [entries]);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <SecondHeader visible={visible} setVisible={setVisible}/>
        <Item.Group divided id="hi">
            <EntryFeed
            isProfile={false}
            entries={entries}
            loading={loading}
            user={props.user}
            addLike={addLike}
            removeLike={removeLike}
            />
        </Item.Group>
    </>
  );
}
