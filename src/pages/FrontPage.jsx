import React from 'react';
import './FrontPage.css';
import Box from '../components/Box.jsx';

function Container() {
  return (
    <>
      <div className="container">
        <Box imgSrc="/images/stars.gif" altText="Flashing colors" /> {/*Passing props */}
        <Box imgSrc="/images/snoopy.png" altText="Snoopy" />
        <Box imgSrc="/images/snoopy.png" altText="Snoopy" />
        <Box imgSrc="/images/blizzard.gif" altText="Blizzard animation" />
        <Box imgSrc="/images/gems.gif" altText="Gems falling" />
        <Box imgSrc="/images/snoopy.png" altText="Snoopy" />
        <Box imgSrc="/images/snoopy.png" altText="Snoopy" />
        <Box imgSrc="/images/snoopy.png" altText="Snoopy" />
      </div>
    </>
  )
}

function FrontPage() {
  return (
    <>
      <div>
        <Container />
      </div>
    </>
  )
}

export default FrontPage;
