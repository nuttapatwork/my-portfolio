const affiliates = [
  {
    id: "digitalocean",
    name: "DigitalOcean",
    logo: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
    desc: "Cloud hosting ที่ dev ชอบใช้ เริ่มต้น $4/เดือน เครดิตฟรี $200 สำหรับผู้ใช้ใหม่",
    badge: "$200 Free Credit",
    badgeColor: "#0080FF",
    // ✏️ ใส่ referral link ของคุณที่นี่ → https://www.digitalocean.com/referral
    url: "https://www.digitalocean.com/?refcode=756855c6b408",
    cta: "Get Started →",
  },
  {
    id: "vultr",
    name: "Vultr",
    logo: "https://www.vectorlogo.zone/logos/vultr/vultr-icon.svg",
    desc: "VPS ราคาถูก เริ่มต้น $2.50/เดือน เครดิตฟรี $100 สำหรับผู้ใช้ใหม่",
    badge: "$100 Free Credit",
    badgeColor: "#007BFC",
    // ✏️ → https://www.vultr.com/referral
    url: "https://www.vultr.com/?ref=9909013",
    cta: "Get Started →",
  },
  {
    id: "hostinger",
    name: "Hostinger",
    logo: "https://www.vectorlogo.zone/logos/hostinger/hostinger-icon.svg",
    desc: "Web hosting ราคาประหยัด เริ่มต้น ฿59/เดือน โดเมนฟรี + SSL ฟรี",
    badge: "ส่วนลดสูงสุด 75%",
    badgeColor: "#764ABC",
    // ✏️ → https://www.hostinger.com/affiliate
    url: "https://www.hostinger.com?REFERRALCODE=ABENUTTAPVJY",
    cta: "Get Started →",
  },
];

export default function Affiliates() {
  return (
    <section className="section section--affiliates" id="tools">
      <div className="container">
        <h2 className="section__title">
          <span className="section__label">Recommended</span>
          Recommended Tools & Deals
        </h2>
        <p className="affiliates__lead">
          A curated list of popular developer tools with exclusive deals. The links below are referral links—sign up through them to get free credits for your projects, while helping support this website at no extra cost to you. 🙏
        </p>
        <div className="affiliates__grid">
          {affiliates.map((a) => (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="noreferrer noopener"
              className="affiliate-card"
            >
              <div className="affiliate-card__top">
                <img src={a.logo} alt={a.name} className="affiliate-card__logo"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <span className="affiliate-card__badge" style={{ background: `${a.badgeColor}22`, color: a.badgeColor, border: `1px solid ${a.badgeColor}44` }}>
                  {a.badge}
                </span>
              </div>
              <h3 className="affiliate-card__name">{a.name}</h3>
              <p className="affiliate-card__desc">{a.desc}</p>
              <span className="affiliate-card__cta">{a.cta}</span>
            </a>
          ))}
        </div>
        <p className="affiliates__disclosure">
          * Disclosure: ลิงก์บางส่วนเป็น affiliate link ผมจะได้รับค่าคอมมิชชันเมื่อคุณสมัครใช้งาน
        </p>
      </div>
    </section>
  );
}
