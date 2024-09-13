// src/components/ShareForm.js
import { useState } from 'react';
import axios from 'axios';

function ShareForm() {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('https://everything-share-production.up.railway.app/api/shares', formData);
      setMessage(`Content shared! Your link is: ${window.location.origin}/${response.data.slug}`);
    } catch (error) {
      setMessage('Failed to share content.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Share your text..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Share</button>
        {message && <p>{message}</p>}
      </form>
      <a href="/test">Test</a>
    </>
  );
}

export default ShareForm;
