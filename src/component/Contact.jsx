function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact Me</h1>

      <div className="text-center tracking-tighter">
        <p className="my-4">{Contact_Details.phoneNum}</p>
        <a className="border-b" href="#">{Contact_Details.email}</a>
      </div>
    </div>
  );
}
export default Contact;
