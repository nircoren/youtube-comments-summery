function Refund() {
  return (
    <main
      className="h-screen relative z-10 overflow-hidden bg-white pb-16
          pt-[120px] bg-secondaryBg md:pb-[120px] md:pt-[120px] xl:pb-[120px] xl:pt-[120px] 2xl:pb-[200px] 2xl:pt-[120px]
          
    "
    >
      <section className=" container max-w-7xl">
        <div className="translations-content-container">
          <div className="container">
            <div>
              <h1 className="text-5xl my-7">Refund Policy</h1>
              <p>
                Thank you for choosing our services. We appreciate your trust in
                us.
              </p>
              <p>
                Our refund policy is straightforward:{" "}
                <strong>all purchases are final and non-refundable</strong>.
                Once a transaction is completed, we do not offer refunds under
                any circumstances.
              </p>
              <p>
                We encourage you to carefully review your purchase before
                confirming it. If you have any questions or concerns, feel free
                to reach out to our customer support team. We're here to assist
                you!
              </p>
              <p>
                Please note that exceptions to this policy are extremely rare
                and are handled on a case-by-case basis. If there is a genuine
                mistake or technical issue, we'll do our best to address it
                promptly.
              </p>
              <p>
                Thank you for being a valued customer. We look forward to
                serving you again!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Refund;
