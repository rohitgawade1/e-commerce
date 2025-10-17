import { useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {
    const [IsTrue, setTrue] = useState(false)

    const handleFilter = () => {
        setTrue(!IsTrue);
        console.log(IsTrue)
    }

    return (
        <div className="homepage-container">
            <div className="main-filter-container filtered">
                <div className="filter-container">
                    <h5 onClick={handleFilter}>Filter</h5>
                    {/* <h5>Clear</h5> */}
                </div>
                <div className={IsTrue ? "sortcategory-main-container" : 'displaynone'}>
                    <div className="sort-container">
                        <h5>Sort By Price</h5>
                        <hr />
                        <div className="low-high">
                            <input
                                name="sorting"
                                type="radio"
                            // onChange={handleAscendingSort}
                            />
                            <span>Low to High</span>
                        </div>

                        <div className="high-low">
                            <input
                                name="sorting"
                                type="radio"
                            // onChange={handleDescendingSort}
                            />
                            <span>High to Low</span>
                        </div>
                    </div>
                    <div className="category-container">
                        <div>
                            <h5 className="category-heading">Category</h5>
                            <hr />
                        </div>
                        <div className="all">
                            <input
                                name="category"
                                type="radio"
                                onChange={() => {
                                    const id = "";
                                    // handleAllCategory(id);
                                }}
                            />
                            <span>All</span>
                        </div>
                        <div className="men">
                            <input
                                name="category"
                                type="radio"
                                onChange={() => {
                                    const id = "category/men's clothing";
                                    // handleAllCategory(id);
                                }}
                            />
                            <span>Men</span>
                        </div>
                        <div className="women">
                            <input
                                name="category"
                                type="radio"
                                onChange={() => {
                                    const id = "category/women's clothing";
                                    // handleAllCategory(id);
                                }}
                            />
                            <span>Women</span>
                        </div>
                        <div className="jewelery">
                            <input
                                name="category"
                                type="radio"
                                onChange={() => {
                                    const id = "category/jewelery";
                                    // handleAllCategory(id);
                                }}
                            />
                            <span>Jewelery</span>
                        </div>
                        <div className="electronics">
                            <input
                                name="category"
                                type="radio"
                                onChange={() => {
                                    const id = "category/electronics";
                                    // handleAllCategory(id);
                                }}
                            />
                            <span>Electronics</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                {/* {mainData.map((eachCartdata) => {
            return <Card key={eachCartdata.id} eachCartdata={eachCartdata} />;
          })} */}
            </div>
        </div>
    )
}

export default Sidebar