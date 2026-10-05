import './ProductCard.css'

export default function ProductCard({ product, onAdd }) {
    const discount =
        product.oldPrice > product.price
            ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
            : 0

    return (
        <div className="card">
            <div className="card-img">
                <img src={product.image} alt={product.title} loading="lazy" />
                <button className="fav">🤍</button>
                {discount > 0 && <span className="discount">-{discount}%</span>}
            </div>

            <div className="card-body">
                <div className="price-row">
                    <span className="price">{product.price.toLocaleString()} so'm</span>
                    {product.oldPrice > product.price && (
                        <span className="old">{product.oldPrice.toLocaleString()}</span>
                    )}
                </div>

                <p className="title">{product.title}</p>

                <div className="rating">
                    ⭐ {product.rating} · {product.reviews} sharh
                </div>

                <button className="buy" onClick={() => onAdd(product)}>
                    🛒 Savatga qo'shish
                </button>
            </div>
        </div>
    )
}