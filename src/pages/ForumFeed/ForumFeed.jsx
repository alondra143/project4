import React, {useState} from 'react';
import { Grid, Feed, Table } from "semantic-ui-react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./ForumFeed.css";
import EntryForm from "../../components/EntryForm/EntryForm";
import AddEntry from "../AddEntry/AddEntry"

export default function ForumFeed({user}) {
    const [visible, setVisible] = useState(false);
    const [err, setErr] = useState("");
    const [entries, setEntries] = useState([]);


    const image = '/images/avatar/small/laura.jpg'
    const date = '3 days ago'
    const summary = 'Laura Faucet created a post'
    const extraText = "Have you seen what's going on in Israel? Can you believe it."
    const name = "Laura Faucet"
    
   
    // const data =[{}]
    // for each entry in data(){

    // }

    // <Icon name={"heart"} size="large" color={likeColor} onClick={clickLikes} />
    // {entry.likes.length} Likes
    return (
        <Grid centered>
            <AddEntry visible={visible} setVisible={setVisible} />
            <Table celled inverted selectable striped compact id="feedVisible">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                {extraText}
                            </Table.Cell>
                            <Table.Cell><Feed.Event image={image}/>{name}</Table.Cell>
                            <Table.Cell textAlign='right'>{date}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>Requires call</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                    </Table.Body>
            </Table>
        </Grid>
    )
}