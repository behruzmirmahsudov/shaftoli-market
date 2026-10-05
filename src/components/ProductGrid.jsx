import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ title, products, onAdd }) {
    if (products.length === 0) {
        return (
            <section className="grid-section">
                <h2>{title}</h2>
                <p className="empty">😔 Mahsulot topilmadi</p>
            </section>
        )
    }

    return (
        <section className="grid-section">
            <h2>{title}</h2>
            <div className="grid">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} onAdd={onAdd} />
                ))}
            </div>
        </section>
    )
}