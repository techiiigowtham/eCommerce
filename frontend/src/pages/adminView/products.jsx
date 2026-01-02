import CommonForm from '@/components/common/form';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config/config';
import React, { Fragment, useState } from 'react'



const initialFormData = {
  image : null,
  title : '',
  description : '',
  category : '', 
  brand : '',
  price : '',
  salePrice : '',
  totalStock : ''
}

const Adminproducts = () => {
const [openCreatesProductDialog, setOpenCreateProductDialog] = useState(false);
const [formData, setFormData] = useState(initialFormData);


function onSubmit(){}

  return (
   <Fragment>
    <div className='mb-5 w-full flex justify-end'>
      <button className=' !bg-black p-2 rounded-md' onClick={() => setOpenCreateProductDialog(true) }>Add New Product</button>
    </div>
    <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'></div>
    <Sheet open={openCreatesProductDialog} onOpenChange={() => {
      setOpenCreateProductDialog(false)
    }}>
        <SheetContent side='right' className='overflow-auto'>
          <SheetHeader>
          <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <div className='p-6'>
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
  )
}

export default Adminproducts