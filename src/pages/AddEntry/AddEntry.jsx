import React from 'react';
import { Grid, Container, Input, Button, Header, Icon } from "semantic-ui-react";

export default function ForumFeed({user}) {
    return (
            <Container text>
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
                <Button color='red' size='huge' >
                    Add an Entry 
                    <Icon name='right arrow' />
                </Button>
            </Container>
    )
}