import React from 'react'
import { useRef } from 'react'
import {db, storage} from '../components/search/firebase/db'
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { Storage } from '../components/search/firebase/db';


export const AddProduct = () => {
    const name = useRef(null);
    const price = useRef(null);
    const description = useRef(null);
    const seller = useRef(null);
    let image_url = null;
    const handleSubmit = (e) => {
        if(name.current.value === "" || price.current.value === "" || description.current.value === "" || seller.current.value === ""){
            alert("Please fill all the fields");
            return;
        }
        if(image_url === null){
            alert("Please upload an image");
            return;
        }
        if(price.current.value < 0){
            alert("Price cannot be negative");
            return;
        }
        if(isNaN(price.current.value)){
            alert("Price must be a number");
            return;
        }
        if(seller.current.value === "admin"){
            alert("Seller cannot be admin");
            return;
        }
        
        e.preventDefault();
        const product = {
            name: name.current.value,
            price: price.current.value,
            description: description.current.value,
            seller: seller.current.value,
            image:image_url
        }
        addDoc(collection(db, "products"), product)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Product added successfully!");
            name.current.value = "";
            price.current.value = "";
            description.current.value = "";
            seller.current.value = "";
            image_url = null;
        }
        )
        .catch((error) => {
            console.error("Error adding document: ", error);
            alert("Failed to add product. Please try again.");
        }
        );

        

    }
    const handleImage = (e) => {
        if(seller.current.value === "admin"){
            alert("Seller cannot be admin");
            return;
        }
        e.preventDefault();
        const image = e.target.files[0];
        console.log(image);
        const imageRef = ref(storage, `images/${seller.current.value}+${name.current.value}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(snapshot.ref).then((url) => {
                image_url = url;
            })
          });
    }
  return (

        /*<div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            margin: '0 auto', 
            maxWidth: '400px', 
            padding: '20px', 
            border: '2px solid #ccc', 
            borderRadius: '5px', 
            backgroundColor: '#f9f9f9' 
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                Name:
                <input type="text" name="name" ref={name} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                Price:
                <input type="text" name="price" ref={price} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                Description:
                <textarea name="description" ref={description} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                Seller:
                <textarea name="seller" ref={seller} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }} for="image">
                Select image:
                <input type="file" id="image" name="image" accept="image/*" onChange={handleImage} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
              </label>
              <button type="submit" style={{ padding: '8px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Add Product</button>
            </form>
          </div>*/
          <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            margin: '0 auto', 
            maxWidth: '400px', 
            padding: '20px', 
            border: '2px solid #ccc', 
            borderRadius: '5px', 
           
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 style={{marginBottom: '20px'}}>Add Product</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <span style={{fontWeight: 'bold'}}>Name:</span>
              <input type="text" name="name" ref={name} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <span style={{fontWeight: 'bold'}}>Price:</span>
              <input type="text" name="price" ref={price} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <span style={{fontWeight: 'bold'}}>Description:</span>
              <textarea name="description" ref={description} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <span style={{fontWeight: 'bold'}}>Seller:</span>
              <textarea name="seller" ref={seller} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }} for="image">
              <span style={{fontWeight: 'bold'}}>Select image:</span>
              <input type="file" id="image" name="image" accept="image/*" onChange={handleImage} style={{ padding: '8px', border: '1px solid #ccc', marginLeft: '10px' }} />
            </label>
              <button type="submit" style={{ 
                padding: '10px 20px', 
                backgroundColor: '#4CAF50', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '5px', 
                marginTop: '20px', 
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}>
                  Add Product
              </button>
            </form>
          </div>
          
  )
}

export default AddProduct
