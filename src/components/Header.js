export function Header({
    onSearchChange,
    search,
    cart,
    onDeleteFromCart,
    onCategorySearch,
}) {
    function shadowFunc(shadowValue) {
        alert("not gonna work");
    }

    return (
        <div className="header">
            <h1>The Grand Bazaar</h1>
            <input
                type="text"
                value={search}
                onChange={onSearchChange}
                placeholder="Search product"
                className="header-search"></input>
            <DropdownMenu handleClick={onCategorySearch}>
                {{
                    icon: <i className="bi bi-list"></i>,
                    buttons: [
                        "Browse all",
                        "Men's clothing",
                        "Women's clothing",
                        "Jewelery",
                        "Electronics",
                    ],
                    key: "cat",
                }}
            </DropdownMenu>
            <DropdownMenu handleClick={shadowFunc}>
                {{
                    icon: <i className="bi bi-person-fill"></i>,
                    buttons: ["Log in", "Sign up"],
                    key: "acc",
                }}
            </DropdownMenu>
            <ShoppingCart cart={cart} onDeleteFromCart={onDeleteFromCart} />
        </div>
    );
}
function DropdownMenu({ children, handleClick }) {
    return (
        <div className="dropdown-menu" key={children.key}>
            {children.icon}
            <div className="dropdown-content" key={children.key}>
                {children.buttons.map((button) => {
                    return (
                        <>
                            <button
                                key={button}
                                onClick={() => handleClick(button)}>
                                {button}
                            </button>
                            <br />
                        </>
                    );
                })}
            </div>
        </div>
    );
}
function ShoppingCart({ cart, onDeleteFromCart }) {
    let total = 0;
    cart.map((product) => {
        total += product.price;
    });

    return (
        <div className="dropdown-menu">
            <i className="bi bi-basket3-fill"></i>

            {cart.length === 0 ? (
                <div className="dropdown-content">No items in cart yet</div>
            ) : (
                <div className="dropdown-content render-cart">
                    {cart.map((prod, i) => (
                        <CartProduct
                            item={prod}
                            listIndex={i}
                            key={i}
                            onDeleteFromCart={onDeleteFromCart}
                        />
                    ))}
                    <h3>Total: {total.toFixed(2)} €</h3>
                </div>
            )}
        </div>
    );
}
function CartProduct({ item, listIndex, onDeleteFromCart }) {
    return (
        <p className="cart-product">
            <span>{item.title}</span>
            <span>
                <b>{item.price} €</b>
                <br />
                <button onClick={() => onDeleteFromCart(listIndex)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
            </span>
        </p>
    );
}
