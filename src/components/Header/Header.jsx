import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Icon, Button, Menu } from 'semantic-ui-react';

const square = { width: 75, height: 75 }

export default function PageHeader({ user, handleLogout }) {
    return (
        <>
        <Menu vertical>

        </Menu>
        <Container text>
            <Header
                as='h2'
                content='Ventigo:'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '1em',
                }}
            />
            <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
            <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
            </Button>
        </Container>
        </>
    )
}
        // <>
        //     <Segment clearing>
        //         <Segment circular style={square} floated="left">
        //             <Header as='h2'>
        //                 <Link to="/"><Icon name="home"></Icon></Link>
        //             </Header>
        //         </Segment>
        //         <Segment circular inverted style={square} floated="right">
        //             <Header as='h2' inverted>
        //                 <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>
        //             </Header>
        //         </Segment>
        //         <Segment circular style={square} floated="right">
        //             <Header as='h2'>
        //                 <Link to='' onClick={handleLogout}>Logout</Link>
        //             </Header>
        //         </Segment>
        //     </Segment>
        // </>
//     )
// }


// export default SegmentExampleCircular
// export default function PageHeader({ user, handleLogout }) {
//     return (
//         <Segment clearing className="header">
//             <Header as='h2' floated='left' className='header'>
//                 <Link to="/"><Icon name="home"></Icon></Link>

//             </Header>
//             <Header as='h2' floated='right'>
//                 <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>
//                 <Link to='' onClick={handleLogout}>Logout</Link>
//             </Header>
//         </Segment>
//     )

// }