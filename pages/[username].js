import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMedal } from 'react-icons/fa';

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (username) {
      axios.get(`http://localhost:8000/profile/${username}`)
        .then(response => setProfile(response.data))
        .catch(error => console.error(error));
    }
  }, [username]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={profile.profile_photo} alt={profile.username} />
        <div className="p-4">
          <h1 className="text-xl font-semibold">{profile.username}</h1>
          <p className="text-gray-600">{profile.email}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Badges</h2>
            <ul className="mt-2">
              {profile.badges.map((badge, index) => (
                <li key={index} className="flex items-center mt-2">
                  <FaMedal className="text-yellow-500 mr-2" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
