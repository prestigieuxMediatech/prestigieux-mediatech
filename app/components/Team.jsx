"use client";

import styles from "../styles/team.module.css";

const teamMembers = [
  {
    name: "Heena Ubaid",
    role: "Director",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/heena-MqE1AhhJsNTNLRP0.jpg",
    bio: "Leads brand strategy, creative direction, and client partnerships with a strong focus on clarity and long-term positioning.",
  },
  {
    name: "Huda Mulla",
    role: "Director",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/20230422_094243_02-QImJbocrVqoZ0bCd.jpg",
    bio: "Drives performance marketing with disciplined campaign execution, data-led decisions, and efficient return on ad spend.",
  },
  {
    name: "Aadil Mulla",
    role: "Director",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/aadil-ZwJ81VRKt1sH3X6q.jpeg",
    bio: "Shapes digital products and web experiences that balance elegant design, smooth usability, and dependable delivery.",
  },
  {
    name: "Ubaid Rao",
    role: "Director",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/ubaid-Xb36P5ui4PKFucRm.jpg",
    bio: "Oversees operations and growth planning to keep every engagement timely, structured, and commercially grounded.",
  },
];

export default function Team() {
  return (
    <section className={styles.section} id="about-team">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div className={styles.tag}>Leadership</div>
          <h2 className={styles.title}>The team behind every growth decision</h2>
          <p className={styles.copy}>
            Strategists, creatives, and operators working closely together so each
            brand gets thoughtful execution instead of disconnected services.
          </p>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <article className={styles.card} key={member.name}>
              <div className={styles.photoWrap}>
                <img src={member.image} alt={member.name} className={styles.photo} />
              </div>

              <div className={styles.cardBody}>
                <p className={styles.role}>{member.role}</p>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
