/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import AjukanBarterButton from '../buttons/AjukanBarterButton';
import HubungiPemilikButton from '../buttons/HubungiPemilikButton';
import '../../styles/DetailPage.css';

function ProductDetail({
  id, filteredProducts, productDiajukan, productDitawar,
  setProductDiajukan, setProductDitawar, authedUser,
}) {
  const data = filteredProducts.filter((product) => product.id === id);
  const { noWA } = data[0];
  const { image } = data[0];

  return (
    <div className="detail-page">
      <div className="detail-page__headline-product">
        <div className="detail-page__headline-product__image">
          <img src={image} alt="product-img" />
        </div>
        <div className="detail-page__headline-product__text">
          <p className="detail-page__name">{data[0].name} </p>
          <p className="detail-page__category">{data[0].category}</p>
          <p className="detail-page__price">Rp. {data[0].price} </p>
          <p className="detail-product-text">Deskripsi produk :</p>
          <div className="detail-page__informations">
            <div className="detail-product-detail">
              <p>{data[0].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-page__detail-product">
        <div className="detail-page__button">
          <AjukanBarterButton
            id={id}
            filteredProducts={filteredProducts}
            productDiajukan={productDiajukan}
            productDitawar={productDitawar}
            setProductDiajukan={setProductDiajukan}
            setProductDitawar={setProductDitawar}
            authedUser={authedUser}
          />
          <a target="_blank" href={`https://wa.me/${noWA}`} aria-label="hubungi whatsapp" rel="noreferrer"><HubungiPemilikButton /></a>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object),
  productDitawar: PropTypes.arrayOf(PropTypes.object),
  productDiajukan: PropTypes.arrayOf(PropTypes.object),
  setProductDiajukan: PropTypes.func,
  setProductDitawar: PropTypes.func,
  authedUser: PropTypes.string,
};

export default ProductDetail;
