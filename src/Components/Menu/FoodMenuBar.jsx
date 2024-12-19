import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useApiData } from '../Context';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import PopularMenu from './PopularMenu';

const FoodMenuBar = () => {
    const { data } = useApiData();
    const menuCategories = data?.menu_sub_categories || [];
    const menuCategoryItems = data?.menus || [];

    const [activeCategory, setActiveCategory] = useState("all");
    console.log(activeCategory);

    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 6;
    const filteredItems = menuCategoryItems?.filter((item)=>activeCategory === 'all' ? "All items" : item.manu_subcategory_id === activeCategory );
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 1, menuCategories.length - itemsToShow));
    };

    const handlePrevious = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (menuCategories.length > 0 && !activeCategory) {
            setActiveCategory(menuCategories[0].id);
        }
    }, [menuCategories]);

    return (
        <>
            <section className="food-menubar">
                <div className="">
                    <div className="d-flex justify-content-around mt-1">
                        <div className="search">
                            <form action="">
                                <div className="button"><FaSearch /></div>
                                <input type="text" name="" placeholder="Search in menu" />
                            </form>
                        </div>
                        <div className="tabs-content">
                            <button onClick={handlePrevious} disabled={startIndex === 0} className="btn btn-prev ">
                                <GrFormPrevious />
                            </button>
                            <ul className="tabs-items ms-0 ps-0 mb-0 me-3 d-flex">
                                <li className="me-3">
                                    <span
                                        onClick={() => {
                                            handleCategoryChange("all");
                                        }}
                                        className={
                                            activeCategory === "all" ? "active-span" : ""
                                        }
                                    >
                                        All
                                    </span>
                                </li>
                                {menuCategories.slice(startIndex, startIndex + itemsToShow).map((category) => (
                                    <li key={category.id} className="me-3">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleCategoryChange(category.id);
                                            }}
                                            className={
                                                activeCategory === category.id ? "active-span" : ""
                                            }
                                        >
                                            {category.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <span
                                onClick={handleNext}
                                disabled={startIndex >= menuCategories.length - itemsToShow}
                                className="btn btn-next menu-carousal-btn"
                            >
                                <MdNavigateNext />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <PopularMenu menuCategories={menuCategories} selectedSubcate={activeCategory} filteredItems={filteredItems} />
        </>
    );
};

export default FoodMenuBar;
