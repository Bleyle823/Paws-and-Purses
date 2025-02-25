import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      {/* Introduction of the Homepage*/}
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{ backgroundImage: 'url(/images/products/product-1.jpg)' }} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Bags more timeless than love because they last longer</h3>
              <a href="#" className="btn btn--rounded">View Collection</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/products/product-3.jpg)' }} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Luxury Designer Bags</h3>
              <a href="#" className="btn btn--rounded">Shop Now</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/featured-3.jpg)' }} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>February Collection</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why Choose PAWS AND PURSES?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>Complimentary shipping on all orders over KSH 2900.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Secure Payments</h4>
                <p>Shop with confidence using our encrypted payment system.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Authenticity Guaranteed</h4>
                <p>Every bag comes with a certificate of authenticity and our guarantee.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Premium Quality</h4>
                <p>Crafted from the finest materials, our bags are designed to stand the test of time.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />

    </Layout>
  )
}

export default IndexPage

