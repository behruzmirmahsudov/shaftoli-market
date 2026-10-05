import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div>
                    <h3>🍑 Shaftoli Market</h3>
                    <p>O'zbekistondagi eng qulay onlayn bozor</p>
                </div>
                <div>
                    <h4>Kompaniya</h4>
                    <p>Biz haqimizda</p>
                    <p>Vakansiyalar</p>
                    <p>Kontaktlar</p>
                </div>
                <div>
                    <h4>Yordam</h4>
                    <p>Yetkazib berish</p>
                    <p>To'lov</p>
                    <p>Qaytarish</p>
                </div>
                <div>
                    <h4>Aloqa</h4>
                    <p>+998 71 200 00 00</p>
                    <p>info@shaftoli.uz</p>
                </div>
            </div>
            <div className="footer-bottom">
                © 2026 Shaftoli Market. Barcha huquqlar himoyalangan.
            </div>
        </footer>
    )
}