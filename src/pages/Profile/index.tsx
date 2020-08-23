import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData 
                        username={'andersonsts'}
                        name={'Anderson Santos'}
                        avatarUrl={'https://avatars1.githubusercontent.com/u/59117215?s=460&u=1994b07c01a425ecd55944276c3304fa3dbc473d&v=4'}
                        followers={887}
                        following={7}
                        company={'Rocketseat'}
                        location={'Fortaleza, Brazil'}
                        email={'anderson@mail.com'}
                        blog={'linkedin.com/in/andersonst-dev'}
                    />
                </LeftSide>
                <RightSide>

                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile;