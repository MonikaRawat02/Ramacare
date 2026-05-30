import React from 'react';

const SEOContentSection = ({ title, content }) => {
  if (!content || content.length === 0) return null;

  return (
    <section className="sr-only" aria-hidden="true">
      {title && <h2>{title}</h2>}
      <div>
        {content.map((paragraph, index) => {
          if (typeof paragraph === 'string') {
            return <p key={index}>{paragraph}</p>;
          }
          if (paragraph.type === 'heading') {
            return <h3 key={index}>{paragraph.text}</h3>;
          }
          if (paragraph.type === 'list') {
            return (
              <ul key={index}>
                {paragraph.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default SEOContentSection;
