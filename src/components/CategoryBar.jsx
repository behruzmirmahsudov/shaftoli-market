import { categories } from '../data/products'
import './CategoryBar.css'

export default function CategoryBar({ active, setActive }) {
    return (
        <div className="cat-bar">
            <div className="cat-inner">
                {categories.map((c) => (
                    <button
                        key={c.id}
                        className={`cat-item ${active === c.id ? 'active' : ''}`}
                        onClick={() => setActive(c.id)}
                    >
                        <span>{c.icon}</span> {c.name}
                    </button>
                ))}
            </div>
        </div>
    )
}