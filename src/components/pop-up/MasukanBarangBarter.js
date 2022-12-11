/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line import/order
import { toast } from 'react-toastify';

function MasukanBarangBarter({
  filteredProducts, productDiajukan, productDitawar, setProductDiajukan, setProductDitawar,
}) {
  // useEffect(() => {
  //   if (productDitawar === null) {
  //     setProductDitawar(filteredProducts.filter((productt) => productt.id === id));
  //   } else {
  //     setProductDitawar([...productDitawar, (
  //       filteredProducts.filter((productt) => productt.id === id)
  //     ),
  //     ]);
  //   }
  // }, []);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (productDiajukan === null) {
      setProductDiajukan([{
        id: Date.now().toString(), name, price, description, image, status: 'pending',
      }]);
    }
    if (productDiajukan != null) {
      setProductDiajukan([...productDiajukan, {
        id: Date.now().toString(), name, price, description, image, status: 'pending',
      }]);
    }
    if (productDitawar === null) {
      // setProductDitawar(filteredProducts.filter((product) => product.id === id));
      setProductDitawar(
        filteredProducts.filter((product) => {
          if (product.id === id) {
            product.status = 'pending';
          }
          return product.id === id;
        }),
      );
    }
    if (productDitawar != null) {
      setProductDitawar([...productDitawar, filteredProducts.filter((product) => {
        if (product.id === id) {
          product.status = 'pending';
        }
        return product.id === id;
      })[0]]);
    }
    navigate('/transaction');
    toast.success('Barang berhasil diajukan !');
  };

  // filteredProducts.filter((product) => {
  //   if (product.id === id) {
  //     product.status = 'pending';
  //   }
  //   return product;
  // });

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const clickFile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));

    const inputFile = document.getElementById('input-file');
    const imgFile = document.getElementById('img-file');

    inputFile.style = 'display:none';
    imgFile.style = 'display:block';
    imgFile.style = 'width:85px';
    imgFile.style = 'height:85px';
    imgFile.src = URL.createObjectURL(e.target.files[0]);
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
            <input type="text" onChange={handleName} required />
            <br />
            <br />
            Harga
            <br />
            <input type="text" onChange={handlePrice} required />
            <br />
            <br />
            Deskripsi
            <br />
            <input type="text" onChange={handleDescription} required />
            <br />
            <br />
            Foto
            <br />
            <div className="input-image">
              <div id="input-file">
                <input type="file" name="input-file" onChange={clickFile} required />
                <AiOutlinePlus className="icon-add" />
              </div>
              <img id="img-file" style={{ display: 'none' }} src="" alt="gambar barang" />
            </div>
            <br />
          </label>
          <input className="ajukan-button" type="submit" value="Terbitkan" onClick={onClick} />
        </form>
      </div>
    </div>
  );
}

MasukanBarangBarter.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.object),
  productDitawar: PropTypes.arrayOf(PropTypes.object),
  productDiajukan: PropTypes.arrayOf(PropTypes.object),
  setProductDiajukan: PropTypes.func,
  setProductDitawar: PropTypes.func,
};

export default MasukanBarangBarter;
