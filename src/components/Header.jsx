import { useState } from 'react'
import './Header.css'

export default function Header({ cartCount, search, setSearch }) {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="logo">
                    🍑 <span>Shaftoli</span> Market
                </div>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Mahsulotlarni qidirish..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>🔍</button>
                </div>

                <div className="header-actions">
                    <div className="action">
                        <span>👤</span>
                        <small>Kirish</small>
                    </div>
                    <div className="action">
                        <span>❤️</span>
                        <small>Sevimli</small>
                    </div>
                    <div className="action">
                        <span>🛒</span>
                        <small>Savat</small>
                        {cartCount > 0 && <b className="badge">{cartCount}</b>}
                    </div>
                </div>
            </div>
        </header>
    )
}