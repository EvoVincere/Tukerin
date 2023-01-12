/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';

function BarangDitawar({
  id, image, name, description, price, noWA, setIdProductDitawar,
}) {
  async function setId() {
    await setIdProductDitawar(id);
  }
  setId();
  return (
    <div className="barang-ditawar">
      <div className="transaction-item__header">
        <h3>Barang yang ditawar</h3>
      </div>
      <div className="transaction-item__body-pending">
        <div className="img-name-price_container">
          <img className="transaction-item__body-image-pending" src={image} alt="product" />
          <div>
            <h3>{name}</h3>
            <h4>
              Rp
              {price}
            </h4>
          </div>
        </div>
        <div className="transaction-item__body-title-pending">
          <p>{description}</p>
        </div>
        <div className="transaction-item__body-action-pending">
          <a className="button-tochat" target="_blank" href={`https://wa.me/${noWA}`} aria-label="hubungi whatsapp" rel="noreferrer">
            <span>Hubungi di</span>
            {' '}
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

BarangDitawar.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noWA: PropTypes.string.isRequired,
  setIdProductDitawar: PropTypes.func.isRequired,
};

export default BarangDitawar;
