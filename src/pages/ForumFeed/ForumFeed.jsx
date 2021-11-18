import React from 'react';
import { Feed, Table } from "semantic-ui-react";
import AddEntry from "../AddEntry/AddEntry"

export default function ForumFeed() {
    const image = '/images/avatar/small/laura.jpg'
    const date = '3 days ago'
    const summary = 'Laura Faucet created a post'
    const extraText = "Have you seen what's going on in Israel? Can you believe it."

    return (
        <>
            <AddEntry />
            <Table celled inverted selectable compact>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                    <Table.Body>
                    <Feed>
                        <Table.Row>
                            <Table.Cell>
                                <Feed.Event extraText={extraText} />
                            </Table.Cell>
                            <Table.Cell><Feed.Event image={image} /></Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
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
                        </Feed>
                    </Table.Body>
            </Table>
            {/* <Feed>
            <Feed.Event
                image={image}
                date={date}
                summary={summary}
                extraText={extraText}
            />

            <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content date={date} summary={summary} extraText={extraText} />
            </Feed.Event>

            <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content>
                    <Feed.Date content={date} />
                    <Feed.Summary content={summary} />
                    <Feed.Extra text content={extraText} />
                </Feed.Content>
            </Feed.Event>
        </Feed> */}
        </>
    )
}