import { useState } from "react";

export default function Donate() {
  const [copied, setCopied] = useState(false);

  const promptpayNumber = "0897724270"; // เบอร์โทรหรือเลขบัตรประชาชน

  const copy = () => {
    navigator.clipboard.writeText(promptpayNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section section--donate" id="donate">
      <div className="container container--narrow">
        <h2 className="section__title">
          <span className="section__label">Support</span>
          Buy Me a Coffee ☕
        </h2>
        <p className="donate__lead">
          สนับสนุนได้เลยครับ ขอบคุณมากๆ 🙏
        </p>

        <div className="donate__cards">
          {/* PromptPay */}
          <div className="donate__card">
            <div className="donate__card-header">
              <span className="donate__icon">📱</span>
              <h3>PromptPay</h3>
            </div>
            <div className="donate__qr-wrapper">
              {/* QR Code สร้างจาก promptpay number */}
              <img
                src={`https://promptpay.io/${promptpayNumber}.png`}
                alt="PromptPay QR Code"
                className="donate__qr"
              />
            </div>
            <div className="donate__number">
              <span>{promptpayNumber}</span>
              <button className="donate__copy-btn" onClick={copy}>
                {copied ? "✅ Copied!" : "Copy"}
              </button>
            </div>
            <p className="donate__name">Nuttapat T.</p>
          </div>


        </div>
      </div>
    </section>
  );
}
