import { useMemo, useState } from "react";
import {
  FiFilter,
  FiSearch,
  FiSliders,
  FiX,
  FiHeart,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    {
      value: "All",
      label: "सगळे पदार्थ",
    },
    {
      value: "Pickles",
      label: "लोणची",
    },
    {
      value: "Masalas",
      label: "मसाले",
    },
    {
      value: "Papad",
      label: "पापड",
    },
    {
      value: "Chutneys",
      label: "चटण्या",
    },
    {
      value: "Sweets",
      label: "गोड पदार्थ",
    },
    {
      value: "Snacks",
      label: "नाश्ता",
    },
  ];

  /* =========================
     FILTER + SEARCH + SORT
  ========================= */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (category !== "All") {
      result = result.filter(
        (item) => item.category === category
      );
    }

    // Search filter
    if (search.trim()) {
      const value = search.toLowerCase().trim();

      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(value) ||
          item.englishName
            ?.toLowerCase()
            .includes(value) ||
          item.category
            ?.toLowerCase()
            .includes(value) ||
          item.description
            ?.toLowerCase()
            .includes(value)
      );
    }

    // Sort
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  /* =========================
     CATEGORY COUNT
  ========================= */

  const getCount = (value) => {
    if (value === "All") {
      return products.length;
    }

    return products.filter(
      (item) => item.category === value
    ).length;
  };

  /* =========================
     CLEAR FILTERS
  ========================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("featured");
  };

  return (
    <div className="gh-products-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          PRODUCTS SECTION
      ========================= */}

      <section className="gh-products-section">

        <div className="gh-products-container">

          {/* =========================
              TOOLBAR
          ========================= */}

          <div className="gh-products-toolbar">

            {/* Mobile Filter */}

            <button
              type="button"
              className="gh-mobile-filter"
              onClick={() =>
                setShowFilters((prev) => !prev)
              }
            >
              {showFilters ? (
                <FiX />
              ) : (
                <FiSliders />
              )}

              <span>Filters</span>
            </button>

            {/* Search */}

            <div className="gh-search-box">

              <FiSearch />

              <input
                type="text"
                placeholder="Search homemade goodness..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  type="button"
                  className="gh-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}

            </div>

            {/* Sort */}

            <div className="gh-sort-box">

              <span>Sort by</span>

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
              >
                <option value="featured">
                  Featured
                </option>

                <option value="low">
                  Price: Low to High
                </option>

                <option value="high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Highest Rated
                </option>
              </select>

            </div>

          </div>

          {/* =========================
              MOBILE CATEGORY CHIPS
          ========================= */}

          <div className="gh-category-chips">

            {categories.map((item) => (
              <button
                type="button"
                key={item.value}
                className={
                  category === item.value
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory(item.value)
                }
              >
                {item.label}

                <small>
                  {getCount(item.value)}
                </small>
              </button>
            ))}

          </div>

          {/* =========================
              CONTENT
          ========================= */}

          <div className="gh-products-layout">

            {/* =========================
                SIDEBAR
            ========================= */}

            <aside
              className={`gh-products-sidebar ${
                showFilters ? "show" : ""
              }`}
            >

              <div className="gh-sidebar-heading">

                <h3>
                  <FiFilter />
                  Categories
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    setShowFilters(false)
                  }
                  aria-label="Close filters"
                >
                  <FiX />
                </button>

              </div>

              {/* Category List */}

              <div className="gh-category-list">

                {categories.map((item) => (
                  <button
                    type="button"
                    key={item.value}
                    className={
                      category === item.value
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setCategory(item.value);
                      setShowFilters(false);
                    }}
                  >

                    <span>
                      {item.label}
                    </span>

                    <small>
                      {getCount(item.value)}
                    </small>

                  </button>
                ))}

              </div>

              {/* Sidebar Note */}

              <div className="gh-sidebar-note">

                <div className="gh-sidebar-note-icon">
                  <FiHeart />
                </div>

                <div>
                  <strong>
                    प्रेमाने तयार
                  </strong>

                  <p>
                    Fresh ingredients.
                    <br />
                    Handmade with care.
                  </p>
                </div>

              </div>

            </aside>

            {/* =========================
                PRODUCT RESULTS
            ========================= */}

            <div className="gh-products-result">

              {/* Result Heading */}

              <div className="gh-result-heading">

                <div>

                  <span>
                    All Products
                  </span>

                  <h2>
                    घरच्या चवीचे पदार्थ
                  </h2>

                </div>

                <strong>
                  {filteredProducts.length} items
                </strong>

              </div>

              {/* =========================
                  ACTIVE FILTERS
              ========================= */}

              {(search || category !== "All") && (
                <div className="gh-active-filters">

                  {search && (
                    <span>
                      Search: "{search}"

                      <button
                        type="button"
                        onClick={() =>
                          setSearch("")
                        }
                      >
                        <FiX />
                      </button>
                    </span>
                  )}

                  {category !== "All" && (
                    <span>
                      {
                        categories.find(
                          (item) =>
                            item.value === category
                        )?.label
                      }

                      <button
                        type="button"
                        onClick={() =>
                          setCategory("All")
                        }
                      >
                        <FiX />
                      </button>
                    </span>
                  )}

                  <button
                    type="button"
                    className="gh-clear-all"
                    onClick={clearFilters}
                  >
                    Clear All
                  </button>

                </div>
              )}

              {/* =========================
                  PRODUCT GRID
              ========================= */}

              {filteredProducts.length > 0 ? (

                <div className="gh-products-grid">

                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={`${product.id}-${product.name}`}
                      product={product}
                    />
                  ))}

                </div>

              ) : (

                /* =========================
                   EMPTY STATE
                ========================= */

                <div className="gh-empty-products">

                  <div className="gh-empty-icon">
                    <FiSearch />
                  </div>

                  <h2>
                    काही सापडलं नाही...
                  </h2>

                  <p>
                    तुमचा search किंवा category
                    बदलून पुन्हा try करा.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                  >
                    सगळे पदार्थ पाहा
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </div>
  );
}