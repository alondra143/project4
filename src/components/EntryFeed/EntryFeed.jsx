import React from "react";
import { Grid, Card, Item, Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import EntryComp from "../EntryComp/EntryComp";
import "./EntryFeed.css"

export default function EntryFeed({
    entries,
    isProfile,
    loading,
    user,
    addLike,
    removeLike
}) {


    return (
        <Grid centered >
            {loading ? (
                <Segment>
                    <Dimmer active inverted>
                        <Loader size="small">Loading</Loader>
                    </Dimmer>
                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </Segment>
            ) : null}
            {entries.map((entry) => {
                return (
                    <Grid.Row>
                        
                            <EntryComp
                                entry={entry}
                                key={entry._id}
                                isProfile={isProfile}
                                user={user}
                                removeLike={removeLike}
                                addLike={addLike}
                            />
                        
                    </Grid.Row>
                );
            })}
        </Grid>
    );
}
