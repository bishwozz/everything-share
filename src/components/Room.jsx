import React, { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useParams } from 'react-router-dom';

window.Pusher = Pusher;

const Room = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: process.env.REACT_APP_PUSHER_KEY,
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      encrypted: true,
    });

    echo.channel('room.' + slug)
      .listen('ContentUpdated', (event) => {
        setContent(event.content);
      });

    return () => {
      echo.leaveChannel('room.' + slug);
    };
  }, [slug]);

  const handleChange = (event) => {
    const newContent = event.target.value;
    setContent(newContent);

    fetch('/api/update-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({ slug, content: newContent })
    });
  };

  return (
    <div>
      <textarea value={content} onChange={handleChange} />
    </div>
  );
};

export default Room;
