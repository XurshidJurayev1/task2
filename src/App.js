import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { test } from './redux/actions/test';
import Routes from './routes';
import styled from 'styled-components';

function App() {
  const dispatch = useAppDispatch();
  // const { favorites } = useAppSelector(state => state);

  // console.log(favorites);
  useEffect(() => {
    dispatch(test());
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    padding: 30px 0 0 0;
  `;


  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;
