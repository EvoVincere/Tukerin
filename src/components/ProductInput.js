import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { addProduct } from '../utils/data/local-data';

function ProductInput() {
  const [image, setImage] = useState('');
  const [name, handleNameChange] = useInput('');
  const [price, handlePriceChange] = useInput('');
  const [category, handleCategoryChange] = useInput('');
  const [description, handleDescriptionChange] = useInput('');

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  const navigate = useNavigate();

  const onAddProductHandler = (product) => {
    addProduct(product);
    navigate('/');
  };

  return (
    <form className="add-product__input" onSubmit={onAddProductHandler}>
      <div className="add-product__input-image" onChange={handleImage}> + </div>
      <label htmlFor="name">Nama</label>
      <br />
      <input
        className="add-product__input-text"
        placeholder="Nama Barang"
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <label htmlFor="price">Harga</label>
      <br />
      <input
        className="add-product__input-text"
        placeholder="Rp."
        value={price}
        onChange={handlePriceChange}
      />
      <br />
      <label htmlFor="category">Kategori</label>
      <br />
      <select className="add-product__input-select" value={category} onChange={handleCategoryChange}>
        <option value=""> --Pilih Kategori-- </option>
        <option value="elektronik">Elektronik</option>
        <option value="fashion wanita">Fashion Wanita</option>
        <option value="fashion pria">Fashion Pria</option>
        <option value="fashion anak">Fashion Anak</option>
        <option value="makanan & minuman">Makanan dan Minuman</option>
        <option value="kecantikan">Kecantikan</option>
        <option value="Hobi">Hobi</option>
      </select>
      <br />
      <label htmlFor="description">Deskripsi</label>
      <br />
      <input
        className="add-product__input-description"
        placeholder="Jelaskan kondisi barang anda"
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />
      <input className="add-product__input-checkbox" type="checkbox" />
      {' '}
      Saya bertanggung jawab atas keaslian barang
      <br />
      <button type="submit" className="add-product__action">Tambahkan</button>
    </form>
  );
}

export default ProductInput;
