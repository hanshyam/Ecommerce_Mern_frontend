import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
const ShippingPolicy = () => {
  return (
    <>
        <Meta title={"Shipping-Policy"} />
         <BreadCrumb title="Shipping-Policy" />
         <Container class1="privary-policy-wrapper home-wrapper-2 py-5">
         <div className="row">
                    <div className="col-12">
                        <h2 className='text-center mb-5'>Shipping Policy</h2>
                        <div className='d-flex flex-column gap-30'>
                            <div className='d-flex flex-column gap-10'>
                                <h5>The standard Lorem Ipsum passage</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
                            </div>
                            <div className='d-flex flex-column gap-15'>
                                <h5>The standard Lorem Ipsum passage</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
                            </div>
                            <div className='d-flex flex-column gap-15'>
                                <h5>The standard Lorem Ipsum passage</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
                            </div>
                            <div className='d-flex flex-column gap-15'>
                                <h5>The standard Lorem Ipsum passage</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
         </Container>
    </>
  )
}

export default ShippingPolicy
