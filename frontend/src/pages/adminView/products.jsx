import CommonForm from "@/components/common/form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config/config";
import React, { Fragment, useEffect, useState } from "react";
import ProductUploadImage from "../adminView/imageUpload";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchAlllProducts } from "@/store/admin/productSlice";
import { toast } from "sonner"



const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const Adminproducts = () => {
  const [openCreatesProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const {productList} =  useSelector(state => state.adminProducts)
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(addNewProduct({
      ...formData,
      image : uploadedImageUrl
    })).then((data) => {
      // console.log(data, 'super')
      if(data?.payload?.success){
        dispatch(fetchAlllProducts());
        setOpenCreateProductDialog(false)
        setImageFile(null);
        setFormData(initialFormData);
        toast('product Added SuccessFully');
        
      }
    })
  }

  useEffect(() => {
    dispatch(fetchAlllProducts())
  },[dispatch]);

  // console.log(productList, 'list Products')

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <button
          className=" !bg-black p-2 rounded-md"
          onClick={() => setOpenCreateProductDialog(true)}
        >
          Add New Product
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreatesProductDialog}
        onOpenChange={() => {
          setOpenCreateProductDialog(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <div className="p-6">
          <ProductUploadImage
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoading={setImageLoading}
            imageLoading={imageLoading}
          />
            <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              buttonText="Add"
              onSubmit={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default Adminproducts;
