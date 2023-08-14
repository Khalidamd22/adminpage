import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import ProductTable from "./ProductTable";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function ProductsContent() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const handleClose = () => setShow(false);
  useEffect(() => {
    handleShow();
  }, []);
  return (
    <>
      <div className="flex flex-col pt-4 pl-7 pr-7">
        <div className="relative">
          <div className="flex flex-row mb-3">
            <Typography className="flex text-opacity-70 font-bold text-2xl text-black font-lato self-center">
              Product List
            </Typography>
            <div className="grow" />
            <Button className="pl-4 pr-4 pt-1 pb-1 bg-green-600 rounded-full shadow-md hover:shadow-gray-400">
              All Type
            </Button>
            <Button
              onClick={handleShow}
              className="pl-5 pr-5 pt-1 pb-1 bg-green-600 rounded-full shadow-md hover:shadow-gray-400 ml-2 mr-4"
            >
              Add
            </Button>
          </div>
          {show && (
            <div className="absolute mr-0 right-0 h-[268px] w-[336px] bg-white rounded-lg shadow-xl outline-none z-10 mt-[7px] p-4">
              <div className="flex justify-between mb-5">
                <div>
                  <h2>Add</h2>
                </div>
                <div className="flex gap-x-4">
                  <img src="/icon_hapus.svg" alt="" />
                  <img
                    src="/icon_close.svg"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => setShow(false)}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <div>
                    <p>Image</p>
                    <div className="flex">
                      <img src="/assets_1.png" width={80} height={80} />
                      <div className="bg-white w-14 h-14 mt-1">
                        <img
                          src="/Group.svg"
                          className="text-center justify-center items-center my-5 mx-5"
                        />
                      </div>
                    </div>
                    <div className="gap-20">
                      <div className="flex gap-16">
                        <p className="text-gray-500 font-bold">Type</p>
                        <p>Type 1</p>
                      </div>
                      <div className="flex gap-16">
                        <p className="text-gray-500 font-bold">Price</p>
                        <p className="">Rp. 25.000</p>
                      </div>
                      <div className="flex gap-16">
                        <p className="text-gray-500 font-bold">Stock</p>
                        <p>80</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2"></div>
                </div>
                <div>
                  <div className="gap-5">
                    <div>
                      <p>Product Name</p>
                      <p>Verdant Bloom Box</p>
                    </div>
                    <div className="mt-3">
                      <p>Shopee link</p>
                      <p>
                        <input
                          placeholder="link"
                          classname="w-10 h-7"
                          rounded-4
                        />
                      </p>
                      <div>
                        <p>Tokopedia Link</p>
                        <p>
                          <input
                            placeholder="link"
                            classname="w-10 h-7"
                            rounded-4
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className="h-px mb-3 bg-gray-700 border-0 dark:bg-gray-700"></hr>
        <div>
          <ProductTable />
        </div>
      </div>
      {/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Obat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Kode Obat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kode Obat"
                // onChange={(e) => setCreateKodeObat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Obat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Nama Obat"
                // onChange={(e) => setCreateNamaObat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Sediaan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sediaan"
                // onChange={(e) => setCreateSediaan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Stok</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Stok"
                // onChange={(e) => setCreateStok(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
