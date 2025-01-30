type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>Elegant leather shoulder bag with gold-tone hardware and adjustable strap. <br></br>Crafted from premium genuine leather with a spacious interior perfect for daily essentials.</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Material and care instructions</h4>
        <p>Made from high-quality genuine leather with fabric lining. <br></br>Clean with a soft, dry cloth and store in the provided dust bag when not in use.</p>
      </div>
    </section>
  );
};

export default Description

