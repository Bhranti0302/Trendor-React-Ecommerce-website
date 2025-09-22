function ContactContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14 p-6 items-center">
      <div>
        <img src="./Contact.png" alt="contact" />
      </div>
      <div>
        <p className="text-xl">
          We’d love to hear from you! Whether you have a question, need support,
          or just want to share feedback — we’re here for you.
        </p>
        <ul className="mt-5 flex flex-col gap-5">
          <li>
            <h5 className="text-xl font-bold">Address</h5>
            <p>
              Trendora HQ, <br></br>123 Market Street, <br></br>Navsari, Gujarat
              – 396445, India
            </p>
          </li>
          <li>
            <h5 className="text-xl font-bold">Email</h5>
            <p>support@trendora.com</p>
          </li>
          <li>
            <h5 className="text-xl font-bold">Phone</h5>
            <p>+91 98765 43210</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactContent;
