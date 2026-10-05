import { useState, useMemo } from 'react'
import Header from './components/Header'
import CategoryBar from './components/CategoryBar'
import Banner from './components/Banner'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { products } from './data/products'
import './App.css'

export default function App() {
    const [cart, setCart] = useState([])
    const [search, setSearch] = useState('')
    const [activeCat, setActiveCat] = useState(0)

    const handleAdd = (product) => {
        setCart((prev) => [...prev, product])
        alert(`✅ "${product.title}" savatga qo'shildi!`)
    }

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchCat = activeCat === 0 || p.category === activeCat
            const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
            return matchCat && matchSearch
        })
    }, [activeCat, search])

    return (
        <>
            <Header cartCount={cart.length} search={search} setSearch={setSearch} />
            <CategoryBar active={activeCat} setActive={setActiveCat} />
            <Banner />

            <ProductGrid
                title={
                    search
                        ? `🔍 "${search}" bo'yicha natijalar`
                        : '🔥 Barcha mahsulotlar'
                }
                products={filtered}
                onAdd={handleAdd}
            />

            <Footer />
        </>
    )
}