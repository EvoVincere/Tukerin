/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

function MasukanBarangBarter({ prevBarangSaya, setBarangSaya }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setBarangSaya([...prevBarangSaya, {
      name, price, description, image,
    }]);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  function onClick() {
    const root = document.querySelector('.root-popup-login');
    root.style.display = 'none';
  }

  // const fileImage = image.map((File) => (File.name));

  return (
    <div className="root-popup-login">
      <div className="masukan-barang-barter">
        <form onSubmit={onSubmit}>
          <div className="close-form">
            <GrFormClose onClick={onClick} className="close-icon" />
          </div>
          <p>Masukan barang yang ingin kamu tukar ...</p>
          <label>
            Name
            <br />
            <input type="text" onChange={handleName} />
            <br />
            <br />
            Harga
            <br />
            <input type="text" onChange={handlePrice} />
            <br />
            <br />
            Deskripsi
            <br />
            <input type="text" onChange={handleDescription} />
            <br />
            <br />
            Foto
            <br />
            <div className="input-image">
              <input type="file" onChange={handleImage} />
              <AiOutlinePlus className="icon-add" />
            </div>
            <br />
            <h4 className="nama-file">{image}</h4>
          </label>
          <input className="ajukan-button" type="submit" value="Terbitkan" onClick={onClick} />
        </form>
      </div>
    </div>
  );
}

MasukanBarangBarter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  prevBarangSaya: PropTypes.arrayOf(PropTypes.object).isRequired,
  setBarangSaya: PropTypes.func.isRequired,
};

export default MasukanBarangBarter;