// src/components/ShareDisplay.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShareDisplay() {
  const { slug } = useParams();
  const [share, setShare] = useState(null);

  useEffect(() => {
    axios.get(`https://everything-share-production.up.railway.app/api/shares/${slug}`)
      .then((response) => setShare(response.data))
      .catch(() => setShare(null));
  }, [slug]);

  if (!share) return <p>Content not found or expired.</p>;

  return (
    <div>
      {share.content && <p>{share.content}</p>}
      {share.file_path && <img src={`https://everything-share-production.up.railway.app/storage/${share.file_path}`} alt="Shared" />}
      <p>Expires at: {new Date(share.expires_at).toLocaleString()}</p>
    </div>
  );
}

export default ShareDisplay;
