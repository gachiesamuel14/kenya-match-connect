const mockUsers = [
  { name: 'Amina', age: 24, county: 'Nairobi', bio: 'Love hiking and Sheng vibes. Looking for genuine connections.', photo: 'https://picsum.photos/400/300?random=1', distance: '2km' },
  { name: 'John', age: 28, county: 'Mombasa', bio: 'Professional in tech, enjoys beach walks and local food.', photo: 'https://picsum.photos/400/300?random=2', distance: '5km' },
  { name: 'Grace', age: 22, county: 'Kisumu', bio: 'Student mode: books, music, and lakeside sunsets.', photo: 'https://picsum.photos/400/300?random=3', distance: '1.5km' },
  { name: 'David', age: 30, county: 'Kiambu', bio: 'Church mode: faith, family, and community service.', photo: 'https://picsum.photos/400/300?random=4', distance: '8km' },
  { name: 'Fatuma', age: 26, county: 'Nairobi', bio: 'Interests: travel, cooking Kenyan dishes, and entrepreneurship.', photo: 'https://picsum.photos/400/300?random=5', distance: '3km' }
];

let currentIndex = 0;
const profileCard = document.getElementById('profile-card');
const img = document.getElementById('profile-img');
const nameEl = document.getElementById('profile-name');
const ageCounty = document.getElementById('profile-age-county');
const bio = document.getElementById('profile-bio');
const distance = document.getElementById('profile-distance');
const matchesDiv = document.getElementById('matches');
let matches = [];

function showProfile(index) {
  if (index >= mockUsers.length) {
    profileCard.innerHTML = '<p style="padding:20px; text-align:center;">No more profiles nearby. Check back later!</p>';
    return;
  }
  const user = mockUsers[index];
  img.src = user.photo;
  nameEl.textContent = user.name;
  ageCounty.textContent = `${user.age} • ${user.county}`;
  bio.textContent = user.bio;
  distance.textContent = `About ${user.distance} away`;
}

document.getElementById('like-btn').addEventListener('click', () => {
  const user = mockUsers[currentIndex];
  matches.push(user.name);
  matchesDiv.innerHTML = '<h3>Matches: ' + matches.join(', ') + '</h3>';
  currentIndex++;
  showProfile(currentIndex);
});

document.getElementById('pass-btn').addEventListener('click', () => {
  currentIndex++;
  showProfile(currentIndex);
});

// Simulate GPS request
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => console.log('Location:', pos.coords.latitude, pos.coords.longitude),
    (err) => console.log('Location permission denied or error')
  );
}

showProfile(0);