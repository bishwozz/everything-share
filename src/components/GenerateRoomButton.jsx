import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const GenerateRoomButton = () => {
  const history = useHistory();
  const [slug, setSlug] = useState('');

  const generateSlug = () => {
    // Generate a slug, you can use any method for this
    const newSlug = Math.random().toString(36).substring(2, 15);
    setSlug(newSlug);
    // Redirect to the room page
    history.push(`/room/${newSlug}`);
  };

  return (
    <button onClick={generateSlug}>Generate Room</button>
  );
};

export default GenerateRoomButton;
