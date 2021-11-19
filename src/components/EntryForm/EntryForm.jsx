import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function EntryForm() {
    return (
        <Form>
            <Form.Field>
                <input placeholder='title' />
            </Form.Field>
            <Form.TextArea placeholder="scream into the void"/>
            <Button type='submit'>+</Button>
        </Form>
    )
}