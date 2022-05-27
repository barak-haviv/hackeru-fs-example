import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import LecturersView from '../components/LecturersView';
import LanguageSelect from '../components/LanguageSelect';
import { Data, Lecturers, Language } from '../types';
import Header from '../components/Header'

const Home: NextPage = () => {
  const [data, setData] = useState<Data | null>(null);
  const [lecturers, setLecturers] = useState<Lecturers | null>(null);
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    fetch('api/school-info')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLecturers(data.Lecturers);
      });
  }, []);

  if (!data || !data.Lecturers || !lecturers) return <div>Loading ...</div>;

  const getLecturers = (languageId: number) => {
    return data.Lecturers.filter((lecturer) =>
      lecturer.languages.includes(languageId)
    );
  };

  function onLanguageChosen(language: Language | null) {
    setLanguage(language);
    if (!language) return;

    const lecturers = getLecturers(language.id);
    setLecturers(lecturers ? lecturers : data.Lecturers);
  }

  return (
    <>
    <Header />
    <Container maxWidth="xl" sx={{ justifyContent: 'center' }}>
      <LanguageSelect data={data} onLanguageChosen={onLanguageChosen} />
      <LecturersView lecturers={lecturers} language={language} />
    </Container>
    </>
  );
};

export default Home;
