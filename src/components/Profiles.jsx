import "./Profile.css";

export default function Profile({ profile }) {
  return (
    <div className="profile-card">
      <div className="profile-cover">
        <img src={profile.cover} alt="cover" className="cover-img" />
      </div>

      <div className="profile-avatar">
        <img src={profile.image} alt={profile.name} />
      </div>

      <div className="profile-content">
        <h3>{profile.name}</h3>
        <p className="profile-title">{profile.title}</p>

        <p className="profile-bio">{profile.bio}</p>

        <div className="profile-info">
          <p><strong>🎂 Birthday:</strong> {profile.birthday}</p>
          <p><strong>💿 Albums:</strong> {profile.albums}</p>
          <p><strong>📍 Country:</strong> {profile.country}</p>
        </div>

        <div className="profile-quote">
          <p>"{profile.quote}"</p>
        </div>
      </div>
    </div>
  );
}
