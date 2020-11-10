import React from 'react';

function TitlePage({ title }) {
  return (
    <section className="title-page">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitlePage;
