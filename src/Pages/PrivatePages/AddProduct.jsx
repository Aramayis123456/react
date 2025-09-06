import React, {useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import Input from "../../Components/UI/Input.jsx";
import {productNameValidation, productPriceValidation} from "../../Utils/validation.js";
import ImageUploading from 'react-images-uploading';
import "../../index.css"
import {MdDelete} from "react-icons/md";
import {GrUpdate} from "react-icons/gr";
import {FaFileUpload} from "react-icons/fa";
import {CiCircleRemove} from "react-icons/ci";
const AddProduct = () => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList, addUpdateIndex);
        // console.log(images)
        setImages(imageList);
    };

    const addProduct = async (data, e) => {
        const imageData = images.map((img) => img.data_url);
        console.log(imageData)
        e.preventDefault();
        const {name, price, description} = data
        console.log(data)
        console.log(name)
        const newProduct = {
            name,
            price,
            description,
            images: imageData

        }
        try{
            const response = await axios.post("http://localhost:4000/products" , newProduct);

            alert('added')
            console.log(response);
        return response.data;
        }catch(error){
            console.log(error.message);
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({mode: 'onBlur'});




    return (
        <div
            className="min-h-[80vh] flex justify-center  items-center"
        >

            <form action="" onSubmit={handleSubmit(addProduct)}

                  className="
                  w-[50%]
                  h-[78vh]
                  bg-gray-600
                  border-[3px] broder-black
                  rounded-2xl
                  flex justify-center  items-center flex-col
                  gap-2
                  "
            >
                <h1>ADD PRODUCT</h1>
                <Input
                    register={register}
                    name='name'
                    placeholder='Name'
                    validation={productNameValidation}
                    error={errors.name && errors.name.message}
                />
                <Input
                    register={register}
                    name='price'
                    placeholder='Price'
                    validation={productPriceValidation}
                    error={errors.price && errors.price.message}
                />
                <Input
                    register={register}
                    name='description'
                    placeholder='Description'
                    // validation={productNameValidation}
                    // error={errors.name && errors.name.message}
                />


                <div
                    className="w-[95%] h-[50%]"
                >
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"

                    >
                        {({
                              imageList,
                              onImageUpload,
                              onImageRemoveAll,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps,
                          }) => (
                            // write your building UI
                            <div className="w-[90%] h-[100%] bg-red-500 p-4 flex flex-col gap-2 justify-center">
                                <div className='flex gap-2'>

                                    <FaFileUpload
                                        className='cursor-pointer'
                                        size={35}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    />

                                    &nbsp;

                                    <CiCircleRemove
                                        className='cursor-pointer'

                                        size={35}

                                        onClick={onImageRemoveAll}
                                    />


                                </div>
                                <div
                                    className="
                                    w-full h-[90%] bg-blue-500
                                    flex  gap-2 justify-center flex-wrap items-center overflow-y-auto"
                                >
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt=""
                                                className='w-[100px] h-[100px]'/>
                                            <div className="flex">

                                                <GrUpdate onClick={() => onImageUpdate(index)}/>
                                                <MdDelete onClick={() => onImageRemove(index)} />

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </ImageUploading>
                </div>


                <button
                    disabled={!isValid}
                    type={"submit"}>Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;