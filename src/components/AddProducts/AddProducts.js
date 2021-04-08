import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageUrl: imageUrl,
      price: data.price,
    };
    const url = `https://protected-lowlands-44213.herokuapp.com/addProducts`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "818c5f2ad5b727131bc78699e6bfd66e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 style={{ color: "Black" }}>Add your Product Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ color: "Black" }}>Product Name</h3>
        <input
          style={{ color: "gray" }}
          name='name'
          defaultValue='product name'
          ref={register}
        />
        <br />
        <h3 style={{ color: "Black" }}>Add Price</h3>
        <input style={{ color: "gray" }} name='price' ref={register} />
        <br />
        <input
          name='exampleRequired'
          type='file'
          onChange={handleImageUpload}
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddProducts;
