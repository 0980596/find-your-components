import styles from './feedback02.module.css';

const col1 = [
  {
    text: "TrendSpot is my go-to for staying ahead of the curve! The meticulous design and seamless user experience have made it an essential part of my daily routine. It's like having a personal guide to the latest trends at my fingertips.",
    name: 'Sarah Jek',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: 'TrendSpot has transformed the way I consume information. Its meticulous design and seamless user experience have made exploring trends a delightful journey. Staying up-to-date has never been this easy and enjoyable!',
    name: 'Stephen Keller',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    text: "Empower yourself with TrendSpot! The platform's attention to detail and seamless user experience make it a must-have for anyone who wants to stay informed effortlessly. It's like having a personal assistant for the world of trends!",
    name: 'Kevin Atinson',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
];

const col2 = [
  {
    text: "TrendSpot has completely revolutionized how we track industry shifts. The interface is gorgeous and the insights are always spot-on! It's an essential platform for our team.",
    name: 'Hope Anderson',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
  },
  {
    text: "TrendSpot is the ultimate destination for trend enthusiasts! The meticulous attention to detail sets it apart, offering a user experience that's both engaging and informative. It has become an indispensable tool for my daily routine.",
    name: 'Mike Peterson',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    text: 'Exploring the world of information has never been more exciting! Thanks to TrendSpot, I feel like I have my finger on the pulse of the latest trends. The seamless user experience has truly made staying informed a pleasure.',
    name: 'Falco Kulla',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
];

const col3 = [
  {
    text: "Navigating the world of trends has never been easier! TrendSpot's meticulous attention to detail is evident in every aspect of the app. It's become my go-to destination for staying up-to-date and making informed decisions.",
    name: 'Neil Gajjar',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
  },
  {
    text: 'TrendSpot has revolutionized the way I stay informed! Its intuitive design and seamless user experience make exploring the latest trends a breeze. I feel empowered to navigate the vast world of information effortlessly.',
    name: 'Kelly Bowman',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    text: "TrendSpot is a game-changer for anyone who wants to be in the know. The platform's design is not only visually appealing but also user-friendly, providing a comprehensive and enjoyable experience for exploring the latest news and trends.",
    name: 'Emily Davis',
    role: 'CEO of DevKen',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
  },
];

export default function Feedback02() {
  return (
    <section className={styles.section}>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.badge}>- Testimonials</span>
        <h2 className={styles.title}>Trusted by Millions</h2>
        <p className={styles.subtitle}>
          Millions of users have shared their love for TrendSpot.<br />
          Surf through the pool of testimonials!
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>

        {/* Col 1 — desce */}
        <div className={`${styles.marqueeCol} ${styles.colDown}`}>
          <div className={styles.marqueeTrack}>
            {col1.map((item, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardText}>"{item.text}"</p>
                <div className={styles.author}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.marqueeTrack}>
            {col1.map((item, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardText}>"{item.text}"</p>
                <div className={styles.author}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2 — sobe */}
        <div className={`${styles.marqueeCol} ${styles.colUp}`}>
          <div className={styles.marqueeTrack}>
            {col2.map((item, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardText}>"{item.text}"</p>
                <div className={styles.author}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.marqueeTrack}>
            {col2.map((item, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardText}>"{item.text}"</p>
                <div className={styles.author}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — desce */}
        <div className={`${styles.marqueeCol} ${styles.colDown}`}>
          <div className={styles.marqueeTrack}>
            {col3.map((item, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardText}>"{item.text}"</p>
                <div className={styles.author}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.marqueeTrack}>
            {col3.map((item, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardText}>"{item.text}"</p>
                <div className={styles.author}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}