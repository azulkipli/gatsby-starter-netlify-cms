import React from "react";

export default ({ testimonials }) => (
  <div>
    {console.log("testimonials", testimonials)}
    {testimonials.map((testimonial, key) => (
      <article key={key} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);
