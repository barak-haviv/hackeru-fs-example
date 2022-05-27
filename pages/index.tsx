import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container';
import LecturersView from '../components/LecturersView'
import { Data, Lecturers } from '../types'

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Data | null>()

  useEffect(() => {
    fetch('api/school-info')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if(loading) return <div>Loading ...</div>

  return (
    <Container maxWidth="lg">
      { (data && data.Lecturers) && 
        <LecturersView lecturers={data.Lecturers} /> 
      }
    </Container>
  );
};

export default Home;
