import { TextInput } from "@mantine/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { NativeSelect } from "@mantine/core";
import { useGetAllProductsQuery } from "../redux/api/productsApi";
import Product from "./Product";

const NavbarUse = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const { data } = useGetAllProductsQuery();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [cart, setCart] = useState(false);
  console.log(value);

  useEffect(() => {
    setProducts(data);
    setFilterProducts(data);
  }, [data]);

  useEffect(() => {
    const filterData = products.filter((item) => {
      if (value === "All Categories") {
        return item;
      } else {
        return item.category === value;
      }
    });
    setFilterProducts(filterData);
  }, [value]);

  return (
    <div>
      <div className=" w-full p-5">
        <div className=" flex justify-between items-center shadow-lg p-5 rounded-lg border">
          <div>myshop</div>
          <div className=" flex gap-5">
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="md"
              placeholder="search"
            />
            <NativeSelect
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              data={[
                "All Categories",
                "electronics",
                "jewelery",
                "men's clothing",
                `women's clothing`,
              ]}
              size="md"
              withAsterisk
            />
            <button
              onClick={() => setCart(!cart)}
              className=" bg-blue-500 text-white px-5 py-1"
            >
              cart
            </button>
          </div>
        </div>

        <div className=" flex flex-wrap gap-10 justify-center mt-20">
          {filterProducts
            ?.filter((item) => {
              if (search === "") {
                return item;
              } else {
                return item.title.toLowerCase().includes(search);
              }
            })
            ?.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
        </div>
      </div>
      <div
        className={
          cart
            ? " z-10 bg-black w-[30%] h-screen absolute top-0 right-0 duration-300"
            : " z-10 bg-black w-[30%] h-screen absolute top-0 right-[-800px] duration-300"
        }
      >
        <h1 className=" text-white" onClick={() => setCart(!cart)}>
          hello
        </h1>
      </div>
    </div>
  );
};

export default NavbarUse;
