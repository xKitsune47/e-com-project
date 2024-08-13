import { products } from "../App";

export function Main({ search, categorySearch, onAddToCart }) {
    if (!search && !categorySearch) {
        return <Landing />;
    }

    return (
        <Products
            search={search}
            categorySearch={categorySearch}
            onAddToCart={onAddToCart}
        />
    );
}
function Landing() {
    return (
        <div className="body landing">
            <h2>React development practice</h2>
            <p>Dolor sit amet, consectetur adipiscing elit</p>
            <p>
                Mauris finibus libero et nulla posuere, at porttitor augue
                rutrum. Nunc quis efficitur magna. Vestibulum a eros feugiat,
                vestibulum sapien eget, scelerisque felis. Maecenas libero dui,
                tincidunt quis bibendum at, porttitor vitae mauris. Vestibulum
                ac augue nulla. Cras sed facilisis dolor. Nunc accumsan
                imperdiet erat, fringilla elementum justo gravida at. Phasellus
                placerat dolor quis diam dignissim, quis sagittis magna
                eleifend.
            </p>
            <p>
                Sed tincidunt enim ut dictum feugiat. Pellentesque elementum
                libero nisi, in lacinia nisi aliquam nec. Quisque augue ante,
                consequat vel auctor id, efficitur ut nisl. Proin lectus nulla,
                imperdiet vitae tempus id, elementum nec purus. Vivamus
                ullamcorper vestibulum nunc, varius imperdiet nibh porta sit
                amet. Maecenas convallis risus ornare, porta turpis id, pharetra
                dolor. Nulla condimentum elementum blandit.
            </p>
        </div>
    );
}
function Products({ search, categorySearch, onAddToCart }) {
    if (!products) {
        return (
            <div className="body">
                <l-tail-chase
                    size="70"
                    speed="1.75"
                    color="black"></l-tail-chase>
            </div>
        );
    }

    if (categorySearch === "" || categorySearch === "Browse all") {
        return (
            <div className="body products">
                {products.map((product) => {
                    return (
                        product.title.toLowerCase().includes(search) && (
                            <ProductCard
                                product={product}
                                onAddToCart={onAddToCart}
                                key={product.id}></ProductCard>
                        )
                    );
                })}
            </div>
        );
    }

    if (categorySearch !== "Browse all") {
        return (
            <div className="body products">
                {products
                    .filter(
                        (product) =>
                            product.category === categorySearch.toLowerCase()
                    )
                    .map((product) => {
                        return (
                            product.title.toLowerCase().includes(search) && (
                                <ProductCard
                                    product={product}
                                    onAddToCart={onAddToCart}
                                    key={product.id}></ProductCard>
                            )
                        );
                    })}
            </div>
        );
    }
}
function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product">
            <img
                src={product.image}
                alt={product.id}
                className="product-height"
            />
            <p className="product-height">{product.title}</p>
            <span className="product-height"></span>
            <span className="price-addcart product-height">
                <span>{product.price} €</span>
                <span>
                    <button onClick={() => onAddToCart(product.id)}>
                        <i className="bi bi-bag-plus"></i>
                    </button>
                </span>
            </span>
        </div>
    );
}
