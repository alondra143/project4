import React, {useState} from 'react';
import EntryFeed from "../../components/EntryFeed/EntryFeed";
import EntryForm from "../../components/EntryForm/EntryForm"
import * as entriesApi from "../../utils/entriesApi";
import { Grid, Container, Input, Button, Header, Icon } from "semantic-ui-react";

export default function SecondHeader({ visible, setVisible }) {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    function renderEntry() {
        setVisible(!visible);
        console.log(visible);
    }
    async function handleAddEntry(entry) {
        try {
            setLoading(true);
            const data = await entriesApi.create(entry);
            console.log(data, "resp from server handleAddEntry");
            setEntries([data.entry, ...entries]);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            console.log(err);
            setError(err.message)
        }
    }
    if (visible) {
        return (
            <>
                <Container text className="header2">
                    <Header
                        as='h2'
                        content='Ventigo:'
                        inverted
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '0.5em',
                        }}
                    />
                    <Header
                        as='h2'
                        content='Think of this as your online punching bag.'
                        inverted
                        style={{
                            fontSize: '1.7em',
                            fontWeight: 'normal',
                            marginTop: '1em',
                        }}
                    />
                    <Button color='red' size='huge' onClick={renderEntry}>
                        Add an Entry
                        <Icon name='right arrow' />
                    </Button>
                </Container>
                <Grid centered className="header2">
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <EntryForm handleAddEntry={handleAddEntry} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        )
    }
    return (
        <Container text className="header2">
            <Header
                as='h2'
                content='Ventigo:'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '0.5em',
                }}
            />
            <Header
                as='h2'
                content='Think of this as your online punching bag.'
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1em',
                }}
            />
            <Button color='red' size='huge' onClick={renderEntry}>
                Add an Entry
                <Icon name='right arrow' />
            </Button>
        </Container>
    )
}