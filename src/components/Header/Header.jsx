import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Image, Icon, Menu } from 'semantic-ui-react';


export default function PageHeader({ user, handleLogout }) {
    return (
        <>
            <Segment inverted>
                <Menu pointing inverted secondary>
                    <Menu.Item position="left">
                        <Header as="h2" position="left">
                            <Link to="/"><Icon name="home"></Icon></Link>
                        </Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Header as="h2" position="right">
                            <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>
                        </Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Header as="h2" position="right">
                            <Link to='' onClick={handleLogout}>Logout</Link>
                        </Header>
                    </Menu.Item>
                </Menu>
            </Segment>
        </>
    )
}