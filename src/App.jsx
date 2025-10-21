import "./App.css";
import Profile from "./components/Profiles";

const profiles = [
  {
    id: 0,
    name: "Ariana Grande",
    title: "Pop Singer & Songwriter",
    cover:
      "https://i.pinimg.com/736x/c1/93/a2/c193a2c1bd6bdcd2f4d7dcffc3523b4b.jpg",
    image: "https://m.media-amazon.com/images/M/MV5BM2JhZWJmMDEtNTU5MS00YmQ3LTk1NjMtOGFlMjM2MjZlNjg5XkEyXkFqcGc@._V1_.jpg",
    bio: "Known for her powerful vocals, dynamic performances, and chart-topping pop hits, Ariana continues to redefine modern pop music.",
    gender: "Female",
    country: "USA",
    birthday: "June 26, 1993",
    albums: "Positions, Sweetener, Dangerous Woman, Thank U, Next",
    quote: "Still getting good at not leaving.",
  },
  {

    id: 1,
    name: "Krystine Nequiota",
    title: "Web Developer & Designer",
    cover:
      "https://i.pinimg.com/736x/11/0f/de/110fde22ab1c775994acf0be0d514813.jpg",
    image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/432775251_7307002909387793_3318180177441000672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEhp7TN8I5HezmjwZPG9cPJxAAgJSepHTjEACAlJ6kdOBeXes63z6vqNsYffnvkdF4EXw3XlhxJxSWhIXCyLkng&_nc_ohc=LbSKtwSJGvcQ7kNvwGSvXCm&_nc_oc=AdnbobW_dU2VDLJF-hz5jKr2t5ixbaKsKRoyUleNepWE-4u_xdlNck96njmBHP3C3RI&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=95nIJEw7TOwwskHRCZibxQ&oh=00_AfdfLR56O9AENybVVe3-jRQVu2teEGTzU4B1iBK0GjTMfw&oe=68FD0F04", 
    bio: "A passionate Computer Science student who loves turning creative ideas into interactive web experiences. The developer behind the Melody Muse Gallery.",
    gender: "Female",
    country: "Philippines",
    birthday: "November 21, 2004",
    albums: "Coding Projects, UI Designs, and Portfolio Work",
    quote: "Magaan na ba ang 'yong paghinga? Bumalik ka na sa'kin.",
  },
  {
    id: 2,
    name: "Olivia Rodrigo",
    title: "Singer & Actress",
    cover:
      "https://i.redd.it/jwts14mgmgxc1.png",
    image: "https://i.scdn.co/image/ab6761610000e5ebe03a98785f3658f0b6461ec4",
    bio: "A Gen Z icon known for her emotional songwriting, Olivia Rodrigo captures the heartbreak, growth, and bittersweet chaos of youth.",
    gender: "Female",
    country: "USA",
    birthday: "February 20, 2003",
    albums: "SOUR, GUTS",
    quote: "I hope you're happy, but don't be happier.",
  },
  {
    id: 3,
    name: "Sabrina Carpenter",
    title: "Pop Artist & Performer",
    cover:
      "https://w0.peakpx.com/wallpaper/800/138/HD-wallpaper-sabrina-carpenter-another-06-celebrity-actress-music-people-singer-sabrina-carpenter.jpg",
    image: "https://hips.hearstapps.com/hmg-prod/images/sabrina-carpenter-attends-the-2024-mtv-video-music-awards-news-photo-1727886045.jpg?crop=0.828xw:0.553xh;0.109xw,0.0386xh&resize=640:*",
    bio: "With her smooth vocals and playful confidence, Sabrina blends pop and storytelling into an irresistible sound.",
    gender: "Female",
    country: "USA",
    birthday: "May 11, 1999",
    albums: "Emails I Can’t Send, Singular Act I & II, Short n’ Sweet",
    quote:
      "Cartwheels in my stomach when you walk in.",
  },
  {
    id: 4,
    name: "Chappell Roan",
    title: "Pop Singer & Songwriter",
    cover:
      "https://wallpapers4screen.com/Uploads/22-3-2025/70175/thumb2-chappell-roan-4k-american-singer-music-stars-beauty.jpg",
    image: "https://i0.wp.com/industryme.co.uk/wp-content/uploads/2024/06/Chappell.jpeg?fit=640%2C640&ssl=1",
    bio: "An unapologetically bold performer bringing theatricality, honesty, and empowerment to the queer pop scene.",
    gender: "Female",
    country: "USA",
    birthday: "February 19, 1998",
    albums: "The Rise and Fall of a Midwest Princess",
    quote: "You'd have to stop the world just to stop the feeling.",
  },
  {
    id: 5,
    name: "Taylor Swift",
    title: "Singer & Songwriter",
    cover:
      "https://preview.redd.it/yxnrpl4t5uc51.png?width=2560&format=png&auto=webp&s=d597963195242e97e7e819b4f4994a97ca183a77",
    image: "https://imageio.forbes.com/specials-images/imageserve/646e6affb9a2a85595a62c39/0x0.jpg?format=jpg&crop=1573,1574,x239,y256,safe&height=416&width=416&fit=bounds",
    bio: "A master storyteller whose lyrics paint vivid pictures of love, heartbreak, and resilience across eras of sound.",
    gender: "Female",
    country: "USA",
    birthday: "December 13, 1989",
    albums: "1989 (Taylor’s Version), Red, Folklore, Midnights, Lover",
    quote: "It's you and me, that's my whole world. ",
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎶 The Melody Muse Gallery 🎤</h1>
        <p>
          Celebrating creativity, rhythm, and individuality — from iconic pop stars to the
          developer who brought their stories to life.
        </p>
      </header>

      <div className="profiles-grid">
        {profiles.map((p) => (
          <Profile key={p.id} profile={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
