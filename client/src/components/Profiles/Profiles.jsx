import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useProfile } from '../../actions/profile';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ProfilesList from './ProfilesList';

export const Profiles = () => {
  const { getProfiles } = useProfile();

  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    let fetchedPosts = await getProfiles();
    setProfiles(fetchedPosts.profiles);
  };

  useEffect(() => {
    console.log('fired');
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container>
        <Row className='px-5 mt-5'>
          <Col md={9} className='border shadow p-3 bg-gray'>
            <ProfilesList profiles={profiles} shortcut={false} />
          </Col>
          <Col md={3} className='text-center'>
            <div>
              <Card style={{ width: '17rem' }}>
                <Card.Img
                  variant='top'
                  src='https://images.businessnewsdaily.com/app/uploads/2022/04/04072326/freelancer_Prostock-Studio_getty.jpg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Looking for job?</strong>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button size='sm' variant='outline-light' className='bg-blue'>
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
