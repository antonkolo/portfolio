import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">TBD... </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/chitchat.png" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">TBD...</h4>
                <div className="portfolio-category">Web Development</div>
              </div>
              <div className="portfolio-item">
                <img src="/kajian.jpg" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">TBD..</h4>
                <div className="portfolio-category">Web Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
